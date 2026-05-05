import { useState, useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import axiosClient from "../utils/axiosClient"
import LeftPanel from '../components/problem/LeftPanel';
import RightPanel from '../components/problem/RightPanel';
import ProblemNavbar from '../components/problem/ProblemNavbar';
import { useDispatch } from 'react-redux';
import { fetchUserActivity } from '../store/activitySlice';

const languageMap = {
  'c++': 'cpp',
  'javascript': 'javascript',
  'java': 'java'
};

const ProblemPage = () => {
  const [problem, setProblem] = useState(null);
  const [selectedLanguage, setSelectedLanguage] = useState('javascript');
  const [code, setCode] = useState('');
  const [loading, setLoading] = useState(false);
  const [runResult, setRunResult] = useState(null);
  const [submitResult, setSubmitResult] = useState(null);
  const [activeLeftTab, setActiveLeftTab] = useState('description');
  const [activeRightTab, setActiveRightTab] = useState('code');
  const [actionSignal, setActionSignal] = useState(null);
  const [loadingAction, setLoadingAction] = useState(null);
  const editorRef = useRef(null);
  let {problemId}  = useParams();

  const { handleSubmit } = useForm();

  useEffect(() => {
    const fetchProblem = async () => {
      setLoading(true);
      try {
        
        const response = await axiosClient.get(`/problem/problem-by-id/${problemId}`);
        
        const initialCode = response.data.startCode.find((sc => sc.language === languageMap[selectedLanguage] )).initialCode || '';

        setProblem(response.data);
        setCode(initialCode);
        setLoading(false);
        
      } catch (error) {
        console.error('Error fetching problem:', error);
        setLoading(false);
      }
    };

    fetchProblem();
  }, [problemId]);

  // Update code when language changes
  useEffect(() => {
    if (problem) {
      const initialCode = problem.startCode.find(sc => sc.language === selectedLanguage)?.initialCode || '';
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
    setLoading(true);
    setRunResult(null);
    setLoadingAction('run');
    setActionSignal({ type: 'run', id: Date.now() });
    
    try {
      const response = await axiosClient.post(`/submission/run/${problemId}`, {
        code,
        language: selectedLanguage
      });

      setRunResult(response.data);
      setLoading(false);
      setActiveRightTab('testcase');
      
    } catch (error) {
      console.error('Error running code:', error);
      setRunResult({
        success: false,
        error: 'Internal server error'
      });
      setLoading(false);
      setActiveRightTab('testcase');
    }
  };

  const dispatch = useDispatch();

  const handleSubmitCode = async () => {
    setLoading(true);
    setSubmitResult(null);
    setLoadingAction('submit');
    setActionSignal({ type: 'submit', id: Date.now() });
    
    try {
        const response = await axiosClient.post(`/submission/submit/${problemId}`, {
        code:code,
        language: selectedLanguage
      });

      setSubmitResult(response.data);
      setLoading(false);
      setActiveRightTab('result');
      if(response.data.accepted){
        dispatch(fetchUserActivity());
      }
      
    } catch (error) {
      console.error('Error submitting code:', error);
      setSubmitResult(null);
      setLoading(false);
      setActiveRightTab('result');
    }
  };

  useEffect(() => {
    if (!loading) {
      setLoadingAction(null);
    }
  }, [loading]);

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
        loading={loading}
        loadingAction={loadingAction}
      />
      <div className="flex flex-1 min-h-0">
        <LeftPanel
          problem={problem}
          problemId={problemId}
          activeLeftTab={activeLeftTab}
          setActiveLeftTab={setActiveLeftTab}
        />
        <RightPanel
          activeRightTab={activeRightTab}
          setActiveRightTab={setActiveRightTab}
          actionSignal={actionSignal}
          loadingAction={loadingAction}
          selectedLanguage={selectedLanguage}
          onLanguageChange={handleLanguageChange}
          code={code}
          onCodeChange={handleEditorChange}
          onEditorDidMount={handleEditorDidMount}
          loading={loading}
          runResult={runResult}
          submitResult={submitResult}
        />
      </div>
    </div>
  );
};

export default ProblemPage;