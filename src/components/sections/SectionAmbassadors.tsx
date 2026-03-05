import { Link } from "react-router-dom";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import irisPhoto from "@/assets/team/iris-van-der-veken.jpg";

const ambassadors = [
  {
    name: "Iris van der Veken",
    slug: "iris-van-der-veken",
    label: "Ambassador",
    photo: irisPhoto as string | null,
    bio: "Iris Van der Veken is Executive Director and Secretary General of the Watch and Jewellery Initiative 2030, co-founded by Kering and Cartier and delegated by Richemont. She is also a member of the Inclusive Leadership Council of 100 Women @ Davos.\n\nWith a background in law, public affairs, and sustainability, Iris brings over 25 years of international experience across India, China, Africa, Thailand, and Sri Lanka. Her work spans the full value chain, including human rights due diligence, decent labour, environmental standards, and traceability, with a consistent focus on sustainability as a driver of long-term business resilience.\n\nA recognised coalition builder, she has played a key role in advancing gender equality within the industry through collaborations with UN Women, particularly in gender-responsive procurement. She also served as the first Chairwoman of UN Global Compact Belgium under the Ministry of Foreign Affairs.",
    statement: "Iris Van der Veken serves as an Ambassador of SociisGroup in her personal capacity.\n\nShe believes the world requires a form of leadership that is collaborative, inclusive, and grounded in humility, courage, and purpose. For her, this shift begins with rethinking how future generations are educated and how leadership itself is developed.",
  },
];

const SectionAmbassadors = () => {
  return (
    <section id="ambassadors" className="py-20 sm:py-28">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-4xl">
          <h2 className="font-sans font-light text-3xl sm:text-4xl text-foreground tracking-tight mb-6">
            Ambassadors
          </h2>
          <div className="w-24 h-px bg-gradient-to-r from-accent to-transparent mb-12"></div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
            {ambassadors.map((ambassador) => (
              <AmbassadorCard key={ambassador.slug} ambassador={ambassador} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const AmbassadorCard = ({
  ambassador,
}: {
  ambassador: (typeof ambassadors)[number];
}) => {
  const [showBio, setShowBio] = useState(false);

  return (
    <div className="block">
      <Link to={`/ambassadors/${ambassador.slug}`} className="group block">
        <div className="relative overflow-hidden rounded-2xl mb-5 bg-muted/30 aspect-[3/4] cursor-pointer">
          {ambassador.photo ? (
            <img
              src={ambassador.photo}
              alt={ambassador.name}
              className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-500"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-muted/20">
              <div className="w-24 h-24 rounded-full bg-muted/40 flex items-center justify-center">
                <span className="text-muted-foreground/50 text-xs tracking-widest uppercase">
                  Portrait
                </span>
              </div>
            </div>
          )}
        </div>
        <h3 className="font-sans text-lg text-foreground font-medium mb-1 group-hover:text-accent transition-colors duration-300">
          {ambassador.name}
        </h3>
      </Link>
      <p className="font-sans text-sm text-muted-foreground tracking-wide mb-4">
        {ambassador.label}
      </p>
      {ambassador.bio && (
        <>
          <button
            onClick={() => setShowBio(!showBio)}
            className="font-sans text-sm text-muted-foreground hover:text-foreground transition-colors tracking-wide inline-flex items-center gap-2"
          >
            {showBio ? "Hide bio" : "Read bio"}
            <span className={`transition-transform duration-300 ${showBio ? "rotate-180" : ""}`}>↓</span>
          </button>
          <AnimatePresence>
            {showBio && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="pt-4 font-sans text-sm text-muted-foreground/80 leading-relaxed space-y-3">
                  {ambassador.bio.split('\n\n').map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
                </div>
                {ambassador.statement && (
                  <div className="mt-6">
                    <p className="font-sans text-xs tracking-[0.2em] text-muted-foreground uppercase mb-3">Ambassador Statement</p>
                    <div className="font-sans text-sm text-muted-foreground/80 leading-relaxed space-y-3">
                      {ambassador.statement.split('\n\n').map((paragraph, i) => (
                        <p key={i}>{paragraph}</p>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </>
      )}
    </div>
  );
};
export default SectionAmbassadors;
