import { ArrowRight, Users, TrendingUp, Download, Smartphone } from "lucide-react";
import { Link } from "react-router-dom";
import { track } from "../lib/analytics";

export default function CTASection() {
  const handleDownloadProspectus = () => {
    track("download", { file: "prospecto_inversion" });
    const link = document.createElement("a");
    link.href = "/Prospecto_AgroVolt.pdf";
    link.download = "AgroVolt-Prospecto-Inversion.pdf";
    link.click();
  };

  return (
    <section className="py-20 bg-gradient-to-br from-green-800 via-green-700 to-green-600">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            ¿Quieres transformar tu explotación?
          </h2>
          <p className="text-xl text-green-100 max-w-xl mx-auto">
            Estudio de viabilidad gratuito, sin compromiso, pensado para tu
            cultivo y tu superficie.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-6">
              <Users className="w-8 h-8 text-green-600" />
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Para agricultores
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              ¿Tienes una explotación y quieres reducir costes mientras
              generas energía limpia? Te ayudamos a dimensionar la solución
              para tu terreno.
            </p>

            <ul className="space-y-3 mb-6 text-sm text-gray-700">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full" />
                Estudio de viabilidad gratuito
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full" />
                Revisión de ayudas y permisos
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full" />
                Instalación y mantenimiento
              </li>
            </ul>

            <div className="space-y-3">
              <Link
                to="/contacto"
                onClick={() => track("cta_click", { location: "cta_section", cta: "estudio" })}
                className="w-full bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors duration-300 flex items-center justify-center gap-2"
              >
                Solicitar estudio gratuito
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/app"
                onClick={() => track("cta_click", { location: "cta_section", cta: "demo" })}
                className="w-full border-2 border-green-600 text-green-600 hover:bg-green-50 py-3 px-6 rounded-lg font-semibold transition-colors duration-300 flex items-center justify-center gap-2"
              >
                <Smartphone className="w-5 h-5" />
                Probar la demo de la app
              </Link>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="flex items-center justify-center w-16 h-16 bg-yellow-100 rounded-full mb-6">
              <TrendingUp className="w-8 h-8 text-yellow-600" />
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Para inversores
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Proyectos agrovoltaicos con retorno proyectado, doble uso del
              suelo y un mercado que apenas ha empezado a penetrar en España.
            </p>

            <ul className="space-y-3 mb-6 text-sm text-gray-700">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-yellow-500 rounded-full" />
                Payback estimado de 7-9 años
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-yellow-500 rounded-full" />
                Vida útil del sistema: 25 años
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-yellow-500 rounded-full" />
                Modelo replicable por proyecto
              </li>
            </ul>

            <div className="space-y-3">
              <Link
                to="/contacto"
                onClick={() => track("cta_click", { location: "cta_section", cta: "inversion" })}
                className="w-full bg-yellow-500 hover:bg-yellow-600 text-white py-3 px-6 rounded-lg font-semibold transition-colors duration-300 flex items-center justify-center gap-2"
              >
                Hablar de inversión
                <ArrowRight className="w-5 h-5" />
              </Link>
              <button
                type="button"
                onClick={handleDownloadProspectus}
                className="w-full border-2 border-yellow-500 text-yellow-600 hover:bg-yellow-50 py-3 px-6 rounded-lg font-semibold transition-colors duration-300 flex items-center justify-center gap-2"
              >
                <Download className="w-5 h-5" />
                Descargar prospecto (PDF)
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
