import React from "react";
import "./Footer.css"; // Link to external CSS for footer

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-logos">
        <img src="/uni_logo.png" alt="University of Huddersfield" />
        <img src="/sce_logo.jpg" alt="School of Computing and Engineering" />
        <img src="/su_logo.png" alt="Huddersfield Student Union" />
      </div>
    </footer>
  );
};

export default Footer;
