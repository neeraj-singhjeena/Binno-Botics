// import { Link } from "react-router-dom";
// import { useAuth } from "../context/AuthContext";

// export default function Navbar() {
//   const { user, logout } = useAuth();

//   return (
//     <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
//       <Link className="navbar-brand" to="/">
//         BinnoBotices
//       </Link>
//       <div className="collapse navbar-collapse">
//         <ul className="navbar-nav me-auto">
//           <li className="nav-item">
//             <Link className="nav-link" to="/">
//               Home
//             </Link>
//           </li>
//           <li className="nav-item">
//             <Link className="nav-link" to="/about">
//               About
//             </Link>
//           </li>
//           <li className="nav-item">
//             <Link className="nav-link" to="/contact">
//               Contact
//             </Link>
//           </li>
//         </ul>
//         <ul className="navbar-nav">
//           {user ? (
//             <li className="nav-item">
//               <button className="btn btn-outline-light" onClick={logout}>
//                 Logout
//               </button>
//             </li>
//           ) : (
//             <li className="nav-item">
//               <Link className="btn btn-outline-light" to="/login">
//                 Login
//               </Link>
//               <Link to="/signup" className="nav-link">
//                 Signup
//               </Link>
//             </li>
//           )}
//         </ul>
//       </div>
//     </nav>
//   );
// }

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

          <ul className="navbar-nav ms-auto align-items-center">
            {user ? (
              <>
                <li className="nav-item me-3 text-white">
                  Hello, <strong>{user.displayName || "User"}</strong>
                </li>
                <li className="nav-item">
                  <button
                    className="btn btn-outline-light rounded-pill px-4"
                    onClick={logout}
                  >
                    Logout
                  </button>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item me-2">
                  <Link
                    className="btn btn-outline-light rounded-pill px-4"
                    to="/login"
                  >
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/signup"
                    className="btn btn-light text-primary rounded-pill px-4 fw-semibold"
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
