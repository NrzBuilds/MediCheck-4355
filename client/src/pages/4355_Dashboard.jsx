// // import { useSelector, useDispatch } from "react-redux";
// // import { useNavigate } from "react-router-dom";
// // import { logout } from "../redux/slices/authSlice";

// // function Dashboard() {
// //   const { user } = useSelector((state) => state.auth);
// //   const dispatch = useDispatch();
// //   const navigate = useNavigate();

// //   const handleLogout = () => {
// //     dispatch(logout());
// //     navigate("/login");
// //   };

// //   return (
// //     <div style={{ maxWidth: "600px", margin: "50px auto" }}>
// //       <h1>Dashboard</h1>
// //       {user ? (
// //         <>
// //           <p>Welcome, {user.name}!</p>
// //           <p>Email: {user.email}</p>
// //           <button onClick={handleLogout} style={{ padding: "10px 20px" }}>
// //             Logout
// //           </button>
// //         </>
// //       ) : (
// //         <p>You are not logged in.</p>
// //       )}
// //     </div>
// //   );
// // }

// // export default Dashboard;
// import { useSelector, useDispatch } from "react-redux";
// import { useNavigate, Link } from "react-router-dom";
// import "./Dashboard.css";
// import { logout } from "../redux/slices/authSlice";

// function Dashboard() {
//   const { user } = useSelector((state) => state.auth);
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     dispatch(logout());
//     navigate("/login");
//   };

//   return (
//     <div className="page-container">
//       <h1 className="page-title">Dashboard</h1>

//       {user ? (
//         <>
//           <div className="card dashboard-welcome-card">
//             <div className="dashboard-avatar">
//               {user.name ? user.name.charAt(0).toUpperCase() : "U"}
//             </div>
//             <div className="dashboard-welcome-text">
//               <h2>Welcome, {user.name}!</h2>
//               <p>{user.email}</p>
//             </div>
//           </div>

//           <p className="page-subtitle">Quick Actions</p>
//           <div className="dashboard-actions-grid">
//             <Link to="/symptom-checker" className="dashboard-action-card">
//               <div className="card">
//                 <div className="dashboard-action-icon">🩺</div>
//                 <h3>Symptom Checker</h3>
//                 <p>Check your symptoms and get predictions</p>
//               </div>
//             </Link>

//             <Link to="/doctors" className="dashboard-action-card">
//               <div className="card">
//                 <div className="dashboard-action-icon">👨‍⚕️</div>
//                 <h3>Find Doctors</h3>
//                 <p>Browse and book appointments with doctors</p>
//               </div>
//             </Link>

//             <Link to="/appointments" className="dashboard-action-card">
//               <div className="card">
//                 <div className="dashboard-action-icon">📅</div>
//                 <h3>My Appointments</h3>
//                 <p>View and manage your bookings</p>
//               </div>
//             </Link>

//             <Link to="/history" className="dashboard-action-card">
//               <div className="card">
//                 <div className="dashboard-action-icon">📋</div>
//                 <h3>Check History</h3>
//                 <p>Review your past symptom checks</p>
//               </div>
//             </Link>
//           </div>

//           <div className="dashboard-logout-row">
//             <button onClick={handleLogout} className="btn btn-danger">
//               Logout
//             </button>
//           </div>
//         </>
//       ) : (
//         <p>You are not logged in.</p>
//       )}
//     </div>
//   );
// }

import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import "./Dashboard.css";
import { logout, updateUserProfile, clearProfileMessages } from "../redux/slices/4355_authSlice";
import { fetchHistory } from "../redux/slices/4355_symptomSlice";
import { fetchMyAppointments } from "../redux/slices/4355_appointmentSlice";
function getGreeting() {
  const hour = new Date().getHours();
  if (hour < 12) return "Good Morning";
  if (hour < 17) return "Good Afternoon";
  return "Good Evening";
}

