import { useSelector } from "react-redux";

const DIFF_CONFIG = {
  easy:   { label: 'Easy',   class: 'text-green-400  bg-green-500/8   border-green-500/25'  },
  medium: { label: 'Medium', class: 'text-yellow-400 bg-yellow-500/8  border-yellow-500/25' },
  hard:   { label: 'Hard',   class: 'text-red-400    bg-red-500/8     border-red-500/25'    },
};

// ── Inline code block ──
function CodeBlock({ children }) {
  return (
    <div className="rounded-lg bg-base-300 border border-base-content/[0.07] px-4 py-3 font-mono text-sm text-base-content/80 leading-relaxed overflow-x-auto">
      {children}
    </div>
  );
}

// ── Section wrapper ──
function Section({ children, className = '' }) {
  return (
    <div className={`rounded-xl border border-base-content/[0.07] bg-base-200 p-5 ${className}`}>
      {children}
    </div>
  );
}

export default function DescriptionPanel() {
  const {problem} = useSelector((state) => state.problemDetail);

  const diff = DIFF_CONFIG[problem.difficulty] ?? { label: problem.difficulty, class: 'text-base-content/50 bg-base-content/5 border-base-content/15' };

  return (
    <div className="flex flex-col gap-5 pb-8">

      {/* ── Header ── */}
      <div>
        {/* Title row */}
        <div className="flex flex-wrap items-start gap-3 mb-3">
          <h1 className="text-xl font-bold text-base-content leading-tight">
            {problem.title}
          </h1>
          {/* Difficulty badge */}
          <span className={`badge badge-sm border font-mono font-semibold shrink-0 mt-0.5 ${diff.class}`}>
            {diff.label}
          </span>
        </div>

        {/* Tags */}
        {problem.tags?.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {problem.tags.map((tag, i) => (
              <span
                key={i}
                className="badge badge-sm rounded-md border-none bg-blue-500/10 text-blue-400 font-mono"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* ── Description ── */}
      <Section>
        <p className="text-sm leading-[1.85] text-base-content/75 whitespace-pre-wrap">
          {problem.description}
        </p>
      </Section>

      {/* ── Examples ── */}
      {problem.visibleTestCases?.length > 0 && (
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-semibold text-base-content/70 uppercase tracking-widest font-mono">
              Examples
            </h3>
            <span className="font-mono text-xs text-base-content/30">
              {problem.visibleTestCases.length} case{problem.visibleTestCases.length !== 1 ? 's' : ''}
            </span>
          </div>

          {problem.visibleTestCases.map((ex, i) => (
            <Section key={i}>
              {/* Example number */}
              <div className="flex items-center gap-2 mb-3">
                <span className="w-5 h-5 rounded-full bg-base-300 border border-base-content/10 flex items-center justify-center font-mono text-[10px] text-base-content/50 shrink-0">
                  {i + 1}
                </span>
                <span className="text-xs font-semibold text-base-content/50 uppercase tracking-widest font-mono">
                  Example {i + 1}
                </span>
              </div>

              <div className="flex flex-col gap-2">
                {/* Input */}
                <div>
                  <p className="font-mono text-[11px] text-base-content/35 mb-1 uppercase tracking-widest">Input</p>
                  <CodeBlock>{ex.input}</CodeBlock>
                </div>

                {/* Output */}
                <div>
                  <p className="font-mono text-[11px] text-base-content/35 mb-1 uppercase tracking-widest">Output</p>
                  <CodeBlock>
                    <span style={{ color: 'var(--green)' }}>{ex.output}</span>
                  </CodeBlock>
                </div>

                {/* Explanation */}
                {ex.explanation && (
                  <div className="mt-1 flex gap-2 text-sm text-base-content/50 leading-relaxed">
                    <span className="font-mono text-base-content/30 shrink-0">Explanation:</span>
                    <span>{ex.explanation}</span>
                  </div>
                )}
              </div>
            </Section>
          ))}
        </div>
      )}

      {/* ── Constraints (if present) ── */}
      {problem.constraints && (
        <div className="flex flex-col gap-2">
          <h3 className="text-sm font-semibold text-base-content/70 uppercase tracking-widest font-mono">
            Constraints
          </h3>
          <Section>
            <ul className="flex flex-col gap-1.5">
              {(Array.isArray(problem.constraints)
                ? problem.constraints
                : problem.constraints.split('\n').filter(Boolean)
              ).map((c, i) => (
                <li key={i} className="flex items-start gap-2 font-mono text-xs text-base-content/60">
                  <span className="text-base-content/25 shrink-0 mt-0.5">·</span>
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </Section>
        </div>
      )}

    </div>
  );
}