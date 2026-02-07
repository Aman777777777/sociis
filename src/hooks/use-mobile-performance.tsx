import { useEffect, useState, useCallback } from "react";

// Detect if device is mobile and has performance constraints
export const useMobilePerformance = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isLowPowerMode, setIsLowPowerMode] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    // Check for mobile device
    const checkMobile = () => {
      const mobile = window.innerWidth < 768 || 
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
      setIsMobile(mobile);
    };

    // Check for reduced motion preference
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(motionQuery.matches);

    const handleMotionChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    // Check for low power/battery saver (heuristic)
    const checkLowPower = () => {
      // If device memory is low or hardware concurrency is low, treat as low power
      const nav = navigator as Navigator & { deviceMemory?: number };
      const lowMemory = nav.deviceMemory !== undefined && nav.deviceMemory < 4;
      const lowCores = navigator.hardwareConcurrency !== undefined && navigator.hardwareConcurrency < 4;
      setIsLowPowerMode(lowMemory || lowCores);
    };

    checkMobile();
    checkLowPower();

    window.addEventListener("resize", checkMobile);
    motionQuery.addEventListener("change", handleMotionChange);

    return () => {
      window.removeEventListener("resize", checkMobile);
      motionQuery.removeEventListener("change", handleMotionChange);
    };
  }, []);

  // Should reduce animations?
  const shouldReduceAnimations = isMobile || prefersReducedMotion || isLowPowerMode;

  return {
    isMobile,
    isLowPowerMode,
    prefersReducedMotion,
    shouldReduceAnimations,
  };
};

// Custom hook for safe IntersectionObserver with cleanup
export const useSafeIntersectionObserver = (
  callback: (isIntersecting: boolean) => void,
  options?: IntersectionObserverInit
) => {
  const [ref, setRef] = useState<HTMLElement | null>(null);

  useEffect(() => {
    if (!ref) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          callback(entry.isIntersecting);
        });
      },
      { threshold: 0.3, ...options }
    );

    observer.observe(ref);

    return () => {
      observer.disconnect();
    };
  }, [ref, callback, options]);

  return setRef;
};

// Hook for lazy loading images
export const useLazyLoad = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  const handleLoad = useCallback(() => {
    setIsLoaded(true);
  }, []);

  const handleError = useCallback(() => {
    setHasError(true);
  }, []);

  return { isLoaded, hasError, handleLoad, handleError };
};
