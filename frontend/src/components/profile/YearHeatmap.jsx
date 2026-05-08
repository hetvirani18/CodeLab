import CalendarHeatmap from 'react-calendar-heatmap';
import 'react-calendar-heatmap/dist/styles.css';
import { Tooltip } from 'react-tooltip';

export default function YearHeatmap({ heatmap }) {
    const today = new Date();
    const start = new Date(today);
    start.setFullYear(start.getFullYear() - 1);

    const values = Object.entries(heatmap).map(([date, count]) => ({ date, count }));

    const totalDays = values.filter((v) => v.count > 0).length;
    const totalSubmits = values.reduce((s, v) => s + v.count, 0);

    return (
        <div className="rounded-xl border border-base-content/8 bg-base-300/80 p-5">
            <style>{`
        .react-calendar-heatmap .color-empty     { fill: rgba(255,255,255,0.04); }
        .react-calendar-heatmap .color-scale-1   { fill: rgba(0,230,118,0.2);  }
        .react-calendar-heatmap .color-scale-2   { fill: rgba(0,230,118,0.38); }
        .react-calendar-heatmap .color-scale-3   { fill: rgba(0,230,118,0.58); }
        .react-calendar-heatmap .color-scale-4   { fill: rgba(0,230,118,0.85); }
        .react-calendar-heatmap text             { fill: rgba(255,255,255,0.2); font-size: 9px; font-family: 'JetBrains Mono', monospace; }
        .react-calendar-heatmap rect             { rx: 2; }
      `}</style>

            <div className="flex items-center justify-between mb-4">
                <div>
                    <p className="font-mono text-xs text-base-content/30 uppercase tracking-widest mb-0.5">Activity</p>
                    <p className="text-sm font-semibold">{totalSubmits} submissions in the last year</p>
                </div>
                <div className="font-mono text-xs text-base-content/30">
                    {totalDays} active days
                </div>
            </div>

            <div className="heatmap-wrapper overflow-x-auto">
                <CalendarHeatmap
                    startDate={start}
                    endDate={today}
                    values={values}
                    classForValue={(value) => {
                        if (!value || value.count === 0) return 'color-empty';
                        if (value.count === 1) return 'color-scale-1';
                        if (value.count === 2) return 'color-scale-2';
                        if (value.count <= 4) return 'color-scale-3';
                        return 'color-scale-4';
                    }}
                    tooltipDataAttrs={(value) => ({
                        'data-tooltip-id': 'heatmap-tip',
                        'data-tooltip-content': value?.date
                            ? `${value.date}: ${value.count || 0} problem${value.count !== 1 ? 's' : ''} solved`
                            : 'No activity',
                    })}
                    showWeekdayLabels
                />
                <Tooltip id="heatmap-tip" />
            </div>

            <div className="mt-4 flex items-center justify-end gap-1.5">
                <span className="mr-1 text-[10px] font-mono text-base-content/35">
                    Less
                </span>

                {[
                    'rgba(255,255,255,0.03)',
                    'rgba(0,230,118,0.18)',
                    'rgba(0,230,118,0.35)',
                    'rgba(0,230,118,0.55)',
                    'rgba(0,230,118,0.85)',
                ].map((bg, i) => (
                    <div
                    key={i}
                    className="h-2.5 w-2.5 rounded-xs"
                    style={{ background: bg }}
                    />
                ))}

                <span className="ml-1 text-[10px] font-mono text-base-content/35">
                    More
                </span>
            </div>
        </div>
    );
}
