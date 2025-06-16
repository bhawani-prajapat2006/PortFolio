import React, { useState } from "react";
import axios from "axios";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("https://portfolio-backend-yjml.onrender.com", formData);
      alert("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      console.error(err);
      alert("Failed to send message.");
    }
  };

  return (
    <section id="contact">
      <h1 className="text-center mb-3">Let's Connect 🤝 </h1>
      <h5 style={{ color: "#9CA3AF" }} className="text-center">
        If you have any idea, suggestion or just wanna work with me. Feel free
        to reach out!
      </h5>
      <div className="contact-card">
        <div className="small-card bg-blue-900/5">
          <div className="max-w-md mx-auto input-field">
            <h2 style={{ textAlign: "center" }}>Send Message</h2>
            <br />
            <form onSubmit={handleSubmit}>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-300 mb-1"
              >
                Name
              </label>
              <div className="flex items-center rounded-xl bg-transparent pl-3 border border-gray-300 focus-within:border-indigo-600">
                <input
                  required
                  value={formData.name}
                  onChange={handleChange}
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Enter your name"
                  className="block min-w-0 grow py-2 px-3 text-sm text-gray-300 placeholder:text-gray-400 focus:outline-none"
                />
              </div>
              <br />
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-300 mb-1"
              >
                Email
              </label>
              <div className="flex items-center rounded-xl bg-transparent pl-3 border border-gray-300 focus-within:border-indigo-600">
                <input
                  required
                  value={formData.email}
                  onChange={handleChange}
                  id="email"
                  name="email"
                  type="text"
                  placeholder="Enter you email"
                  className="block min-w-0 grow py-2 px-3 text-sm text-gray-300 placeholder:text-gray-400 focus:outline-none"
                />
              </div>
              <br />
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-300 mb-1"
              >
                Message
              </label>
              <div className="flex items-center rounded-xl bg-transparent pl-3 mb-3 border border-gray-300 focus-within:border-indigo-600">
                <input
                  required
                  value={formData.message}
                  onChange={handleChange}
                  id="message"
                  name="message"
                  type="text"
                  placeholder="Write your message here..."
                  className="block min-w-0 grow pt-2 pb-5 mb-5 px-3 text-sm text-gray-300 placeholder:text-gray-400 focus:outline-none"
                />
              </div>
              <br />
              <button
                type="submit"
                style={{
                  backgroundColor: " #00ffc3",
                  color: "rgb(12, 101, 80)",
                  border: "none",
                  fontSize: "1.2rem",
                }}
                class="btn btn-primary w-full py-2 rounded-3"
              >
                Send Message &nbsp; <i class="fa-solid fa-paper-plane"></i>
              </button>
            </form>
          </div>
        </div>
        <div className="small2-card">
          <div className="small-2-card p-4 px-5 text-xl bg-blue-900/5">
            <h2 style={{ textAlign: "center" }}>Contact Info</h2>
            <div>
              <span>
                <i
                  style={{ color: "#00ffc3" }}
                  class="fa-solid fa-envelope"
                ></i>
                &nbsp;&nbsp;Email &nbsp;&nbsp;&nbsp;
              </span>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="mailto:bhawanishankarp2006@gmail.com"
              >
                bhawanishankarp2006@gmail.com
              </a>
            </div>
            <div>
              <span>
                <i
                  style={{ color: "#00ffc3" }}
                  class="fa-brands fa-linkedin-in"
                ></i>{" "}
                &nbsp;&nbsp;LinkedIn &nbsp;&nbsp;&nbsp;
              </span>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/bhawani-shankar-prajapat/"
              >
                bhawani-shankar-prajapat
              </a>
            </div>
            <div>
              <span>
                <i style={{ color: "#00ffc3" }} class="fa-brands fa-github"></i>
                &nbsp;&nbsp;Github &nbsp;&nbsp;&nbsp;
              </span>
              <a
                className="text-gray-400"
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/bhawani-prajapat2006/"
              >
                bhawani-prajapat2006
              </a>
            </div>
            <div>
              <span>
                <i
                  style={{ color: "#00ffc3" }}
                  class="fa-brands fa-instagram"
                ></i>
                &nbsp;&nbsp;Instragram &nbsp;&nbsp;&nbsp;
              </span>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.instagram.com/bhawanishankarp2006/"
              >
                bhawanishankarp2006
              </a>
            </div>
          </div>
          <div className="small-2-card p-4 px-5 text-lg bg-blue-900/5">
            <h2 style={{ textAlign: "center" }}>Let's Connect</h2>
            <div className="connect-text">
              <div className="items-center">
                <img
                  className="w-full max-w-full"
                  src="https://readme-typing-svg.demolab.com?font=Fira+Code&size=20&pause=1000&color=00FFC3&width=500&center=true&lines=Hey+There!+👋;Looking+out+for+good+projects+and+ideas!"
                  alt="Typing Animation"
                />
              </div>
              <div>
                <p className="text-gray-400">
                  Let’s build something great together. Whether you have a
                  project in mind, want to collaborate, or just want to say
                  hello — I’m always open to new ideas and opportunities. Reach
                  out, and let’s connect!
                </p>
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
