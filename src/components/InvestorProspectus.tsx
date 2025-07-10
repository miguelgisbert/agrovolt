import React from 'react';
import { 
  TrendingUp, 
  DollarSign, 
  Shield, 
  Zap, 
  Users, 
  Target,
  BarChart3,
  PieChart,
  Calendar,
  Award,
  Leaf,
  Sun,
  Sprout,
  ArrowRight,
  CheckCircle
} from 'lucide-react';

export default function InvestorProspectus() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-8 print:py-4">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1">
                <Sprout className="w-8 h-8 text-green-300" />
                <Sun className="w-8 h-8 text-yellow-300" />
              </div>
              <div>
                <h1 className="text-3xl font-bold">
                  <span className="text-green-300">Agro</span>
                  <span className="text-yellow-300">Volt</span>
                </h1>
                <p className="text-green-100 text-sm">Revolución Agrovoltaica</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-xl font-semibold">Prospecto de Inversión</p>
              <p className="text-green-100">Oportunidad de Financiación 2024</p>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-6 py-8 print:py-4">
        
        {/* Executive Summary */}
        <section className="mb-12 print:mb-8">
          <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-8 print:p-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <Target className="w-8 h-8 text-green-600" />
              Resumen Ejecutivo
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Oportunidad de Mercado</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Mercado agrovoltaico global: <strong>€4.2B en 2024</strong></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Crecimiento proyectado: <strong>27% CAGR hasta 2030</strong></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">España: <strong>25M hectáreas</strong> de superficie agrícola</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Potencial de penetración: <strong>&lt;1% actual</strong></span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Propuesta de Valor</h3>
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <div className="text-center mb-4">
                    <div className="text-3xl font-bold text-green-600">ROI 12-18%</div>
                    <div className="text-gray-600">Retorno anual proyectado</div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-xl font-bold text-blue-600">7-9 años</div>
                      <div className="text-sm text-gray-600">Payback period</div>
                    </div>
                    <div>
                      <div className="text-xl font-bold text-purple-600">25 años</div>
                      <div className="text-sm text-gray-600">Vida útil garantizada</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technology Overview */}
        <section className="mb-12 print:mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
            <Zap className="w-8 h-8 text-blue-600" />
            Tecnología y Modelo de Negocio
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white border-2 border-gray-100 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Sistema Agrovoltaico</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-gray-700">Paneles solares elevados (4-6m altura)</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span className="text-gray-700">Estructura de poste central</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <span className="text-gray-700">Sistema de seguimiento solar</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                  <span className="text-gray-700">Monitoreo IoT integrado</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white border-2 border-gray-100 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Flujos de Ingresos</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Venta de energía</span>
                  <span className="font-semibold text-green-600">60-70%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Mejora productividad agrícola</span>
                  <span className="font-semibold text-blue-600">15-20%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Ahorro en riego</span>
                  <span className="font-semibold text-cyan-600">10-15%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Servicios de mantenimiento</span>
                  <span className="font-semibold text-purple-600">5-10%</span>
                </div>
              </div>
            </div>
          </div>

          {/* Infographic */}
          <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-xl p-8 print:p-4">
            <h3 className="text-xl font-semibold text-center text-gray-900 mb-6">Esquema del Sistema AgroVolt</h3>
            <div className="relative">
              <img 
                src="/agrovolt/agrovolt-system.png" 
                alt="Esquema detallado del sistema agrovoltaico mostrando paneles solares, estructura, cultivos y maquinaria"
                className="w-full h-auto rounded-xl shadow-md"
              />
            </div>
          </div>
        </section>

        {/* Financial Projections */}
        <section className="mb-12 print:mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
            <BarChart3 className="w-8 h-8 text-green-600" />
            Proyecciones Financieras
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white border-2 border-green-100 rounded-xl p-6 text-center">
              <DollarSign className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <div className="text-2xl font-bold text-gray-900">€2.5M - €5M</div>
              <div className="text-gray-600">Inversión por proyecto</div>
              <div className="text-sm text-green-600 mt-2">10-20 hectáreas</div>
            </div>
            
            <div className="bg-white border-2 border-blue-100 rounded-xl p-6 text-center">
              <TrendingUp className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <div className="text-2xl font-bold text-gray-900">€400K - €900K</div>
              <div className="text-gray-600">Ingresos anuales</div>
              <div className="text-sm text-blue-600 mt-2">Por proyecto</div>
            </div>
            
            <div className="bg-white border-2 border-purple-100 rounded-xl p-6 text-center">
              <Award className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <div className="text-2xl font-bold text-gray-900">15.2%</div>
              <div className="text-gray-600">IRR promedio</div>
              <div className="text-sm text-purple-600 mt-2">Casos de estudio</div>
            </div>
          </div>

          {/* Financial Chart */}
          <div className="bg-white border-2 border-gray-100 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Flujo de Caja Proyectado (25 años)</h3>
            <div className="relative h-64 bg-gradient-to-t from-gray-50 to-white rounded-lg p-4">
              {/* Simplified chart representation */}
              <div className="flex items-end justify-between h-full">
                {[...Array(10)].map((_, i) => (
                  <div key={i} className="flex flex-col items-center">
                    <div 
                      className={`w-8 rounded-t ${i < 3 ? 'bg-red-400' : 'bg-green-500'}`}
                      style={{ height: `${Math.max(20, (i + 1) * 8)}%` }}
                    ></div>
                    <span className="text-xs text-gray-600 mt-2">Año {(i + 1) * 2.5}</span>
                  </div>
                ))}
              </div>
              <div className="absolute top-4 left-4 text-sm text-gray-600">
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-3 h-3 bg-red-400 rounded"></div>
                  <span>Período de recuperación</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded"></div>
                  <span>Flujo positivo</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Market Analysis */}
        <section className="mb-12 print:mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
            <PieChart className="w-8 h-8 text-blue-600" />
            Análisis de Mercado
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white border-2 border-gray-100 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Drivers de Crecimiento</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Leaf className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-gray-900">Políticas Ambientales</div>
                    <div className="text-sm text-gray-600">Green Deal Europeo, objetivos 2030</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <DollarSign className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-gray-900">Costos Energéticos</div>
                    <div className="text-sm text-gray-600">Volatilidad precios combustibles</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Shield className="w-6 h-6 text-purple-600 mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-gray-900">Cambio Climático</div>
                    <div className="text-sm text-gray-600">Necesidad de adaptación agrícola</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white border-2 border-gray-100 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Ventajas Competitivas</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-gray-900">Doble Uso del Suelo</div>
                    <div className="text-sm text-gray-600">Maximización de rentabilidad</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-gray-900">Tecnología Probada</div>
                    <div className="text-sm text-gray-600">Casos de éxito internacionales</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-purple-600 mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-gray-900">Escalabilidad</div>
                    <div className="text-sm text-gray-600">Modelo replicable</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Investment Opportunity */}
        <section className="mb-12 print:mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
            <Users className="w-8 h-8 text-green-600" />
            Oportunidad de Inversión
          </h2>
          
          <div className="bg-gradient-to-br from-green-600 to-blue-600 rounded-2xl p-8 text-white mb-8">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">€50M</div>
                <div className="text-green-100">Ronda de financiación</div>
                <div className="text-sm text-green-200 mt-1">Serie A</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">20-25</div>
                <div className="text-green-100">Proyectos objetivo</div>
                <div className="text-sm text-green-200 mt-1">Próximos 3 años</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">500MW</div>
                <div className="text-green-100">Capacidad instalada</div>
                <div className="text-sm text-green-200 mt-1">Meta 2027</div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white border-2 border-gray-100 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Uso de Fondos</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Desarrollo de proyectos</span>
                  <span className="font-semibold text-green-600">40%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-green-600 h-2 rounded-full w-2/5"></div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">I+D y tecnología</span>
                  <span className="font-semibold text-blue-600">25%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full w-1/4"></div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Expansión comercial</span>
                  <span className="font-semibold text-purple-600">20%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-purple-600 h-2 rounded-full w-1/5"></div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Capital de trabajo</span>
                  <span className="font-semibold text-yellow-600">15%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-yellow-600 h-2 rounded-full w-[15%]"></div>
                </div>
              </div>
            </div>
            
            <div className="bg-white border-2 border-gray-100 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Timeline de Desarrollo</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-sm font-semibold text-green-600">Q1</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Cierre financiación</div>
                    <div className="text-sm text-gray-600">Primeros 5 proyectos</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-sm font-semibold text-blue-600">Q2</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Desarrollo e instalación</div>
                    <div className="text-sm text-gray-600">100MW en construcción</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                    <span className="text-sm font-semibold text-purple-600">Q4</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Operación comercial</div>
                    <div className="text-sm text-gray-600">Primeros ingresos</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Risk Analysis */}
        <section className="mb-12 print:mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
            <Shield className="w-8 h-8 text-red-600" />
            Análisis de Riesgos y Mitigación
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded-r-lg">
                <h4 className="font-semibold text-red-800">Riesgo Regulatorio</h4>
                <p className="text-red-700 text-sm mt-1">Cambios en políticas energéticas</p>
                <p className="text-red-600 text-sm mt-2"><strong>Mitigación:</strong> Diversificación geográfica, contratos a largo plazo</p>
              </div>
              
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg">
                <h4 className="font-semibold text-yellow-800">Riesgo Tecnológico</h4>
                <p className="text-yellow-700 text-sm mt-1">Obsolescencia o fallos técnicos</p>
                <p className="text-yellow-600 text-sm mt-2"><strong>Mitigación:</strong> Garantías fabricante, seguros técnicos</p>
              </div>
              
              <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r-lg">
                <h4 className="font-semibold text-blue-800">Riesgo de Mercado</h4>
                <p className="text-blue-700 text-sm mt-1">Fluctuaciones precios energía</p>
                <p className="text-blue-600 text-sm mt-2"><strong>Mitigación:</strong> PPAs a largo plazo, diversificación ingresos</p>
              </div>
            </div>
            
            <div className="bg-white border-2 border-gray-100 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Factores de Protección</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-gray-700">Seguros integrales (todo riesgo)</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-gray-700">Contratos de mantenimiento</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-gray-700">Garantías de rendimiento</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-gray-700">Diversificación de cultivos</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-gray-700">Monitoreo 24/7</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact and Next Steps */}
        <section className="mb-8 print:mb-4">
          <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-8 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Próximos Pasos</h2>
            <p className="text-xl text-green-100 mb-6">
              Únase a la revolución agrovoltaica y sea parte del futuro sostenible
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="bg-white bg-opacity-20 rounded-xl p-4">
                <Calendar className="w-8 h-8 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">1. Due Diligence</h3>
                <p className="text-sm text-green-100">Revisión detallada de documentación</p>
              </div>
              
              <div className="bg-white bg-opacity-20 rounded-xl p-4">
                <Users className="w-8 h-8 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">2. Reunión Ejecutiva</h3>
                <p className="text-sm text-green-100">Presentación del equipo y estrategia</p>
              </div>
              
              <div className="bg-white bg-opacity-20 rounded-xl p-4">
                <ArrowRight className="w-8 h-8 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">3. Estructuración</h3>
                <p className="text-sm text-green-100">Definición de términos y condiciones</p>
              </div>
            </div>
            
            <div className="mt-8 pt-6 border-t border-white border-opacity-30">
              <p className="text-lg font-semibold mb-2">Contacto para Inversores</p>
              <p className="text-green-100">inversores@agrovolt.com | +34 900 123 456</p>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-6 print:py-2">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-gray-400">
            © 2024 AgroVolt. Documento confidencial para uso exclusivo de inversores cualificados.
          </p>
        </div>
      </footer>
    </div>
  );
}