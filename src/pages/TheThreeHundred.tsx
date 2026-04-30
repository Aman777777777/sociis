import { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import sociisLogo from "@/assets/sociisgroup-logo.png";

const TOTAL_SLIDES = 7;

/* ─── Slide Components ─── */

const SlideCover = () => (
  <div className="relative w-full h-full flex flex-col justify-end p-[6%] bg-[#0a0a0a]">
    <div
      className="absolute inset-0 bg-cover bg-center opacity-30"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1920&q=80')",
      }}
    />
    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/70 to-transparent" />
    <div className="relative z-10 max-w-[70%]">
      <img src={sociisLogo} alt="SociisGroup" className="h-8 mb-12 opacity-60 invert brightness-200" />
      <h1 className="font-sans text-[4.5rem] leading-[1.05] font-light text-white/95 tracking-[0.02em] mb-4">
        Shape Tomorrow Today
      </h1>
      <p className="font-sans text-[1.75rem] font-light text-white/60 tracking-[0.03em] mb-10">
        The 300 — Immersive Cultural Experience
      </p>
      <p className="font-sans text-[1.05rem] text-white/40 leading-relaxed max-w-[600px]">
        A private SociisGroup™ immersive experience for 300 curated leaders.
      </p>
    </div>
  </div>
);

const SlideWhatThisIs = () => (
  <div className="relative w-full h-full flex items-center bg-[#0c0c0c]">
    <div
      className="absolute inset-0 bg-cover bg-center opacity-15"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1506157786151-b8491531f063?w=1920&q=80')",
      }}
    />
    <div className="absolute inset-0 bg-gradient-to-r from-[#0c0c0c] via-[#0c0c0c]/80 to-[#0c0c0c]/60" />
    <div className="relative z-10 p-[6%] max-w-[65%]">
      <p className="font-sans text-[0.8rem] uppercase tracking-[0.25em] text-white/30 mb-8">What This Is</p>
      <p className="font-sans text-[1.35rem] font-light text-white/80 leading-[1.8] mb-8">
        Shape Tomorrow Today is SociisGroup's flagship cultural moment for 300 curated leaders, founders, creators, and operators.
      </p>
      <p className="font-sans text-[1.15rem] font-light text-white/55 leading-[1.85] mb-8">
        This is a two-and-a-half to three-hour private immersive experience taking place in a dedicated, confidential institutional setting.
      </p>
      <div className="border-l-2 border-white/15 pl-6 my-10">
        <p className="font-sans text-[1.1rem] text-white/70 leading-[1.8]">
          A SociisGroup™ private room within a global cultural moment.
        </p>
      </div>
      <p className="font-sans text-[0.8rem] text-white/25 mt-12">Belgium, July 2026.</p>
    </div>
  </div>
);

const SlideInsideTheRoom = () => (
  <div className="relative w-full h-full flex items-center bg-[#080808]">
    <div
      className="absolute right-0 top-0 w-[45%] h-full bg-cover bg-center opacity-20"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=1920&q=80')",
      }}
    />
    <div className="absolute inset-0 bg-gradient-to-r from-[#080808] via-[#080808]/90 to-transparent" />
    <div className="relative z-10 p-[6%] max-w-[58%]">
      <p className="font-sans text-[0.8rem] uppercase tracking-[0.25em] text-white/30 mb-8">What Happens Inside the Room</p>
      <p className="font-sans text-[1.2rem] font-light text-white/70 leading-[1.8] mb-8">
        Inside a curated, cinematic setting, participants experience:
      </p>
      <ul className="space-y-5 mb-10">
        {[
          "The cultural launch of SBS™ (Sociis Behavioural Standard)",
          "The public introduction of Sociis House™ as the behavioural learning and cultural distribution layer",
          "A guided immersion that makes one thing felt, not explained: behaviour is the missing link, culture moves faster than governance",
          "Curated moments of dialogue, reflection, and provocation",
        ].map((item, i) => (
          <li key={i} className="flex items-start gap-4">
            <span className="w-1.5 h-1.5 rounded-full bg-white/25 mt-2.5 shrink-0" />
            <span className="font-sans text-[1.05rem] font-light text-white/55 leading-[1.75]">{item}</span>
          </li>
        ))}
      </ul>
      <div className="border-t border-white/10 pt-8">
        <p className="font-sans text-[1rem] text-white/40 italic">This is not a conference.</p>
        <p className="font-sans text-[1.1rem] text-white/65 mt-1">
          This is behaviour entering culture through experience.
        </p>
      </div>
    </div>
  </div>
);

