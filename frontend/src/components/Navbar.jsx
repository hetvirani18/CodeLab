import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import { logoutUser } from "../store/authSlice";
import { fetchUserActivity } from "../store/activitySlice";
import { NavLink, useNavigate } from "react-router";
import StreakBadge from "./StreakBadge";
import { motion } from "motion/react";
import Logo from "./Logo";

export default function Navbar() {
  const { isAuthenticated, user } = useSelector((state) => state.auth);
  const { streak, todaySolved } = useSelector((state) => state.activity);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Fetch activity when authenticated
  useEffect(() => {
    if (isAuthenticated) dispatch(fetchUserActivity());
  }, [isAuthenticated, dispatch]);

  const handleLogout = () => {
    dispatch(logoutUser())
      .unwrap()
      .then(() => {
        toast.success('Logged out successfully!');
        navigate('/');
      })
      .catch((err) => toast.error(err || 'Logout failed'));
  };

  return (
    <nav className="bg-base-300/80 backdrop-blur-md border-b border-base-content/8 sticky top-0 z-50 px-4 sm:px-6">
      <div className="container mx-auto navbar min-h-15 px-0">

        {/* ── LEFT: Logo ── */}
        <div className="navbar-start">
          <NavLink to="/" className="flex items-center gap-2 font-mono text-xl font-bold">
            <Logo />
            code<span className="text-green-400">Lab</span>
          </NavLink>
        </div>

        {/* ── CENTER: Nav links (authenticated only) ── */}
        {isAuthenticated && (
          <div className="navbar-center hidden md:flex items-center gap-1">
            <NavLink
              to="/problemset"
              className={({ isActive }) =>
                `px-3 py-1.5 rounded-lg text-sm font-medium transition-colors duration-200
                 ${isActive ? 'text-green-400 bg-green-500/10' : 'text-base-content/60 hover:text-base-content hover:bg-base-content/5'}`
              }
            >
              Problem Set
            </NavLink>

            {user?.role === 'admin' && (
              <NavLink
                to="/admin"
                className={({ isActive }) =>
                  `px-3 py-1.5 rounded-lg text-sm font-medium transition-colors duration-200
                   ${isActive ? 'text-green-400 bg-green-500/10' : 'text-base-content/60 hover:text-base-content hover:bg-base-content/5'}`
                }
              >
                Admin Panel
              </NavLink>
            )}
          </div>
        )}

        {/* ── RIGHT ── */}
        {!isAuthenticated ? (
          <div className="navbar-end gap-2">
            <NavLink to="/login" className="btn btn-ghost btn-sm text-sm font-medium">
              Login
            </NavLink>
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <NavLink
                to="/signup"
                className="btn btn-sm font-bold text-base-300 border-none bg-green-400 hover:bg-green-300"
              >
                Sign Up
              </NavLink>
            </motion.div>
          </div>
        ) : (
          <div className="navbar-end flex items-center gap-3">

            {/* Streak badge */}
            <StreakBadge streak={streak} todaySolved={todaySolved} />

            {/* Avatar dropdown */}
            <div className="dropdown dropdown-end">
              <label
                tabIndex={0}
                className="btn btn-ghost btn-circle w-9 h-9 min-h-0 p-0 overflow-hidden ring-2 ring-transparent hover:ring-green-500/40 transition-all duration-200"
              >
                <img
                  src={user?.profilePic?.url || '/avatar.png'}
                  alt="profile"
                  className="w-full h-full object-cover rounded-full"
                />
              </label>

              <ul
                className="menu menu-sm dropdown-content mt-3 p-1.5 shadow-xl bg-base-200 border border-base-content/8 rounded-xl w-44"
                style={{ boxShadow: '0 8px 32px rgba(0,0,0,0.3)' }}
              >
                {/* User info header */}
                <li className="px-3 py-2 mb-1 border-b border-base-content/7">
                  <div className="flex flex-col gap-0 pointer-events-none hover:bg-transparent active:bg-transparent focus:bg-transparent">
                    <span className="font-semibold text-sm text-base-content truncate">
                      {user?.firstName || 'Developer'}
                    </span>
                  </div>
                </li>

                <li>
                  <NavLink
                    to="/profile"
                    className="flex items-center gap-2 text-sm rounded-lg text-base-content/70 hover:text-base-content hover:bg-base-content/5"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    Profile
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    to="/problemset"
                    className="flex items-center gap-2 text-sm rounded-lg text-base-content/70 hover:text-base-content hover:bg-base-content/5 md:hidden"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                    Problems
                  </NavLink>
                </li>

                <li className="mt-1 pt-1 border-t border-base-content/[0.07]">
                  <button
                    onClick={handleLogout}
                    className="flex items-center gap-2 text-sm rounded-lg text-error/70 hover:text-error hover:bg-error/8 w-full"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                    </svg>
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}