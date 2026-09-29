import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { SITE } from "../data/site";
import { FAQS } from "../data/faqs";
import { getPost, getAllPosts } from "./content";

export type Seo = {
  title: string;
  description: string;
  path: string;
  image?: string;
  noindex?: boolean;
  jsonLd: Record<string, unknown>[];
};

const DEFAULT_DESCRIPTION =
  "Combina agricultura y energía solar con AgroVolt: protege tus cultivos del granizo, ahorra agua de riego y genera tu propia energía. Estudio de viabilidad gratuito para explotaciones agrícolas.";

function websiteJsonLd() {
  return {
    "@type": "WebSite",
    name: SITE.name,
    url: SITE.url,
    inLanguage: "es-ES",
    potentialAction: {
      "@type": "SearchAction",
      target: `${SITE.url}/blog?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
}

function organizationJsonLd() {
  return {
    "@type": "Organization",
    name: SITE.name,
    url: SITE.url,
    logo: `${SITE.url}${SITE.logo}`,
    email: SITE.email,
    foundingDate: SITE.foundingDate,
    areaServed: "ES",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Mutxamel",
      addressRegion: "Alicante",
      addressCountry: "ES",
    },
    sameAs: [],
  };
}

function faqJsonLd() {
  return {
    "@type": "FAQPage",
    mainEntity: FAQS.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

const STATIC_PAGES: Record<
  string,
  { title: string; description: string; jsonLd?: () => Record<string, unknown> }
> = {
  "/": {
    title: "AgroVolt | Agrovoltaica para explotaciones agrícolas",
    description:
      "Instalaciones agrovoltaicas para agricultores: protección antigranizo, hasta un 40% menos de agua de riego y energía propia. Estudio de viabilidad gratuito.",
    jsonLd: () => ({
      "@type": "Service",
      serviceType: "Instalación de sistemas agrovoltaicos",
      provider: { "@type": "Organization", name: SITE.name },
      areaServed: "ES",
      url: `${SITE.url}/`,
      offers: {
        "@type": "Offer",
        priceCurrency: "EUR",
        description: "Estudio de viabilidad gratuito para explotaciones agrícolas",
      },
    }),
  },
  "/app": {
    title: "App de control agrovoltaico | AgroVolt",
    description:
      "Demo interactiva de la app AgroVolt: controla la producción eléctrica, la inclinación de las placas, la humedad del suelo y el riego de tu explotación desde el móvil.",
  },
  "/blog": {
    title: "Blog de agrovoltaica | AgroVolt",
    description:
      "Guias, ayudas, casos de estudio y novedades sobre agrovoltaica, ahorro de agua y energía solar en explotaciones agrícolas.",
    jsonLd: () => ({
      "@type": "Blog",
      name: `Blog de ${SITE.name}`,
      url: `${SITE.url}/blog/`,
      blogPost: getAllPosts().map((p) => ({
        "@type": "BlogPosting",
        headline: p.title,
        url: `${SITE.url}/blog/${p.slug}/`,
        datePublished: p.date,
      })),
    }),
  },
  "/contacto": {
    title: "Contacto y estudio de viabilidad gratuito | AgroVolt",
    description:
      "Solicita tu estudio de viabilidad agrovoltaica sin compromiso o reserva una videollamada con nuestro equipo. Respuesta en menos de 48 horas.",
    jsonLd: () => ({
      "@type": "ContactPage",
      url: `${SITE.url}/contacto/`,
      mainEntity: {
        "@type": "Organization",
        name: SITE.name,
        email: SITE.email,
      },
    }),
  },
  "/faq": {
    title: "Preguntas frecuentes sobre agrovoltaica | AgroVolt",
    description:
      "Resolvemos las dudas más habituales sobre instalaciones agrovoltaicas: permisos, ahorro de agua, ayudas, coste, control de las placas y uso de la app.",
    jsonLd: faqJsonLd,
  },
  "/privacidad": {
    title: "Política de privacidad | AgroVolt",
    description:
      "Cómo tratamos tus datos personales en agrovolt.es conforme al RGPD y la LOPDGDD.",
  },
  "/cookies": {
    title: "Política de cookies | AgroVolt",
    description:
      "Información sobre las cookies y tecnologías similares utilizadas en agrovolt.es.",
  },
};

export function resolveSeo(url: string): Seo {
  const rawPath = url.split("?")[0];
  const key = rawPath.replace(/\/+$/, "") || "/";
  const path = key === "/" ? "/" : `${key}/`;

  if (key.startsWith("/blog/")) {
    const post = getPost(key.slice("/blog/".length));
    if (post) {
      const jsonLd: Record<string, unknown>[] = [
        {
          "@type": "BlogPosting",
          headline: post.title,
          description: post.description,
          mainEntityOfPage: `${SITE.url}/blog/${post.slug}/`,
          datePublished: post.date,
          author: { "@type": "Person", name: post.author },
          publisher: { "@type": "Organization", name: SITE.name },
          inLanguage: "es-ES",
        },
        websiteJsonLd(),
      ];
      const videoMatch = post.html.match(/data-video="([\w-]{6,})"/);
      if (videoMatch) {
        jsonLd.push({
          "@type": "VideoObject",
          name: post.title,
          description: post.description,
          thumbnailUrl: [`https://i.ytimg.com/vi/${videoMatch[1]}/hqdefault.jpg`],
          uploadDate: post.date,
          embedUrl: `https://www.youtube-nocookie.com/embed/${videoMatch[1]}`,
          contentUrl: `https://www.youtube.com/watch?v=${videoMatch[1]}`,
          inLanguage: "es-ES",
        });
      }
      return {
        title: `${post.title} | AgroVolt`,
        description: post.description,
        path,
        jsonLd,
      };
    }
  }

  const page = STATIC_PAGES[key];
  if (page) {
    const jsonLd: Record<string, unknown>[] = [];
    if (path === "/") jsonLd.push(organizationJsonLd());
    if (page.jsonLd) jsonLd.push(page.jsonLd());
    jsonLd.push(websiteJsonLd());
    return {
      title: page.title,
      description: page.description || DEFAULT_DESCRIPTION,
      path,
      jsonLd,
    };
  }

  return {
    title: "Página no encontrada | AgroVolt",
    description: "La página que buscas no existe.",
    path,
    noindex: true,
    jsonLd: [],
  };
}

