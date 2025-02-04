import React, { useEffect, useState } from "react";
import axios from "axios";
import MemberModal from "./MemberModal";

const Members = () => {
    const [members, setMembers] = useState([]);
    const [selectedMember, setSelectedMember] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        axios.get("http://127.0.0.1:8000/api/members/")
            .then((response) => {
                console.log("Fetched Members:", response.data);
                setMembers(response.data);
            })
            .catch((error) => {
                console.error("Error fetching members:", error);
            });
    }, []);

    const openModal = (member) => {
        console.log("Opening Modal for:", member.name);
        setSelectedMember(member);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        console.log("Closing Modal");
        setSelectedMember(null);
        setIsModalOpen(false);
    };

    return (
        <div style={{ padding: "20px" }}>
            <h1>Team Members</h1>
            <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
                gap: "20px",
            }}>
                {members.map((member) => (
                    <div
                        key={member.id}
                        style={{
                            width: "250px",
                            cursor: "pointer",
                            boxShadow: "0px 4px 6px rgba(0,0,0,0.1)",
                            borderRadius: "8px",
                            overflow: "hidden",  // Ensures everything fits in square
                            background: "#fff",
                        }}
                        onClick={() => openModal(member)}
                    >
                        {/* Image takes full width, except bottom */}
                        <img
                            src={member.image || "https://via.placeholder.com/250"}
                            alt={member.name}
                            style={{
                                width: "100%",
                                height: "250px",  // Ensures square shape
                                objectFit: "cover",
                            }}
                        />
                        <div style={{ padding: "10px" }}>
                            <h3 style={{ margin: "5px 0", fontSize: "1.1em" }}>{member.name}</h3>
                            <p style={{ fontSize: "0.9em", color: "#555" }}><strong>{member.role}</strong></p>
                        </div>
                    </div>
                ))}
            </div>

            {isModalOpen && selectedMember && (
                <MemberModal member={selectedMember} closeModal={closeModal} />
            )}
        </div>
    );
};

export default Members;
