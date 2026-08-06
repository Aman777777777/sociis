import { defineTool } from "@lovable.dev/mcp-js";
import { EXPERIENCES } from "../data";

export default defineTool({
  name: "list_experiences",
  title: "List experiences",
  description:
    "List SociisGroup's published gatherings, The 64 and The 300, with their place, page and deck links.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => {
    const text = EXPERIENCES.map(
      (e) => `${e.name} — ${e.place}\n${e.summary}\nPage: ${e.page}\nDeck: ${e.deck}`,
    ).join("\n\n");
    return {
      content: [{ type: "text", text }],
      structuredContent: { experiences: EXPERIENCES },
    };
  },
});
