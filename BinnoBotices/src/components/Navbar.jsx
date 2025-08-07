import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const { user, logout } = useAuth();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
      <Link className="navbar-brand" to="/">
        BinnoBotices
      </Link>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav me-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contact">
              Contact
            </Link>
          </li>
        </ul>
        <ul className="navbar-nav">
          {user ? (
            <li className="nav-item">
              <button className="btn btn-outline-light" onClick={logout}>
                Logout
              </button>
            </li>
          ) : (
            <li className="nav-item">
              <Link className="btn btn-outline-light" to="/login">
                Login
              </Link>
              <Link to="/signup" className="nav-link">
                Signup
              </Link>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
}
