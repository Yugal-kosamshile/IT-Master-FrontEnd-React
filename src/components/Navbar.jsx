import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { clearDashboard, logout } from '../../store'; // Adjust path to your slice/actions

function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [username, setUsername] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    setIsAdmin(localStorage.getItem("isAdmin") === "true");
    setUsername(localStorage.getItem("username") || "");
  }, []);

  const toggleNavbar = () => {
    setIsNavOpen((prev) => !prev);
    const navCollapse = document.getElementById("navbarNav");
    if (navCollapse) {
      navCollapse.classList.toggle("show", !isNavOpen);
    }
  };

  const handleLogout = () => {
    dispatch(logout());     
    dispatch(clearDashboard())

    localStorage.removeItem("isAdmin");  // Keep these if used separately
    localStorage.removeItem("username");

    setIsAdmin(false);
    setUsername("");

    navigate("/login");
  };

  return (
    <div className="d-flex flex-column">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <Link className="navbar-brand" to="/home">
            <img
              src="/topicon.png"
              alt="IT-Master Logo"
              height="50"
              className="d-inline-block align-text-top"
            />
          </Link>

          <button
            className="navbar-toggler bg-light"
            type="button"
            onClick={toggleNavbar}
            aria-controls="navbarNav"
            aria-expanded={isNavOpen}
            aria-label="Toggle navigation"
          ></button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/home">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/dashboard">Dashboard</Link>
              </li>
              {isAdmin && (
                <li className="nav-item">
                  <Link className="nav-link" to="/add-course">Add Course</Link>
                </li>
              )}
              <li className="nav-item">
                <Link className="nav-link" to="/about">About Us</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">Contact</Link>
              </li>

              {username ? (
                <>
                  <li className="nav-item">
                    <span className="nav-link disabled">👤 {username}</span>
                  </li>
                  <li className="nav-item">
                    <button className="btn btn-link nav-link" onClick={handleLogout}>Logout</button>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item">
                    <Link className="nav-link" to="/login">Login</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/register">Register</Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
