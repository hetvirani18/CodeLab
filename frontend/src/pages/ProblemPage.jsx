import { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router';
import LeftPanel from '../components/problem/LeftPanel';
import RightPanel from '../components/problem/RightPanel';
import ProblemNavbar from '../components/problem/ProblemNavbar';
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
  'c++': 'cpp',
  'javascript': 'javascript',
  'java': 'java'
};

const ProblemPage = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('javascript');
  const [code, setCode] = useState('');
  const editorRef = useRef(null);
  let {problemId}  = useParams();

  const dispatch = useDispatch();
  const {
    problem,
    loading,
  } = useSelector((state) => state.problemDetail);

  useEffect(() => {
    dispatch(fetchProblemDetail(problemId));
    return () => {
      dispatch(clearProblem());
    };
  }, [dispatch, problemId]);

  // Update code when language changes
  useEffect(() => {
    if (problem) {
      const apiLanguage = languageMap[selectedLanguage] || selectedLanguage;
      const languageCandidates = [apiLanguage, selectedLanguage].map((lang) => lang.toLowerCase());
      const initialCode =
        problem.startCode.find(
          (sc) => languageCandidates.includes((sc.language || '').toLowerCase())
        )?.initialCode || '';
      setCode(initialCode);
    }
  }, [selectedLanguage, problem]);

  const handleEditorChange = (value) => {
    setCode(value || '');
  };

  const handleEditorDidMount = (editor) => {
    editorRef.current = editor;
  };

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
  };

  const handleRun = async () => {
    dispatch(clearResults());
    await dispatch(runProblem({ problemId, code, language: selectedLanguage }));
  };

  const handleSubmitCode = async () => {
    try {
      const response = await dispatch(
        submitProblem({ problemId, code, language: selectedLanguage })
      ).unwrap();
      if (response.accepted) {
        dispatch(fetchUserActivity());
      }
    } catch (error) {
    }
  };

  if (loading && !problem) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  return (
    <div className="h-screen flex flex-col bg-base-100">
      <ProblemNavbar
        onRun={handleRun}
        onSubmit={handleSubmitCode}
      />
      <div className="flex flex-1 min-h-0">
        <LeftPanel
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