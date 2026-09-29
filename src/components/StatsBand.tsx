import { Droplets, ShieldHalf, Tractor, TrendingUp, Zap } from "lucide-react";

const STATS = [
  {
    icon: Droplets,
    value: "-40%",
    label: "agua de riego",
    detail: "Sombra parcial que reduce la evapotranspiración del cultivo.",
  },
  {
    icon: ShieldHalf,
    value: "24/7",
    label: "protección antigranizo",
    detail: "Aviso meteorológico y placas en posición horizontal automática.",
  },
  {
    icon: Tractor,
    value: "4-6 m",
    label: "altura libre",
    detail: "Paso de tractores, cosechadoras y aperos sin restricciones.",
  },
  {
    icon: TrendingUp,
    value: "25 años",
    label: "de vida útil",
    detail: "Doble uso del suelo: cultivo y energía en la misma hectárea.",
  },
];

const SELF_USE = {
  icon: Zap,
  value: "Autoconsumo",
  label: "bombas, herramientas y maquinaria",
  detail:
    "La energía que genera tu propia finca mueve el riego, las herramientas y los aperos: menos factura eléctrica y menos gasóleo en el tractor.",
};

export default function StatsBand() {
  return (
    <section className="py-16 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
          Qué gana tu finca con el sistema AgroVolt
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="bg-gray-800/70 rounded-2xl p-6 border border-gray-700"
            >
              <stat.icon className="w-7 h-7 text-yellow-400 mb-4" />
              <div className="text-3xl font-bold text-white mb-1">
                {stat.value}
              </div>
              <div className="text-sm font-semibold text-green-300 mb-2">
                {stat.label}
              </div>
              <p className="text-sm text-gray-400 leading-relaxed">
                {stat.detail}
              </p>
            </div>
          ))}

          <div className="sm:col-span-2 lg:col-span-4 flex items-start gap-4 rounded-2xl border border-yellow-500/30 bg-gradient-to-r from-yellow-500/15 via-amber-500/10 to-green-500/10 p-6">
            <span className="flex items-center justify-center w-11 h-11 rounded-xl bg-yellow-400/15 flex-shrink-0">
              <SELF_USE.icon className="w-6 h-6 text-yellow-300" />
            </span>
            <div>
              <div className="text-2xl font-bold text-white">
                {SELF_USE.value}
              </div>
              <div className="text-sm font-semibold text-yellow-300 mb-1">
                {SELF_USE.label}
              </div>
              <p className="text-sm text-gray-300 leading-relaxed">
                {SELF_USE.detail}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
