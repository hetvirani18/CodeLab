import { motion, useInView } from "motion/react";
import { useRef } from "react";

const PROBLEMS = [
  { id: 1, title: "Two Sum", difficulty: "easy", topic: "array", acceptance: "51.2%", status: "solved" },
  { id: 2, title: "Add Two Numbers", difficulty: "medium", topic: "linked list", acceptance: "42.5%", status: "attempted" },
  { id: 3, title: "Palindrome Checker", difficulty: "easy", topic: "string", acceptance: "68.2%", status: "solved" },
  { id: 4, title: "Median of Two Sorted Arrays", difficulty: "hard", topic: "binary search", acceptance: "38.5%", status: null },
  { id: 5, title: "Longest Palindromic Substring", difficulty: "medium", topic: "dp", acceptance: "34.1%", status: null },
];

const DIFFICULTY = {
  easy: { badge: "badge-success", label: "Easy" },
  medium: { badge: "badge-warning", label: "Medium" },
  hard: { badge: "badge-error", label: "Hard" },
};

const STATUS = {
  solved: { icon: "✓", color: "text-green-500", title: "Solved" },
  attempted: { icon: "~", color: "text-yellow-500", title: "Attempted" },
};

// ── Row ──
function ProblemRow({ id, title, difficulty, topic, acceptance, status, index }) {
  const diff = DIFFICULTY[difficulty];
  const stat = STATUS[status];

  return (
    <motion.a
      href="/problemset"
      initial={{ opacity: 0, x: -16 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="group relative flex items-center gap-3 px-4 sm:px-6 py-4
                 border-b border-base-content/6 last:border-none
                 hover:bg-base-content/3 transition"
    >
      {/* Accent */}
      <motion.div
        className="absolute left-0 top-2 bottom-2 w-0.75 bg-green-500 rounded-full"
        initial={{ scaleY: 0, opacity: 0 }}
        whileHover={{ scaleY: 1, opacity: 1 }}
        transition={{ duration: 0.18 }}
        style={{ transformOrigin: "top" }}
      />

      {/* Status */}
      <div className="w-6 shrink-0 flex justify-center">
        {stat ? (
          <span className={`text-sm font-bold ${stat.color}`}>{stat.icon}</span>
        ) : (
          <span className="w-1.5 h-1.5 rounded-full bg-base-content/15" />
        )}
      </div>

      {/* Title */}
      <div className="flex items-center gap-2 flex-1 min-w-0">
        <span className="font-mono text-xs text-base-content/25">{id}.</span>
        <span className="truncate text-sm group-hover:text-green-400">
          {title}
        </span>
      </div>

      {/* Topic */}
      <div className="hidden md:flex shrink-0">
        <span className="badge badge-sm bg-blue-500/10 text-blue-400 border-none font-mono ">
          {topic}
        </span>
      </div>

      {/* Acceptance */}
      <div className="hidden sm:block shrink-0 w-14 text-right text-xs font-mono text-base-content/40 tabular-nums">
        {acceptance}
      </div>

      {/* Difficulty */}
      <div className="shrink-0 w-17.5">
        <span className={`badge badge-sm badge-outline ${diff.badge}`}>
          <span className="sm:hidden">{diff.label[0]}</span>
          <span className="hidden sm:inline">{diff.label}</span>
        </span>
      </div>

      {/* Arrow */}
      <motion.div
        className="w-4 shrink-0 text-base-content/20 group-hover:text-green-500"
        whileHover={{ x: 3 }}
      >
        →
      </motion.div>
    </motion.a>
  );
}

// ── Summary ──
function SummaryStrip() {
  const solved = PROBLEMS.filter(p => p.status === "solved").length;
  const attempted = PROBLEMS.filter(p => p.status === "attempted").length;

  return (
    <div className="flex items-center gap-4 px-4 sm:px-6 py-3 border-b border-base-content/6 bg-base-content/2 text-xs font-mono text-base-content/40">
      <span className="flex gap-1 items-center">
        <span className="text-green-500">✓</span>{solved} solved
      </span>
      <span className="flex gap-1 items-center">
        <span className="text-yellow-500">~</span>{attempted} attempted
      </span>
      <span className="ml-auto text-base-content/30">
        {PROBLEMS.length} problems
      </span>
    </div>
  );
}

// ── Main ──
export default function HomeProblem() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="relative px-4 sm:px-6 lg:px-16 py-20 bg-base-300">

      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="mb-8 flex justify-between items-end"
        >
          <div>
            <h2 className="text-3xl font-bold">Problem Set</h2>
            <p className="text-base-content/40 text-sm">
              Solve algorithms to level up your skills.
            </p>
          </div>

          <div className="hidden sm:flex gap-4 text-xs font-mono text-base-content/40">
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 bg-green-500 rounded-full" />Easy
            </span>
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 bg-yellow-500 rounded-full" />Medium
            </span>
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 bg-red-500 rounded-full" />Hard
            </span>
          </div>
        </motion.div>

        {/* Table */}
        <div className="rounded-2xl border border-base-content/8 bg-base-200 overflow-hidden">

          <SummaryStrip />

          {/* Header row */}
          <div className="flex items-center gap-3 px-4 sm:px-6 py-3 border-b border-base-content/6
                          text-[10px] font-mono text-base-content/25 uppercase tracking-widest">
            <div className="w-6 shrink-0 text-center">St.</div>
            <div className="flex-1">Title</div>
            <div className="hidden md:block w-24 shrink-0">Topic</div>
            <div className="hidden sm:block w-14 shrink-0 text-right">Acc.</div>
            <div className="w-17.5 shrink-0">Diff.</div>
            <div className="w-4 shrink-0" />
          </div>

          {PROBLEMS.map((p, i) => (
            <ProblemRow key={p.id} {...p} index={i} />
          ))}
        </div>

        {/* CTA */}
        <div className="flex justify-center mt-10">
          <motion.a
            href="/problemset"
            whileHover={{ scale: 1.05 }}
            className="btn btn-outline px-8"
            style={{ borderColor: "var(--green)", color: "var(--green)" }}
          >
            Explore all problems →
          </motion.a>
        </div>

      </div>
    </section>
  );
}