const SlideCulturalContext = () => (
  <div className="relative w-full h-full flex items-center bg-[#0a0a0a]">
    <div
      className="absolute inset-0 bg-cover bg-center opacity-20"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=1920&q=80')",
      }}
    />
    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/75 to-[#0a0a0a]/50" />
    <div className="relative z-10 p-[6%] max-w-[62%]">
      <p className="font-sans text-[0.8rem] uppercase tracking-[0.25em] text-white/30 mb-8">Cultural Context</p>
      <p className="font-sans text-[1.25rem] font-light text-white/75 leading-[1.8] mb-6">
        SociisGroup™ selects cultural environments where leaders, creators, and builders converge around the future of society.
      </p>
      <p className="font-sans text-[1.1rem] font-light text-white/50 leading-[1.85] mb-6">
        The 300 operates as a sovereign institutional experience within a broader cultural moment.
      </p>
      <p className="font-sans text-[1.1rem] font-light text-white/50 leading-[1.85] mb-12">
        Cultural gravity amplifies institutional conduct.
      </p>
      <div className="my-10">
        <p className="font-sans text-[1.6rem] font-light text-white/35 leading-[1.5]">
          The world gathers outside.
        </p>
        <p className="font-sans text-[1.6rem] font-light text-white/75 leading-[1.5]">
          300 step inside.
        </p>
      </div>
    </div>
  </div>
);

const SlideWhoThisIsFor = () => (
  <div className="relative w-full h-full flex items-center justify-center bg-[#0b0b0b]">
    <div className="relative z-10 text-center max-w-[55%]">
      <p className="font-sans text-[0.8rem] uppercase tracking-[0.25em] text-white/30 mb-10">Who This Is For</p>
      <p className="font-sans text-[1.4rem] font-light text-white/75 leading-[1.7] mb-12">
        For people who shape culture and systems by how they show up.
      </p>
      <ul className="space-y-4 mb-12 inline-block text-left">
        {[
          "Founders and operators",
          "Executives and decision-makers",
          "Investors and ecosystem builders",
          "Cultural leaders and creators",
        ].map((item, i) => (
          <li key={i} className="flex items-center gap-4">
            <span className="w-1 h-1 rounded-full bg-white/30 shrink-0" />
            <span className="font-sans text-[1.1rem] font-light text-white/50">{item}</span>
          </li>
        ))}
      </ul>
      <p className="font-sans text-[1.1rem] font-light text-white/45 leading-[1.8] max-w-[500px] mx-auto">
        For those who understand that sustainability, leadership, and trust are ultimately behavioural.
      </p>
    </div>
  </div>
);

