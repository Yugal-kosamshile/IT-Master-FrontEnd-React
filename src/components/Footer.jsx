import React from "react";
import { Link } from "react-router-dom";
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../index.css';

function Footer() {
  return (
    <footer className="footer bg-dark text-white pt-5 pb-3 mt-auto mb-0">
      <div className="container">
        <div className="row text-center text-md-start">

          {/* Quick Links */}
          <div className="col-12 col-md-4 mb-4 mb-md-0">
            <h5 className="text-uppercase">Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/" className="footer-link">Home</Link>
              </li>
              <li>
                <Link to="/about" className="footer-link">About Us</Link>
              </li>
              <li>
                <Link to="/contact" className="footer-link">Contact Us</Link> 
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="col-12 col-md-4 mb-4 mb-md-0 text-center">
            <h5 className="text-uppercase">Follow Us</h5>
            <div className="d-flex justify-content-center mt-3">
              <a href="https://facebook.com" className="text-white mx-3" aria-label="Facebook">
                <i className="fab fa-facebook fa-2x"></i>
              </a>
              <a href="https://twitter.com" className="text-white mx-3" aria-label="Twitter">
                <i className="fab fa-twitter fa-2x"></i>
              </a>
              <a href="https://instagram.com" className="text-white mx-3" aria-label="Instagram">
                <i className="fab fa-instagram fa-2x"></i>
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="col-12 col-md-4">
            <h5 className="text-uppercase">Contact</h5>
            <p className="mb-1">📞 123-456-7890</p>
            <p className="mb-1">📍 123 Chandrapur, Maharashtra, India</p>
            <p>📧 support@itmaster.com</p>
          </div>

        </div>

        <hr className="bg-light mt-4" />
        <p className="text-center mb-0 small">
          © {new Date().getFullYear()} <strong>IT-Master</strong>. All Rights Reserved. ❤️YugalK
        </p>
      </div>
    </footer>
  );
}

export default Footer;
