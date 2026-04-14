/**
 * Home component
 *
 * The section at the top of the page to display image of your
 * choice, name and title that describes your career focus.
 */

import React, { useState, useEffect } from "react";
import arrowSvg from "../images/down-arrow.svg";
import PropTypes from "prop-types";

/**
 * Home background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that 
 * represents what you see in that image.
 *
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import backgroundImage from "../images/motion-background.jpg";
import photoAvrum from "../images/avrum_and_dad.jpg";
import photoAriah from "../images/ariah_and_dad.jpg";
import photoAthos from "../images/athos.jpg";

const imageAltText = "Adult female in office setting leaning against a glass wall while holding a platinum Microsoft Surface Pro 7 in tablet mode preparing to write with Microsoft Surface Pen";

// Photo carousel data
const photos = [
  { src: photoAvrum, alt: "Avrum and Dad" },
  { src: photoAriah, alt: "Ariah and Dad" },
  { src: photoAthos, alt: "Athos" },
];

// Typing animation component
const TypingAnimation = ({ text }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (index < text.length) {
        setDisplayedText(text.substring(0, index + 1));
        setIndex(index + 1);
      }
    }, 80);
    return () => clearTimeout(timer);
  }, [index, text]);

  return (
    <span>
      {displayedText}
      {displayedText.length < text.length && <span style={{ animation: "pulse 1s infinite" }}>|</span>}
    </span>
  );
};

// Photo carousel component
const PhotoCarousel = ({ photos }) => {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const [fadeIn, setFadeIn] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeIn(false);
      setTimeout(() => {
        setCurrentPhotoIndex((prevIndex) => (prevIndex + 1) % photos.length);
        setFadeIn(true);
      }, 300);
    }, 5000); // Change photo every 5 seconds

    return () => clearInterval(interval);
  }, [photos.length]);

  return (
    <div
      style={{
        position: "relative",
        width: "300px",
        height: "300px",
        overflow: "hidden",
        borderRadius: "15px",
        boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
        marginBottom: "2rem",
      }}
    >
      <img
        src={photos[currentPhotoIndex].src}
        alt={photos[currentPhotoIndex].alt}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          opacity: fadeIn ? 1 : 0,
          transition: "opacity 0.3s ease-in-out",
        }}
      />
      
      {/* Photo indicators */}
      <div
        style={{
          position: "absolute",
          bottom: "10px",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          gap: "8px",
        }}
      >
        {photos.map((_, index) => (
          <div
            key={index}
            style={{
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              background: index === currentPhotoIndex ? "#ffffff" : "rgba(255,255,255,0.5)",
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
            onClick={() => {
              setFadeIn(false);
              setTimeout(() => {
                setCurrentPhotoIndex(index);
                setFadeIn(true);
              }, 300);
            }}
          />
        ))}
      </div>
    </div>
  );
};

const Home = ({ name, title }) => {
  return (
    <section id="home" className="min-height">
      <img className="background" src={backgroundImage} alt="" />
      <div style={{ position: "absolute", top: "5rem", left: "2rem", display: "flex", alignItems: "center", gap: "3rem" }}>
        <PhotoCarousel photos={photos} />
        <div style={{ width: "17rem" }}>
          <h1>{name}</h1>
          <h2><TypingAnimation text={title} /></h2>
        </div>
      </div>
      <div style={{ position: "absolute", bottom: "3rem", left: "50%", animation: "pulse 1.5s infinite" }}>
        <img src={arrowSvg} style={{ height: "3rem", width: "3rem", cursor: "pointer" }} alt={imageAltText} />
      </div>
    </section>
  );
};

Home.defaultProps = {
  name: "",
  title: "",
};

Home.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Home;
