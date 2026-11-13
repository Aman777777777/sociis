import { describe, expect, it } from "vitest";

import { getLegacySupporterRedirect } from "@/lib/legacy-redirect";

describe("legacy Founding Supporter redirect", () => {
  it("permanently redirects the old page to the Club 64 application", () => {
    const response = getLegacySupporterRedirect(
      new Request("https://the300.sociisgroup.com/vip/supporter.html"),
    );

    expect(response?.status).toBe(301);
    expect(response?.headers.get("location")).toBe(
      "https://www.sociisgroup.com/club-64#membership",
    );
  });

  it("does not redirect unrelated paths", () => {
    expect(getLegacySupporterRedirect(new Request("https://the300.sociisgroup.com/vip/"))).toBe(
      null,
    );
  });
});
