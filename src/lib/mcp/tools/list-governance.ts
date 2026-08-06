import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { PEOPLE } from "../data";

export default defineTool({
  name: "list_governance",
  title: "List governance",
  description:
    "List the people in SociisGroup's published governance structure: the Executive Leadership Team, contributors, and the advisory council.",
  inputSchema: {
    group: z
      .enum(["leadership", "contributors", "council", "all"])
      .default("all")
      .describe("Which part of the governance structure to return."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ group }) => {
    const people = group === "all" ? PEOPLE : PEOPLE.filter((p) => p.group === group);
    const text = people.map((p) => `${p.name} — ${p.role} (${p.group})`).join("\n");
    return {
      content: [{ type: "text", text: text || "No people found for that group." }],
      structuredContent: { people },
    };
  },
});
