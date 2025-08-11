import { Sun, Sprout, Mail, Linkedin, Instagram } from "lucide-react";
import { useState } from "react";

export default function Footer() {
  // Newsletter form state
  const [newsletterStatus, setNewsletterStatus] = useState<
    null | "success" | "error"
  >(null);

  // Handler for form submission
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
        <div className="grid md:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center gap-1">
                <Sprout className="w-6 h-6 text-green-400" />
                <Sun className="w-6 h-6 text-yellow-400" />
              </div>
              <span className="text-2xl font-bold">
                <span className="text-green-400">Agro</span>
                <span className="text-yellow-400">Volt</span>
              </span>
            </div>
            <p className="text-gray-400 mb-4 max-w-sm">
              Revolucionando la agricultura con energía solar. Protegemos tus
              cultivos mientras generas energía limpia para un futuro
              sostenible.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Servicios</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <span className="hover:text-white transition-colors cursor-pointer relative group inline-block">
                  Instalación Agrovoltaica
                  <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                    En construcción
                  </span>
                </span>
              </li>
              <li>
                <span className="hover:text-white transition-colors cursor-pointer relative group inline-block">
                  Consultoría Técnica
                  <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                    En construcción
                  </span>
                </span>
              </li>
              <li>
                <span className="hover:text-white transition-colors cursor-pointer relative group inline-block">
                  Mantenimiento
                  <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                    En construcción
                  </span>
                </span>
              </li>
              <li>
                <span className="hover:text-white transition-colors cursor-pointer relative group inline-block">
                  Monitoreo Remoto
                  <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                    En construcción
                  </span>
                </span>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Empresa</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <span className="hover:text-white transition-colors cursor-pointer relative group inline-block">
                  Sobre Nosotros
                  <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                    En construcción
                  </span>
                </span>
              </li>
              <li>
                <span className="hover:text-white transition-colors cursor-pointer relative group inline-block">
                  Casos de Éxito
                  <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                    En construcción
                  </span>
                </span>
              </li>
              <li>
                <span className="hover:text-white transition-colors cursor-pointer relative group inline-block">
                  Blog
                  <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                    En construcción
                  </span>
                </span>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contacto</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-gray-400">
                <Mail className="w-4 h-4" />
                <a
                  href="mailto:info@agrovolt.es"
                  className="hover:text-white transition-colors"
                >
                  info@agrovolt.es
                </a>
              </div>

              <div className="flex space-x-4">
                <span className="text-gray-400 hover:text-white transition-colors cursor-pointer relative group">
                  <Linkedin className="w-5 h-5" />
                  <span className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                    En construcción
                  </span>
                </span>
                <span className="text-gray-400 hover:text-white transition-colors cursor-pointer relative group">
                  <Instagram className="w-5 h-5" />
                  <span className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                    En construcción
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Form */}
        <div className="mt-12 max-w-xl mx-auto bg-gray-800 rounded-2xl p-6 flex flex-col items-center shadow-lg">
          <h4 className="text-xl font-semibold mb-5 text-white">
            ¡Recibe novedades!
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
            No enviaremos spam. Puedes darte de baja en cualquier momento.
          </p>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2025 AgroVolt. Todos los derechos reservados.</p>
          <p>03110 Mutxamel (Spain)</p>
        </div>
      </div>
    </footer>
  );
}
