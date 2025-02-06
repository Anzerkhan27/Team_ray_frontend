import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./Home.css"; // Importing styles

const Home = () => {
    return (
        <div className="home-container">
            {/* Background Video */}
            <video autoPlay loop muted className="background-video">
                <source src="/videos/mars_rover.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            {/* Hero Content */}
            <div className="hero-content">
                <motion.h1 
                    initial={{ opacity: 0, y: -50 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    transition={{ duration: 1 }}
                >
                    Exploring the Unknown
                </motion.h1>

                <motion.p 
                    initial={{ opacity: 0, y: 50 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    transition={{ duration: 1.2 }}
                >
                    Pushing the boundaries of space exploration.
                </motion.p>

                <motion.div 
                    className="cta-buttons"
                    initial={{ opacity: 0 }} 
                    animate={{ opacity: 1 }} 
                    transition={{ duration: 1.5 }}
                >
                    <Link to="/join" className="btn">Join Us</Link>
                    <Link to="/projects" className="btn btn-secondary">View Projects</Link>
                </motion.div>
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
    );
};

export default Home;
