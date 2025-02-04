import React, { useEffect, useState } from "react";
import axios from "axios";

const Projects = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        axios.get("http://127.0.0.1:8000/api/projects/")
            .then((response) => setProjects(response.data))
            .catch((error) => console.error("Error fetching projects:", error));
    }, []);

    return (
        <div style={{ padding: "20px" }}>
            <h1>Our Projects</h1>
            <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
                gap: "20px",
            }}>
                {projects.map((project) => (
                    <div
                        key={project.id}
                        style={{
                            position: "relative",
                            borderRadius: "10px",
                            overflow: "hidden",
                            cursor: "pointer",
                            boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                            transition: "transform 0.3s ease-in-out",
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.05)"}
                        onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
                    >
                        <img
                            src={project.image || "https://via.placeholder.com/400"}
                            alt={project.name}
                            style={{
                                width: "100%",
                                height: "250px",
                                objectFit: "cover",
                                transition: "filter 0.3s ease",
                            }}
                        />
                        {/* Description Overlay on Hover */}
                        <div style={{
                            position: "absolute",
                            top: "0",
                            left: "0",
                            width: "100%",
                            height: "100%",
                            background: "rgba(0, 0, 0, 0.7)",
                            color: "white",
                            opacity: "0",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                            padding: "20px",
                            textAlign: "center",
                            transition: "opacity 0.3s ease",
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.opacity = "1"}
                        onMouseLeave={(e) => e.currentTarget.style.opacity = "0"}
                        >
                            <h3 style={{ margin: "0", fontSize: "1.2em" }}>{project.name}</h3>
                            <p style={{ fontSize: "0.9em", maxWidth: "90%" }}>{project.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
