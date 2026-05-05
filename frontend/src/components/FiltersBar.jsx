import { DIFFICULTY_FILTERS, TAG_FILTER_ALL } from '../utils/constant';

export default function FiltersBar({
  filter,
  onFilter,
  search,
  onSearch,
  totalProblems,
  tagFilter,
  onTagFilter,
  tags,
  onClearFilters
}) {
  const hasActiveFilters = filter !== 'All' || search !== '' || tagFilter !== TAG_FILTER_ALL;

  return (
    <div className="flex flex-col gap-3 mb-5">
      {/* Difficulty buttons */}
      <div className="flex items-center gap-2 flex-wrap">
        {DIFFICULTY_FILTERS.map(f => (
          <button
            key={f}
            onClick={() => onFilter(f)}
            className={`px-3 py-1.5 rounded-lg text-xs font-mono border transition-colors duration-150
              ${filter === f
                ? 'bg-green-500/10 border-green-500/30 text-green-400'
                : 'bg-transparent border-base-content/8 text-base-content/40 hover:border-base-content/20 hover:text-base-content/70'
              }`}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Right side controls */}
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          {/* Tags dropdown */}
          <select
            value={tagFilter}
            onChange={(e) => onTagFilter(e.target.value)}
            className="select select-sm bg-base-200 border border-base-content/8 text-xs w-36
                       focus:outline-none focus:border-green-500/40 transition-colors duration-150"
          >
            <option value={TAG_FILTER_ALL}>{TAG_FILTER_ALL}</option>
            {tags.map((tag) => (
              <option key={tag} value={tag}>{tag}</option>
            ))}
          </select>

          {/* Search input */}
          <div className="relative">
            <svg className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-base-content/25" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              placeholder="Search problems…"
              value={search}
              onChange={e => onSearch(e.target.value)}
              className="input input-sm bg-base-200 border border-base-content/8 pl-8 pr-3 text-xs w-44
                         focus:outline-none focus:border-green-500/40 transition-colors duration-150"
            />
          </div>

          {/* Clear filters button (conditional) */}
          {hasActiveFilters && (
            <button
              onClick={onClearFilters}
              className="text-xs font-mono text-base-content/40 hover:text-green-400 transition-colors duration-150"
            >
              Clear
            </button>
          )}
        </div>

        {/* Problem count */}
        <span className="font-mono text-xs text-base-content/30 shrink-0">
          {totalProblems} problems
        </span>
      </div>
    </div>
  );
}