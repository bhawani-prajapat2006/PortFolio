import React from "react";

export default function Home() {
  return (
    <section id="home">
      <div className="home-card">
        <div className="home-intro text-lg">
          <h1>👨‍💻</h1>
          <br />
          <h4>Hey there! 👋, I'm</h4>
          <h1>Bhawani Shankar</h1>
          <br />
          <h3>Empowering innovation through full-stack development</h3>
          <div className="home-small-card bg-blue-900/5">
            <h4 style={{ color: "#00CFFF" }}>
              <i class="fa-solid fa-user-tie"></i> &nbsp;About Me
            </h4>
            <br />
            <h5 style={{ lineHeight: "1.5" }}>
              A passionate developer and coder who enjoys solving problems,
              building ideas, and learning new things every day. This is where I
              share my work, skills, and passions.
            </h5>
          </div>
          <div className="home-btns">
            <a
              type="button"
              href="#contact"
              class="btn btn-primary mx-3 w-45 py-2 rounded-3"
            >
              Let's Connect
            </a>
            <a
              href="bhawani_resume.pdf"
              download="Resume.pdf"
              type="button"
              class="btn btn-primary w-45 mx-3 py-2 rounded-3"
            >
              Resume &nbsp;<i class="fa-solid fa-file"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
