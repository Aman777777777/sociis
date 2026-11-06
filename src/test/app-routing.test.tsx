import { QueryClient } from "@tanstack/react-query";
import { createRouter, rootRouteId } from "@tanstack/react-router";
import { describe, expect, it } from "vitest";

import { routeTree } from "@/routeTree.gen";
import bodyHtml from "@/content/body.html?raw";

// Match routes without running loaders or rendering: loaders may need a server or
// network the test run lacks, and jsdom never loads the stylesheets React waits on.
describe("App routing", () => {
  it("matches a page for / instead of falling back to not found", () => {
    const router = createRouter({ routeTree, context: { queryClient: new QueryClient() } });

    const matches = router.matchRoutes("/");

    expect(matches.at(-1)?.routeId).not.toBe(rootRouteId);
  });

  it("matches the Flow Concept page instead of falling back to not found", () => {
    const router = createRouter({ routeTree, context: { queryClient: new QueryClient() } });

    const matches = router.matchRoutes("/flow-concept");

    expect(matches.at(-1)?.routeId).toBe("/flow-concept");
  });

  it("matches the Invitation page instead of falling back to not found", () => {
    const router = createRouter({ routeTree, context: { queryClient: new QueryClient() } });

    const matches = router.matchRoutes("/invitation");

    expect(matches.at(-1)?.routeId).toBe("/invitation");
  });

  it("matches the Experiences page instead of falling back to not found", () => {
    const router = createRouter({ routeTree, context: { queryClient: new QueryClient() } });

    const matches = router.matchRoutes("/experiences");

    expect(matches.at(-1)?.routeId).toBe("/experiences");
  });

  it("includes the local The 300 invitation in the root homepage", () => {
    expect(bodyHtml).toContain('id="upcoming-experience"');
    expect(bodyHtml).toContain('href="/review/the-300"');
    expect(bodyHtml).not.toContain("chatgpt.site");
    expect(bodyHtml.indexOf('id="upcoming-experience"')).toBeLessThan(
      bodyHtml.indexOf('id="experiences"'),
    );
  });

  it("matches The 300 invitation instead of falling back to not found", () => {
    const router = createRouter({ routeTree, context: { queryClient: new QueryClient() } });

    const matches = router.matchRoutes("/review/the-300");

    expect(matches.at(-1)?.routeId).toBe("/review/the-300");
  });
});
