import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";

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
    portrait: "jeremie",
    href: "https://be.linkedin.com/in/jeremie-landweer",
  },
  {
    name: "Dominique Debecker",
    role: "Co-Founder & Co-CEO",
    image: "leader-dominique.webp",
    portrait: "dominique",
    href: "https://be.linkedin.com/in/dominique-debecker",
  },
  {
    name: "Luc Garguet-Duport",
    role: "Chief Operating Officer",
    image: "leader-luc.webp",
    portrait: "luc",
    href: "https://fr.linkedin.com/in/luc-garguet-duport-58910a8",
  },
  {
    name: "Richard Thommeret",
    role: "Chief Communications and Experiences Officer",
    image: "leader-richard-preferred.jpg",
    portrait: "richard",
    href: "https://be.linkedin.com/in/richardthommeret",
  },
  {
    name: "Chris Benardis",
    role: "Chief Financial Officer",
    image: "leader-chris.webp",
    portrait: "chris",
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
    href: "mailto:hello@sociisgroup.com?subject=Circle%20membership",
    label: "Enquire about Circle",
  },
  {
    audience: "Corporate partners",
    title: "Sovereign",
    description: "Help develop BEE and bring it to the people you serve.",
    href: "mailto:hello@sociisgroup.com?subject=Sovereign%20partnership",
    label: "Enquire about Sovereign",
  },
  {
    audience: "VIP tickets",
    title: "The 300",
    description: "A private VIP lunch at the Crystal Garden, Tomorrowland.",
    href: "/vip/?from=take-part",
    label: "VIP invitation",
  },
];

const gatheringStories = [
  {
    image: "hero-room.webp",
    alt: "Guests at The 64 framed by red drapes at Corinthia Brussels",
    chapter: "photo-the-64",
    label: "The 64 · Corinthia Brussels",
    title: "A smaller room.",
    emphasis: "A deeper exchange.",
    description:
      "Hospitality creates time and trust to listen, challenge assumptions and explore what we could do together.",
    date: "The 64 · Corinthia Brussels, 2026",
  },
  {
    image: "the300-voice.jpg",
    alt: "A speaker on stage at The 300",
    chapter: "photo-the-300",
    label: "The 300 · with Love Tomorrow",
    title: "A wider stage.",
    emphasis: "A shared direction.",
    description:
      "Culture and human connection, with the aim of carrying the work beyond the gathering.",
    date: "The 300 · 23 July 2026",
  },
];

