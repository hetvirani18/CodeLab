import {Routes, Route, Navigate } from "react-router";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import Signup from "./pages/signup";
import {checkAuth} from './store/authSlice';
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import AdminPanel from "./pages/AdminPanel";

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
  console.log("User:", user);
  console.log("Is Authenticated:", isAuthenticated);
  console.log("role", user?.role);

  return (<>
    <Routes>
      <Route path="/" element = {isAuthenticated ? <HomePage /> : <Navigate to='/login' /> }/>
      <Route path="/login" element = {isAuthenticated ? <Navigate to ='/' /> : <Login />} />
      <Route path="/signup" element = {isAuthenticated ? <Navigate to = '/' /> : <Signup />} />
      <Route path="/admin" element = {<AdminPanel />} />
      {/* <Route path="/admin" element= {isAuthenticated && user?.role === 'admin' ? <AdminPanel /> : <Navigate to="/" /> } /> */}
    </Routes>
  </>)
}

export default App;