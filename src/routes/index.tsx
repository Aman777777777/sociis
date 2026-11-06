import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import bodyHtml from "@/content/body.html?raw";

const SITE_URL = "https://the300.sociisgroup.com";
const TITLE = "sociisgroup — Change begins with a choice";
const DESCRIPTION =
  "A Belgian for-profit company with a social purpose, developing BEE for more sustainable everyday choices. Scaling through culture, hospitality, company partnerships and communities.";
const STYLES = [
  "/fonts/institution.css",
  "/style.css",
  "/archive.css",
  "/portraits.css",
  "/product-layout.css",
  "/refinements.css",
  "/legal.css",
  "/experiences-preview.css",
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { name: "theme-color", content: "#102e2a" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: SITE_URL },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "canonical", href: SITE_URL },
      { rel: "icon", href: "/media/bee-mark.svg" },
      ...STYLES.map((href) => ({ rel: "stylesheet", href })),
    ],
  }),
  component: Index,
});

function Index() {
  useEffect(() => {
    const root = document.documentElement;
    root.classList.add("motion-on", "story-pinned");
    const scripts = ["/app.js", "/archive.js"].map((src) => {
      const s = document.createElement("script");
      s.src = src;
      s.async = false;
      document.body.appendChild(s);
      return s;
    });
    return () => scripts.forEach((s) => s.remove());
  }, []);

  return <div dangerouslySetInnerHTML={{ __html: bodyHtml }} />;
}
