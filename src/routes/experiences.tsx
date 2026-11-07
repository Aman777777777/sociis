import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import bodyHtml from "@/content/experiences.html?raw";

const SITE_URL = "https://the300.sociisgroup.com/experiences";
const DESCRIPTION = "Find the next edition of The 300 and revisit SociisGroup's past gatherings.";

export const Route = createFileRoute("/experiences")({
  head: () => ({
    meta: [
      { title: "Experiences | sociisgroup" },
      { name: "description", content: DESCRIPTION },
      { name: "theme-color", content: "#102e2a" },
      { property: "og:title", content: "Experiences | sociisgroup" },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: SITE_URL },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "canonical", href: SITE_URL },
      { rel: "icon", href: "/media/bee-mark.svg" },
      { rel: "stylesheet", href: "/fonts/institution.css" },
      { rel: "stylesheet", href: "/experiences-preview.css" },
    ],
  }),
  component: Experiences,
});

function Experiences() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "/experiences-motion.js";
    document.body.appendChild(script);
    return () => script.remove();
  }, []);

  return <div className="sg-sales-page" dangerouslySetInnerHTML={{ __html: bodyHtml }} />;
}
