import { useSelector } from 'react-redux';

function ValueBox({ label, value }) {
  if (value === undefined || value === null || value === '') return null;

  return (
    <div className="flex flex-col gap-2">
      <p className="font-mono text-[10px] text-base-content/30 uppercase tracking-widest">
        {label}
      </p>

      <div className="rounded-xl border border-base-content/6 bg-base-300/60 px-4 py-3 font-mono text-sm leading-relaxed whitespace-pre-wrap break-all">
        {String(value)}
      </div>
    </div>
  );
}

const STATUS_CONFIG = {
  'Wrong Answer': {
    icon: '✗',
    color: 'text-red-400',
  },

  'Time Limit Exceeded': {
    icon: '⏱',
    color: 'text-yellow-400',
  },

  'Memory Limit Exceeded': {
    icon: '📦',
    color: 'text-yellow-400',
  },

  'Compile Error': {
    icon: '⚙',
    color: 'text-orange-400',
  },

  'Runtime Error': {
    icon: '💥',
    color: 'text-orange-400',
  },
};


export default function SubmissionResultPanel() {
  const { submitResult, loadingAction } = useSelector(
    (s) => s.problemDetail
  );


  if (loadingAction === 'submit') {
    return (
      <div className="flex h-full flex-col items-center justify-center gap-3 py-20">
        <span
          className="loading loading-spinner loading-lg"
          style={{ color: 'var(--green)' }}
        />

        <p className="font-mono text-sm text-base-content/35">
          Judging your submission…
        </p>

        <p className="font-mono text-xs text-base-content/20">
          Running against all test cases
        </p>
      </div>
    );
  }

  if (!submitResult) {
    return (
      <div className="flex h-full flex-col items-center justify-center gap-2 px-6 py-20 text-center">
        <svg
          className="mb-1 h-10 w-10 text-base-content/10"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>

        <p className="font-mono text-xs text-base-content/25">
          Submit your code to see results
        </p>
      </div>
    );
  }

  const accepted = submitResult.accepted;

  const errorType =
    submitResult.error || 'Wrong Answer';

  const config =
    STATUS_CONFIG[errorType] ||
    STATUS_CONFIG['Wrong Answer'];

  const showCodeError =
    !accepted &&
    submitResult.errorMessage &&
    ['Compile Error', 'Runtime Error'].includes(errorType);

  return (
    <div className="flex flex-col gap-4 pb-6">

      <div className="rounded-2xl border border-base-content/6 bg-base-300/60 p-7 text-center">
        <div className={`mb-2 text-3xl ${accepted ? 'text-green-400' : config.color}`}>
          {accepted ? '✓' : config.icon}
        </div>

        <h2
          className={`text-3xl font-bold ${
            accepted ? 'text-green-400' : config.color
          }`}
        >
          {accepted ? 'Accepted' : errorType}
        </h2>

        <p className="mt-2 text-sm text-base-content/40">
          {accepted
            ? 'Your solution passed all test cases 🎉'
            : `Passed ${submitResult.passedTestCases} of ${submitResult.totalTestCases} test cases`}
        </p>
      </div>

      <div className="rounded-2xl border border-base-content/6 bg-base-300/60 p-5">
        <div className="flex flex-col items-center justify-center gap-1">
          <span
            className={`font-mono text-3xl font-bold ${
              accepted ? 'text-green-400' : 'text-red-400'
            }`}
          >
            {submitResult.passedTestCases}/
            {submitResult.totalTestCases}
          </span>

          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-base-content/30">
            Test Cases
          </span>
        </div>

        {accepted && (
          <div className="mt-5 grid grid-cols-2 gap-3">
            <div className="rounded-xl border border-base-content/5 bg-base-200/60 p-4 text-center">
              <p className="font-mono text-[10px] uppercase tracking-widest text-base-content/30">
                Runtime
              </p>

              <p className="mt-1 font-mono text-sm text-green-400">
                {submitResult.runtime}s
              </p>
            </div>

            <div className="rounded-xl border border-base-content/5 bg-base-200/60 p-4 text-center">
              <p className="font-mono text-[10px] uppercase tracking-widest text-base-content/30">
                Memory
              </p>

              <p className="mt-1 font-mono text-sm text-green-400">
                {submitResult.memory} KB
              </p>
            </div>
          </div>
        )}
      </div>

      {!accepted && submitResult.failDetails && (
        <div className="rounded-2xl border border-base-content/6 bg-base-300/60 overflow-hidden">
          
          {/* Header */}
          <div className="flex items-center justify-between border-b border-base-content/5 px-5 py-3">
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-red-400" />

              <span className="font-mono text-[11px] uppercase tracking-widest text-base-content/40">
                Failed Case
              </span>
            </div>

            <span className="font-mono text-[11px] text-base-content/25">
              #{submitResult.failDetails.caseNumber}
            </span>
          </div>

          {/* Content */}
          <div className="flex flex-col gap-5 p-5">
            <ValueBox
              label="Input"
              value={submitResult.failDetails.input}
            />

            <ValueBox
              label="Expected Output"
              value={submitResult.failDetails.expectedOutput}
            />

            <ValueBox
              label="Your Output"
              value={submitResult.failDetails.userOutput}
            />
          </div>
        </div>
      )}

      {showCodeError && (
        <div className="rounded-2xl border border-orange-500/15 bg-base-300/60 overflow-hidden">
          
          <div className="border-b border-base-content/5 px-5 py-3">
            <span className="font-mono text-[11px] uppercase tracking-widest text-orange-400/80">
              {errorType}
            </span>
          </div>

          <div className="p-5">
            <pre className="whitespace-pre-wrap break-all font-mono text-xs leading-loose text-base-content/55">
              {submitResult.errorMessage}
            </pre>
          </div>
        </div>
      )}
    </div>
  );
}