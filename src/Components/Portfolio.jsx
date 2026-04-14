/**
 * I am new to coding and am learning how to create a portfolio site to share my projects and experience. This is a great way for me to share my work with others, and also to reflect on what I've learned and created.
 *
 * I spend hours learning about coding and cybersecurity, and I want to share that knowledge with others. I also want to share my projects and experience, and to connect with other people who are interested in coding and cybersecurity.
 * I don't have many projects going on right now, but I am working on some projects that I hope to share soon.
 * 
 *
 * 
 * 
 */

import React, { useState } from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "The De-buggers Dilemma",
    description:
      "An interactive story about debugging and problem-solving in software development.",
    url: "",
    tags: ["Game", "JavaScript"],
  },
  {
    title: "Web Development for Beginners",
    description:
      "Contributed sketch note imagery to accompany each lesson. These help provide visual representation of what is being taught.",
    url: "https://github.com/microsoft/web-dev-for-beginners",
    tags: ["Web", "Education"],
  },
];

const Portfolio = () => {
  const [selectedTag, setSelectedTag] = useState(null);

  // Get all unique tags
  const allTags = [...new Set(projectList.flatMap(p => p.tags))];

  // Filter projects based on selected tag
  const filteredProjects = selectedTag
    ? projectList.filter(p => p.tags.includes(selectedTag))
    : projectList;

  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      
      {/* Filter buttons */}
      <div style={{ textAlign: "center", margin: "2rem 0", display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
        <button
          onClick={() => setSelectedTag(null)}
          style={{
            padding: "0.5rem 1rem",
            border: selectedTag === null ? "2px solid #4E567E" : "1px solid #cccccc",
            borderRadius: "20px",
            background: selectedTag === null ? "#4E567E" : "transparent",
            color: selectedTag === null ? "#ffffff" : "inherit",
            cursor: "pointer",
            fontWeight: "600",
            transition: "all 0.3s ease",
          }}
        >
          All
        </button>
        {allTags.map(tag => (
          <button
            key={tag}
            onClick={() => setSelectedTag(tag)}
            style={{
              padding: "0.5rem 1rem",
              border: selectedTag === tag ? "2px solid #4E567E" : "1px solid #cccccc",
              borderRadius: "20px",
              background: selectedTag === tag ? "#4E567E" : "transparent",
              color: selectedTag === tag ? "#ffffff" : "inherit",
              cursor: "pointer",
              fontWeight: "600",
              transition: "all 0.3s ease",
            }}
          >
            {tag}
          </button>
        ))}
      </div>

      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover", borderRadius: "10px" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {filteredProjects.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
              <div style={{ display: "flex", gap: "0.5rem", justifyContent: "center", flexWrap: "wrap", marginTop: "1rem" }}>
                {project.tags.map(tag => (
                  <span
                    key={tag}
                    style={{
                      padding: "0.25rem 0.75rem",
                      background: "#4E567E",
                      color: "#ffffff",
                      borderRadius: "15px",
                      fontSize: "0.75rem",
                      fontWeight: "600",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
