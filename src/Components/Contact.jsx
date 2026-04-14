/**
 * Contact component
 *
 * Displays a contact form and contact information
 */

import React, { useState } from "react";

const Contact = ({ email }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Create mailto link for email
    const subject = "Portfolio Contact Form";
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    window.location.href = mailtoLink;
    setSubmitted(true);
    
    // Reset form after 2 seconds
    setTimeout(() => {
      setFormData({ name: "", email: "", message: "" });
      setSubmitted(false);
    }, 2000);
  };

  return (
    <section className="padding" id="contact">
      <h2 style={{ textAlign: "center" }}>Get In Touch</h2>
      <p style={{ textAlign: "center", fontSize: "1.1rem", marginBottom: "2rem" }}>
        Have a question or want to collaborate? Feel free to reach out!
      </p>

      <div style={{ maxWidth: "600px", margin: "0 auto" }}>
        {submitted ? (
          <div
            style={{
              textAlign: "center",
              padding: "2rem",
              background: "#D2F1E4",
              borderRadius: "10px",
              animation: "fadeInUp 0.5s ease",
            }}
          >
            <h3>Thank you for reaching out!</h3>
            <p>Your email client will open shortly. Please complete the email and send it.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <div>
              <label htmlFor="name" style={{ display: "block", fontWeight: "600", marginBottom: "0.5rem" }}>
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                style={{
                  width: "100%",
                  padding: "0.75rem",
                  border: "1px solid #cccccc",
                  borderRadius: "5px",
                  fontFamily: "inherit",
                  fontSize: "1rem",
                  boxSizing: "border-box",
                  transition: "border 0.3s ease",
                }}
                onFocus={(e) => e.target.style.borderColor = "#4E567E"}
                onBlur={(e) => e.target.style.borderColor = "#cccccc"}
              />
            </div>

            <div>
              <label htmlFor="email" style={{ display: "block", fontWeight: "600", marginBottom: "0.5rem" }}>
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                style={{
                  width: "100%",
                  padding: "0.75rem",
                  border: "1px solid #cccccc",
                  borderRadius: "5px",
                  fontFamily: "inherit",
                  fontSize: "1rem",
                  boxSizing: "border-box",
                  transition: "border 0.3s ease",
                }}
                onFocus={(e) => e.target.style.borderColor = "#4E567E"}
                onBlur={(e) => e.target.style.borderColor = "#cccccc"}
              />
            </div>

            <div>
              <label htmlFor="message" style={{ display: "block", fontWeight: "600", marginBottom: "0.5rem" }}>
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="6"
                style={{
                  width: "100%",
                  padding: "0.75rem",
                  border: "1px solid #cccccc",
                  borderRadius: "5px",
                  fontFamily: "inherit",
                  fontSize: "1rem",
                  boxSizing: "border-box",
                  resize: "vertical",
                  transition: "border 0.3s ease",
                }}
                onFocus={(e) => e.target.style.borderColor = "#4E567E"}
                onBlur={(e) => e.target.style.borderColor = "#cccccc"}
              />
            </div>

            <button
              type="submit"
              style={{
                padding: "1rem",
                background: "#4E567E",
                color: "#ffffff",
                border: "none",
                borderRadius: "5px",
                fontSize: "1rem",
                fontWeight: "600",
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => e.target.style.transform = "translateY(-2px)"}
              onMouseLeave={(e) => e.target.style.transform = "translateY(0)"}
            >
              Send Message
            </button>
          </form>
        )}
      </div>

      {/* Contact info */}
      <div
        style={{
          marginTop: "3rem",
          textAlign: "center",
          paddingTop: "2rem",
          borderTop: "1px solid #cccccc",
        }}
      >
        <h3>Other ways to reach me:</h3>
        <p>
          Email:{" "}
          <a href={`mailto:${email}`} style={{ color: "#4E567E", fontWeight: "600" }}>
            {email}
          </a>
        </p>
      </div>
    </section>
  );
};

export default Contact;
