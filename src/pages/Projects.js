// export default Projects;
import React, { useEffect, useState } from "react";
import axios from "axios";
import ProjectModal from "./ProjectModal";

const Projects = () => {
    const [projects, setProjects] = useState([]);
    const [selectedProject, setSelectedProject] = useState(null); // State to track the selected project
    const [isModalOpen, setIsModalOpen] = useState(false); // State to manage modal visibility

    useEffect(() => {
        // Fetch project data from Django API
        axios.get("http://127.0.0.1:8000/api/projects/")
            .then((response) => {
                setProjects(response.data);
            })
            .catch((error) => {
                console.error("Error fetching projects:", error);
            });
    }, []);

    const openModal = (project) => {
        setSelectedProject(project); // Set the selected project
        setIsModalOpen(true); // Open the modal
    };

    const closeModal = () => {
        setSelectedProject(null); // Clear the selected project
        setIsModalOpen(false); // Close the modal
    };

    return (
        <div style={{ padding: "20px" }}>
            <h1>Our Projects</h1>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
                {projects.map((project) => (
                    <div
                        key={project.id}
                        style={{
                            border: "1px solid #ccc",
                            borderRadius: "8px",
                            padding: "10px",
                            width: "300px",
                            boxShadow: "0px 4px 6px rgba(0,0,0,0.1)",
                            cursor: "pointer",
                        }}
                        onClick={() => openModal(project)} // Open modal when clicked
                    >
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

            {/* Render the modal if a project is selected */}
            {isModalOpen && selectedProject && (
                <ProjectModal project={selectedProject} closeModal={closeModal} />
            )}
        </div>
    );
};

export default Projects;
