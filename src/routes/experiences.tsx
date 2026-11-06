import { createFileRoute } from "@tanstack/react-router";

const SITE_URL = "https://the300.sociisgroup.com/experiences";
const DESCRIPTION =
  "SociisGroup experiences bring people together across business, culture and society to explore what they can change together.";

export const Route = createFileRoute("/experiences")({
  head: () => ({
    meta: [
      { title: "Experiences | sociisgroup" },
      { name: "description", content: DESCRIPTION },
      { name: "theme-color", content: "#102e2a" },
      { name: "robots", content: "noindex,nofollow" },
    ],
    links: [
      { rel: "canonical", href: SITE_URL },
      { rel: "icon", href: "/media/bee-mark.svg" },
      { rel: "stylesheet", href: "/fonts/institution.css" },
      { rel: "stylesheet", href: "/experiences-preview.css" },
    ],
  }),
  component: Experiences,
});

function Experiences() {
  return (
    <div className="sg-sales-page">
      <header className="sg-sales-header">
        <div className="sg-sales-wrap">
          <a href="/" aria-label="SociisGroup homepage">
            <img width="140" src="/media/logo-master.svg" alt="sociisgroup" />
          </a>
          <nav aria-label="Main navigation">
            <a href="/#purpose">Why</a>
            <a href="/#bee">BEE</a>
            <a href="/#business">The business</a>
            <a href="/#approach">Our approach</a>
            <a href="/experiences" aria-current="page">
              Experiences
            </a>
            <a href="/#people">Our people</a>
            <a href="/#participate">Take part</a>
          </nav>
        </div>
      </header>
      <main>
        <section className="sg-sales-intro sg-sales-wrap">
          <p className="sg-sales-kicker">SociisGroup experiences</p>
          <h1 className="sg-motion-heading">
            <span>
              <span>Different worlds.</span>
            </span>
            <span>
              <em>Human connection.</em>
            </span>
          </h1>
          <p>
            We bring people together across business, culture and society to explore what they can
            change together.
          </p>
        </section>
        <section className="sg-vip-feature" aria-labelledby="sg-vip-title">
          <div className="sg-sales-wrap sg-sales-grid">
            <figure>
              <img
                src="/media/the300.jpg"
                width="1400"
                height="934"
                loading="lazy"
                alt="Guests beneath the flower canopy at The 300"
              />
              <figcaption>The 300 · Founding edition, 2026</figcaption>
            </figure>
            <div>
              <p className="sg-sales-kicker">Upcoming experience</p>
              <h2 id="sg-vip-title">
                The 300
                <br />
                <em>at the Crystal Garden</em>
              </h2>
              <p className="sg-sales-date">22 July 2027 · Tomorrowland, Belgium</p>
              <p className="sg-sales-venue">
                SociisGroup hosts The 300 in its own dedicated space on the iconic grounds of
                Tomorrowland, in partnership with Love Tomorrow.
              </p>
              <p className="sg-sales-hook">Some connections change what comes next.</p>
              <p className="sg-sales-date">€1,000 per guest · Including Belgian VAT</p>
              <a
                className="sg-sales-cta"
                href="https://sociisgroup-the-300-garden-of-choice.jeremie836072.chatgpt.site/review/the-300"
              >
                Explore the VIP invitation <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </section>
        <section className="sg-past-feature">
          <div className="sg-sales-wrap sg-sales-grid">
            <figure>
              <img
                src="/media/family-shared-smile.webp"
                loading="lazy"
                alt="Jeremie Landweer and his mother at The 64"
              />
              <figcaption>The 64 · Corinthia Brussels</figcaption>
            </figure>
            <div>
              <p className="sg-sales-kicker">Past experience</p>
              <h2>The 64</h2>
              <p>A smaller room. A deeper exchange.</p>
              <a className="sg-sales-text-link" href="/#experiences">
                Explore our past experiences →
              </a>
            </div>
          </div>
        </section>
      </main>
      <footer className="sg-sales-footer">
        <div className="sg-sales-wrap">
          <a href="/">SociisGroup homepage</a>
          <a href="/#participate">Become a Founding Supporter ↗</a>
          <small>Design preview · Not the live website</small>
        </div>
      </footer>
    </div>
  );
}
