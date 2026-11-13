import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";

import { submitClub64Application } from "./-application.functions";

const SITE_URL = "https://the300.sociisgroup.com/club-64/";
const DESCRIPTION =
  "Club 64 is SociisGroup’s private membership for up to 64 individuals. Two member conversations a year. €2,500 per year. Apply for membership.";

export const Route = createFileRoute("/club-64/")({
  head: () => ({
    meta: [
      { title: "Club 64 | SociisGroup" },
      { name: "description", content: DESCRIPTION },
      { name: "theme-color", content: "#102e2a" },
      { property: "og:title", content: "Club 64 | SociisGroup" },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: SITE_URL },
    ],
    links: [
      { rel: "canonical", href: SITE_URL },
      { rel: "stylesheet", href: "/fonts/institution.css" },
      { rel: "stylesheet", href: "/experiences-preview.css" },
    ],
  }),
  component: Club64,
});

type FormStatus = "idle" | "submitting" | "success" | "error";

function Club64() {
  const [status, setStatus] = useState<FormStatus>("idle");

  async function submitApplication(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "submitting") return;

    const formData = new FormData(event.currentTarget);
    const textValue = (name: string) => {
      const value = formData.get(name);
      return typeof value === "string" ? value : "";
    };
    setStatus("submitting");

    try {
      const result = await submitClub64Application({
        data: {
          name: textValue("name"),
          email: textValue("email"),
          work: textValue("work"),
          reason: textValue("reason"),
        },
      });
      setStatus(result.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="sg-sales-page club-page">
      <header className="sg-sales-header">
        <div className="sg-sales-wrap">
          <a href="/" aria-label="SociisGroup homepage">
            <img width="140" src="/media/logo-master.svg" alt="sociisgroup" />
          </a>
          <nav aria-label="Club 64 navigation">
            <a href="/#club-64-option">
              <span aria-hidden="true">← </span>Back to Take part
            </a>
            <a href="/">Home</a>
          </nav>
        </div>
      </header>
      <main>
        <section className="sg-sales-wrap sg-sales-grid club-hero" aria-labelledby="club-title">
          <div>
            <p className="sg-sales-kicker">Private membership by SociisGroup</p>
            <h1 id="club-title">Club 64</h1>
            <p className="club-lead">Beyond your usual circles.</p>
            <p className="club-intro">
              A private membership for up to 64 people from business, culture, hospitality and civil
              society. A place to get to know people outside your own field and talk honestly about
              what we can change.
            </p>
          </div>
          <figure className="club-photo">
            <img
              src="/media/hero-room.webp"
              width="1600"
              height="1067"
              alt="Guests in the warmly lit ballroom at Corinthia Brussels"
              fetchPriority="high"
            />
            <figcaption>Corinthia Brussels, 2026 · From the SociisGroup archive</figcaption>
          </figure>
        </section>
        <section className="club-details" aria-labelledby="club-details-title">
          <div className="sg-sales-wrap">
            <p className="sg-sales-kicker">What membership includes</p>
            <h2 className="club-section-title" id="club-details-title">
              A year in Club 64
            </h2>
            <div className="club-details-grid">
              <article>
                <h3>A small, private circle</h3>
                <p>
                  Membership is by personal invitation and limited to 64 people. We bring together
                  people who are curious about other perspectives and generous with what they know.
                </p>
              </article>
              <article>
                <h3>Two conversations a year</h3>
                <p>
                  We make time for two member conversations a year, to exchange ideas and learn from
                  people outside our own field. The format can be online or in person, depending on
                  where members are.
                </p>
              </article>
              <article>
                <h3>Work you help make possible</h3>
                <p>
                  Your membership supports SociisGroup’s work, including BEE, the AI companion we’re
                  developing to help people compare everyday options and make more sustainable
                  choices.
                </p>
              </article>
            </div>
          </div>
        </section>
        <section
          className="sg-sales-wrap club-join"
          id="membership"
          aria-labelledby="club-join-title"
        >
          <div>
            <p className="sg-sales-kicker">Apply for membership</p>
            <h2 id="club-join-title">Your place in Club 64</h2>
            <p className="club-price">
              €2,500 <span>per year</span>
            </p>
            <p>
              One annual payment, including applicable VAT. Membership renews annually until
              cancelled.
            </p>
            <p>
              Tell us a little about yourself. We review applications personally and send accepted
              applicants a private payment link. There’s no payment to apply.
            </p>
          </div>
          <form
            className="club-form"
            id="club-application"
            onSubmit={submitApplication}
            aria-busy={status === "submitting"}
          >
            <div className="club-form-pair">
              <label>
                Full name <input name="name" autoComplete="name" required maxLength={100} />
              </label>
              <label>
                Email address{" "}
                <input type="email" name="email" autoComplete="email" required maxLength={254} />
              </label>
            </div>
            <label>
              What do you do? <input name="work" maxLength={200} required />
            </label>
            <label>
              Why would you like to join?{" "}
              <textarea name="reason" rows={3} maxLength={1200} required />
            </label>
            <button className="sg-sales-cta" type="submit" disabled={status === "submitting"}>
              {status === "submitting" ? "Sending application…" : "Send application"}{" "}
              <span aria-hidden="true">→</span>
            </button>
            <p className="club-cta-note">
              Your application is sent to SociisGroup through Brevo for review. No payment or
              automatic confirmation email is sent when you apply.{" "}
              <a href="/privacy.html?from=club" target="_blank" rel="noopener noreferrer">
                Privacy notice
              </a>
              .
            </p>
            <p
              className="club-form-status"
              role={status === "error" ? "alert" : "status"}
              aria-live={status === "error" ? "assertive" : "polite"}
              tabIndex={-1}
            >
              {status === "success" &&
                "Your application has been received for review. We’ll be in touch."}
              {status === "error" &&
                "We couldn’t submit your application. Your answers are still here; please try again later or contact us."}
            </p>
          </form>
        </section>
      </main>
      <footer className="sg-sales-footer">
        <div className="sg-sales-wrap">
          <a href="/#club-64-option">
            <span aria-hidden="true">← </span>Back to Take part
          </a>
          <a href="/">Home</a>
          <a href="mailto:jeremie@sociisgroup.com">jeremie@sociisgroup.com</a>
        </div>
      </footer>
    </div>
  );
}
