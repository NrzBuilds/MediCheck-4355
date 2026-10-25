// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { Link } from "react-router-dom";
// import { fetchHistory } from "../redux/slices/symptomSlice";

// function History() {
//   const dispatch = useDispatch();
//   const { history, loading, error } = useSelector((state) => state.symptom);

//   useEffect(() => {
//     dispatch(fetchHistory());
//   }, [dispatch]);

//   return (
//     <div style={{ maxWidth: "800px", margin: "30px auto", padding: "0 20px" }}>
//       <h1>Symptom Check History</h1>

//       {loading && <p>Loading history...</p>}
//       {error && <p style={{ color: "red" }}>{error}</p>}
//       {!loading && history.length === 0 && (
//         <p>You have no symptom check history yet.</p>
//       )}

//       {history.map((record) => (
//         <div
//           key={record._id}
//           style={{
//             border: "1px solid #444",
//             borderRadius: "8px",
//             padding: "15px",
//             marginBottom: "15px",
//           }}
//         >
//           <p>
//             <strong>Symptoms:</strong> {record.symptoms.join(", ")}
//           </p>
//           <p>
//             <strong>Predicted Disease:</strong> {record.predictedDisease}
//           </p>
//           <p>
//             <strong>Recommended Doctor:</strong> {record.recommendedDoctor}
//           </p>
//           <p style={{ fontSize: "0.85rem", color: "#aaa" }}>
//             Checked on: {new Date(record.createdAt).toLocaleString()}
//           </p>
//           <Link to={`/doctors?specialization=${record.recommendedDoctor}`}>
//             Find {record.recommendedDoctor}s
//           </Link>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default History;

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./History.css";
import { fetchHistory } from "../redux/slices/4355_symptomSlice";

function History() {
  const dispatch = useDispatch();
  const { history, loading, error } = useSelector((state) => state.symptom);

  useEffect(() => {
    dispatch(fetchHistory());
  }, [dispatch]);

  return (
    <div className="page-container">
      <h1 className="page-title">Symptom Check History</h1>
      <p className="page-subtitle">Your past symptom checks and predictions.</p>

      {loading && <p>Loading history...</p>}
      {error && <p className="msg-error">{error}</p>}
      {!loading && history.length === 0 && (
        <p>You have no symptom check history yet.</p>
      )}

      {history.map((record) => (
        <div key={record._id} className="card history-card">
          <div className="history-header">
            <h3 className="history-disease">{record.predictedDisease}</h3>
            <span className="history-timestamp">
              {new Date(record.createdAt).toLocaleString()}
            </span>
          </div>

          <p className="history-section-label">Symptoms</p>
          <div className="symptom-tags">
            {record.symptoms.map((symptom, idx) => (
              <span key={idx} className="symptom-tag">
                {symptom.replace(/_/g, " ")}
              </span>
            ))}
          </div>

          <div className="history-doctor-row">
            <div>
              <span className="history-doctor-label">Recommended Doctor: </span>
              <span className="history-doctor-value">{record.recommendedDoctor}</span>
            </div>
            <Link to={`/doctors?specialization=${record.recommendedDoctor}`}>
              <button className="btn btn-secondary">
                Find {record.recommendedDoctor}s
              </button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default History;