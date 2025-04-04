// NavBar.js (correct component)
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import "./NavBar.css";

const NavBar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
            <div className="navbar-container">
                <Link to="/" className="logo">
                    TEAM <span className="logo-maroon">RAY</span>
                </Link>

                <button 
                    className="mobile-menu-icon" 
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                </button>

                <ul className={`nav-links ${isMobileMenuOpen ? "open" : ""}`}>
                    <li><Link to="/members">About us</Link></li>
                    <li><Link to="/news">News & Events</Link></li>
                    <li><Link to="/join">Get in touch</Link></li>
                </ul>
            </div>
        </nav>
    );
};

export default NavBar;