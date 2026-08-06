import { defineMcp } from "@lovable.dev/mcp-js";
import getSectionTool from "./tools/get-section";
import listExperiencesTool from "./tools/list-experiences";
import listGovernanceTool from "./tools/list-governance";
import listPlacesTool from "./tools/list-places";

export default defineMcp({
  name: "sociis-luxury-redesign",
  title: "Sociis Luxury Redesign",
  version: "0.1.0",
  instructions:
    "Read-only tools for SociisGroup's published institutional record. Use `get_section` for the institutional text (mandate, impact, culture, the LIME Code, governance, access), `list_governance` for the leadership team, contributors and advisory council, `list_places` for the city and house map, and `list_experiences` for The 64 and The 300. All data is already public.",
  tools: [getSectionTool, listGovernanceTool, listPlacesTool, listExperiencesTool],
});
