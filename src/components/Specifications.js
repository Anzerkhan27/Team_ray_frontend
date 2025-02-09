import React from "react";
import { motion } from "framer-motion";
import "./Specifications.css";

const roverSpecs = [
    { label: "Chassis", value: "290mm x 260mm x 90mm" },
    { label: "Wheels", value: "100mm diameter, 50mm wide grouser wheels" },
    { label: "Motors", value: "12V Brushless DC Geared, 38kg.cm torque @ 122 RPM" },
    { label: "Steering", value: "Skid Steering System" },
    { label: "Actuators", value: "1x Linear Ball Screw Actuator (150mm range)" },
    { label: "Camera", value: "Pan-Tilt Camera Mount (2 servo motors)" },
    { label: "Battery", value: "GNB 9000mAh 3S 150C LiPo" },
    { label: "Processing Unit", value: "ATMega328 Microcontroller" },
    { label: "Communication", value: "HC-12 RF Module (433MHz, UART)" },
    { label: "Video System", value: "Walksnail Avatar VRX HD V2 (5.8GHz FPV)" },
    { label: "Navigation", value: "Autonomous Terrain Traversal (0.52 m/s speed)" },
    { label: "Scientific Tasks", value: "Barcode scanning on rocks" },
    { label: "Weight Limit", value: "4 kg" },
    { label: "Battery Life", value: "30 mins per competition trial" },
];

const Specifications = () => {
    return (
        <section className="specifications">
            <motion.h2
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                ROVER SPECIFICATIONS
            </motion.h2>

            <div className="spec-grid">
                {roverSpecs.map((spec, index) => (
                    <motion.div
                        key={index}
                        className="spec-card"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: index * 0.1 }}
                    >
                        <h3>{spec.label}</h3>
                        <p>{spec.value}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Specifications;
