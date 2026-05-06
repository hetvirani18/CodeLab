import SubmissionHistory from './SubmissionHistory';
import ChatAI from './ChatAI';
import Editorial from './Editorial';
import DescriptionPanel from './DescriptionPanel';
import SolutionsPanel from './SolutionsPanel';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';

const TABS = [
  { id: 'description', label: 'Description' },
  { id: 'editorial',   label: 'Editorial'   },
  { id: 'solutions',   label: 'Solutions'   },
  { id: 'submissions', label: 'Submissions' },
  { id: 'chatAI',      label: 'AI Chat'     },
];

export default function LeftPanel() {
  const [activeLeftTab, setActiveLeftTab] = useState('description');
  const { problem } = useSelector((state) => state.problemDetail);
  const { problemId } = useParams();

  return (
    <div className="w-1/2 flex flex-col border-r border-base-content/[0.07] bg-base-100">

      {/* ── Tab bar ── */}
      <div className="flex items-end gap-0 px-4 border-b border-base-content/[0.07] bg-base-200 overflow-x-auto shrink-0">
        {TABS.map((tab) => {
          const active = activeLeftTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveLeftTab(tab.id)}
              className={`px-3.5 py-2.5 text-sm font-medium border-b-2 whitespace-nowrap transition-colors duration-150
                ${active
                  ? 'border-green-500 text-green-400'
                  : 'border-transparent text-base-content/40 hover:text-base-content/70'
                }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* ── Content ── */}
      <div className="flex-1 overflow-y-auto">

        {/* Loading skeleton */}
        {!problem && (
          <div className="p-6 flex flex-col gap-4">
            <div className="h-7 w-2/3 bg-base-content/8 rounded-lg animate-pulse" />
            <div className="h-4 w-1/4 bg-base-content/5 rounded-lg animate-pulse" />
            <div className="h-px bg-base-content/5 my-1" />
            <div className="flex flex-col gap-2">
              {[1,0.9,1,0.7,0.85,0.6].map((w, i) => (
                <div key={i} className={`h-3 bg-base-content/5 rounded animate-pulse`} style={{ width: `${w * 100}%` }} />
              ))}
            </div>
          </div>
        )}

        {problem && (
          <div className="p-5">

            {activeLeftTab === 'description' && (
              <DescriptionPanel problem={problem} />
            )}

            {activeLeftTab === 'editorial' && (
                <Editorial
                  secureUrl={problem?.secureUrl}
                  thumbnailUrl={problem?.thumbnailUrl}
                  duration={problem?.duration}
                />
            )}

            {activeLeftTab === 'solutions' && (
              <SolutionsPanel problem={problem} />
            )}

            {activeLeftTab === 'submissions' && (
              <div>
                <div className="flex items-center justify-between mb-5">
                  <h2 className="text-base font-semibold">My Submissions</h2>
                </div>
                <SubmissionHistory problemId={problemId} />
              </div>
            )}

            {activeLeftTab === 'chatAI' && (
              <div>
                <div className="flex items-center gap-2 mb-5">
                  <h2 className="text-base font-semibold">AI Assistant</h2>
                  <span className="badge badge-sm rounded-md border-none bg-green-500/10 text-green-400 font-mono">
                    beta
                  </span>
                </div>
                <ChatAI problem={problem} />
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}