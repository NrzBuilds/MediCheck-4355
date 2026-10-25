// // import { useEffect, useState } from "react";
// // import { useDispatch, useSelector } from "react-redux";
// // import { Link } from "react-router-dom";
// // import {
// //   fetchSymptomsList,
// //   toggleSymptom,
// //   checkSymptoms,
// //   clearResult,
// // } from "../redux/slices/symptomSlice";

// // function SymptomChecker() {
// //   const dispatch = useDispatch();
// //   const { allSymptoms, selectedSymptoms, result, loading, error } =
// //     useSelector((state) => state.symptom);

// //   const [searchTerm, setSearchTerm] = useState("");

// //   useEffect(() => {
// //     dispatch(fetchSymptomsList());
// //     dispatch(clearResult());
// //   }, [dispatch]);

// //   const handleCheckboxChange = (symptom) => {
// //     dispatch(toggleSymptom(symptom));
// //   };

// //   const handleSubmit = () => {
// //     if (selectedSymptoms.length === 0) {
// //       alert("Please select at least one symptom");
// //       return;
// //     }
// //     dispatch(checkSymptoms(selectedSymptoms));
// //   };

// //   // Filter symptoms based on search term
// //   const filteredSymptoms = allSymptoms.filter((symptom) =>
// //     symptom.toLowerCase().replace(/_/g, " ").includes(searchTerm.toLowerCase())
// //   );

// //   return (
// //     <div style={{ maxWidth: "800px", margin: "30px auto", padding: "0 20px" }}>
// //       <h1>Symptom Checker</h1>
// //       <p>Select your symptoms below and click "Check" to get a prediction.</p>

// //       {/* Search box */}
// //       <input
// //         type="text"
// //         placeholder="Search symptoms..."
// //         value={searchTerm}
// //         onChange={(e) => setSearchTerm(e.target.value)}
// //         style={{ width: "100%", padding: "10px", marginBottom: "15px" }}
// //       />

// //       {/* Selected count */}
// //       <p>
// //         <strong>{selectedSymptoms.length}</strong> symptom(s) selected
// //       </p>

// //       {/* Symptoms checkboxes list */}
// //       <div
// //         style={{
// //           maxHeight: "300px",
// //           overflowY: "auto",
// //           border: "1px solid #444",
// //           padding: "10px",
// //           display: "grid",
// //           gridTemplateColumns: "1fr 1fr",
// //           gap: "8px",
// //           marginBottom: "20px",
// //         }}
// //       >
// //         {filteredSymptoms.map((symptom) => (
// //           <label key={symptom} style={{ cursor: "pointer" }}>
// //             <input
// //               type="checkbox"
// //               checked={selectedSymptoms.includes(symptom)}
// //               onChange={() => handleCheckboxChange(symptom)}
// //               style={{ marginRight: "8px" }}
// //             />
// //             {symptom.replace(/_/g, " ")}
// //           </label>
// //         ))}
// //       </div>

// //       <button
// //         onClick={handleSubmit}
// //         disabled={loading}
// //         style={{ padding: "12px 25px", fontSize: "16px" }}
// //       >
// //         {loading ? "Checking..." : "Check Symptoms"}
// //       </button>

// //       {error && <p style={{ color: "red", marginTop: "15px" }}>{error}</p>}

// //       {/* Result display */}
// //       {result && (
// //         <div
// //           style={{
// //             marginTop: "25px",
// //             padding: "20px",
// //             border: "2px solid green",
// //             borderRadius: "8px",
// //           }}
// //         >
// //           <h2>Result</h2>
// //           <p>
// //             <strong>Predicted Disease:</strong> {result.predictedDisease}
// //           </p>
// //           <p>
// //             <strong>Recommended Doctor:</strong> {result.recommendedDoctor}
// //           </p>
// //           <Link to={`/doctors?specialization=${result.recommendedDoctor}`}>
// //             <button style={{ padding: "10px 20px", marginTop: "10px" }}>
// //               Find {result.recommendedDoctor}s
// //             </button>
// //           </Link>
// //         </div>
// //       )}
// //     </div>
// //   );
// // }

// // export default SymptomChecker;

// import { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { Link } from "react-router-dom";
// import {
//   fetchSymptomsList,
//   toggleSymptom,
//   checkSymptoms,
//   clearResult,
// } from "../redux/slices/symptomSlice";

// function SymptomChecker() {
//   const dispatch = useDispatch();
//   const { allSymptoms, selectedSymptoms, result, loading, error } =
//     useSelector((state) => state.symptom);

//   const [searchTerm, setSearchTerm] = useState("");

//   useEffect(() => {
//     dispatch(fetchSymptomsList());
//     dispatch(clearResult());
//   }, [dispatch]);

//   const handleCheckboxChange = (symptom) => {
//     dispatch(toggleSymptom(symptom));
//   };

//   const handleSubmit = () => {
//     if (selectedSymptoms.length === 0) {
//       alert("Please select at least one symptom");
//       return;
//     }
//     dispatch(checkSymptoms(selectedSymptoms));
//   };

//   const filteredSymptoms = allSymptoms.filter((symptom) =>
//     symptom.toLowerCase().replace(/_/g, " ").includes(searchTerm.toLowerCase())
//   );

//   return (
//     <div style={{ maxWidth: "800px", margin: "30px auto", padding: "0 20px", color: "#f1f5f9" }}>
//       <h1>Symptom Checker</h1>
//       <p style={{ color: "#94a3b8" }}>
//         Select your symptoms below and click "Check" to get a prediction.
//       </p>

