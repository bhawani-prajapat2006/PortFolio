import React, { useState, useEffect } from "react";
import GitHubCalendar from "react-github-calendar";

export default function TechStack() {
  function Card({ label, value, classValue }) {
    return (
      <div className="git-stat text-lg bg-blue-900/5">
        <i style={{ fontSize: "1.7rem" }} class={classValue}></i>
        <h2>{value}</h2>
        <p>{label}</p>
      </div>
    );
  }

  const technologies = [
    { name: "React", src: "assets/react.png" },
    { name: "Vite", src: "assets/Vite.js.png" },
    { name: "Node.js", src: "/assets/Node.js.png" },
    { name: "MongoDB", src: "/assets/MongoDB.png" },
    { name: "Git", src: "/assets/Git.png" },
    { name: "Material UI", src: "/assets/Material UI.png" },
    { name: "MySQL", src: "/assets/MySQL.png" },
    { name: "Postman", src: "/assets/Postman.png" },
    { name: "HTML5", src: "/assets/HTML5.png" },
    { name: "CSS3", src: "/assets/CSS3.png" },
    { name: "JavaScript", src: "/assets/JavaScript.png" },
    { name: "Node.js", src: "/assets/Node.js.png" },
    { name: "C++", src: "/assets/cpp.png" },
    { name: "C", src: "/assets/C.png" },
    // { name: "Python", src: "/assets/Python.png" },
    // Add more if needed
  ];

  const username = "bhawani-prajapat2006"; // ← change this to your GitHub username

  const [repos, setRepos] = useState(0);
  const [stars, setStars] = useState(0);
  const [forks, setForks] = useState(0);
  const [commits, setCommits] = useState(0); // optional / estimated

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}/repos?per_page=100`)
      .then((res) => res.json())
      .then((data) => {
        let starCount = 0;
        let forkCount = 0;
        let commitPromises = [];

        data.forEach((repo) => {
          starCount += repo.stargazers_count;
          forkCount += repo.forks_count;

          // optional: estimate commit count from each repo
          commitPromises.push(
            fetch(
              `https://api.github.com/repos/${username}/${repo.name}/commits?per_page=1`
            )
              .then((res) => res.headers.get("Link"))
              .then((link) => {
                if (link) {
                  const match = link.match(/&page=(\d+)>; rel="last"/);
                  return match ? parseInt(match[1]) : 1;
                }
                return 1;
              })
              .catch(() => 0)
          );
        });

        setRepos(data.length);
        setStars(starCount);
        setForks(forkCount);

        // Get total commits across all repos (optional & rate-limited)
        Promise.all(commitPromises).then((commitCounts) => {
          const totalCommits = commitCounts.reduce((acc, val) => acc + val, 0);
          setCommits(totalCommits);
        });
      });
  }, []);

  return (
    <section id="techstack">
      <h1 className="text-center mb-3">Techstack ⚙️</h1>
      <h5 style={{ color: "#9CA3AF" }} className="text-center">
        Technologies I've explored and used in real-world projects.
      </h5>
      <div className="tech-card">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {technologies.map((tech, i) => (
            <div
              key={i}
              className="tech-card-item flex flex-col items-center p-4 rounded-xl hover:scale-105 transition-transform"
            >
              <img
                src={tech.src}
                alt={tech.name}
                className="w-12 h-12 mb-2 object-contain"
              />
              <span
                style={{ color: "#00cfff" }}
                className="text-lg text-gray-400"
              >
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      <h1 className="text-center mb-3">Github Public Stats &nbsp;<i style={{color: "#00cfff"}} class="fa-solid fa-chart-simple"></i></h1>
      <h5 style={{ color: "#9CA3AF" }} className="text-center">
        Here’s a glimpse into my open-source journey — contributions, activity streaks, and code stats from GitHub
      </h5>

      <div className="github-stats">
        <Card
          label="Repositories"
          value={repos}
          classValue="fa-brands fa-github mb-4"
        />
        <Card
          label="Stars"
          value={stars}
          classValue="fa-regular fa-star mb-4"
        />
        <Card
          label="Forks"
          value={forks}
          classValue="fa-solid fa-code-fork mb-4"
        />
        <Card
          label="Commits"
          value={commits}
          classValue="fa-solid fa-code-commit mb-4"
        />
      </div>

      <div className="git-card">
        <div className="text-center github-calendar-box bg-blue-900/5">
          <h4 style={{ color: "#00ffc3" }} className="mb-4">
            <i class="fa-solid fa-chart-simple"></i> &nbsp;Github Contributions
          </h4>
          <div className="flex justify-center">
            <GitHubCalendar
              username="bhawani-prajapat2006"
              colorScheme="light"
              blockSize={15}
              blockMargin={2}
              fontSize={16}
            />
          </div>
        </div>
      </div>

      <div className="text-center git-card">
        <div className="git-stats-box bg-blue-900/5">
          <h4 style={{ color: "#00ffc3" }} className="mt-4 pt-2">
            <i class="fa-solid fa-signal"></i> &nbsp;Github Stats
          </h4>
          <div className="git-stats">
            <img
              style={{ background: "none" }}
              src="https://github-readme-stats.vercel.app/api?username=bhawani-prajapat2006&show_icons=true&theme=radical&bg_color=00000000&hide_border=true
"
              alt="GitHub Stats"
              className="mx-auto"
            />

            <img
              src="https://github-readme-stats.vercel.app/api/top-langs/?username=bhawani-prajapat2006&layout=compact&theme=radical&bg_color=00000000&hide_border=true
"
              alt="Top Languages"
              className="mx-auto"
            />
          </div>
        </div>
      </div>

      <div className="text-center">
        <a
          type="button"
          href="https://github.com/bhawani-prajapat2006"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            backgroundColor: " #00ffc321",
            color: "#00ffc3",
            border: "2px solid #00ffc3",
            fontSize: "1.2rem",
          }}
          class="btn btn-primary mx-3 w-45 py-2 rounded-3"
        >
          <i className="fa-brands fa-github"></i> &nbsp;Github Profile
        </a>
        <a
          type="button"
          href="https://www.linkedin.com/in/bhawani-shankar-prajapat/"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            backgroundColor: " #00cfff21",
            color: "#00cfff",
            border: "2px solid #00cfff",
            fontSize: "1.2rem",
          }}
          class="btn btn-primary mx-3 w-45 py-2 rounded-3"
        >
          <i className="fa-brands fa-linkedin-in"></i> &nbsp;LinkedIn
        </a>
      </div>
    </section>
  );
}
