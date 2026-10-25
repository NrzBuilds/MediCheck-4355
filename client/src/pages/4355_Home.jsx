import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  const { user } = useSelector((state) => state.auth);

  return (
    <div>
      <div className="hero-section">
        <h1 className="hero-title">AI-Powered Symptom Checker & Doctor Recommendation</h1>
        <p className="hero-subtitle">
          Describe your symptoms, get an instant AI-based prediction, and
          find the right specialist doctor — all in one place with MediCheck.
        </p>

        <div className="hero-cta-row">
          {user ? (
            <Link to="/dashboard">
              <button className="btn btn-primary">Go to Dashboard</button>
            </Link>
          ) : (
            <>
              <Link to="/register">
                <button className="btn btn-primary">Get Started</button>
              </Link>
              <Link to="/login">
                <button className="btn btn-outline">Login</button>
              </Link>
            </>
          )}
        </div>
      </div>

      <div className="features-section">
        <h2 className="features-heading">How MediCheck Helps You</h2>
        <div className="features-grid">
          <div className="card feature-card">
            <div className="feature-icon">🩺</div>
            <h3>Symptom Checker</h3>
            <p>Select your symptoms and get an AI-powered disease prediction instantly.</p>
          </div>
          <div className="card feature-card">
            <div className="feature-icon">👨‍⚕️</div>
            <h3>Find Doctors</h3>
            <p>Browse specialists recommended based on your predicted condition.</p>
          </div>
          <div className="card feature-card">
            <div className="feature-icon">📅</div>
            <h3>Book Appointments</h3>
            <p>Schedule and manage appointments with doctors in just a few clicks.</p>
          </div>
          <div className="card feature-card">
            <div className="feature-icon">📋</div>
            <h3>Track History</h3>
            <p>Keep a record of all your past symptom checks and predictions.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;