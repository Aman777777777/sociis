import { createFileRoute } from "@tanstack/react-router";

const TITLE = "Club 64 for Humanity | A personal invitation";
const DESCRIPTION =
  "A personal invitation from SociisGroup to Club 64 for Humanity.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { name: "theme-color", content: "#f0ebe5" },
      { property: "og:type", content: "website" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: "https://www.sociisgroup.com/" }],
  }),
  component: InvitationHome,
});

function InvitationHome() {
  return (
    <iframe
      title="Club 64 for Humanity invitation"
      src="/club-64-invitation.html"
      style={{ display: "block", width: "100%", height: "100vh", border: 0 }}
    />
  );
}
