/**
 * Application component
 *
 * To contain application wide settings, routes, state, etc.
 */

import React, { useState, useEffect } from "react";

import About from "./Components/About";
import Blog from "./Components/Blog";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Portfolio from "./Components/Portfolio";

import "./styles.css";

/**
 * This object represents your information. The project is set so that you
 * only need to update these here, and values are passed a properties to the
 * components that need that information.
 *
 * Update the values below with your information.
 *
 * If you don't have one of the social sites listed, leave it as an empty string.
 */
const siteProps = {
  name: "Athos Turner",
  title: "Computer Science Student",
  email: "lastresareales@gmail.com",
  gitHub: "lastresareales",
  instagram: "",
  linkedIn: "Athos Turner",
  medium: "",
  twitter: "",
  youTube: "",
};

const primaryColor = "#4E567E";
const secondaryColor = "#D2F1E4";

const App = () => {
  const [isDark, setIsDark] = useState(false);

  // Load dark mode preference from localStorage
  useEffect(() => {
    const savedDarkMode = localStorage.getItem("darkMode") === "true";
    setIsDark(savedDarkMode);
    if (savedDarkMode) {
      document.body.classList.add("dark-mode");
    }
  }, []);

  const toggleDarkMode = () => {
    setIsDark(!isDark);
    localStorage.setItem("darkMode", !isDark);
    if (!isDark) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  };

  return (
    <div id="main">
      <Header isDark={isDark} toggleDarkMode={toggleDarkMode} />
      <Home name={siteProps.name} title={siteProps.title} />
      <About />
      <Portfolio />
      <Blog />
      <Contact email={siteProps.email} />
      <Footer {...siteProps} primaryColor={primaryColor} secondaryColor={secondaryColor} />
    </div>
  );
};

export default App;
