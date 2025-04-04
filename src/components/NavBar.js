import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FiMoon, FiSun, FiMenu, FiX } from "react-icons/fi";
import "./NavBar.css"; 

const NavBar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // Mobile menu state

    // Detect Scroll
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);



    // Toggle Mobile Menu
    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
            <div className="navbar-container">
                {/* Logo */}
                <Link to="/" className="logo">
                    TEAM <span className="logo-maroon">RAY</span>
                </Link>

                {/* Mobile Menu Icon */}
                <button className="mobile-menu-icon" onClick={toggleMobileMenu}>
                    {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                </button>

                {/* Navigation Links */}
                <ul className={`nav-links ${isMobileMenuOpen ? "open" : ""}`}>
                    <li><Link to="/members" onClick={toggleMobileMenu}>About us</Link></li>
                    <li><Link to="/news" onClick={toggleMobileMenu}>News & Events</Link></li>
                    <li><Link to="/join" onClick={toggleMobileMenu}>Get in touch</Link></li>
                </ul>

            </div>
        </nav>
    );
};

export default NavBar;



