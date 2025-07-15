// Configuració per Plausible Analytics (alternativa a Google Analytics)
// 1. Registra't a https://plausible.io/
// 2. Afegeix el teu domini
// 3. Reemplaça 'agrovolt.es' pel teu domini

export const initPlausible = () => {
  const script = document.createElement("script");
  script.defer = true;
  script.setAttribute("data-domain", "agrovolt.es"); // Canvia pel teu domini
  script.src = "https://plausible.io/js/script.js";
  document.head.appendChild(script);
};

// Tracking d'events amb Plausible
export const trackPlausibleEvent = (
  eventName: string,
  props?: Record<string, any>
) => {
  if (typeof window !== "undefined" && (window as any).plausible) {
    (window as any).plausible(eventName, { props });
  }
};
