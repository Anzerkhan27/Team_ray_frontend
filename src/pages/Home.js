import React from "react";
import { motion } from "framer-motion";
import roverImage from "../assets/Home_bg.png"; // Import the image directly
import "./Home.css"; // Importing styles
import Specifications from "../components/Specifications"; // Import the Specifications component
import Mission from "../components/Mission";
import heroLogo from "../assets/Hero-logo.png"; // Adjust if named differently


const Home = () => {
    return (
        <>
            {/* Hero Section */}
            <div className="home-container" style={{
                backgroundImage: `url(${roverImage})`, // Use the imported image here
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
                            University of Huddersfield 
                        </motion.h1>
                        <motion.h2 
                            initial={{ opacity: 0, y: -50 }} 
                            animate={{ opacity: 1, y: 0 }} 
                            transition={{ duration: 1 }}
                        >
                            Aerospace Society
                        </motion.h2>
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

            {/* Specifications Section (Now correctly placed below Hero Section) */}
            <Specifications />
            <Mission />
            
        </>
       
        
    );
};

export default Home;
