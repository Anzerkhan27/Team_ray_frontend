import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FiMoon, FiSun } from "react-icons/fi";
import "./NavBar.css"; // ✅ Now using pure CSS

const NavBar = () => {
    const [isDarkMode, setIsDarkMode] = useState(true); // Dark mode set to true by default
    const [isScrolled, setIsScrolled] = useState(false);

    // Detect Scroll
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Set dark mode class on the body when the page loads
    useEffect(() => {
        document.body.classList.add("dark-mode"); // Always add dark mode on initial load
    }, []);

    // Toggle Dark Mode
    const toggleDarkMode = () => {
        setIsDarkMode((prevMode) => {
            const newMode = !prevMode;
            if (newMode) {
                document.body.classList.add("dark-mode");
            } else {
                document.body.classList.remove("dark-mode");
            }
            return newMode;
        });
    };

    return (
        <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
            <div className="navbar-container">
                {/* Logo */}
                <Link to="/" className="logo">
                    TEAM <span className="logo-maroon">RAY</span>
                </Link>

                {/* Navigation Links */}
                <ul className="nav-links">
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/projects">Projects</Link></li>
                    <li><Link to="/members">Team</Link></li>
                    <li><Link to="/join">Join Us</Link></li>
                </ul>

                {/* Dark Mode Toggle */}
                <button className="dark-mode-toggle" onClick={toggleDarkMode}>
                    {isDarkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
                </button>
            </div>
        </nav>
    );
};

export default NavBar;
