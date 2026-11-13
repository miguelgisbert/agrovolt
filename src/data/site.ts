export const SITE = {
  name: "AgroVolt",
  tagline: "Sistemas agrovoltaicos para explotaciones agrícolas",
  url: "https://agrovolt.es",
  email: "info@agrovolt.es",
  location: "03110 Mutxamel (Alicante), España",
  logo: "/logo.png",
  ogImage: "/og-image.png",
  model3d:
    "https://app21.connect.trimble.com/tc/api/2.0/s/wAVuUmhq806QPxeR622eDhheIUKoUkmzGdReTJlW85nIaxjxOYL9p3VDiN8v91sz",
  foundingDate: "2024",
} as const;

export const GA_ID = "G-38T1ZSFVPX";

export const EMAILJS = {
  serviceId: "service_7514287",
  templateId: "template_beig3l2",
  publicKey: "hFqS9l2zhgBOtS0HT",
  toEmail: "info@agrovolt.es",
} as const;

export const CALENDAR = {
  url: "https://calendar.google.com/calendar/appointments/schedules/AcZssZ3fWffqzzFDcc2AxewuR3nrgPMEcfIN178sAeKECd5Pu6G6U9gqqkUaHU03mlYJ1PYlZN2779cM?gv=true",
  label: "Reserva una videollamada",
  color: "#16a34a",
} as const;

export const NAV = [
  { href: "/", label: "Inicio" },
  { href: "/app", label: "La app" },
  { href: "/blog", label: "Blog" },
  { href: "/faq", label: "Preguntas frecuentes" },
  { href: "/contacto", label: "Contacto" },
] as const;