const SlideWhatYouReceive = () => (
  <div className="relative w-full h-full flex items-center bg-[#0a0a0a]">
    <div className="relative z-10 p-[6%] w-full">
      <p className="font-sans text-[0.8rem] uppercase tracking-[0.25em] text-white/30 mb-10">What You Receive</p>
      <p className="font-sans text-[1.15rem] font-light text-white/60 mb-8">Your seat includes:</p>
      <ul className="space-y-5 mb-14 max-w-[65%]">
        {[
          "Access to The 300, Shape Tomorrow Today private SociisGroup™ experience",
          "Curated entry into the SociisGroup cultural ecosystem",
          "Priority positioning for future SociisGroup experiences",
        ].map((item, i) => (
          <li key={i} className="flex items-start gap-4">
            <span className="w-1.5 h-1.5 rounded-full bg-white/25 mt-2.5 shrink-0" />
            <span className="font-sans text-[1.05rem] font-light text-white/55 leading-[1.75]">{item}</span>
          </li>
        ))}
      </ul>
      <div className="border-t border-white/10 pt-8 flex items-end justify-between max-w-[80%]">
        <div>
          <p className="font-sans text-[0.8rem] uppercase tracking-[0.25em] text-white/30 mb-3">Practical</p>
          <p className="font-sans text-[1.1rem] text-white/65">July 23, 2026</p>
          <p className="font-sans text-[0.95rem] text-white/40 mt-1">Belgium</p>
        </div>
        <div className="text-right">
          <p className="font-sans text-[0.85rem] text-white/35 mt-1">By private confirmation</p>
        </div>
      </div>
    </div>
  </div>
);

const SlideClose = () => (
  <div className="relative w-full h-full flex flex-col items-center justify-center bg-[#080808]">
    <div
      className="absolute inset-0 opacity-10"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1920&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    />
    <div className="relative z-10 text-center max-w-[50%]">
      <p className="font-sans text-[1.15rem] font-light text-white/50 leading-[1.8] mb-10">
        This is an invitation to be present at the moment where:
      </p>
      <div className="space-y-2 mb-14">
        <p className="font-sans text-[1.5rem] font-light text-white/60">Behaviour enters culture.</p>
        <p className="font-sans text-[1.5rem] font-light text-white/70">Culture enters institutions.</p>
        <p className="font-sans text-[1.5rem] font-light text-white/85">And institutions begin to shift.</p>
      </div>
      <h2 className="font-sans text-[2.5rem] font-light text-white/90 tracking-[0.02em] mb-2">
        Shape Tomorrow Today.
      </h2>
      <p className="font-sans text-[1.3rem] font-light text-white/50">The 300.</p>
      <p className="font-sans text-[0.85rem] text-white/25 mt-16">
        <a href="mailto:info@sociisgroup.com" className="hover:text-white/40 transition-colors">
          info@sociisgroup.com
        </a>
      </p>
    </div>
  </div>
);

const SLIDES = [SlideCover, SlideWhatThisIs, SlideInsideTheRoom, SlideCulturalContext, SlideWhoThisIsFor, SlideWhatYouReceive, SlideClose];

/* ─── Deck Page ─── */

const TheThreeHundred = () => {
  const [current, setCurrent] = useState(0);

  const goTo = useCallback(
    (dir: 1 | -1) => setCurrent((c) => Math.max(0, Math.min(TOTAL_SLIDES - 1, c + dir))),
    []
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " ") {
        e.preventDefault();
        goTo(1);
      }
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        goTo(-1);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [goTo]);

  const SlideComponent = SLIDES[current];

  return (
    <div className="fixed inset-0 bg-black overflow-hidden select-none">
      {/* Slide */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <SlideComponent />
        </motion.div>
      </AnimatePresence>

      {/* Navigation controls */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-6 z-20">
        <button
          onClick={() => goTo(-1)}
          disabled={current === 0}
          className="text-white/20 hover:text-white/50 disabled:opacity-0 transition-all"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {/* Slide indicators */}
        <div className="flex gap-2">
          {Array.from({ length: TOTAL_SLIDES }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                i === current ? "bg-white/60 scale-125" : "bg-white/15 hover:bg-white/30"
              }`}
            />
          ))}
        </div>

        <button
          onClick={() => goTo(1)}
          disabled={current === TOTAL_SLIDES - 1}
          className="text-white/20 hover:text-white/50 disabled:opacity-0 transition-all"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Slide number */}
      <div className="absolute bottom-6 right-8 z-20">
        <span className="font-sans text-[0.7rem] text-white/20 tracking-[0.15em]">
          {String(current + 1).padStart(2, "0")} / {String(TOTAL_SLIDES).padStart(2, "0")}
        </span>
      </div>
    </div>
  );
};

export default TheThreeHundred;
