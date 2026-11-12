import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

const navigation = [
  ["purpose", "Why"],
  ["bee", "BEE"],
  ["business", "The business"],
  ["approach", "Our approach"],
  ["experiences", "Experiences"],
  ["people", "Our people"],
  ["participate", "Take part"],
] as const;

const leadership = [
  {
    name: "Jeremie Landweer",
    role: "Founder & CEO",
    image: "leader-jeremie.webp",
    href: "https://be.linkedin.com/in/jeremie-landweer",
  },
  {
    name: "Dominique Debecker",
    role: "Chief Behavioural Officer",
    image: "leader-dominique.webp",
    href: "https://be.linkedin.com/in/dominique-debecker",
  },
  {
    name: "Luc Garguet-Duport",
    role: "Chief Operating Officer",
    image: "leader-luc.webp",
    href: "https://fr.linkedin.com/in/luc-garguet-duport-58910a8",
  },
  {
    name: "Richard Thommeret",
    role: "Chief Communications and Experiences Officer",
    image: "leader-richard-preferred.jpg",
    href: "https://be.linkedin.com/in/richardthommeret",
  },
  {
    name: "Chris Benardis",
    role: "Chief Financial Officer",
    image: "leader-chris.webp",
    href: "https://ch.linkedin.com/in/chris-benardis",
  },
];

const routesToAdoption = [
  {
    number: "01",
    category: "Discovery & influence",
    title: "Culture & influence",
    description:
      "Artists, creators, sport and cultural brands can introduce BEE to their audiences through trusted voices and shared experiences.",
  },
  {
    number: "02",
    category: "Choices in context",
    title: "Hospitality",
    description:
      "Hotel and travel loyalty programmes, guest apps and bookings can bring BEE into choices people make before, during and after a stay.",
  },
  {
    number: "03",
    category: "Global company reach",
    title: "Sovereign partners",
    description:
      "We seek global companies to fund, co-develop and distribute BEE, including through retail loyalty programmes and customer and employee platforms.",
  },
  {
    number: "04",
    category: "Participation & connection",
    title: "Experiences & communities",
    description:
      "The 64, The 300 and Sociis House bring people into the mission, building relationships and continued participation.",
  },
];

const participation = [
  {
    audience: "Individuals",
    title: "Club 64",
    description: "A private membership for up to 64 people from different fields.",
    href: "/club-64/?from=take-part",
    label: "Explore Club 64",
  },
  {
    audience: "Small and medium businesses",
    title: "Circle",
    description: "Meet peers and collaborate on SociisGroup’s work.",
  },
  {
    audience: "Corporate partners",
    title: "Sovereign",
    description: "Help develop BEE and bring it to the people you serve.",
  },
  {
    audience: "VIP tickets",
    title: "The 300",
    description: "A private VIP lunch at the Crystal Garden, Tomorrowland.",
    href: "/vip/?from=take-part",
    label: "VIP invitation",
  },
];

export const Route = createFileRoute("/corinthia-gallery")({
  head: () => ({
    meta: [
      { title: "SociisGroup — Change behaviour. Shift the economic system." },
      {
        name: "description",
        content:
          "An independent behavioural institution developing BEE for more sustainable everyday choices.",
      },
      { name: "theme-color", content: "#f5f2e9" },
      { property: "og:type", content: "website" },
      {
        property: "og:title",
        content: "SociisGroup — Change behaviour. Shift the economic system.",
      },
      {
        property: "og:description",
        content:
          "An independent behavioural institution developing BEE for more sustainable everyday choices.",
      },
    ],
    links: [
      { rel: "canonical", href: "https://the300.sociisgroup.com/" },
      { rel: "stylesheet", href: "/fonts/institution.css" },
      { rel: "stylesheet", href: "/gallery-rebuild.css" },
      { rel: "icon", href: "/media/bee-mark.svg" },
    ],
  }),
  component: CorinthiaGalleryPage,
});

