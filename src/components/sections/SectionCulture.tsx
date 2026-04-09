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
          video.play().catch(() => { });
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
            Culture
          </p>
          <h2 className="font-sans font-light text-3xl sm:text-4xl text-foreground tracking-tight mb-6">
            Sociis Culture™
          </h2>
          <div className="w-24 h-px bg-gradient-to-r from-accent to-transparent mb-12"></div>

          <p className="text-body-lg text-foreground mb-4">
            Culture changes people. Rules only contain them.
          </p>
          <p className="text-body text-muted-foreground mb-12">
            Culture distributes behaviour at scale.
          </p>

          {/* Sociis Rooms */}
          <div className="mb-12">
            <h3 className="font-sans text-lg text-foreground font-medium mb-4">
              Sociis Rooms™
            </h3>
            <p className="text-body text-muted-foreground mb-2">
              Sociis Rooms are controlled environments where behaviour becomes visible.
            </p>
            <p className="text-body text-muted-foreground italic mb-6">
              Not events.<br />
              Behavioural proof.
            </p>
            <p className="text-body text-muted-foreground mb-6">
              These environments generate behavioural proof that feeds back into the system.
            </p>
            <ul className="space-y-2">
              <li className="text-body text-muted-foreground flex items-start gap-3">
                <span className="text-accent mt-0.5">·</span>
                The 22 — one table, high trust
              </li>
              <li className="text-body text-muted-foreground flex items-start gap-3">
                <span className="text-accent mt-0.5">·</span>
                The 64 — curated institutional room
              </li>
              <li className="text-body text-muted-foreground flex items-start gap-3">
                <span className="text-accent mt-0.5">·</span>
                The 300 — immersive environment
              </li>
            </ul>
          </div>

          {/* Sociis House */}
          <div className="pt-10 border-t border-border/50 mb-12">
            <h3 className="font-sans text-lg text-foreground font-medium mb-4">
              Sociis House™
            </h3>
            <p className="text-body text-muted-foreground mb-2">
              Sociis House™ is where Sociis stay connected.
            </p>
            <p className="text-body text-muted-foreground mb-2">
              It is the environment where conversations, signals and shared narratives shape behaviour over time.
            </p>
            <p className="text-body text-muted-foreground italic">
              Not education.<br />
              Behaviour in motion.
            </p>
          </div>

          {/* Cultural Distribution */}
          <div className="pt-10 border-t border-border/50">
            <h3 className="font-sans text-lg text-foreground font-medium mb-4">
              Cultural Distribution
            </h3>
            <ul className="space-y-2">
              <li className="text-body text-muted-foreground flex items-start gap-3">
                <span className="text-accent mt-0.5">·</span>
                Let There Be Light
              </li>
              <li className="text-body text-muted-foreground flex items-start gap-3">
                <span className="text-accent mt-0.5">·</span>
                Media
              </li>
              <li className="text-body text-muted-foreground flex items-start gap-3">
                <span className="text-accent mt-0.5">·</span>
                Cultural platforms
              </li>
            </ul>

            {/* Let There Be Light video */}
            <div className="mt-10 rounded-2xl overflow-hidden">
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
        </div>
      </div>
    </section>
  );
});

SectionCulture.displayName = "SectionCulture";

export default SectionCulture;
