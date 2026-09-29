import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Cookie } from "lucide-react";
import { getConsent, setConsent, track } from "../lib/analytics";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const [checked, setChecked] = useState(true);

  useEffect(() => {
    if (getConsent() !== null) return;
    const timer = window.setTimeout(() => setVisible(true), 800);
    return () => window.clearTimeout(timer);
  }, []);

  if (!visible) return null;

  const decide = (value: "granted" | "denied") => {
    setConsent(value);
    if (value === "granted") track("cookie_consent", { choice: "accepted" });
    setVisible(false);
  };

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 p-4 sm:p-6">
      <div className="max-w-4xl mx-auto bg-white border border-gray-200 shadow-2xl rounded-2xl p-5 sm:p-6">
        <div className="flex items-start gap-3">
          <Cookie className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-0.5" />
          <div className="text-sm text-gray-600">
            <p className="font-semibold text-gray-900 mb-1">
              Usamos cookies analíticas
            </p>
            <p>
              Solo con tu permiso instalamos Google Analytics para entender qué
              contenidos son útiles. Puedes consultar los detalles en la{" "}
              <Link to="/cookies" className="text-green-700 underline">
                política de cookies
              </Link>
              .
            </p>
            <label className="flex items-center gap-2 mt-3 text-gray-700">
              <input
                type="checkbox"
                checked={checked}
                onChange={(e) => setChecked(e.target.checked)}
                className="h-4 w-4 rounded border-gray-300 text-green-600 focus:ring-green-500"
              />
              Acepto medición anónima de visitas
            </label>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 mt-4 sm:justify-end">
          <button
            type="button"
            onClick={() => decide("denied")}
            className="px-5 py-2.5 rounded-lg border border-gray-300 text-gray-700 font-medium hover:bg-gray-50"
          >
            Rechazar
          </button>
          <button
            type="button"
            onClick={() => decide(checked ? "granted" : "denied")}
            className="px-5 py-2.5 rounded-lg bg-green-600 hover:bg-green-700 text-white font-medium"
          >
            Aceptar
          </button>
        </div>
      </div>
    </div>
  );
}
