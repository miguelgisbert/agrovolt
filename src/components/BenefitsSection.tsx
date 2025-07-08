import { TrendingUp, Shield, Leaf, Zap, Droplets, Euro } from 'lucide-react';

export default function BenefitsSection() {
  const benefits = [
    {
      icon: TrendingUp,
      title: "Doble Rendimiento",
      description: "Genera ingresos por energía mientras mantienes tu producción agrícola",
      color: "green"
    },
    {
      icon: Shield,
      title: "Protección Climática",
      description: "Protege cultivos del granizo, exceso de sol y lluvia intensa",
      color: "blue"
    },
    {
      icon: Droplets,
      title: "Ahorro de Agua",
      description: "Reduce hasta 40% el consumo de agua de riego",
      color: "cyan"
    },
    {
      icon: Zap,
      title: "Energía Limpia",
      description: "Electricidad para bombas, riego y maquinaria de la granja",
      color: "yellow"
    },
    {
      icon: Leaf,
      title: "Sostenibilidad",
      description: "Reduce tu huella de carbono y contribuye al medio ambiente",
      color: "emerald"
    },
    {
      icon: Euro,
      title: "Rentabilidad",
      description: "Inversión que se amortiza en 5-7 años con múltiples beneficios",
      color: "indigo"
    }
  ];

  const colorMap = {
    green: "bg-green-100 text-green-600",
    blue: "bg-blue-100 text-blue-600",
    cyan: "bg-cyan-100 text-cyan-600",
    yellow: "bg-yellow-100 text-yellow-600",
    emerald: "bg-emerald-100 text-emerald-600",
    indigo: "bg-indigo-100 text-indigo-600"
  };

  return (
    <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Beneficios de la <span className="text-green-600">Agrovoltaica</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Descubre cómo esta tecnología innovadora puede transformar tu explotación agrícola
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="group bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className={`w-16 h-16 rounded-xl ${colorMap[benefit.color]} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <benefit.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
              <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}