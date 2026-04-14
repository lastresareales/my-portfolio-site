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
import image from "../images/motion-background.jpg";

const imageAltText = "Adult female in office setting leaning against a glass wall while holding a platinum Microsoft Surface Pro 7 in tablet mode preparing to write with Microsoft Surface Pen";

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

const Home = ({ name, title }) => {
  return (
    <section id="home" className="min-height">
      <img className="background" src={image} alt="" />
      <div style={{ position: "absolute", top: "5rem", left: "2rem", width: "17rem" }}>
        <h1>{name}</h1>
        <h2><TypingAnimation text={title} /></h2>
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
