import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router';
import { fetchProblems } from '../../store/problemSlice';
import Pagination from '../Pagination';
import axiosClient from '../../utils/axiosClient';
import toast from 'react-hot-toast';

const DIFF = {
  easy:   'text-green-400  bg-green-500/8   border-green-500/25',
  medium: 'text-yellow-400 bg-yellow-500/8  border-yellow-500/25',
  hard:   'text-red-400    bg-red-500/8     border-red-500/25',
};

// ── Confirm modal ──
function ConfirmModal({ problem, onConfirm, onCancel, loading }) {
  if (!problem) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onCancel} />
      <div
        className="relative z-10 w-full max-w-sm rounded-2xl border border-red-500/20 bg-base-200 p-6"
        style={{ boxShadow: '0 0 40px rgba(255,70,70,0.1), 0 20px 60px rgba(0,0,0,0.5)' }}
      >
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-px rounded-full"
          style={{ background: 'linear-gradient(90deg, transparent, rgba(255,70,70,0.5), transparent)' }}
        />
        <div className="text-center mb-5">
          <div className="text-4xl mb-3">🗑️</div>
          <h3 className="text-lg font-bold mb-1">Delete Video</h3>
          <p className="text-sm text-base-content/50 leading-relaxed">
            Delete the editorial video for{' '}
            <span className="text-base-content/80 font-semibold">"{problem.title}"</span>?
            This cannot be undone.
          </p>
        </div>
        <div className="flex gap-2">
          <button onClick={onCancel} disabled={loading}
            className="flex-1 btn btn-ghost border border-base-content/10 font-mono text-xs">
            Cancel
          </button>
          <button onClick={onConfirm} disabled={loading}
            className="flex-1 btn border-none font-mono text-xs font-bold text-white bg-red-500 hover:bg-red-400 disabled:opacity-50">
            {loading ? <span className="loading loading-spinner loading-xs" /> : 'Delete →'}
          </button>
        </div>
      </div>
    </div>
  );
}

function SkeletonRow() {
  return (
    <tr className="border-b border-base-content/5">
      <td className="py-3.5 pl-5"><div className="h-4 w-5 bg-base-content/8 rounded animate-pulse" /></td>
      <td className="py-3.5"><div className="h-4 w-48 bg-base-content/8 rounded animate-pulse" /></td>
      <td className="py-3.5"><div className="h-5 w-16 bg-base-content/8 rounded-full animate-pulse" /></td>
      <td className="py-3.5 hidden md:table-cell"><div className="h-5 w-20 bg-base-content/8 rounded-full animate-pulse" /></td>
      <td className="py-3.5 pr-5"><div className="flex gap-2 justify-end"><div className="h-7 w-20 bg-base-content/8 rounded-lg animate-pulse" /><div className="h-7 w-16 bg-base-content/8 rounded-lg animate-pulse" /></div></td>
    </tr>
  );
}

