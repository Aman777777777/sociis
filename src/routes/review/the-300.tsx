import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/review/the-300")({
  loader: () => {
    throw redirect({ to: "/vip" });
  },
});
