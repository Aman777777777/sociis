import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";

const TermsOfService = () => {
  return (
    <PageTransition>
      <main className="min-h-screen bg-background">
        <Header />
        <div className="pt-32 pb-20">
          <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
            <h1 className="font-serif text-4xl sm:text-5xl text-foreground mb-8">
              Terms of Service
            </h1>
            <p className="text-muted-foreground mb-8">
              Last updated: January 2026
            </p>

            <div className="prose prose-lg max-w-none text-foreground">
              <section className="mb-12">
                <h2 className="font-serif text-2xl text-foreground mb-4">1. Agreement to Terms</h2>
                <p className="text-muted-foreground mb-4">
                  These Terms of Service constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you") and SociisGroup™ — Benefit Corporation, Brussels, Belgium ("we", "us", or "our"), concerning your access to and use of the website as well as any other media form, media channel, mobile website, or mobile application related, linked, or otherwise connected thereto.
                </p>
                <p className="text-muted-foreground mb-4">
                  You agree that by accessing the Site, you have read, understood, and agree to be bound by all of these Terms of Service. If you do not agree with all of these Terms of Service, then you are expressly prohibited from using the Site and you must discontinue use immediately.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="font-serif text-2xl text-foreground mb-4">2. Intellectual Property Rights</h2>
                <p className="text-muted-foreground mb-4">
                  Unless otherwise indicated, the Site is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site (collectively, the "Content") and the trademarks, service marks, and logos contained therein (the "Marks") are owned or controlled by us or licensed to us, and are protected by copyright and trademark laws and various other intellectual property rights.
                </p>
                <p className="text-muted-foreground mb-4">
                  The Content and the Marks are provided on the Site "AS IS" for your information and personal use only. Except as expressly provided in these Terms of Service, no part of the Site and no Content or Marks may be copied, reproduced, aggregated, republished, uploaded, posted, publicly displayed, encoded, translated, transmitted, distributed, sold, licensed, or otherwise exploited for any commercial purpose whatsoever, without our express prior written permission.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="font-serif text-2xl text-foreground mb-4">3. User Representations</h2>
                <p className="text-muted-foreground mb-4">
                  By using the Site, you represent and warrant that:
                </p>
                <ul className="list-disc list-inside text-muted-foreground mb-4 space-y-2">
                  <li>You have the legal capacity and you agree to comply with these Terms of Service</li>
                  <li>You are not a minor in the jurisdiction in which you reside</li>
                  <li>You will not access the Site through automated or non-human means, whether through a bot, script, or otherwise</li>
                  <li>You will not use the Site for any illegal or unauthorized purpose</li>
                  <li>Your use of the Site will not violate any applicable law or regulation</li>
                </ul>
              </section>

              <section className="mb-12">
                <h2 className="font-serif text-2xl text-foreground mb-4">4. Prohibited Activities</h2>
                <p className="text-muted-foreground mb-4">
                  You may not access or use the Site for any purpose other than that for which we make the Site available. The Site may not be used in connection with any commercial endeavors except those that are specifically endorsed or approved by us.
                </p>
                <p className="text-muted-foreground mb-4">
                  As a user of the Site, you agree not to:
                </p>
                <ul className="list-disc list-inside text-muted-foreground mb-4 space-y-2">
                  <li>Systematically retrieve data or other content from the Site to create or compile, directly or indirectly, a collection, compilation, database, or directory without written permission from us</li>
                  <li>Make any unauthorized use of the Site, including collecting usernames and/or email addresses of users by electronic or other means</li>
                  <li>Use the Site to advertise or offer to sell goods and services</li>
                  <li>Circumvent, disable, or otherwise interfere with security-related features of the Site</li>
                  <li>Engage in unauthorized framing of or linking to the Site</li>
                  <li>Trick, defraud, or mislead us and other users</li>
                  <li>Interfere with, disrupt, or create an undue burden on the Site or the networks or services connected to the Site</li>
                </ul>
              </section>

              <section className="mb-12">
                <h2 className="font-serif text-2xl text-foreground mb-4">5. Limitation of Liability</h2>
                <p className="text-muted-foreground mb-4">
                  In no event will we or our directors, employees, or agents be liable to you or any third party for any direct, indirect, consequential, exemplary, incidental, special, or punitive damages, including lost profit, lost revenue, loss of data, or other damages arising from your use of the Site, even if we have been advised of the possibility of such damages.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="font-serif text-2xl text-foreground mb-4">6. Indemnification</h2>
                <p className="text-muted-foreground mb-4">
                  You agree to defend, indemnify, and hold us harmless, including our subsidiaries, affiliates, and all of our respective officers, agents, partners, and employees, from and against any loss, damage, liability, claim, or demand, including reasonable attorneys' fees and expenses, made by any third party due to or arising out of your use of the Site.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="font-serif text-2xl text-foreground mb-4">7. Governing Law</h2>
                <p className="text-muted-foreground mb-4">
                  These Terms shall be governed by and defined following the laws of Belgium. SociisGroup™ — Benefit Corporation and yourself irrevocably consent that the courts of Belgium shall have exclusive jurisdiction to resolve any dispute which may arise in connection with these Terms.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="font-serif text-2xl text-foreground mb-4">8. Changes to Terms</h2>
                <p className="text-muted-foreground mb-4">
                  We reserve the right, in our sole discretion, to make changes or modifications to these Terms of Service at any time and for any reason. We will alert you about any changes by updating the "Last updated" date of these Terms of Service, and you waive any right to receive specific notice of each such change.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="font-serif text-2xl text-foreground mb-4">9. Contact Us</h2>
                <p className="text-muted-foreground mb-4">
                  In order to resolve a complaint regarding the Site or to receive further information regarding use of the Site, please contact us at:
                </p>
                <p className="text-muted-foreground">
                  SociisGroup™ — Benefit Corporation
                  <br />
                  Brussels, Belgium
                  <br />
                  info@sociisgroup.com
                </p>
              </section>
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </PageTransition>
  );
};

export default TermsOfService;
