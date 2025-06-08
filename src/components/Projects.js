import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Projects.css";

const Projects = () => {
    const [projects, setProjects] = useState([]);

    // Simple fallback: use localhost if running locally
    const isLocalhost = window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1";
    const API_BASE_URL = isLocalhost
        ? "http://127.0.0.1:8000/api/"
        : "https://web-production-7860.up.railway.app/api/";

    useEffect(() => {
        axios.get(`${API_BASE_URL}projects/`)
            .then((response) => setProjects(response.data))
            .catch((error) => console.error("Error fetching projects:", error));
    }, [API_BASE_URL]);

    return (
        <div className="projects-section">
  <div className="projects-wrapper">
    <h1 className="section-title">Current Projects</h1>
    <div className="projects-grid">
      {projects.map((project) => (
        <div key={project.id} className="project-card">
          <img
            src={project.image || "https://via.placeholder.com/400"}
            alt={project.name}
            className="project-image"
          />
          <div className="project-info">
            <h3>{project.name}</h3>
            <p>{project.description?.substring(0, 120)}...</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>
    );
};

export default Projects;
