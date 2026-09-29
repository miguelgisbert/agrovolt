import { useEffect, useRef } from "react";
import { marked } from "marked";

const escapeHtml = (value: string) =>
  value.replace(
    /[&<>"]/g,
    (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c] as string
  );

function initVideoEmbeds(container: HTMLElement) {
  container
    .querySelectorAll<HTMLElement>(".video-embed[data-video]")
    .forEach((el) => {
      if (el.dataset.ready === "1") return;
      el.dataset.ready = "1";
      const id = el.dataset.video!;
      const title = escapeHtml(el.dataset.title ?? "Vídeo de YouTube");
      const credit = el.dataset.credit
        ? `<span class="video-facade__credit">${escapeHtml(el.dataset.credit)}</span>`
        : "";
      const note = el.dataset.note
        ? `<span class="video-facade__note">${escapeHtml(el.dataset.note)}</span>`
        : "";

      el.innerHTML = `
        <button type="button" class="video-facade">
          <span class="video-facade__thumb">
            <img src="https://i.ytimg.com/vi/${id}/hqdefault.jpg" alt="" loading="lazy" width="480" height="360" />
            <span class="video-facade__play" aria-hidden="true"></span>
          </span>
          <span class="video-facade__meta">
            <span class="video-facade__title">${title}</span>
            <span class="video-facade__hint">Reproducir vídeo</span>
          </span>
          ${note}
          ${credit}
        </button>`;

      el.querySelector("button")?.addEventListener("click", () => {
        el.innerHTML = `<iframe src="https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0" title="${title}" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen loading="lazy"></iframe>`;
        el.classList.add("video-embed--playing");
      });
    });
}

type Props = {
  html: string;
  className?: string;
};

export default function Markdown({ html, className }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) initVideoEmbeds(ref.current);
  }, [html]);

  return (
    <div
      ref={ref}
      className={className ?? "markdown"}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

export function MarkdownText({ md }: { md: string }) {
  return <Markdown html={marked.parse(md) as string} />;
}
