import { Link } from "react-router-dom";
import { ArrowRight, CalendarDays, Clock } from "lucide-react";
import { getAllPosts } from "../lib/content";
import { formatDate } from "../lib/date";

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <section className="bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Blog de <span className="text-green-600">agrovoltaica</span>
        </h1>
        <p className="text-lg text-gray-600 mb-12 max-w-2xl">
          Guías prácticas, ayudas, casos de estudio y novedades para
          explotaciones agrícolas que quieren proteger su cultivo y generar su
          propia energía.
        </p>

        <div className="space-y-8">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow p-7"
            >
              <div className="flex flex-wrap items-center gap-4 text-xs text-gray-500 mb-3">
                <span className="flex items-center gap-1.5">
                  <CalendarDays className="w-3.5 h-3.5" />
                  {formatDate(post.date)}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5" />
                  {post.readingMinutes} min de lectura
                </span>
                {post.tags.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    className="bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                <Link
                  to={`/blog/${post.slug}`}
                  className="hover:text-green-700 transition-colors"
                >
                  {post.title}
                </Link>
              </h2>
              <p className="text-gray-600 mb-5 leading-relaxed">
                {post.description}
              </p>
              <Link
                to={`/blog/${post.slug}`}
                className="inline-flex items-center gap-2 text-green-700 font-semibold hover:gap-3 transition-all"
              >
                Leer el artículo <ArrowRight className="w-4 h-4" />
              </Link>
            </article>
          ))}

          {posts.length === 0 && (
            <p className="text-gray-500">
              Estamos preparando los primeros artículos.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
