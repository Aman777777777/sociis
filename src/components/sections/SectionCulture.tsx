import { memo } from "react";
import charityVideo from "@/assets/charity-video.mp4";

// Culture Scales Behaviour — charity video preserved
const SectionCulture = memo(() => {
  return (
    <section id="culture" className="py-24 sm:py-32 border-t border-border/40">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <h2 className="font-display font-light text-4xl sm:text-5xl text-foreground mb-8 leading-tight">
          Culture Scales Behaviour
        </h2>

        <div className="space-y-6 max-w-2xl mb-16">
          <p className="font-sans text-base sm:text-lg text-muted-foreground leading-relaxed">
            Culture is how SociisGroup reaches one billion individuals for higher sustainability standards.
            The Rooms gather hundreds. Culture reaches the orders of magnitude the Standard requires.
            It moves faster than governance and reaches further than boardrooms.
          </p>
          <p className="font-sans text-base sm:text-lg text-muted-foreground leading-relaxed">
            Most institutions use culture as marketing. SociisGroup holds every cultural object it produces
            to the LIME Code that governs the institution itself.
          </p>
        </div>

        {/* Charity video — preserved */}
        <div className="rounded-2xl overflow-hidden">
          <video
            src={charityVideo}
            autoPlay
            muted
            loop
            playsInline
            controls
            preload="auto"
            className="w-full"
          />
        </div>
      </div>
    </section>
  );
});

SectionCulture.displayName = "SectionCulture";

export default SectionCulture;
