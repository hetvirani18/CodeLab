import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { logoutUser } from "../store/authSlice";
import { fetchUserActivity } from "../store/activitySlice";
import { NavLink, useNavigate } from "react-router";
import StreakBadge from "./StreakBadge";
import { motion, AnimatePresence } from "motion/react";
import Logo from "./Logo";

export default function Navbar() {
  const { isAuthenticated, user } = useSelector((s) => s.auth);
  const { streak, todaySolved }   = useSelector((s) => s.activity);
  const dispatch   = useDispatch();
  const navigate   = useNavigate();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (isAuthenticated) dispatch(fetchUserActivity());
  }, [isAuthenticated, dispatch]);

  const close = () => setOpen(false);

  const handleLogout = () => {
    close();
    dispatch(logoutUser())
      .unwrap()
      .then(() => { toast.success('Logged out successfully!'); navigate('/'); })
      .catch((err) => toast.error(err || 'Logout failed'));
  };

  return (
    <>
      {/* ── Top bar ── */}
      <nav className="bg-base-300/80 backdrop-blur-md border-b border-base-content/8 sticky top-0 z-50 px-4 sm:px-6">
        <div className="container mx-auto flex items-center justify-between min-h-15">

          {/* Logo */}
          <NavLink to="/" onClick={close} className="flex items-center gap-2 font-mono text-xl font-bold shrink-0">
            <Logo />
            code<span className="text-green-400">Lab</span>
          </NavLink>

          {/* Desktop center */}
          {isAuthenticated && (
            <div className="hidden md:flex items-center gap-1">
              <NavLink to="/problemset" className={({ isActive }) =>
                `px-3 py-1.5 rounded-lg text-sm font-medium transition-colors duration-200
                 ${isActive ? 'text-green-400 bg-green-500/10' : 'text-base-content/60 hover:text-base-content hover:bg-base-content/5'}`}>
                Problem Set
              </NavLink>
              {user?.role === 'admin' && (
                <NavLink to="/admin" className={({ isActive }) =>
                  `px-3 py-1.5 rounded-lg text-sm font-medium transition-colors duration-200
                   ${isActive ? 'text-green-400 bg-green-500/10' : 'text-base-content/60 hover:text-base-content hover:bg-base-content/5'}`}>
                  Admin Panel
                </NavLink>
              )}
            </div>
          )}

          {/* Desktop right */}
          <div className="hidden md:flex items-center gap-3">
            {!isAuthenticated ? (
              <>
                <NavLink to="/login" className="btn btn-ghost btn-sm text-sm font-medium">Login</NavLink>
                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                  <NavLink to="/signup" className="btn btn-sm font-bold text-base-300 border-none bg-green-400 hover:bg-green-300">
                    Sign Up
                  </NavLink>
                </motion.div>
              </>
            ) : (
              <>
                <StreakBadge streak={streak} todaySolved={todaySolved} />
                <div className="dropdown dropdown-end">
                  <label tabIndex={0} className="btn btn-ghost btn-circle w-9 h-9 min-h-0 p-0 overflow-hidden ring-2 ring-transparent hover:ring-green-500/40 transition-all duration-200">
                    <img src={user?.profilePic?.url || '/avatar.png'} alt="profile" className="w-full h-full object-cover rounded-full" />
                  </label>
                  <ul className="menu menu-sm dropdown-content mt-3 p-1.5 shadow-xl bg-base-200 border border-base-content/8 rounded-xl w-44"
                    style={{ boxShadow: '0 8px 32px rgba(0,0,0,0.3)' }}>
                    <li className="px-3 py-2 mb-1 border-b border-base-content/[0.07]">
                      <div className="flex flex-col pointer-events-none hover:bg-transparent">
                        <span className="font-semibold text-sm truncate">{user?.firstName || 'Developer'}</span>
                        <span className="font-mono text-xs text-base-content/35 truncate">{user?.emailId}</span>
                      </div>
                    </li>
                    <li>
                      <NavLink to="/profile" className="flex items-center gap-2 text-sm rounded-lg text-base-content/70 hover:text-base-content hover:bg-base-content/5">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                        Profile
                      </NavLink>
                    </li>
                    <li className="mt-1 pt-1 border-t border-base-content/[0.07]">
                      <button onClick={handleLogout} className="flex items-center gap-2 text-sm rounded-lg text-error/70 hover:text-error hover:bg-error/8 w-full">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" /></svg>
                        Logout
                      </button>
                    </li>
                  </ul>
                </div>
              </>
            )}
          </div>

          {/* Mobile right — streak + hamburger */}
          <div className="flex md:hidden items-center gap-2">
            {isAuthenticated && <StreakBadge streak={streak} todaySolved={todaySolved} />}
            <button onClick={() => setOpen(o => !o)} aria-label="Menu"
              className="p-2 rounded-lg hover:bg-base-content/8 text-base-content/60 transition-colors">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {open
                  ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                }
              </svg>
            </button>
          </div>

        </div>
      </nav>

      {/* ── Mobile drawer ── */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div className="fixed inset-0 z-40 bg-black/40 md:hidden"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={close} />

            <motion.div
              className="fixed top-0 right-0 h-full w-72 z-50 bg-base-200 border-l border-base-content/8 flex flex-col md:hidden"
              initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.22 }}
              style={{ boxShadow: '-8px 0 32px rgba(0,0,0,0.35)' }}
            >
              {/* Header */}
              <div className="flex items-center justify-between px-5 py-4 border-b border-base-content/[0.07]">
                <span className="font-mono text-lg font-bold">code<span className="text-green-400">Lab</span></span>
                <button onClick={close} className="p-1.5 rounded-lg hover:bg-base-content/8 text-base-content/40">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* User card */}
              {isAuthenticated && (
                <div className="flex items-center gap-3 px-5 py-4 border-b border-base-content/[0.07]">
                  <img src={user?.profilePic?.url || '/avatar.png'} alt="avatar"
                    className="w-10 h-10 rounded-full object-cover border border-base-content/10 shrink-0" />
                  <div className="min-w-0">
                    <p className="font-semibold text-sm truncate">{user?.firstName || 'Developer'}</p>
                    <p className="font-mono text-xs text-base-content/35 truncate">{user?.emailId}</p>
                  </div>
                </div>
              )}

              {/* Links */}
              <div className="flex-1 flex flex-col gap-1 px-3 py-4 overflow-y-auto">
                {isAuthenticated ? (
                  <>
                    {[
                      { to: '/problemset', label: 'Problem Set',  icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4' },
                      { to: '/profile',    label: 'Profile',      icon: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z' },
                    ].map(({ to, label, icon }) => (
                      <NavLink key={to} to={to} onClick={close}
                        className={({ isActive }) =>
                          `flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors duration-150
                           ${isActive ? 'text-green-400 bg-green-500/10' : 'text-base-content/70 hover:text-base-content hover:bg-base-content/5'}`
                        }
                      >
                        <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={icon} />
                        </svg>
                        {label}
                      </NavLink>
                    ))}
                    {user?.role === 'admin' && (
                      <NavLink to="/admin" onClick={close}
                        className={({ isActive }) =>
                          `flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors duration-150
                           ${isActive ? 'text-green-400 bg-green-500/10' : 'text-base-content/70 hover:text-base-content hover:bg-base-content/5'}`
                        }
                      >
                        <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                        </svg>
                        Admin Panel
                      </NavLink>
                    )}
                  </>
                ) : (
                  <>
                    <NavLink to="/login" onClick={close}
                      className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-base-content/70 hover:text-base-content hover:bg-base-content/5">
                      Login
                    </NavLink>
                    <NavLink to="/signup" onClick={close}
                      className="flex items-center justify-center px-3 py-2.5 rounded-lg text-sm font-bold text-base-300 bg-green-400 hover:bg-green-300 mt-1">
                      Sign Up
                    </NavLink>
                  </>
                )}
              </div>

              {/* Logout */}
              {isAuthenticated && (
                <div className="px-3 pb-6 pt-3 border-t border-base-content/[0.07]">
                  <button onClick={handleLogout}
                    className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-error/70 hover:text-error hover:bg-error/8 w-full transition-colors duration-150">
                    <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                    </svg>
                    Logout
                  </button>
                </div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}