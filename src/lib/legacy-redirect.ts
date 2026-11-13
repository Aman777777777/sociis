const LEGACY_SUPPORTER_PATH = "/vip/supporter.html";
const CLUB64_MEMBERSHIP_URL = "https://www.sociisgroup.com/club-64#membership";

export function getLegacySupporterRedirect(request: Request): Response | null {
  if (new URL(request.url).pathname !== LEGACY_SUPPORTER_PATH) return null;

  return new Response(null, {
    status: 301,
    headers: { location: CLUB64_MEMBERSHIP_URL },
  });
}
