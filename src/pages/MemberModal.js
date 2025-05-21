import React from "react";

const MemberModal = ({ member, closeModal }) => {
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
        }}
        onClick={closeModal} // Close when clicking outside
        >
            <div style={{
                background: "#fff",
                padding: "15px",
                borderRadius: "8px",
                width: "350px",
                boxShadow: "0px 4px 10px rgba(0,0,0,0.2)",
                display: "flex",
                flexDirection: "column",
                position: "relative",
            }}
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
            >
                <button
                    onClick={closeModal}
                    style={{
                        background: "transparent",
                        border: "none",
                        fontSize: "18px",
                        fontWeight: "bold",
                        cursor: "pointer",
                        position: "absolute",
                        top: "10px",
                        right: "15px",
                    }}
                >
                    &times;
                </button>

                {/* Square image at the top */}
                <img
                    src={member.image || "https://via.placeholder.com/350"}
                    alt={member.name}
                    style={{
                        width: "100%",
                        height: "350px",
                        objectFit: "cover",
                        borderRadius: "8px",
                        marginBottom: "10px",
                    }}
                />

                <h2 style={{ marginBottom: "5px" }}>{member.name}</h2>
                <p><strong>Role:</strong> {member.role}</p>

                {/* Scrollable bio section */}
                <div style={{
                    maxHeight: "100px",
                    overflowY: "auto",
                    padding: "10px",
                    backgroundColor: "#f9f9f9",
                    textAlign: "justify",
                    borderRadius: "5px",
                    fontSize: "0.9em",
                    color: "#333",
                }}>
                    {member.bio}
                </div>
            </div>
        </div>
    );
};

export default MemberModal;