function Dashboard() {
  const { user, profileLoading, profileError, profileSuccess } = useSelector(
    (state) => state.auth
  );
  const { history } = useSelector((state) => state.symptom);
  const { appointments } = useSelector((state) => state.appointment);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [showEditForm, setShowEditForm] = useState(false);
  const [formData, setFormData] = useState({
    name: user?.name || "",
    email: user?.email || "",
    currentPassword: "",
    newPassword: "",
    confirmNewPassword: "",
  });
  const [formError, setFormError] = useState("");

  useEffect(() => {
    dispatch(fetchHistory());
    dispatch(fetchMyAppointments());
  }, [dispatch]);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  const openEditForm = () => {
    setFormData({
      name: user?.name || "",
      email: user?.email || "",
      currentPassword: "",
      newPassword: "",
      confirmNewPassword: "",
    });
    setFormError("");
    dispatch(clearProfileMessages());
    setShowEditForm(true);
  };

  const closeEditForm = () => {
    setShowEditForm(false);
    setFormError("");
    dispatch(clearProfileMessages());
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormError("");

    if (formData.newPassword || formData.confirmNewPassword) {
      if (!formData.currentPassword) {
        setFormError("Please enter your current password to set a new one.");
        return;
      }
      if (formData.newPassword !== formData.confirmNewPassword) {
        setFormError("New password and confirm password do not match.");
        return;
      }
      if (formData.newPassword.length < 6) {
        setFormError("New password must be at least 6 characters.");
        return;
      }
    }

    const payload = {
      name: formData.name,
      email: formData.email,
    };

    if (formData.newPassword) {
      payload.currentPassword = formData.currentPassword;
      payload.newPassword = formData.newPassword;
    }

    dispatch(updateUserProfile(payload)).then((result) => {
      if (updateUserProfile.fulfilled.match(result)) {
        setTimeout(() => {
          setShowEditForm(false);
        }, 1200);
      }
    });
  };

  const totalChecks = history.length;
  const totalAppointments = appointments.length;
  const pendingAppointments = appointments.filter(
    (a) => a.status === "pending"
  ).length;

  return (
    <div className="page-container">
      <h1 className="page-title">Dashboard</h1>

      {user ? (
        <>
          <div className="card dashboard-welcome-card">
            <div className="dashboard-avatar">
              {user.name ? user.name.charAt(0).toUpperCase() : "U"}
            </div>
            <div className="dashboard-welcome-text">
              <h2>
                {getGreeting()}, {user.name}!
              </h2>
              <p>{user.email}</p>
            </div>
            <button
              onClick={openEditForm}
              className="btn btn-secondary dashboard-edit-btn"
            >
              Edit Profile
            </button>
          </div>

          <div className="dashboard-stats-grid">
            <div className="card dashboard-stat-card">
              <div className="dashboard-stat-value">{totalChecks}</div>
              <div className="dashboard-stat-label">Symptom Checks</div>
            </div>
            <div className="card dashboard-stat-card">
              <div className="dashboard-stat-value">{totalAppointments}</div>
              <div className="dashboard-stat-label">Total Appointments</div>
            </div>
            <div className="card dashboard-stat-card">
              <div className="dashboard-stat-value">
                {pendingAppointments}
              </div>
              <div className="dashboard-stat-label">Pending Appointments</div>
            </div>
          </div>

          <p className="page-subtitle">Quick Actions</p>
          <div className="dashboard-actions-grid">
            <Link to="/symptom-checker" className="dashboard-action-card">
              <div className="card">
                <div className="dashboard-action-icon">🩺</div>
                <h3>Symptom Checker</h3>
                <p>Check your symptoms and get predictions</p>
              </div>
            </Link>

            <Link to="/doctors" className="dashboard-action-card">
              <div className="card">
                <div className="dashboard-action-icon">👨‍⚕️</div>
                <h3>Find Doctors</h3>
                <p>Browse and book appointments with doctors</p>
              </div>
            </Link>

            <Link to="/appointments" className="dashboard-action-card">
              <div className="card">
                <div className="dashboard-action-icon">📅</div>
                <h3>My Appointments</h3>
                <p>View and manage your bookings</p>
              </div>
            </Link>

            <Link to="/history" className="dashboard-action-card">
              <div className="card">
                <div className="dashboard-action-icon">📋</div>
                <h3>Check History</h3>
                <p>Review your past symptom checks</p>
              </div>
            </Link>
          </div>

          <div className="dashboard-logout-row">
            <button onClick={handleLogout} className="btn btn-danger">
              Logout
            </button>
          </div>

          {showEditForm && (
            <div className="modal-overlay" onClick={closeEditForm}>
              <div
                className="modal-content card"
                onClick={(e) => e.stopPropagation()}
              >
                <h2 className="modal-title">Edit Profile</h2>

                <form onSubmit={handleSubmit}>
                  <label className="form-label">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="form-input"
                    required
                  />

                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-input"
                    required
                  />

                  <hr className="modal-divider" />
                  <p className="modal-password-hint">
                    Leave password fields blank to keep your current password.
                  </p>

                  <label className="form-label">Current Password</label>
                  <input
                    type="password"
                    name="currentPassword"
                    value={formData.currentPassword}
                    onChange={handleChange}
                    className="form-input"
                  />

                  <label className="form-label">New Password</label>
                  <input
                    type="password"
                    name="newPassword"
                    value={formData.newPassword}
                    onChange={handleChange}
                    className="form-input"
                  />

                  <label className="form-label">Confirm New Password</label>
                  <input
                    type="password"
                    name="confirmNewPassword"
                    value={formData.confirmNewPassword}
                    onChange={handleChange}
                    className="form-input"
                  />

                  {formError && (
                    <p className="form-error-text">{formError}</p>
                  )}
                  {profileError && (
                    <p className="form-error-text">{profileError}</p>
                  )}
                  {profileSuccess && (
                    <p className="form-success-text">{profileSuccess}</p>
                  )}

                  <div className="modal-actions">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      onClick={closeEditForm}
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="btn btn-primary"
                      disabled={profileLoading}
                    >
                      {profileLoading ? "Saving..." : "Save Changes"}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </>
      ) : (
        <p>You are not logged in.</p>
      )}
    </div>
  );
}

export default Dashboard;