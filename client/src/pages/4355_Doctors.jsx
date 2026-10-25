// import { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useSearchParams } from "react-router-dom";
// import {
//   fetchAllDoctors,
//   fetchDoctorsBySpecialization,
// } from "../redux/slices/doctorSlice";
// import {
//   bookAppointment,
//   clearAppointmentMessages,
// } from "../redux/slices/appointmentSlice";

// function Doctors() {
//   const dispatch = useDispatch();
//   const { doctors, loading, error } = useSelector((state) => state.doctor);
//   const { successMessage, error: appointmentError } = useSelector(
//     (state) => state.appointment
//   );
//   const [searchParams] = useSearchParams();
//   const [filterText, setFilterText] = useState("");

//   const [bookingDoctorId, setBookingDoctorId] = useState(null);
//   const [date, setDate] = useState("");
//   const [timeSlot, setTimeSlot] = useState("");

//   useEffect(() => {
//     const specializationFromURL = searchParams.get("specialization");
//     if (specializationFromURL) {
//       setFilterText(specializationFromURL);
//       dispatch(fetchDoctorsBySpecialization(specializationFromURL));
//     } else {
//       dispatch(fetchAllDoctors());
//     }
//   }, [dispatch, searchParams]);

//   const handleFilterSubmit = () => {
//     if (filterText.trim() === "") {
//       dispatch(fetchAllDoctors());
//     } else {
//       dispatch(fetchDoctorsBySpecialization(filterText));
//     }
//   };

//   const handleShowAll = () => {
//     setFilterText("");
//     dispatch(fetchAllDoctors());
//   };

//   const handleBookClick = (doctorId) => {
//     setBookingDoctorId(doctorId);
//     dispatch(clearAppointmentMessages());
//   };

//   const handleConfirmBooking = (doctorId) => {
//     if (!date || !timeSlot) {
//       alert("Please select date and time slot");
//       return;
//     }
//     dispatch(bookAppointment({ doctorId, date, timeSlot }));
//     setBookingDoctorId(null);
//     setDate("");
//     setTimeSlot("");
//   };

//   return (
//     <div style={{ maxWidth: "900px", margin: "30px auto", padding: "0 20px" }}>
//       <h1>Our Doctors</h1>

//       {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}
//       {appointmentError && <p style={{ color: "red" }}>{appointmentError}</p>}

//       <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
//         <input
//           type="text"
//           placeholder="Filter by specialization (e.g., Cardiologist)"
//           value={filterText}
//           onChange={(e) => setFilterText(e.target.value)}
//           style={{ flex: 1, padding: "10px" }}
//         />
//         <button onClick={handleFilterSubmit} style={{ padding: "10px 20px" }}>
//           Filter
//         </button>
//         <button onClick={handleShowAll} style={{ padding: "10px 20px" }}>
//           Show All
//         </button>
//       </div>

//       {loading && <p>Loading doctors...</p>}
//       {error && <p style={{ color: "red" }}>{error}</p>}
//       {!loading && doctors.length === 0 && <p>No doctors found.</p>}

//       <div
//         style={{
//           display: "grid",
//           gridTemplateColumns: "1fr 1fr",
//           gap: "15px",
//         }}
//       >
//         {doctors.map((doctor) => (
//           <div
//             key={doctor._id}
//             style={{
//               border: "1px solid #444",
//               borderRadius: "8px",
//               padding: "15px",
//             }}
//           >
//             <h3>{doctor.name}</h3>
//             <p><strong>Specialization:</strong> {doctor.specialization}</p>
//             <p><strong>Qualification:</strong> {doctor.qualification}</p>
//             <p><strong>Experience:</strong> {doctor.experience} years</p>
//             <p><strong>Availability:</strong> {doctor.availability}</p>
//             <p><strong>Contact:</strong> {doctor.contact}</p>

//             {bookingDoctorId === doctor._id ? (
//               <div style={{ marginTop: "10px" }}>
//                 <input
//                   type="date"
//                   value={date}
//                   onChange={(e) => setDate(e.target.value)}
//                   style={{ width: "100%", padding: "8px", marginBottom: "8px" }}
//                 />
//                 <input
//                   type="text"
//                   placeholder="Time slot (e.g., 10:00 AM)"
//                   value={timeSlot}
//                   onChange={(e) => setTimeSlot(e.target.value)}
//                   style={{ width: "100%", padding: "8px", marginBottom: "8px" }}
//                 />
//                 <button
//                   onClick={() => handleConfirmBooking(doctor._id)}
//                   style={{ padding: "8px 15px", marginRight: "8px" }}
//                 >
//                   Confirm Booking
//                 </button>
//                 <button
//                   onClick={() => setBookingDoctorId(null)}
//                   style={{ padding: "8px 15px" }}
//                 >
//                   Cancel
//                 </button>
//               </div>
//             ) : (
//               <button
//                 onClick={() => handleBookClick(doctor._id)}
//                 style={{ padding: "8px 15px", marginTop: "10px" }}
//               >
//                 Book Appointment
//               </button>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Doctors;

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import "./Doctors.css";
import {
  fetchAllDoctors,
  fetchDoctorsBySpecialization,
} from "../redux/slices/4355_doctorSlice";
import {
  bookAppointment,
  clearAppointmentMessages,
} from "../redux/slices/4355_appointmentSlice";

