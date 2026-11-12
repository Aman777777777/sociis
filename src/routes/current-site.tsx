import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import bodyHtml from "@/content/body.html?raw";

const TITLE = "sociisgroup — Change begins with a choice";
const DESCRIPTION =
  "An independent behavioural institution developing BEE for more sustainable everyday choices. Scaling through culture, hospitality, company partnerships and communities.";
const STYLES = [
  "/experiences-preview.css",
  "/fonts/institution.css",
  "/style.css",
  "/archive.css",
  "/portraits.css",
  "/product-layout.css",
  "/refinements.css",
  "/legal.css",
];

export const Route = createFileRoute("/current-site")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { name: "theme-color", content: "#102e2a" },
      { name: "robots", content: "noindex, follow" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "icon", href: "/media/bee-mark.svg" },
      ...STYLES.map((href) => ({ rel: "stylesheet", href })),
    ],
  }),
  component: CurrentSite,
});

function CurrentSite() {
  useEffect(() => {
    const root = document.documentElement;
    root.classList.add("motion-on", "story-pinned");
    const scripts = ["/app.js", "/archive.js"].map((src) => {
      const script = document.createElement("script");
      script.src = src;
      script.async = false;
      document.body.appendChild(script);
      return script;
    });
    return () => scripts.forEach((script) => script.remove());
  }, []);

  return <div dangerouslySetInnerHTML={{ __html: bodyHtml }} />;
}
