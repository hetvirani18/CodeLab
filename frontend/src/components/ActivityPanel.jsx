import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserActivity } from '../store/activitySlice';
import { Flame } from 'lucide-react';

// ── Build this month's calendar grid ──
function buildMonthGrid() {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth();

  const firstDay = new Date(year, month, 1).getDay(); // 0=Sun
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const todayDate = now.getDate();

  // leading empty cells
  const cells = Array(firstDay).fill(null);

  for (let d = 1; d <= daysInMonth; d++) {
    const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(d).padStart(2, '0')}`;
    cells.push({ day: d, dateStr, isPast: d < todayDate, isToday: d === todayDate });
  }

  return cells;
}

const MONTH_NAMES = ['January','February','March','April','May','June','July','August','September','October','November','December'];
const DAY_LABELS  = ['Su','Mo','Tu','We','Th','Fr','Sa'];

export default function ActivityPanel() {
  const dispatch = useDispatch();
  const { heatmap, streak, todaySolved, totalSolved } = useSelector((state) => state.activity);
  const [tooltip, setTooltip] = useState({ visible: false, text: '', x: 0, y: 0 });
  useEffect(() => { dispatch(fetchUserActivity()); }, [dispatch]);

  const cells = buildMonthGrid();
  const now   = new Date();

  // Stats for this month
  const monthPrefix = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}`;
  const thisMonthSolved = Object.entries(heatmap)
    .filter(([date]) => date.startsWith(monthPrefix))
    .reduce((sum, [, count]) => sum + count, 0);

  const hideTooltip = () => {
    setTooltip((prev) => ({ ...prev, visible: false }));
  };

  return (
    <div className="min-w-70 ">

      {/* ── This month heatmap ── */}
      <div className="rounded-xl border border-base-content/8 bg-base-300/80 p-5">
        <div className="flex items-center justify-between mb-4">
          <div>
            <p className="font-mono text-xs text-base-content/30 uppercase tracking-widest mb-0.5">
              Activity
            </p>
            <p className="text-sm font-semibold">{MONTH_NAMES[now.getMonth()]} {now.getFullYear()}</p>
          </div>
          <div className="text-right">
            <p className="font-mono text-xl font-bold" style={{ color: 'var(--green)' }}>{thisMonthSolved}</p>
            <p className="text-xs text-base-content/30">this month</p>
          </div>
        </div>

        {/* Day-of-week labels */}
        <div className="grid grid-cols-7 mb-1">
          {DAY_LABELS.map(d => (
            <div key={d} className="text-center font-mono text-[9px] text-base-content/25">{d}</div>
          ))}
        </div>

        {/* Calendar cells */}
        <div className="grid grid-cols-7 gap-1 relative">
          {tooltip.visible && (
            <div
              className="absolute z-10 -translate-x-1/2 -translate-y-full rounded-md border border-base-content/20 bg-base-200/95 px-2 py-1 text-[10px] font-mono text-base-content/80 shadow-lg"
              style={{ left: tooltip.x, top: tooltip.y }}
            >
              {tooltip.text}
            </div>
          )}
          {cells.map((cell, i) => {
            if (!cell) return <div key={`empty-${i}`} />;

            const count  = heatmap[cell.dateStr] || 0;
            const solved = count > 0;

            let bg, border, textColor;

            if (cell.isToday) {
              bg      = solved ? 'rgba(0,230,118,0.25)' : 'rgba(0,230,118,0.06)';
              border  = solved ? 'rgba(0,230,118,0.5)' : 'rgba(0,230,118,0.25)';
              textColor = 'var(--green)';
            } else if (solved) {
              // shade by count: 1=light, 2=mid, 3+=strong
              const alpha = Math.min(0.15 + count * 0.12, 0.6);
              bg      = `rgba(0,230,118,${alpha})`;
              border  = 'rgba(0,230,118,0.3)';
              textColor = count >= 3 ? '#fff' : 'rgba(230,237,243,0.8)';
            } else {
              bg      = 'rgba(255,255,255,0.03)';
              border  = 'rgba(255,255,255,0.06)';
              textColor = 'rgba(230,237,243,0.2)';
            }

            return (
              <div
                key={cell.dateStr}
                className="aspect-square rounded-md flex items-center justify-center font-mono text-[10px] cursor-default transition-all duration-150"
                style={{ background: bg, border: `1px solid ${border}`, color: textColor, fontWeight: cell.isToday ? '700' : '400' }}
                onMouseEnter={(event) => {
                    const rect = event.currentTarget.getBoundingClientRect();
                    const parentRect = event.currentTarget.parentElement?.getBoundingClientRect();
                    if (!parentRect) return;

                    setTooltip({
                        visible: true,
                        text: `${count}`,
                        x: rect.left - parentRect.left + rect.width / 2,
                        y: rect.top - parentRect.top
                    });
                }}
                onMouseLeave={hideTooltip}
              >
                {cell.day}
              </div>
            );
          })}
        </div>

        {/* Legend */}
        <div className="flex items-center gap-1.5 mt-3 justify-end">
          <span className="text-[10px] text-base-content/25 font-mono">less</span>
          {[0.06, 0.2, 0.35, 0.5].map((a, i) => (
            <div
              key={i}
              className="w-3 h-3 rounded-sm"
              style={{ background: `rgba(0,230,118,${a})`, border: '1px solid rgba(0,230,118,0.2)' }}
            />
          ))}
          <span className="text-[10px] text-base-content/25 font-mono">more</span>
        </div>
      </div>

      {/* ── Stats card ── */}
      <div className="rounded-xl border border-base-content/8 bg-base-300/80 p-5">
        <p className="font-mono text-xs text-base-content/30 uppercase tracking-widest mb-4">Stats</p>
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <span className="text-sm text-base-content/50">Total solved</span>
            <span className="font-mono text-sm font-bold" style={{ color: 'var(--green)' }}>{totalSolved}</span>
          </div>
          <div className="w-full h-px bg-base-content/6" />
          <div className="flex items-center justify-between">
            <span className="text-sm text-base-content/50">Active days</span>
            <span className="font-mono text-sm font-bold text-base-content/60">
              {Object.keys(heatmap).length}
            </span>
          </div>
          <div className="w-full h-px bg-base-content/6" />
          <div className="flex items-center justify-between">
            <span className="text-sm text-base-content/50">Best streak</span>
            <span className="font-mono text-sm font-bold text-orange-400">{streak} 🔥</span>
          </div>
        </div>
      </div>

    </div>
  );
}