function escapeJsonLd(value: unknown): string {
  return JSON.stringify({ "@context": "https://schema.org", "@graph": value })
    .replace(/</g, "\\u003c");
}

export function buildHead(seo: Seo): string {
  const canonical = `${SITE.url}${seo.path}`;
  const image = `${SITE.url}${seo.image ?? SITE.ogImage}`;
  const lines = [
    `<title>${seo.title}</title>`,
    `<meta name="description" content="${seo.description.replace(/"/g, "&quot;")}" />`,
    `<link rel="canonical" href="${canonical}" />`,
    seo.noindex
      ? `<meta name="robots" content="noindex, follow" />`
      : `<meta name="robots" content="index, follow, max-image-preview:large" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:site_name" content="${SITE.name}" />`,
    `<meta property="og:locale" content="es_ES" />`,
    `<meta property="og:title" content="${seo.title.replace(/"/g, "&quot;")}" />`,
    `<meta property="og:description" content="${seo.description.replace(/"/g, "&quot;")}" />`,
    `<meta property="og:url" content="${canonical}" />`,
    `<meta property="og:image" content="${image}" />`,
    `<meta property="og:image:width" content="1200" />`,
    `<meta property="og:image:height" content="630" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${seo.title.replace(/"/g, "&quot;")}" />`,
    `<meta name="twitter:description" content="${seo.description.replace(/"/g, "&quot;")}" />`,
    `<meta name="twitter:image" content="${image}" />`,
  ];
  if (seo.jsonLd.length) {
    lines.push(
      `<script type="application/ld+json">${escapeJsonLd(seo.jsonLd)}</script>`
    );
  }
  return lines.join("\n    ");
}

function upsertMeta(
  head: HTMLHeadElement,
  attribute: "name" | "property",
  key: string,
  content: string
) {
  let el = head.querySelector<HTMLMetaElement>(`meta[${attribute}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attribute, key);
    head.appendChild(el);
  }
  el.setAttribute("content", content);
}

export function applySeo(seo: Seo) {
  document.title = seo.title;
  const head = document.head;
  upsertMeta(head, "name", "description", seo.description);
  upsertMeta(
    head,
    "name",
    "robots",
    seo.noindex ? "noindex, follow" : "index, follow, max-image-preview:large"
  );
  upsertMeta(head, "property", "og:title", seo.title);
  upsertMeta(head, "property", "og:description", seo.description);
  upsertMeta(head, "property", "og:url", `${SITE.url}${seo.path}`);
  const image = `${SITE.url}${seo.image ?? SITE.ogImage}`;
  upsertMeta(head, "property", "og:image", image);
  upsertMeta(head, "name", "twitter:title", seo.title);
  upsertMeta(head, "name", "twitter:description", seo.description);
  upsertMeta(head, "name", "twitter:image", image);

  let canonical = head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!canonical) {
    canonical = document.createElement("link");
    canonical.rel = "canonical";
    head.appendChild(canonical);
  }
  canonical.href = `${SITE.url}${seo.path}`;

  const previous = document.getElementById("page-jsonld");
  if (previous) previous.remove();
  if (seo.jsonLd.length) {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = "page-jsonld";
    script.textContent = escapeJsonLd(seo.jsonLd);
    head.appendChild(script);
  }
}

export function SeoUpdater() {
  const { pathname } = useLocation();
  useEffect(() => {
    applySeo(resolveSeo(pathname));
  }, [pathname]);
  return null;
}
