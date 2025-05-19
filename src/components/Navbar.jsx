import {useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  
  const [isNavOpen, setIsNavOpen] = useState(false);

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


  return (
     <div className="d-flex flex-column ">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container">
            <Link className="navbar-brand" to="/home">IT-Master</Link>

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
                  <Link className="nav-link" to="/login">Login</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/courses">Courses</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/dashboard">Dashboard</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/register">Register</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
  );
}

export default Navbar;
