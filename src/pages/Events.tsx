import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import the64Hero from "@/assets/the-64-hero.png.asset.json";
import the300Hero from "@/assets/the-300-hero.jpg.asset.json";

const Events = () => {
  const events = [
    {
      title: "The 64",
      subtitle: "Founding Gathering",
      date: "22 & 23 July 2026",
      href: "/the64.html",
      image: the64Hero.url,
    },
    {
      title: "The 300",
      subtitle: "Shape Tomorrow Today™",
      date: "23 July 2026",
      href: "/the300.html",
      image: the300Hero.url,
    },
  ];

  return (
    <PageTransition>
      <Header />
      <main className="min-h-screen bg-background">
        <section className="pt-32 pb-20 sm:pb-28">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-3xl mb-16">
              <h1 className="font-sans font-light text-3xl sm:text-4xl text-foreground tracking-tight mb-6">
                Events
              </h1>
              <div className="w-24 h-px bg-gradient-to-r from-accent to-transparent mb-8" />
              <p className="text-body text-muted-foreground">
                Institutional gatherings convened by SociisGroup™.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {events.map((event) => (
                <a
                  key={event.title}
                  href={event.href}
                  className="group relative block aspect-square overflow-hidden bg-muted"
                >
                  <img
                    src={event.image}
                    alt={event.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10 transition-opacity duration-500 group-hover:from-black/90" />
                  <div className="relative h-full flex flex-col justify-end p-8 lg:p-10 text-white">
                    <p className="font-sans text-[10px] tracking-[0.28em] uppercase opacity-60 mb-2">
                      {event.date}
                    </p>
                    <p className="font-sans text-xs tracking-[0.28em] uppercase opacity-80 mb-3">
                      {event.subtitle}
                    </p>
                    <h2 className="font-display font-light text-4xl lg:text-5xl tracking-tight">
                      {event.title}
                    </h2>
                    <span className="mt-6 inline-flex items-center font-sans text-xs tracking-[0.18em] uppercase opacity-90 group-hover:opacity-100">
                      Enter
                      <span className="ml-3 h-px w-8 bg-current transition-all duration-500 group-hover:w-14" />
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </PageTransition>
  );
};

export default Events;
