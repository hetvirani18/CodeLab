import { motion, useInView } from "motion/react";
import { useRef } from "react";

// ── Reusable hook for scroll-triggered animations ──
function useScrollReveal(threshold = 0.15) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: threshold });
  return { ref, isInView };
}

// ── Feature data ──
const FEATURES = [
  {
    icon: "⚡",
    title: "Live Judge",
    description:
      "Run and submit code with instant feedback. Get precise verdicts — Accepted, Wrong Answer, or TLE — just like real coding platforms.",
    stat: "< 200ms",
    statLabel: "avg. runtime",
    accent: "green",
    code: `// Running solution...
// ✓ Accepted
// Runtime: 52ms`,
  },
  {
    icon: "🎥",
    title: "Video Solutions",
    description:
      "Stuck on a problem? Watch clear, structured video explanations created by admins — from intuition to optimal approach.",
    stat: "HD",
    statLabel: "step-by-step explainers",
    accent: "blue",
    code: `▶ Watch solution
Step 1: Understand pattern
Step 2: Optimize approach`,
  },
  {
    icon: "💻",
    title: "Clean Problem UI",
    description:
      "Minimal, distraction-free interface designed for focus. Read, code, and solve — all in one smooth workflow.",
    stat: "0 clutter",
    statLabel: "pure focus",
    accent: "purple",
    code: `// Problem → Code → Submit
// No distractions
// Just solving`,
  },
  {
    icon: "📊",
    title: "Submission Feedback",
    description:
      "Understand exactly how your code performs with runtime and result feedback after every submission.",
    stat: "Instant",
    statLabel: "verdict system",
    accent: "orange",
    code: `❌ Wrong Answer
Input: [2,7,11,15]
Expected: [0,1]`,
  },
  {
    icon: "🔥",
    title: "Daily Streak",
    description:
      "One problem a day keeps the rust away. Build a streak, earn badges, and stay consistent even on your busiest days.",
    stat: "365",
    statLabel: "day max streak",
    accent: "red",
    code: `🔥 Day 47 — Keep going!
Today: Easy warm-up
Est. time: ~12 mins`,
  },
   {
    icon: "🤖",
    title: "AI Coding Assistant",
    description:
      "Get unstuck instantly. Ask for hints, understand mistakes, or explore better approaches without revealing the full solution.",
    stat: "24/7",
    statLabel: "instant help",
    accent: "cyan",
    code: `// Hint request
> Why is my solution failing?

AI: You're missing edge cases
Try handling empty input first.`,
  },
];

const ACCENT_STYLES = {
  green:  { border: "rgba(0,230,118,0.25)",  glow: "rgba(0,230,118,0.07)",  text: "#00e676", badge: "text-green-400  bg-green-500/10  border-green-500/20"  },
  yellow: { border: "rgba(255,179,0,0.25)",   glow: "rgba(255,179,0,0.07)",   text: "#ffb300", badge: "text-yellow-400 bg-yellow-500/10 border-yellow-500/20" },
  blue:   { border: "rgba(96,165,250,0.25)",  glow: "rgba(96,165,250,0.07)",  text: "#60a5fa", badge: "text-blue-400   bg-blue-500/10   border-blue-500/20"   },
  purple: { border: "rgba(167,139,250,0.25)", glow: "rgba(167,139,250,0.07)", text: "#a78bfa", badge: "text-purple-400  bg-purple-500/10  border-purple-500/20"  },
  orange: { border: "rgba(251,146,60,0.25)",  glow: "rgba(251,146,60,0.07)",  text: "#fb923c", badge: "text-orange-400  bg-orange-500/10  border-orange-500/20"  },
  red:    { border: "rgba(248,113,113,0.25)", glow: "rgba(248,113,113,0.07)", text: "#f87171", badge: "text-red-400    bg-red-500/10    border-red-500/20"    },
  cyan:   { border: "rgba(34,211,238,0.25)", glow:   "rgba(34,211,238,0.07)", text:   "#22d3ee",badge:  "text-cyan-400 bg-cyan-500/10 border-cyan-500/20"},
};

// ── Single Feature Card ──
function FeatureCard({ feature, index }) {
  const { ref, isInView } = useScrollReveal();
  const a = ACCENT_STYLES[feature.accent];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: index * 0.08, ease: "easeOut" }}
      whileHover={{ y: -5, transition: { duration: 0.25 } }}
      className="group relative bg-base-200 border rounded-2xl p-6 flex flex-col gap-5 cursor-default overflow-hidden"
      style={{ borderColor: "rgba(255,255,255,0.07)" }}
    >
      {/* Hover glow background */}
      <motion.div
        className="absolute inset-0 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background: `radial-gradient(ellipse at 50% 0%, ${a.glow} 0%, transparent 70%)` }}
      />

      {/* Top accent line */}
      <motion.div
        className="absolute top-0 left-6 right-6 h-0.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: `linear-gradient(90deg, ${a.text}, transparent)` }}
      />

      {/* Header */}
      <div className="flex items-start justify-between">
        {/* Icon */}
        <motion.div
          whileHover={{ rotate: [0, -10, 10, 0], transition: { duration: 0.4 } }}
          className="text-3xl select-none"
        >
          {feature.icon}
        </motion.div>

        {/* Stat badge */}
        <div className={`badge badge-sm border font-mono font-semibold ${a.badge}`}>
          {feature.stat}
          <span className="ml-1 font-normal opacity-60">{feature.statLabel}</span>
        </div>
      </div>

      {/* Title + Description */}
      <div>
        <h3
          className="text-lg font-bold mb-2 transition-colors duration-200"
          style={{ color: isInView ? "inherit" : "transparent" }}
        >
          <motion.span
            className="group-hover:transition-colors group-hover:duration-200"
            style={{}}
          >
            {feature.title}
          </motion.span>
        </h3>
        <p className="text-base-content/50 text-sm leading-relaxed">
          {feature.description}
        </p>
      </div>

      {/* Code snippet */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ delay: index * 0.08 + 0.3, duration: 0.4 }}
        className="mt-auto rounded-lg bg-base-300 border border-base-content/10 px-4 py-3 font-mono text-xs leading-relaxed text-base-content/40 whitespace-pre"
        style={{ borderColor: a.border }}
      >
        {feature.code}
      </motion.div>
    </motion.div>
  );
}

// ── Section Header ──
function SectionHeader() {
  const { ref, isInView } = useScrollReveal(0.3);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, ease: "easeOut" }}
      className="text-center mb-16"
    >
      <h2 className="text-3xl lg:text-5xl font-bold mb-4">
        Everything you need to{" "}
        <span style={{ color: "var(--green)" }}>level up</span>
      </h2>
      <p className="text-base-content/50 text-lg max-w-xl mx-auto">
        Built for developers who want more than just a problem list. Every tool
        you need to go from zero to offer letter.
      </p>
    </motion.div>
  );
}

// ── Main Export ──
export default function Features() {
  return (
    <section className="relative px-6 lg:px-16 py-24 bg-base-300 overflow-hidden">

      {/* Subtle background glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-150 h-75 blur-[120px] pointer-events-none"
        style={{ background: "rgba(0,230,118,0.04)" }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeader />

        {/* 3-column grid, last row centers if odd */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {FEATURES.map((feature, i) => (
            <FeatureCard key={feature.title} feature={feature} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}