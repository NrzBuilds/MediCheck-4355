// import { Link, useNavigate } from "react-router-dom";
// import { useSelector, useDispatch } from "react-redux";
// import { logout } from "../redux/slices/authSlice";

// function Navbar() {
//   const { user } = useSelector((state) => state.auth);
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     dispatch(logout());
//     navigate("/login");
//   };

//   return (
//     <nav
//       style={{
//         display: "flex",
//         justifyContent: "space-between",
//         padding: "15px 30px",
//         borderBottom: "1px solid #444",
//       }}
//     >
//       <Link to="/" style={{ fontWeight: "bold", fontSize: "20px" }}>
//         MediCheck
//       </Link>
//       <div style={{ display: "flex", gap: "20px" }}>
//         {user ? (
//           <>
//             <Link to="/dashboard">Dashboard</Link>
//             <Link to="/symptom-checker">Symptom Checker</Link>
//             <Link to="/doctors">Doctors</Link>
//             <Link to="/appointments">Appointments</Link>
//             <Link to="/history">History</Link>
//             <button onClick={handleLogout}>Logout</button>
//           </>
//         ) : (
//           <>
//             <Link to="/login">Login</Link>
//             <Link to="/register">Register</Link>
//           </>
//         )}
//       </div>
//     </nav>
//   );
// }

// export default Navbar;

import { NavLink, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "./Navbar.css";
import { logout } from "../redux/slices/4355_authSlice";

function Navbar() {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <NavLink to="/" className="navbar-logo">
        <span className="navbar-logo-icon">MC</span>
        MediCheck
      </NavLink>

      <div className="navbar-links">
        {user ? (
          <>
            <NavLink to="/dashboard" className="navbar-link">
              Dashboard
            </NavLink>
            <NavLink to="/symptom-checker" className="navbar-link">
              Symptom Checker
            </NavLink>
            <NavLink to="/doctors" className="navbar-link">
              Doctors
            </NavLink>
            <NavLink to="/appointments" className="navbar-link">
              Appointments
            </NavLink>
            <NavLink to="/history" className="navbar-link">
              History
            </NavLink>
            <button onClick={handleLogout} className="navbar-logout-btn">
              Logout
            </button>
          </>
        ) : (
          <>
            <NavLink to="/login" className="navbar-link">
              Login
            </NavLink>
            <NavLink to="/register" className="navbar-link">
              Register
            </NavLink>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;