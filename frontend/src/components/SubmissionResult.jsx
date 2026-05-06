import { useSelector } from "react-redux";

export default function SubmissionResultPanel() {

    const {submitResult, loadingAction} = useSelector((state) => state.problemDetail);

    if (loadingAction === 'submit') {
        return (
        <div className="flex flex-col items-center justify-center min-h-80 gap-4">
            <span className="loading loading-spinner loading-lg" />
            <p className="font-mono text-sm text-base-content/40">Judging your submission…</p>
        </div>
        );
    }

    if (!submitResult) {
        return (
        <div className="flex items-center justify-center min-h-70 font-mono text-xs text-base-content/25">
            Submit your code to see results
        </div>
        );
    }

    const ok = submitResult.accepted;

    return (
        <div className="flex flex-col gap-6">
        <div className="flex items-center justify-between">
            <span className="font-mono text-xs text-base-content/30 uppercase tracking-widest">
            Submission Result
            </span>
        </div>

        <div className="flex flex-col items-center justify-center px-2 py-4 gap-6">
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
        </div>
        </div>
    );
}