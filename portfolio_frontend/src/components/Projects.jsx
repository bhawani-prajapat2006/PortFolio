import React, { useState, useEffect } from "react";

export default function Projects() {
  const [repos, setRepos] = useState([]);
  const username = "bhawani-prajapat2006";

  const selectedRepos = ["CallsVid", "HackSprint", "PortFolio", "ZerodhaClone_frontend", "ZerodhaClone_dashboard", "zerodha-clone", "sso_frontend", "sso_backend", "sso_service_provider"];

  useEffect(() => {
    const fetchRepos = async () => {
      const res = await fetch(
        `https://api.github.com/users/${username}/repos?sort=updated`
      );
      const data = await res.json();

      const filtered = data.filter((repo) => selectedRepos.includes(repo.name));
      setRepos(filtered);
      // setRepos(data);
    };
    fetchRepos();
  }, [username]);

  return (
    <section id="projects">
      <h1 className="text-center mb-3">Projects 💼</h1>
      <h5 style={{ color: "#9CA3AF" }} className="text-center">
        Here's my education and qualifications
      </h5>
      <div className="proj-card">
        {repos.map((repo) => (
          <div key={repo.id} className="card" style={{ width: "100%" }}>
            <img
              src="/assets/default-project.png"
              class="card-img-top"
              alt="..."
            ></img>
            <div className="card-body">
              <h4 className="card-title">{repo.name}</h4>
              <p className="card-text">
                {repo.description ? repo.description : "No description"}
              </p>
              <div className="card-contact">
                <span style={{color: "#00cfff"}}><i class="fa-solid fa-star"></i>&nbsp; {repo.stargazers_count}</span>
              <span style={{color: "#00ffc3"}}>{repo.language}</span>
              <a
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="card-link"
              >
                <i class="fa-brands fa-github"></i>&nbsp;
                View
              </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
