import { chromium } from "playwright";
import fs from "node:fs";

const BASE = "http://localhost:4173";
const OUT = "/tmp/opencode/shots";
fs.mkdirSync(OUT, { recursive: true });

const browser = await chromium.launch();
const ctx = await browser.newContext({ viewport: { width: 1360, height: 900 } });
const page = await ctx.newPage();

const issues = [];
page.on("console", (m) => {
  const t = m.text();
  if (m.type() === "error") issues.push(`[console.error] ${t}`);
  if (m.type() === "warning" && /hydrat|did not match/i.test(t))
    issues.push(`[hydration] ${t}`);
});
page.on("pageerror", (e) => issues.push(`[pageerror] ${e.message}`));
page.on("requestfailed", (r) => {
  if (
    !/youtube|ggpht|googletagmanager|google-analytics|formspree/i.test(r.url())
  )
    issues.push(`[requestfailed] ${r.url()} ${r.failure()?.errorText}`);
});

const check = (label, cond, extra = "") =>
  console.log(`${cond ? "✓" : "✗ FAIL"} ${label}${cond ? "" : " — " + extra}`);

// --- Home con banner de cookies limpio
await page.goto(BASE + "/", { waitUntil: "load" });
await page.waitForTimeout(1400);
const banner = await page.locator("text=Usamos cookies analíticas").count();
check("banner de cookies visible", banner > 0);
await page.screenshot({ path: `${OUT}/01-home-banner.png`, fullPage: false });
await page.getByRole("button", { name: "Aceptar" }).click();
await page.waitForTimeout(400);
await page.screenshot({ path: `${OUT}/02-home.png`, fullPage: true });

const h1 = await page.locator("h1").first().innerText();
check("h1 del home", h1.includes("Agrovoltaica"), h1);

// --- Navegación SPA
await page.getByRole("link", { name: "La app", exact: true }).click();
await page.waitForTimeout(700);
const spaPath = new URL(page.url()).pathname;
check("navegación SPA a /app", spaPath === "/app" || spaPath === "/app/", spaPath);

// --- Demo interactiva
const kwBefore = await page.locator("text=kW").first().innerText();
await page.getByRole("button", { name: "Protección", exact: true }).click();
await page
  .waitForFunction(
    () => document.querySelector("p.text-3xl")?.textContent?.trim().startsWith("0"),
    { timeout: 7000 }
  )
  .catch(() => {});
const kwText = await page.locator("p.text-3xl").first().innerText();
check("modo Protección pone la producción a 0", kwText.trim().startsWith("0"), kwText);
const angleText = await page.locator("text=°").first().innerText();
check("inclinación a 0°", /0/.test(angleText), angleText);

await page.getByRole("button", { name: "Alertas", exact: true }).click();
await page.waitForTimeout(300);
await page.getByRole("button", { name: "Simular aviso de granizo" }).click();
await page.waitForTimeout(500);
const granizo = await page.locator("div.bg-red-50.border-red-200").count();
check("aviso de granizo añadido", granizo === 1, String(granizo));
await page.getByRole("button", { name: "Retirar aviso de granizo" }).click();
await page.waitForTimeout(400);
const granizoOff = await page.locator("div.bg-red-50.border-red-200").count();
check("segundo clic retira el aviso", granizoOff === 0, String(granizoOff));

// --- La pantalla del mock no debe tener scroll
const fits = [];
for (const t of ["Panel", "Suelo", "Riego", "Alertas"]) {
  await page.getByRole("button", { name: t, exact: true }).click();
  await page.waitForTimeout(250);
  fits.push(
    await page.evaluate(() => {
      const el = [...document.querySelectorAll("div")].find(
        (d) =>
          /h-\[\d+px\]/.test(d.className) &&
          d.className.includes("bg-gradient-to-b") &&
          d.className.includes("overflow-hidden")
      );
      if (!el) return false;
      const inner = el.firstElementChild;
      if (!inner) return false;
      return (
        el.scrollHeight <= el.clientHeight &&
        inner.scrollHeight <= inner.clientHeight
      );
    })
  );
}
check("pantalla del móvil sin scroll en 4 pestañas", fits.every(Boolean), fits.join(","));

