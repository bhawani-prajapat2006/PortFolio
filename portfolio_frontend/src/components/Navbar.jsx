import React, { useState } from "react";
import "../styles/Navbar.css"

export default function Navbar() {

    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen)
    }

    return (
        <header className="header">

            <div className="portfolio">
                <a href="" className="logo">CodeNest</a>
                <a href="/bhawani_resume.pdf" download="Resume.pdf"><i class="fa-solid fa-file resume"></i></a>
            </div>

            <i id="menu-bar" className={`fa-solid ${menuOpen ? "fa-xmark" : "fa-bars"}`} onClick={toggleMenu}></i>

            <nav className={`navbar ${menuOpen ? "active" : ""}`}>
                <a href="#home" className="active"><i class="fa-solid fa-house"></i> &nbsp;Home</a>
                <a href="#projects"><i class="fa-solid fa-briefcase"></i> &nbsp;Projects</a>
                <a href="#techstack"><i class="fa-solid fa-microchip"></i> &nbsp;TechStack</a>
                <a href="#education"><i class="fa-solid fa-user-graduate"></i> &nbsp;Education</a>
                {/* <a href="#experience"><i class="fa-solid fa-square-check"></i> &nbsp;Experience</a> */}
                <a href="#contact"><i class="fa-solid fa-phone"></i> &nbsp;Contact</a>
                {/* <a href="">About</a> */}
            </nav>
        </header>
    )
}