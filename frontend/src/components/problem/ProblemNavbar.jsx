import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router';
import toast from 'react-hot-toast';
import { logoutUser } from '../../store/authSlice';
import { fetchUserActivity } from '../../store/activitySlice';
import StreakBadge from '../StreakBadge';
import { CloudUpload, Play } from 'lucide-react';

export default function ProblemNavbar({
  onRun,
  onSubmit,
  loading,
  loadingAction,
}) {
  const { isAuthenticated, user } = useSelector((state) => state.auth);
  const { streak, todaySolved } = useSelector((state) => state.activity);
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
    <nav className="bg-base-300/80 backdrop-blur-md border-b border-base-content/8 sticky top-0 z-40 px-4 sm:px-6">
      <div className="container mx-auto navbar min-h-15">
        {/* Left */}
        <div className="navbar-start gap-5">
          <NavLink to="/" className="font-mono text-lg font-bold">
            code<span className="text-green-400">Lab</span>
          </NavLink>
          <NavLink
            to="/problemset"
            className="text-sm text-base-content/70 hover:text-base-content"
          >
            Problem set
          </NavLink>
        </div>

        {/* Center */}
        <div className="navbar-center gap-3">
          <button
            onClick={onRun}
            disabled={loading}
            className="btn btn-sm btn-ghost border border-base-content/12 font-mono text-xs
                       hover:border-base-content/30 disabled:opacity-40"
          >
            {loading && loadingAction === 'run'
              ? <span className="loading loading-spinner loading-xs" />
              : <Play className='h-4 w-4' />
            }
          </button>
          <button
            onClick={onSubmit}
            disabled={loading}
            className="btn btn-sm font-mono text-xs font-bold border-none bg-base-500
                    disabled:opacity-40 text-green-400 hover:bg-base-content/5"
          >
            {loading && loadingAction === 'submit'
              ? <span className="loading loading-spinner loading-xs" />
              :  <><CloudUpload className='text-green-400' /> Submit</>
            }
          </button>
        </div>

        {/* Right */}
        <div className="navbar-end gap-3">
          {isAuthenticated && <StreakBadge streak={streak} todaySolved={todaySolved} />}

          {isAuthenticated && (
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
          )}
        </div>
      </div>
    </nav>
  );
}
