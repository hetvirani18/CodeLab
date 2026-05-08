import { useEffect, useState } from 'react';
import axiosClient from '../../utils/axiosClient';
import { DIFF } from '../../utils/constant';

const STATUS = {
  accepted: { label: 'Accepted', color: 'text-green-400  bg-green-500/8   border-green-500/25' },
  wrong: { label: 'Wrong Answer', color: 'text-red-400    bg-red-500/8     border-red-500/25' },
  tle: { label: 'TLE', color: 'text-yellow-400 bg-yellow-500/8  border-yellow-500/25' },
  compile_error: { label: 'Compile Error', color: 'text-red-400 bg-red-500/8 border-red-500/25' },
  runtime_error: { label: 'Runtime Error', color: 'text-red-400 bg-red-500/8 border-red-500/25' },
  mle: { label: 'MLE', color: 'text-red-400 bg-red-500/8 border-red-500/25' },
  error: { label: 'Error', color: 'text-red-400 bg-red-500/8 border-red-500/25' },
};

export default function RecentSubmissions({ items, loading: externalLoading, error: externalError }) {
  const [submissions, setSubmissions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (items) {
      setSubmissions(items);
      setLoading(false);
      setError(null);
      return undefined;
    }

    let active = true;
    axiosClient.get('/submission/user-submissions?limit=10')
      .then(({ data }) => {
        if (!active) return;
        const list = Array.isArray(data) ? data : data?.submissions || [];
        setSubmissions(list);
      })
      .catch(() => {
        if (!active) return;
        setError('Failed to load submissions');
      })
      .finally(() => {
        if (!active) return;
        setLoading(false);
      });

    return () => { active = false; };
  }, [items]);

  const fmtDate = (d) => new Date(d).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });

  if (externalLoading ?? loading) {
    return (
      <div className="flex flex-col gap-2">
        {Array(5).fill(0).map((_, i) => (
          <div key={i} className="h-12 rounded-xl bg-base-content/5 animate-pulse" />
        ))}
      </div>
    );
  }

  if (externalError || error) {
    return (
      <div className="py-10 text-center font-mono text-sm text-base-content/30">
        {externalError || error}
      </div>
    );
  }

  if (submissions.length === 0) {
    return (
      <div className="py-10 text-center font-mono text-sm text-base-content/25">
        No submissions yet — go solve something!
      </div>
    );
  }

  return (
    <div className="flex flex-col">
      {submissions.map((sub, i) => {
        const st = STATUS[sub.status] ?? { label: sub.status, color: 'text-base-content/40 bg-base-content/5 border-base-content/10' };
        const diff = DIFF[sub.problemId?.difficulty?.toLowerCase()];
        return (
          <div
            key={sub._id || i}
            className="flex items-center justify-between py-3 border-b border-base-content/5 last:border-none"
          >
            <div className="flex items-center gap-3 min-w-0">
              <span className={`badge badge-sm badge-outline bg-transparent font-mono shrink-0 ${st.color}`}>
                {st.label}
              </span>
              <span className="text-sm text-base-content/70 truncate">
                {sub.problemId?.title || 'Unknown Problem'}
              </span>
            </div>
            <div className="flex items-center gap-3 shrink-0 ml-4">
              {diff && (
                <span className={`font-mono text-[10px] ${diff.color} hidden sm:block`}>
                  {diff.label}
                </span>
              )}
              <span className="font-mono text-xs text-base-content/25">
                {fmtDate(sub.createdAt)}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
