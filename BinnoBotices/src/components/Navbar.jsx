import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const { user, logout } = useAuth();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow-sm px-3">
      <div className="container-fluid">
        <Link className="navbar-brand fw-bold fs-4" to="/">
          BinnoBotices
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link fw-semibold" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fw-semibold" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fw-semibold" to="/contact">
                Contact
              </Link>
            </li>
          </ul>

          {/* ✅ Right section — buttons + greeting */}
          <ul className="navbar-nav ms-auto gap-2 flex-lg-row flex-column align-items-lg-center mt-3 mt-lg-0">
            {user ? (
              <>
                <li className="nav-item text-white text-center">
                  Hello, <strong>{user.displayName || "User"}</strong>
                </li>
                <li className="nav-item">
                  <button
                    className="btn btn-outline-light rounded-pill px-4 w-100 w-lg-auto"
                    onClick={logout}
                  >
                    Logout
                  </button>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <Link
                    className="btn btn-outline-light rounded-pill px-4 w-100 w-lg-auto"
                    to="/login"
                  >
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/signup"
                    className="btn btn-light text-primary rounded-pill px-4 fw-semibold w-100 w-lg-auto"
                  >
                    Signup
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}
