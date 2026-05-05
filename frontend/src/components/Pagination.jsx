export default function Pagination({ currentPage, totalPages, onPageChange }) {
  if (totalPages <= 1) return null;

  const pages = [];
  const delta = 2;
  const left = Math.max(1, currentPage - delta);
  const right = Math.min(totalPages, currentPage + delta);

  if (left > 1) {
    pages.push(1);
    if (left > 2) pages.push('...');
  }
  for (let i = left; i <= right; i++) pages.push(i);
  if (right < totalPages) {
    if (right < totalPages - 1) pages.push('...');
    pages.push(totalPages);
  }

  return (
    <div className="flex items-center justify-center gap-1.5 pt-6">
      {/* Previous */}
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="w-8 h-8 rounded-lg border border-base-content/8 bg-base-200
                   flex items-center justify-center text-sm text-base-content/40
                   hover:border-green-500/30 hover:text-green-400
                   disabled:opacity-30 disabled:cursor-not-allowed transition-colors duration-150"
      >
        ‹
      </button>

      {pages.map((p, i) =>
        p === '...' ? (
          <span key={`dot-${i}`} className="w-8 h-8 flex items-center justify-center font-mono text-xs text-base-content/25">
            …
          </span>
        ) : (
          <button
            key={p}
            onClick={() => onPageChange(p)}
            className={`w-8 h-8 rounded-lg border font-mono text-xs transition-colors duration-150
              ${currentPage === p
                ? 'border-green-500/40 bg-green-500/10 text-green-400'
                : 'border-base-content/8 bg-base-200 text-base-content/50 hover:border-green-500/30 hover:text-green-400'
              }`}
          >
            {p}
          </button>
        )
      )}

      {/* Next */}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="w-8 h-8 rounded-lg border border-base-content/8 bg-base-200
                   flex items-center justify-center text-sm text-base-content/40
                   hover:border-green-500/30 hover:text-green-400
                   disabled:opacity-30 disabled:cursor-not-allowed transition-colors duration-150"
      >
        ›
      </button>
    </div>
  );
}