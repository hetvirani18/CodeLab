import { Flame } from 'lucide-react';

export default function StreakBadge({ streak, todaySolved }) {
  const active = todaySolved;

  return (
    <div className="relative group hover:bg-base-content/10 rounded-md">
      
        <div className="flex items-center gap-1 px-2 py-1 rounded-md bg-base-200/40">
            <Flame
            className={`w-5 h-5 ${
                active ? "text-orange-400" : "text-base-content/30"
            }`}
            />
            <span
            className={`text-lg font-mono font-semibold ${
                active ? "text-orange-400" : "text-base-content/40"
            }`}
            >
            {streak}
            </span>
        </div>

        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 px-4 py-3 rounded-xl border border-base-content/10 bg-base-200 text-xs opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-150 whitespace-nowrap z-50 shadow-lg">
            <div className="font-semibold text-orange-400 text-sm">
                {streak} Streaks
            </div>
            <div className="text-base-content/50 text-base mt-0.5">
                {active
                ? "You're on track, keep going!"
                : "Solve today to keep it alive"}
            </div>

        </div>
    </div>
  );
}