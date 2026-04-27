import {Routes, Route, Navigate } from "react-router";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import Signup from "./pages/signup";
import {checkAuth} from './store/authSlice';
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import AdminPanel from "./pages/Admin";
import ProblemPage from "./pages/ProblemPage";
import CreateProblem from './components/CreateProblem';
import DeleteProblem from './components/DeleteProblem';
import UpdateProblem from './components/UpdateProblem';
import AdminVideo from "./components/AdminVideo";
import VideoUpload from "./components/VideoUpload";

function App(){

  //check if user is authenticated or not 
  
  const{isAuthenticated, user, loading} = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkAuth());
  }, [dispatch]);  //you can also leave empty array dispatch will not change so its same
  
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  // console.log(document.cookie);
  // console.log("User:", user);
  // console.log("Is Authenticated:", isAuthenticated);
  // console.log("role", user?.role);

  return (<>
    <Routes>
      <Route path="/" element = {isAuthenticated ? <HomePage /> : <Navigate to='/login' /> }/>
      <Route path="/login" element = {isAuthenticated ? <Navigate to ='/' /> : <Login />} />
      <Route path="/signup" element = {isAuthenticated ? <Navigate to = '/' /> : <Signup />} />
      <Route path="/problem/:problemId" element = { <ProblemPage />} />

      <Route path="/admin" element= {isAuthenticated && user?.role === 'admin' ? <AdminPanel /> : <Navigate to="/" /> } />
      <Route path="/admin/create" element= {isAuthenticated && user?.role === 'admin' ? <CreateProblem /> : <Navigate to="/" /> } />
      <Route path="/admin/update" element= {isAuthenticated && user?.role === 'admin' ? <UpdateProblem /> : <Navigate to="/" /> } />
      <Route path="/admin/delete" element= {isAuthenticated && user?.role === 'admin' ? <DeleteProblem /> : <Navigate to="/" /> } />
      <Route path="/admin/video" element= {isAuthenticated && user?.role === 'admin' ? <AdminVideo /> : <Navigate to="/" /> } />
      <Route path="/admin/upload/:problemId" element= {isAuthenticated && user?.role === 'admin' ? <VideoUpload /> : <Navigate to="/" /> } />
    </Routes>
  </>)
}

export default App;