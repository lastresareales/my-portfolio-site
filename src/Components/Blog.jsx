/**
 * Blog component
 *
 * Displays blog posts or articles
 */

import React, { useState } from "react";

const blogPosts = [
  {
    id: 1,
    title: "Getting Started with Web Development",
    excerpt: "Learn the basics of HTML, CSS, and JavaScript to start your web development journey.",
    date: "April 2026",
    category: "Tutorial",
    content: "Web development is an exciting field that combines creativity with technical skills. In this post, we'll explore the fundamental technologies you need to master.",
  },
  {
    id: 2,
    title: "Understanding Cybersecurity Fundamentals",
    excerpt: "An introduction to cybersecurity concepts and best practices for protecting your digital assets.",
    date: "March 2026",
    category: "Security",
    content: "Cybersecurity is more important than ever. Learn about common threats and how to protect yourself online.",
  },
  {
    id: 3,
    title: "React Hooks Deep Dive",
    excerpt: "Master React Hooks to write cleaner, more efficient React components.",
    date: "February 2026",
    category: "React",
    content: "React Hooks revolutionized how we write React components. Let's explore the most useful hooks and how to use them effectively.",
  },
];

const Blog = () => {
  const [selectedPost, setSelectedPost] = useState(null);
  const [filter, setFilter] = useState(null);

  const categories = [...new Set(blogPosts.map(post => post.category))];
  const filteredPosts = filter ? blogPosts.filter(p => p.category === filter) : blogPosts;

  if (selectedPost) {
    return (
      <section className="padding" id="blog">
        <button
          onClick={() => setSelectedPost(null)}
          style={{
            marginBottom: "2rem",
            padding: "0.5rem 1rem",
            borderRadius: "5px",
            border: "1px solid #4E567E",
            background: "transparent",
            cursor: "pointer",
            fontWeight: "600",
          }}
        >
          ← Back to Blog
        </button>
        <h2>{selectedPost.title}</h2>
        <p style={{ color: "#666", marginBottom: "2rem" }}>
          {selectedPost.date} • {selectedPost.category}
        </p>
        <p style={{ lineHeight: "1.8", fontSize: "1.1rem" }}>{selectedPost.content}</p>
      </section>
    );
  }

  return (
    <section className="padding" id="blog">
      <h2 style={{ textAlign: "center" }}>Blog</h2>
      
      {/* Filter buttons */}
      <div style={{ textAlign: "center", margin: "2rem 0", display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
        <button
          onClick={() => setFilter(null)}
          style={{
            padding: "0.5rem 1rem",
            border: filter === null ? "2px solid #4E567E" : "1px solid #cccccc",
            borderRadius: "20px",
            background: filter === null ? "#4E567E" : "transparent",
            color: filter === null ? "#ffffff" : "inherit",
            cursor: "pointer",
            fontWeight: "600",
            transition: "all 0.3s ease",
          }}
        >
          All
        </button>
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setFilter(category)}
            style={{
              padding: "0.5rem 1rem",
              border: filter === category ? "2px solid #4E567E" : "1px solid #cccccc",
              borderRadius: "20px",
              background: filter === category ? "#4E567E" : "transparent",
              color: filter === category ? "#ffffff" : "inherit",
              cursor: "pointer",
              fontWeight: "600",
              transition: "all 0.3s ease",
            }}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Blog posts grid */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem", margin: "2rem 0" }}>
        {filteredPosts.map((post) => (
          <div
            key={post.id}
            className="box"
            style={{
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
            onClick={() => setSelectedPost(post)}
          >
            <span style={{ fontSize: "0.75rem", color: "#4E567E", fontWeight: "600" }}>
              {post.category}
            </span>
            <h3>{post.title}</h3>
            <p className="small">{post.excerpt}</p>
            <p style={{ fontSize: "0.75rem", color: "#999" }}>{post.date}</p>
            <button
              style={{
                marginTop: "1rem",
                padding: "0.5rem 1rem",
                borderRadius: "5px",
                border: "1px solid #4E567E",
                background: "transparent",
                cursor: "pointer",
                color: "#4E567E",
                fontWeight: "600",
              }}
            >
              Read More →
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blog;
