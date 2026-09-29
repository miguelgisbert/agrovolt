import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight, CalendarDays, Clock } from "lucide-react";
import { getPost } from "../lib/content";
import { formatDate } from "../lib/date";
import Markdown from "../components/Markdown";
import CTASection from "../components/CTASection";

export default function BlogPostPage() {
  const { slug } = useParams();
  const post = slug ? getPost(slug) : undefined;

  if (!post) {
    return (
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Artículo no encontrado
        </h1>
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 text-green-700 font-semibold"
        >
          <ArrowLeft className="w-4 h-4" /> Volver al blog
        </Link>
      </section>
    );
  }

  return (
    <>
      <article className="bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <Link
            to="/blog"
            className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-green-700 mb-8"
          >
            <ArrowLeft className="w-4 h-4" /> Todos los artículos
          </Link>

          <div className="flex flex-wrap items-center gap-4 text-xs text-gray-500 mb-5">
            <span className="flex items-center gap-1.5">
              <CalendarDays className="w-3.5 h-3.5" />
              {formatDate(post.date)}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5" />
              {post.readingMinutes} min de lectura
            </span>
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-medium"
              >
                {tag}
              </span>
            ))}
          </div>

          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
            {post.title}
          </h1>
          <p className="text-lg text-gray-600 mb-10">{post.description}</p>

          <Markdown html={post.html} />

          <div className="mt-12 pt-8 border-t border-gray-100 flex flex-wrap gap-4 justify-between items-center">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-green-700 font-semibold"
            >
              <ArrowLeft className="w-4 h-4" /> Más artículos
            </Link>
            <Link
              to="/contacto"
              className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
            >
              Solicitar estudio gratuito <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </article>

      <CTASection />
    </>
  );
}
