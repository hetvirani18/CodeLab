import { useEffect, useState } from 'react';
import Editor from '@monaco-editor/react';

const getMonacoLang = (lang) => lang === 'c++' ? 'cpp' : lang;

const LANG_LABELS = { javascript: 'JavaScript', java: 'Java', 'c++': 'C++' };

// ── Testcase result card ──
function TestCaseCard({ tc, index }) {
  const passed = tc.status_id === 3;
  return (
    <div className={`rounded-lg border p-3 text-xs font-mono
      ${passed
        ? 'bg-green-500/5 border-green-500/20'
        : 'bg-red-500/5 border-red-500/20'
      }`}
    >
      <div className="flex items-center justify-between mb-2">
        <span className="font-semibold text-base-content/60">Case {index + 1}</span>
        <span className={passed ? 'text-green-400' : 'text-red-400'}>
          {passed ? '✓ Passed' : '✗ Failed'}
        </span>
      </div>
      <div className="flex flex-col gap-1 text-base-content/50">
        <div><span className="text-base-content/30">Input:</span> {tc.stdin}</div>
        <div><span className="text-base-content/30">Expected:</span> {tc.expected_output}</div>
        <div><span className="text-base-content/30">Output:</span> {tc.stdout || '—'}</div>
      </div>
    </div>
  );
}

// ── Run result panel ──
function TestcasePanel({ runResult }) {
  const [activeCase, setActiveCase] = useState(0);

  useEffect(() => {
    setActiveCase(0);
  }, [runResult]);

  if (!runResult) {
    return (
      <div className="flex flex-col h-full">
        <div className="flex items-center gap-3 border-b border-base-content/7 pb-2">
          <button className="px-2.5 py-1 rounded-md text-xs font-mono bg-base-100 border border-base-content/12">Testcase</button>
          <button className="px-2.5 py-1 rounded-md text-xs font-mono text-base-content/40 border border-transparent">Test Result</button>
        </div>

        <div className="mt-3 flex items-center gap-2 text-xs text-base-content/40">
          <div className="px-2 py-1 rounded-md bg-base-100 border border-base-content/8">Case 1</div>
          <div className="px-2 py-1 rounded-md text-base-content/30 border border-transparent">Case 2</div>
          <div className="px-2 py-1 rounded-md text-base-content/30 border border-transparent">+</div>
        </div>

        <div className="mt-4 flex flex-col gap-3">
          <div>
            <div className="text-xs text-base-content/40 mb-1">Input</div>
            <div className="rounded-lg bg-base-100 border border-base-content/8 p-3 text-xs font-mono text-base-content/40">Run code to see input</div>
          </div>
          <div>
            <div className="text-xs text-base-content/40 mb-1">Expected</div>
            <div className="rounded-lg bg-base-100 border border-base-content/8 p-3 text-xs font-mono text-base-content/40">—</div>
          </div>
          <div>
            <div className="text-xs text-base-content/40 mb-1">Output</div>
            <div className="rounded-lg bg-base-100 border border-base-content/8 p-3 text-xs font-mono text-base-content/40">—</div>
          </div>
        </div>
      </div>
    );
  }

  const cases = runResult.testCases || [];
  const current = cases[activeCase] || {};

  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center gap-3 border-b border-base-content/[0.07] pb-2">
        <button className="px-2.5 py-1 rounded-md text-xs font-mono bg-base-100 border border-base-content/12">Testcase</button>
        <button className="px-2.5 py-1 rounded-md text-xs font-mono text-base-content/40 border border-transparent">Test Result</button>
        <div className={`ml-auto text-xs font-mono ${runResult.success ? 'text-green-400' : 'text-red-400'}`}>
          {runResult.success ? 'Accepted' : 'Wrong Answer'}
        </div>
      </div>

      <div className="mt-3 flex items-center gap-2 text-xs">
        {cases.map((tc, i) => (
          <button
            key={i}
            onClick={() => setActiveCase(i)}
            className={`px-2.5 py-1 rounded-md border font-mono
              ${i === activeCase
                ? 'bg-base-100 border-base-content/12 text-base-content/80'
                : 'border-transparent text-base-content/40 hover:text-base-content/70'
              }`}
          >
            Case {i + 1}
          </button>
        ))}
        <button className="px-2.5 py-1 rounded-md border border-transparent text-base-content/30 font-mono">+</button>
      </div>

      <div className="mt-4 flex flex-col gap-3 overflow-y-auto">
        <div>
          <div className="text-xs text-base-content/40 mb-1">Input</div>
          <div className="rounded-lg bg-base-100 border border-base-content/8 p-3 text-xs font-mono text-base-content/70">
            {current.stdin || '—'}
          </div>
        </div>
        <div>
          <div className="text-xs text-base-content/40 mb-1">Expected</div>
          <div className="rounded-lg bg-base-100 border border-base-content/8 p-3 text-xs font-mono text-base-content/70">
            {current.expected_output || '—'}
          </div>
        </div>
        <div>
          <div className="text-xs text-base-content/40 mb-1">Output</div>
          <div className="rounded-lg bg-base-100 border border-base-content/8 p-3 text-xs font-mono text-base-content/70">
            {current.stdout || '—'}
          </div>
        </div>

        {/* Optional: quick summary cards */}
        <div className="mt-2">
          {cases.map((tc, i) => (
            <TestCaseCard key={`summary-${i}`} tc={tc} index={i} />
          ))}
        </div>
      </div>
    </div>
  );
}

