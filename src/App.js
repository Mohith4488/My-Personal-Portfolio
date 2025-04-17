import React from 'react';
import './App.css';
import profileImage from './Assets/img.jpg';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt } from 'react-icons/fa';
import { SiExpress, SiMongodb } from 'react-icons/si';



function App() {
  return (
    <div className="App">
      <nav className="navbar">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About Me</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      <section className="hero" id="home">
        <div className="hero-content">
        <img src={profileImage} alt="Mohit" className="profile-img" />



          <h1>Mohith Gowda J P</h1>
          <h2>Frontend Web Developer</h2>
          <p>Welcome to my portfolio website! I build modern, responsive web apps using React.</p>
        </div>
      </section>

      <section className="about" id="about">
        <div className="about-content">
          <h2>About Me</h2>
          <p>
            Hello! I'm a passionate developer currently learning full-stack development. I love building modern and responsive web apps using HTML, CSS, JavaScript, and React.
          </p>
          <p>
            I'm always curious to learn new things and improve my skills every day. This portfolio showcases my journey, my work, and my interests in web development.
          </p>
        </div>
      </section>

      <section className="projects" id="projects">
  <div className="projects-content">
    <h2>Projects</h2>
    <div className="project-cards">
      <div className="project-card">
        <h3>Portfolio Website</h3>
        <p>A responsive personal portfolio built with React, HTML, and CSS.</p>
        <p><strong>Tech Stack:</strong> React, CSS</p>
      </div>

      <div className="project-card">
        <h3>Weather App</h3>
        <p>Fetches real-time weather data using an API and displays forecasts.</p>
        <p><strong>Tech Stack:</strong> JavaScript, HTML, CSS, OpenWeatherMap API</p>
      </div>

      <div className="project-card">
        <h3>To-Do List</h3>
        <p>A simple to-do list app with add/remove functionality and local storage.</p>
        <p><strong>Tech Stack:</strong> JavaScript, HTML, CSS</p>
      </div>
    </div>
  </div>
</section>


<section className="skills" id="skills">
  <div className="skills-content">
    <h2>My Skills</h2>
    <div className="skills-grid">
      <div className="skill-card"><FaHtml5 color="#e34c26" size="2em" /> <p>HTML</p></div>
      <div className="skill-card"><FaCss3Alt color="#264de4" size="2em" /> <p>CSS</p></div>
      <div className="skill-card"><FaJs color="#f0db4f" size="2em" /> <p>JavaScript</p></div>
      <div className="skill-card"><FaReact color="#61dbfb" size="2em" /> <p>React</p></div>
      <div className="skill-card"><FaNodeJs color="#68a063" size="2em" /> <p>Node.js</p></div>
      <div className="skill-card"><SiExpress color="#000000" size="2em" /> <p>Express</p></div>
      <div className="skill-card"><SiMongodb color="#4db33d" size="2em" /> <p>MongoDB</p></div>
      <div className="skill-card"><FaGitAlt color="#f1502f" size="2em" /> <p>Git & GitHub</p></div>
    </div>
  </div>
</section>


{/* Contact Section */}
<section className="contact-section" id="contact">
  <div className="container">
    <h2>Contact Me / Hire Me</h2>
    <div className="buttons">
      <a href="tel:+1234567890" className="btn">Call Me</a>
      <a href="mailto:mohithgowda4455@gmail.com" className="btn">Email Me</a>
      <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer" className="btn">LinkedIn</a>
    </div>
  </div>
</section>



<footer className="footer">
  <p>&copy; {new Date().getFullYear()} Mohith Gowda. All rights reserved.</p>
</footer>

    </div>
  );
}

export default App;
