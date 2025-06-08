import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-logos">
        <img src="/uni_logo.png" alt="University of Huddersfield" />
        <img src="/sce_logo.jpg" alt="School of Computing and Engineering" />
        <img src="/su_logo.png" alt="Huddersfield Student Union" />
      </div>

      <div className="footer-socials">
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <i className="fab fa-linkedin-in"></i>
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <i className="fab fa-github"></i>
        </a>
      </div>

      <p className="footer-copy">© {new Date().getFullYear()} Team Ray | University of Huddersfield</p>
    </footer>
  );
};

export default Footer;
