import { memo, useRef, useEffect } from "react";
import charityVideo from "@/assets/charity-video.mp4";

const SectionCulture = memo(() => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="culture" className="py-20 sm:py-28">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-xs sm:text-sm tracking-[0.3em] text-muted-foreground uppercase mb-3 sm:mb-4">
            Cultural & Experiential Layer
          </p>
          <h2 className="font-sans font-light text-3xl sm:text-4xl text-foreground tracking-tight mb-6">
            Sociis Culture™
          </h2>
          <div className="w-24 h-px bg-gradient-to-r from-accent to-transparent mb-12"></div>

          {/* Block 1: Cultural Distribution Platforms */}
          <div className="mb-12">
            <h3 className="font-sans text-lg text-foreground font-medium mb-4">
              Cultural Distribution Platforms
            </h3>
            <p className="text-body text-muted-foreground mb-6">
              SociisGroup collaborates with selected cultural platforms to distribute the Sustainable Behavioural Standard (SBS™) through immersive and large-scale formats.
            </p>
            <ul className="space-y-2">
              <li className="text-body text-muted-foreground flex items-start gap-3">
                <span className="text-accent mt-0.5">·</span>
                Love Tomorrow
              </li>
              <li className="text-body text-muted-foreground flex items-start gap-3">
                <span className="text-accent mt-0.5">·</span>
                Tomorrowland
              </li>
              <li className="text-body text-muted-foreground flex items-start gap-3">
                <span className="text-accent mt-0.5">·</span>
                Podeo
              </li>
            </ul>
          </div>

          {/* Block 2: Philanthropic & Cultural Support */}
          <div className="pt-10 border-t border-border/50">
            <h3 className="font-sans text-lg text-foreground font-medium mb-4">
              Philanthropic & Cultural Support
            </h3>
            <p className="text-body text-muted-foreground mb-6">
              SociisGroup supports selected philanthropic initiatives aligned with its mission.
            </p>
            <ul className="space-y-2">
              <li className="text-body text-muted-foreground flex items-start gap-3">
                <span className="text-accent mt-0.5">·</span>
                Under One Sky
              </li>
              <li className="text-body text-muted-foreground flex items-start gap-3">
                <span className="text-accent mt-0.5">·</span>
                The Diana Award
              </li>
              <li className="text-body text-muted-foreground flex items-start gap-3">
                <span className="text-accent mt-0.5">·</span>
                We Do It Together
              </li>
              <li className="text-body text-muted-foreground flex items-start gap-3">
                <span className="text-accent mt-0.5">·</span>
                Global Gift Foundation
              </li>
            </ul>
          </div>

          {/* Let There Be Light */}
          <div className="pt-10 mt-12 border-t border-border/50">
            <h3 className="font-sans text-lg text-foreground font-medium mb-2">
              Let There Be Light™
            </h3>
            <p className="text-body text-muted-foreground mb-8">
              A cultural chapter of SociisGroup™ expressing dignity and behavioural leadership through music.
            </p>
            <div className="rounded-2xl overflow-hidden">
              <video
                ref={videoRef}
                src={charityVideo}
                muted
                playsInline
                controls
                preload="metadata"
                className="w-full"
              />
            </div>
          </div>

          <p className="text-body text-foreground mt-12">
            Sociis Culture makes the Sustainable Behavioural Standard (SBS™) tangible through cultural production.
          </p>
        </div>
      </div>
    </section>
  );
});

SectionCulture.displayName = "SectionCulture";

export default SectionCulture;
