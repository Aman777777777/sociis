import { memo } from "react";

interface SociisSymbolProps {
  size?: number;
  className?: string;
  faint?: boolean;
  gold?: boolean;
  animated?: boolean;
}

// Memoized component to prevent unnecessary re-renders
const SociisSymbol = memo(({ 
  size = 40, 
  className = "", 
  faint = false, 
  gold = false, 
  animated = false 
}: SociisSymbolProps) => {
  const strokeColor = gold ? "#B8860B" : "currentColor";
  
  // Check if user prefers reduced motion or is on mobile
  const prefersReducedMotion = typeof window !== 'undefined' && 
    window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
  
  // Disable animations if reduced motion is preferred
  const shouldAnimate = animated && !prefersReducedMotion;
  
  return (
    <svg
      width={size}
      height={size * 0.7}
      viewBox="0 0 200 140"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Only include animation styles if needed */}
      {shouldAnimate && (
        <style>
          {`
            @keyframes ellipse-drift-1 {
              0%, 100% { transform: rotate(-12deg) translateX(0); }
              50% { transform: rotate(-3deg) translateX(6px); }
            }
            @keyframes ellipse-drift-2 {
              0%, 100% { transform: rotate(8deg) translateY(0); }
              50% { transform: rotate(12deg) translateY(-6px); }
            }
            @keyframes ellipse-pulse {
              0%, 100% { opacity: 1; transform: scale(1); }
              50% { opacity: 0.7; transform: scale(0.98); }
            }
            .ellipse-1 { animation: ellipse-drift-1 5s ease-in-out infinite; transform-origin: center; }
            .ellipse-2 { animation: ellipse-drift-2 6s ease-in-out infinite; transform-origin: center; }
            .ellipse-main { animation: ellipse-pulse 4s ease-in-out infinite; transform-origin: center; }
          `}
        </style>
      )}
      
      {/* Main ellipse - organic hand-drawn style */}
      <ellipse
        cx="100"
        cy="70"
        rx="85"
        ry="50"
        stroke={strokeColor}
        strokeWidth={faint ? "1" : "1.5"}
        fill="none"
        opacity={faint ? "0.3" : "1"}
        className={shouldAnimate ? "ellipse-main" : ""}
      />
      
      {/* Secondary offset ellipse for organic feel - tilted slightly */}
      <g 
        className={shouldAnimate ? "ellipse-1" : ""} 
        style={{ 
          transformOrigin: '100px 70px', 
          transform: shouldAnimate ? undefined : 'rotate(-8deg)' 
        }}
      >
        <ellipse
          cx="100"
          cy="70"
          rx="90"
          ry="45"
          stroke={strokeColor}
          strokeWidth={faint ? "0.5" : "0.8"}
          fill="none"
          opacity={faint ? "0.15" : "0.4"}
          transform={shouldAnimate ? undefined : "rotate(-8 100 70)"}
        />
      </g>
      
      {/* Third offset ellipse - tilted other direction */}
      <g 
        className={shouldAnimate ? "ellipse-2" : ""} 
        style={{ 
          transformOrigin: '100px 70px', 
          transform: shouldAnimate ? undefined : 'rotate(5deg)' 
        }}
      >
        <ellipse
          cx="100"
          cy="70"
          rx="80"
          ry="48"
          stroke={strokeColor}
          strokeWidth={faint ? "0.5" : "0.8"}
          fill="none"
          opacity={faint ? "0.15" : "0.3"}
          transform={shouldAnimate ? undefined : "rotate(5 100 70)"}
        />
      </g>
      
      {/* Two vertical lines - II - representing 1 | 1 */}
      <line
        x1="90"
        y1="40"
        x2="90"
        y2="100"
        stroke={strokeColor}
        strokeWidth={faint ? "1.5" : "2"}
        opacity={faint ? "0.3" : "1"}
      />
      <line
        x1="110"
        y1="40"
        x2="110"
        y2="100"
        stroke={strokeColor}
        strokeWidth={faint ? "1.5" : "2"}
        opacity={faint ? "0.3" : "1"}
      />
    </svg>
  );
});

SociisSymbol.displayName = "SociisSymbol";

export default SociisSymbol;