await page.getByRole("button", { name: "Riego", exact: true }).click();
await page.waitForTimeout(300);
const riego = await page.locator("text=Riego automático").count();
check("pestaña Riego", riego > 0);
await page.screenshot({ path: `${OUT}/03-app-demo.png`, fullPage: true });

// --- Slider de inclinación
await page.getByRole("button", { name: "Panel", exact: true }).click();
await page.waitForTimeout(200);
const slider = page.locator('input[type="range"]').first();
await slider.evaluate((el) => {
  const setter = Object.getOwnPropertyDescriptor(
    window.HTMLInputElement.prototype,
    "value"
  ).set;
  setter.call(el, "55");
  el.dispatchEvent(new Event("input", { bubbles: true }));
  el.dispatchEvent(new Event("change", { bubbles: true }));
});
await page.waitForTimeout(300);
const angleAfter = await page.locator("text=°").first().innerText();
check("slider cambia el ángulo", /55/.test(angleAfter), angleAfter);

// --- Hidratació de totes les rutes (sense errors de consola)
for (const route of ["/faq/", "/privacidad/", "/cookies/"]) {
  await page.goto(BASE + route, { waitUntil: "load" });
  await page.waitForTimeout(700);
}

// --- Blog + vídeo
await page.goto(BASE + "/blog/", { waitUntil: "load" });
await page.waitForTimeout(500);
const postLink = page.locator('a[href*="campo-solar"]');
check("listado del blog con el primer artículo", (await postLink.count()) > 0);
await page.screenshot({ path: `${OUT}/04-blog.png`, fullPage: true });

await page.goto(BASE + "/blog/el-campo-solar-que-reverdece-un-desierto/", {
  waitUntil: "load",
});
await page.waitForTimeout(600);
const facade = page.locator(".video-facade");
check("facade del vídeo presente", (await facade.count()) > 0);
await facade.click();
await page.waitForTimeout(1200);
const iframe = page.locator(".video-embed iframe");
check("iframe de YouTube tras el clic", (await iframe.count()) > 0);
await page.screenshot({ path: `${OUT}/05-post-video.png`, fullPage: true });

// --- Contacto: formulario + calendario
await page.goto(BASE + "/contacto/", { waitUntil: "load" });
await page.waitForTimeout(2500);
check("formulario de contacto", (await page.locator("form #nombre").count()) > 0);
check(
  "botón de Google Calendar",
  (await page.locator("text=Reserva una videollamada").count()) > 0
);
check("tarjeta de cita con diseño propio", (await page.locator(".meet-card").count()) > 0);
await page.screenshot({ path: `${OUT}/06-contacto.png`, fullPage: true });

// --- 404
await page.goto(BASE + "/404.html", { waitUntil: "load" });
await page.waitForTimeout(500);
check(
  "404 prerenderizada",
  (await page.locator("text=Página no encontrada").count()) > 0
);

// --- Mobile
const mobile = await browser.newContext({
  viewport: { width: 390, height: 844 },
  isMobile: true,
  hasTouch: true,
});
const mp = await mobile.newPage();
mp.on("pageerror", (e) => issues.push(`[mobile pageerror] ${e.message}`));
await mp.goto(BASE + "/", { waitUntil: "load" });
await mp.waitForTimeout(1400);
await mp.screenshot({ path: `${OUT}/07-mobile-home.png`, fullPage: true });

await mp.getByRole("button", { name: "Aceptar" }).click();
await mp.waitForTimeout(300);
await mp.locator("header button[aria-expanded]").click();
await mp.waitForTimeout(300);
await mp.mouse.click(200, 700);
await mp.waitForTimeout(400);
const menuClosed =
  (await mp.locator("header button[aria-expanded]").getAttribute("aria-expanded")) === "false";
check("menú móvil se cierra al pulsar fuera", menuClosed);
await mp.goto(BASE + "/app/", { waitUntil: "load" });
await mp.waitForTimeout(900);
await mp.screenshot({ path: `${OUT}/08-mobile-app.png`, fullPage: true });

console.log("\n--- Problemas de consola/red ---");
console.log(issues.length ? issues.join("\n") : "(ninguno)");

await browser.close();
