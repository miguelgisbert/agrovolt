import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Google Analytics configuration
export const GA_TRACKING_ID = "G-38T1ZSFVPX";

// Extensión del tipo Window para incluir dataLayer y gtag
declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

// Función para inicializar Google Analytics
export const initGA = () => {
  // Cargar el script de Google Analytics
  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`;
  document.head.appendChild(script);

  // Inicializar gtag
  window.dataLayer = window.dataLayer || [];
  function gtag(...args: any[]) {
    window.dataLayer.push(args);
  }
  gtag("js", new Date());
  gtag("config", GA_TRACKING_ID, {
    page_title: document.title,
    page_location: window.location.href,
  });

  // Hacer gtag disponible globalmente
  window.gtag = gtag;
};

// Función para trackear eventos personalizados
export const trackEvent = (
  action: string,
  category: string,
  label?: string,
  value?: number
) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Función para trackear page views
export const trackPageView = (url: string, title?: string) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("config", GA_TRACKING_ID, {
      page_path: url,
      page_title: title,
    });
  }
};

// Hook personalizado para React Router
export const usePageTracking = () => {
  const location = useLocation();

  useEffect(() => {
    trackPageView(location.pathname + location.search, document.title);
  }, [location]);
};
