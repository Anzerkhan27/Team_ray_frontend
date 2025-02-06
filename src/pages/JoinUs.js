import React, { useState } from "react";
import axios from "axios";

const JoinUs = () => {
    const [formData, setFormData] = useState({
        full_name: "",
        email: "",
        phone: "",
        message: "",
    });

    const [loading, setLoading] = useState(false);
    const [successMessage, setSuccessMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setSuccessMessage("");
        setErrorMessage("");

        if (!formData.full_name || !formData.email) {
            setErrorMessage("Full Name and Email are required.");
            setLoading(false);
            return;
        }

        try {
            await axios.post("http://127.0.0.1:8000/api/contacts/", formData);
            setSuccessMessage("🎉 You're in! We'll be in touch soon.");
            setFormData({ full_name: "", email: "", phone: "", message: "" });
        } catch (error) {
            setErrorMessage("❌ There was an error submitting the form. Try again.");
        }

        setLoading(false);
    };

    return (
        <div style={pageContainerStyle}>
            <div style={formContainerStyle}>
                <h2 style={titleStyle}>Join Our Team</h2>
                <p style={subtitleStyle}>Fill out this form to stay updated and get involved.</p>

                {successMessage ? (
                    <div style={successBox}>
                        <h3>✅ Success!</h3>
                        <p>{successMessage}</p>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} style={formStyle}>
                        {errorMessage && <p style={errorStyle}>{errorMessage}</p>}

                        <input
                            type="text"
                            name="full_name"
                            value={formData.full_name}
                            onChange={handleChange}
                            placeholder="Full Name *"
                            required
                            style={inputStyle}
                        />

                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Email *"
                            required
                            style={inputStyle}
                        />

                        <input
                            type="text"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="Phone (Optional)"
                            style={inputStyle}
                        />

                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Why do you want to join? (Optional)"
                            rows="4"
                            style={textAreaStyle}
                        />

                        <button type="submit" disabled={loading} style={buttonStyle}>
                            {loading ? "Submitting..." : "Join Now"}
                        </button>
                    </form>
                )}
            </div>
        </div>
    );
};

// Page Container - Centers the form properly
const pageContainerStyle = {
    display: "flex",
    justifyContent: "center",
    minHeight: "60vh",
    padding: "20px",
    backgroundColor: "#f4f7fc",
};

// Form Container - Adds margin, proper width & shadow
const formContainerStyle = {
    maxWidth: "500px",
    width: "100%",
    padding: "30px",
    boxShadow: "0px 4px 10px rgba(0,0,0,0.15)",
    borderRadius: "15px",
    backgroundColor: "#ffffff",
    textAlign: "center",
    fontFamily: "'Poppins', sans-serif",
    marginTop: "50px",
};

// Title & Subtitle
const titleStyle = {
    fontSize: "24px",
    fontWeight: "600",
    marginBottom: "10px",
    color: "#333",
};

const subtitleStyle = {
    fontSize: "14px",
    color: "#777",
    marginBottom: "20px",
};

// Form & Inputs
const formStyle = {
    display: "flex",
    flexDirection: "column",
};

const inputStyle = {
    width: "100%",
    padding: "12px",
    marginBottom: "12px",
    borderRadius: "8px",
    border: "1px solid #ddd",
    fontSize: "16px",
    outline: "none",
    transition: "border 0.3s ease",
};

const textAreaStyle = {
    ...inputStyle,
    resize: "none",
};

const buttonStyle = {
    width: "100%",
    padding: "12px",
    backgroundColor: "#007BFF",
    color: "white",
    border: "none",
    borderRadius: "8px",
    fontSize: "16px",
    cursor: "pointer",
    transition: "background 0.3s ease",
};

// Success Box & Errors
const successBox = {
    padding: "20px",
    backgroundColor: "#E6F4EA",
    borderRadius: "10px",
    color: "#155724",
};

const errorStyle = {
    color: "red",
    marginBottom: "10px",
};

export default JoinUs;
