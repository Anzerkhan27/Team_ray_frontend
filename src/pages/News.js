import React, { useEffect, useState } from "react";
import axios from "axios";
import Slider from "react-slick";
import "./News.css";

const News = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("https://web-production-7860.up.railway.app/api/posts/")
      .then((response) => setPosts(response.data))
      .catch((error) => console.error("Error fetching posts:", error));
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  const toggleContent = (index) => {
    const updatedPosts = [...posts];
    updatedPosts[index].isExpanded = !updatedPosts[index].isExpanded;
    setPosts(updatedPosts);
  };

  return (
    <div className="news-container">
      <div className="news-section">
        <h1 className="section-title">Latest News</h1>
        <div className="news-grid">
          {posts.map((post, index) => (
            <div key={post.id} className="news-card">
              <div className="news-carousel">
                <Slider {...settings}>
                  {post.images?.map((image, imageIndex) => (
                    <div key={imageIndex}>
                      <img
                        src={image.image || "https://via.placeholder.com/400"}
                        alt={post.title}
                        className="news-carousel-image"
                      />
                    </div>
                  ))}
                </Slider>
              </div>
              <div className="news-info">
                <h3>{post.title}</h3>
                <p>
                  {post.content && !post.isExpanded
                    ? post.content.substring(0, 120) + "..."
                    : post.content}
                </p>
                {post.content && (
                  <button
                    className="read-more-btn"
                    onClick={() => toggleContent(index)}
                  >
                    {post.isExpanded ? "Show Less" : "Read More"}
                  </button>
                )}
                <p className="news-date">
                  📅{" "}
                  {new Date(post.created_at).toLocaleDateString("en-GB", {
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

      <div className="section-divider"></div>
    </div>
  );
};

export default News;
