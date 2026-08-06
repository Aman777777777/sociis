import { defineTool, ToolError } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { SECTIONS } from "../data";

export default defineTool({
  name: "get_section",
  title: "Get section",
  description:
    "Read the published institutional text for one section of the SociisGroup site, or list every available section.",
  inputSchema: {
    slug: z
      .string()
      .optional()
      .describe(
        "Section slug, for example overview, impact, culture, lime-code, governance, house, access, places. Omit to list all sections.",
      ),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ slug }) => {
    if (!slug) {
      return {
        content: [
          {
            type: "text",
            text: SECTIONS.map((s) => `${s.slug} — ${s.title}`).join("\n"),
          },
        ],
        structuredContent: { sections: SECTIONS.map(({ slug: s, title }) => ({ slug: s, title })) },
      };
    }
    const key = slug.trim().toLowerCase();
    const section = SECTIONS.find((s) => s.slug === key);
    if (!section) {
      throw new ToolError(
        `Unknown section "${slug}". Available sections: ${SECTIONS.map((s) => s.slug).join(", ")}.`,
      );
    }
    return {
      content: [{ type: "text", text: `${section.title}\n\n${section.body}` }],
      structuredContent: { section },
    };
  },
});
