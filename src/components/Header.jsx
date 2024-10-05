import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Header.scss';
import '../App.css';

const Header = () => {
  const location = useLocation(); 
  const navigate = useNavigate(); 
  const [isOpen, setIsOpen] = useState(false); 

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleClick = (id) => {
    setIsOpen(false);
    if (location.pathname === '/') {
      handleScroll(id);
    } else {
      navigate('/');
      setTimeout(() => handleScroll(id), 300);
    }
  };

  const toggleSidebar = () => {
    setIsOpen(!isOpen); // Toggling the state for opening/closing the sidebar
  };

  return (
    <>
      <div className={`overlay ${isOpen ? 'open' : ''}`} onClick={toggleSidebar}></div>
      
      <header className="header" id="header">
        <div className="container">
          <div className="burger-icon" onClick={toggleSidebar}>
            <div className={isOpen ? 'cross-icon' : ''}></div>
            <div className={isOpen ? 'cross-icon' : ''}></div>
            <div className={isOpen ? 'cross-icon' : ''}></div>
          </div>

          <div className="logo">
            <Link to="/">
              <p onClick={() => handleClick('hero')} className="logo-text">ANCONS INTERNATIONAL</p>
            </Link>
          </div>

          <nav className="desktop-nav">
            <ul className="nav-links">
              <li><button onClick={() => handleClick('hero')} className="link-button">Home</button></li>
              <li><button onClick={() => handleClick('services')} className="link-button">Services</button></li>
              <li><button onClick={() => handleClick('about')} className="link-button">About</button></li>
              <li><button onClick={() => handleClick('contact')} className="link-button">Contact</button></li>
            </ul>
          </nav>

          {/* Updated to include 'open' class when sidebar is toggled */}
          <div className={`sidebar ${isOpen ? 'open' : ''}`}>
            <ul className="nav-links">
              <li><button onClick={() => handleClick('hero')} className="link-button">Home</button></li>
              <li><button onClick={() => handleClick('services')} className="link-button">Services</button></li>
              <li><button onClick={() => handleClick('about')} className="link-button">About</button></li>
              <li><button onClick={() => handleClick('contact')} className="link-button">Contact</button></li>
            </ul>
          </div>

          <div className="apply-button">
            <Link to="/apply" className="btn-apply">Apply</Link>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
