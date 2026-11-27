import { createFileRoute } from "@tanstack/react-router";
import { useRef, useState, type FormEvent, type KeyboardEvent } from "react";

const SITE_URL = "https://www.sociisgroup.com/club-64/";
const INVITATION_SIGNUP_URL =
  "https://webforms.pipedrive.com/f/6iEA8PbvvDewZc4Vtm20L6NFz3xhnG4RSBORuI2QqnwdPQGUCC4GNSBrJF1KZcbB0n";
const INVITATION_PAGE_COUNT = 16;
const DESCRIPTION =
  "A personal invitation to Club 64, a private international membership for up to 64 people committed to an economy that serves humanity.";

export const Route = createFileRoute("/club-64/")({
  head: () => ({
    meta: [
      { title: "Club 64 | A personal invitation | SociisGroup" },
      { name: "description", content: DESCRIPTION },
      { name: "theme-color", content: "#f8f6f0" },
      { property: "og:title", content: "Club 64 | A personal invitation | SociisGroup" },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: SITE_URL },
    ],
    links: [
      { rel: "canonical", href: SITE_URL },
      { rel: "stylesheet", href: "/club-64-layout.css" },
    ],
  }),
  component: Club64,
});

function Club64() {
  const invitationDialog = useRef<HTMLDialogElement>(null);
  const [invitationPage, setInvitationPage] = useState(0);
  const [applicationStatus, setApplicationStatus] = useState("");

  function openInvitation() {
    setInvitationPage(0);
    invitationDialog.current?.showModal();
  }

  function changeInvitationPage(direction: -1 | 1) {
    setInvitationPage((current) =>
      Math.min(INVITATION_PAGE_COUNT - 1, Math.max(0, current + direction)),
    );
  }

  function handleInvitationKeys(event: KeyboardEvent<HTMLDialogElement>) {
    if (event.key === "ArrowRight") {
      event.preventDefault();
      changeInvitationPage(1);
    }
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      changeInvitationPage(-1);
    }
  }

  function submitApplication(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const fields = new FormData(event.currentTarget);
    const body = [
      `Full name: ${String(fields.get("name") ?? "")}`,
      `Email address: ${String(fields.get("email") ?? "")}`,
      `What do you do?: ${String(fields.get("occupation") ?? "")}`,
      `Why would you like to join?: ${String(fields.get("reason") ?? "")}`,
    ].join("\n\n");

    window.location.href =
      `mailto:jeremie@sociisgroup.com?subject=${encodeURIComponent("Club 64 membership application")}` +
      `&body=${encodeURIComponent(body)}`;
    setApplicationStatus(
      "Your email program should open with your application. Review and send it there to apply.",
    );
  }

  return (
    <div className="club64-page">
      <header className="club64-header">
        <a className="club64-logo" href="https://www.sociisgroup.com/">
          <b>sociis</b>group
        </a>
        <nav className="club64-nav" aria-label="Club 64">
          <a href="#membership">Membership</a>
          <a href="#invitation">The invitation</a>
          <a href="#apply">Apply</a>
        </nav>
      </header>

      <main>
        <section className="club64-cover" aria-label="Club 64 personal invitation">
          <img
            src="/media/club64-invitation-cover.jpg"
            alt="Club 64 for Humanity. An embossed personal invitation."
            width="1100"
            height="1467"
            fetchPriority="high"
          />
          <a className="club64-scroll" href="#membership">
            Scroll to discover Club 64
          </a>
        </section>

        <section className="club64-section club64-wrap" id="membership">
          <p className="club64-eyebrow">A private international membership · Up to 64 people</p>
          <h1>Beyond your usual circles.</h1>
          <p className="club64-intro">
            Club 64 brings people from business, culture, hospitality and civil society into a
            smaller, more personal circle. People who are curious about one another and willing to
            put their experience and relationships to use for humanity.
          </p>
        </section>

        <figure className="club64-photo club64-wrap">
          <img
            src="/media/club64-corinthia-gathering.jpg"
            alt="People gathered at Corinthia Brussels, with warm lighting and red drapes"
            width="1280"
            height="854"
            loading="lazy"
          />
          <figcaption>The 64 at Corinthia Brussels · From the SociisGroup archive</figcaption>
        </figure>

        <section className="club64-section club64-wrap club64-benefits">
          <div>
            <p className="club64-eyebrow">Your membership</p>
            <h2>Room to know<br />one another.</h2>
            <p className="club64-note">
              Personal invitation. A considered application. An annual relationship.
            </p>
          </div>
          <div>
            <article>
              <h3>Conversations with fellow members</h3>
              <p>
                Two planned group conversations each year, with time to exchange experience and
                ideas. Online or in person, depending on where members are.
              </p>
            </article>
            <article>
              <h3>Personal introductions</h3>
              <p>
                A named SociisGroup contact helps explore connections where both people welcome
                them.
              </p>
            </article>
            <article>
              <h3>A connection to the work</h3>
              <p>
                Updates on SociisGroup’s work, with opportunities to contribute your experience and
                relationships. Your membership supports our work through culture and hospitality.
              </p>
            </article>
          </div>
        </section>

        <section className="club64-section club64-deck-section" id="invitation">
          <div className="club64-wrap club64-deck-layout">
            <div className="club64-deck-art">
              <img
                src="/media/club64-deck-personal-invitation.jpg"
                alt="A personal invitation from Jeremie Landweer"
                width="1100"
                height="1467"
                loading="lazy"
              />
              <img
                src="/media/club64-deck-belonging.jpg"
                alt="Belonging, from the Club 64 invitation"
                width="1100"
                height="1467"
                loading="lazy"
              />
            </div>
            <div>
              <p className="club64-eyebrow">The full invitation</p>
              <h2>Get a feeling<br />for the circle.</h2>
              <p>
                The people, the setting and the work behind Club 64. Explore the complete 16-page
                invitation at your own pace.
              </p>
              <button className="club64-button club64-button-light" type="button" onClick={openInvitation}>
                Read the invitation
              </button>
              <br />
              <a
                className="club64-text-link"
                href="/club-64-invitation.pdf"
                  download="Club-64-Invitation.pdf"
              >
                Download the invitation PDF
              </a>
            </div>
          </div>
        </section>

        <section className="club64-section club64-wrap club64-application" id="apply">
          <div>
            <p className="club64-eyebrow">By personal invitation</p>
            <h2>Your place<br />in Club 64.</h2>
            <p className="club64-price">€2,500 <span>per year</span></p>
            <p>It begins with a personal conversation.</p>
            <p className="club64-note">
              We review applications personally. Following acceptance, you receive the full terms
              and total payable before deciding to join. There is no payment to apply.
            </p>
            <p className="club64-note">Event tickets, including The 300, are separate.</p>
          </div>

          <form className="club64-form" onSubmit={submitApplication}>
            <div className="club64-fields">
              <label className="club64-field">
                Full name
                <input autoComplete="name" name="name" placeholder="Your name" required />
              </label>
              <label className="club64-field">
                Email address
                <input
                  type="email"
                  autoComplete="email"
                  name="email"
                  placeholder="you@example.com"
                  required
                />
              </label>
              <label className="club64-field club64-full-field">
                What do you do?
                <input name="occupation" placeholder="Your role or field of work" required />
              </label>
              <label className="club64-field club64-full-field">
                Why would you like to join?
                <textarea
                  name="reason"
                  placeholder="A few words about you and your interest in Club 64"
                  required
                />
              </label>
            </div>
            <div className="club64-submit-row">
              <button className="club64-button" type="submit">Apply for Club 64</button>
              <p className="club64-note">
                Your application opens as an email draft. Review and send it from your email
                program; it is not a payment or a subscription to future invitations.
              </p>
              <p className="club64-form-status" aria-live="polite">{applicationStatus}</p>
              <a href="/privacy.html?from=club" target="_blank" rel="noopener noreferrer">
                Privacy
              </a>
            </div>
          </form>
        </section>

        <div className="club64-wrap club64-secondary">
          <section>
            <h3>A question before applying?</h3>
            <p>It begins with a personal conversation. You can speak with Jeremie without joining the invitation list.</p>
            <a
              className="club64-text-link"
              href="mailto:jeremie@sociisgroup.com?subject=Club%2064%20%7C%20A%20personal%20conversation"
            >
              Request a conversation with Jeremie ↗
            </a>
          </section>
          <section>
            <h3>Future invitations</h3>
            <p>Keep in touch without applying for membership. This is a separate, optional sign-up.</p>
            <a
              className="club64-text-link"
              href={INVITATION_SIGNUP_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              Sign up for future invitations ↗
            </a>
          </section>
        </div>
      </main>

      <footer className="club64-footer">
        <a href="https://www.sociisgroup.com/">Return to SociisGroup</a>
        <span>Club 64 · A personal invitation</span>
        <a href="/privacy.html?from=club">Privacy</a>
      </footer>

      <dialog
        ref={invitationDialog}
        className="club64-dialog"
        aria-label="Club 64 invitation"
        onKeyDown={handleInvitationKeys}
      >
        <div className="club64-viewerbar">
          <button type="button" onClick={() => changeInvitationPage(-1)} disabled={invitationPage === 0} aria-label="Previous page">
            Previous
          </button>
          <span aria-live="polite">{invitationPage + 1} / {INVITATION_PAGE_COUNT}</span>
          <button
            type="button"
            onClick={() => changeInvitationPage(1)}
            disabled={invitationPage === INVITATION_PAGE_COUNT - 1}
            aria-label="Next page"
          >
            Next
          </button>
          <button type="button" onClick={() => invitationDialog.current?.close()}>
            Close
          </button>
        </div>
        <img
          className="club64-viewerimage"
          src={`/media/club64-invitation-pages/${String(invitationPage + 1).padStart(2, "0")}.jpg`}
          alt={`Club 64 invitation, page ${invitationPage + 1}`}
          width="960"
          height="1280"
        />
        <p className="club64-viewerhelp">Use Previous and Next, or the arrow keys. Press Escape to return to the page.</p>
      </dialog>
    </div>
  );
}
