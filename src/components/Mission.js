import React from "react";
import { motion } from "framer-motion";
import marsBg from "../assets/Home_bg.png"; // Importing new Mars background
import "./Mission.css"; 

const Mission = () => {
    return (
        <section 
            className="mission"
            style={{ backgroundImage: `url(${marsBg})` }} // Set Mars BG
        >
            {/* Header */}
            <motion.h2 
                className="mission-title"
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                MISSION: TERRA
            </motion.h2>

            {/* Subtext */}
            <motion.p 
                className="mission-subtext"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2 }}
            >
                Terrain Exploration and Remote Reconnaissance for Analysis
            </motion.p>

            {/* Mission Sections */}
            <div className="mission-content">
                {/* Primary Objective */}
                <motion.div 
                    className="mission-section"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                >
                    <h3>Primary Objective</h3>
                    <p>The rover must survey a simulated Martian environment, navigate to geological points of interest, and capture high-quality images for analysis.</p>
                </motion.div>

                {/* Mission Challenges */}
                <motion.div 
                    className="mission-section right"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                >
                    <h3>Challenges</h3>
                    <ul>
                        <li><strong>Autonomous/Remote Navigation:</strong> Operate from a remote station with no direct line of sight.</li>
                        <li><strong>QR Code Scanning:</strong> Identify and scan geological markers for analysis.</li>
                        <li><strong>Harsh Terrain Navigation:</strong> Survive rocky, sandy, and uneven surfaces.</li>
                        <li><strong>Vibration Endurance Test:</strong> Withstand simulated launch & landing forces.</li>
                        <li><strong>Failure Recovery:</strong> Demonstrate troubleshooting and system resilience.</li>
                    </ul>
                </motion.div>

                {/* Scoring */}
                <motion.div 
                    className="mission-section"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                >
                    <h3>Scoring Criteria</h3>
                    <ul>
                        <li>Successful navigation and image capture.</li>
                        <li>Accurate QR code data extraction.</li>
                        <li>Demonstration of autonomy and communication systems.</li>
                        <li>Survival of the vibration test.</li>
                    </ul>
                </motion.div>

                {/* Location */}
                <motion.div 
                    className="mission-section right"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                >
                    <h3>Competition Location</h3>
                    <p>The trials take place in the <strong>Airbus Mars Yard, Stevenage</strong>, where real planetary rovers are tested.</p>
                </motion.div>

                {/* Mission Significance */}
                <motion.div 
                    className="mission-section"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                >
                    <h3>Why It Matters</h3>
                    <p>This competition mirrors real-world planetary exploration, pushing the boundaries of robotics, AI, and engineering.</p>
                </motion.div>
            </div>
        </section>
    );
};

export default Mission;
