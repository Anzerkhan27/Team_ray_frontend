import React from "react";

const ProjectModal = ({ project, closeModal }) => {
    return (
        <div style={{
            position: "fixed",
            top: "0",
            left: "0",
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: "1000",
        }}>
            <div style={{
                background: "#fff",
                padding: "20px",
                borderRadius: "8px",
                width: "500px",
                maxWidth: "90%",
                boxShadow: "0px 4px 10px rgba(0,0,0,0.2)",
            }}>
                <button
                    onClick={closeModal}
                    style={{
                        background: "transparent",
                        border: "none",
                        fontSize: "18px",
                        fontWeight: "bold",
                        cursor: "pointer",
                        float: "right",
                    }}
                >
                    &times;
                </button>
                <img
                    src={project.image || "https://via.placeholder.com/500"}
                    alt={project.name}
                    style={{ width: "100%", borderRadius: "8px", marginBottom: "15px" }}
                    onError={(e) => console.error("Modal Image failed to load:", e.target.src)}
                />
                <h2>{project.name}</h2>
                <p>{project.description}</p>
                <p><strong>Created At:</strong> {new Date(project.created_at).toLocaleDateString()}</p>
            </div>
        </div>
    );
};

export default ProjectModal;
