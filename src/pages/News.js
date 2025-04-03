import React, { useEffect, useState } from "react";
import axios from "axios";
import Projects from "../components/Projects"; // ✅ Import Projects component
import Slider from "react-slick"; // Slick carousel component
import "./News.css"; // Unified styles

const News = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get("https://web-production-7860.up.railway.app/api/posts/")
            .then((response) => setPosts(response.data))
            .catch((error) => console.error("Error fetching posts:", error));
    }, []);

    // Slick carousel settings
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    return (
        <div className="news-container">
            {/* 📰 News Section */}
            <div className="news-section">
                <h1 className="section-title">Latest News</h1>
                <div className="news-grid">
                    {posts.map((post) => (
                        <div key={post.id} className="news-card">
                            {/* Carousel for images */}
                            <Slider {...settings}>
                                {post.images && post.images.map((image, index) => (
                                    <div key={index}>
                                        <img
                                            src={image.image || "https://via.placeholder.com/400"}
                                            alt={post.title}
                                            className="news-image"
                                        />
                                    </div>
                                ))}
                            </Slider>
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
