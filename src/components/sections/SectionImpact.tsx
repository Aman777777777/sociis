import { memo } from "react";
import impactImage from "@/assets/impact-contemplation.jpg";
import { useMobilePerformance } from "@/hooks/use-mobile-performance";

const SectionImpact = memo(() => {
  const { shouldReduceAnimations } = useMobilePerformance();

  const animateClass = (delay: string) => 
    shouldReduceAnimations ? '' : `opacity-0 animate-[fade-in_0.8s_ease-out_${delay}_forwards]`;

  return (
    <section id="impact" className="py-32 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center max-w-6xl mx-auto">
          {/* Content */}
          <div>
            <p className={`text-xs sm:text-sm tracking-[0.3em] text-muted-foreground uppercase mb-3 sm:mb-4 ${animateClass('forwards')}`}>
              What We Create
            </p>
            <p className={`font-accent text-2xl sm:text-3xl md:text-4xl text-foreground italic mb-4 ${animateClass('0.1s')}`}>
              Impact is the outcome of behavioural infrastructure deployed at scale.
            </p>
            <p className={`text-body-lg text-foreground mb-6 sm:mb-10 ${animateClass('0.15s')}`}>
              Surgically-built behavioural infrastructure that makes Impact at Scale real and accountable.
            </p>

            <div className="space-y-6 mb-10">
              <div className={`group ${animateClass('0.2s')}`}>
                <div className="flex items-start gap-4">
                  <span className="text-accent text-base mt-1.5">01</span>
                  <div>
                    <p className="text-foreground font-medium mb-1">Impact on people</p>
                    <p className="text-body text-muted-foreground">
                      How leaders behave when nobody is watching.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className={`group ${animateClass('0.3s')}`}>
                <div className="flex items-start gap-4">
                  <span className="text-accent text-base mt-1.5">02</span>
                  <div>
                    <p className="text-foreground font-medium mb-1">Impact on institutions</p>
                    <p className="text-body text-muted-foreground">
                      How decisions are made, not just reported.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className={`group ${animateClass('0.4s')}`}>
                <div className="flex items-start gap-4">
                  <span className="text-accent text-base mt-1.5">03</span>
                  <div>
                    <p className="text-foreground font-medium mb-1">Impact on culture</p>
                    <p className="text-body text-muted-foreground">
                      What is admired, copied and remembered.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className={`relative pl-6 border-l-2 border-accent ${animateClass('0.5s')}`}>
              <p className="text-body-lg text-foreground mb-2">
                SBS™ — the Sustainable Behavioural Standard
              </p>
              <p className="text-body text-muted-foreground">
                is the framework that makes this visible, measurable and repeatable.
              </p>
            </div>
          </div>

          {/* Image */}
          <div className={`relative group ${animateClass('0.3s')}`}>
            <div className="relative overflow-hidden rounded-2xl">
              <img
                src={impactImage}
                alt="Leadership and contemplation"
                loading="lazy"
                decoding="async"
                className={`w-full aspect-[4/5] object-cover grayscale rounded-2xl ${
                  shouldReduceAnimations ? '' : 'group-hover:grayscale-[50%] transition-all duration-700'
                }`}
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-background/20"></div>
            </div>
            {/* Decorative elements - hidden on mobile for performance */}
            {!shouldReduceAnimations && (
              <>
                <div className="absolute -bottom-4 -left-4 w-32 h-32 border-l-2 border-b-2 border-accent/20"></div>
                <div className="absolute top-8 -right-4 w-8 h-px bg-accent"></div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
});

SectionImpact.displayName = "SectionImpact";

export default SectionImpact;
