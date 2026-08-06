import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { PLACES } from "../data";

export default defineTool({
  name: "list_places",
  title: "List places",
  description:
    "List the cities and houses in SociisGroup's published place map, with stewardship, wave and status. Houses named are screened candidates.",
  inputSchema: {
    status: z
      .enum(["home", "confirmed", "candidate", "all"])
      .default("all")
      .describe("Filter by place status."),
    query: z
      .string()
      .optional()
      .describe("Optional case-insensitive match on city, country or house name."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ status, query }) => {
    const needle = query?.trim().toLowerCase();
    const places = PLACES.filter((p) => status === "all" || p.status === status).filter((p) =>
      needle
        ? `${p.city} ${p.country} ${p.house}`.toLowerCase().includes(needle)
        : true,
    );
    const text = places
      .map(
        (p) =>
          `${p.city}, ${p.country} — ${p.house || "house not yet named"}${p.stewardship ? ` (${p.stewardship})` : ""} · ${p.wave} · ${p.status} · ${p.note}`,
      )
      .join("\n");
    return {
      content: [{ type: "text", text: text || "No places matched that filter." }],
      structuredContent: { places },
    };
  },
});
