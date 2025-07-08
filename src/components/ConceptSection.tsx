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
              <div className="space-y-8">
                {/* Central diagram */}
                <div className="relative flex justify-center">
                  <div className="w-64 h-64 relative">
                    {/* Central circle */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-gradient-to-br from-green-500 to-yellow-500 rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-white font-bold text-sm">AGRO</span>
                      <span className="text-white font-bold text-sm">VOLT</span>
                    </div>
                    
                    {/* Surrounding concepts */}
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-2">
                      <div className="bg-yellow-100 rounded-full w-12 h-12 flex items-center justify-center shadow-md">
                        <Zap className="w-6 h-6 text-yellow-600" />
                      </div>
                      <div className="text-center mt-2">
                        <span className="text-sm font-semibold text-gray-700">Energía</span>
                      </div>
                    </div>
                    
                    <div className="absolute top-1/4 right-0 transform translate-x-2">
                      <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center shadow-md">
                        <Shield className="w-6 h-6 text-blue-600" />
                      </div>
                      <div className="text-center mt-2">
                        <span className="text-sm font-semibold text-gray-700">Protección</span>
                      </div>
                    </div>
                    
                    <div className="absolute bottom-1/4 right-0 transform translate-x-2">
                      <div className="bg-cyan-100 rounded-full w-12 h-12 flex items-center justify-center shadow-md">
                        <Droplets className="w-6 h-6 text-cyan-600" />
                      </div>
                      <div className="text-center mt-2">
                        <span className="text-sm font-semibold text-gray-700">Ahorro</span>
                      </div>
                    </div>
                    
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-2">
                      <div className="bg-green-100 rounded-full w-12 h-12 flex items-center justify-center shadow-md">
                        <Sprout className="w-6 h-6 text-green-600" />
                      </div>
                      <div className="text-center mt-2">
                        <span className="text-sm font-semibold text-gray-700">Producción</span>
                      </div>
                    </div>
                    
                    {/* Connecting lines */}
                    <div className="absolute inset-0">
                      <svg className="w-full h-full" viewBox="0 0 256 256">
                        <defs>
                          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#10b981" stopOpacity="0.3" />
                            <stop offset="100%" stopColor="#eab308" stopOpacity="0.3" />
                          </linearGradient>
                        </defs>
                        {/* Lines connecting center to each concept */}
                        <line x1="128" y1="128" x2="128" y2="40" stroke="url(#lineGradient)" strokeWidth="2" strokeDasharray="5,5" />
                        <line x1="128" y1="128" x2="200" y2="80" stroke="url(#lineGradient)" strokeWidth="2" strokeDasharray="5,5" />
                        <line x1="128" y1="128" x2="200" y2="176" stroke="url(#lineGradient)" strokeWidth="2" strokeDasharray="5,5" />
                        <line x1="128" y1="128" x2="128" y2="216" stroke="url(#lineGradient)" strokeWidth="2" strokeDasharray="5,5" />
                      </svg>
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