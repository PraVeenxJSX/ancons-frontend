import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import './Footer.scss';
import '../App.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; 2024 Ancons. All Rights Reserved.</p>
        <ul className="footer-links">
          <li>
            <Link to="/privacy-policy">Privacy Policy</Link>
          </li>
          <li>
            <Link to="/terms-conditions">Terms & Conditions</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
