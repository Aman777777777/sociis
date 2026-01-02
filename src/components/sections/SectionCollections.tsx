import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";
import charityVideo from "@/assets/charity-video.mp4";

const SectionCollections = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    const video = videoRef.current;
    const section = sectionRef.current;
    if (!video || !section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Start playback muted (allowed by browsers), then attempt to enable sound.
            video.muted = true;
            video
              .play()
              .then(() => {
                video.muted = false;
                setIsMuted(false);
              })
              .catch(() => {});
          } else {
            video.pause();
            video.muted = true;
            setIsMuted(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section id="collections" ref={sectionRef} className="py-32">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-sans font-light text-3xl text-foreground tracking-brand mb-10">
            Sociis Collections™
          </h2>

          <p className="font-accent text-2xl text-foreground italic mb-10">
            Culture remembers what spreadsheets forget.
          </p>

          {/* Let There Be Light Video */}
          <div className="relative mb-12 rounded-2xl overflow-hidden">
            <video
              ref={videoRef}
              src={charityVideo}
              muted={isMuted}
              loop
              playsInline
              className="w-full aspect-video object-cover rounded-2xl"
            />
            <button
              onClick={toggleMute}
              className="absolute bottom-4 right-4 flex items-center gap-2 px-4 py-2 bg-background/80 backdrop-blur-sm rounded-full text-foreground text-sm font-medium transition-all hover:bg-background/90"
            >
              {isMuted ? (
                <>
                  <VolumeX className="w-4 h-4" />
                  <span>Sound On</span>
                </>
              ) : (
                <>
                  <Volume2 className="w-4 h-4" />
                  <span>Sound Off</span>
                </>
              )}
            </button>
          </div>

          <div className="space-y-6 mb-10">
            <p className="text-body text-muted-foreground">
              <span className="text-foreground font-medium">Let There Be Light™</span> — a cultural framework translating values into lived behaviour, amplified with Under One Sky and aligned collaborators.
            </p>
            <p className="text-body text-muted-foreground">
              <span className="text-foreground font-medium">The LIME Book</span> — The Balance Between Life and Time — launched on the Orient Express.
            </p>
            <p className="text-body text-muted-foreground">
              <span className="text-foreground font-medium">Objects, apparel and collaborations</span> —
              quiet but powerful reminders of who you chose to be.
            </p>
          </div>

          <p className="text-body text-foreground">
            Sociis Collections™ makes behaviour tangible.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SectionCollections;
