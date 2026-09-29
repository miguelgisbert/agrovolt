import { Link } from "react-router-dom";
import {
  CalendarClock,
  Check,
  ClipboardList,
  Mail,
  MessageSquare,
  Video,
} from "lucide-react";
import ContactForm from "../components/ContactForm";
import GoogleCalendarButton from "../components/GoogleCalendarButton";
import { SITE } from "../data/site";

const STEPS = [
  {
    icon: MessageSquare,
    title: "Nos cuentas tu caso",
    text: "Formulario o videollamada: cultivo, superficie y consumo actual.",
  },
  {
    icon: ClipboardList,
    title: "Estudio de viabilidad",
    text: "Dimensionamos la instalación, el ahorro estimado y el retorno.",
  },
  {
    icon: CalendarClock,
    title: "Propuesta y calendario",
    text: "Diseño, permisos, ayudas aplicables y fechas de instalación.",
  },
];

export default function ContactPage() {
  return (
    <section className="bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Estudio de viabilidad <span className="text-green-600">gratuito</span>
          </h1>
          <p className="text-lg text-gray-600">
            Cuéntanos cómo es tu explotación y te decimos qué puede aportarte un
            sistema agrovoltaico. Respuesta en menos de 48 horas, sin
            compromiso.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10">
          <div className="lg:col-span-3 bg-white rounded-2xl border border-gray-100 shadow-sm p-7 sm:p-9">
            <h2 className="text-xl font-bold text-gray-900 mb-6">
              Solicita tu consulta
            </h2>
            <ContactForm />
          </div>

          <aside className="lg:col-span-2 space-y-6">
            <div className="meet-card rounded-3xl p-7 text-white">
              <div className="relative z-10">
                <div className="flex items-center justify-between gap-3">
                  <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.18em] text-emerald-300">
                    <Video className="w-4 h-4" />
                    Google Meet
                  </span>
                  <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-bold ring-1 ring-white/25 tabular-nums">
                    30 min
                  </span>
                </div>

                <h2 className="mt-4 text-2xl font-bold leading-snug">
                  Agenda tu videollamada
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-emerald-50/85">
                  Tú eliges el día y la hora. Lo revisamos todo con pantalla
                  compartida: facturas de la luz, parcela y dudas de permisos.
                </p>

                <div className="meet-card__rule my-5" />

                <ul className="space-y-2.5 text-sm text-emerald-50/90">
                  {[
                    "Te llega el enlace de Meet al correo",
                    "Sin compromiso y sin coste",
                    "Contestamos en menos de 48 h",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <span className="mt-0.5 flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full bg-emerald-400/25 ring-1 ring-emerald-300/50">
                        <Check className="h-2.5 w-2.5 text-emerald-200" />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="mt-6">
                  <GoogleCalendarButton />
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-7">
              <h2 className="text-lg font-bold text-gray-900 mb-4">
                Qué ocurre después
              </h2>
              <ol className="space-y-4">
                {STEPS.map((step, i) => (
                  <li key={step.title} className="flex items-start gap-3">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-green-100 text-green-700 text-sm font-bold flex-shrink-0">
                      {i + 1}
                    </span>
                    <div>
                      <p className="font-semibold text-gray-900 text-sm">
                        {step.title}
                      </p>
                      <p className="text-sm text-gray-600">{step.text}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-7 flex items-start gap-3">
              <Mail className="w-5 h-5 text-green-600 mt-0.5" />
              <div>
                <p className="text-sm font-semibold text-gray-900">
                  También por correo
                </p>
                <a
                  href={`mailto:${SITE.email}`}
                  className="text-green-700 text-sm underline"
                >
                  {SITE.email}
                </a>
              </div>
            </div>
          </aside>
        </div>

        <p className="text-center text-sm text-gray-500 mt-10">
          ¿Tienes dudas antes de escribir? Revisa las{" "}
          <Link to="/faq" className="text-green-700 underline">
            preguntas frecuentes
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
