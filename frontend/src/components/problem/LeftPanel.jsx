import SubmissionHistory from './SubmissionHistory';
import ChatAI from './ChatAI';
import Editorial from './Editorial';
import DescriptionPanel from './DescriptionPanel';
import SolutionsPanel from './SolutionsPanel';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { clearResults } from '../../store/porblemDetailSlice';
import SubmissionResultPanel from '../SubmissionResult';

const BASE_TABS = [
  { id: 'description', label: 'Description' },
  { id: 'editorial',   label: 'Editorial'   },
  { id: 'solutions',   label: 'Solutions'   },
  { id: 'submissions', label: 'Submissions' },
  { id: 'chatAI',      label: 'AI Chat'     },
];

const SUBMIT_TAB_ID = 'submissionResult';

export default function LeftPanel() {
  const [activeLeftTab, setActiveLeftTab] = useState('description');
  const [showSubmitTab, setShowSubmitTab] = useState(false);
  const dispatch = useDispatch();
  const { problem, loadingAction, submitResult } = useSelector((state) => state.problemDetail);
  const { problemId } = useParams();

  useEffect(() => {
    if (loadingAction === 'submit' || submitResult) {
      setShowSubmitTab(true);
      setActiveLeftTab(SUBMIT_TAB_ID);
    }
  }, [loadingAction, submitResult]);

  const tabs = showSubmitTab
    ? [...BASE_TABS, { id: SUBMIT_TAB_ID, label: 'Submission' }]
    : BASE_TABS;

  return (
    <div className="w-1/2 flex flex-col border-r border-base-content/[0.07] bg-base-100">

      {/* ── Tab bar ── */}
      <div className="flex items-end gap-0 px-4 border-b border-base-content/[0.07] bg-base-200 overflow-x-auto shrink-0">
        {tabs.map((tab) => {
          const active = activeLeftTab === tab.id;
          const isSubmit = tab.id === SUBMIT_TAB_ID;
          return (
            <div key={tab.id} className="relative flex items-end">
              <button
                onClick={() => setActiveLeftTab(tab.id)}
                className={`px-3.5 py-2.5 text-sm font-medium border-b-2 whitespace-nowrap transition-colors duration-150
                  ${active
                    ? 'border-green-500 text-green-400'
                    : 'border-transparent text-base-content/40 hover:text-base-content/70'
                  }
                  ${isSubmit ? 'pr-7' : ''}`}
              >
                {tab.label}
              </button>
              {isSubmit && (
                <button
                  onClick={() => {
                    setShowSubmitTab(false);
                    if (activeLeftTab === SUBMIT_TAB_ID) setActiveLeftTab('chatAI');
                    dispatch(clearResults());
                  }}
                  className={`absolute right-1.5 top-1/2 -translate-y-1/2 rounded-md p-1 cursor-pointer
                    ${active
                      ? 'text-green-300 hover:text-green-200'
                      : 'text-base-content/30 hover:text-base-content/60'
                    }`}
                  aria-label="Close submission tab"
                  type="button"
                >
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              )}
            </div>
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
              <DescriptionPanel />
            )}

            {activeLeftTab === 'editorial' && (
                <Editorial />
            )}

            {activeLeftTab === 'solutions' && (
              <SolutionsPanel />
            )}

            {activeLeftTab === 'submissions' && (
              <SubmissionHistory />
            )}

            {activeLeftTab === 'chatAI' && (
              <ChatAI />
            )}

            {activeLeftTab === SUBMIT_TAB_ID && (
              <SubmissionResultPanel/>
            )}
          </div>
        )}
      </div>
    </div>
  );
}