// ── Submit result panel ──
function ResultPanel({ submitResult, loading }) {
  if (loading && !submitResult) {
    return (
      <div className="flex items-center justify-center h-full text-base-content/30">
        <div className="flex items-center gap-2 font-mono text-xs">
          <span className="loading loading-spinner loading-xs" />
          Submitting...
        </div>
      </div>
    );
  }

  if (!submitResult) {
    return (
      <div className="flex flex-col items-center justify-center h-full gap-2 text-base-content/25">
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <span className="font-mono text-xs">Submit your code to see the result</span>
      </div>
    );
  }

  const accepted = submitResult.accepted;

  return (
    <div className="flex flex-col gap-4 h-full overflow-y-auto">
      {/* Big status */}
      <div className={`rounded-xl border p-5 ${accepted
        ? 'bg-green-500/6 border-green-500/20'
        : 'bg-red-500/6 border-red-500/20'
      }`}>
        <div className={`text-2xl font-bold mb-1 ${accepted ? 'text-green-400' : 'text-red-400'}`}>
          {accepted ? '✓ Accepted' : `✗ ${submitResult.error || 'Wrong Answer'}`}
        </div>
        <div className="flex flex-wrap gap-4 mt-3">
          <div className="flex flex-col gap-0.5">
            <span className="font-mono text-xs text-base-content/30">Test Cases</span>
            <span className={`font-mono text-sm font-bold ${accepted ? 'text-green-400' : 'text-red-400'}`}>
              {submitResult.passedTestCases}/{submitResult.totalTestCases}
            </span>
          </div>
          {accepted && (
            <>
              <div className="flex flex-col gap-0.5">
                <span className="font-mono text-xs text-base-content/30">Runtime</span>
                <span className="font-mono text-sm font-bold text-green-400">{submitResult.runtime}s</span>
              </div>
              <div className="flex flex-col gap-0.5">
                <span className="font-mono text-xs text-base-content/30">Memory</span>
                <span className="font-mono text-sm font-bold text-green-400">{submitResult.memory} KB</span>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

// ══════════════════════════════════════════
// Main RightPanel
// ══════════════════════════════════════════
const CONSOLE_COLLAPSED_H = 44;   // px — just the bar
const CONSOLE_EXPANDED_H  = 240;  // px — open drawer
const NAVBAR_H = 48; // px — top bar

export default function RightPanel({
  activeRightTab,
  setActiveRightTab,
  actionSignal,
  loadingAction,
  selectedLanguage,
  onLanguageChange,
  code,
  onCodeChange,
  onEditorDidMount,
  loading,
  runResult,
  submitResult,
}) {
  const [consoleOpen, setConsoleOpen] = useState(false);
  const [showSubmissionPanel, setShowSubmissionPanel] = useState(false);

  useEffect(() => {
    if (!actionSignal) return;
    if (actionSignal.type === 'run') {
      setConsoleOpen(true);
    }
    if (actionSignal.type === 'submit') {
      setConsoleOpen(true);
      setShowSubmissionPanel(true);
    }
  }, [actionSignal]);

  const consoleH = consoleOpen ? CONSOLE_EXPANDED_H : CONSOLE_COLLAPSED_H;

  return (
    <div className="w-1/2 flex flex-col bg-base-100 border-l border-base-content/[0.07]">

      {/* ── Editor toolbar ── */}
      <div className="flex items-center border-b border-base-content/[0.07] bg-base-200 px-3" style={{ height: NAVBAR_H }}>
        <div className="text-sm font-semibold text-base-content/70">Code</div>

        {/* Language selector */}
        <div className="ml-auto flex items-center gap-2">
          <div className="relative">
            <select
              value={selectedLanguage}
              onChange={(e) => onLanguageChange(e.target.value)}
              className="select select-sm bg-base-100 border border-base-content/12 text-xs font-mono"
            >
              {Object.keys(LANG_LABELS).map((lang) => (
                <option key={lang} value={lang}>
                  {LANG_LABELS[lang]}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* ── Editor area — fills remaining height ── */}
      <div
        className="flex-1 overflow-hidden transition-all duration-200"
        style={{ height: `calc(100% - ${NAVBAR_H}px - ${consoleH}px)` }}
      >
        <div className="flex h-full">
          <div className="flex-1 overflow-hidden">
            <Editor
              height="100%"
              language={getMonacoLang(selectedLanguage)}
              value={code}
              onChange={onCodeChange}
              onMount={onEditorDidMount}
              theme="vs-dark"
              options={{
                fontSize: 14,
                minimap: { enabled: false },
                scrollBeyondLastLine: false,
                automaticLayout: true,
                tabSize: 2,
                insertSpaces: true,
                wordWrap: 'on',
                lineNumbers: 'on',
                glyphMargin: false,
                folding: true,
                lineDecorationsWidth: 10,
                lineNumbersMinChars: 3,
                renderLineHighlight: 'line',
                roundedSelection: false,
                cursorStyle: 'line',
                mouseWheelZoom: true,
                padding: { top: 12 },
              }}
            />
          </div>

          {/* Submission side panel */}
          {showSubmissionPanel && (
            <div className="w-[320px] border-l border-base-content/[0.07] bg-base-200 flex flex-col">
              <div className="flex items-center justify-between px-3 border-b border-base-content/[0.07]" style={{ height: 40 }}>
                <div className="text-xs font-mono text-base-content/60">Submission</div>
                <button
                  onClick={() => setShowSubmissionPanel(false)}
                  className="p-1 rounded hover:bg-base-content/10 text-base-content/50 hover:text-base-content/80"
                  aria-label="Close submission panel"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18 6 6 18M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="flex-1 overflow-y-auto p-3">
                <ResultPanel submitResult={submitResult} loading={loading && loadingAction === 'submit'} />
              </div>
            </div>
          )}
        </div>
      </div>

      {/* ── Bottom console drawer ── */}
      <div
        className="flex flex-col border-t border-base-content/7 bg-base-200 overflow-hidden transition-all duration-200"
        style={{ height: consoleH }}
      >
        {/* Console bar — always visible */}
        <div className="flex items-center justify-between px-4 shrink-0" style={{ height: CONSOLE_COLLAPSED_H }}>
          <div className="flex items-center gap-1">
            {/* Toggle chevron + label */}
            <button
              onClick={() => setConsoleOpen(o => !o)}
              className="flex items-center gap-1.5 text-xs font-mono text-base-content/40 hover:text-base-content/70 transition-colors duration-150"
            >
              <svg
                className={`w-3.5 h-3.5 transition-transform duration-200 ${consoleOpen ? 'rotate-180' : ''}`}
                fill="none" viewBox="0 0 24 24" stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
              </svg>
              Console
            </button>

            {/* Quick status pill — shown when closed and result exists */}
            {!consoleOpen && (runResult || submitResult) && (
              <span className={`ml-2 px-2 py-0.5 rounded-full font-mono text-[10px] border
                ${(runResult?.success || submitResult?.accepted)
                  ? 'bg-green-500/10 border-green-500/25 text-green-400'
                  : 'bg-red-500/10 border-red-500/25 text-red-400'
                }`}
              >
                {runResult?.success || submitResult?.accepted ? '✓ Passed' : '✗ Failed'}
              </span>
            )}
          </div>

          <div className="flex items-center gap-2" />
        </div>

        {/* Console content — visible only when open */}
        {consoleOpen && (
          <div className="flex-1 overflow-hidden px-4 pb-4">
            <TestcasePanel runResult={runResult} />
          </div>
        )}
      </div>
    </div>
  );
}