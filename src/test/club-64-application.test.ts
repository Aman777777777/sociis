import { describe, expect, it, vi } from "vitest";

import { submitClub64Application } from "@/lib/club-64-application.server";

const application = {
  name: " Ada Lovelace ",
  email: " ADA@example.com ",
  work: " Research ",
  reason: "I would like to join.",
};

describe("Club 64 Brevo submission", () => {
  it("creates a new contact in the applications list with the New status", async () => {
    const fetchMock = vi
      .fn<typeof fetch>()
      .mockResolvedValueOnce(new Response(null, { status: 404 }))
      .mockResolvedValueOnce(new Response(null, { status: 201 }));

    const result = await submitClub64Application(application, fetchMock, "test-brevo-key");

    expect(result).toEqual({ ok: true });
    expect(fetchMock).toHaveBeenCalledTimes(2);
    expect(fetchMock.mock.calls[0]?.[0]).toBe(
      "https://api.brevo.com/v3/contacts/ada%40example.com",
    );
    const payload = JSON.parse(String(fetchMock.mock.calls[1]?.[1]?.body));
    expect(payload).toEqual({
      email: "ada@example.com",
      attributes: {
        CLUB64_NAME: "Ada Lovelace",
        CLUB64_WORK: "Research",
        CLUB64_REASON: "I would like to join.",
        CLUB64_STATUS: "New",
      },
      listIds: [4],
      updateEnabled: true,
    });
  });

  it("preserves an existing non-New Club 64 status", async () => {
    const fetchMock = vi
      .fn<typeof fetch>()
      .mockResolvedValueOnce(
        Response.json({ attributes: { CLUB64_STATUS: "Accepted" } }, { status: 200 }),
      )
      .mockResolvedValueOnce(new Response(null, { status: 204 }));

    const result = await submitClub64Application(application, fetchMock, "test-brevo-key");

    expect(result).toEqual({ ok: true });
    const payload = JSON.parse(String(fetchMock.mock.calls[1]?.[1]?.body));
    expect(payload.attributes.CLUB64_STATUS).toBe("Accepted");
  });

  it("does not update Brevo if the existing status cannot be retrieved", async () => {
    const fetchMock = vi
      .fn<typeof fetch>()
      .mockResolvedValueOnce(new Response(null, { status: 503 }));

    const result = await submitClub64Application(application, fetchMock, "test-brevo-key");

    expect(result).toEqual({ ok: false, reason: "not_received" });
    expect(fetchMock).toHaveBeenCalledTimes(1);
  });

  it("rejects invalid input without contacting Brevo", async () => {
    const fetchMock = vi.fn<typeof fetch>();

    const result = await submitClub64Application(
      { ...application, reason: " " },
      fetchMock,
      "test-brevo-key",
    );

    expect(result).toEqual({ ok: false, reason: "not_received" });
    expect(fetchMock).not.toHaveBeenCalled();
  });
});
