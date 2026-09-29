import { useEffect, useState } from "react";
import { Cookie } from "lucide-react";
import { getConsent, setConsent } from "../lib/analytics";

export default function CookiesPage() {
  const [current, setCurrent] = useState<null | "granted" | "denied">(null);

  useEffect(() => {
    setCurrent(getConsent());
  }, []);

  const update = (value: "granted" | "denied") => {
    setConsent(value);
    setCurrent(value);
  };

  return (
    <section className="bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          Política de cookies
        </h1>

        <div className="space-y-5 text-gray-700 leading-relaxed text-[15px]">
          <p>
            Esta web solo utiliza cookies y tecnologías similares cuando tú lo
            autorizas. No instalamos cookies publicitarias ni de terceros con
            fines comerciales.
          </p>

          <h2 className="text-xl font-semibold text-gray-900 pt-3">
            Cookies y almacenamiento que usamos
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>agrovolt_cookie_consent</strong> (localStorage): guarda tu
              decisión sobre la analítica para no preguntarte en cada visita.
              Caduca cuando borras los datos del navegador.
            </li>
            <li>
              <strong>Google Analytics</strong> (_ga, _ga_…): solo se instalan
              si aceptas. Miden de forma anónima qué páginas se visitan para
              mejorar los contenidos. Responsable: Google Ireland Ltd.
            </li>
          </ul>

          <h2 className="text-xl font-semibold text-gray-900 pt-3">
            Cómo cambiar tu decisión
          </h2>
          <p>
            Puedes aceptar o rechazar la analítica en cualquier momento con los
            botones de abajo, o borrando los datos del sitio en tu navegador.
          </p>

          <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6">
            <div className="flex items-center gap-2 mb-4">
              <Cookie className="w-5 h-5 text-yellow-500" />
              <span className="font-semibold text-gray-900">
                Preferencias actuales:{" "}
                {current === null
                  ? "sin decidir"
                  : current === "granted"
                    ? "analítica aceptada"
                    : "analítica rechazada"}
              </span>
            </div>
            <div className="flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() => update("granted")}
                className="px-5 py-2.5 rounded-lg bg-green-600 hover:bg-green-700 text-white font-medium text-sm"
              >
                Aceptar analítica
              </button>
              <button
                type="button"
                onClick={() => update("denied")}
                className="px-5 py-2.5 rounded-lg border border-gray-300 text-gray-700 font-medium text-sm hover:bg-gray-100"
              >
                Rechazar analítica
              </button>
            </div>
          </div>

          <h2 className="text-xl font-semibold text-gray-900 pt-3">
            Más información
          </h2>
          <p>
            Para saber cómo tratamos tus datos personales, consulta la{" "}
            <a href="/privacidad" className="text-green-700 underline">
              política de privacidad
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
