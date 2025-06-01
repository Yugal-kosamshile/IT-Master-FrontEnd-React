import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { clearDashboard, logout } from '../../store';
import "../styles/Navbar.css"

import { Dropdown } from "bootstrap";

function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [username, setUsername] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isLoggedIn);
  const user = useSelector((state) => state.auth.user);


  useEffect(() => {
    if (!isAuthenticated) {
      localStorage.removeItem("username");
    }
  }, [isAuthenticated]);
  

  useEffect(() => {
    setIsAdmin(localStorage.getItem("isAdmin") === "true");
    setUsername(localStorage.getItem("username") || "");
  }, []);

  const toggleNavbar = () => {
  
      const dropdownElementList = document.querySelectorAll(".dropdown-toggle");
      dropdownElementList.forEach((dropdown) => new Dropdown(dropdown));
  
      setIsNavOpen((prev) => !prev);
      const navCollapse = document.getElementById("navbarNav");
      if (navCollapse) {
        if (isNavOpen) {
          navCollapse.classList.remove("show");
        } else {
          navCollapse.classList.add("show");
        }
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
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <Link className="navbar-brand it-master-brand" to="/home">
            <h5 className='it-master'>IT-MASTER</h5>
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
                <Link className="nav-link" to="/courses">Courses</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/dashboard">Dashboard</Link>
              </li>
              {isAdmin && (
                <>
                 <li className="nav-item">
                  <Link className="nav-link" to="/users">Users</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/add-course">Add Course</Link>
                </li>
                </>
              )}
              <li className="nav-item">
                <Link className="nav-link" to="/about">About Us</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">Contact</Link>
              </li>

              {isAuthenticated ? (
                  <li className="nav-item dropdown">
                    <button
                      className="btn btn-outline-light dropdown-toggle"
                      id="userDropdown"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <i className="fa-solid fa-user"></i> 
                     {username === "Yugalk" ? " Admin" : user?.username}

                    </button>
                    <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="userDropdown">

                      <li>
                        <button className="dropdown-item text-danger" 
                        // onClick={() => dispatch(logout())}
                        
                        onClick={handleLogout}
                        
                          >

                          <i className="fa-solid fa-sign-out-alt"></i> Logout
                        </button>
                      </li>
                    </ul>
                  </li>
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
