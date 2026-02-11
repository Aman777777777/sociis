import { useEffect, useRef, useState, useCallback, memo } from "react";
import { Volume2, VolumeX } from "lucide-react";
import charityVideo from "@/assets/charity-video.mp4";
import { useMobilePerformance } from "@/hooks/use-mobile-performance";

const SectionCulture = memo(() => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [isInView, setIsInView] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const { isMobile, shouldReduceAnimations } = useMobilePerformance();

  const handleIntersection = useCallback((entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      setIsInView(entry.isIntersecting);
    });
  }, []);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(handleIntersection, { 
      threshold: 0.2,
      rootMargin: "50px"
    });

    observer.observe(section);
    return () => observer.disconnect();
  }, [handleIntersection]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || videoError) return;

    const attemptPlay = async () => {
      if (isInView) {
        try {
          video.muted = true;
          await video.play();
          setVideoLoaded(true);
        } catch (error) {
          console.log("Autoplay blocked, waiting for user interaction");
        }
      } else {
        video.pause();
      }
    };

    attemptPlay();
  }, [isInView, videoError]);

  const toggleMute = useCallback(() => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  }, [isMuted]);

  const handleVideoError = useCallback(() => {
    setVideoError(true);
    console.log("Video failed to load");
  }, []);

  const handleVideoLoaded = useCallback(() => {
    setVideoLoaded(true);
  }, []);

  return (
    <section id="culture" ref={sectionRef} className="py-5 sm:py-10">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-4xl">
          <h2 className="font-sans font-light text-3xl sm:text-4xl text-foreground tracking-tight mb-6">
            Sociis Culture™
          </h2>
          <div className="w-24 h-px bg-gradient-to-r from-accent to-transparent mb-10"></div>

          {/* Video Container */}
          <div className="relative mb-12 rounded-2xl overflow-hidden bg-muted">
            {!videoError ? (
              <>
                {!videoLoaded && (
                  <div className="absolute inset-0 flex items-center justify-center bg-muted">
                    <div className="w-8 h-8 border-2 border-accent border-t-transparent rounded-full animate-spin" />
                  </div>
                )}
                
                <video
                  ref={videoRef}
                  src={charityVideo}
                  muted={isMuted}
                  loop
                  playsInline
                  preload="auto"
                  className={`w-full aspect-video object-cover rounded-2xl transition-opacity duration-300 ${
                    videoLoaded ? "opacity-100" : "opacity-0"
                  }`}
                  onCanPlay={handleVideoLoaded}
                  onError={handleVideoError}
                />
                
                {videoLoaded && (
                  <button
                    onClick={toggleMute}
                    className="absolute bottom-4 right-4 flex items-center gap-2 px-4 py-2 bg-background/80 backdrop-blur-sm rounded-full text-foreground text-sm font-medium transition-all hover:bg-background/90"
                    aria-label={isMuted ? "Turn sound on" : "Turn sound off"}
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
                )}
              </>
            ) : (
              <div className="w-full aspect-video bg-muted flex items-center justify-center rounded-2xl">
                <p className="text-muted-foreground text-sm">Video unavailable</p>
              </div>
            )}
          </div>

          <div className={`space-y-6 mb-10 ${shouldReduceAnimations ? '' : 'animate-fade-in'}`}>
            <p className="text-body text-muted-foreground">
              <span className="text-foreground font-medium">Let There Be Light</span>
            </p>
            <p className="text-body text-muted-foreground">
              <span className="text-foreground font-medium">The LIME Book</span>
            </p>
            <p className="text-body text-muted-foreground">
              <span className="text-foreground font-medium">Objects and collaborations</span>
            </p>
          </div>

          <p className="text-body text-foreground">
            Sociis Culture makes behavioural standards tangible through cultural production.
          </p>
        </div>
      </div>
    </section>
  );
});

SectionCulture.displayName = "SectionCulture";

export default SectionCulture;
