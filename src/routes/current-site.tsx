import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import bodyHtml from "@/content/body.html?raw";

const TITLE = "sociisgroup | Change behaviour. Shift the economic system.";
const DESCRIPTION =
  "A Belgian for-profit company with a social purpose, developing BEE for more sustainable everyday choices. Scaling through culture, hospitality, company partnerships and communities.";

export const CURRENT_SITE_STYLES = [
  "/experiences-preview.css",
  "/fonts/institution.css",
  "/style.css",
  "/corinthia-highlights.css?v=4",
  "/portraits.css",
  "/product-layout.css",
  "/refinements.css",
  "/legal.css",
  "/membership.css",
  "/editorial-final.css?v=14",
];

export const Route = createFileRoute("/current-site")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { name: "theme-color", content: "#081f1b" },
      { name: "robots", content: "noindex, follow" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "icon", href: "/media/bee-mark.svg" },
      ...CURRENT_SITE_STYLES.map((href) => ({ rel: "stylesheet", href })),
    ],
  }),
  component: CurrentSite,
});

export function CurrentSite() {
  useEffect(() => {
    const root = document.documentElement;
    root.classList.add("motion-on", "story-pinned");
    const script = document.createElement("script");
    script.src = "/app.js";
    script.async = false;
    document.body.appendChild(script);
    return () => script.remove();
  }, []);

  return <div dangerouslySetInnerHTML={{ __html: bodyHtml }} />;
}
