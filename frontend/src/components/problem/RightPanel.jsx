import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Editor from '@monaco-editor/react';
import { clearResults } from '../../store/porblemDetailSlice';

const getMonacoLang = (lang) => (lang === 'c++' ? 'cpp' : lang);
const LANG_LABELS = { javascript: 'JavaScript', java: 'Java', 'c++': 'C++' };
const CONSOLE_BAR_H  = 44;
const CONSOLE_OPEN_H = 350;
const TOOLBAR_H      = 44;

// ─────────────────────────────────────────
// Field box — input / expected / output
// ─────────────────────────────────────────
function FieldBox({ label, value, highlight }) {
  return (
    <div>
      <p className="font-mono text-[11px] text-base-content/35 mb-1">{label}</p>
      <div
        className={`rounded-lg px-3 py-2.5 font-mono text-xs border whitespace-pre-wrap break-all
          ${highlight === 'pass'
            ? 'bg-green-500/5 border-green-500/20 text-green-300'
            : highlight === 'fail'
            ? 'bg-red-500/5 border-red-500/20 text-red-300'
            : 'bg-base-100 border-base-content/8 text-base-content/70'
          }`}
      >
        {value || <span className="text-base-content/25">—</span>}
      </div>
    </div>
  );
}

// ─────────────────────────────────────────
// Console content
// ─────────────────────────────────────────
function ConsoleContent({ problem, runResult, loadingAction }) {
  const [activeCase, setActiveCase] = useState(0);

  useEffect(() => { setActiveCase(0); }, [runResult]);

  // Loading spinner
  if (loadingAction === 'run') {
    return (
      <div className="flex items-center gap-2 h-full text-base-content/30 font-mono text-xs">
        <span className="loading loading-spinner loading-xs" />
        Running test cases…
      </div>
    );
  }

  // ── After run: show results ──
  if (runResult) {
    const cases   = runResult.testCases || [];
    const current = cases[activeCase] || {};
    const passed  = current.status_id === 3;

    return (
      <div className="flex flex-col gap-2.5 h-full ">
        {/* Header row */}
        <div className="flex items-center gap-3 flex-wrap">
          <span className={`font-mono text-xs font-semibold ${runResult.success ? 'text-green-400' : 'text-red-400'}`}>
            {runResult.success ? '✓ Accepted' : '✗ Wrong Answer'}
          </span>
          {runResult.success && (
            <span className="font-mono text-[11px] text-base-content/35">
              {runResult.runtime}s · {runResult.memory} KB
            </span>
          )}
          {/* Case tabs */}
          <div className="ml-auto flex gap-1.5">
            {cases.map((tc, i) => {
              const ok = tc.status_id === 3;
              return (
                <button
                  key={i}
                  onClick={() => setActiveCase(i)}
                  className={`flex items-center gap-1 px-2.5 py-1 rounded-md font-mono text-[11px] border transition-colors duration-150
                    ${i === activeCase
                      ? ok
                        ? 'bg-green-500/10 border-green-500/30 text-green-400'
                        : 'bg-red-500/10 border-red-500/30 text-red-400'
                      : 'border-base-content/8 text-base-content/35 hover:text-base-content/60'
                    }`}
                >
                  <span className={`text-[8px] ${ok ? 'text-green-400' : 'text-red-400'}`}>●</span>
                  Case {i + 1}
                </button>
              );
            })}
          </div>
        </div>

        {/* Fields */}
        <div className="flex flex-col gap-2 h-full overflow-y-auto">
          <FieldBox label="Input"    value={current.stdin}           />
          <FieldBox label="Expected" value={current.expected_output} />
          <FieldBox label="Output"   value={current.stdout}          highlight={passed ? 'pass' : 'fail'} />
        </div>
      </div>
    );
  }

  // ── Before run: show visible test cases from problem ──
  const visibleCases = problem?.visibleTestCases || [];

  if (visibleCases.length === 0) {
    return (
      <div className="flex items-center justify-center h-full font-mono text-xs text-base-content/25">
        Run your code to see test results
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-2.5 h-full overflow-y-auto">
      {/* Case tabs */}
      <div className="flex gap-1.5">
        {visibleCases.map((_, i) => (
          <button
            key={i}
            onClick={() => setActiveCase(i)}
            className={`px-2.5 py-1 rounded-md font-mono text-[11px] border transition-colors duration-150
              ${i === activeCase
                ? 'bg-base-100 border-base-content/15 text-base-content/80'
                : 'border-transparent text-base-content/35 hover:text-base-content/60'
              }`}
          >
            Case {i + 1}
          </button>
        ))}
      </div>

      {/* Fields */}
      <div className="grid grid-cols-2 gap-2">
        <FieldBox label="Input"    value={visibleCases[activeCase]?.input}  />
        <FieldBox label="Expected" value={visibleCases[activeCase]?.output} />
      </div>
      <p className="font-mono text-[11px] text-base-content/20 mt-1">
        Click <span className="text-base-content/40">Run</span> to execute against these cases
      </p>
    </div>
  );
}

// ─────────────────────────────────────────
// Submit result — full right-panel overlay
// ─────────────────────────────────────────
function SubmitOverlay({ submitResult, loadingAction, onClose }) {

  // Judging spinner
  if (loadingAction === 'submit') {
    return (
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-base-100 gap-4">
        <span className="loading loading-spinner loading-lg" style={{ color: 'var(--green)' }} />
        <p className="font-mono text-sm text-base-content/40">Judging your submission…</p>
      </div>
    );
  }

  if (!submitResult) return null;

  const ok = submitResult.accepted;

  return (
    <div className="absolute inset-0 z-20 flex flex-col bg-base-100 overflow-y-auto">

      {/* Top bar */}
      <div className="flex items-center justify-between px-5 shrink-0 border-b border-base-content/[0.07]" style={{ height: 44 }}>
        <span className="font-mono text-xs text-base-content/30 uppercase tracking-widest">
          Submission Result
        </span>
        <button
          onClick={onClose}
          className="p-1.5 rounded-lg hover:bg-base-content/8 text-base-content/40 hover:text-base-content/70 transition-colors duration-150"
          aria-label="Close"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      {/* Body */}
      <div className="flex-1 flex flex-col items-center justify-center px-8 py-10 gap-6">

        {/* Status icon + text */}
        <div className="text-center">
          <div className={`text-5xl font-bold mb-3 ${ok ? 'text-green-400' : 'text-red-400'}`}>
            {ok ? '✓' : '✗'}
          </div>
          <h2 className={`text-2xl lg:text-3xl font-bold ${ok ? 'text-green-400' : 'text-red-400'}`}>
            {ok ? 'Accepted' : (submitResult.error || 'Wrong Answer')}
          </h2>
          <p className="text-base-content/35 text-sm mt-2">
            {ok
              ? 'Your solution passed all test cases 🎉'
              : `Passed ${submitResult.passedTestCases} of ${submitResult.totalTestCases} test cases`
            }
          </p>
        </div>

        {/* Stats */}
        <div className={`grid gap-3 w-full max-w-xs ${ok ? 'grid-cols-3' : 'grid-cols-1'}`}>
          <div className={`rounded-xl border p-4 text-center
            ${ok ? 'bg-green-500/5 border-green-500/15' : 'bg-red-500/5 border-red-500/15'}`}
          >
            <p className="font-mono text-[11px] text-base-content/30 mb-1">Test Cases</p>
            <p className={`font-mono text-xl font-bold ${ok ? 'text-green-400' : 'text-red-400'}`}>
              {submitResult.passedTestCases}/{submitResult.totalTestCases}
            </p>
          </div>
          {ok && (
            <>
              <div className="rounded-xl border border-base-content/8 bg-base-200 p-4 text-center">
                <p className="font-mono text-[11px] text-base-content/30 mb-1">Runtime</p>
                <p className="font-mono text-xl font-bold" style={{ color: 'var(--green)' }}>
                  {submitResult.runtime}s
                </p>
              </div>
              <div className="rounded-xl border border-base-content/8 bg-base-200 p-4 text-center">
                <p className="font-mono text-[11px] text-base-content/30 mb-1">Memory</p>
                <p className="font-mono text-xl font-bold" style={{ color: 'var(--green)' }}>
                  {submitResult.memory} KB
                </p>
              </div>
            </>
          )}
        </div>

        {/* Actions */}
        <div className="flex gap-3">
          <button
            onClick={onClose}
            className="btn btn-sm btn-ghost border border-base-content/10 font-mono text-xs"
          >
            ← Back to code
          </button>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────
// Main RightPanel
// ─────────────────────────────────────────
export default function RightPanel({
  selectedLanguage,
  onLanguageChange,
  code,
  onCodeChange,
  onEditorDidMount,
}) {
  const [consoleOpen, setConsoleOpen]         = useState(false);
  const [showSubmitOverlay, setShowSubmitOverlay] = useState(false);
  const dispatch = useDispatch();
  const { problem, loadingAction, runResult, submitResult } = useSelector(
    (state) => state.problemDetail
  );

  // Auto-open console when run starts
  useEffect(() => {
    if (loadingAction === 'run') setConsoleOpen(true);
  }, [loadingAction]);

  // Show overlay when submit starts or result comes in
  useEffect(() => {
    if (loadingAction === 'submit' || submitResult) setShowSubmitOverlay(true);
  }, [loadingAction, submitResult]);

  const consoleH = consoleOpen ? CONSOLE_OPEN_H : CONSOLE_BAR_H;

  return (
    <div className="w-1/2 flex flex-col bg-base-100 border-l border-base-content/7 relative">

      {/* Submit overlay — covers entire right panel */}
      {showSubmitOverlay && (
        <SubmitOverlay
          submitResult={submitResult}
          loadingAction={loadingAction}
          onClose={() => {
            setShowSubmitOverlay(false);
            dispatch(clearResults());
          }}
        />
      )}

      {/* ── Editor toolbar ── */}
      <div
        className="flex items-center gap-3 px-4 border-b border-base-content/7 bg-base-200 shrink-0"
        style={{ height: TOOLBAR_H }}
      >
        <span className="text-sm font-semibold text-base-content/50">Code</span>

        {/* Language pills */}
        <div className="ml-auto flex items-center gap-1">
          {Object.keys(LANG_LABELS).map((lang) => (
            <button
              key={lang}
              onClick={() => onLanguageChange(lang)}
              className={`px-2.5 py-1 rounded-md font-mono text-xs border transition-colors duration-150
                ${selectedLanguage === lang
                  ? 'bg-green-500/10 border-green-500/30 text-green-400'
                  : 'text-base-content/30 border-transparent hover:text-base-content/60 hover:bg-base-content/5'
                }`}
            >
              {LANG_LABELS[lang]}
            </button>
          ))}
        </div>
      </div>

      {/* ── Monaco Editor ── */}
      <div
        className="overflow-hidden"
        style={{ height: `calc(100% - ${TOOLBAR_H}px - ${consoleH}px)` }}
      >
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

      {/* ── Bottom console drawer ── */}
      <div
        className="flex flex-col border-t border-base-content/7 bg-base-200 shrink-0 overflow-hidden transition-all duration-200"
        style={{ height: consoleH }}
      >
        {/* Always-visible bar */}
        <div
          className="flex items-center justify-between px-4 shrink-0"
          style={{ height: CONSOLE_BAR_H }}
        >
          {/* Left: toggle + status */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setConsoleOpen(o => !o)}
              className="flex items-center gap-1.5 font-mono text-xs text-base-content/40 hover:text-base-content/70 transition-colors duration-150"
            >
              <svg
                className={`w-3.5 h-3.5 transition-transform duration-200 ${consoleOpen ? 'rotate-180' : ''}`}
                fill="none" viewBox="0 0 24 24" stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
              </svg>
              Console
            </button>

            {!consoleOpen && runResult && (
              <span className={`px-2 py-0.5 rounded-full font-mono text-[10px] border
                ${runResult.success
                  ? 'bg-green-500/10 border-green-500/25 text-green-400'
                  : 'bg-red-500/10 border-red-500/25 text-red-400'
                }`}
              >
                {runResult.success ? '✓ Accepted' : '✗ Failed'}
              </span>
            )}
          </div>
        </div>

        {/* Console body */}
        {consoleOpen && (
          <div className="flex-1 overflow-hidden px-4 pb-3">
            <ConsoleContent
              problem={problem}
              runResult={runResult}
              loadingAction={loadingAction}
            />
          </div>
        )}
      </div>
    </div>
  );
}