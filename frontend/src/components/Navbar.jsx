import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { logoutUser } from "../store/authSlice";
import { NavLink } from "react-router";

// components/Navbar.jsx
export default function Navbar() {
  
  const{isAuthenticated, user} = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logoutUser())
      .unwrap()
      .then(() => {
        toast.success('Logged out successfully!');
        <NavLink to="/" />
      })
      .catch((err) => {
        toast.error(err || "Login failed");
      });
  };

  return (
    <nav className="bg-base-300/80 backdrop-blur-md border-b border-base-content/10 sticky top-0 z-50 px-6">
      <div className="container mx-auto navbar">
        {/* LEFT */}
        <div className="navbar-start">
          <NavLink to="/" className="text-2xl font-bold">
            code<span className="text-green-400">Lab</span>
          </NavLink>
        </div>

        {/* CENTER */}
        {isAuthenticated && (
          <div className="navbar-center hidden md:flex gap-6 font-medium">
            <NavLink to="/problemset" className="hover:text-green-400">
              Problem Set
            </NavLink>

            {user?.role === "admin" && (
              <NavLink to="/admin" className="hover:text-green-400">
                Admin Panel
              </NavLink>
            )}
          </div>
        )}

        {/* RIGHT */}
        {!isAuthenticated ? (
          <div className="navbar-end gap-2">
            <NavLink to="/login" className="btn btn-ghost btn-sm text-">
              Login
            </NavLink>
            <NavLink to="/signup" className="btn btn-sm bg-green-400 text-black font-bold">
              Sign Up
            </NavLink>
          </div>
        ): (
          <div className="navbar-end">
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-9 rounded-full flex items-center justify-center overflow-hidden">
                  <img
                    src={user?.profilePic?.url || "/avatar.png"}
                    alt="profile"
                    className="w-full h-full object-cover"
                  />
                </div>
              </label>

              <ul className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-200 rounded-box w-40">
                <li><NavLink to="/profile">Profile</NavLink></li>
                <li>
                  <button onClick={handleLogout}>Logout</button>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}