const causes = [
  {
    image: "diana.webp",
    alt: "Dr Tessy Ojo CBE speaking at The 64, with a portrait of Diana behind her",
    caption: "Dr Tessy Ojo CBE · The 64",
    category: "Young people & positive change",
    title: "The Diana Award",
    description: "Supporting young people with the courage to create positive change.",
    href: "https://diana-award.org.uk/",
  },
  {
    image: "under-one-sky.webp",
    alt: "A street-level conversation in Under One Sky’s community work",
    caption: "Human connection · Under One Sky",
    category: "Connection, care & community",
    title: "Under One Sky",
    description: "Human connection and practical care for people affected by homelessness.",
    href: "https://underoneskytogether.com/",
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
  const [activeStory, setActiveStory] = useState(0);
  const [headerScrolled, setHeaderScrolled] = useState(false);

  useEffect(() => {
    const updateHeader = () => setHeaderScrolled(window.scrollY > 24);
    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });
    return () => window.removeEventListener("scroll", updateHeader);
  }, []);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <div className="gallery-rebuild">
      <a className="gr-skip" href="#main-content">
        Skip to content
      </a>
      <header className={`gr-header${headerScrolled ? " is-scrolled" : ""}`}>
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
            <div className="gr-purpose-evidence">
              <article>
                <span className="gr-overline">The problem / Ecological overshoot</span>
                <p className="gr-purpose-value">
                  1.7 <em>Earths</em>
                </p>
                <p>
                  Humanity’s demand on nature is about 73% above what Earth can regenerate in a
                  year.
                </p>
                <a
                  href="https://overshoot.footprintnetwork.org/newsroom/eod-2026-en/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Global Footprint Network · 2026 estimate ↗
                </a>
              </article>
              <article>
                <span className="gr-overline">The possibility / Solutions already exist</span>
                <p className="gr-purpose-value">1,600+</p>
                <p>
                  Efficient Solutions identified by Bertrand Piccard’s Solar Impulse Foundation.
                </p>
                <a href="https://impulse-foundation.com/" target="_blank" rel="noreferrer">
                  Explore the Foundation’s work ↗
                </a>
              </article>
            </div>
            <div className="gr-purpose-detail">
              <div>
                <p className="gr-eyebrow">Where behaviour matters</p>
                <h3>
                  Solutions need adoption.
                  <em>Knowing is not doing.</em>
                </h3>
              </div>
              <div>
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
                <a
                  className="gr-text-link"
                  href="mailto:hello@sociisgroup.com?subject=BEE%20development"
                >
                  Explore BEE development <span aria-hidden="true">↗</span>
                </a>
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
          </div>
        </section>

        <section className="gr-culture-chapter" id="culture">
          <div className="gr-culture-stage">
            <div className="gr-culture-backdrop" aria-hidden="true">
              <span>Ideas move.</span>
              <span>People act.</span>
            </div>
            <div className="gr-culture-portal">
              <img
                src="/media/the300.jpg"
                alt="People gathered beneath the flower-filled canopy at The 300"
                loading="lazy"
              />
              <div>
                <p className="gr-eyebrow">An unconventional approach</p>
                <h2>
                  Culture moves faster
                  <em>than governance.</em>
                </h2>
                <p>
                  We connect culture’s power to move people with technology that helps turn
                  inspiration into everyday action.
                </p>
              </div>
              <span className="gr-culture-credit">
                The 300 · with Love Tomorrow, on the iconic grounds of Tomorrowland
              </span>
            </div>
            <span className="gr-culture-cue">
              A shared experience can open a different perspective. ↓
            </span>
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
                <details className="gr-critical-mass">
                  <summary>
                    Why a critical mass? <span aria-hidden="true">+</span>
                  </summary>
                  <p>
                    Social tipping-point research informs our ambition. It does not establish one
                    billion as a proven global threshold. Our measurement approach will develop
                    through research and pilots.
                  </p>
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
                </details>
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
            <div className="gr-story-journey">
              <div className="gr-story-guidance">
                <span className="gr-story-position" aria-live="polite">
                  0{activeStory + 1}
                </span>
                <div className="gr-story-steps" aria-label="Choose a gathering">
                  {gatheringStories.map((story, index) => (
                    <button
                      key={story.label}
                      type="button"
                      aria-pressed={activeStory === index}
                      onClick={() => setActiveStory(index)}
                    >
                      {index === 0 ? "The 64" : "The 300"}
                    </button>
                  ))}
                </div>
                <p className="gr-story-scroll-hint">Continue scrolling ↓</p>
                <div className="gr-story-controls">
                  <button
                    type="button"
                    aria-label="Previous experience"
                    disabled={activeStory === 0}
                    onClick={() => setActiveStory(0)}
                  >
                    ↑
                  </button>
                  <button
                    type="button"
                    aria-label="Next experience"
                    disabled={activeStory === gatheringStories.length - 1}
                    onClick={() => setActiveStory(1)}
                  >
                    ↓
                  </button>
                </div>
              </div>
              <div className="gr-story-viewport" aria-live="polite">
                {gatheringStories.map((story, index) =>
                  index === activeStory ? (
                    <article className="gr-story-card" key={story.label}>
                      <a className="gr-story-image" href={`#${story.chapter}`}>
                        <img src={`/media/${story.image}`} alt={story.alt} loading="lazy" />
                        <span aria-hidden="true">↗</span>
                      </a>
                      <div className="gr-story-copy">
                        <div>
                          <span className="gr-overline">{story.label}</span>
                          <h3>
                            {story.title}
                            <em>{story.emphasis}</em>
                          </h3>
                        </div>
                        <p>
                          {story.description}
                          <small>{story.date}</small>
                        </p>
                      </div>
                    </article>
                  ) : null,
                )}
              </div>
            </div>
            <div className="gr-photo-story" id="photo-highlights">
              <div className="gr-photo-inner">
                <nav className="gr-gallery-nav" aria-label="Photo story sections">
                  <a href="#photo-the-64">
                    The 64 <span aria-hidden="true">↓</span>
                  </a>
                  <a href="#photo-the-300">
                    The 300 <span aria-hidden="true">↓</span>
                  </a>
                </nav>
                <div className="gr-photo-story-intro" id="photo-the-64" tabIndex={-1}>
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
                <div className="gr-photo-threshold">
                  <figure>
                    <img
                      src="/media/corinthia/door.webp"
                      alt="The gilded entrance to the former Grand Hotel Astoria, now Corinthia Brussels"
                      loading="lazy"
                    />
                    <figcaption>Grand Hotel Astoria · Corinthia Brussels</figcaption>
                  </figure>
                  <figure>
                    <img
                      src="/media/corinthia/flowers.webp"
                      alt="A tall floral arrangement framed by an arch inside Corinthia"
                      loading="lazy"
                    />
                    <figcaption>Flowers through the arch</figcaption>
                  </figure>
                </div>
                <div className="gr-photo-details">
                  <figure>
                    <img
                      src="/media/corinthia/gilt.webp"
                      alt="Gilded metalwork on the black entrance door"
                      loading="lazy"
                    />
                    <figcaption>The goldwork</figcaption>
                  </figure>
                  <figure>
                    <img
                      src="/media/corinthia/amber.webp"
                      alt="Chandeliers and ornate arches in amber light"
                      loading="lazy"
                    />
                    <figcaption>Chandeliers in amber light</figcaption>
                  </figure>
                  <figure>
                    <img
                      src="/media/corinthia/service.webp"
                      alt="Two plates carried through an ornate doorway"
                      loading="lazy"
                    />
                    <figcaption>Dinner service</figcaption>
                  </figure>
                  <figure>
                    <img
                      src="/media/corinthia/food.webp"
                      alt="A course served on a sculptural white plate"
                      loading="lazy"
                    />
                    <figcaption>A course from the evening</figcaption>
                  </figure>
                </div>
                <figure className="gr-photo-table">
                  <img
                    src="/media/corinthia/table.webp"
                    alt="A set dinner table with candles and flowers before guests arrive"
                    loading="lazy"
                  />
                  <figcaption>Before the guests arrived · The 64</figcaption>
                </figure>
                <div className="gr-photo-chapters">
                  <article>
                    <img
                      src="/media/hero-room.webp"
                      alt="Guests in the warmly lit ballroom at Corinthia Brussels"
                      loading="lazy"
                    />
                    <div>
                      <span className="gr-overline">The 64 · Corinthia Brussels</span>
                      <h4>In the room.</h4>
                      <p>Guests at the 2026 gathering.</p>
                    </div>
                  </article>
                  <article>
                    <img
                      src="/media/diana.webp"
                      alt="Dr Tessy Ojo CBE speaking in front of a portrait of Diana"
                      loading="lazy"
                    />
                    <div>
                      <span className="gr-overline">The 64 · On stage</span>
                      <h4>Dr Tessy Ojo CBE.</h4>
                    </div>
                  </article>
                </div>
                <section
                  className="gr-photo-tomorrow"
                  id="photo-the-300"
                  tabIndex={-1}
                  aria-labelledby="gr-photo-tomorrow-title"
                >
                  <div className="gr-photo-story-intro">
                    <span className="gr-overline">
                      The 300 · Tomorrowland grounds, Boom · With Love Tomorrow
                    </span>
                    <h3 id="gr-photo-tomorrow-title">Beyond the garden.</h3>
                    <p>
                      From the water garden and Tomorrowland’s sculpted stage to the people
                      gathering beneath the flower canopy.
                    </p>
                  </div>
                  <figure className="gr-tomorrow-stage">
                    <img
                      src="/media/tomorrowland/stage.webp"
                      alt="The elaborate Tomorrowland main stage seen across the open festival grounds"
                      loading="lazy"
                    />
                    <figcaption>The Tomorrowland grounds · Boom</figcaption>
                  </figure>
                  <div className="gr-tomorrow-details">
                    <figure>
                      <img
                        src="/media/tomorrowland/fountains.webp"
                        alt="Fountains rising from floating lotus platforms on the water"
                        loading="lazy"
                      />
                      <figcaption>The water garden</figcaption>
                    </figure>
                    <figure>
                      <img
                        src="/media/tomorrowland/sculpture.webp"
                        alt="A carved face with a bird in flight on the Tomorrowland stage"
                        loading="lazy"
                      />
                      <figcaption>The stage up close</figcaption>
                    </figure>
                  </div>
                  <figure className="gr-tomorrow-stage gr-photo-canopy">
                    <img
                      src="/media/the300.jpg"
                      alt="Guests beneath the flower canopy at The 300"
                      loading="lazy"
                    />
                    <figcaption>Under the canopy · The 300</figcaption>
                  </figure>
                </section>
                <div className="gr-photo-end">
                  <div>
                    <h4>See the full highlights.</h4>
                    <p>The room, the people and the moments in between.</p>
                  </div>
                  <a
                    className="gr-photo-cta"
                    href="https://sociisgroup.pic-time.com/jFfymim5ycJ9I"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Explore the 2026 photo highlights <span aria-hidden="true">↗</span>
                  </a>
                </div>
                <p className="gr-photo-credit">
                  Photography by Ian Hermans, Willem Van Puyenbroeck and Clayton Studio.
                </p>
              </div>
            </div>
            <div className="gr-photo-community">
              <p>Between gatherings, the conversation continues in Sociis House.</p>
              <a href="https://www.sociis.house/" target="_blank" rel="noreferrer">
                Enter Sociis House ↗
              </a>
            </div>
          </div>
        </section>

        <section className="gr-section gr-people" id="people">
          <div className="gr-wrap">
            <div className="gr-people-heading">
              <div>
                <p className="gr-eyebrow">07 / People & responsibility</p>
                <h2>
                  People who
                  <em>answer for the work.</em>
                </h2>
              </div>
              <p className="gr-lead">
                Jeremie, Dominique and Luc form the board. Together with Richard and Chris, they
                make up the executive leadership team.
              </p>
            </div>
            <div className="gr-leaders">
              {leadership.map((person, index) => (
                <article key={person.name}>
                  <div className="gr-leader-photo leader-portrait" data-person={person.portrait}>
                    <img src={`/media/${person.image}`} alt={person.name} loading="lazy" />
                  </div>
                  <span className="gr-overline">
                    Executive{index < 3 ? " · Board director" : ""}
                  </span>
                  <h3>{person.name}</h3>
                  <p>{person.role}</p>
                  <a
                    className="gr-linkedin"
                    href={person.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${person.name} on LinkedIn (opens in a new tab)`}
                  >
                    LinkedIn ↗
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="gr-section gr-giving" id="giving">
          <div className="gr-wrap">
            <div className="gr-giving-heading">
              <div>
                <p className="gr-eyebrow">08 / Our giving commitment</p>
                <p className="gr-giving-number">
                  20<span>%</span>
                </p>
              </div>
              <div>
                <h2>
                  Humanity is
                  <em>the reason.</em>
                </h2>
                <p>
                  Our commitment is to allocate 20% of annual profit to selected charitable causes.
                </p>
                <p>These causes feature in our existing work.</p>
              </div>
            </div>
            <div className="gr-cause-grid">
              {causes.map((cause) => (
                <article key={cause.title}>
                  <figure>
                    <img src={`/media/${cause.image}`} alt={cause.alt} loading="lazy" />
                    <figcaption>{cause.caption}</figcaption>
                  </figure>
                  <span className="gr-overline">{cause.category}</span>
                  <h3>{cause.title}</h3>
                  <p>{cause.description}</p>
                  <a href={cause.href} target="_blank" rel="noreferrer">
                    Explore {cause.title} <span aria-hidden="true">↗</span>
                  </a>
                </article>
              ))}
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
                  <a className="gr-text-link" href={item.href}>
                    {item.label} <span aria-hidden="true">↗</span>
                  </a>
                </article>
              ))}
            </div>
            <div className="gr-member-extra">
              <a href="mailto:hello@sociisgroup.com?subject=BEE">Ask about BEE ↗</a>
              <a href="mailto:hello@sociisgroup.com?subject=Investment">Discuss investment ↗</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="gr-footer">
        <div className="gr-footer-main">
          <a className="gr-brand" href="#top" aria-label="sociisgroup back to top">
            <img src="/media/logo-master.svg" alt="sociisgroup" />
          </a>
          <a href="mailto:hello@sociisgroup.com">hello@sociisgroup.com</a>
        </div>
        <div className="gr-footer-base">
          <a href="/club-64/?from=footer">Explore Club 64 ↗</a>
          <span>© 2026 sociisgroup · Brussels</span>
          <a
            href="https://www.forbes.be/nl/van-intentie-naar-actie-de-missie-van-sociisgroup/"
            target="_blank"
            rel="noreferrer"
          >
            Featured in Forbes Belgium ↗
          </a>
          <a href="#top" className="gr-back-top">
            Back to top ↑
          </a>
        </div>
      </footer>
      <a className="gr-floating-contact" href="mailto:hello@sociisgroup.com">
        Begin a conversation ↗
      </a>
      <a className="gr-return-top" href="#top" aria-label="Back to top">
        ↑
      </a>
    </div>
  );
}
