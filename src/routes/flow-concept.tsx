import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import bodyHtml from "@/content/body.html?raw";

const SITE_URL = "https://the300.sociisgroup.com/flow-concept";
const TITLE = "Flow Concept — sociisgroup";
const DESCRIPTION =
  "An independent behavioural institution developing BEE to help people make more sustainable everyday choices.";
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

export const Route = createFileRoute("/flow-concept")({
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
  component: FlowConcept,
});

function FlowConcept() {
  useEffect(() => {
    const root = document.documentElement;
    root.classList.add("motion-on", "story-pinned");
    document
      .querySelectorAll(
        '.desktop-nav a[href="/flow-concept"], #menu-dialog nav a[href="/flow-concept"]',
      )
      .forEach((link) => link.setAttribute("aria-current", "page"));
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
