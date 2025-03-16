import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Projects.css"; // Keep styling modular

const Projects = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        axios.get("https://web-production-7860.up.railway.app/api/projects/")
            .then((response) => setProjects(response.data))
            .catch((error) => console.error("Error fetching projects:", error));
    }, []);

    return (
        <div className="projects-section">
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
                            <p>{project.description.substring(0, 120)}...</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
