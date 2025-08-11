import { ArrowRight, Users, TrendingUp, Phone, Mail } from "lucide-react";

export default function CTASection() {
  const handleDownloadProspectus = () => {
    const link = document.createElement("a");
    link.href = "/Prospecto_AgroVolt.pdf";
    link.download = "AgroVolt-Prospecto-Inversion-2025.pdf";
    link.click();
  };

  return (
    <section className="py-20 bg-gradient-to-br from-green-600 to-blue-600">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            ¿Quieres <span className="text-yellow-300">Transformar</span> tu
            explotación?
          </h2>
          <p className="text-xl text-green-100 max-w-xl mx-auto">
            Únete a la revolución agrovoltaica y descubre cómo podemos ayudarte
            a maximizar el potencial de tu explotación agrícola.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* CTA for Farmers */}
          <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-6">
              <Users className="w-8 h-8 text-green-600" />
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Para Agricultores
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              ¿Tienes una explotación agrícola y quieres reducir costos mientras
              generas energía limpia? Nuestro equipo te ayudará a diseñar la
              solución perfecta para tu terreno.
            </p>

            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-2 text-gray-700">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm">Estudio gratuito de viabilidad</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm">Financiación disponible</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm">Instalación y mantenimiento</span>
              </div>
            </div>

            <div className="space-y-3">
              <a
                href="mailto:info@agrovolt.es?subject=Consulta%20Gratuita%20-%20Agricultor&body=Hola,%0D%0A%0D%0AMe%20interesa%20una%20consulta%20gratuita%20sobre%20soluciones%20agrovoltaicas%20para%20mi%20explotación%20agrícola.%0D%0A%0D%0AGracias."
                className="w-full bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors duration-300 flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Solicitar Consulta Gratuita
              </a>
              <a
                href="mailto:info@agrovolt.es?subject=Más%20Información%20-%20Agricultor&body=Hola,%0D%0A%0D%0AMe%20gustaría%20recibir%20más%20información%20sobre%20sus%20servicios%20agrovoltaicos.%0D%0A%0D%0AGracias."
                className="w-full border-2 border-green-600 text-green-600 hover:bg-green-50 py-3 px-6 rounded-lg font-semibold transition-colors duration-300 flex items-center justify-center gap-2"
              >
                <Mail className="w-5 h-5" />
                Más Información
              </a>
            </div>
          </div>

          {/* CTA for Investors */}
          <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="flex items-center justify-center w-16 h-16 bg-yellow-100 rounded-full mb-6">
              <TrendingUp className="w-8 h-8 text-yellow-600" />
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Para Inversores
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              ¿Buscas oportunidades de inversión en energía renovable con
              impacto social? Descubre cómo puedes ser parte de la revolución
              agrovoltaica.
            </p>

            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-2 text-gray-700">
                <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                <span className="text-sm">ROI atractivo y sostenible</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                <span className="text-sm">Impacto social positivo</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                <span className="text-sm">
                  Contribución a la sostenibilidad
                </span>
              </div>
            </div>

            <div className="space-y-3">
              <a
                href="mailto:info@agrovolt.es?subject=Oportunidades%20de%20Inversión%20-%20Agrovoltaica&body=Hola,%0D%0A%0D%0AMe%20interesa%20conocer%20las%20oportunidades%20de%20inversión%20en%20proyectos%20agrovoltaicos.%0D%0A%0D%0AGracias."
                className="w-full bg-yellow-600 hover:bg-yellow-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors duration-300 flex items-center justify-center gap-2"
              >
                <TrendingUp className="w-5 h-5" />
                Oportunidades de Inversión
              </a>
              <span
                className="w-full border-2 border-yellow-600 text-yellow-600 hover:bg-yellow-50 py-3 px-6 rounded-lg font-semibold transition-colors duration-300 flex items-center justify-center gap-2 cursor-pointer relative group"
                onClick={handleDownloadProspectus}
              >
                <ArrowRight className="w-5 h-5" />
                Descargar Prospecto
                <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  En construcción
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