function Doctors() {
  const dispatch = useDispatch();
  const { doctors, loading, error } = useSelector((state) => state.doctor);
  const { successMessage, error: appointmentError } = useSelector(
    (state) => state.appointment
  );
  const [searchParams] = useSearchParams();
  const [filterText, setFilterText] = useState("");

  const [bookingDoctorId, setBookingDoctorId] = useState(null);
  const [date, setDate] = useState("");
  const [timeSlot, setTimeSlot] = useState("");

  // Today's date in YYYY-MM-DD format, used to block past dates in the date picker
  const todayDate = new Date().toISOString().split("T")[0];

  useEffect(() => {
    const specializationFromURL = searchParams.get("specialization");
    if (specializationFromURL) {
      setFilterText(specializationFromURL);
      dispatch(fetchDoctorsBySpecialization(specializationFromURL));
    } else {
      dispatch(fetchAllDoctors());
    }
  }, [dispatch, searchParams]);

  const handleFilterSubmit = () => {
    if (filterText.trim() === "") {
      dispatch(fetchAllDoctors());
    } else {
      dispatch(fetchDoctorsBySpecialization(filterText));
    }
  };

  const handleShowAll = () => {
    setFilterText("");
    dispatch(fetchAllDoctors());
  };

  const handleBookClick = (doctorId) => {
    setBookingDoctorId(doctorId);
    dispatch(clearAppointmentMessages());
  };

  const handleConfirmBooking = (doctorId) => {
    if (!date || !timeSlot) {
      alert("Please select date and time slot");
      return;
    }
    dispatch(bookAppointment({ doctorId, date, timeSlot }));
    setBookingDoctorId(null);
    setDate("");
    setTimeSlot("");
  };

  return (
    <div className="page-container-wide">
      <h1 className="page-title">Our Doctors</h1>

      {successMessage && <p className="msg-success">{successMessage}</p>}
      {appointmentError && <p className="msg-error">{appointmentError}</p>}

      <div className="doctors-filter-row">
        <input
          type="text"
          placeholder="Filter by specialization (e.g., Cardiologist)"
          value={filterText}
          onChange={(e) => setFilterText(e.target.value)}
          className="input-field"
        />
        <button onClick={handleFilterSubmit} className="btn btn-primary">
          Filter
        </button>
        <button onClick={handleShowAll} className="btn btn-outline">
          Show All
        </button>
      </div>

      {loading && <p>Loading doctors...</p>}
      {error && <p className="msg-error">{error}</p>}
      {!loading && doctors.length === 0 && <p>No doctors found.</p>}

      <div className="card-grid">
        {doctors.map((doctor) => (
          <div key={doctor._id} className="card doctor-card">
            <h3>{doctor.name}</h3>
            <span className="specialization-badge">{doctor.specialization}</span>

            <div className="doctor-info-row">
              <span className="doctor-info-label">Qualification</span>
              <span className="doctor-info-value">{doctor.qualification}</span>
            </div>
            <div className="doctor-info-row">
              <span className="doctor-info-label">Experience</span>
              <span className="doctor-info-value">{doctor.experience} years</span>
            </div>
            <div className="doctor-info-row">
              <span className="doctor-info-label">Availability</span>
              <span className="doctor-info-value">{doctor.availability}</span>
            </div>
            <div className="doctor-info-row">
              <span className="doctor-info-label">Contact</span>
              <span className="doctor-info-value">{doctor.contact}</span>
            </div>

            {bookingDoctorId === doctor._id ? (
              <div className="booking-form">
                <input
                  type="date"
                  value={date}
                  min={todayDate}
                  onChange={(e) => setDate(e.target.value)}
                  className="input-field"
                />
                <input
                  type="time"
                  value={timeSlot}
                  onChange={(e) => setTimeSlot(e.target.value)}
                  className="input-field"
                />
                <div className="booking-actions">
                  <button
                    onClick={() => handleConfirmBooking(doctor._id)}
                    className="btn btn-primary"
                  >
                    Confirm Booking
                  </button>
                  <button
                    onClick={() => setBookingDoctorId(null)}
                    className="btn btn-outline"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            ) : (
              <button
                onClick={() => handleBookClick(doctor._id)}
                className="btn btn-primary"
              >
                Book Appointment
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Doctors;