export default function AdminVideo() {
  const dispatch = useDispatch();
  const { list, totalPages, currentPage, loading } = useSelector((s) => s.problems);

  const [toDelete, setToDelete] = useState(null);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => { dispatch(fetchProblems(1)); }, [dispatch]);

  const handlePageChange = (page) => {
    dispatch(fetchProblems(page));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleConfirmDelete = async () => {
    if (!toDelete) return;
    setDeleting(true);
    try {
      await axiosClient.delete(`/video/delete/${toDelete._id}`);
      toast.success(`Video for "${toDelete.title}" deleted`);
      setToDelete(null);
      dispatch(fetchProblems(currentPage));
    } catch (err) {
      toast.error(err.response?.data?.message || 'Failed to delete video');
    } finally {
      setDeleting(false);
    }
  };

  return (
    <>
      <ConfirmModal
        problem={toDelete}
        onConfirm={handleConfirmDelete}
        onCancel={() => setToDelete(null)}
        loading={deleting}
      />

      <div className="flex flex-col gap-5">
        <div>
          <p className="font-mono text-xs text-blue-400 uppercase tracking-widest mb-0.5">// editorial videos</p>
          <h1 className="text-xl font-bold">Manage Videos</h1>
          <p className="text-sm text-base-content/35 mt-0.5">Upload or delete editorial videos for each problem.</p>
        </div>

        <div
          className="rounded-xl border border-base-content/8 overflow-hidden bg-base-100"
          style={{ boxShadow: '0 4px 24px rgba(0,0,0,0.15)' }}
        >
          <div className="flex items-center justify-between px-5 py-2.5 border-b border-base-content/6 bg-base-content/2">
            <span className="font-mono text-xs text-base-content/30">Page {currentPage} of {totalPages}</span>
            <span className="font-mono text-xs text-base-content/25">{list.length} problems on this page</span>
          </div>

          <table className="w-full">
            <thead>
              <tr className="border-b border-base-content/6">
                <th className="py-2.5 pl-5 pr-2 text-left font-mono text-[10px] text-base-content/25 uppercase tracking-widest w-8">#</th>
                <th className="py-2.5 pr-4 text-left font-mono text-[10px] text-base-content/25 uppercase tracking-widest">Title</th>
                <th className="py-2.5 pr-4 text-left font-mono text-[10px] text-base-content/25 uppercase tracking-widest">Diff.</th>
                <th className="py-2.5 pr-4 text-left font-mono text-[10px] text-base-content/25 uppercase tracking-widest hidden md:table-cell">Tags</th>
                <th className="py-2.5 pr-5 text-right font-mono text-[10px] text-base-content/25 uppercase tracking-widest">Actions</th>
              </tr>
            </thead>
            <tbody>
              {loading
                ? Array(10).fill(0).map((_, i) => <SkeletonRow key={i} />)
                : list.length === 0
                  ? (
                    <tr><td colSpan={5} className="py-16 text-center">
                      <p className="font-mono text-sm text-base-content/25">No problems found.</p>
                    </td></tr>
                  )
                  : list.map((problem, i) => {
                    const diff = DIFF[problem.difficulty?.toLowerCase()] ?? '';
                    return (
                      <tr key={problem._id}
                        className="group border-b border-base-content/5 last:border-none hover:bg-base-content/2 transition-colors duration-150">
                        <td className="py-3.5 pl-5 pr-2 font-mono text-xs text-base-content/25">
                          {(currentPage - 1) * 10 + i + 1}
                        </td>
                        <td className="py-3.5 pr-4 text-sm font-medium text-base-content/80">{problem.title}</td>
                        <td className="py-3.5 pr-4">
                          <span className={`badge badge-sm badge-outline bg-transparent font-mono capitalize ${diff}`}>
                            {problem.difficulty}
                          </span>
                        </td>
                        <td className="py-3.5 pr-4 hidden md:table-cell">
                          <div className="flex flex-wrap gap-1">
                            {(problem.tags || []).slice(0, 2).map((tag) => (
                              <span key={tag} className="badge badge-sm rounded-md border-none bg-blue-500/10 text-blue-400 font-mono">{tag}</span>
                            ))}
                            {(problem.tags || []).length > 2 && (
                              <span className="font-mono text-[10px] text-base-content/25">+{problem.tags.length - 2}</span>
                            )}
                          </div>
                        </td>
                        <td className="py-3.5 pr-5">
                          <div className="flex items-center gap-2 justify-end">
                            <NavLink
                              to={`/admin/upload/${problem._id}`}
                              className="px-3 py-1.5 rounded-lg font-mono text-xs border border-blue-500/25 bg-blue-500/8 text-blue-400
                                         hover:bg-blue-500/15 transition-colors duration-150"
                            >
                              Upload
                            </NavLink>
                            <button
                              onClick={() => setToDelete(problem)}
                              className="px-3 py-1.5 rounded-lg font-mono text-xs border border-red-500/20 bg-red-500/5 text-red-400/60
                                         hover:bg-red-500/10 hover:border-red-500/35 hover:text-red-400 transition-all duration-150"
                            >
                              Delete
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  })
              }
            </tbody>
          </table>
        </div>

        {!loading && (
          <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
        )}
      </div>
    </>
  );
}