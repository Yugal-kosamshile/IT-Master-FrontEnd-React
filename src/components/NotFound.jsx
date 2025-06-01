import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom"; 

function NotFound() {
  const navigate = useNavigate();

  useEffect(() => {
    const timeout = setTimeout(() => {
      navigate("/home");
    }, 5000);

    return () => clearTimeout(timeout); // Clean up on unmount
  }, [navigate]);

  return (
    <div className="not-found-page d-flex flex-column align-items-center justify-content-center min-vh-80 bg-light text-center">
      <img
        src="notfound.jpg"
        alt="404 Not Found"
        className="img-fluid not-found-img"
      />
      <p className="mt-4 text-muted">Oops! Page not found. Redirecting to home in 5 seconds...</p>
    </div>
  );
}

export default NotFound;
