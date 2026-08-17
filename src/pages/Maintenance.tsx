import { motion } from "framer-motion";
import { ShieldCheck, Clock } from "lucide-react";
import SociisSymbol from "@/components/SociisSymbol";

export default function Maintenance() {
  return (
    <div className="relative min-h-screen bg-[#0F1624] text-[#F4F0E8] overflow-hidden flex flex-col justify-between select-none">
      {/* Background radial gold/navy gradient glow */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          background: "radial-gradient(circle at 50% 45%, hsl(38 58% 39% / 0.15) 0%, transparent 60%)"
        }}
      />

      {/* Grid background texture overlay */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.03] mix-blend-overlay"
        style={{
          backgroundImage: `radial-gradient(circle, #F4F0E8 1px, transparent 1px)`,
          backgroundSize: "24px 24px"
        }}
      />

      {/* Floating subtle gold particle elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-[#9F7D2A]/30 blur-[1px]"
            style={{
              width: Math.random() * 6 + 4 + "px",
              height: Math.random() * 6 + 4 + "px",
              left: Math.random() * 100 + "%",
              top: Math.random() * 100 + "%",
            }}
            animate={{
              y: [0, -40, 0],
              x: [0, Math.random() * 20 - 10, 0],
              opacity: [0.2, 0.7, 0.2],
            }}
            transition={{
              duration: 8 + Math.random() * 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      {/* Header */}
      <header className="w-full px-6 py-6 sm:px-12 flex justify-between items-center z-10">
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-2"
        >
          <span className="font-display text-lg tracking-[0.1em] uppercase font-light">
            SociisGroup<span className="text-[#9F7D2A]">™</span>
          </span>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F4F0E8]/5 border border-[#F4F0E8]/10 text-xs tracking-wider uppercase text-[#9F7D2A]"
        >
          <Clock className="w-3.5 h-3.5 animate-pulse" />
          <span>Scheduled Update</span>
        </motion.div>
      </header>

      {/* Main Content Area */}
      <main className="flex-grow flex flex-col items-center justify-center px-6 py-12 text-center z-10 max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-8"
        >
          <SociisSymbol animated gold size={110} className="mx-auto" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl text-[#F4F0E8] font-light mb-6 tracking-wide leading-tight">
            Refining the <br className="sm:hidden" />
            <span className="italic text-[#9F7D2A]">Sovereign Platform</span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="font-sans text-sm sm:text-base text-[#F4F0E8]/70 max-w-lg mx-auto mb-10 leading-relaxed"
        >
          We are currently upgrading our digital infrastructure to enhance stability and security for our leadership circle. Normal operations will resume shortly.
        </motion.p>

      </main>

      {/* Footer Info */}
      <footer className="w-full px-6 py-8 sm:px-12 text-center border-t border-[#F4F0E8]/5 bg-black/10 z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-between max-w-6xl mx-auto gap-4 text-xs font-sans text-[#F4F0E8]/40"
        >
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-1.5">
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-[#9F7D2A]" />
              Secure Sovereign Infrastructure
            </span>
          </div>
          <div>
            <span>For inquiries, contact </span>
            <a 
              href="mailto:office@sociisgroup.com" 
              className="text-[#9F7D2A] hover:underline transition-all hover:text-[#b59135]"
            >
              office@sociisgroup.com
            </a>
          </div>
          <div>
            <span>© {new Date().getFullYear()} SociisGroup™ Benefit Corporation</span>
          </div>
        </motion.div>
      </footer>
    </div>
  );
}
