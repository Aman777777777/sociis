import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

const SITE_URL = "https://the300.sociisgroup.com/review/the-300";
const BOOKING_URL = "https://book.stripe.com/4gMbJ186r1gIbEI9vvaEE0j";
const PRICE_PER_GUEST = 1000;
const MAX_GUESTS = 10;

export const Route = createFileRoute("/review/the-300")({
  head: () => ({
    meta: [
      { title: "The 300 VIP invitation | sociisgroup" },
      {
        name: "description",
        content:
          "Join SociisGroup for a private VIP lunch at The 300 in the Crystal Garden, in collaboration with Love Tomorrow.",
      },
      { name: "theme-color", content: "#102e2a" },
      { property: "og:title", content: "The 300 VIP invitation | sociisgroup" },
      {
        property: "og:description",
        content:
          "Take your seat beneath the flowers at The 300, 22 July 2027, at Tomorrowland in Belgium.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: SITE_URL },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "canonical", href: SITE_URL },
      { rel: "icon", href: "/media/bee-mark.svg" },
      { rel: "stylesheet", href: "/fonts/institution.css" },
      { rel: "stylesheet", href: "/the-300.css" },
    ],
  }),
  component: The300,
});

function The300() {
  const [guestCount, setGuestCount] = useState(1);
  const total = PRICE_PER_GUEST * guestCount;
  const bookingUrl = `${BOOKING_URL}?quantity=${guestCount}`;

  return (
    <div className="the300-page">
      <header className="the300-header">
        <a href="/" aria-label="SociisGroup homepage">
          <img src="/media/logo-master.svg" width="140" alt="sociisgroup" />
        </a>
        <nav aria-label="Page navigation">
          <a href="/experiences">Experiences</a>
          <a className="the300-header-cta" href="#booking">
            Reserve your place <span aria-hidden="true">↗</span>
          </a>
        </nav>
      </header>

      <main>
        <section className="the300-hero">
          <div className="the300-hero-copy">
            <p className="the300-eyebrow">VIP invitation</p>
            <h1>The 300</h1>
            <p className="the300-hero-date">22 July 2027</p>
            <p className="the300-hero-place">
              Crystal Garden
              <br />
              Tomorrowland grounds · Boom, Belgium
            </p>
            <div className="the300-rule" />
            <h2>Take your seat beneath the flowers.</h2>
            <p>
              Join SociisGroup for a private, seated VIP lunch in collaboration with Love Tomorrow.
              Share lunch at the table, hear from guest speakers and enjoy live music.
            </p>
            <p className="the300-price">€1,000 per guest · Including VAT</p>
            <p className="the300-hero-inclusions">
              Reserved seating, dishes to share, wine and drinks.
              <br />
              Love Tomorrow Summit Connector Pass included.
            </p>
            <a className="the300-button" href="#booking">
              Discover your VIP experience <span aria-hidden="true">↓</span>
            </a>
          </div>
          <figure className="the300-hero-image">
            <img
              src="/media/the300.jpg"
              width="1400"
              height="934"
              fetchPriority="high"
              alt="Guests gathered beneath the flower canopy at The 300"
            />
            <figcaption>The 300 · 2026</figcaption>
          </figure>
        </section>

        <section className="the300-gatherings" aria-labelledby="the300-gatherings-title">
          <div className="the300-section-heading">
            <p className="the300-eyebrow">Our founding gatherings</p>
            <h2 id="the300-gatherings-title">Step inside.</h2>
            <p>The people, the conversations and the atmosphere.</p>
          </div>
          <div className="the300-gallery">
            <figure className="the300-gallery-main">
              <img
                src="/media/the300-voice.jpg"
                width="1400"
                height="934"
                loading="lazy"
                alt="A guest speaker sharing a perspective at The 300"
              />
            </figure>
            <figure>
              <img
                src="/media/family-shared-smile.webp"
                width="1600"
                height="1067"
                loading="lazy"
                alt="Jeremie Landweer and his mother sharing a moment at The 64"
              />
            </figure>
          </div>
          <p className="the300-caption">The 64 and The 300 · 2026</p>
        </section>

        <section className="the300-experience" aria-labelledby="the300-experience-title">
          <div className="the300-section-heading">
            <p className="the300-eyebrow">Your VIP experience</p>
            <h2 id="the300-experience-title">The 300</h2>
          </div>
          <div className="the300-experience-grid">
            <article className="the300-includes">
              <p className="the300-eyebrow">The 300</p>
              <h3>Your private VIP gathering.</h3>
              <ul>
                <li>Admission to SociisGroup’s private event area</li>
                <li>Guest speakers</li>
                <li>Conversations with peers across business and society</li>
                <li>Live music</li>
                <li>Reserved seating, lunch with dishes to share, wine and drinks</li>
              </ul>
              <p className="the300-note">
                Speakers, artists and final gathering timings will be announced.
              </p>
              <div className="the300-pass">
                <p className="the300-eyebrow">Included with your VIP ticket</p>
                <h3>Love Tomorrow Summit</h3>
                <p>Connector Pass</p>
                <ul>
                  <li>Access to the Love Tomorrow Summit</li>
                </ul>
              </div>
            </article>

            <aside className="the300-booking" id="booking" aria-labelledby="the300-booking-title">
              <p className="the300-eyebrow">The 300 VIP</p>
              <h3 id="the300-booking-title">€1,000</h3>
              <p className="the300-booking-subtitle">Per guest · Including Belgian VAT</p>
              <div className="the300-booking-divider" />
              <h4>Bring your people.</h4>
              <p>
                Book up to 10 places together. For a larger group, contact us to arrange seating.
              </p>
              <a className="the300-contact" href="mailto:jeremie@sociisgroup.com">
                Contact us <span aria-hidden="true">↗</span>
              </a>
              <label className="the300-guest-label" htmlFor="the300-guest-count">
                Number of VIP guests
              </label>
              <select
                id="the300-guest-count"
                value={guestCount}
                onChange={(event) => setGuestCount(Number(event.currentTarget.value))}
              >
                {Array.from({ length: MAX_GUESTS }, (_, index) => index + 1).map((count) => (
                  <option key={count} value={count}>
                    {count} {count === 1 ? "guest" : "guests"}
                  </option>
                ))}
              </select>
              <p className="the300-total" aria-live="polite">
                <span>Total</span>
                <strong>€{total.toLocaleString("en-BE")} including Belgian VAT</strong>
              </p>
              <a className="the300-button the300-book-button" href={bookingUrl}>
                Book {guestCount} VIP {guestCount === 1 ? "place" : "places"}
                <span aria-hidden="true">↗</span>
              </a>
              <p className="the300-dress-code">
                <strong>Dress code</strong>
                <span>Summer elegance</span>
              </p>
              <p className="the300-booking-note">
                After payment, email your guest names and seating preferences to{" "}
                <a href="mailto:hello@sociisgroup.com">hello@sociisgroup.com</a>. We will confirm
                your booking once payment has cleared.
              </p>
            </aside>
          </div>
        </section>

        <section className="the300-venue" aria-labelledby="the300-venue-title">
          <div>
            <p className="the300-eyebrow">Venue and arrival</p>
            <h2 id="the300-venue-title">Meet us in the garden.</h2>
          </div>
          <div>
            <p>
              Crystal Garden, Tomorrowland grounds.
              <br />
              De Schorre, Schommelei 1, 2850 Boom, Belgium.
            </p>
            <p>Entrance and arrival instructions will follow.</p>
            <p className="the300-venue-note">
              Your access covers The 300 and Love Tomorrow Summit. This is not a Tomorrowland music
              festival ticket.
            </p>
          </div>
        </section>

        <section className="the300-closing" aria-labelledby="the300-closing-title">
          <p className="the300-eyebrow">More from our founding gatherings</p>
          <h2 id="the300-closing-title">
            A wider stage.
            <br />
            <em>A shared direction.</em>
          </h2>
          <p>Joris Beckers, Jeremie Landweer and the people behind our founding gatherings.</p>
          <a className="the300-button" href="/experiences">
            Explore our experiences <span aria-hidden="true">↗</span>
          </a>
        </section>
      </main>

      <footer className="the300-footer">
        <a href="/" aria-label="SociisGroup homepage">
          <img src="/media/logo-master.svg" width="120" alt="sociisgroup" />
        </a>
        <p>To serve humanity.</p>
        <a href="/experiences">Back to experiences</a>
      </footer>
    </div>
  );
}
