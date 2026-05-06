import { useState, useEffect } from 'react';
import axiosClient from '../../utils/axiosClient';
import { useParams } from 'react-router';
import Editor from '@monaco-editor/react';

const getMonacoLang = (lang) => (lang === 'c++' ? 'cpp' : lang);

const SubmissionHistory = () => {

  const { problemId } = useParams();

  const [submissions, setSubmissions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedSubmission, setSelectedSubmission] = useState(null);

  useEffect(() => {
    const fetchSubmissions = async () => {
      try {
        setLoading(true);
        const response = await axiosClient.get(`/problem/submitted-codes/${problemId}`);
        setSubmissions(response.data);
        setError(null);
      } catch (err) {
        setError('Failed to fetch submission history');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchSubmissions();
  }, [problemId]);

  const getStatusColor = (status) => {
    switch (status) {
      case 'accepted': return 'bg-green-500/10 text-green-400';
      case 'wrong': return 'bg-red-500/10 text-red-400';
      case 'error': return 'bg-yellow-500/10 text-yellow-400';
      case 'pending': return 'bg-blue-500/10 text-blue-400';
      default: return 'bg-gray-500/10 text-gray-400';
    }
  };

  const formatMemory = (memory) => {
    if (memory < 1024) return `${memory} kB`;
    return `${(memory / 1024).toFixed(2)} MB`;
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleString();
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="alert alert-error shadow-lg my-4">
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>{error}</span>
        </div>
      </div>
    );
  }

  return (
    <div className="p-5">
      <div className="flex items-center justify-between mb-5">
        <div>
          <p className="font-mono text-xs text-base-content/30 uppercase tracking-widest">My Submissions</p>
          <h2 className="text-lg font-semibold text-base-content/80">Submission History</h2>
        </div>
        <span className="font-mono text-xs text-base-content/35">
          {submissions.length} total
        </span>
      </div>
      
      {submissions.length === 0 ? (
        <div className="rounded-xl border border-base-content/10 bg-base-200 p-6 text-center">
          <div className="text-3xl mb-2">📭</div>
          <p className="font-medium text-base-content/70">No submissions yet</p>
          <p className="text-sm text-base-content/35">Submit your code to see it here.</p>
        </div>
      ) : (
        <>
          <div className="overflow-x-auto rounded-xl border border-base-content/10">
            <table className="table w-full">
              <thead className="bg-base-200">
                <tr className="text-xs uppercase tracking-widest text-base-content/40">
                  <th className="font-medium">#</th>
                  <th className="font-medium">Language</th>
                  <th className="font-medium">Status</th>
                  <th className="font-medium">Runtime</th>
                  <th className="font-medium">Memory</th>
                  <th className="font-medium">Test Cases</th>
                  <th className="font-medium">Submitted</th>
                  <th className="font-medium">Actions</th>
                </tr>
              </thead>
              <tbody>
                {submissions.map((sub, index) => (
                  <tr key={sub._id} className="hover:bg-base-200/40">
                    <td>{index + 1}</td>
                    <td className="font-mono">{sub.language}</td>
                    <td>
                      <span className={`badge ${getStatusColor(sub.status)}`}>
                        {sub.status.charAt(0).toUpperCase() + sub.status.slice(1)}
                      </span>
                    </td>
                    
                    <td className="font-mono">{sub.runtime}s</td>
                    <td className="font-mono">{formatMemory(sub.memory)}</td>
                    <td className="font-mono">{sub.testCasesPassed}/{sub.testCasesTotal}</td>
                    <td>{formatDate(sub.createdAt)}</td>
                    <td>
                      <button 
                        className="btn btn-xs btn-outline font-mono"
                        onClick={() => setSelectedSubmission(sub)}
                      >
                        Code
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-4 text-xs font-mono text-base-content/35">
            Showing {submissions.length} submissions
          </p>
        </>
      )}

      {/* Code View Modal */}
      {selectedSubmission && (
        <div className="modal modal-open">
          <div className="modal-box w-11/12 max-w-5xl bg-base-100 border border-base-content/10">
            <h3 className="font-semibold text-base mb-4">
              Submission Details: {selectedSubmission.language}
            </h3>
            
            <div className="mb-4">
              <div className="flex flex-wrap gap-2 mb-2">
                <span className={`badge ${getStatusColor(selectedSubmission.status)}`}>
                  {selectedSubmission.status}
                </span>
                <span className="badge badge-outline font-mono">
                  Runtime: {selectedSubmission.runtime}s
                </span>
                <span className="badge badge-outline font-mono">
                  Memory: {formatMemory(selectedSubmission.memory)}
                </span>
                <span className="badge badge-outline font-mono">
                  Passed: {selectedSubmission.testCasesPassed}/{selectedSubmission.testCasesTotal}
                </span>
              </div>
              
              {selectedSubmission.errorMessage && (
                <div className="mb-3 rounded-lg border border-red-500/25 bg-red-500/5 px-3 py-2 text-sm font-mono text-red-300">
                  {selectedSubmission.errorMessage}
                </div>
              )}
            </div>
            
            <div className="rounded-xl border border-base-content/10 overflow-hidden">
              <Editor
                height="520px"
                language={getMonacoLang(selectedSubmission.language.toLowerCase())}
                value={selectedSubmission.code}
                theme="vs-dark"
                options={{
                  readOnly: true,
                  minimap: { enabled: false },
                  scrollBeyondLastLine: false,
                  fontSize: 14,
                  wordWrap: 'on',
                  lineNumbers: 'on',
                  renderLineHighlight: 'none',
                }}
              />
            </div>
            
            <div className="modal-action">
              <button 
                className="btn btn-sm btn-ghost border border-base-content/10 font-mono"
                onClick={() => setSelectedSubmission(null)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SubmissionHistory;