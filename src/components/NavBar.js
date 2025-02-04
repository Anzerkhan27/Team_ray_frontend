import React from "react";

const NavBar = () => {
  return (
    <nav style={{ padding: "10px", background: "#00509e", color: "white" }}>
      <h1>Team Ray</h1>
      <ul style={{ listStyle: "none", display: "flex", gap: "15px" }}>
                <li><a href="/" style={{ color: "white", textDecoration: "none" }}>Home</a></li>
                <li><a href="/about" style={{ color: "white", textDecoration: "none" }}>About Us</a></li>
                <li><a href="/projects" style={{ color: "white", textDecoration: "none" }}>Projects</a></li>
                <li><a href="/Members" style={{ color: "white", textDecoration: "none" }}>Team</a></li>

        </ul>
    </nav>
  );
};

export default NavBar;
