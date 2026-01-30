import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";

const PrivacyPolicy = () => {
  return (
    <PageTransition>
      <main className="min-h-screen bg-background">
        <Header />
        <div className="pt-32 pb-20">
          <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
            <h1 className="font-serif text-4xl sm:text-5xl text-foreground mb-8">
              Privacy Policy
            </h1>
            <p className="text-muted-foreground mb-8">
              Last updated: January 2026
            </p>

            <div className="prose prose-lg max-w-none text-foreground">
              <section className="mb-12">
                <h2 className="font-serif text-2xl text-foreground mb-4">1. Introduction</h2>
                <p className="text-muted-foreground mb-4">
                  SociisGroup™ — Benefit Corporation, Brussels, Belgium ("we", "us", or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.
                </p>
                <p className="text-muted-foreground mb-4">
                  Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="font-serif text-2xl text-foreground mb-4">2. Information We Collect</h2>
                <p className="text-muted-foreground mb-4">
                  We may collect information about you in a variety of ways. The information we may collect on the Site includes:
                </p>
                <h3 className="font-serif text-xl text-foreground mb-3">Personal Data</h3>
                <p className="text-muted-foreground mb-4">
                  Personally identifiable information, such as your name, email address, and contact information that you voluntarily give to us when you contact us or express interest in obtaining information about us or our services.
                </p>
                <h3 className="font-serif text-xl text-foreground mb-3">Derivative Data</h3>
                <p className="text-muted-foreground mb-4">
                  Information our servers automatically collect when you access the Site, such as your IP address, your browser type, your operating system, your access times, and the pages you have viewed directly before and after accessing the Site.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="font-serif text-2xl text-foreground mb-4">3. Use of Your Information</h2>
                <p className="text-muted-foreground mb-4">
                  Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Site to:
                </p>
                <ul className="list-disc list-inside text-muted-foreground mb-4 space-y-2">
                  <li>Create and manage your account</li>
                  <li>Email you regarding your account or inquiry</li>
                  <li>Fulfill and manage any interactions with you</li>
                  <li>Increase the efficiency and operation of the Site</li>
                  <li>Monitor and analyze usage and trends to improve your experience with the Site</li>
                  <li>Notify you of updates to the Site</li>
                  <li>Respond to your inquiries and offer support</li>
                </ul>
              </section>

              <section className="mb-12">
                <h2 className="font-serif text-2xl text-foreground mb-4">4. Disclosure of Your Information</h2>
                <p className="text-muted-foreground mb-4">
                  We may share information we have collected about you in certain situations. Your information may be disclosed as follows:
                </p>
                <h3 className="font-serif text-xl text-foreground mb-3">By Law or to Protect Rights</h3>
                <p className="text-muted-foreground mb-4">
                  If we believe the release of information about you is necessary to respond to legal process, to investigate or remedy potential violations of our policies, or to protect the rights, property, and safety of others, we may share your information as permitted or required by any applicable law, rule, or regulation.
                </p>
                <h3 className="font-serif text-xl text-foreground mb-3">Third-Party Service Providers</h3>
                <p className="text-muted-foreground mb-4">
                  We may share your information with third parties that perform services for us or on our behalf, including data analysis, email delivery, hosting services, customer service, and marketing assistance.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="font-serif text-2xl text-foreground mb-4">5. Security of Your Information</h2>
                <p className="text-muted-foreground mb-4">
                  We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="font-serif text-2xl text-foreground mb-4">6. Policy for Children</h2>
                <p className="text-muted-foreground mb-4">
                  We do not knowingly solicit information from or market to children under the age of 13. If we learn that we have collected personal information from a child under age 13 without verification of parental consent, we will delete that information as quickly as possible.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="font-serif text-2xl text-foreground mb-4">7. Your Rights Under GDPR</h2>
                <p className="text-muted-foreground mb-4">
                  If you are a resident of the European Economic Area (EEA), you have certain data protection rights. SociisGroup™ aims to take reasonable steps to allow you to correct, amend, delete, or limit the use of your Personal Data.
                </p>
                <p className="text-muted-foreground mb-4">
                  You have the following rights:
                </p>
                <ul className="list-disc list-inside text-muted-foreground mb-4 space-y-2">
                  <li>The right to access, update, or delete the information we have on you</li>
                  <li>The right of rectification</li>
                  <li>The right to object</li>
                  <li>The right of restriction</li>
                  <li>The right to data portability</li>
                  <li>The right to withdraw consent</li>
                </ul>
              </section>

              <section className="mb-12">
                <h2 className="font-serif text-2xl text-foreground mb-4">8. Contact Us</h2>
                <p className="text-muted-foreground mb-4">
                  If you have questions or comments about this Privacy Policy, please contact us at:
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

export default PrivacyPolicy;
