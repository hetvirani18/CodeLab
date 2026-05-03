import { Link } from "react-router";

// components/Navbar.jsx
export default function HomeNavbar() {
  return (
    <nav className="navbar bg-base-300/80 backdrop-blur-md border-b border-base-content/10 sticky top-0 z-50 px-6">
      <div className="container mx-auto">
        <div className="navbar-start">
          <span className="text-3xl font-bold">
            code<span className="text-green-400">Lab</span>
          </span>
        </div>

        {/* <div className="navbar-center hidden lg:flex">
          <Link to="/" className="btn btn-ghost normal-case text-lg">
            Home
          </Link>
          <Link to="/problemset" className="btn btn-ghost normal-case text-lg">
            Problemset
          </Link>
        </div> */}

        <div className="navbar-end gap-2">
          <Link to="/login" className="btn btn-ghost btn-sm text-">
            Login
          </Link>
          <Link to="/signup" className="btn btn-sm bg-green-400 text-black font-bold">
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
}