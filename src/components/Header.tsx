import { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, ArrowRight } from "lucide-react";
import { NAV, SITE } from "../data/site";
import { track } from "../lib/analytics";

export default function Header() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link
            to="/"
            className="flex items-center gap-2"
            aria-label={`${SITE.name} - Inicio`}
          >
            <img
              src="/logo.svg"
              alt={SITE.name}
              width={135}
              height={40}
              className="h-8 w-auto"
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-7">
            {NAV.map((item) => (
              <NavLink
                key={item.href}
                to={item.href}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors ${
                    isActive || (item.href !== "/" && pathname.startsWith(item.href))
                      ? "text-green-700"
                      : "text-gray-600 hover:text-green-700"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              to="/contacto"
              onClick={() => track("cta_click", { location: "header" })}
              className="hidden sm:inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white text-sm font-semibold px-4 py-2.5 rounded-lg transition-colors"
            >
              Estudio gratuito
              <ArrowRight className="w-4 h-4" />
            </Link>
            <button
              type="button"
              className="lg:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-label={open ? "Cerrar menú" : "Abrir menú"}
            >
              {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-gray-100 bg-white shadow-lg">
          <nav className="px-4 py-3 flex flex-col">
            {NAV.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                onClick={() => setOpen(false)}
                className="py-3 text-gray-700 font-medium border-b border-gray-50 last:border-0"
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/contacto"
              onClick={() => {
                setOpen(false);
                track("cta_click", { location: "header_mobile" });
              }}
              className="mt-3 mb-2 text-center bg-green-600 text-white font-semibold px-4 py-3 rounded-lg"
            >
              Solicitar estudio gratuito
            </Link>
          </nav>
        </div>
      )}

      {open && (
        <div
          className="lg:hidden absolute left-0 right-0 top-full h-[calc(100vh-4rem)] bg-gray-900/40"
          aria-hidden="true"
          onClick={() => setOpen(false)}
        />
      )}
    </header>
  );
}
