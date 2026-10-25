import { Link } from "react-router-dom";
import "./NotFound.css";

function NotFound() {
  return (
    <div className="notfound-wrapper">
      <div className="notfound-code">404</div>
      <h1 className="notfound-title">Page Not Found</h1>
      <p className="notfound-subtitle">
        The page you're looking for doesn't exist or may have been moved.
      </p>
      <Link to="/">
        <button className="btn btn-primary">Go Home</button>
      </Link>
    </div>
  );
}

export default NotFound;