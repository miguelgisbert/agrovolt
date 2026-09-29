import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router";
import App from "./App";
import { buildHead, resolveSeo } from "./lib/seo";

export function render(url: string) {
  const seo = resolveSeo(url);
  const html = renderToString(
    <StaticRouter location={url}>
      <App />
    </StaticRouter>
  );
  return { html, head: buildHead(seo), seo };
}