export function CorinthiaGalleryPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <div className="gallery-rebuild">
      <a className="gr-skip" href="#main-content">
        Skip to content
      </a>
      <header className="gr-header">
        <a className="gr-brand" href="#top" aria-label="SociisGroup home">
          <img src="/media/logo-master.svg" alt="sociisgroup" />
        </a>
        <button
          className="gr-menu-toggle"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="gr-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span>{menuOpen ? "Close" : "Menu"}</span>
          <span className="gr-menu-icon" aria-hidden="true">
            <i />
            <i />
          </span>
        </button>
        <nav
          className={`gr-navigation${menuOpen ? " is-open" : ""}`}
          id="gr-navigation"
          aria-label="Main navigation"
        >
          {navigation.map(([id, label]) => (
            <a key={id} href={`#${id}`} onClick={closeMenu}>
              {label}
            </a>
          ))}
        </nav>
        <a className="gr-nav-house" href="https://www.sociis.house/">
          Sociis House <span aria-hidden="true">↗</span>
        </a>
      </header>

      <main id="main-content">
        <section className="gr-hero" id="top" aria-labelledby="gr-hero-title">
          <div className="gr-hero-photo">
            <img
              src="/media/family-shared-smile.webp"
              alt="Jeremie Landweer and his mother sharing a smile at The 64"
              fetchPriority="high"
            />
            <span className="gr-photo-label">A moment at The 64</span>
          </div>
          <div className="gr-hero-copy">
            <p className="gr-eyebrow">
              <span className="gr-star" aria-hidden="true">
                ✳
              </span>
              An independent behavioural institution
            </p>
            <h1 id="gr-hero-title">
              <span>
                Change <span className="gr-accent">behaviour.</span>
              </span>
              <em>Shift the economic</em>
              <em>system.</em>
            </h1>
            <p className="gr-hero-description">
              We are developing <strong>BEE</strong>, our core product: an AI-powered application
              designed to help people compare everyday options and make more sustainable choices.
            </p>
            <p>
              Core access will be free. Planned BEE revenue comes from optional premium
              subscriptions, company licences and integrations.
            </p>
            <a className="gr-button gr-button-dark" href="#bee">
              Discover BEE <span aria-hidden="true">→</span>
            </a>
            <a className="gr-conversation" href="mailto:hello@sociisgroup.com">
              Begin a conversation <span aria-hidden="true">↗</span>
            </a>
          </div>
          <div className="gr-hero-foot">
            <span>To serve humanity.</span>
            <a href="/media/film-r149.mp4" target="_blank" rel="noreferrer">
              <span className="gr-play" aria-hidden="true">
                ▷
              </span>
              Watch our story <small>1:08</small>
            </a>
          </div>
          <a className="gr-scroll-cue" href="#purpose">
            <span aria-hidden="true" />
            Scroll to explore
          </a>
        </section>

        <section className="gr-section gr-purpose" id="purpose">
          <div className="gr-wrap">
            <div className="gr-section-head">
              <p className="gr-eyebrow">01 / Why this work matters</p>
              <h2>
                We use more resources
                <em>than Earth can renew.</em>
              </h2>
              <p className="gr-lead">
                What we buy and use shapes what businesses make. Changing everyday decisions can
                shift demand and, over time, what the economy rewards.
              </p>
            </div>
            <div className="gr-purpose-detail">
              <span className="gr-overline">Where behaviour matters</span>
              <div>
                <h3>
                  Solutions need adoption.
                  <em>Knowing is not doing.</em>
                </h3>
                <p>
                  Our focus is helping people and organisations put better options into practice.
                  Repeated choices can shift demand and the incentives businesses respond to.
                </p>
                <p>
                  That is why we are developing BEE and building routes to people through culture,
                  hospitality and partnerships.
                </p>
                <a className="gr-text-link" href="#bee">
                  How BEE is intended to help <span aria-hidden="true">↓</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="gr-section gr-bee" id="bee">
          <div className="gr-wrap">
            <div className="gr-section-topline">
              <p className="gr-eyebrow">02 / What we develop</p>
              <p>Behavioural innovation. Built around real life.</p>
            </div>
            <div className="gr-bee-grid">
              <div className="gr-bee-copy">
                <div className="gr-bee-mark">
                  <img src="/media/bee-mark.svg" alt="" />
                  <span>
                    <strong>BEE</strong>
                    <small>Behavioural Engine with Ethics</small>
                  </span>
                </div>
                <h2>
                  Good intentions.
                  <em>Everyday action.</em>
                </h2>
                <p className="gr-lead">
                  An AI-powered behavioural platform being developed to help people explore more
                  sustainable choices that fit their needs, time and budget.
                </p>
                <p>We aim to offer BEE directly to individuals and embed it in company services.</p>
                <p className="gr-status">
                  Early web prototype in testing · Core access will be free
                </p>
              </div>
              <div className="gr-bee-demo">
                <figure className="gr-image-caption">
                  <img
                    src="/media/bee-moment.webp"
                    alt="Two friends exploring something on a phone over coffee"
                    loading="lazy"
                  />
                  <figcaption>Representative photograph · Tim Douglas / Pexels</figcaption>
                </figure>
                <article className="gr-choice-card">
                  <span className="gr-overline">An everyday choice</span>
                  <p className="gr-eyebrow">Your question</p>
                  <blockquote>
                    “What’s a more sustainable way to travel, within my time and budget?”
                  </blockquote>
                  <p className="gr-eyebrow">BEE’s intended support</p>
                  <p>
                    Compare travel options and explain trade-offs in time, cost and environmental
                    impact.
                  </p>
                  <strong>You decide.</strong>
                  <p>Choose what fits your needs and priorities.</p>
                  <small>An illustration of intended use, not a live BEE response.</small>
                </article>
              </div>
            </div>
          </div>
        </section>

        <section className="gr-section gr-business" id="business">
          <div className="gr-wrap">
            <p className="gr-eyebrow">03 / The business behind the ambition</p>
            <div className="gr-business-heading">
              <h2>
                Behavioural technology.
                <em>For people and companies.</em>
              </h2>
              <p className="gr-lead">
                <strong>sociis</strong>group is a Belgian for-profit company with a social purpose,
                operating as an independent behavioural institution.
              </p>
            </div>
            <p className="gr-business-intro">
              Our innovation is BEE: one reusable technology platform for individuals and companies.
              We aim to grow a scalable business that helps everyday choices serve humanity.
            </p>
            <div className="gr-market-line">
              <span className="gr-overline">Our market</span>
              <p>Technology for sustainable everyday choices.</p>
              <span>
                Intended settings: hospitality, cultural experiences and company customer journeys.
              </span>
            </div>
            <div className="gr-business-grid">
              <article>
                <span className="gr-overline">01 / Individuals</span>
                <h3>
                  Free core.
                  <em>Optional premium.</em>
                </h3>
                <p>
                  Core BEE access will be free. Optional paid premium services are planned to create
                  consumer revenue.
                </p>
                <small>Platform in development</small>
              </article>
              <article>
                <span className="gr-overline">02 / Companies</span>
                <h3>
                  Enterprise licences
                  <em>& integrations.</em>
                </h3>
                <p>
                  We plan to co-develop and license BEE, integrating it into loyalty programmes,
                  hotel apps and other customer journeys so sustainable options are easier to
                  choose.
                </p>
                <small>Enterprise offering in development</small>
              </article>
              <article>
                <span className="gr-overline">03 / Participation</span>
                <h3>
                  Memberships
                  <em>& experiences.</em>
                </h3>
                <p>
                  Paid memberships and experiences help fund the work. Our gatherings introduce
                  people to SociisGroup and help us build relationships with potential partners.
                  Club 64 is for individuals, Circle is for small and medium-sized businesses, and
                  Sovereign is for strategic enterprise partners.
                </p>
                <small>Commercial participation</small>
              </article>
            </div>
            <p className="gr-partner-note">
              Seeking co-development and pilot partners for BEE, and investment to develop, test and
              prepare it for wider use.
            </p>
            <a className="gr-text-link" href="mailto:hello@sociisgroup.com">
              Discuss the business &amp; investment <span aria-hidden="true">↗</span>
            </a>
          </div>
        </section>

        <section className="gr-section gr-approach" id="approach">
          <div className="gr-wrap">
            <div className="gr-section-topline">
              <p className="gr-eyebrow">04 / How we aim to scale</p>
              <p>One platform. Four routes.</p>
            </div>
            <div className="gr-approach-heading">
              <h2>
                Bringing BEE
                <em>into everyday life.</em>
              </h2>
              <p className="gr-lead">
                Our route towards one billion people: bring BEE into the voices, services, companies
                and communities already part of everyday life.
              </p>
            </div>
            <div className="gr-routes">
              {routesToAdoption.map((route) => (
                <article key={route.number}>
                  <span className="gr-overline">{route.number}</span>
                  <span className="gr-route-category">{route.category}</span>
                  <h3>{route.title}</h3>
                  <p>{route.description}</p>
                </article>
              ))}
            </div>
            <div className="gr-pilot-note">
              <p>
                Loyalty integrations are key: reaching existing members and supporting repeated
                choices. A hotel group may also be a Sovereign partner.
              </p>
              <a className="gr-text-link" href="mailto:hello@sociisgroup.com">
                Explore a BEE pilot <span aria-hidden="true">↗</span>
              </a>
            </div>
            <figure className="gr-wide-photo">
              <img
                src="/media/the300.jpg"
                alt="People gathered beneath the flower-filled canopy at The 300"
                loading="lazy"
              />
              <figcaption>
                <span>The 300 · with Love Tomorrow</span>
                <span>On the iconic grounds of Tomorrowland</span>
              </figcaption>
            </figure>
            <div className="gr-culture-note">
              <span className="gr-overline">An unconventional approach</span>
              <h3>
                Culture moves faster
                <em>than governance.</em>
              </h3>
              <p>
                We connect culture’s power to move people with technology that helps turn
                inspiration into everyday action.
              </p>
            </div>
          </div>
        </section>

        <section className="gr-section gr-change">
          <div className="gr-wrap">
            <p className="gr-eyebrow">05 / The change we aim for</p>
            <div className="gr-change-heading">
              <h2>
                Different choices.
                <em>Different demand.</em>
              </h2>
              <p className="gr-lead">
                Repeated choices could influence what businesses produce, offer and invest in. This
                is the route to economic change we aim to accelerate.
              </p>
            </div>
            <ol className="gr-change-steps">
              <li>
                <span>01</span>
                <h3>People choose</h3>
                <p>Different decisions in everyday life.</p>
              </li>
              <li>
                <span>02</span>
                <h3>Demand shifts</h3>
                <p>What people buy, use and support changes.</p>
              </li>
              <li>
                <span>03</span>
                <h3>Businesses respond</h3>
                <p>Products and investment can adapt.</p>
              </li>
              <li>
                <span>04</span>
                <h3>Incentives evolve</h3>
                <p>Better choices can gain economic weight.</p>
              </li>
            </ol>
            <div className="gr-ambition">
              <div>
                <span className="gr-overline">Our ambition</span>
                <p className="gr-billion">
                  One billion
                  <em>people.</em>
                </p>
              </div>
              <div>
                <h3>
                  Meaningful action.
                  <em>At a scale that matters.</em>
                </h3>
                <p>
                  Our ambition is to activate one billion people through our four routes to
                  adoption. We aim to measure repeated choices and lasting change, beyond views and
                  downloads.
                </p>
                <p className="gr-research-note">
                  Social tipping-point research informs our ambition. It does not establish one
                  billion as a proven global threshold. Our measurement approach will develop
                  through research and pilots.
                </p>
                <div className="gr-sources">
                  <a
                    href="https://www.science.org/doi/10.1126/science.aas8827"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Centola et al. · 2018 ↗
                  </a>
                  <a
                    href="https://esd.copernicus.org/articles/16/189/2025/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Everall et al. · 2025 ↗
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="gr-vip">
          <div className="gr-vip-copy">
            <span className="gr-overline">2027 VIP invitation</span>
            <h2>The 300</h2>
            <p>A private, seated VIP lunch with live music and guest speakers.</p>
            <p>
              <strong>22 July 2027</strong>
              <br />
              Crystal Garden · Tomorrowland grounds · Boom, Belgium
            </p>
            <p>Hosted by SociisGroup in collaboration with Love Tomorrow.</p>
            <p>
              <strong>€1,000 per guest</strong> · Including Belgian VAT
            </p>
            <a className="gr-button gr-button-light" href="/vip/?from=experiences">
              View VIP invitation <span aria-hidden="true">↗</span>
            </a>
          </div>
          <figure>
            <img
              src="/media/the300.jpg"
              alt="Guests beneath the flower canopy at The 300 in 2026"
              loading="lazy"
            />
            <figcaption>The 300 · 2026</figcaption>
          </figure>
        </section>

        <section className="gr-section gr-experiences" id="experiences">
          <div className="gr-wrap">
            <p className="gr-eyebrow">06 / Where the purpose comes to life</p>
            <div className="gr-experiences-heading">
              <span className="gr-overline">Past editions · The 64 and The 300 · 2026</span>
              <h2>
                Different worlds.
                <em>Human connection.</em>
              </h2>
              <p className="gr-lead">
                We bring people from business, culture, academia and society together to explore
                what they could change through their decisions, organisations and ideas.
              </p>
              <a className="gr-text-link" href="#photo-highlights">
                Explore the photo story <span aria-hidden="true">↓</span>
              </a>
            </div>
            <div className="gr-editions">
              <article>
                <span className="gr-overline">The 64 · Corinthia Brussels</span>
                <h3>
                  A smaller room.
                  <em>A deeper exchange.</em>
                </h3>
                <p>
                  Hospitality creates time and trust to listen, challenge assumptions and explore
                  what we could do together.
                </p>
                <small>The 64 · Corinthia Brussels, 2026</small>
              </article>
              <article>
                <span className="gr-overline">The 300 · with Love Tomorrow</span>
                <h3>
                  A wider stage.
                  <em>A shared direction.</em>
                </h3>
                <p>
                  Culture and human connection, with the aim of carrying the work beyond the
                  gathering.
                </p>
                <small>The 300 · 23 July 2026</small>
              </article>
            </div>
            <nav className="gr-gallery-nav" aria-label="Photo story sections">
              <a href="#photo-the-64">The 64</a>
              <a href="#photo-the-300">The 300</a>
            </nav>
            <div className="gr-photo-story" id="photo-highlights">
              <div className="gr-photo-story-intro">
                <span className="gr-overline">The 64 & The 300 · July 2026</span>
                <h3>
                  Before the room
                  <em>filled with voices.</em>
                </h3>
                <p>
                  On Rue Royale, the doors of Corinthia Brussels, the former Grand Hotel Astoria,
                  opened onto flowers, candlelight and a room waiting to come alive.
                </p>
              </div>
              <figure className="gr-story-photo gr-photo-large" id="photo-the-64">
                <img
                  src="/media/corinthia-before-the-gathering.webp"
                  alt="A set dinner table with candles and flowers before guests arrive"
                  loading="lazy"
                />
                <figcaption>Before the guests arrived · The 64</figcaption>
              </figure>
              <figure className="gr-story-photo">
                <img
                  src="/media/hero-room.webp"
                  alt="Guests in the warmly lit ballroom at Corinthia Brussels"
                  loading="lazy"
                />
                <figcaption>The 64 · Corinthia Brussels</figcaption>
              </figure>
              <figure className="gr-story-photo gr-photo-speaker">
                <img
                  src="/media/diana.webp"
                  alt="Dr Tessy Ojo CBE speaking in front of a portrait of Diana"
                  loading="lazy"
                />
                <figcaption>
                  <strong>Dr Tessy Ojo CBE.</strong>
                  <span>The 64 · On stage</span>
                </figcaption>
              </figure>
              <div className="gr-photo-story-intro gr-photo-story-second" id="photo-the-300">
                <span className="gr-overline">The 300 · Tomorrowland grounds, Boom</span>
                <h3>
                  Beyond the garden.
                  <em>Under one sky.</em>
                </h3>
                <p>
                  From Tomorrowland’s sculpted stage to the people gathering beneath the flower
                  canopy.
                </p>
              </div>
              <figure className="gr-story-photo">
                <img
                  src="/media/under-one-sky.webp"
                  alt="The Tomorrowland grounds beneath an open summer sky"
                  loading="lazy"
                />
                <figcaption>The Tomorrowland grounds · Boom</figcaption>
              </figure>
              <figure className="gr-story-photo gr-photo-large">
                <img
                  src="/media/the300.jpg"
                  alt="Guests beneath the flower canopy at The 300"
                  loading="lazy"
                />
                <figcaption>Under the canopy · The 300</figcaption>
              </figure>
            </div>
            <p className="gr-photo-credit">
              Photography by Ian Hermans, Willem Van Puyenbroeck and Clayton Studio.
            </p>
          </div>
        </section>

        <section className="gr-section gr-people" id="people">
          <div className="gr-wrap">
            <p className="gr-eyebrow">07 / People & responsibility</p>
            <div className="gr-people-heading">
              <h2>
                People who
                <em>answer for the work.</em>
              </h2>
              <p className="gr-lead">
                Jeremie, Dominique and Luc form the board. Together with Richard and Chris, they
                make up the executive leadership team.
              </p>
            </div>
            <div className="gr-leaders">
              {leadership.map((person, index) => (
                <article className={index > 2 ? "gr-leader-small" : ""} key={person.name}>
                  <a
                    className="gr-leader-photo"
                    href={person.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${person.name} on LinkedIn`}
                  >
                    <img src={`/media/${person.image}`} alt={person.name} loading="lazy" />
                    <span aria-hidden="true">↗</span>
                  </a>
                  <span className="gr-overline">
                    Executive{index < 3 ? " · Board director" : ""}
                  </span>
                  <h3>{person.name}</h3>
                  <p>{person.role}</p>
                  <a className="gr-linkedin" href={person.href} target="_blank" rel="noreferrer">
                    LinkedIn ↗
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="gr-giving">
          <div className="gr-wrap">
            <div className="gr-giving-number">20%</div>
            <div>
              <p className="gr-eyebrow">08 / Our giving commitment</p>
              <h2>
                Humanity is
                <em>the reason.</em>
              </h2>
              <p>
                Our commitment is to allocate 20% of annual profit to selected charitable causes.
              </p>
              <span>These causes feature in our existing work.</span>
            </div>
          </div>
        </section>

        <section className="gr-section gr-participate" id="participate">
          <div className="gr-wrap">
            <p className="gr-eyebrow">09 / Take part</p>
            <div className="gr-participate-heading">
              <h2>What could we change together?</h2>
              <p className="gr-lead">Three ways to become a member. One invitation to The 300.</p>
            </div>
            <div className="gr-participation-grid">
              {participation.map((item) => (
                <article key={item.title}>
                  <span className="gr-overline">{item.audience}</span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  {item.href && (
                    <a className="gr-text-link" href={item.href}>
                      {item.label} <span aria-hidden="true">↗</span>
                    </a>
                  )}
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="gr-footer">
        <a className="gr-brand" href="#top" aria-label="Back to top">
          <img src="/media/logo-master.svg" alt="sociisgroup" />
        </a>
        <p>Change behaviour. Shift the economic system.</p>
        <a href="#top" className="gr-back-top">
          Back to top ↑
        </a>
      </footer>
    </div>
  );
}
