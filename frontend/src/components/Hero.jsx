import { motion } from "motion/react";

// Animation variants
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, delay, ease: "easeOut" } },
});

const fadeIn = (delay = 0) => ({
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.5, delay } },
});

const LANGS = ["JavaScript", "Java", "C++"];

export default function Hero() {
  return (
    <section className="min-h-[90vh] flex items-center px-6 lg:px-16 py-20 relative overflow-hidden bg-base-300">
      
      {/* ── BACKGROUND LAYER ── */}
      {/* 1. Grid Pattern with Fade Mask */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.07) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.07) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
          // Fades the grid out towards the edges
          WebkitMaskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 20%, transparent 100%)',
          maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 20%, transparent 100%)',
        }}
      />
      
      {/* 2. Subtle Green Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-125 bg-green-500/10 blur-[120px] rounded-full pointer-events-none" />


      {/* ── CONTENT LAYER ── (Note the relative z-10 to keep it above the background) */}
      <div className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row items-center gap-16 relative z-10">

        {/* ── LEFT COLUMN ── */}
        <div className="flex-1">

          {/* Live badge */}
          <motion.div
            {...fadeUp(0.1)}
            className="inline-flex items-center gap-2 rounded-full px-4 py-2 mb-6 border text-sm font-mono"
            style={{
              background: "rgba(0,230,118,0.08)",
              borderColor: "rgba(0,230,118,0.25)",
              color: "var(--green)",
            }}
          >
            {/* Ping dot */}
            <span className="relative flex h-2.5 w-2.5">
              <span
                className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
                style={{ background: "var(--green)" }}
              />
              <span
                className="relative inline-flex rounded-full h-2.5 w-2.5"
                style={{ background: "var(--green)" }}
              />
            </span>
            25+ problems live
          </motion.div>

          {/* Headline */}
          <motion.h1
            {...fadeUp(0.2)}
            className="text-4xl lg:text-6xl font-bold leading-tight mb-5"
          >
            Code smarter.
            <br />
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.6, ease: "easeOut" }}
              style={{ color: "var(--green)" }}
              className="inline-block"
            >
              Get hired faster.
            </motion.span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            {...fadeUp(0.35)}
            className="text-base-content/60 text-lg leading-relaxed max-w-lg mb-8"
          >
            Practice real interview problems, compete in live contests, and track
            your growth — all in one place built for developers who are serious
            about their craft.
          </motion.p>

          {/* CTA buttons */}
          <motion.div {...fadeUp(0.45)} className="flex flex-wrap gap-3 mb-8">
            <motion.a
                href="/signup"
              whileHover={{ scale: 1.04, boxShadow: "0 0 22px rgba(0,230,118,0.4)" }}
              whileTap={{ scale: 0.97 }}
              className="btn font-bold text-base-300 bg-green-400 border-none"
            >
              Start Coding →
            </motion.a>
            <motion.a
                href="/problemset"
              whileHover={{ scale: 1.04, background: "rgba(0,230,118,0.08)" }}
              whileTap={{ scale: 0.97 }}
              className="btn btn-outline"
              style={{ borderColor: "var(--green)", color: "var(--green)" }}
            >
              View Problems
            </motion.a>
          </motion.div>

          {/* Language badges */}
          <motion.div
            {...fadeIn(0.6)}
            className="flex flex-wrap gap-2"
          >
            {LANGS.map((lang, i) => (
              <motion.span
                key={lang}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.65 + i * 0.07, duration: 0.3 }}
                whileHover={{ scale: 1.1, y: -2 }}
                className="badge badge-outline text-sm cursor-default"
                style={{
                  borderColor: "rgba(0,230,118,0.3)",
                  color: "var(--green)",
                }}
              >
                {lang}
              </motion.span>
            ))}
          </motion.div>
        </div>

        {/* ── RIGHT COLUMN — floating code card ── */}
        <motion.div
          className="flex-1 w-full max-w-md hidden lg:block"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
        >
          {/* Continuous float */}
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <div
              className="card bg-base-200 shadow-xl border border-base-content/10"
              style={{ boxShadow: "0 0 40px rgba(0,230,118,0.08)" }}
            >
              {/* Window bar */}
              <div className="flex items-center gap-2 px-4 py-3 bg-base-300 border-b border-base-content/10 rounded-t-2xl">
                <span className="w-3 h-3 rounded-full bg-error opacity-80" />
                <span className="w-3 h-3 rounded-full bg-warning opacity-80" />
                <span className="w-3 h-3 rounded-full bg-success opacity-80" />
                <span className="font-mono text-xs text-base-content/40 ml-2">
                  Two Sum
                </span>
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.4 }}
                  className="ml-auto text-xs font-semibold"
                  style={{ color: "var(--green)" }}
                >
                  ● Accepted
                </motion.span>
              </div>

              {/* Code lines — staggered reveal */}
              <div className="card-body p-5 font-mono text-sm leading-relaxed">
                {[
                    <><span className="text-pink-400">vector&lt;int&gt;</span> <span className="text-green-400">twoSum</span><span>(vector&lt;int&gt;& nums, int target) {"{"}</span></>,
                    <span className="text-slate-500 ml-5">// hash map approach — O(n)</span>,
                    <><span className="ml-5 text-pink-400">unordered_map&lt;int,int&gt;</span> <span className="ml-1">mp;</span></>,
                    <><span className="ml-5 text-pink-400">for</span><span className="ml-1">(int i = 0; i &lt; nums.size(); i++) {"{"}</span></>,
                    <><span className="ml-10 text-pink-400">int</span><span className="ml-1"> diff = target - nums[i];</span></>,
                    <><span className="ml-10 text-pink-400">if</span><span className="ml-1">(mp.find(diff) != mp.end()) {"{"}</span></>,
                    <><span className="ml-16 text-pink-400">return</span><span className="ml-1"> {"{"}mp[diff], i{"}"};</span></>,
                    <><span className="ml-10">{"}"}</span></>,
                    <><span className="ml-10">mp[nums[i]] = i;</span></>,
                    <><span className="ml-5">{"}"}</span></>,
                    <><span className="ml-5 text-pink-400">return</span><span className="ml-1"> {"{}"};</span></>,
                    <><span>{"}"}</span></>,
                ].map((line, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8 + i * 0.08, duration: 0.3 }}
                  >
                    {line}
                  </motion.div>
                ))}
              </div>

              {/* Footer stats */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.6 }}
                className="flex items-center justify-between px-5 py-3 border-t border-base-content/10"
              >
                <div className="flex gap-4 text-xs text-base-content/50">
                  <span>
                    Runtime:{" "}
                    <span className="font-semibold" style={{ color: "var(--green)" }}>
                      52ms
                    </span>
                  </span>
                  <span>
                    Memory:{" "}
                    <span className="font-semibold" style={{ color: "var(--green)" }}>
                      200kb
                    </span>
                  </span>
                </div>
                <div className="badge badge-success badge-sm badge-outline">Easy</div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}