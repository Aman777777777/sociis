interface SociisSymbolProps {
  size?: number;
  className?: string;
  faint?: boolean;
}

const SociisSymbol = ({ size = 40, className = "", faint = false }: SociisSymbolProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Outer circle */}
      <circle
        cx="50"
        cy="50"
        r="45"
        stroke="currentColor"
        strokeWidth={faint ? "1" : "1.5"}
        fill="none"
        opacity={faint ? "0.3" : "1"}
      />
      {/* Two vertical lines - II - representing 1 | 1 */}
      <line
        x1="40"
        y1="30"
        x2="40"
        y2="70"
        stroke="currentColor"
        strokeWidth={faint ? "1.5" : "2"}
        opacity={faint ? "0.3" : "1"}
      />
      <line
        x1="60"
        y1="30"
        x2="60"
        y2="70"
        stroke="currentColor"
        strokeWidth={faint ? "1.5" : "2"}
        opacity={faint ? "0.3" : "1"}
      />
    </svg>
  );
};

export default SociisSymbol;
