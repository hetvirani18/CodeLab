import SubmissionHistory from './SubmissionHistory';
import ChatAI from './ChatAI';
import Editorial from './Editorial';
import DescriptionPanel from './DescriptionPanel';
import SolutionsPanel from './SolutionsPanel';

export default function LeftPanel({
  problem,
  problemId,
  activeLeftTab,
  setActiveLeftTab,
}) {
  return (
    <div className="w-1/2 flex flex-col border-r border-base-300">
      <div className="tabs tabs-bordered bg-base-200 px-4">
        <button
          className={`tab ${activeLeftTab === 'description' ? 'tab-active' : ''}`}
          onClick={() => setActiveLeftTab('description')}
        >
          Description
        </button>
        <button
          className={`tab ${activeLeftTab === 'editorial' ? 'tab-active' : ''}`}
          onClick={() => setActiveLeftTab('editorial')}
        >
          Editorial
        </button>
        <button
          className={`tab ${activeLeftTab === 'solutions' ? 'tab-active' : ''}`}
          onClick={() => setActiveLeftTab('solutions')}
        >
          Solutions
        </button>
        <button
          className={`tab ${activeLeftTab === 'submissions' ? 'tab-active' : ''}`}
          onClick={() => setActiveLeftTab('submissions')}
        >
          Submissions
        </button>
        <button
          className={`tab ${activeLeftTab === 'chatAI' ? 'tab-active' : ''}`}
          onClick={() => setActiveLeftTab('chatAI')}
        >
          Chat AI
        </button>
      </div>

      <div className="flex-1 overflow-y-auto p-6">
        {problem && (
          <>
            {activeLeftTab === 'description' && (
              <DescriptionPanel problem={problem} />
            )}

            {activeLeftTab === 'editorial' && (
              <div className="prose max-w-none">
                <h2 className="text-xl font-bold mb-4">Editorial</h2>
                <div className="whitespace-pre-wrap text-sm leading-relaxed">
                  <Editorial
                    secureUrl={problem?.secureUrl}
                    thumbnailUrl={problem?.thumbnailUrl}
                    duration={problem?.duration}
                  />
                </div>
              </div>
            )}

            {activeLeftTab === 'solutions' && (
              <SolutionsPanel problem={problem} />
            )}

            {activeLeftTab === 'submissions' && (
              <div>
                <h2 className="text-xl font-bold mb-4">My Submissions</h2>
                <div className="text-gray-500">
                  <SubmissionHistory problemId={problemId} />
                </div>
              </div>
            )}

            {activeLeftTab === 'chatAI' && (
              <div>
                <h2 className="text-xl font-bold mb-4">Chat with AI</h2>
                <div className="text-gray-500">
                  <ChatAI problem={problem} />
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
