/**
 * Header component
 *
 * Top navigation bar for your site. Set to remain visible as the
 * user scrolls so that they can constantly reach any part of your page.
 */
import React, { useState } from "react";

const Header = ({ isDark, toggleDarkMode }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <div
        style={{
          position: "fixed",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "2rem",
          background: isDark ? "rgba(30, 30, 30, 0.95)" : "rgba(255, 255, 255, 0.95)",
          padding: "1rem 2rem",
          top: 0,
          width: "100%",
          boxSizing: "border-box",
          zIndex: 10,
          boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
          transition: "all 0.3s ease",
        }}
      >
        <div style={{ display: "flex", gap: "2rem", alignItems: "center", flex: 1 }}>
          <a href="#home" style={{ fontWeight: "600", fontSize: "1.2rem" }}>Portfolio</a>
          <nav
            style={{
              display: window.innerWidth > 768 ? "flex" : "none",
              gap: "2rem",
              alignItems: "center",
            }}
          >
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#portfolio">Portfolio</a>
            <a href="#blog">Blog</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>

        <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
          <button
            onClick={toggleDarkMode}
            style={{
              background: "none",
              border: "none",
              fontSize: "1.5rem",
              cursor: "pointer",
              padding: "0.5rem",
              borderRadius: "50%",
              transition: "background 0.3s ease",
            }}
            title={isDark ? "Light Mode" : "Dark Mode"}
          >
            {isDark ? "☀️" : "🌙"}
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              display: window.innerWidth <= 768 ? "block" : "none",
              background: "none",
              border: "none",
              fontSize: "1.5rem",
              cursor: "pointer",
              padding: "0.5rem",
            }}
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div
          style={{
            position: "fixed",
            top: "60px",
            left: 0,
            right: 0,
            background: isDark ? "rgba(30, 30, 30, 0.98)" : "rgba(255, 255, 255, 0.98)",
            padding: "2rem",
            zIndex: 9,
            animation: "slideDown 0.3s ease",
            display: window.innerWidth <= 768 ? "flex" : "none",
            flexDirection: "column",
            gap: "1rem",
          }}
        >
          <a href="#home" onClick={() => setMobileMenuOpen(false)}>Home</a>
          <a href="#about" onClick={() => setMobileMenuOpen(false)}>About</a>
          <a href="#portfolio" onClick={() => setMobileMenuOpen(false)}>Portfolio</a>
          <a href="#blog" onClick={() => setMobileMenuOpen(false)}>Blog</a>
          <a href="#contact" onClick={() => setMobileMenuOpen(false)}>Contact</a>
        </div>
      )}
    </>
  );
};

export default Header;
