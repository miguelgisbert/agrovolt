import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Loader2, Send, CheckCircle2, AlertCircle } from "lucide-react";
import FieldSelect from "./FieldSelect";
import { EMAILJS } from "../data/site";
import { track } from "../lib/analytics";

type Status = "idle" | "sending" | "ok" | "error";

const CULTIVOS = [
  "Cítricos",
  "Hortalizas y huerta",
  "Viña",
  "Olivar",
  "Frutales y almendro",
  "Ganadería / forraje",
  "Envescamiento / multifruto",
  "Otro",
];

const SUPERFICIES = [
  "Menos de 1 ha",
  "1 - 5 ha",
  "5 - 20 ha",
  "20 - 50 ha",
  "Más de 50 ha",
];

const inputClass =
  "w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent";


export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    if (String(data.get("empresa") || "").length > 0) {
      setStatus("ok");
      return;
    }

    const message = [
      String(data.get("mensaje") || "(sin mensaje)"),
      "",
      "——— Datos de la consulta ———",
      `Teléfono: ${String(data.get("telefono") || "no indicado")}`,
      `Cultivo: ${String(data.get("cultivo") || "no indicado")}`,
      `Superficie: ${String(data.get("superficie") || "no indicado")}`,
      `Origen: agrovolt.es/contacto`,
    ].join("\n");

    setStatus("sending");
    try {
      await emailjs.send(
        EMAILJS.serviceId,
        EMAILJS.templateId,
        {
          from_name: String(data.get("nombre")),
          from_email: String(data.get("email")),
          reply_to: String(data.get("email")),
          to_email: EMAILJS.toEmail,
          message,
        },
        {
          publicKey: EMAILJS.publicKey,
          limitRate: { id: "agrovolt_contacto", throttle: 60000 },
        }
      );
      track("generate_lead", {
        cultivo: String(data.get("cultivo") || ""),
        superficie: String(data.get("superficie") || ""),
      });
      setStatus("ok");
      form.reset();
    } catch {
      setStatus("error");
    }
  };

  if (status === "ok") {
    return (
      <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
        <CheckCircle2 className="w-10 h-10 text-green-600 mx-auto mb-4" />
        <h3 className="text-xl font-bold text-gray-900 mb-2">
          ¡Consulta enviada!
        </h3>
        <p className="text-gray-600">
          Te respondemos en menos de 48 horas con los siguientes pasos de tu
          estudio de viabilidad.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4" noValidate={false}>
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 mb-1.5">
            Nombre y apellidos *
          </label>
          <input id="nombre" name="nombre" type="text" required autoComplete="name" className={inputClass} placeholder="Juan Pérez" />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">
            Correo electrónico *
          </label>
          <input id="email" name="email" type="email" required autoComplete="email" className={inputClass} placeholder="tu@explotacion.es" />
        </div>
        <div>
          <label htmlFor="telefono" className="block text-sm font-medium text-gray-700 mb-1.5">
            Teléfono (opcional)
          </label>
          <input id="telefono" name="telefono" type="tel" autoComplete="tel" className={inputClass} placeholder="600 000 000" />
        </div>
        <div>
          <FieldSelect
            id="cultivo"
            name="cultivo"
            label="Cultivo principal"
            placeholder="Selecciona un cultivo"
            options={CULTIVOS}
          />
        </div>
        <div>
          <FieldSelect
            id="superficie"
            name="superficie"
            label="Superficie de la explotación"
            placeholder="Selecciona una superficie"
            options={SUPERFICIES}
          />
        </div>
      </div>

      <div>
        <label htmlFor="mensaje" className="block text-sm font-medium text-gray-700 mb-1.5">
          Cuéntanos tu caso *
        </label>
        <textarea
          id="mensaje"
          name="mensaje"
          rows={4}
          required
          className={inputClass}
          placeholder="Superficie, cultivo, si ya tienes instalación solar, fechas en las que te interesa empezar…"
        />
      </div>

      <input
        type="text"
        name="empresa"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="absolute -left-[9999px] h-0 w-0 opacity-0"
      />

      <label className="flex items-start gap-3 text-sm text-gray-600">
        <input
          type="checkbox"
          name="consent"
          required
          className="mt-1 h-4 w-4 rounded border-gray-300 text-green-600 focus:ring-green-500"
        />
        <span>
          He leído y acepto la{" "}
          <a href="/privacidad" className="text-green-700 underline">
            política de privacidad
          </a>
          . Usaremos tus datos únicamente para responder a esta consulta. *
        </span>
      </label>

      {status === "error" && (
        <div className="flex items-center gap-2 text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg px-4 py-3">
          <AlertCircle className="w-4 h-4 flex-shrink-0" />
          No se ha podido enviar. Escríbenos directamente a{" "}
          <a href="mailto:info@agrovolt.es" className="underline">
            info@agrovolt.es
          </a>
        </div>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 disabled:opacity-60 text-white font-semibold px-8 py-4 rounded-lg text-lg transition-colors"
      >
        {status === "sending" ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" /> Enviando…
          </>
        ) : (
          <>
            <Send className="w-5 h-5" /> Solicitar estudio gratuito
          </>
        )}
      </button>
    </form>
  );
}
