import { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router';
import LeftPanel from '../components/problem/LeftPanel';
import RightPanel from '../components/problem/RightPanel';
import ProblemNavbar from '../components/problem/ProblemNavbar';
import StreakCelebration from '../components/problem/StreakCelebration';
import { useDispatch, useSelector } from 'react-redux';
import toast from 'react-hot-toast';
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

  const handleEditorChange   = (value) => setCode(value || '');
  const handleEditorDidMount = (editor) => { editorRef.current = editor; };
  const handleLanguageChange = (language) => setSelectedLanguage(language);

  const handleRun = async () => {
    dispatch(clearResults());

    try {
      await dispatch(
        runProblem({
          problemId,
          code,
          language: selectedLanguage,
        })
      ).unwrap();
    } catch (err) {

      if (err?.type === 'RATE_LIMIT') {
        toast.error(err.message);
        return;
      }

      toast.error(err?.message || 'Failed to run code');
    }
  };

  const handleSubmitCode = async () => {
    try {

      // snapshot BEFORE submit
      const previousStreak = streak;

      const response = await dispatch(
        submitProblem({
          problemId,
          code,
          language: selectedLanguage,
        })
      ).unwrap();

      if (response.accepted) {

        const updatedActivity = await dispatch(
          fetchUserActivity()
        ).unwrap();

        // compare old vs new directly
        if (updatedActivity.streak > previousStreak) {
          setShowStreak(true);
        }
      }

    } catch (err) {

      if (err?.type === 'RATE_LIMIT') {
        toast.error(err.message);
        return;
      }

      toast.error(err?.message || 'Submission failed');
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
      { showStreak && (
          <StreakCelebration streak={streak} />
        )
      }

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