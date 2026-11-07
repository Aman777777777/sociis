import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import bodyHtml from "@/content/vip.html?raw";

const SITE_URL = "https://the300.sociisgroup.com/vip/";
const DESCRIPTION =
  "The 300 VIP invitation. A seated lunch, live music and guest speakers at Crystal Garden on 22 July 2027. €1,000 per guest including Belgian VAT.";

export const Route = createFileRoute("/vip/")({
  head: () => ({
    meta: [
      { title: "The 300 · VIP invitation" },
      { name: "description", content: DESCRIPTION },
      { name: "theme-color", content: "#15271f" },
      { property: "og:title", content: "The 300 · VIP invitation" },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:image", content: `${SITE_URL}assets/garden.jpg` },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "canonical", href: SITE_URL },
      {
        rel: "preload",
        as: "font",
        href: "/vip/assets/institution-5.ttf",
        type: "font/ttf",
        crossOrigin: "anonymous",
      },
      { rel: "stylesheet", href: "/vip/assets/invitations.css" },
    ],
  }),
  component: VipInvitation,
});

function VipInvitation() {
  useEffect(() => {
    const previousBodyId = document.body.id;
    document.body.id = "top";
    const scripts = ["/vip/assets/vip-booking.js", "/vip/assets/invitation-film.js"].map((src) => {
      const script = document.createElement("script");
      script.src = src;
      script.async = false;
      document.body.appendChild(script);
      return script;
    });

    return () => {
      scripts.forEach((script) => script.remove());
      document.body.id = previousBodyId;
    };
  }, []);

  return <div dangerouslySetInnerHTML={{ __html: bodyHtml }} />;
}
