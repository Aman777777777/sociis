import type { Club64Application } from "./club-64-application";
import { club64ApplicationSchema } from "./club-64-application";

const BREVO_CONTACTS_URL = "https://api.brevo.com/v3/contacts";
const CLUB64_APPLICATIONS_LIST_ID = 4;
const REQUEST_TIMEOUT_MS = 10_000;

type BrevoContact = {
  attributes?: Record<string, unknown>;
};

export type Club64SubmissionResult =
  { ok: true } | { ok: false; reason: "unavailable" | "not_received" };

export async function submitClub64Application(
  input: unknown,
  fetchImpl: typeof fetch = fetch,
  apiKey: string | undefined = process.env["BREVO_API_KEY"],
): Promise<Club64SubmissionResult> {
  const parsed = club64ApplicationSchema.safeParse(input);
  if (!parsed.success) return { ok: false, reason: "not_received" };

  if (!apiKey) {
    console.error("[Club 64] Missing BREVO_API_KEY.");
    return { ok: false, reason: "unavailable" };
  }

  const application = parsed.data;
  const contactUrl = `${BREVO_CONTACTS_URL}/${encodeURIComponent(application.email)}`;
  const headers = { accept: "application/json", "api-key": apiKey };
  let existingStatus: string | undefined;
  let isExistingContact = false;

  try {
    const lookup = await fetchImpl(contactUrl, {
      headers,
      signal: AbortSignal.timeout(REQUEST_TIMEOUT_MS),
    });

    if (lookup.status === 404) {
      isExistingContact = false;
    } else if (!lookup.ok) {
      console.error(`[Club 64] Brevo status lookup failed (${lookup.status}).`);
      return { ok: false, reason: "not_received" };
    } else {
      isExistingContact = true;
      let contact: BrevoContact;
      try {
        contact = (await lookup.json()) as BrevoContact;
      } catch {
        console.error("[Club 64] Brevo status lookup returned invalid JSON.");
        return { ok: false, reason: "not_received" };
      }

      if (!contact || typeof contact !== "object" || Array.isArray(contact)) {
        console.error("[Club 64] Brevo status lookup returned an invalid contact.");
        return { ok: false, reason: "not_received" };
      }
      const attributes = contact.attributes;
      if (!attributes || typeof attributes !== "object" || Array.isArray(attributes)) {
        console.error("[Club 64] Brevo status lookup returned invalid attributes.");
        return { ok: false, reason: "not_received" };
      }
      const status = attributes["CLUB64_STATUS"];
      if (status !== undefined && status !== null && typeof status !== "string") {
        console.error("[Club 64] Brevo returned an invalid Club 64 status.");
        return { ok: false, reason: "not_received" };
      }
      if (typeof status === "string" && status.length > 0) existingStatus = status;
    }
  } catch {
    console.error("[Club 64] Brevo status lookup request failed.");
    return { ok: false, reason: "not_received" };
  }

  const attributes: Record<string, string> = {
    CLUB64_NAME: application.name,
    CLUB64_WORK: application.work,
    CLUB64_REASON: application.reason,
    CLUB64_STATUS:
      isExistingContact && existingStatus && existingStatus !== "New" ? existingStatus : "New",
  };

  try {
    const response = await fetchImpl(BREVO_CONTACTS_URL, {
      method: "POST",
      headers: { ...headers, "content-type": "application/json" },
      body: JSON.stringify({
        email: application.email,
        attributes,
        listIds: [CLUB64_APPLICATIONS_LIST_ID],
        updateEnabled: true,
      }),
      signal: AbortSignal.timeout(REQUEST_TIMEOUT_MS),
    });

    if (!response.ok) {
      console.error(`[Club 64] Brevo application submission failed (${response.status}).`);
      return { ok: false, reason: "not_received" };
    }
    return { ok: true };
  } catch {
    console.error("[Club 64] Brevo application submission request failed.");
    return { ok: false, reason: "not_received" };
  }
}
