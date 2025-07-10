import {
  Shield,
  Droplets,
  Zap,
  Tractor,
  Sun,
  Sprout,
  Plug,
  Fuel,
} from "lucide-react";

export default function ConceptSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            ¿Qué es la <span className="text-green-600">Agrovoltaica</span>?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Un sistema innovador que combina la producción de energía solar con
            la agricultura, creando una simbiosis perfecta que beneficia tanto a
            tus cultivos como a tu economía.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image section - now first on mobile, second on desktop */}
          <div className="relative order-2 md:order-1">
            <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-6 shadow-lg">
              <img 
                src="/agrovolt/image.png" 
                alt="Sistema agrovoltaico mostrando paneles solares elevados sobre cultivos con tractor trabajando debajo"
                className="w-full h-auto rounded-xl shadow-md"
              />
            </div>
          </div>

          {/* Content section */}
          <div className="space-y-8 order-1 md:order-2">
            <div className="flex items-start gap-4">
              <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-lg flex-shrink-0">
                <Shield className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Protección Inteligente
                </h3>
                <p className="text-gray-600">
                  Las placas solares protegen tus cultivos del granizo, lluvia
                  intensa y exceso de radiación a medio día, mientras permiten
                  el paso de luz solar beneficiosa en las horas óptimas.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg flex-shrink-0">
                <Droplets className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Gestión del Agua
                </h3>
                <p className="text-gray-600">
                  Reduce el consumo de agua de riego hasta un 40% gracias a la
                  sombra parcial, mientras recolectas agua de lluvia y del
                  rocío.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex items-center justify-center w-12 h-12 bg-red-100 rounded-lg flex-shrink-0 relative">
                <div className="relative">
                  <Fuel className="w-6 h-6 text-red-600" />
                  <div className="absolute -inset-2 flex items-center justify-center">
                    <div className="w-10 h-px bg-red-700 rotate-45"></div>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Independencia Energética
                </h3>
                <p className="text-gray-600">
                  Libérate de las fluctuaciones del precio del gasóleo. Genera tu propia energía limpia 
                  para bombas de riego, maquinaria agrícola y prepárate para el futuro de tractores eléctricos.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-lg flex-shrink-0">
                <Tractor className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Diseño Inteligente
                </h3>
                <p className="text-gray-600">
                  Estructura con poste central que permite el paso libre de
                  tractores y maquinaria entre cultivos, optimizando el espacio
                  y permitiendo a los cabezales o aperos de cosechadoras o otras
                  máquinas acceder a la superficie cultivada sin interferir con
                  la estructura solar.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits summary section */}
        <div className="mt-16 bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-8 text-white">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Beneficios Clave del Sistema AgroVolt
            </h3>
          </div>
          
          <div className="grid md:grid-cols-5 gap-6">
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-white bg-opacity-20 rounded-full mx-auto mb-3">
                <Zap className="w-8 h-8 text-yellow-300" />
              </div>
              <h4 className="font-semibold mb-2">Energía Limpia</h4>
              <p className="text-sm text-green-100">Genera electricidad mientras cultivas</p>
            </div>
            
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-white bg-opacity-20 rounded-full mx-auto mb-3">
                <Shield className="w-8 h-8 text-blue-300" />
              </div>
              <h4 className="font-semibold mb-2">Protección</h4>
              <p className="text-sm text-green-100">Escudo contra granizo y clima extremo</p>
            </div>
            
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-white bg-opacity-20 rounded-full mx-auto mb-3">
                <Droplets className="w-8 h-8 text-cyan-300" />
              </div>
              <h4 className="font-semibold mb-2">Ahorro de Agua</h4>
              <p className="text-sm text-green-100">Hasta 40% menos consumo de riego</p>
            </div>
            
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-white bg-opacity-20 rounded-full mx-auto mb-3">
                <Tractor className="w-8 h-8 text-green-300" />
              </div>
              <h4 className="font-semibold mb-2">Acceso Total</h4>
              <p className="text-sm text-green-100">Maquinaria trabaja sin restricciones</p>
            </div>
            
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-white bg-opacity-20 rounded-full mx-auto mb-3">
                <Sprout className="w-8 h-8 text-green-300" />
              </div>
              <h4 className="font-semibold mb-2">Mejor Cultivo</h4>
              <p className="text-sm text-green-100">Condiciones optimizadas de crecimiento</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}