import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Zap,
  Sun,
  Droplets,
  Thermometer,
  Sprout,
  AlertTriangle,
  ShieldCheck,
  Wind,
  Gauge,
  Leaf,
  Radio,
  CloudLightning,
  ArrowRight,
} from "lucide-react";
import { track } from "../lib/analytics";

type Mode = "produccion" | "proteccion" | "standby";
type Tab = "panel" | "suelo" | "riego" | "alertas";

type Alert = {
  id: string;
  level: "alta" | "media" | "info";
  title: string;
  text: string;
  when: string;
};

const MODE_ANGLE: Record<Mode, number> = {
  produccion: 32,
  proteccion: 0,
  standby: 15,
};

const MODE_LABEL: Record<Mode, string> = {
  produccion: "Producción",
  proteccion: "Protección",
  standby: "Standby",
};

const INITIAL_ALERTS: Alert[] = [
  {
    id: "viento",
    level: "media",
    title: "Viento fuerte previsto",
    text: "AEMET: rachas de 55 km/mad. Placas limitadas a 45°.",
    when: "hace 12 min",
  },
];

function angleFactor(angle: number) {
  return 0.55 + 0.45 * Math.abs(Math.cos(((angle - 32) * Math.PI) / 180));
}

const tabs: { id: Tab; label: string; icon: typeof Zap }[] = [
  { id: "panel", label: "Panel", icon: Zap },
  { id: "suelo", label: "Suelo", icon: Sprout },
  { id: "riego", label: "Riego", icon: Droplets },
  { id: "alertas", label: "Alertas", icon: AlertTriangle },
];

