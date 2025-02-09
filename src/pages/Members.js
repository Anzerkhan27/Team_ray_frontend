import React, { useEffect, useState } from "react";
import axios from "axios";
import MemberModal from "./MemberModal";
import teamRayLogo from "../assets/Team_ray_Logo.png"; // ✅ Import Team Ray Logo
import "./Members.css"; // Import external styles

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
        <div className="members-container">
            {/* 🚀 Team Introduction + Logo Section */}
            <div className="team-intro-section">
                {/* Left Side - Team Introduction */}
                <div className="team-intro">
                    <h1 className="team-title">Meet Team Ray</h1>
                    <p className="team-description">
                        At <span className="highlight">Team Ray 🚀</span>, we are a passionate group of students from the 
                        <strong> University of Huddersfield</strong>, specializing in Aero/Astronautical, Mechanical, 
                        Controls & Instrumentation, Electronics, and Software Engineering. 
                        We collaborate to design, analyze, and prototype <strong>rovers and rockets</strong>, 
                        competing in national aerospace challenges.
                    </p>
                    <p className="team-mission">
                        Our mission is to <strong>foster innovation</strong>, enhance engineering skills, and tackle 
                        <span className="highlight"> real-world space exploration scenarios.</span>
                    </p>
                </div>

                {/* Right Side - Team Ray Logo */}
                <div className="team-logo">
                    <img src={teamRayLogo} alt="Team Ray Logo" />
                </div>
            </div>

            {/* 🚀 Divider */}
            <div className="section-divider"></div>

            {/* 📌 Team Members Section */}
            <h2 className="members-title">Our Team Members</h2>
            <div className="members-grid">
                {members.map((member) => (
                    <div key={member.id} className="member-card" onClick={() => openModal(member)}>
                        <img 
                            src={member.image || "https://via.placeholder.com/250"} 
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

            {/* 🖼️ Member Modal */}
            {isModalOpen && selectedMember && (
                <MemberModal member={selectedMember} closeModal={closeModal} />
            )}
        </div>
    );
};

export default Members;
