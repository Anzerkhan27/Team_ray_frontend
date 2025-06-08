import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import "./NavBar.css";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); // trigger at 50px scroll
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <div className="navbar-content">
        <Link to="/" className="navbar-logo" onClick={closeMenu}>
          TEAM <span className="logo-maroon">RAY</span>
        </Link>

        <button className="navbar-toggle" onClick={handleToggle}>
          {isOpen ? <FiX /> : <FiMenu />}
        </button>

        <nav className={`navbar-links ${isOpen ? "open" : ""}`}>
          <ul>
            <li>
              <Link to="/members" onClick={closeMenu}>
                Meet the Team
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
