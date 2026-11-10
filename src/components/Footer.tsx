import { useState } from "react";
import { Link } from "react-router-dom";
import { Sprout, Sun, Mail, MapPin } from "lucide-react";
import { SITE } from "../data/site";

const NAVIGATION = [
  { to: "/", label: "Inicio" },
  { to: "/app", label: "Demo de la app" },
  { to: "/blog", label: "Blog" },
  { to: "/faq", label: "Preguntas frecuentes" },
  { to: "/contacto", label: "Contacto" },
];

const LEGAL = [
  { to: "/privacidad", label: "Política de privacidad" },
  { to: "/cookies", label: "Política de cookies" },
];

export default function Footer() {
  const [newsletterStatus, setNewsletterStatus] = useState<
    null | "success" | "error"
  >(null);

  const handleNewsletterSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    try {
      const res = await fetch(form.action, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setNewsletterStatus("success");
        form.reset();
      } else {
        setNewsletterStatus("error");
      }
    } catch {
      setNewsletterStatus("error");
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Sprout className="w-6 h-6 text-green-400" />
              <Sun className="w-6 h-6 text-yellow-400" />
              <span className="text-2xl font-bold">
                <span className="text-green-400">Agro</span>
                <span className="text-yellow-400">Volt</span>
              </span>
            </div>
            <p className="text-gray-400 mb-4 max-w-sm">
              Sistemas agrovoltaicos para explotaciones agrícolas: protección
              antigranizo, ahorro de agua de riego y energía propia, con control
              total desde el móvil.
            </p>
            <div className="space-y-2 text-sm text-gray-400">
              <a
                href={`mailto:${SITE.email}`}
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4" /> {SITE.email}
              </a>
              <span className="flex items-center gap-2">
                <MapPin className="w-4 h-4" /> {SITE.location}
              </span>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Navegación</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              {NAVIGATION.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              {LEGAL.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href="/Prospecto_AgroVolt.pdf"
                  className="hover:text-white transition-colors"
                >
                  Prospecto de inversión
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 max-w-xl mx-auto bg-gray-800 rounded-2xl p-6 flex flex-col items-center shadow-lg">
          <h4 className="text-xl font-semibold mb-5 text-white">
            Novedades sobre agrovoltaica
          </h4>
          {newsletterStatus === "success" ? (
            <div className="w-full text-center">
              <p className="text-green-400 font-semibold">
                ¡Gracias! Tu email se ha registrado correctamente.
              </p>
            </div>
          ) : newsletterStatus === "error" ? (
            <div className="w-full text-center">
              <p className="text-red-400 font-semibold">
                Ha ocurrido un error. Inténtalo de nuevo más tarde.
              </p>
            </div>
          ) : (
            <form
              action="https://formspree.io/f/xanbbrlv"
              method="POST"
              className="flex flex-col sm:flex-row gap-3 w-full justify-center items-center"
              onSubmit={handleNewsletterSubmit}
            >
              <label htmlFor="newsletter-email" className="sr-only">
                Correo electrónico
              </label>
              <input
                id="newsletter-email"
                type="email"
                name="email"
                required
                placeholder="Tu correo electrónico"
                className="px-4 py-2 rounded-lg bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-400 w-full sm:w-auto min-w-[220px]"
              />
              <button
                type="submit"
                className="px-6 py-2 rounded-lg bg-green-500 hover:bg-green-600 text-white font-semibold transition-colors"
              >
                Enviar
              </button>
            </form>
          )}
          <p className="text-xs text-gray-400 mt-2 text-center">
            Sin spam. Puedes darte de baja en cualquier momento.
          </p>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm text-gray-400">
          <p className="mb-2">
            <a
              href="https://miguelgisbert.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-400 hover:text-green-300 transition-colors"
            >
              Miguel Gisbert
            </a>
          </p>
          <p suppressHydrationWarning>
            © {new Date().getFullYear()} AgroVolt. Todos los derechos
            reservados.
          </p>
          <p>{SITE.location}</p>
        </div>
      </div>
    </footer>
  );
}
