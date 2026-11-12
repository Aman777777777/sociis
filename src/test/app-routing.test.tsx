import { QueryClient } from "@tanstack/react-query";
import { createRouter, rootRouteId } from "@tanstack/react-router";
import { describe, expect, it } from "vitest";

import { routeTree } from "@/routeTree.gen";
import bodyHtml from "@/content/body.html?raw";
import vipBodyHtml from "@/content/vip.html?raw";

// Match routes without running loaders or rendering: loaders may need a server or
// network the test run lacks, and jsdom never loads the stylesheets React waits on.
describe("App routing", () => {
  it("matches a page for / instead of falling back to not found", () => {
    const router = createRouter({ routeTree, context: { queryClient: new QueryClient() } });

    const matches = router.matchRoutes("/");

    expect(matches.at(-1)?.routeId).not.toBe(rootRouteId);
  });

  it("serves the gallery rebuild at / and preserves the former homepage at /current-site", () => {
    const router = createRouter({ routeTree, context: { queryClient: new QueryClient() } });

    expect(router.matchRoutes("/").at(-1)?.routeId).toBe("/");
    expect(router.matchRoutes("/current-site").at(-1)?.routeId).toBe("/current-site");
    expect(router.matchRoutes("/corinthia-gallery").at(-1)?.routeId).toBe("/corinthia-gallery");
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

  it("keeps the former Experiences URL available for its homepage redirect", () => {
    const router = createRouter({ routeTree, context: { queryClient: new QueryClient() } });

    const matches = router.matchRoutes("/experiences");

    expect(matches.at(-1)?.routeId).toBe("/experiences");
  });

  it("sends desktop and mobile Experiences links directly to The 300 section", () => {
    expect(bodyHtml.match(/href="#upcoming-experience">Experiences<\/a>/g)).toHaveLength(2);
  });

  it("matches the VIP invitation instead of falling back to not found", () => {
    const router = createRouter({ routeTree, context: { queryClient: new QueryClient() } });

    const matches = router.matchRoutes("/vip/");

    expect(matches.at(-1)?.routeId).toBe("/vip/");
  });

  it("matches the Club 64 membership page", () => {
    const router = createRouter({ routeTree, context: { queryClient: new QueryClient() } });

    const matches = router.matchRoutes("/club-64/");

    expect(matches.at(-1)?.routeId).toBe("/club-64/");
  });

  it("includes the complete preview homepage and local VIP invitation", () => {
    expect(bodyHtml).toContain('id="upcoming-experience"');
    expect(bodyHtml).toContain("We’re building <strong>BEE</strong>");
    expect(bodyHtml).toContain("We help people turn good intentions into everyday choices.");
    expect(bodyHtml).toContain("hotel apps to loyalty programmes");
    expect(bodyHtml).toContain("separately ticketed experiences");
    expect(bodyHtml).toContain('id="club-64-option"');
    expect(bodyHtml).toContain('href="/club-64/?from=take-part"');
    expect(bodyHtml).toContain('href="/vip/?from=experiences"');
    expect(bodyHtml).toContain('href="/vip/?from=take-part"');
    expect(bodyHtml).not.toContain("chatgpt.site");
    expect(bodyHtml.indexOf('id="upcoming-experience"')).toBeLessThan(
      bodyHtml.indexOf('id="experiences"'),
    );
    expect(vipBodyHtml).toContain("data-vip-selector");
    expect(vipBodyHtml).toContain('href="/vip/supporter.html"');
  });

  it("links the VIP invitation logo home and provides a back-to-top arrow", () => {
    expect(vipBodyHtml).toContain('<a class="brand" href="/" aria-label="SociisGroup homepage">');
    expect(vipBodyHtml).toContain('class="vip-back-to-top" href="#top" aria-label="Back to top"');
  });

  it("matches The 300 invitation instead of falling back to not found", () => {
    const router = createRouter({ routeTree, context: { queryClient: new QueryClient() } });

    const matches = router.matchRoutes("/review/the-300");

    expect(matches.at(-1)?.routeId).toBe("/review/the-300");
  });
});
