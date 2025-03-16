import React, { useEffect, useState } from "react";
import axios from "axios";
import Projects from "../components/Projects"; // ✅ Import Projects component
import "./News.css"; // Unified styles

const News = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get("https://web-production-7860.up.railway.app/api/posts/") // ✅ Corrected URL
            .then((response) => setPosts(response.data))
            .catch((error) => console.error("Error fetching posts:", error));
    }, []);

    return (
        <div className="news-container">
            {/* 📰 News Section */}
            <div className="news-section">
                <h1 className="section-title">Latest News</h1>
                <div className="news-grid">
                    {posts.map((post) => (
                        <div key={post.id} className="news-card">
                            <img
                                src={post.image || "https://via.placeholder.com/400"}
                                alt={post.title}
                                className="news-image"
                            />
                            <div className="news-info">
                                <h3>{post.title}</h3>
                                <p>{post.content ? post.content.substring(0, 120) + "..." : "No content available."}</p>
                                <p className="news-date">
                                    📅 {new Date(post.created_at).toLocaleDateString("en-GB", {
                                        day: "numeric",
                                        month: "long",
                                        year: "numeric",
                                    })}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* 🚀 Divider */}
            <div className="section-divider"></div>

            {/* 🚀 Projects Section (Imported Component) */}
            <Projects />
        </div>
    );
};

export default News;
