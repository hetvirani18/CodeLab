import { useNavigate } from 'react-router';
import { DIFF } from '../utils/constant';

// Calculate acceptance % from problem data
function calcAcceptance(problem) {
  if (!problem.totalSubmissions || problem.totalSubmissions === 0) return '—';
  return ((problem.acceptedSubmissions / problem.totalSubmissions) * 100).toFixed(1) + '%';
}

// Acceptance rate colour
function acceptanceColor(rate) {
  const n = parseFloat(rate);
  if (n >= 60) return 'text-green-400';
  if (n >= 40) return 'text-yellow-400';
  return 'text-red-400';
}

export default function ProblemRow({ problem, globalIndex, isSolved }) {
  const navigate = useNavigate();
  const diff = DIFF[problem.difficulty] ?? {
    label: problem.difficulty,
    badge: 'text-base-content/50 border-base-content/20 bg-base-content/5'
  };
  const acc = calcAcceptance(problem);

  return (
    <tr
      onClick={() => navigate(`/problem/${problem._id}`)}
      className="group border-b border-base-content/5 last:border-none
                 hover:bg-base-content/3 transition-colors duration-150 cursor-pointer"
    >
      {/* Status */}
      <td className="w-10 py-3.5 pl-5 pr-2">
        {isSolved ? (
          <span className="text-green-500 font-bold text-sm">✓</span>
        ) : (
          <span className="w-1.5 h-1.5 rounded-full bg-base-content/15 block mx-auto" />
        )}
      </td>

      {/* # + Title */}
      <td className="py-3.5 pr-4">
        <div className="flex items-center gap-2.5 min-w-0">
          <span className="font-mono text-xs text-base-content/25 shrink-0 w-5 text-right">
            {globalIndex}.
          </span>
          <span className="font-medium text-sm text-base-content group-hover:text-green-400 transition-colors duration-150 truncate">
            {problem.title}
          </span>
        </div>
      </td>

      {/* Tags */}
      <td className="py-3.5 pr-4 hidden md:table-cell">
        <div className="flex flex-wrap gap-1.5">
          {(problem.tags || []).slice(0, 2).map(tag => (
            <span
              key={tag}
              className="badge badge-sm rounded-md border-none bg-blue-500/10 text-blue-400 font-mono"
            >
              {tag}
            </span>
          ))}
        </div>
      </td>

      {/* Acceptance */}
      <td className="py-3.5 pr-4 hidden sm:table-cell">
        <span className={`font-mono text-xs ${acceptanceColor(acc)}`}>{acc}</span>
      </td>

      {/* Difficulty */}
      <td className="py-3.5 pr-4">
        <span className={`badge badge-sm badge-outline bg-transparent font-mono ${diff.badge}`}>
          {diff.label}
        </span>
      </td>

      {/* Arrow */}
      <td className="py-3.5 pr-5 text-right">
        <span className="text-base-content/20 group-hover:text-green-500 transition-colors duration-150 text-sm">→</span>
      </td>
    </tr>
  );
}