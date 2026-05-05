import { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { fetchProblems, fetchSolvedProblems } from '../store/problemSlice';
import ActivityPanel from '../components/ActivityPanel';
import Navbar from '../components/Navbar';
import ProblemRow from '../components/ProblemRow';
import SkeletonRow from '../components/Skeletons/SkeletonRow';
import FiltersBar from '../components/FiltersBar';
import Pagination from '../components/Pagination';
import { TAG_FILTER_ALL } from '../utils/constant';
import Footer from '../components/Footer';

export default function ProblemSet() {
  const dispatch = useDispatch();
  const { list, solvedIds, totalProblems, totalPages, currentPage, loading } = useSelector(state => state.problems);
  const [filter, setFilter] = useState('All');
  const [search, setSearch] = useState('');
  const [tagFilter, setTagFilter] = useState(TAG_FILTER_ALL);
  const [showActivity, setShowActivity] = useState(false); // for mobile

  // Extract unique tags from current page problems
  const tags = useMemo(() => {
    const set = new Set();
    list.forEach(p => (p.tags || []).forEach(t => set.add(t)));
    return Array.from(set).sort((a, b) => a.localeCompare(b));
  }, [list]);

  // Fetch on page change
  useEffect(() => {
    dispatch(fetchProblems(currentPage));
    dispatch(fetchSolvedProblems());
  }, [dispatch, currentPage]);

  const handlePageChange = (page) => {
    dispatch(fetchProblems(page));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const clearFilters = () => {
    setFilter('All');
    setSearch('');
    setTagFilter(TAG_FILTER_ALL);
  };

  // Client-side filter + search (within current page)
  const visible = list.filter(p => {
    const matchDiff = filter === 'All' || p.difficulty === filter.toLowerCase();
    const matchSearch = p.title.toLowerCase().includes(search.toLowerCase());
    const matchTag = tagFilter === TAG_FILTER_ALL || (p.tags || []).includes(tagFilter);
    return matchDiff && matchSearch && matchTag;
  });

  const solvedSet = new Set(solvedIds);
  const solvedCountOnPage = list.filter(p => solvedSet.has(p._id)).length;
  const offset = (currentPage - 1) * 10;

  return (
    <div className='min-h-screen flex flex-col bg-base-300'>
      <Navbar />

      <div className="min-h-screen bg-base-300">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-150 h-50 blur-[120px] pointer-events-none"
          style={{ background: 'rgba(0,230,118,0.04)' }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 relative z-10">
          {/* Page heading */}
          <div className="mb-8">
            <h1 className="text-2xl lg:text-3xl font-bold">Problem Set</h1>
            <p className="text-base-content/40 text-sm mt-1">
              Practice real interview problems. Filter, search, solve.
            </p>
          </div>

          {/* 2-col layout */}
          <div className="flex flex-col lg:flex-row gap-6 items-start w-full">
            {/* LEFT: Problem table */}
            <div className="w-full lg:flex-1">
              <FiltersBar
                filter={filter}
                onFilter={setFilter}
                search={search}
                onSearch={setSearch}
                totalProblems={totalProblems}
                tagFilter={tagFilter}
                onTagFilter={setTagFilter}
                tags={tags}
                onClearFilters={clearFilters}
              />

              {/* Table with horizontal scroll on small screens */}
              <div className="overflow-x-auto rounded-2xl border border-base-content/8 bg-base-300/80">
                <table className="w-full border-collapse">
                  {/* Summary strip inside table? We'll put it as a separate element above the table for cleaner code */}
                  <thead>
                    <tr className="border-b border-base-content/6">
                      <th className="w-10 py-2.5 pl-5 pr-2 text-left font-mono text-[10px] text-base-content/25 uppercase tracking-widest">St.</th>
                      <th className="py-2.5 pr-4 text-left font-mono text-[10px] text-base-content/25 uppercase tracking-widest pl-9">Title</th>
                      <th className="py-2.5 pr-4 text-left font-mono text-[10px] text-base-content/25 uppercase tracking-widest hidden md:table-cell">Tags</th>
                      <th className="py-2.5 pr-4 text-left font-mono text-[10px] text-base-content/25 uppercase tracking-widest hidden sm:table-cell">Acc.</th>
                      <th className="py-2.5 pr-4 text-left font-mono text-[10px] text-base-content/25 uppercase tracking-widest">Diff.</th>
                      <th className="py-2.5 pr-5" />
                    </tr>
                  </thead>
                  <tbody>
                    {loading ? (
                      Array(10).fill(0).map((_, i) => <SkeletonRow key={i} />)
                    ) : visible.length === 0 ? (
                      <tr>
                        <td colSpan={6} className="py-16 text-center">
                          <p className="text-base-content/30 font-mono text-sm">No problems found.</p>
                        </td>
                      </tr>
                    ) : (
                      visible.map((problem, i) => (
                        <ProblemRow
                          key={problem._id}
                          problem={problem}
                          globalIndex={offset + i + 1}
                          isSolved={solvedSet.has(problem._id)}
                        />
                      ))
                    )}
                  </tbody>
                </table>

                {/* Summary strip below (or above) table – show solved count for the page */}
                <div className="flex items-center justify-between px-5 py-2.5 border-t border-base-content/6 bg-base-content/2">
                  <span className="flex items-center gap-1.5 text-xs font-mono text-base-content/35">
                    <span className="text-green-500 font-bold">✓</span>
                    {solvedCountOnPage} solved on this page
                  </span>
                  <span className="font-mono text-xs text-base-content/25">
                    Page {currentPage} of {totalPages}
                  </span>
                </div>
              </div>

              {/* Pagination */}
              {!loading && (
                <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={handlePageChange}
                />
              )}
            </div>

            {/* RIGHT: Activity sidebar */}
            <div className="w-full lg:w-72 xl:w-80 shrink-0">
              {/* Toggle button - visible on all screens */}
              <button
                onClick={() => setShowActivity(!showActivity)}
                className="w-full mb-3 py-2 rounded-lg border border-base-content/8 bg-base-300/80 
                          text-sm font-mono text-base-content/60 hover:text-green-400 
                          transition-colors flex items-center justify-center gap-1"
              >
                {showActivity ? 'Hide Activity ▲' : 'Show Activity ▼'}
              </button>

              {/* ActivityPanel rendered only when visible */}
              {showActivity && <ActivityPanel />}
            </div>
          </div>
        </div>
      </div>
      
      <Footer />

    </div>
  );
}