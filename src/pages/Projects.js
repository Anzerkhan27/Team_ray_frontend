import React, { useEffect, useState } from "react";
import axios from "axios";

const Projects = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        // Fetch project data from Django API
        axios.get("https://team-ray-backend.onrender.com/api/projects/")
            .then((response) => {
                setProjects(response.data);
            })
            .catch((error) => {
                console.error("Error fetching projects:", error);
            });
    }, []);

    return (
        <div style={{ padding: "20px" }}>
            <h1>Our Projects</h1>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
                {projects.map((project) => (
                    <div key={project.id} style={{
                        border: "1px solid #ccc",
                        borderRadius: "8px",
                        padding: "10px",
                        width: "300px",
                        boxShadow: "0px 4px 6px rgba(0,0,0,0.1)",
                    }}>
                        <img
                            src={project.image || "https://via.placeholder.com/300"}
                            alt={project.name}
                            style={{ width: "100%", borderRadius: "8px" }}
                        />
                        <h3 style={{ margin: "10px 0" }}>{project.name}</h3>
                        <p>{project.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
