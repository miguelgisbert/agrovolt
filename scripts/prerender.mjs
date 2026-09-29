import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dist = path.join(root, "dist");
const templatePath = path.join(dist, "index.html");

if (!fs.existsSync(templatePath)) {
  console.error("No se encuentra dist/index.html. Ejecuta antes `vite build`.");
  process.exit(1);
}

const template = fs.readFileSync(templatePath, "utf8");
const START = "<!--SEO_START-->";
const END = "<!--SEO_END-->";

if (!template.includes(START) || !template.includes(END)) {
  console.error("Marcadores SEO_START/SEO_END ausentes en index.html");
  process.exit(1);
}

const serverEntry = path.join(root, "dist-server", "entry-server.js");
const { render } = await import(pathToFileURL(serverEntry).href);

const SITE_URL = "https://agrovolt.es";

const staticRoutes = [
  "/",
  "/app",
  "/blog",
  "/contacto",
  "/faq",
  "/privacidad",
  "/cookies",
  "/404",
];

const blogDir = path.join(root, "content", "blog");
const posts = fs.existsSync(blogDir)
  ? fs
      .readdirSync(blogDir)
      .filter((file) => file.endsWith(".md"))
      .map((file) => {
        const raw = fs.readFileSync(path.join(blogDir, file), "utf8");
        const date = raw.match(/^date:\s*(\S+)/m);
        return { slug: file.replace(/\.md$/, ""), date: date ? date[1] : "" };
      })
  : [];

const routes = [...staticRoutes, ...posts.map((p) => `/blog/${p.slug}`)];

function injectHead(html, head) {
  const start = html.indexOf(START);
  const end = html.indexOf(END);
  return (
    html.slice(0, start + START.length) +
    "\n    " +
    head +
    "\n    " +
    html.slice(end)
  );
}

function outputPathFor(route) {
  if (route === "/") return path.join(dist, "index.html");
  if (route === "/404") return path.join(dist, "404.html");
  return path.join(dist, route, "index.html");
}

let written = 0;
for (const route of routes) {
  const { html, head } = render(route);
  let out = injectHead(template, head);
  out = out.replace('<div id="root"></div>', `<div id="root">${html}</div>`);
  const target = outputPathFor(route);
  fs.mkdirSync(path.dirname(target), { recursive: true });
  fs.writeFileSync(target, out);
  written++;
  console.log(`✓ ${route} → ${path.relative(root, target)}`);
}

const today = new Date().toISOString().slice(0, 10);
const sitemapEntries = [
  { loc: "/", priority: "1.0", freq: "weekly" },
  { loc: "/app/", priority: "0.9", freq: "monthly" },
  { loc: "/contacto/", priority: "0.9", freq: "monthly" },
  { loc: "/faq/", priority: "0.7", freq: "monthly" },
  { loc: "/blog/", priority: "0.8", freq: "weekly" },
  ...posts.map((p) => ({
    loc: `/blog/${p.slug}/`,
    priority: "0.7",
    freq: "monthly",
    lastmod: p.date,
  })),
  { loc: "/privacidad/", priority: "0.3", freq: "yearly" },
  { loc: "/cookies/", priority: "0.3", freq: "yearly" },
];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapEntries
  .map(
    (e) => `  <url>
    <loc>${SITE_URL}${e.loc}</loc>
${e.lastmod ? `    <lastmod>${e.lastmod}</lastmod>\n` : ""}    <changefreq>${e.freq}</changefreq>
    <priority>${e.priority}</priority>
  </url>`
  )
  .join("\n")}
</urlset>
`;
fs.writeFileSync(path.join(dist, "sitemap.xml"), sitemap);
console.log(`✓ sitemap.xml (${sitemapEntries.length} URLs)`);
console.log(`Prerender completado: ${written} páginas.`);
