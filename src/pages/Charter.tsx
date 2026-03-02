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
                          <li>SBS™ — Sustainable Behavioural Standard</li>
                          <li>BEE™ — Behavioural Engine of Ethics (SaaS), impact at scale</li>
                          <li>Sociis Experiences™ — The 22 / The 64 / The 300</li>
                          <li>Sociis Culture™ — Apparel, art, film, Let There Be Light™</li>
                          <li>Sociis House™ — Behavioural literacy, reflection & mindset shift environment</li>
                          <li>Sociis Access™ — Curated proximity architecture</li>
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
                          <li><span className="font-medium text-foreground">Sovereign Partners</span> — Private and public corporates having demonstrated ambition to transform the value chains in which they operate, to the best sustainable practices</li>
                          <li><span className="font-medium text-foreground">Circle Members</span> — Individuals sharing same values, allies that are willing to support the Sociis strategic ambition and journey</li>
                          <li><span className="font-medium text-foreground">Trusted Advisors</span> — Functional contributors & originators</li>
                          <li><span className="font-medium text-foreground">Trusted Companies</span> — Behavioural outcome clients</li>
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
                  <div className="space-y-4 text-body text-muted-foreground mb-6">
                    <p>SociisGroup is organized with 3 layers:</p>
                    <ul className="space-y-2 pl-6 list-disc">
                      <li>The Ethical Council</li>
                      <li>The SociisGroup itself</li>
                      <li>The Allies</li>
                    </ul>
                  </div>
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
                          <li><span className="font-medium text-foreground">Impact™</span> — Mindset shift triggers behavioural change (SBS/BEE)</li>
                          <li><span className="font-medium text-foreground">House™</span> — Behavioural literacy, reflection, and mindset shift environment</li>
                          <li><span className="font-medium text-foreground">Experiences™</span> — Behavioural proof environments</li>
                          <li><span className="font-medium text-foreground">Culture™</span> — Artistic & symbolic ignition</li>
                          <li><span className="font-medium text-foreground">Access™</span> — Proximity & participation</li>
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
                    <p>SociisGroup multiplies its capability for impact at scale by leveraging three domains — Culture moves faster than governance.</p>
                    <ol className="space-y-2 pl-6 list-decimal">
                      <li><span className="font-medium text-foreground">Hospitality</span> — Behavioural environments & dignity</li>
                      <li><span className="font-medium text-foreground">Humanity</span> — Ethics, identity, empathy, vulnerability - humans at the center</li>
                      <li><span className="font-medium text-foreground">Sustainability</span> — Behaviour is the missing B in ESG</li>
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

                {/* 6. Sociis Experiences */}
                <div>
                  <h2 className="font-sans text-xl text-foreground font-medium mb-6">6. Sociis Experiences™ — Proof</h2>
                  <p className="text-body text-muted-foreground mb-6">Experiences put mindset shifts and subsequent behavioural changes in action. Three formats exist:</p>
                  <div className="space-y-8">
                    <div>
                      <h3 className="font-sans text-lg text-foreground font-medium mb-4">6.1 The 22 — Sovereign Lunch</h3>
                      <div className="space-y-4 text-body text-muted-foreground">
                        <ul className="space-y-2 pl-6 list-disc">
                          <li>22 people</li>
                          <li>1 table</li>
                          <li>The Sociis Trust Rule — Ethical Consent Standard
                            <ul className="space-y-1 pl-6 mt-2 list-disc text-muted-foreground/80">
                              <li>Learning and narratives may travel. Personal disclosures do not.</li>
                              <li>Sharing is permitted only with respect, consent, and ethical intent.</li>
                              <li>This rule applies to all formats, on-site and online, before, during, and after the experience.</li>
                            </ul>
                          </li>
                          <li>Learn and share with key decision makers</li>
                          <li>Update on progress</li>
                          <li>Circle can be invited with additional curation</li>
                        </ul>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-sans text-lg text-foreground font-medium mb-4">6.2 The 64 — Gala / Gathering</h3>
                      <div className="space-y-4 text-body text-muted-foreground">
                        <p>Two modes:</p>
                        <ul className="space-y-2 pl-6 list-disc">
                          <li>Gala = hospitality + cultural ignition (e.g. Corinthia)</li>
                          <li>Gathering = behavioural working dinner</li>
                        </ul>
                        <p>Used for:</p>
                        <ul className="space-y-2 pl-6 list-disc">
                          <li>Socialize the SociisGroup vision and ambition</li>
                          <li>Cultural ignition</li>
                          <li>Reputation and visibility</li>
                          <li>Draw media attention</li>
                          <li>Develop content</li>
                        </ul>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-sans text-lg text-foreground font-medium mb-4">6.3 The 300 — Immersive Cultural Experience</h3>
                      <div className="space-y-4 text-body text-muted-foreground">
                        <p>Example: Shape Tomorrow Today™ / Love Tomorrow</p>
                        <p>Used for:</p>
                        <ul className="space-y-2 pl-6 list-disc">
                          <li>Socialize the SociisGroup vision and ambition</li>
                          <li>Narrative ignition</li>
                          <li>Emotional coherence</li>
                          <li>Media attention</li>
                          <li>Impact at scale</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 7. Sociis Culture */}
                <div>
                  <h2 className="font-sans text-xl text-foreground font-medium mb-6">7. Sociis Culture™ — The Carrier</h2>
                  <div className="space-y-4 text-body text-muted-foreground">
                    <p>Culture moves faster than governance and is the main force to reach out to one billion individuals. It ensures standards leave theory and enter identity.</p>
                    <p>Culture includes:</p>
                    <ul className="space-y-2 pl-6 list-disc">
                      <li>Apparel (not merchandising; symbolic & dignified)</li>
                      <li>Film & photography</li>
                      <li>Let There Be Light™ (song + framework)</li>
                      <li>Artistic collaborations</li>
                      <li>Scenography & spatial storytelling</li>
                    </ul>
                    <p className="italic">Culture makes behaviour desirable, not mandatory.</p>
                  </div>
                </div>

                {/* 8. Sociis House */}
                <div>
                  <h2 className="font-sans text-xl text-foreground font-medium mb-6">8. Sociis House™ — Literacy & Mindshift</h2>
                  <div className="space-y-4 text-body text-muted-foreground">
                    <p>House is the learning and reflection environment of the Institution, a safe space for allies, where they:</p>
                    <ul className="space-y-2 pl-6 list-disc">
                      <li>Learn and share on behavioural and Institution literacy</li>
                      <li>Self-healing</li>
                      <li>Share personal stories</li>
                      <li>Engage with allies and like-minded</li>
                    </ul>
                    <p>Formats:</p>
                    <ul className="space-y-2 pl-6 list-disc">
                      <li>In-person and remote salons</li>
                      <li>Digital sessions</li>
                      <li>Deep rooms</li>
                      <li>Pre/post reflection</li>
                      <li>Interdisciplinary briefings</li>
                    </ul>
                    <p className="italic">House is open to public learners, not just Access.</p>
                  </div>
                </div>

                {/* 9. Sociis Access */}
                <div>
                  <h2 className="font-sans text-xl text-foreground font-medium mb-6">9. Sociis Access™ — Proximity & Participation</h2>
                  <p className="text-body text-muted-foreground mb-6">Access is a safe and curated place designed for communities of specific members. Three populations:</p>
                  <div className="space-y-8">
                    <div>
                      <h3 className="font-sans text-lg text-foreground font-medium mb-4">9.1 Circle Members — Identity Proximity</h3>
                      <div className="space-y-4 text-body text-muted-foreground">
                        <p>Circle Members:</p>
                        <ul className="space-y-2 pl-6 list-disc">
                          <li>Operate at high stakes</li>
                          <li>Value behaviour over optics</li>
                          <li>Steward environments</li>
                          <li>Support cultural ignition</li>
                          <li>Contribute to adoption</li>
                          <li>€15K annual access</li>
                        </ul>
                        <p className="italic">They do not join to sell, pitch, or hunt.</p>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-sans text-lg text-foreground font-medium mb-4">9.2 Trusted Advisors — Functional Contribution</h3>
                      <div className="space-y-4 text-body text-muted-foreground">
                        <p>Advisors:</p>
                        <ul className="space-y-2 pl-6 list-disc">
                          <li>Originate Circle/Companies</li>
                          <li>Open sovereign doors</li>
                          <li>Bring expertise</li>
                          <li>Support deployment</li>
                        </ul>
                        <p>Compensation logic:</p>
                        <ul className="space-y-2 pl-6 list-disc">
                          <li>€2.5K annual access</li>
                          <li>10% net originated</li>
                          <li>No commissions on Sovereigns</li>
                        </ul>
                        <p className="italic">They earn by contributing, not consuming.</p>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-sans text-lg text-foreground font-medium mb-4">9.3 Trusted Companies — Behavioural Clients</h3>
                      <p className="text-body text-muted-foreground">Companies that purchase services on SBS/BEE transformation programs. They are clients — not members.</p>
                    </div>
                  </div>
                </div>

                {/* 10. The LIME Code */}
                <div>
                  <h2 className="font-sans text-xl text-foreground font-medium mb-6">10. The LIME Code™ — Behavioural Compass</h2>
                  <div className="space-y-4 text-body text-muted-foreground">
                    <p>LIME = LIfe + tiME — and everything in between</p>
                    <p>Eight principles organised into Inner Stance & Outward Conduct.</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 my-6">
                      <div>
                        <p className="font-medium text-foreground mb-3">Inner Stance</p>
                        <ol className="space-y-2 pl-6 list-decimal">
                          <li>Clarity</li>
                          <li>Presence</li>
                          <li>Remembrance</li>
                          <li>Integrity</li>
                        </ol>
                      </div>
                      <div>
                        <p className="font-medium text-foreground mb-3">Outward Conduct</p>
                        <ol className="space-y-2 pl-6 list-decimal" start={5}>
                          <li>Courage</li>
                          <li>Restraint</li>
                          <li>Discernment</li>
                          <li>Generosity</li>
                        </ol>
                      </div>
                    </div>
                    <p>LIME informs:</p>
                    <ul className="space-y-2 pl-6 list-disc">
                      <li>SBS indicators</li>
                      <li>BEE logic</li>
                      <li>House reflections</li>
                      <li>Access curation</li>
                      <li>Culture aesthetics</li>
                    </ul>
                  </div>
                </div>

                {/* 11. Pricing Framework */}
                <div>
                  <h2 className="font-sans text-xl text-foreground font-medium mb-6">11. Pricing Framework (2026)</h2>
                  <div className="space-y-8">
                    <div>
                      <h3 className="font-sans text-lg text-foreground font-medium mb-4">11.1 Circle</h3>
                      <div className="space-y-4 text-body text-muted-foreground">
                        <p>Standard Circle: €15K/year</p>
                        <p>Includes:</p>
                        <ul className="space-y-2 pl-6 list-disc">
                          <li>1 seat at The 64 Gala</li>
                          <li>1 seat at The 300 Immersive Experience</li>
                          <li>Access to Sociis House™</li>
                        </ul>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-sans text-lg text-foreground font-medium mb-4">11.2 Advisors</h3>
                      <ul className="space-y-2 pl-6 list-disc text-body text-muted-foreground">
                        <li>€2.5K annual</li>
                        <li>10% commission on revenue generated from SociisHouse</li>
                        <li>No commissions on Sovereigns</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-sans text-lg text-foreground font-medium mb-4">11.3 Companies</h3>
                      <p className="text-body text-muted-foreground">Specific contract to be agreed case by case</p>
                    </div>
                    <div>
                      <h3 className="font-sans text-lg text-foreground font-medium mb-4">11.4 Experiences (Public Baseline)</h3>
                      <ul className="space-y-2 pl-6 list-disc text-body text-muted-foreground">
                        <li>The 300 — €850 excl. VAT per seat</li>
                        <li>The 64 Gala — €2,500 excl. VAT per seat</li>
                        <li>The 64 Gathering — €2,500 excl. VAT per seat (working format)</li>
                        <li>The 22 — no public pricing (sovereign-use only)</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-sans text-lg text-foreground font-medium mb-4">11.5 The 48-Hour Experience (Optional Premium Layer)</h3>
                      <div className="space-y-4 text-body text-muted-foreground">
                        <p>The 48-Hour Experience is a curated arc across The 64 and The 300, designed as a continuous high-touch experience rather than two separate events.</p>
                        <p>Public pricing: €3,950 excl. VAT</p>
                        <p>The 48-Hour Experience includes:</p>
                        <ul className="space-y-2 pl-6 list-disc">
                          <li>Priority placement across both experiences</li>
                          <li>Concierge continuity across the full 48 hours</li>
                          <li>A curated inner-room moment outside the main formats</li>
                          <li>A numbered artefact as a symbolic memory anchor</li>
                          <li>Limited availability, priority curation applies</li>
                        </ul>
                        <p className="italic">This is a premium experience layer, not a bundle of individual seats.</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 12. Glossary */}
                <div>
                  <h2 className="font-sans text-xl text-foreground font-medium mb-6">12. Glossary (Alphabetical)</h2>
                  <div className="space-y-4 text-body text-muted-foreground">
                    <dl className="space-y-4">
                      <div><dt className="font-medium text-foreground">Access</dt><dd>Governance layer that controls proximity to SociisGroup. Not networking, not selling. Ensures alignment, integrity, and non-dilution.</dd></div>
                      <div><dt className="font-medium text-foreground">Advisor (Trusted Advisor)</dt><dd>Functional expert serving the Institution. Helps originate Companies and Sovereigns, contributes expertise. Not a "member."</dd></div>
                      <div><dt className="font-medium text-foreground">Adoption</dt><dd>Process where behaviour becomes normalized across individuals or institutions through House and Impact.</dd></div>
                      <div><dt className="font-medium text-foreground">Alignment</dt><dd>When behaviour matches stated values and institutional expectations. Required for proximity.</dd></div>
                      <div><dt className="font-medium text-foreground">BEE — Behavioural Evidence Engine</dt><dd>Interface designed for individuals to identify inner tensions, which might trigger a mindset shift and subsequently possibly adopt more sustainable and dignified behaviours.</dd></div>
                      <div><dt className="font-medium text-foreground">Behavioural Vacuum</dt><dd>Condition where values exist but standards do not. Results in institutional fragility, mistrust, and performative ESG.</dd></div>
                      <div><dt className="font-medium text-foreground">Circle (Circle Members)</dt><dd>Curated individuals offered behavioural proximity. Selected for identity, alignment, and contribution.</dd></div>
                      <div><dt className="font-medium text-foreground">Company (Trusted Company)</dt><dd>Institutional client adopting SBS/BEE for culture, governance, reporting, compliance, or ethics.</dd></div>
                      <div><dt className="font-medium text-foreground">Contextual Return</dt><dd>Return generated through access to relevant environments where identity and behaviour matter (22/64/300).</dd></div>
                      <div><dt className="font-medium text-foreground">Culture / Sociis Collections™</dt><dd>Division responsible for symbols, narrative, apparel, installations, and cultural ignition.</dd></div>
                      <div><dt className="font-medium text-foreground">Cultural Return</dt><dd>Return generated through meaning, identity, narrative, and symbolic association. Not financial.</dd></div>
                      <div><dt className="font-medium text-foreground">Deployment</dt><dd>Integration of SBS/BEE into companies or sovereigns. Managed by Impact.</dd></div>
                      <div><dt className="font-medium text-foreground">Discernment</dt><dd>One of the LIME Code principles: clear perception before action; resisting binary simplification.</dd></div>
                      <div><dt className="font-medium text-foreground">Experiences / Sociis Experiences™</dt><dd>Proof environments where behaviour becomes visible. (22/64/300).</dd></div>
                      <div><dt className="font-medium text-foreground">Extraction Behaviour</dt><dd>Using proximity to sell, pitch, or farm relationships. Violates Access governance.</dd></div>
                      <div><dt className="font-medium text-foreground">Governance</dt><dd>Rules, standards, and behavioural expectations that ensure institutional integrity and continuity.</dd></div>
                      <div><dt className="font-medium text-foreground">House / Sociis House™</dt><dd>Behavioural adoption and literacy engine. Delivers lenses, psychology, AI ethics, and behavioural education.</dd></div>
                      <div><dt className="font-medium text-foreground">Identity Return</dt><dd>Return generated by becoming part of a story that reinforces identity and meaning. Non-transactional.</dd></div>
                      <div><dt className="font-medium text-foreground">Impact / Sociis Impact™</dt><dd>Division owning SBS/BEE, governance, deployment, and sovereign legitimacy.</dd></div>
                      <div><dt className="font-medium text-foreground">Institution</dt><dd>A sovereign entity with governance, continuity, legitimacy, and standards. Not a community or network.</dd></div>
                      <div><dt className="font-medium text-foreground">Institutional Return</dt><dd>Return generated through standards, credibility, legitimacy, sovereign context, and long-term trust.</dd></div>
                      <div><dt className="font-medium text-foreground">Legitimacy (Sovereign Legitimacy)</dt><dd>Credibility recognized by governments, institutions, corporates, and academia. Comes from standards and governance, not hype.</dd></div>
                      <div><dt className="font-medium text-foreground">LIME Code™</dt><dd>Eight behavioural principles across "Inner Stance" and "Outward Conduct": Clarity, Presence, Remembrance, Integrity, Courage, Restraint, Discernment, Generosity.</dd></div>
                      <div><dt className="font-medium text-foreground">Membrane Enforcement</dt><dd>Mechanism protecting the institution by filtering misaligned individuals and behaviours quietly and decisively.</dd></div>
                      <div><dt className="font-medium text-foreground">Persona</dt><dd>Public mask or performance driven by optics. Opposite of stewardship; increases fragility.</dd></div>
                      <div><dt className="font-medium text-foreground">Proof Environment</dt><dd>Structured environment (22/64/300) where behaviour becomes visible to self and others.</dd></div>
                      <div><dt className="font-medium text-foreground">Proximity</dt><dd>Contextual access to people and environments based on alignment. Not networking, not deal flow.</dd></div>
                      <div><dt className="font-medium text-foreground">Proximity Abuse</dt><dd>Using access for extraction, pitching, name-dropping, or optics. Violates membrane.</dd></div>
                      <div><dt className="font-medium text-foreground">Relational Return</dt><dd>Return generated by long-term high-trust relationships. Not networking, not transactions.</dd></div>
                      <div><dt className="font-medium text-foreground">Restraint</dt><dd>LIME principle: knowing when not to act, speak, post, or retaliate.</dd></div>
                      <div><dt className="font-medium text-foreground">SBS — Sustainable Behavioural Standard™</dt><dd>SBS is the system that supports individual choices to eventually adopt more sustainable and dignified behaviours.</dd></div>
                      <div><dt className="font-medium text-foreground">Signal</dt><dd>What behaviour communicates without speaking. Integrity amplifies signal; ego distorts signal.</dd></div>
                      <div><dt className="font-medium text-foreground">Sociis</dt><dd>The people inside the institution, the allies and participants who engage with, learn, and progressively embody the behavioural standard in lived practice over time. They are not members of a club.</dd></div>
                      <div><dt className="font-medium text-foreground">SociisGroup™</dt><dd>The sovereign behavioural institution and legal entity responsible for the development of the behavioural framework (SBS™), the behavioural interface (BEE™), institutional governance, and deployment across culture, business, and sovereign environments.</dd></div>
                      <div><dt className="font-medium text-foreground">Sovereign (Sovereign Partner)</dt><dd>Institutional actors above Access (ministries, sovereign funds, universities, multilateral bodies). Deploy SBS/BEE at system scale.</dd></div>
                      <div><dt className="font-medium text-foreground">Stewardship</dt><dd>Behaviour grounded in responsibility for people, purpose, and continuity. Required for sovereign trust.</dd></div>
                      <div><dt className="font-medium text-foreground">The 22</dt><dd>Sovereign proof environment at one table. Behaviour, incentives, and alignment visible in real time.</dd></div>
                      <div><dt className="font-medium text-foreground">The 64</dt><dd>Curated cultural and institutional environment. Generates cultural and relational ignition.</dd></div>
                      <div><dt className="font-medium text-foreground">The 300</dt><dd>Immersive behavioural culture environment. Youth, culture, media, philanthropy intersect.</dd></div>
                      <div><dt className="font-medium text-foreground">Youth Ignition</dt><dd>Cultural adoption through symbols, media, and identity. Driven by Collections and Experiences.</dd></div>
                      <div><dt className="font-medium text-foreground">2030 Horizon</dt><dd>Timeline for sovereign adoption of behavioural standards. Aligns with ESG regulation, AI governance, and institutional cycles.</dd></div>
                    </dl>
                  </div>
                </div>

                {/* Canonical Reference Note */}
                <div className="border-t border-border pt-8">
                  <p className="text-body text-muted-foreground italic mb-6">Canonical Reference Note:</p>
                  <p className="text-body text-muted-foreground mb-4">This document is the institutional reference for SociisGroup. Any future commercial updates (pricing, packaging, offers) must be reflected here before external communication.</p>
                  <div className="space-y-3 text-sm text-muted-foreground/70">
                    <p>[1] Planetary boundaries define a scientific framework identifying nine global processes essential for maintaining Earth's stability, within which humanity can safely operate. Seven of these nine boundaries—climate change, biosphere integrity, land-system change, freshwater change, biogeochemical flows, novel entities, and ocean acidification—are now considered transgressed, signaling high risk of irreversible environmental shifts.</p>
                    <p>[2] The Greenhouse Gas Protocol is the most widely used framework that set the standards to measure and manage emissions.</p>
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
