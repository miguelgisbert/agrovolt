import { GA_ID } from "../data/site";

const CONSENT_KEY = "agrovolt_cookie_consent";
let initialized = false;

export type Consent = "granted" | "denied";

export function getConsent(): Consent | null {
  if (typeof window === "undefined") return null;
  const value = window.localStorage.getItem(CONSENT_KEY);
  return value === "granted" || value === "denied" ? value : null;
}

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

function loadGaScript() {
  if (document.getElementById("ga4-script")) return;
  const script = document.createElement("script");
  script.id = "ga4-script";
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  document.head.appendChild(script);
}

export function initAnalytics() {
  if (typeof window === "undefined") return;
  const consent = getConsent();
  if (consent !== "granted") return;

  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag(...args: unknown[]) {
    window.dataLayer!.push(args);
  };
  window.gtag("consent", "default", {
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
    analytics_storage: "granted",
  });
  window.gtag("js", new Date());
  window.gtag("config", GA_ID, { send_page_view: false });
  loadGaScript();
  initialized = true;
  track("page_view", { page_path: window.location.pathname });
}

export function setConsent(consent: Consent) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(CONSENT_KEY, consent);
  if (consent === "granted") {
    if (!initialized) initAnalytics();
  } else if (window.gtag) {
    window.gtag("consent", "update", { analytics_storage: "denied" });
  }
}

export function track(event: string, params?: Record<string, unknown>) {
  if (typeof window === "undefined" || getConsent() !== "granted") return;
  if (window.gtag) window.gtag("event", event, params);
  else window.dataLayer = window.dataLayer || [];
}
