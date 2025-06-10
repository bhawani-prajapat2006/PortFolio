import React from "react";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-tags">
        <a href="#home">Home</a>
        <a href="#projects">Projects</a>
        <a href="#techstack">TechStack</a>
        <a href="#education">Education</a>
        {/* <a href="#experience">Experience</a> */}
        <a href="#contact">Contact</a>
        {/* <a href="">About</a> */}
      </div>
      <div className="footer-section">
        <div style={{ color: " #00ffc3", fontSize: "1.3rem" }}>CodeNest</div>
        <div>© 2025 CodeNest. All rights reserved.</div>
        <div className="contact-tags">
          <a href="mailto:bhawanishankarp2006@gmail.com" target="_blank" rel="noopener noreferrer">
            <i class="fa-solid fa-envelope"></i>
          </a>
          <a href="https://www.linkedin.com/in/bhawani-shankar-prajapat/" target="_blank" rel="noopener noreferrer">
            <i class="fa-brands fa-linkedin-in"></i>
          </a>
          <a href="https://github.com/bhawani-prajapat2006/" target="_blank" rel="noopener noreferrer">
            <i class="fa-brands fa-github"></i>
          </a>
          <a href="https://www.instagram.com/bhawanishankarp2006/" target="_blank" rel="noopener noreferrer">
            <i class="fa-brands fa-instagram"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
