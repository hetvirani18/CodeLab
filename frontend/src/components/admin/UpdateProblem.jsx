import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import axiosClient from '../../utils/axiosClient';
import toast from 'react-hot-toast';

// ── Constants ──
const DIFF_STYLES = {
  easy:   'text-green-400  bg-green-500/8   border-green-500/25',
  medium: 'text-yellow-400 bg-yellow-500/8  border-yellow-500/25',
  hard:   'text-red-400    bg-red-500/8     border-red-500/25',
};

// ─────────────────────────────────────────
// Problem picker
// ─────────────────────────────────────────
function ProblemPicker({ onSelect }) {
  const [query,    setQuery]    = useState('');
  const [results,  setResults]  = useState([]);
  const [loading,  setLoading]  = useState(false);
  const [page,     setPage]     = useState(1);
  const [total,    setTotal]    = useState(1);

  const fetchPage = async (p, q) => {
    setLoading(true);
    try {
      const { data } = await axiosClient.get(`/problem/all-problems?page=${p}`);
      const filtered = q
        ? data.problems.filter((pr) => pr.title.toLowerCase().includes(q.toLowerCase()))
        : data.problems;
      setResults(filtered);
      setTotal(data.totalPages);
    } catch {
      toast.error('Failed to load problems');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchPage(1, ''); }, []);

  const handleSearch = (e) => {
    setQuery(e.target.value);
    setPage(1);
    fetchPage(1, e.target.value);
  };

  const handlePage = (p) => {
    setPage(p);
    fetchPage(p, query);
  };

  return (
    <div className="flex flex-col gap-4">
      <p className="font-mono text-xs text-yellow-400 uppercase tracking-widest mb-0.5">// update problem</p>
      <h1 className="text-xl font-bold">Update Problem</h1>
      <p className="text-sm text-base-content/35">Search for a problem to edit.</p>

      {/* Search */}
      <div className="relative">
        <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-base-content/25" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <input
          type="text"
          value={query}
          onChange={handleSearch}
          placeholder="Search problems…"
          className="input bg-base-200 w-full text-sm border border-base-content/10 pl-9 focus:outline-none focus:border-green-500/50 transition-colors duration-150"
        />
      </div>

      {/* List */}
      <div className="rounded-xl border border-base-content/8 overflow-hidden bg-base-100">
        {loading ? (
          <div className="flex justify-center py-12">
            <span className="loading loading-spinner loading-md" style={{ color: 'var(--green)' }} />
          </div>
        ) : results.length === 0 ? (
          <div className="py-12 text-center font-mono text-sm text-base-content/25">No problems found.</div>
        ) : (
          <table className="w-full">
            <thead>
              <tr className="border-b border-base-content/6">
                <th className="py-2.5 pl-5 pr-2 text-left font-mono text-[10px] text-base-content/25 uppercase tracking-widest w-8">#</th>
                <th className="py-2.5 pr-4 text-left font-mono text-[10px] text-base-content/25 uppercase tracking-widest">Title</th>
                <th className="py-2.5 pr-4 text-left font-mono text-[10px] text-base-content/25 uppercase tracking-widest">Diff.</th>
                <th className="py-2.5 pr-5 text-right font-mono text-[10px] text-base-content/25 uppercase tracking-widest"></th>
              </tr>
            </thead>
            <tbody>
              {results.map((p, i) => {
                const diff = DIFF_STYLES[p.difficulty?.toLowerCase()] ?? '';
                return (
                  <tr
                    key={p._id}
                    className="group border-b border-base-content/5 last:border-none hover:bg-base-content/2 transition-colors duration-150"
                  >
                    <td className="py-3 pl-5 pr-2 font-mono text-xs text-base-content/25">{i + 1}</td>
                    <td className="py-3 pr-4 text-sm font-medium text-base-content/80">{p.title}</td>
                    <td className="py-3 pr-4">
                      <span className={`badge badge-sm badge-outline bg-transparent font-mono capitalize ${diff}`}>
                        {p.difficulty}
                      </span>
                    </td>
                    <td className="py-3 pr-5 text-right">
                      <button
                        onClick={() => onSelect(p._id)}
                        className="px-3 py-1.5 rounded-lg font-mono text-xs border border-yellow-500/25 bg-yellow-500/8 text-yellow-400
                                   hover:bg-yellow-500/15 transition-colors duration-150"
                      >
                        Edit →
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>

      {/* Simple pagination */}
      {total > 1 && (
        <div className="flex items-center justify-center gap-1.5">
          <button
            onClick={() => handlePage(page - 1)}
            disabled={page === 1}
            className="w-8 h-8 rounded-lg border border-base-content/8 bg-base-200 text-sm text-base-content/40
                       hover:border-yellow-500/30 hover:text-yellow-400 disabled:opacity-30 disabled:cursor-not-allowed transition-colors duration-150"
          >
            ‹
          </button>
          {Array.from({ length: total }, (_, i) => i + 1).map((p) => (
            <button
              key={p}
              onClick={() => handlePage(p)}
              className={`w-8 h-8 rounded-lg border font-mono text-xs transition-colors duration-150
                ${page === p
                  ? 'border-yellow-500/40 bg-yellow-500/10 text-yellow-400'
                  : 'border-base-content/8 bg-base-200 text-base-content/40 hover:border-yellow-500/30 hover:text-yellow-400'
                }`}
            >
              {p}
            </button>
          ))}
          <button
            onClick={() => handlePage(page + 1)}
            disabled={page === total}
            className="w-8 h-8 rounded-lg border border-base-content/8 bg-base-200 text-sm text-base-content/40
                       hover:border-yellow-500/30 hover:text-yellow-400 disabled:opacity-30 disabled:cursor-not-allowed transition-colors duration-150"
          >
            ›
          </button>
        </div>
      )}
    </div>
  );
}

export default function UpdateProblem() {
  const navigate = useNavigate();

  return <ProblemPicker onSelect={(id) => navigate(`/admin/update/${id}`)} />;
}