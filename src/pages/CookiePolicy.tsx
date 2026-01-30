import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";

const CookiePolicy = () => {
  return (
    <PageTransition>
      <main className="min-h-screen bg-background">
        <Header />
        <div className="pt-32 pb-20">
          <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
            <h1 className="font-serif text-4xl sm:text-5xl text-foreground mb-8">
              Cookie Policy
            </h1>
            <p className="text-muted-foreground mb-8">
              Last updated: January 2026
            </p>

            <div className="prose prose-lg max-w-none text-foreground">
              <section className="mb-12">
                <h2 className="font-serif text-2xl text-foreground mb-4">1. What Are Cookies</h2>
                <p className="text-muted-foreground mb-4">
                  Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and provide information to the owners of the site.
                </p>
                <p className="text-muted-foreground mb-4">
                  SociisGroup™ — Benefit Corporation, Brussels, Belgium ("we", "us", or "our") uses cookies on this website to ensure the proper functioning of the site and to enhance your browsing experience.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="font-serif text-2xl text-foreground mb-4">2. Types of Cookies We Use</h2>
                <h3 className="font-serif text-xl text-foreground mb-3">Essential Cookies</h3>
                <p className="text-muted-foreground mb-4">
                  These cookies are necessary for the website to function properly. They enable basic functions like page navigation and access to secure areas of the website. The website cannot function properly without these cookies.
                </p>
                <p className="text-muted-foreground mb-4">
                  Essential cookies we use include:
                </p>
                <ul className="list-disc list-inside text-muted-foreground mb-4 space-y-2">
                  <li><strong>Cookie Consent:</strong> Remembers your cookie preferences</li>
                  <li><strong>Session Management:</strong> Maintains your session state across pages</li>
                </ul>
              </section>

              <section className="mb-12">
                <h2 className="font-serif text-2xl text-foreground mb-4">3. Cookies We Do Not Use</h2>
                <p className="text-muted-foreground mb-4">
                  We respect your privacy and have made a deliberate choice not to use:
                </p>
                <ul className="list-disc list-inside text-muted-foreground mb-4 space-y-2">
                  <li><strong>Analytics Cookies:</strong> We do not use Google Analytics or similar tracking tools</li>
                  <li><strong>Advertising Cookies:</strong> We do not use Meta Pixels, LinkedIn Insights, or any advertising trackers</li>
                  <li><strong>Third-Party Tracking:</strong> We do not share your data with third-party advertisers</li>
                </ul>
                <p className="text-muted-foreground mb-4">
                  This website is designed to be tracker-free, aligning with our commitment to privacy and institutional integrity.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="font-serif text-2xl text-foreground mb-4">4. How to Control Cookies</h2>
                <p className="text-muted-foreground mb-4">
                  You can control and/or delete cookies as you wish. You can delete all cookies that are already on your computer and you can set most browsers to prevent them from being placed.
                </p>
                <p className="text-muted-foreground mb-4">
                  Most web browsers allow some control of most cookies through the browser settings. To find out more about cookies, including how to see what cookies have been set, visit <a href="https://www.allaboutcookies.org" target="_blank" rel="noopener noreferrer" className="text-foreground underline hover:no-underline">www.allaboutcookies.org</a>.
                </p>
                <h3 className="font-serif text-xl text-foreground mb-3">Browser Settings</h3>
                <p className="text-muted-foreground mb-4">
                  You can set your browser to refuse all or some browser cookies, or to alert you when websites set or access cookies. If you disable or refuse cookies, please note that some parts of this website may become inaccessible or not function properly.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="font-serif text-2xl text-foreground mb-4">5. Your Consent</h2>
                <p className="text-muted-foreground mb-4">
                  When you first visit our website, you will be presented with a cookie banner asking for your consent to use essential cookies. You can choose to accept or decline.
                </p>
                <p className="text-muted-foreground mb-4">
                  If you decline, we will only store a preference cookie to remember your choice and will not place any other cookies on your device.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="font-serif text-2xl text-foreground mb-4">6. Changes to This Cookie Policy</h2>
                <p className="text-muted-foreground mb-4">
                  We may update our Cookie Policy from time to time. We will notify you of any changes by posting the new Cookie Policy on this page and updating the "Last updated" date at the top of this policy.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="font-serif text-2xl text-foreground mb-4">7. Contact Us</h2>
                <p className="text-muted-foreground mb-4">
                  If you have any questions about our use of cookies, please contact us at:
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

export default CookiePolicy;
