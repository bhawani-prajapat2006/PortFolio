import React from "react";

export default function Education() {
  return (
    <section id="education">
      <h1 className="text-center mb-3">Education 💼</h1>
      <h5 style={{color: "#9CA3AF"}} className="text-center">Here's my education and qualifications</h5>
      <div className="edu-card">
        <div className="home-small-card edu-small-card bg-blue-900/5">
          <div className="left-edu">
            <h5 style={{color: "#00ffc3"}}>B.Tech : Engineering Science</h5>
            <h5>Indian Institute of Technology</h5>
            <br />
            <span className="me-5">
              <i style={{color: "#00cfff"}} class="fa-solid fa-calendar-days"></i>&nbsp; 2023-2027
            </span>
            <span>
                <i style={{color: "#00cfff"}} class="fa-solid fa-location-dot"></i> &nbsp; Jodhpur
            </span>
          </div>
          <div style={{color: "#00cfff"}} className="right-edu">
            <h5>8.15/10</h5>
          </div>
        </div>
        <div className="home-small-card edu-small-card bg-blue-900/5">
          <div className="left-edu">
            <h5 style={{color: "#00ffc3"}}>Secondary Education : PCM</h5>
            <h5>Bhagwan Mahaveer Senior Secondary School</h5>
            <br />
            <span className="me-5">
              <i style={{color: "#00cfff"}} class="fa-solid fa-calendar-days"></i>&nbsp; 2021-2022
            </span>
            <span>
                <i style={{color: "#00cfff"}} class="fa-solid fa-location-dot"></i> &nbsp; Bikaner
            </span>
          </div>
          <div style={{color: "#00cfff"}} className="right-edu">
            <h5>96.00%</h5>
          </div>
        </div>
        <div className="home-small-card edu-small-card bg-blue-900/5">
          <div className="left-edu">
            <h5 style={{color: "#00ffc3"}}>Secondary Education</h5>
            <h5>Naveen Adarsh Vidhya Mandir Senior Secondary School</h5>
            <br />
            <span className="me-5">
              <i style={{color: "#00cfff"}} class="fa-solid fa-calendar-days"></i>&nbsp; 2019-2020
            </span>
            <span>
                <i style={{color: "#00cfff"}} class="fa-solid fa-location-dot"></i> &nbsp; Bikaner
            </span>
          </div>
          <div style={{color: "#00cfff"}} className="right-edu">
            <h5>92.67%</h5>
          </div>
        </div>
      </div>
    </section>
  );
}
