import { createFileRoute } from "@tanstack/react-router";
import { CurrentSite, CURRENT_SITE_STYLES } from "./current-site";

const TITLE = "sociisgroup | Change behaviour. Shift the economic system.";
const DESCRIPTION =
  "A Belgian for-profit company with a social purpose, developing BEE for more sustainable everyday choices. Scaling through culture, hospitality, company partnerships and communities.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { name: "theme-color", content: "#081f1b" },
      { property: "og:type", content: "website" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
    ],
    links: [
      { rel: "canonical", href: "https://www.sociisgroup.com/" },
      ...CURRENT_SITE_STYLES.map((href) => ({ rel: "stylesheet", href })),
      { rel: "icon", href: "/media/bee-mark.svg" },
    ],
  }),
  component: CurrentSite,
});
