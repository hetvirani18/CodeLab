import { useState } from 'react';
import Editor from '@monaco-editor/react';
import { useSelector } from 'react-redux';

const LANG_DISPLAY = {
  javascript: 'JavaScript',
  java:       'Java',
  cpp:        'C++',
  python:     'Python',
  'c++':      'C++',
};

function getMonacoLanguage(lang) {
  if (lang === 'c++') return 'cpp';
  if (lang === 'js') return 'javascript';
  return lang || 'javascript';
}

// ── Copy button ──
function CopyButton({ code }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback
      const el = document.createElement('textarea');
      el.value = code;
      document.body.appendChild(el);
      el.select();
      document.execCommand('copy');
      document.body.removeChild(el);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <button
      onClick={handleCopy}
      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono border transition-all duration-200
        ${copied
          ? 'bg-green-500/10 border-green-500/30 text-green-400'
          : 'bg-base-content/5 border-base-content/10 text-base-content/40 hover:text-base-content/70 hover:border-base-content/20'
        }`}
    >
      {copied ? (
        <>
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          Copied!
        </>
      ) : (
        <>
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
          </svg>
          Copy
        </>
      )}
    </button>
  );
}

// ── Main ──
export default function SolutionsPanel() {
  const { problem } = useSelector((state) => state.problemDetail);
  const solutions = problem?.referenceSolution || [];
  const [activeIdx, setActiveIdx] = useState(0);

  if (solutions.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <div className="text-4xl mb-3">🔒</div>
        <p className="font-semibold text-base-content/50 mb-1">Solutions locked</p>
        <p className="text-sm text-base-content/30">
          Solve this problem to unlock the reference solutions.
        </p>
      </div>
    );
  }

  const active = solutions[activeIdx];
  const lang = (active?.language || 'javascript').toLowerCase();
  const monacoLang = getMonacoLanguage(lang);

  return (
    <div className="flex flex-col gap-4 pb-8">

      {/* Header */}
      <div>
        <p className="font-mono text-xs text-base-content/30 uppercase tracking-widest mb-1">
          Reference Solution
        </p>
      </div>

      {/* Language tab bar + copy */}
      <div className="flex items-center justify-between gap-2 flex-wrap">
        {/* Tabs */}
        <div className="flex items-center gap-1 bg-base-200 rounded-lg p-1 border border-base-content/[0.07]">
          {solutions.map((sol, i) => {
            const l = (sol.language || '').toLowerCase();
            const isActive = i === activeIdx;
            return (
              <button
                key={i}
                onClick={() => setActiveIdx(i)}
                className={`px-3 py-1.5 rounded-md font-mono text-xs transition-colors duration-150
                  ${isActive
                    ? 'bg-base-300 text-green-400 border border-green-500/25'
                    : 'text-base-content/35 hover:text-base-content/60'
                  }`}
              >
                {LANG_DISPLAY[l] || sol.language}
              </button>
            );
          })}
        </div>

        {/* Copy button */}
        <CopyButton code={active?.completeCode || ''} />
      </div>

      {/* Code block */}
      <div
        className="rounded-xl border border-base-content/8 overflow-hidden"
        style={{ boxShadow: '0 4px 24px rgba(0,0,0,0.25)' }}
      >
        {/* Title bar */}
        <div className="flex items-center gap-2 px-4 py-2.5 bg-base-300 border-b border-base-content/8">
          <span className="w-3 h-3 rounded-full bg-error opacity-60" />
          <span className="w-3 h-3 rounded-full bg-warning opacity-60" />
          <span className="w-3 h-3 rounded-full bg-success opacity-60" />
          <span className="ml-2 font-mono text-xs text-base-content/30">
            solution.{lang === 'javascript' ? 'js' : lang === 'java' ? 'java' : lang === 'python' ? 'py' : 'cpp'}
          </span>
          <span className="ml-auto font-mono text-[10px] text-base-content/20">
            {active?.completeCode?.split('\n').length || 0} lines
          </span>
        </div>

        <Editor
          height="520px"
          language={monacoLang}
          value={active?.completeCode || ''}
          theme="vs-dark"
          options={{
            readOnly: true,
            minimap: { enabled: false },
            scrollBeyondLastLine: false,
            fontSize: 14,
            wordWrap: 'on',
            lineNumbers: 'on',
            renderLineHighlight: 'none',
          }}
        />
      </div>
    </div>
  );
}