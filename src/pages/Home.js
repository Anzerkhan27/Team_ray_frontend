import React from "react";
import { motion } from "framer-motion";
import roverImage from "../assets/space_rover_black_bg.png"; // Import the image directly
import "./Home.css"; // Importing styles

const Home = () => {
    return (
        <div className="home-container" style={{
            backgroundImage: `url(${roverImage})`, // Use the imported image here
            backgroundSize: "cover",
            backgroundPosition: "center",
            transition: "opacity 2s ease",
        }}>
            {/* Hero Content */}
            <div className="hero-content">
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
    );
};

export default Home;
