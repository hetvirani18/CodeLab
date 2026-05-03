import { motion, useInView } from "motion/react";
import { useRef } from "react";

function useScrollReveal(threshold = 0.2) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: threshold });
  return { ref, isInView };
}

// ── Floating code tag (decorative) ──
function FloatingTag({ children, className, delay, animate }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.5, ease: "easeOut" }}
      className={`absolute font-mono text-xs px-3 py-1.5 rounded-lg border
                  bg-base-200 border-base-content/10 text-base-content/40
                  pointer-events-none select-none hidden lg:block ${className}`}
    >
      {children}
    </motion.div>
  );
}

export default function CTA() {
  const { ref, isInView } = useScrollReveal(0.2);

  return (
    <section className="relative px-6 lg:px-16 py-28 bg-base-300 overflow-hidden">

      {/* ── Background glows ── */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-175 h-100 blur-[140px] pointer-events-none"
        style={{ background: "rgba(0,230,118,0.06)" }}
      />
      <div
        className="absolute top-0 right-0 w-75 h-75 blur-[100px] pointer-events-none"
        style={{ background: "rgba(96,165,250,0.04)" }}
      />

      {/* ── Grid pattern ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
          WebkitMaskImage:
            "radial-gradient(ellipse 70% 70% at 50% 50%, black 20%, transparent 100%)",
          maskImage:
            "radial-gradient(ellipse 70% 70% at 50% 50%, black 20%, transparent 100%)",
        }}
      />

      {/* ── Floating decorative code tags ── */}
      <FloatingTag className="top-12 left-[8%] rotate-[-4deg]" delay={0.8}>
        ✓ Accepted · 52ms
      </FloatingTag>
      <FloatingTag className="top-20 right-[10%] rotate-3" delay={1.0}>
        🔥 Day 47 streak
      </FloatingTag>
      <FloatingTag className="bottom-16 left-[6%] rotate-2" delay={1.1}>
        video solution
      </FloatingTag>
      <FloatingTag className="bottom-12 right-[8%] rotate-3" delay={0.9}>
        {"// O(n) · O(1) space"}
      </FloatingTag>

      {/* ── Main card ── */}
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative bg-base-200 border rounded-3xl px-8 py-14 lg:px-16 text-center overflow-hidden"
          style={{ borderColor: "rgba(0,230,118,0.18)" }}
        >
          {/* Inner top glow */}
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-100 h-0.5 rounded-full pointer-events-none"
            style={{ background: "linear-gradient(90deg, transparent, rgba(0,230,118,0.5), transparent)" }}
          />

          {/* Label */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="font-mono text-xs tracking-widest uppercase mb-5"
            style={{ color: "var(--green)" }}
          >
            // start today
          </motion.p>

          {/* Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.25, duration: 0.55 }}
            className="text-3xl lg:text-5xl font-bold leading-tight mb-5"
          >
            Ready to write{" "}
            <span style={{ color: "var(--green)" }}>better code?</span>
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.35, duration: 0.5 }}
            className="text-base-content/50 text-lg max-w-lg mx-auto mb-10 leading-relaxed"
          >
            Start solving problems and improve your coding skills. 
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.45, duration: 0.5 }}
            className="flex flex-wrap items-center justify-center gap-4 mb-14"
          >
            <motion.a
              href="/signup"
              whileHover={{ scale: 1.05, boxShadow: "0 0 28px rgba(0,230,118,0.4)" }}
              whileTap={{ scale: 0.97 }}
              className="btn btn-lg font-bold text-base-300 border-none px-8 bg-green-400"
            >
              Create free account →
            </motion.a>
            <motion.a
              href="/problemset"
              whileHover={{ scale: 1.05, background: "rgba(0,230,118,0.08)" }}
              whileTap={{ scale: 0.97 }}
              className="btn btn-lg btn-outline px-8"
              style={{ borderColor: "var(--green)", color: "var(--green)" }}
            >
              Browse problems
            </motion.a>
          </motion.div>

          {/* Divider */}
          <div className="w-full h-px bg-base-content/10 mb-10" />

          {/* Trust line */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.9 }}
            className="text-xs text-base-content/30 mt-8 font-mono"
          >
            Designed for focused problem solving
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}