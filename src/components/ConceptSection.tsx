import { Shield, Droplets, Zap, Tractor, Sun, Sprout, Plug, Fuel } from 'lucide-react';

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
                  mientras recolectas agua de lluvia y del rocío.
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
                  de tractores eléctricos, independizándote de las fluctuaciones del precio del gasóleo.
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
              <div className="space-y-8">
                {/* Central diagram */}
                <div className="relative flex justify-center">
                  <div className="w-80 h-80 relative">
                    {/* Central circle */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-gradient-to-br from-green-500 to-yellow-500 rounded-full flex flex-col items-center justify-center shadow-lg">
                      <span className="text-white font-bold text-xs">AGRO</span>
                      <span className="text-white font-bold text-xs">VOLT</span>
                    </div>
                    
                    {/* Surrounding concepts */}
                    {/* Energía - Top */}
                    <div className="absolute top-4 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
                      <div className="bg-yellow-100 rounded-full w-12 h-12 flex items-center justify-center shadow-md">
                        <Zap className="w-6 h-6 text-yellow-600" />
                      </div>
                      <div className="mt-2">
                        <span className="text-sm font-semibold text-gray-700">Energía</span>
                      </div>
                    </div>
                    
                    {/* Protección - Top Right */}
                    <div className="absolute top-12 right-12 flex flex-col items-center">
                      <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center shadow-md">
                        <Shield className="w-6 h-6 text-blue-600" />
                      </div>
                      <div className="mt-2">
                        <span className="text-sm font-semibold text-gray-700">Protección</span>
                      </div>
                    </div>
                    
                    {/* Reducción de costes - Bottom Right */}
                    <div className="absolute bottom-16 right-16 flex flex-col items-center">
                      <div className="bg-cyan-100 rounded-full w-12 h-12 flex items-center justify-center shadow-md relative">
                        <div className="flex items-center gap-0.5">
                          <Droplets className="w-4 h-4 text-cyan-600" />
                          <Plug className="w-4 h-4 text-cyan-600" />
                        </div>
                      </div>
                      <div className="mt-2">
                        <div className="text-center">
                          <div className="text-sm font-semibold text-gray-700">Reducción</div>
                          <div className="text-sm font-semibold text-gray-700">de costes</div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Independencia - Bottom Left */}
                    <div className="absolute bottom-16 left-10 flex flex-col items-center">
                      <div className="bg-red-100 rounded-full w-12 h-12 flex items-center justify-center shadow-md relative overflow-visible">
                        <div className="relative">
                          <Fuel className="w-6 h-6 text-red-600" />
                          <div className="absolute -inset-2 flex items-center justify-center overflow-visible">
                            <div className="w-16 h-px bg-red-700 rotate-45 shadow-sm"></div>
                          </div>
                        </div>
                      </div>
                      <div className="mt-2">
                        <span className="text-sm font-semibold text-gray-700">Independencia</span>
                      </div>
                    </div>
                    
                    {/* Producción - Top Left */}
                    <div className="absolute top-12 left-12 flex flex-col items-center">
                      <div className="bg-green-100 rounded-full w-12 h-12 flex items-center justify-center shadow-md">
                        <Sprout className="w-6 h-6 text-green-600" />
                      </div>
                      <div className="mt-2">
                        <span className="text-sm font-semibold text-gray-700">Producción</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Bottom text */}
                <div className="text-center">
                  <p className="text-sm text-gray-600 font-medium">
                    Simbiosis perfecta entre tecnología solar y agricultura sostenible
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}