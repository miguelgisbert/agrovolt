import { Link } from "react-router-dom";
import { ArrowLeft, Smartphone } from "lucide-react";
import AppDemo from "../components/AppDemo";
import CTASection from "../components/CTASection";

export default function AppPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-green-50 to-emerald-50 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-green-700 mb-6"
          >
            <ArrowLeft className="w-4 h-4" /> Volver al inicio
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <span className="flex items-center justify-center w-11 h-11 bg-green-600 rounded-xl">
              <Smartphone className="w-6 h-6 text-white" />
            </span>
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900">
              AgroVolt Control
            </h1>
          </div>
          <p className="text-lg text-gray-600 max-w-3xl">
            La app que controla la parte eléctrica de la instalación y las
            variables agrícolas de la explotación. Prueba abajo: cambia el ángulo
            de las placas, revisa la humedad del suelo, programa el riego o
            simula un aviso de granizo.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AppDemo />
        </div>
      </section>

      <section className="pb-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-50 border border-gray-100 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              ¿Qué más controla la app?
            </h2>
            <p className="text-gray-600 mb-6">
              Facturación energética, consumo de la bomba de riego, mantenimiento
              preventivo de los motores de inclinación y exportación de informes
              para la asesoría agrícola.
            </p>
            <Link
              to="/faq"
              className="text-green-700 font-semibold underline underline-offset-4"
            >
              Ver preguntas frecuentes
            </Link>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
