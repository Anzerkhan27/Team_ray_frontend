import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";

import roverImage from "../assets/Home_bg.png";
import heroLogo from "../assets/Hero-logo-1.png";

import "./Home.css";
import Specifications from "../components/Specifications";
import Mission from "../components/Mission";
import About from "../components/About";

const Home = () => {
    const [primaryProject, setPrimaryProject] = useState(null);
    const [secondaryProject, setSecondaryProject] = useState(null);

    const isLocalhost =
        window.location.hostname === "localhost" ||
        window.location.hostname === "127.0.0.1";
    const API_BASE_URL = isLocalhost
        ? "http://127.0.0.1:8000/api/"
        : "https://web-production-7860.up.railway.app/api/";

    useEffect(() => {
        axios.get(`${API_BASE_URL}projects/`)
            .then((response) => {
                const allProjects = response.data;
                setPrimaryProject(allProjects.find(p => p.project_type === "primary"));
                setSecondaryProject(allProjects.find(p => p.project_type === "secondary"));
            })
            .catch((error) => console.error("Error fetching projects:", error));
    }, [API_BASE_URL]);

    return (
        <>
            {/* Hero Section */}
            <div className="home-container" style={{
                backgroundImage: `url(${roverImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                transition: "opacity 2s ease",
            }}>
                <div className="hero-content">
                    <motion.img 
                        src={heroLogo} 
                        alt="Team Ray Logo" 
                        className="hero-logo"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                    />

                    <motion.h1 
                        initial={{ opacity: 0, y: -50 }} 
                        animate={{ opacity: 1, y: 0 }} 
                        transition={{ duration: 1 }}
                    >
                        TEAM <span className="ray-highlight">RAY</span>
                    </motion.h1>

                    <motion.h2 
                        initial={{ opacity: 0, y: -50 }} 
                        animate={{ opacity: 1, y: 0 }} 
                        transition={{ duration: 1, delay: 0.2 }}
                    >
                        Pioneering Aerospace Innovation – UKSEDS Olympus Trials 2025
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: -30 }} 
                        animate={{ opacity: 1, y: 0 }} 
                        transition={{ duration: 1, delay: 0.4 }}
                    >
                        Official Aerospace Student Team | University of Huddersfield
                    </motion.p>
                </div>

                {/* Scroll Down Indicator */}
                <motion.div 
                    className="scroll-down"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2, duration: 1 }}
                >
                    ↓ Scroll Down
                </motion.div>
            </div>

            {/* About Section */}
            <About />

          {/* Featured Projects Section */}
            <div className="projects-section">
            <div className="projects-wrapper">
                <h1 className="section-title">Featured Projects</h1>

                {primaryProject && (
                <div className="primary-showcase">
                    <img
                    src={primaryProject.image || "https://via.placeholder.com/400"}
                    alt={primaryProject.name}
                    className="primary-image"
                    />
                    <div className="primary-description">
                    <h3>{primaryProject.name}</h3>
                    <p>{primaryProject.description}</p>
                    </div>
                </div>
                )}

                {secondaryProject && (
                <div className="project-card secondary">
                    <img
                    src={secondaryProject.image || "https://via.placeholder.com/400"}
                    alt={secondaryProject.name}
                    className="project-image"
                    />
                    <div className="project-info">
                    <h3>{secondaryProject.name}</h3>
                    </div>
                </div>
                )}
            </div>
            </div>


            {/* Remaining Sections */}
            <Specifications />
            <Mission />
        </>
    );
};

export default Home;
