import { Link } from "react-router-dom";
import { ArrowRight, SearchX } from "lucide-react";

export default function NotFoundPage() {
  return (
    <section className="bg-gray-50 min-h-[60vh] flex items-center">
      <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <SearchX className="w-12 h-12 text-gray-300 mx-auto mb-6" />
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Página no encontrada
        </h1>
        <p className="text-gray-600 mb-8">
          El contenido que buscas no existe o ha cambiado de dirección.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-lg"
          >
            Ir al inicio <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            to="/blog"
            className="inline-flex items-center justify-center gap-2 border-2 border-gray-300 text-gray-700 hover:border-gray-900 font-semibold px-6 py-3 rounded-lg"
          >
            Ver el blog
          </Link>
        </div>
      </div>
    </section>
  );
}
