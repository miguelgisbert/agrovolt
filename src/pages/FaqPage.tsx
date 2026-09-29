import { Link } from "react-router-dom";
import { ArrowRight, HelpCircle } from "lucide-react";
import { FAQS } from "../data/faqs";
import { track } from "../lib/analytics";

export default function FaqPage() {
  return (
    <section className="bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 bg-green-100 text-green-800 text-xs font-semibold px-3 py-1.5 rounded-full mb-4">
            <HelpCircle className="w-4 h-4" />
            Resolvemos tus dudas
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Preguntas frecuentes
          </h1>
          <p className="text-lg text-gray-600">
            Todo lo que suelen preguntarnos los agricultores antes de dar el
            paso.
          </p>
        </div>

        <div className="space-y-3">
          {FAQS.map((faq) => (
            <details
              key={faq.q}
              className="group border border-gray-100 rounded-xl bg-gray-50 hover:bg-white transition-colors open:bg-white"
            >
              <summary className="cursor-pointer list-none px-5 py-4 flex items-center justify-between gap-4 text-left">
                <span className="font-semibold text-gray-900">{faq.q}</span>
                <span className="text-green-600 text-xl leading-none transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="px-5 pb-5 text-gray-600 leading-relaxed">{faq.a}</p>
            </details>
          ))}
        </div>

        <div className="mt-12 bg-green-600 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-3">
            ¿No encuentras tu respuesta?
          </h2>
          <p className="text-green-100 mb-6">
            Escríbenos y te contestamos en menos de 48 horas.
          </p>
          <Link
            to="/contacto"
            onClick={() => track("cta_click", { location: "faq" })}
            className="inline-flex items-center gap-2 bg-white text-green-700 font-semibold px-6 py-3 rounded-lg hover:bg-green-50 transition-colors"
          >
            Contactar con AgroVolt <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
