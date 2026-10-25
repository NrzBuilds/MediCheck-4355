// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   fetchMyAppointments,
//   cancelAppointment,
// } from "../redux/slices/appointmentSlice";

// function Appointments() {
//   const dispatch = useDispatch();
//   const { appointments, loading, error, successMessage } = useSelector(
//     (state) => state.appointment
//   );

//   useEffect(() => {
//     dispatch(fetchMyAppointments());
//   }, [dispatch]);

//   const handleCancel = (id) => {
//     if (window.confirm("Are you sure you want to cancel this appointment?")) {
//       dispatch(cancelAppointment(id));
//     }
//   };

//   return (
//     <div style={{ maxWidth: "800px", margin: "30px auto", padding: "0 20px" }}>
//       <h1>My Appointments</h1>

//       {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}
//       {loading && <p>Loading appointments...</p>}
//       {error && <p style={{ color: "red" }}>{error}</p>}
//       {!loading && appointments.length === 0 && (
//         <p>You have no appointments booked yet.</p>
//       )}

//       {appointments.map((appt) => (
//         <div
//           key={appt._id}
//           style={{
//             border: "1px solid #444",
//             borderRadius: "8px",
//             padding: "15px",
//             marginBottom: "15px",
//           }}
//         >
//           <p>
//             <strong>Doctor:</strong> {appt.doctorId?.name} (
//             {appt.doctorId?.specialization})
//           </p>
//           <p>
//             <strong>Contact:</strong> {appt.doctorId?.contact}
//           </p>
//           <p>
//             <strong>Date:</strong> {appt.date}
//           </p>
//           <p>
//             <strong>Time:</strong> {appt.timeSlot}
//           </p>
//           <p>
//             <strong>Status:</strong>{" "}
//             <span
//               style={{
//                 color:
//                   appt.status === "cancelled"
//                     ? "red"
//                     : appt.status === "confirmed"
//                     ? "green"
//                     : "orange",
//               }}
//             >
//               {appt.status}
//             </span>
//           </p>

//           {appt.status !== "cancelled" && (
//             <button
//               onClick={() => handleCancel(appt._id)}
//               style={{ padding: "8px 15px" }}
//             >
//               Cancel Appointment
//             </button>
//           )}
//         </div>
//       ))}
//     </div>
//   );
// }

// export default Appointments;

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Appointments.css";
import {
  fetchMyAppointments,
  cancelAppointment,
} from "../redux/slices/4355_appointmentSlice";

function Appointments() {
  const dispatch = useDispatch();
  const { appointments, loading, error, successMessage } = useSelector(
    (state) => state.appointment
  );

  useEffect(() => {
    dispatch(fetchMyAppointments());
  }, [dispatch]);

  const handleCancel = (id) => {
    if (window.confirm("Are you sure you want to cancel this appointment?")) {
      dispatch(cancelAppointment(id));
    }
  };

  return (
    <div className="page-container">
      <h1 className="page-title">My Appointments</h1>
      <p className="page-subtitle">View and manage your booked appointments.</p>

      {successMessage && <p className="msg-success">{successMessage}</p>}
      {loading && <p>Loading appointments...</p>}
      {error && <p className="msg-error">{error}</p>}
      {!loading && appointments.length === 0 && (
        <p>You have no appointments booked yet.</p>
      )}

      {appointments.map((appt) => (
        <div key={appt._id} className="card appointment-card">
          <div className="appointment-header">
            <div>
              <h3>{appt.doctorId?.name}</h3>
              <div className="appointment-doctor-spec">
                {appt.doctorId?.specialization}
              </div>
            </div>
            <span className={`badge badge-${appt.status}`}>{appt.status}</span>
          </div>

          <div className="appointment-info-grid">
            <span className="appointment-info-label">Contact</span>
            <span className="appointment-info-value">{appt.doctorId?.contact}</span>

            <span className="appointment-info-label">Date</span>
            <span className="appointment-info-value">{appt.date}</span>

            <span className="appointment-info-label">Time</span>
            <span className="appointment-info-value">{appt.timeSlot}</span>
          </div>

          {appt.status !== "cancelled" && (
            <button
              onClick={() => handleCancel(appt._id)}
              className="btn btn-danger"
            >
              Cancel Appointment
            </button>
          )}
        </div>
      ))}
    </div>
  );
}

export default Appointments;