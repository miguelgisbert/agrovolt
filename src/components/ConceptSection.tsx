import { Shield, Droplets, Zap, Tractor, Sun, Sprout } from 'lucide-react';

export default function ConceptSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            ¿Qué es la <span className="text-green-600">Agrovoltaica</span>?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Un sistema innovador que combina la producción de energía solar con la agricultura, 
            creando una simbiosis perfecta que beneficia tanto a tus cultivos como a tu economía.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-lg flex-shrink-0">
                <Shield className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Protección Inteligente</h3>
                <p className="text-gray-600">
                  Las placas solares protegen tus cultivos del granizo, lluvia intensa y exceso de radiación, 
                  mientras permiten el paso de luz solar beneficiosa en las horas óptimas.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg flex-shrink-0">
                <Droplets className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Gestión del Agua</h3>
                <p className="text-gray-600">
                  Reduce el consumo de agua de riego hasta un 40% gracias a la sombra parcial, 
                  mientras recolectas agua de lluvia para uso agrícola.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex items-center justify-center w-12 h-12 bg-yellow-100 rounded-lg flex-shrink-0">
                <Zap className="w-6 h-6 text-yellow-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Energía para tu Granja</h3>
                <p className="text-gray-600">
                  Genera energía limpia para bombas de riego, maquinaria y preparate para el futuro 
                  de tractores eléctricos, independizándote de las fluctuaciones del gasóleo.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-lg flex-shrink-0">
                <Tractor className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Diseño Inteligente</h3>
                <p className="text-gray-600">
                  Estructura con poste central que permite el paso libre de tractores y maquinaria, 
                  optimizando el espacio sin interferir con las operaciones agrícolas.
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-green-50 to-yellow-50 rounded-2xl p-8 shadow-lg">
              <div className="space-y-6">
                {/* Solar panel representation */}
                <div className="flex justify-center">
                  <div className="relative">
                    <div className="w-48 h-32 bg-gradient-to-br from-blue-900 to-blue-700 rounded-lg shadow-lg transform -rotate-12 opacity-80"></div>
                    <div className="absolute top-2 left-2 w-48 h-32 bg-gradient-to-br from-blue-800 to-blue-600 rounded-lg shadow-lg transform rotate-12"></div>
                    <div className="absolute top-4 left-4 w-48 h-32 bg-gradient-to-br from-blue-700 to-blue-500 rounded-lg shadow-lg"></div>
                  </div>
                </div>

                {/* Arrows showing sun protection */}
                <div className="flex justify-around items-center">
                  <div className="text-center">
                    <Sun className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
                    <div className="text-sm text-gray-600">Mañana</div>
                  </div>
                  <div className="text-center">
                    <Shield className="w-8 h-8 text-green-500 mx-auto mb-2" />
                    <div className="text-sm text-gray-600">Protección</div>
                  </div>
                  <div className="text-center">
                    <Sun className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
                    <div className="text-sm text-gray-600">Tarde</div>
                  </div>
                </div>

                {/* Crops representation */}
                <div className="flex justify-center space-x-2">
                  {[...Array(6)].map((_, i) => (
                    <Sprout key={i} className="w-6 h-6 text-green-500" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}