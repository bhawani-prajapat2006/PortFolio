import "./App.css";
import "./styles/Navbar.css";
import Home from "./components/Home";
import Projects from "./components/Projects";
import TechStack from "./components/TechStack.jsx";
import Education from "./components/Education.jsx";
// import Experience from "./components/Experience.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

import { useEffect } from "react";

const App = () => {
  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("header nav a");

    const onScroll = () => {
      const top = window.scrollY;

      sections.forEach((sec) => {
        const offset = sec.offsetTop - 100;
        const height = sec.offsetHeight;
        const id = sec.getAttribute("id");

        if (top >= offset && top <= offset + height) {
          navLinks.forEach((link) => {
            link.classList.remove("active");
          });

          const activeLink = document.querySelector(
            `header nav a[href="#${id}"]`
          );
          if (activeLink) {
            activeLink.classList.add("active");
          }
        }
      });
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="application">
      {/* <Navbar /> */}
      <Home />
      <Projects />
      <TechStack />
      <Education />
      {/* <Experience /> */}
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
