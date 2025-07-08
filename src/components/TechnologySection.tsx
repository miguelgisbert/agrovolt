import { Smartphone, Thermometer, Cloud, Zap, Settings, BarChart3 } from 'lucide-react';

export default function TechnologySection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Tecnología <span className="text-blue-600">Inteligente</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Sistema de monitoreo y automatización que optimiza el rendimiento de tu instalación agrovoltaica
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg flex-shrink-0">
                <Thermometer className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Sensores Ambientales</h3>
                <p className="text-gray-600">
                  Monitoreo en tiempo real de humedad, temperatura, luz solar y condiciones meteorológicas 
                  para optimizar el crecimiento de tus cultivos.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-lg flex-shrink-0">
                <Cloud className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Predicción Meteorológica</h3>
                <p className="text-gray-600">
                  Integración con servicios meteorológicos para anticipar tormentas y granizo, 
                  activando automáticamente las protecciones.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex items-center justify-center w-12 h-12 bg-yellow-100 rounded-lg flex-shrink-0">
                <Settings className="w-6 h-6 text-yellow-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Automatización</h3>
                <p className="text-gray-600">
                  Las placas se ajustan automáticamente: inclinadas para generar energía o 
                  horizontales para máxima protección durante tormentas.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex items-center justify-center w-12 h-12 bg-purple-100 rounded-lg flex-shrink-0">
                <BarChart3 className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Análisis de Datos</h3>
                <p className="text-gray-600">
                  Dashboard completo con métricas de producción energética, estado de cultivos 
                  y optimización de recursos.
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 shadow-lg">
              <div className="space-y-6">
                {/* App mockup */}
                <div className="bg-white rounded-xl p-4 shadow-lg">
                  <div className="flex items-center gap-2 mb-4">
                    <Smartphone className="w-5 h-5 text-blue-600" />
                    <span className="font-semibold text-gray-900">AgroVolt Control</span>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Producción Energética</span>
                      <span className="text-sm font-semibold text-green-600">847 kWh</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-green-600 h-2 rounded-full w-3/4"></div>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Humedad del Suelo</span>
                      <span className="text-sm font-semibold text-blue-600">68%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-600 h-2 rounded-full w-2/3"></div>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Estado de Protección</span>
                      <span className="text-sm font-semibold text-yellow-600">Activo</span>
                    </div>
                  </div>
                </div>

                {/* Status indicators */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white rounded-lg p-4 text-center">
                    <Zap className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
                    <div className="text-sm font-semibold text-gray-900">Generando</div>
                    <div className="text-xs text-gray-600">2.4 kW</div>
                  </div>
                  <div className="bg-white rounded-lg p-4 text-center">
                    <Cloud className="w-8 h-8 text-blue-500 mx-auto mb-2" />
                    <div className="text-sm font-semibold text-gray-900">Clima</div>
                    <div className="text-xs text-gray-600">Soleado</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}