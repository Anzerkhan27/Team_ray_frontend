import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import "./NavBar.css";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggles the mobile slider
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  // Close the slider when a link is clicked
  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="navbar">
      <div className="navbar-content">
        {/* Logo */}
        <Link to="/" className="navbar-logo" onClick={closeMenu}>
          TEAM <span className="logo-maroon">RAY</span>
        </Link>

        {/* Hamburger / Close icon */}
        <button className="navbar-toggle" onClick={handleToggle}>
          {isOpen ? <FiX /> : <FiMenu />}
        </button>

        {/* Nav Links (desktop + mobile slider) */}
        <nav className={`navbar-links ${isOpen ? "open" : ""}`}>
          <ul>
            <li>
              <Link to="/members" onClick={closeMenu}>
                About us
              </Link>
            </li>
            <li>
              <Link to="/news" onClick={closeMenu}>
                News &amp; Events
              </Link>
            </li>
            <li>
              <Link to="/join" onClick={closeMenu}>
                Get in touch
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
