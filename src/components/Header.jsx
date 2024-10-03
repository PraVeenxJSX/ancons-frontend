import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Header.scss';
import "../App.css";

const Header = () => {
  const location = useLocation(); // Get the current location
  const navigate = useNavigate(); // Used for programmatic navigation
  const [isOpen, setIsOpen] = useState(false); // State for sidebar

  // Scroll to the section if on the homepage
  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Handle link clicks
  const handleClick = (id) => {
    setIsOpen(false); // Close sidebar when navigating
    if (location.pathname === "/") {
      // If already on the homepage, scroll to the section
      handleScroll(id);
    } else {
      // If not on the homepage, navigate to the homepage first, then scroll
      navigate("/");
      setTimeout(() => handleScroll(id), 300); // Delay to ensure the homepage is loaded
    }
  };

  // Toggle sidebar
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header" id="header">
      <div className="container">
        <div className="logo">
          <Link to="/">
            <img src="/logo.webp" alt="Ancons Logo" onClick={() => handleClick('hero')} className="logo-image" />
          </Link>
        </div>

        {/* Desktop nav links (visible on larger screens) */}
        <nav className="desktop-nav">
          <ul className="nav-links">
            <li>
              <button onClick={() => handleClick('hero')} className="link-button">Home</button>
            </li>
            <li>
              <button onClick={() => handleClick('services')} className="link-button">Services</button>
            </li>
            <li>
              <button onClick={() => handleClick('about')} className="link-button">About</button>
            </li>
            <li>
              <button onClick={() => handleClick('contact')} className="link-button">Contact</button>
            </li>
          </ul>
        </nav>

        {/* Mobile burger menu */}
        <nav>
          <div className="burger-icon" onClick={toggleSidebar}>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </nav>

        {/* Sidebar for mobile */}
        <div className={`sidebar ${isOpen ? 'open' : ''}`}>
          <ul className="nav-links">
            <li>
              <button onClick={() => handleClick('hero')} className="link-button">Home</button>
            </li>
            <li>
              <button onClick={() => handleClick('services')} className="link-button">Services</button>
            </li>
            <li>
              <button onClick={() => handleClick('about')} className="link-button">About</button>
            </li>
            <li>
              <button onClick={() => handleClick('contact')} className="link-button">Contact</button>
            </li>
          </ul>
        </div>

        {/* Apply Button */}
        <div className="apply-button">
          <Link to="/apply" className="btn-apply">Apply</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
