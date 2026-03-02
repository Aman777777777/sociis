import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";

const Charter = () => {
  return (
    <PageTransition>
      <Header />
      <main className="min-h-screen bg-background">
        <section className="pt-32 pb-20">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-xs sm:text-sm tracking-[0.3em] text-muted-foreground uppercase mb-3 sm:mb-4">
                Governance Document
              </p>
              <h1 className="font-sans font-light text-3xl sm:text-4xl text-foreground tracking-tight mb-6">
                Institutional Charter
              </h1>
              <div className="w-24 h-px bg-gradient-to-r from-accent to-transparent mb-10"></div>

              <div className="space-y-2 text-sm text-muted-foreground mb-10">
                <p>Status: Controlled Circulation, Internal Alignment</p>
                <p>Audience: Circle, Advisors, Companies, Allies, Sovereign Actors (by exception)</p>
                <p>Authorised by: Founder & CEO, SociisGroup™</p>
              </div>

              <p className="text-body text-muted-foreground italic mb-12">
                This document is an institutional onboarding briefing designed to align strategic collaborators, advisors, and sovereign actors with the SociisGroup mandate, architecture, and behavioural standard.
              </p>

              {/* Charter Content */}
              <div className="space-y-12 mb-16">

                {/* 1. Welcome */}
                <div>
                  <h2 className="font-sans text-xl text-foreground font-medium mb-6">1. Welcome</h2>
                  <div className="space-y-4 text-body text-muted-foreground">
                    <p>Welcome inside SociisGroup™.</p>
                    <p>You are reading this document because you are stepping into a behavioural institution, not a club, not a private network, not a coaching community, not an event brand, not an incubator, not a "mastermind".</p>
                    <p>SociisGroup exists to ethically support one billion individuals in taking more conscious decisions in how they behave, responsibly and in line with their deep values.</p>
                    <p>SociisGroup actions are rooted in Sustainability, Hospitality, and Humanity. Together, these domains ensure our work strengthens not only business performance, but also the quality of decisions, relationships, and environments, raising the standard for leadership, culture, and conscience at every level.</p>
                    <p>We are not in a classical "membership" organisation. You are serving a cause and are acting inside an Institution with a mandate and a long-term horizon.</p>
                    <p>This document is designed for onboarding to understand:</p>
                    <ul className="space-y-2 pl-6 list-disc">
                      <li>What SociisGroup is (and is not)</li>
                      <li>Why it exists</li>
                      <li>How it is structured</li>
                      <li>How value moves</li>
                      <li>How the divisions interlock</li>
                      <li>What roles exist</li>
                      <li>How pricing and return on engagement actually work</li>
                      <li>And what is expected from you</li>
                    </ul>
                  </div>
                </div>

                {/* 2. Executive Overview */}
                <div>
                  <h2 className="font-sans text-xl text-foreground font-medium mb-6">2. Executive Overview</h2>

                  <div className="space-y-8">
                    <div>
                      <h3 className="font-sans text-lg text-foreground font-medium mb-4">2.1 What SociisGroup Is</h3>
                      <div className="space-y-4 text-body text-muted-foreground">
                        <p>SociisGroup™ is a sovereign independent behavioural Institution operating with impact at scale.</p>
                        <p>We build unconventionally on Hospitality, Sustainability and Humanity to ethically offer one billion individuals the opportunity to trigger mindset shifts and eventually adopt more sustainable behaviours.</p>
                        <p>SociisGroup develops one behavioural framework (SBS™) and one behavioural interface (BEE™). Together, they translate values into lived conduct across individual, organisational, and institutional contexts.</p>
                        <p>We operate through:</p>
                        <ul className="space-y-2 pl-6 list-disc">
                          <li>SBS™, Sustainable Behavioural Standard</li>
                          <li>BEE™, Behavioural Engine of Ethics (SaaS), impact at scale</li>
                          <li>Sociis Experiences™, The 22 / The 64 / The 300</li>
                          <li>Sociis Culture™, Apparel, art, film, Let There Be Light™</li>
                          <li>Sociis House™, Behavioural literacy, reflection & mindset shift environment</li>
                          <li>Sociis Access™, Curated proximity architecture</li>
                        </ul>
                      </div>
                    </div>

                    <div>
                      <h3 className="font-sans text-lg text-foreground font-medium mb-4">2.2 Why SociisGroup Exists</h3>
                      <div className="space-y-4 text-body text-muted-foreground">
                        <p>We live in a time of volatility and grievance, where sustainability is often seen as an unnecessary cost.</p>
                        <p>Planetary boundaries define the limits of human impact on Earth's systems. Beyond these limits, the environment loses its ability to self-regulate, putting humanity at risk. Today, seven of the nine boundaries have been crossed.</p>
                        <p>We know what to do. Frameworks exist to measure and manage our impact, the Greenhouse Gas Protocol being among the most advanced. The problem is not knowledge. It is behaviour. We do not act on what we know, individually or collectively.</p>
                        <p>ESG is an outcome of behaviour. SociisGroup operates upstream of ESG, shaping behaviour before outcomes are measured, reported, or regulated.</p>
                        <p>SociisGroup exists to close this gap, aiming at ethically triggering mindset shifts and eventually enabling at scale more sustainable behaviours, which will unlock business value and restore dignity of the unseen.</p>
                        <p>In practice, SociisGroup designs a single behavioural framework (SBS™) and operates a single behavioural interface (BEE™) to activate reflection and mindset shifts, deploying this behavioural infrastructure across sovereign, corporate, cultural, and hospitality environments.</p>
                      </div>
                    </div>

                    <div>
                      <h3 className="font-sans text-lg text-foreground font-medium mb-4">2.3 Who Is Inside</h3>
                      <div className="space-y-4 text-body text-muted-foreground">
                        <p>Four populations:</p>
                        <ol className="space-y-3 pl-6 list-decimal">
                          <li><span className="font-medium text-foreground">Sovereign Partners</span>, Private and public corporates having demonstrated ambition to transform the value chains in which they operate, to the best sustainable practices</li>
                          <li><span className="font-medium text-foreground">Circle Members</span>, Individuals sharing same values, allies that are willing to support the Sociis strategic ambition and journey</li>
                          <li><span className="font-medium text-foreground">Trusted Advisors</span>, Functional contributors & originators</li>
                          <li><span className="font-medium text-foreground">Trusted Companies</span>, Behavioural outcome clients</li>
                        </ol>
                      </div>
                    </div>

                    <div>
                      <h3 className="font-sans text-lg text-foreground font-medium mb-4">2.4 The 2030 Mandate</h3>
                      <div className="space-y-4 text-body text-muted-foreground">
                        <p>By 2030 we aim to:</p>
                        <ul className="space-y-2 pl-6 list-disc">
                          <li>Raise consciousness of 1 billion people to possibly trigger ethically a change in mindset that will drive behavioural change at scale, to enable 9 billion individuals living well and with dignity within the regenerative capabilities of the Planet</li>
                          <li>Make behaviour the missing B in ESG</li>
                          <li>Establish SociisGroup as the Sovereign Behavioural Institution</li>
                          <li>Make BEE™ the behavioural interface layer for AI</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 3. Institutional Architecture */}
                <div>
                  <h2 className="font-sans text-xl text-foreground font-medium mb-6">3. Institutional Architecture</h2>
                  <p className="text-body text-muted-foreground mb-6">SociisGroup is organized with 3 layers: The Ethical Council, The SociisGroup itself, The Allies.</p>

                  <div className="space-y-8">
                    <div>
                      <h3 className="font-sans text-lg text-foreground font-medium mb-4">3.1 Ethical Council (above)</h3>
                      <p className="text-body text-muted-foreground">The Ethical Council is composed of a set of individuals from private or public corporates, national or supranational organisations, serving as an independent body with full authority on the ethical and behavioural integrity of SociisGroup and the long-term trust.</p>
                    </div>

                    <div>
                      <h3 className="font-sans text-lg text-foreground font-medium mb-4">3.2 SociisGroup (The Institution)</h3>
                      <div className="space-y-4 text-body text-muted-foreground">
                        <p>The Institution consists in five permanent divisions:</p>
                        <ol className="space-y-2 pl-6 list-decimal">
                          <li><span className="font-medium text-foreground">Impact™</span>, Mindset shift triggers behavioural change (SBS/BEE)</li>
                          <li><span className="font-medium text-foreground">House™</span>, Behavioural literacy, reflection, and mindset shift environment</li>
                          <li><span className="font-medium text-foreground">Experiences™</span>, Behavioural proof environments</li>
                          <li><span className="font-medium text-foreground">Culture™</span>, Artistic & symbolic ignition</li>
                          <li><span className="font-medium text-foreground">Access™</span>, Proximity & participation</li>
                        </ol>
                      </div>
                    </div>

                    <div>
                      <h3 className="font-sans text-lg text-foreground font-medium mb-4">3.3 Sociis (The Allies)</h3>
                      <p className="text-body text-muted-foreground">These are the human beings that share SociisGroup common values and seek individually and collectively to trigger mindset and behavioural shift towards a world where we live all well in dignity within the finite resources of planet Earth.</p>
                    </div>

                    <div>
                      <h3 className="font-sans text-lg text-foreground font-medium mb-4">3.4 The 3 Pillars Reinforce Each Other</h3>
                      <div className="space-y-4 text-body text-muted-foreground">
                        <p>Not only every action of SociisGroup is rooted in Sustainability, Hospitality, and Humanity, these domains reinforce each other.</p>
                        <p>Humanity ensures we build on the reality of the unseen, the homeless, and the most vulnerable among us. Hospitality and iconic experiences draw influencers and media attention to enable impact at the scale that is necessary to trigger a behavioural change: 1 billion individuals.</p>
                        <p>Sustainability and ethical core values ensure our work is future-proofed, and the standard for leadership, culture, and conscience are raised at every level.</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 4. The Three Domains */}
                <div>
                  <h2 className="font-sans text-xl text-foreground font-medium mb-6">4. The Three Domains</h2>
                  <div className="space-y-4 text-body text-muted-foreground">
                    <p>SociisGroup multiplies its capability for impact at scale by leveraging three domains, culture moves faster than governance.</p>
                    <ol className="space-y-2 pl-6 list-decimal">
                      <li><span className="font-medium text-foreground">Hospitality</span>, Behavioural environments & dignity</li>
                      <li><span className="font-medium text-foreground">Humanity</span>, Ethics, identity, empathy, vulnerability, humans at the center</li>
                      <li><span className="font-medium text-foreground">Sustainability</span>, Behaviour is the missing B in ESG</li>
                    </ol>
                  </div>
                </div>

                {/* 5. Sociis Impact */}
                <div>
                  <h2 className="font-sans text-xl text-foreground font-medium mb-6">5. Sociis Impact™ — The North Star</h2>
                  <div className="space-y-4 text-body text-muted-foreground mb-6">
                    <p>Impact at scale is the raison-d'être of SociisGroup.</p>
                    <p>Its mandate is to:</p>
                    <ul className="space-y-2 pl-6 list-disc">
                      <li>Identify triggers for mindset shifts, which enable behaviour change (SBS)</li>
                      <li>BEE, the interface and app that helps individuals ethically explore inner tensions to trigger mindset shift</li>
                      <li>Deploy behaviour (Sovereigns + Enterprises)</li>
                      <li>Govern behavioural content (policy + AI alignment)</li>
                      <li>Scientifically legitimise behaviour (academic + cultural)</li>
                    </ul>
                  </div>

                  <div className="space-y-8">
                    <div>
                      <h3 className="font-sans text-lg text-foreground font-medium mb-4">5.1 SBS™ — Sustainable Behavioural Standard</h3>
                      <div className="space-y-4 text-body text-muted-foreground">
                        <p>SBS™ (Sustainable Behavioural Standard) is a behavioural framework developed by SociisGroup with the explicit ambition to evolve into a recognised global standard over time.</p>
                        <p>Its transition from framework to standard requires multi-year adoption, sovereign engagement, institutional validation, and lived proof across organisations and cultures.</p>
                        <p>SBS is therefore designed as a progressive standardisation roadmap, not a fixed doctrine.</p>
                        <p>SBS defines the ethical and behavioural reference frame for conscious decision-making across individual, organisational, and institutional contexts.</p>
                      </div>
                    </div>

                    <div>
                      <h3 className="font-sans text-lg text-foreground font-medium mb-4">5.2 BEE™ — Behavioural Engine of Ethics</h3>
                      <div className="space-y-4 text-body text-muted-foreground">
                        <p>BEE™ (Behavioural Engine of Ethics) is the behavioural interface layer that makes SBS tangible in daily decision-making.</p>
                        <p>BEE is not a measurement, compliance, or scoring tool.</p>
                        <p>It is a conversational, AI-assisted interface designed to surface inner tensions, contradictions, and decision conflicts that block alignment with the SBS framework.</p>
                        <p>By making these tensions visible, BEE enables mindset shifts that precede behavioural change.</p>
                        <p>Measurement observes what has already happened. BEE intervenes before behaviour is formed.</p>
                        <p>It:</p>
                        <ul className="space-y-2 pl-6 list-disc">
                          <li>Is a conversational AI-assisted App</li>
                          <li>Works on mobile phones (voice and typing)</li>
                          <li>Helps to make better choices</li>
                          <li>Ethical and not judgmental</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Download */}
              <div className="pt-8 border-t border-border">
                <a
                  href="/charter.pdf"
                  download="SociisGroup_Institutional_Charter.pdf"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background font-sans text-base tracking-wide hover:bg-foreground/90 transition-colors"
                >
                  Download Institutional Charter
                </a>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </PageTransition>
  );
};

export default Charter;
