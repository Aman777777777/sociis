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

  // Stable callback for intersection observer
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

  // Handle video play/pause based on visibility
  useEffect(() => {
    const video = videoRef.current;
    if (!video || videoError) return;

    const playVideo = async () => {
      if (isInView && videoLoaded) {
        try {
          await video.play();
        } catch (error) {
          // Autoplay blocked - this is normal on mobile
          console.log("Autoplay blocked, waiting for user interaction");
        }
      } else {
        video.pause();
      }
    };

    playVideo();
  }, [isInView, videoLoaded, videoError]);

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
    <section id="culture" ref={sectionRef} className="py-32">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-4xl">
          <h2 className="font-sans font-light text-2xl sm:text-3xl text-foreground tracking-brand mb-8 sm:mb-10">
            Sociis Culture™
          </h2>

          {/* Video Container with Fallback */}
          <div className="relative mb-12 rounded-2xl overflow-hidden bg-muted">
            {!videoError ? (
              <>
                {/* Loading placeholder */}
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
                  preload={isMobile ? "metadata" : "auto"}
                  className={`w-full aspect-video object-cover rounded-2xl transition-opacity duration-300 ${
                    videoLoaded ? "opacity-100" : "opacity-0"
                  }`}
                  onLoadedData={handleVideoLoaded}
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
              /* Fallback when video fails */
              <div className="w-full aspect-video bg-muted flex items-center justify-center rounded-2xl">
                <p className="text-muted-foreground text-sm">Video unavailable</p>
              </div>
            )}
          </div>

          <div className={`space-y-4 sm:space-y-6 mb-8 sm:mb-10 ${shouldReduceAnimations ? '' : 'animate-fade-in'}`}>
            <p className="text-sm sm:text-base text-muted-foreground">
              <span className="text-foreground font-medium">Let There Be Light</span>
            </p>
            <p className="text-sm sm:text-base text-muted-foreground">
              <span className="text-foreground font-medium">The LIME Book</span>
            </p>
            <p className="text-sm sm:text-base text-muted-foreground">
              <span className="text-foreground font-medium">Objects and collaborations</span>
            </p>
          </div>

          <p className="text-sm sm:text-base text-foreground">
            Sociis Culture makes behaviour tangible.
          </p>
        </div>
      </div>
    </section>
  );
});

SectionCulture.displayName = "SectionCulture";

export default SectionCulture;
