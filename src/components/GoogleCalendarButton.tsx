import { useEffect, useRef } from "react";
import { CALENDAR } from "../data/site";
import { track } from "../lib/analytics";

declare global {
  interface Window {
    calendar?: {
      schedulingButton: {
        load: (options: {
          url: string;
          color: string;
          label: string;
          target: HTMLElement;
        }) => void;
      };
    };
  }
}

const CSS_HREF =
  "https://calendar.google.com/calendar/scheduling-button-script.css";
const SCRIPT_SRC =
  "https://calendar.google.com/calendar/scheduling-button-script.js";
const APPOINTMENTS_SRC = "/calendar/appointments/";

/** El overlay de Google obre l'agenda amb el fons transparent: el pintem de blanc. */
function paintWhite() {
  document.querySelectorAll<HTMLIFrameElement>("iframe").forEach((frame) => {
    if (!frame.src.includes(APPOINTMENTS_SRC)) return;
    frame.classList.add("agrovolt-booking-frame");
    if (frame.dataset.bgWhite !== "1") {
      frame.dataset.bgWhite = "1";
      frame.style.backgroundColor = "#ffffff";
      frame.style.background = "#ffffff";
    }
    let node: HTMLElement | null = frame.parentElement;
    while (node && node !== document.body) {
      if (window.getComputedStyle(node).position === "fixed") {
        node.classList.add("agrovolt-booking-overlay");
        node.style.backgroundColor = "#ffffff";
        // Google mostra "Tanca"/"Cerrar"/"Close" segons l'idioma del navegador:
        // deixem només la creu, amb etiqueta accessible en castellà.
        node.querySelectorAll("button").forEach((btn) => {
          btn.classList.add("agrovolt-booking-close");
          Array.from(btn.children).forEach((child) => {
            const cs = window.getComputedStyle(child);
            const isIcon =
              /material-icons/i.test(child.className) ||
              /material icons/i.test(cs.fontFamily);
            if (!isIcon && (child.textContent || "").trim()) {
              (child as HTMLElement).style.display = "none";
            }
          });
          btn.setAttribute("aria-label", "Cerrar");
        });
        break;
      }
      node = node.parentElement;
    }
  });
}

export default function GoogleCalendarButton() {
  const targetRef = useRef<HTMLSpanElement>(null);
  const loaded = useRef(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const mount = () => {
      if (loaded.current || !targetRef.current || !window.calendar) return;
      loaded.current = true;
      window.calendar.schedulingButton.load({
        url: CALENDAR.url,
        color: CALENDAR.color,
        label: CALENDAR.label,
        target: targetRef.current!,
      });
      track("cta_click", { location: "contacto", cta: "calendar" });
    };

    if (!document.querySelector(`link[href="${CSS_HREF}"]`)) {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = CSS_HREF;
      document.head.appendChild(link);
    }

    let script = document.querySelector<HTMLScriptElement>(
      `script[src="${SCRIPT_SRC}"]`
    );
    if (!script) {
      script = document.createElement("script");
      script.src = SCRIPT_SRC;
      script.async = true;
      document.head.appendChild(script);
      script.addEventListener("load", mount);
    } else {
      mount();
    }

    const observer = new MutationObserver(paintWhite);
    observer.observe(document.body, { childList: true, subtree: true });
    paintWhite();

    return () => {
      observer.disconnect();
      script?.removeEventListener("load", mount);
    };
  }, []);

  return (
    <span
      ref={targetRef}
      className="google-calendar-target"
      aria-label={CALENDAR.label}
    />
  );
}
