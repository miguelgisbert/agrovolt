import { ArrowRight, CheckCircle2, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import { track } from "../lib/analytics";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-green-50 via-white to-yellow-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-flex items-center gap-2 bg-green-100 text-green-800 text-xs font-semibold px-3 py-1.5 rounded-full mb-6">
              <ShieldCheck className="w-4 h-4" />
              Estudio de viabilidad gratuito y sin compromiso
            </span>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
              Agrovoltaica para tu explotación agrícola: protege y genera
              energía
            </h1>

            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
              Paneles elevados e inclinables sobre tus cultivos: escudo contra
              el granizo, hasta un{" "}
              <strong className="text-green-700">40% menos de agua de riego</strong>,
              paso libre de la maquinaria y energía propia para toda la finca.
            </p>

            <div className="flex flex-col sm:flex-row sm:flex-wrap gap-4 mb-8">
              <Link
                to="/contacto"
                onClick={() => track("cta_click", { location: "hero", cta: "estudio" })}
                className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3.5 rounded-lg font-semibold text-base whitespace-nowrap transition-all shadow-sm hover:shadow-lg"
              >
                Solicitar estudio gratuito
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/app"
                onClick={() => track("cta_click", { location: "hero", cta: "demo_app" })}
                className="inline-flex items-center justify-center gap-2 border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white px-6 py-3.5 rounded-lg font-semibold text-base whitespace-nowrap transition-all"
              >
                Probar la app
              </Link>
            </div>

            <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-600">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-600" /> Respuesta en
                48 h
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-600" /> Diseño a
                medida del cultivo
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-600" /> Gestión de
                ayudas y permisos
              </li>
            </ul>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-tr from-green-200/40 to-yellow-200/40 rounded-3xl blur-2xl" />
            <picture>
              <source
                srcSet="/agrovolt-system.webp"
                type="image/webp"
                width="1398"
                height="663"
              />
              <img
                src="/agrovolt-system.png"
                alt="Esquema de un sistema agrovoltaico: paneles solares elevados sobre un cultivo con maquinaria trabajando debajo"
                width="1398"
                height="663"
                loading="eager"
                className="relative w-full h-auto rounded-2xl shadow-xl"
              />
            </picture>
          </div>
        </div>
      </div>
    </section>
  );
}
