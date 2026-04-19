import {Routes, Route, Navigate } from "react-router";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import Signup from "./pages/signup";
import {checkAuth} from './store/authSlice';
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

function App(){

  //check if user is authenticated or not 
  
  const{isAuthenticated} = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkAuth());
  }, [dispatch]);  //you can also leave empty array dispatch will not change so its same
  
  return (<>
    <Routes>
      <Route path="/" element = {isAuthenticated ? <HomePage /> : <Navigate to='/signup' /> }/>
      <Route path="/login" element = {isAuthenticated ? <Navigate to ='/' /> : <Login />} />
      <Route path="/signup" element = {isAuthenticated ? <Navigate to = '/' /> : <Signup />} />
    </Routes>
  </>)
}

export default App;