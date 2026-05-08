import { Routes, Route, Navigate } from "react-router";
import Problemset from "./pages/Problemset";
import Login from "./pages/Login";
import Signup from "./pages/signup";
import { checkAuth } from './store/authSlice';
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Admin from "./pages/Admin";
import ProblemPage from "./pages/ProblemPage";
import CreateProblem from './components/admin/CreateProblem';
import DeleteProblem from './components/admin/DeleteProblem';
import UpdateProblem from './components/admin/UpdateProblem';
import UpdateProblemForm from './components/admin/UpdateProblemForm';
import AdminVideo from "./components/admin/AdminVideo";
import VideoUpload from "./components/admin/VideoUpload";
import Home from "./pages/Home";
import { Toaster } from "react-hot-toast";
import { fetchUserActivity } from './store/activitySlice';
import { ReceiptEuro } from "lucide-react";
import Profile from "./pages/Profile";
import PublicProfile from "./pages/PublicProfile";

function AdminRoute({ children }) {
  const { isAuthenticated, user } = useSelector((s) => s.auth);
  if (!isAuthenticated || user?.role !== 'admin') return <Navigate to="/" replace />;
  return children;
}

function PrivateRoute({ children }) {
  const { isAuthenticated } = useSelector((s) => s.auth);
  if (!isAuthenticated) return <Navigate to="/login" replace />;
  return children;
}

function App() {
  const { isAuthenticated, loading } = useSelector((s) => s.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkAuth())
      .unwrap()
      .then(() => dispatch(fetchUserActivity()))
      .catch(() => {});
  }, [dispatch]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-base-300">
        <span className="loading loading-spinner loading-lg" style={{ color: 'var(--green)' }} />
      </div>
    );
  }

  return (
    <>
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            background: '#1e2530',
            color: '#e6edf3',
            border: '1px solid rgba(255,255,255,0.08)',
            borderRadius: '10px',
            fontSize: '14px',
            fontFamily: 'Sora, sans-serif',
          },
          success: { iconTheme: { primary: '#00e676', secondary: '#0d1117' } },
          error:   { iconTheme: { primary: '#ff5555', secondary: '#0d1117' } },
        }}
      />

      <Routes>
        {/* ── Public ── */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={isAuthenticated ? <Navigate to="/" replace /> : <Login />} />
        <Route path="/signup" element={isAuthenticated ? <Navigate to="/" replace /> : <Signup />} />
        <Route path="/profile/:id" element={<PublicProfile />} />

        {/* ── Protected ── */}
        <Route path="/problemset" element={<PrivateRoute><Problemset /></PrivateRoute>} />
        <Route path="/problem/:problemId" element={<PrivateRoute><ProblemPage /></PrivateRoute>} />
        <Route path="/profile" element={<PrivateRoute><Profile /></PrivateRoute>} />

        {/* ── Admin — nested routes share the Admin layout/subnav ── */}
        <Route path="/admin" element={<AdminRoute><Admin /></AdminRoute>} >
          <Route index element={<Navigate to="create" replace />} />
          <Route path="create" element={<CreateProblem />} />
          <Route path="update" element={<UpdateProblem />} />
          <Route path="update/:problemId" element={<UpdateProblemForm />} />
          <Route path="delete" element={<DeleteProblem />} />
          <Route path="video"  element={<AdminVideo />} />
          <Route path="upload/:problemId" element={<VideoUpload />} />
        </Route>

        {/* ── 404 fallback ── */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}

export default App;