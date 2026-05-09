import { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router';
import LeftPanel from '../components/problem/LeftPanel';
import RightPanel from '../components/problem/RightPanel';
import ProblemNavbar from '../components/problem/ProblemNavbar';
import StreakCelebration from '../components/problem/StreakCelebration';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserActivity } from '../store/activitySlice';
import {
  fetchProblemDetail,
  runProblem,
  submitProblem,
  clearProblem,
  clearResults,
} from '../store/porblemDetailSlice';

const languageMap = {
  'c++':        'cpp',
  'javascript': 'javascript',
  'java':       'java',
};

const ProblemPage = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('javascript');
  const [code,             setCode]             = useState('');
  const [showStreak,       setShowStreak]       = useState(false);
  const editorRef = useRef(null);

  const { problemId } = useParams();
  const dispatch      = useDispatch();

  const { problem, loading }        = useSelector((s) => s.problemDetail);
  const { streak, todaySolved }     = useSelector((s) => s.activity);

  // Keep a ref to the streak value BEFORE submission so we can compare after
  const prevStreakRef = useRef(streak);

  useEffect(() => {
    dispatch(fetchProblemDetail(problemId));
    return () => { dispatch(clearProblem()); };
  }, [dispatch, problemId]);

  // Sync code when language or problem changes
  useEffect(() => {
    if (problem) {
      const apiLang = languageMap[selectedLanguage] || selectedLanguage;
      const candidates = [apiLang, selectedLanguage].map((l) => l.toLowerCase());
      const initialCode =
        problem.startCode.find(
          (sc) => candidates.includes((sc.language || '').toLowerCase())
        )?.initialCode || '';
      setCode(initialCode);
    }
  }, [selectedLanguage, problem]);

  // Watch for streak increase AFTER a successful submit
  useEffect(() => {
    const prev = prevStreakRef.current;
    if (streak > prev) {
      // Streak went up — show the celebration
      setShowStreak(true);
    }
    // Always update ref to current
    prevStreakRef.current = streak;
  }, [streak]);

  const handleEditorChange   = (value) => setCode(value || '');
  const handleEditorDidMount = (editor) => { editorRef.current = editor; };
  const handleLanguageChange = (language) => setSelectedLanguage(language);

  const handleRun = async () => {
    dispatch(clearResults());
    await dispatch(runProblem({ problemId, code, language: selectedLanguage }));
  };

  const handleSubmitCode = async () => {
    try {
      // Snapshot streak before we submit
      prevStreakRef.current = streak;

      const response = await dispatch(
        submitProblem({ problemId, code, language: selectedLanguage })
      ).unwrap();

      if (response.accepted) {
        // Re-fetch activity — if streak increased, the useEffect above will fire
        await dispatch(fetchUserActivity()).unwrap();
      }
    } catch {
      // errors handled in RightPanel overlay
    }
  };

  if (loading && !problem) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-base-100">
        <span className="loading loading-spinner loading-lg" style={{ color: 'var(--green)' }} />
      </div>
    );
  }

  return (
    <div className="h-screen flex flex-col bg-base-100">

      {/* Streak celebration popup */}
      <StreakCelebration
        streak={streak}
        show={showStreak}
        onClose={() => setShowStreak(false)}
      />

      <ProblemNavbar
        onRun={handleRun}
        onSubmit={handleSubmitCode}
      />

      <div className="flex flex-1 min-h-0">
        <LeftPanel
          code={code}
          selectedLanguage={selectedLanguage}
        />
        <RightPanel
          selectedLanguage={selectedLanguage}
          onLanguageChange={handleLanguageChange}
          code={code}
          onCodeChange={handleEditorChange}
          onEditorDidMount={handleEditorDidMount}
        />
      </div>
    </div>
  );
};

export default ProblemPage;