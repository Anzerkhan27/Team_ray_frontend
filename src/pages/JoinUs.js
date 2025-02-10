import React, { useState } from "react";
import axios from "axios";
import "./JoinUs.css"; // Import external styles

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
        <div className="joinus-container">
            {/* 🚀 Why Join Us Section */}
            <div className="why-join">
                <h1 className="join-title">Why Join Team Ray?</h1>
                <p className="join-description">
                    Our mission is to <span className="highlight">foster innovation</span>,
                    collaborate across disciplines, and develop real-world engineering skills through
                    aerospace projects. We design, build, and compete with cutting-edge rovers and rockets! 🚀
                </p>

                <ul className="join-benefits">
                    <li>☄️ <strong>Exciting Competitions</strong> – Hands-on experience in aerospace challenges.</li>
                    <li>☄️ <strong>Engaging Meet-ups</strong> – Connect with like-minded aerospace enthusiasts.</li>
                    <li>☄️ <strong>Interesting Workshops</strong> – Learn from experts in engineering and space tech.</li>
                </ul>

                <p className="join-message">
                    We welcome **ALL** students—whether from **Engineering** or simply passionate about **space exploration**. 
                    Join us on this thrilling journey! 💫
                </p>
            </div>

            {/* 📋 Join Us Form Section */}
            <div className="form-container">
                <h2 className="form-title">Join Our Team</h2>
                <p className="form-subtitle">Fill out this form to stay updated and get involved.</p>

                {successMessage ? (
                    <div className="success-box">
                        <h3>✅ Success!</h3>
                        <p>{successMessage}</p>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="join-form">
                        {errorMessage && <p className="error-message">{errorMessage}</p>}

                        <input
                            type="text"
                            name="full_name"
                            value={formData.full_name}
                            onChange={handleChange}
                            placeholder="Full Name *"
                            required
                            className="form-input"
                        />

                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Email *"
                            required
                            className="form-input"
                        />

                        <input
                            type="text"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="Phone (Optional)"
                            className="form-input"
                        />

                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Why do you want to join? (Optional)"
                            rows="4"
                            className="form-textarea"
                        />

                        <button type="submit" disabled={loading} className="form-button">
                            {loading ? "Submitting..." : "Join Now"}
                        </button>
                    </form>
                )}
            </div>
        </div>
    );
};

export default JoinUs;