//       <input
//         type="text"
//         placeholder="Search symptoms..."
//         value={searchTerm}
//         onChange={(e) => setSearchTerm(e.target.value)}
//         style={{
//           width: "100%",
//           padding: "10px",
//           marginBottom: "15px",
//           borderRadius: "6px",
//           border: "1px solid #334155",
//           backgroundColor: "#1e293b",
//           color: "#f1f5f9",
//         }}
//       />

//       <p>
//         <strong>{selectedSymptoms.length}</strong> symptom(s) selected
//       </p>

//       <div
//         style={{
//           maxHeight: "300px",
//           overflowY: "auto",
//           border: "1px solid #334155",
//           borderRadius: "8px",
//           padding: "15px",
//           display: "grid",
//           gridTemplateColumns: "1fr 1fr",
//           gap: "10px",
//           marginBottom: "20px",
//           backgroundColor: "#1e293b",
//         }}
//       >
//         {filteredSymptoms.map((symptom) => (
//           <label
//             key={symptom}
//             style={{
//               cursor: "pointer",
//               color: "#f1f5f9",
//               display: "flex",
//               alignItems: "center",
//             }}
//           >
//             <input
//               type="checkbox"
//               checked={selectedSymptoms.includes(symptom)}
//               onChange={() => handleCheckboxChange(symptom)}
//               style={{ marginRight: "8px" }}
//             />
//             {symptom.replace(/_/g, " ")}
//           </label>
//         ))}
//       </div>

//       <button
//         onClick={handleSubmit}
//         disabled={loading}
//         style={{
//           padding: "12px 25px",
//           fontSize: "16px",
//           backgroundColor: "#2563eb",
//           color: "#fff",
//           border: "none",
//           borderRadius: "6px",
//           fontWeight: "bold",
//         }}
//       >
//         {loading ? "Checking..." : "Check Symptoms"}
//       </button>

//       {error && <p style={{ color: "#ef4444", marginTop: "15px" }}>{error}</p>}

//       {result && (
//         <div
//           style={{
//             marginTop: "25px",
//             padding: "20px",
//             border: "2px solid #22c55e",
//             borderRadius: "8px",
//             backgroundColor: "#1e293b",
//           }}
//         >
//           <h2>Result</h2>
//           <p>
//             <strong>Predicted Disease:</strong> {result.predictedDisease}
//           </p>
//           <p>
//             <strong>Recommended Doctor:</strong> {result.recommendedDoctor}
//           </p>
//           <Link to={`/doctors?specialization=${result.recommendedDoctor}`}>
//             <button
//               style={{
//                 padding: "10px 20px",
//                 marginTop: "10px",
//                 backgroundColor: "#0ea5a4",
//                 color: "#fff",
//                 border: "none",
//                 borderRadius: "6px",
//               }}
//             >
//               Find {result.recommendedDoctor}s
//             </button>
//           </Link>
//         </div>
//       )}
//     </div>
//   );
// }

// export default SymptomChecker;

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  fetchSymptomsList,
  toggleSymptom,
  checkSymptoms,
  clearResult,
} from "../redux/slices/4355_symptomSlice";

function SymptomChecker() {
  const dispatch = useDispatch();
  const { allSymptoms, selectedSymptoms, result, loading, error } =
    useSelector((state) => state.symptom);

  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    dispatch(fetchSymptomsList());
    dispatch(clearResult());
  }, [dispatch]);

  const handleCheckboxChange = (symptom) => {
    dispatch(toggleSymptom(symptom));
  };

  const handleSubmit = () => {
    if (selectedSymptoms.length === 0) {
      alert("Please select at least one symptom");
      return;
    }
    dispatch(checkSymptoms(selectedSymptoms));
  };

  const filteredSymptoms = allSymptoms.filter((symptom) =>
    symptom.toLowerCase().replace(/_/g, " ").includes(searchTerm.toLowerCase())
  );

  return (
    <div className="page-container">
      <h1 className="page-title">Symptom Checker</h1>
      <p className="page-subtitle">
        Select your symptoms below and click "Check" to get a prediction.
      </p>

      <input
        type="text"
        placeholder="Search symptoms..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="input-field"
      />

      <p>
        <strong>{selectedSymptoms.length}</strong> symptom(s) selected
      </p>

      <div className="symptom-grid">
        {filteredSymptoms.map((symptom) => (
          <label key={symptom} className="symptom-item">
            <input
              type="checkbox"
              checked={selectedSymptoms.includes(symptom)}
              onChange={() => handleCheckboxChange(symptom)}
            />
            {symptom.replace(/_/g, " ")}
          </label>
        ))}
      </div>

      <button
        onClick={handleSubmit}
        disabled={loading}
        className="btn btn-primary"
      >
        {loading ? "Checking..." : "Check Symptoms"}
      </button>

      {error && <p className="msg-error">{error}</p>}

      {result && (
        <div className="card" style={{ marginTop: "25px", border: "2px solid var(--success)" }}>
          <h2>Result</h2>
          <p>
            <strong>Predicted Disease:</strong> {result.predictedDisease}
          </p>
          <p>
            <strong>Recommended Doctor:</strong> {result.recommendedDoctor}
          </p>
          <Link to={`/doctors?specialization=${result.recommendedDoctor}`}>
            <button className="btn btn-secondary" style={{ marginTop: "10px" }}>
              Find {result.recommendedDoctor}s
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default SymptomChecker;