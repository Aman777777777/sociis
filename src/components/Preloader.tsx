import { useEffect, useState, memo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SociisSymbol from "./SociisSymbol";

interface PreloaderProps {
  onComplete?: () => void;
}

const Preloader = memo(({ onComplete }: PreloaderProps) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Shorter timeout for better perceived performance
    const timer = setTimeout(() => {
      setIsVisible(false);
      onComplete?.();
    }, 1800);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] bg-background flex items-center justify-center"
        >
          <div className="flex flex-col items-center gap-8">
            {/* Sociis Symbol - no animation on preloader for faster load */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <SociisSymbol size={100} />
            </motion.div>

            {/* Text */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="flex flex-col items-center gap-3"
            >
              <span className="font-sans text-xs tracking-[0.3em] text-muted-foreground uppercase">
                SOCIIS
              </span>
              
              {/* Simplified loading bar */}
              <div className="h-[1px] bg-accent/30 overflow-hidden" style={{ width: 60 }}>
                <motion.div
                  initial={{ x: "-100%" }}
                  animate={{ x: "100%" }}
                  transition={{ duration: 1, ease: "easeInOut", repeat: 1 }}
                  className="h-full w-full bg-accent"
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
});

Preloader.displayName = "Preloader";

export default Preloader;
