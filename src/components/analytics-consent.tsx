import { useEffect, useState } from "react";
import { useRouterState } from "@tanstack/react-router";

const CONSENT_KEY = "sociis.analytics.consent";
const CONSENT_LIFETIME = 180 * 24 * 60 * 60 * 1000;
const MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID?.trim() ?? "";

type ConsentChoice = "granted" | "denied";
type StoredConsent = { choice: ConsentChoice; expiresAt: number };
type Gtag = (...args: unknown[]) => void;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: Gtag;
  }
}

function readConsent(): ConsentChoice | null {
  try {
    const stored = window.localStorage.getItem(CONSENT_KEY);
    if (!stored) return null;

    const parsed = JSON.parse(stored) as StoredConsent;
    if (parsed.expiresAt > Date.now()) return parsed.choice;

    window.localStorage.removeItem(CONSENT_KEY);
  } catch {
    window.localStorage.removeItem(CONSENT_KEY);
  }
  return null;
}

function clearAnalyticsCookies() {
  for (const item of document.cookie.split(";")) {
    const name = item.split("=")[0]?.trim();
    if (!name?.startsWith("_ga")) continue;
    document.cookie = `${name}=; Max-Age=0; path=/; SameSite=Lax`;
    document.cookie = `${name}=; Max-Age=0; path=/; domain=.sociisgroup.com; SameSite=Lax`;
  }
}

export function AnalyticsConsent() {
  const pagePath = useRouterState({ select: (state) => state.location.pathname });
  const [choice, setChoice] = useState<ConsentChoice | null>(null);
  const [ready, setReady] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const hasMeasurementId = /^G-[A-Z0-9]+$/i.test(MEASUREMENT_ID);

  useEffect(() => {
    setChoice(readConsent());
    setSettingsOpen(new URLSearchParams(window.location.search).has("cookie-settings"));
    setReady(true);
  }, []);

  useEffect(() => {
    if (!hasMeasurementId || choice !== "granted") return;

    const id = encodeURIComponent(MEASUREMENT_ID);
    window.dataLayer = window.dataLayer ?? [];
    window.gtag = window.gtag ?? function gtag(...args: unknown[]) {
      window.dataLayer?.push(args);
    };

    window.gtag("consent", "default", { analytics_storage: "denied" });
    window.gtag("consent", "update", { analytics_storage: "granted" });
    window.gtag("js", new Date());
    window.gtag("config", MEASUREMENT_ID, {
      send_page_view: false,
      allow_google_signals: false,
      allow_ad_personalization_signals: false,
    });

    if (!document.getElementById("sociis-google-analytics")) {
      const script = document.createElement("script");
      script.id = "sociis-google-analytics";
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${id}`;
      document.head.appendChild(script);
    }
  }, [choice, hasMeasurementId]);

  useEffect(() => {
    if (!hasMeasurementId || choice !== "granted" || !window.gtag) return;
    window.gtag("event", "page_view", {
      page_path: pagePath,
      page_title: document.title,
      page_location: `${window.location.origin}${pagePath}`,
    });
  }, [choice, hasMeasurementId, pagePath]);

  useEffect(() => {
    if (choice !== "denied") return;
    window.gtag?.("consent", "update", { analytics_storage: "denied" });
    clearAnalyticsCookies();
  }, [choice]);

  function saveChoice(nextChoice: ConsentChoice) {
    const stored: StoredConsent = {
      choice: nextChoice,
      expiresAt: Date.now() + CONSENT_LIFETIME,
    };
    window.localStorage.setItem(CONSENT_KEY, JSON.stringify(stored));
    setChoice(nextChoice);
    setSettingsOpen(false);
  }

  if (!hasMeasurementId || !ready) return null;

  const showPanel = choice === null || settingsOpen;
  const buttonStyle: React.CSSProperties = {
    minHeight: 42,
    padding: "9px 14px",
    border: "1px solid #b7c7b7",
    borderRadius: 3,
    background: "transparent",
    color: "inherit",
    font: "inherit",
    fontSize: 14,
    cursor: "pointer",
  };

  return (
    <>
      {showPanel ? (
        <section
          aria-label="Google Analytics preferences"
          className="analytics-consent-panel"
          role="region"
        >
          <div>
            <strong>Optional analytics</strong>
            <p>
              May we use Google Analytics to understand which pages are visited? Analytics stays
              off unless you accept. You can change this choice later in Cookie settings.
            </p>
            <a href="/cookies.html">Cookie information</a>
          </div>
          <div className="analytics-consent-actions">
            <button style={buttonStyle} onClick={() => saveChoice("denied")} type="button">
              Reject analytics
            </button>
            <button
              style={{ ...buttonStyle, background: "#d8e8a5", borderColor: "#d8e8a5", color: "#153b32" }}
              onClick={() => saveChoice("granted")}
              type="button"
            >
              Accept analytics
            </button>
          </div>
        </section>
      ) : (
        <button
          className="analytics-consent-settings"
          onClick={() => setSettingsOpen(true)}
          style={buttonStyle}
          type="button"
        >
          Cookie settings
        </button>
      )}
      <style>{`
        .analytics-consent-panel { position: fixed; z-index: 10000; inset: auto 0 0; display: flex; align-items: center; justify-content: space-between; gap: 28px; padding: 20px max(24px, calc((100vw - 1240px) / 2)); background: #f8f6f0; color: #213a33; border-top: 1px solid #cdd4c6; box-shadow: 0 -8px 32px #07191224; font: 15px/1.5 Arial, sans-serif; }
        .analytics-consent-panel p { max-width: 68ch; margin: 6px 0; }
        .analytics-consent-panel a { color: inherit; text-underline-offset: 3px; }
        .analytics-consent-actions { display: flex; flex-wrap: wrap; gap: 10px; }
        .analytics-consent-settings { position: fixed; z-index: 9999; right: 14px; bottom: 14px; background: #f8f6f0 !important; color: #213a33 !important; box-shadow: 0 2px 16px #0719122b; font-family: Arial, sans-serif !important; }
        .analytics-consent-panel button:focus-visible, .analytics-consent-settings:focus-visible { outline: 3px solid #928149; outline-offset: 3px; }
        @media (max-width: 680px) { .analytics-consent-panel { align-items: stretch; flex-direction: column; gap: 14px; padding: 18px 18px 22px; } .analytics-consent-actions { display: grid; grid-template-columns: 1fr 1fr; } .analytics-consent-actions button { padding-inline: 7px !important; font-size: 13px !important; } }
      `}</style>
    </>
  );
}
