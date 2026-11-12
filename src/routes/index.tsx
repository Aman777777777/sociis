import { createFileRoute } from "@tanstack/react-router";
import { CorinthiaGalleryPage } from "./corinthia-gallery";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SociisGroup — Change behaviour. Shift the economic system." },
      {
        name: "description",
        content:
          "An independent behavioural institution developing BEE for more sustainable everyday choices.",
      },
      { name: "theme-color", content: "#f5f2e9" },
      { property: "og:type", content: "website" },
      {
        property: "og:title",
        content: "SociisGroup — Change behaviour. Shift the economic system.",
      },
      {
        property: "og:description",
        content:
          "An independent behavioural institution developing BEE for more sustainable everyday choices.",
      },
    ],
    links: [
      { rel: "canonical", href: "https://the300.sociisgroup.com/" },
      { rel: "stylesheet", href: "/fonts/institution.css" },
      { rel: "stylesheet", href: "/gallery-rebuild.css" },
      { rel: "icon", href: "/media/bee-mark.svg" },
    ],
  }),
  component: CorinthiaGalleryPage,
});