export default function AppDemo() {
  const [tab, setTab] = useState<Tab>("panel");
  const [mode, setMode] = useState<Mode>("produccion");
  const [angle, setAngle] = useState(MODE_ANGLE.produccion);
  const [kw, setKw] = useState(3.9);
  const [soil, setSoil] = useState(58);
  const [autoRiego, setAutoRiego] = useState(true);
  const [volumen, setVolumen] = useState(6);
  const [riegoActivo, setRiegoActivo] = useState(false);
  const [alerts, setAlerts] = useState<Alert[]>(INITIAL_ALERTS);
  const [granizoActivo, setGranizoActivo] = useState(false);

  useEffect(() => {
    const timer = window.setInterval(() => {
      const factor = angleFactor(angle);
      if (mode === "produccion") {
        const next = Math.max(0, 4.9 * factor + (Math.random() - 0.5) * 0.6);
        setKw(Number(next.toFixed(1)));
      } else if (mode === "standby") {
        setKw(Number((Math.random() * 0.2).toFixed(1)));
      } else {
        setKw(0);
      }

      setSoil((prev) => {
        let next = prev - 0.4;
        if (autoRiego && next < 45) {
          next = Math.min(80, prev + 3);
          setRiegoActivo(true);
          window.setTimeout(() => setRiegoActivo(false), 2500);
        }
        return Math.max(20, Math.min(95, next));
      });
    }, 1800);
    return () => window.clearInterval(timer);
  }, [angle, mode, autoRiego]);

  const applyMode = (next: Mode) => {
    setMode(next);
    setAngle(MODE_ANGLE[next]);
    track("demo_app_action", { action: "mode", mode: next });
  };

  const simulateGranizo = () => {
    const next = !granizoActivo;
    setGranizoActivo(next);
    setTab("alertas");
    if (next) {
      setMode("proteccion");
      setAngle(0);
      setAlerts((prev) => [
        {
          id: "granizo",
          level: "alta",
          title: "Aviso de granizo",
          text: "Las placas han pasado a horizontal (0°) de forma automática.",
          when: "ahora",
        },
        ...prev.filter((a) => a.id !== "granizo"),
      ]);
    } else {
      setMode("produccion");
      setAngle(MODE_ANGLE.produccion);
      setAlerts((prev) => prev.filter((a) => a.id !== "granizo"));
    }
    track("demo_app_action", { action: "granizo", active: String(next) });
  };

  const regarAhora = () => {
    setSoil((prev) => Math.min(95, prev + 8));
    setRiegoActivo(true);
    window.setTimeout(() => setRiegoActivo(false), 2500);
    track("demo_app_action", { action: "riego_manual" });
  };

  const factor = angleFactor(angle);
  const kwh = Math.round(kw * 3.4);
  const humidityLevel =
    soil < 40 ? "Baja" : soil < 55 ? "Óptima" : "Húmeda";
  const humidityColor =
    soil < 40 ? "text-red-500" : soil < 55 ? "text-green-600" : "text-blue-600";
  const productionBars = [0.35, 0.5, 0.72, 0.9, 1, 0.95, 0.8, 0.6].map((v) =>
    Math.round(v * factor * 100)
  );
  const soilBars = [72, 70, 67, 64, 61, 59, 58, Math.round(soil)];

  return (
    <div className="grid lg:grid-cols-2 gap-12 items-start">
      <div className="flex justify-center lg:justify-start">
        <div className="w-[320px] max-w-full">
          <div className="bg-gray-900 rounded-[3rem] p-2.5 shadow-2xl">
            <div className="bg-black rounded-[2.4rem] p-1">
              <div className="bg-white rounded-[2rem] overflow-hidden">
                <div className="bg-gray-50 px-4 py-1.5 flex justify-between items-center text-xs font-semibold text-gray-700">
                  <span>9:41</span>
                  <span className="flex items-center gap-1">
                    <Radio className="w-3 h-3 text-green-600" />
                    87%
                  </span>
                </div>

                <div className="px-4 py-2.5 border-b border-gray-100 flex items-center justify-between">
                  <div>
                    <p className="text-sm font-bold text-gray-900">
                      Finca El Rodenal
                    </p>
                    <p className="text-[11px] text-gray-500">
                      12 ha · cítricos · 42 kWp
                    </p>
                  </div>
                  <span className="flex items-center gap-1 text-[11px] font-semibold text-green-700 bg-green-100 px-2 py-1 rounded-full">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                    En línea
                  </span>
                </div>

                <div className="h-[430px] overflow-hidden p-3 bg-gradient-to-b from-gray-50 to-white">
                  {tab === "panel" && (
                    <div className="space-y-2.5">
                      <div className="bg-gray-900 rounded-2xl p-3.5 relative overflow-hidden">
                        <div className="flex justify-between items-start">
                          <div>
                            <p className="text-[11px] uppercase tracking-wide text-gray-400">
                              Potencia instantánea
                            </p>
                            <p className="text-3xl font-bold text-white">
                              {kw.toFixed(1)}{" "}
                              <span className="text-base text-yellow-400">
                                kW
                              </span>
                            </p>
                          </div>
                          <span
                            className={`text-[11px] font-semibold px-2 py-1 rounded-full ${
                              mode === "produccion"
                                ? "bg-green-500/20 text-green-300"
                                : mode === "proteccion"
                                  ? "bg-yellow-500/20 text-yellow-300"
                                  : "bg-gray-500/20 text-gray-300"
                            }`}
                          >
                            {MODE_LABEL[mode]}
                          </span>
                        </div>

                        <div className="mt-3 h-14 relative">
                          <div className="absolute inset-x-0 bottom-0 flex items-end gap-1.5 h-full">
                            {productionBars.map((h, i) => (
                              <div
                                key={i}
                                className="flex-1 bg-gradient-to-t from-green-600 to-yellow-400 rounded-t"
                                style={{ height: `${Math.max(6, h)}%` }}
                              />
                            ))}
                          </div>
                        </div>
                        <div className="flex justify-between text-[10px] text-gray-400 mt-1">
                          <span>08:00</span>
                          <span>12:00</span>
                          <span>16:00</span>
                        </div>
                      </div>

                      <div className="bg-white rounded-2xl p-3 shadow-sm border border-gray-100">
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-xs font-semibold text-gray-700 flex items-center gap-1.5">
                            <Gauge className="w-3.5 h-3.5 text-green-600" />
                            Inclinación de las placas
                          </span>
                          <span className="text-sm font-bold text-green-600">
                            {angle}°
                          </span>
                        </div>
                        <input
                          type="range"
                          min={0}
                          max={60}
                          step={1}
                          value={angle}
                          aria-label="Inclinación de las placas"
                          onChange={(e) => {
                            const v = Number(e.target.value);
                            setAngle(v);
                            setMode(
                              v === 0
                                ? "proteccion"
                                : v > 45
                                  ? "standby"
                                  : "produccion"
                            );
                          }}
                          className="w-full accent-green-600"
                        />
                        <div className="flex justify-between text-[10px] text-gray-400">
                          <span>0° horizontal</span>
                          <span>60° vertical</span>
                        </div>
                      </div>

                      <div className="grid grid-cols-3 gap-2">
                        {(Object.keys(MODE_LABEL) as Mode[]).map((m) => (
                          <button
                            key={m}
                            type="button"
                            onClick={() => applyMode(m)}
                            className={`text-xs font-semibold py-2 rounded-lg border transition-colors ${
                              mode === m
                                ? "bg-green-600 border-green-600 text-white"
                                : "bg-white border-gray-200 text-gray-600 hover:border-green-300"
                            }`}
                          >
                            {MODE_LABEL[m]}
                          </button>
                        ))}
                      </div>

                      <div className="grid grid-cols-2 gap-3">
                        <div className="bg-white rounded-xl p-2.5 shadow-sm border border-gray-100">
                          <p className="text-[11px] text-gray-500">
                            Energía de hoy
                          </p>
                          <p className="text-lg font-bold text-green-600">
                            {kwh} kWh
                          </p>
                        </div>
                        <div className="bg-white rounded-xl p-2.5 shadow-sm border border-gray-100">
                          <p className="text-[11px] text-gray-500">
                            Inversor
                          </p>
                          <p className="text-lg font-bold text-gray-800">
                            {mode === "produccion" ? 41 : 28} °C
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  {tab === "suelo" && (
                    <div className="space-y-2">
                      <div className="bg-white rounded-2xl p-3 shadow-sm border border-gray-100">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-xs font-semibold text-gray-700">
                            Humedad del suelo
                          </span>
                          <span
                            className={`text-xs font-semibold ${humidityColor}`}
                          >
                            {humidityLevel}
                          </span>
                        </div>
                        <p className="text-2xl font-bold text-gray-900 mb-2">
                          {Math.round(soil)}
                          <span className="text-lg text-gray-400">%</span>
                        </p>
                        <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-blue-400 to-blue-600 rounded-full transition-all duration-700"
                            style={{ width: `${Math.round(soil)}%` }}
                          />
                        </div>
                        <p className="text-[11px] text-gray-500 mt-2">
                          Umbral de riego configurado: 45%
                        </p>
                      </div>

                      {soil < 45 ? (
                        <div className="flex items-center gap-2 bg-amber-50 border border-amber-200 text-amber-800 text-xs font-medium rounded-xl px-3 py-2.5">
                          <AlertTriangle className="w-4 h-4 flex-shrink-0" />
                          Riego recomendado en la zona norte
                        </div>
                      ) : (
                        <div className="bg-white rounded-2xl p-3 shadow-sm border border-gray-100">
                          <p className="text-xs font-semibold text-gray-700 mb-2">
                            Últimas 8 lecturas (sonda norte)
                          </p>
                          <div className="flex items-end gap-1.5 h-12">
                            {soilBars.map((h, i) => (
                              <div
                                key={i}
                                className="flex-1 bg-blue-400 rounded"
                                style={{ height: `${h}%` }}
                              />
                            ))}
                          </div>
                        </div>
                      )}

                      <div className="grid grid-cols-2 gap-3">
                        {[
                          {
                            icon: Thermometer,
                            label: "Temp. suelo",
                            value: "22 °C",
                          },
                          {
                            icon: Sun,
                            label: "Temp. aire",
                            value: "28 °C",
                          },
                          {
                            icon: Droplets,
                            label: "Humedad relativa",
                            value: "61 %",
                          },
                          {
                            icon: Leaf,
                            label: "Radiación PAR",
                            value: "740 µmol",
                          },
                        ].map((m) => (
                          <div
                            key={m.label}
                            className="bg-white rounded-xl p-2 shadow-sm border border-gray-100"
                          >
                            <m.icon className="w-4 h-4 text-green-600 mb-1" />
                            <p className="text-[11px] text-gray-500">
                              {m.label}
                            </p>
                            <p className="text-sm font-bold text-gray-900">
                              {m.value}
                            </p>
                          </div>
                        ))}
                      </div>

                    </div>
                  )}

                  {tab === "riego" && (
                    <div className="space-y-2">
                      <div className="bg-white rounded-2xl p-2.5 shadow-sm border border-gray-100">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-sm font-semibold text-gray-900">
                              Riego automático
                            </p>
                            <p className="text-[11px] text-gray-500">
                              Sonda → bomba según umbral
                            </p>
                          </div>
                          <button
                            type="button"
                            role="switch"
                            aria-checked={autoRiego}
                            aria-label="Riego automático"
                            onClick={() => setAutoRiego((v) => !v)}
                            className={`w-12 h-7 rounded-full transition-colors relative ${
                              autoRiego ? "bg-green-500" : "bg-gray-300"
                            }`}
                          >
                            <span
                              className={`absolute top-1 w-5 h-5 bg-white rounded-full transition-all ${
                                autoRiego ? "left-6" : "left-1"
                              }`}
                            />
                          </button>
                        </div>
                      </div>

                      <div className="bg-white rounded-2xl p-2.5 shadow-sm border border-gray-100">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-xs font-semibold text-gray-700">
                            Volumen por zona
                          </span>
                          <span className="text-sm font-bold text-blue-600">
                            {volumen} L/m²
                          </span>
                        </div>
                        <input
                          type="range"
                          min={2}
                          max={14}
                          step={1}
                          value={volumen}
                          aria-label="Volumen de riego por zona"
                          onChange={(e) => setVolumen(Number(e.target.value))}
                          className="w-full accent-blue-600"
                        />
                      </div>

                      <button
                        type="button"
                        onClick={regarAhora}
                        className={`w-full py-2.5 rounded-xl font-semibold text-sm transition-colors flex items-center justify-center gap-2 ${
                          riegoActivo
                            ? "bg-blue-100 text-blue-700"
                            : "bg-blue-600 hover:bg-blue-700 text-white"
                        }`}
                      >
                        <Droplets className="w-4 h-4" />
                        {riegoActivo ? "Regando…" : "Regar ahora"}
                      </button>

                      <div className="bg-green-50 border border-green-200 rounded-xl p-2.5">
                        <p className="text-[11px] text-green-700 font-semibold uppercase tracking-wide mb-1">
                          Ahorro frente a riego convencional
                        </p>
                        <p className="text-xl font-bold text-green-700">
                          −38%
                        </p>
                        <p className="text-[11px] text-green-700/80 mt-1">
                          ≈ 1.240 L ahorrados hoy en las zonas con sombra
                        </p>
                      </div>

                      <div className="bg-white rounded-2xl p-2.5 shadow-sm border border-gray-100">
                        <p className="text-xs font-semibold text-gray-700 mb-2">
                          Programación diaria
                        </p>
                        <div className="flex gap-2">
                          {["06:00", "14:00", "22:00"].map((h) => (
                            <span
                              key={h}
                              className="flex-1 text-center text-xs font-medium bg-gray-100 rounded-lg py-2"
                            >
                              {h}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {tab === "alertas" && (
                    <div className="space-y-2.5">
                      <button
                        type="button"
                        onClick={simulateGranizo}
                        aria-pressed={granizoActivo}
                        className={`w-full py-2.5 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 transition-colors ${
                          granizoActivo
                            ? "bg-red-500 hover:bg-red-600 text-white"
                            : "bg-yellow-500 hover:bg-yellow-600 text-white"
                        }`}
                      >
                        <CloudLightning className="w-4 h-4" />
                        {granizoActivo
                          ? "Retirar aviso de granizo"
                          : "Simular aviso de granizo"}
                      </button>

                      {alerts.map((a) => (
                        <div
                          key={a.id}
                          className={`rounded-xl p-3 border ${
                            a.level === "alta"
                              ? "bg-red-50 border-red-200"
                              : a.level === "media"
                                ? "bg-amber-50 border-amber-200"
                                : "bg-blue-50 border-blue-200"
                          }`}
                        >
                          <div className="flex items-start gap-2.5">
                            <ShieldCheck
                              className={`w-4 h-4 mt-0.5 flex-shrink-0 ${
                                a.level === "alta"
                                  ? "text-red-600"
                                  : a.level === "media"
                                    ? "text-amber-600"
                                    : "text-blue-600"
                              }`}
                            />
                            <div>
                              <p className="text-xs font-bold text-gray-900">
                                {a.title}
                              </p>
                              <p className="text-[11px] text-gray-600 mt-0.5">
                                {a.text}
                              </p>
                              <p className="text-[10px] text-gray-400 mt-1">
                                {a.when}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}

                      <div className="bg-white rounded-xl p-3 border border-gray-100 shadow-sm flex items-start gap-2.5">
                        <Wind className="w-4 h-4 mt-0.5 text-gray-500" />
                        <div>
                          <p className="text-xs font-bold text-gray-900">
                            Integración meteorológica
                          </p>
                          <p className="text-[11px] text-gray-600 mt-0.5">
                            Avisos de AEMET configurados para la finca.
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                <nav className="grid grid-cols-4 border-t border-gray-100 bg-white">
                  {tabs.map((t) => (
                    <button
                      key={t.id}
                      type="button"
                      onClick={() => setTab(t.id)}
                      className={`relative py-2 flex flex-col items-center gap-1 text-[10px] font-semibold transition-colors ${
                        tab === t.id
                          ? "text-green-600"
                          : "text-gray-400 hover:text-gray-600"
                      }`}
                    >
                      <t.icon className="w-4 h-4" />
                      {t.label}
                      {t.id === "alertas" && alerts.length > 0 && (
                        <span className="absolute top-1.5 right-[26px] w-2 h-2 bg-red-500 rounded-full" />
                      )}
                    </button>
                  ))}
                </nav>
              </div>
            </div>
          </div>
          <p className="text-center text-xs text-gray-500 mt-3">
            Demo interactiva · datos simulados
          </p>
        </div>
      </div>

      <div className="space-y-6">
        <div>
          <span className="inline-flex items-center gap-2 bg-green-100 text-green-800 text-xs font-semibold px-3 py-1.5 rounded-full mb-4">
            <ShieldCheck className="w-4 h-4" />
            Demo interactiva · toca para probar
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Tu instalación y tu cultivo, en la misma app
          </h2>
          <p className="text-gray-600 text-lg">
            Mueve el inclinador y mira cómo cambia la producción, revisa la
            humedad de la sonda, lanza un riego o simula un aviso de granizo:
            así se controla una instalación agrovoltaica AgroVolt desde el
            móvil.
          </p>
        </div>

        <ul className="space-y-4">
          {[
            {
              icon: Gauge,
              title: "Producción eléctrica en tiempo real",
              text: "Potencia instantánea, energía del día y estado del inversor, con histórico por horas.",
            },
            {
              icon: Sprout,
              title: "Variables agrícolas de la finca",
              text: "Humedad del suelo por sondas, temperatura, humedad relativa y radiación PAR.",
            },
            {
              icon: Sun,
              title: "Control de apertura de las placas",
              text: "Ángulo manual de 0° a 60° o modos automáticos: Producción, Protección y Standby.",
            },
            {
              icon: Droplets,
              title: "Riego y ahorro de agua",
              text: "Programación por zonas, riego manual desde el móvil y ahorro frente al riego convencional.",
            },
          ].map((f) => (
            <li key={f.title} className="flex items-start gap-4">
              <span className="flex items-center justify-center w-10 h-10 rounded-lg bg-green-100 flex-shrink-0">
                <f.icon className="w-5 h-5 text-green-600" />
              </span>
              <div>
                <h3 className="font-semibold text-gray-900">{f.title}</h3>
                <p className="text-sm text-gray-600">{f.text}</p>
              </div>
            </li>
          ))}
        </ul>

        <div className="bg-gray-900 rounded-2xl p-6 text-white">
          <p className="text-lg font-semibold mb-1">
            ¿Quieres verla con los datos de tu finca?
          </p>
          <p className="text-gray-400 text-sm mb-4">
            Te enseñamos la app con un caso parecido al tuyo durante la
            videollamada.
          </p>
          <Link
            to="/contacto"
            onClick={() => track("cta_click", { location: "app_demo" })}
            className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
          >
            Solicitar demo y estudio gratuito
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
