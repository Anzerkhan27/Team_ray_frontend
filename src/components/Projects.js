import React, { useEffect, useState } from "react";
import axios from "axios";
import MemberModal from "./MemberModal";
import "./Members.css";

const Members = () => {
    const [members, setMembers] = useState([]);
    const [selectedMember, setSelectedMember] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Set base URL depending on environment
    const isLocalhost = window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1";
    const API_BASE_URL = isLocalhost
        ? "http://127.0.0.1:8000/api/"
        : "https://web-production-7860.up.railway.app/api/";

    useEffect(() => {
        axios.get(`${API_BASE_URL}members/`)
            .then((response) => {
                console.log("Fetched members:", response.data);
                setMembers(response.data);
            })
            .catch((error) => {
                console.error("Error fetching members from API:", error);
            });
    }, [API_BASE_URL]);

    const getImagePath = (image) => {
        if (!image) return "https://via.placeholder.com/250";
        return image;
    };

    const openModal = (member) => {
        setSelectedMember(member);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setSelectedMember(null);
        setIsModalOpen(false);
    };

    return (
        <div className="members-container">
            <h1 className="members-title">Meet Team Ray</h1>

            <div className="members-grid">
                {members.map((member) => (
                    <div key={member.id} className="member-card" onClick={() => openModal(member)}>
                        <img
                            src={getImagePath(member.image)}
                            alt={member.name}
                            className="member-image"
                        />
                        <div className="member-info">
                            <h3>{member.name}</h3>
                            <p><strong>{member.role}</strong></p>
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
