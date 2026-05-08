const rows = [
  {
    key: 'easy',
    label: 'Easy',
    valueKey: 'easyCount',
    color: '#4ade80',
    bg: 'rgba(74,222,128,0.12)',
  },
  {
    key: 'medium',
    label: 'Medium',
    valueKey: 'mediumCount',
    color: '#facc15',
    bg: 'rgba(250,204,21,0.12)',
  },
  {
    key: 'hard',
    label: 'Hard',
    valueKey: 'hardCount',
    color: '#f87171',
    bg: 'rgba(248,113,113,0.12)',
  },
];

export default function DifficultyBreakdown({
  easyCount,
  mediumCount,
  hardCount,
  totalSolved,
}) {
  const values = {
    easyCount,
    mediumCount,
    hardCount,
  };

  return (
    <div className="rounded-2xl border border-base-content/8 bg-base-300/80 p-5">
      <div className="mb-5">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-base-content/30">
          Solved by Difficulty
        </p>

        <div className="mt-2 flex items-end justify-between">
          <h3 className="text-sm font-semibold">
            Problem difficulty split
          </h3>

          <div className="text-right">
            <div
              className="text-2xl font-bold"
              style={{ color: 'var(--green)' }}
            >
              {totalSolved}
            </div>

            <div className="text-[11px] text-base-content/30">
              solved
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        {rows.map((row) => {
          const value = values[row.valueKey];
          const pct =
            totalSolved > 0
              ? Math.round((value / totalSolved) * 100)
              : 0;

          return (
            <div key={row.key}>
              <div className="mb-2 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div
                    className="h-2.5 w-2.5 rounded-full"
                    style={{ background: row.color }}
                  />

                  <span className="text-sm font-medium">
                    {row.label}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <span
                    className="text-sm font-semibold"
                    style={{ color: row.color }}
                  >
                    {value}
                  </span>

                  <span className="text-xs text-base-content/35">
                    {pct}%
                  </span>
                </div>
              </div>

              <div
                className="h-2 overflow-hidden rounded-full"
                style={{ background: row.bg }}
              >
                <div
                  className="h-full rounded-full transition-all duration-500"
                  style={{
                    width: `${pct}%`,
                    background: row.color,
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}