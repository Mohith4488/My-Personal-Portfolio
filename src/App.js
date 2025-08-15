import React from 'react';
import './App.css';
import profileImage from './Assets/img.jpg';
import { 
  FaHtml5, 
  FaCss3Alt, 
  FaJs, 
  FaReact, 
  FaJava, 
  FaPython, 
  FaGitAlt, 
  FaCode 
} from 'react-icons/fa';

import { 
  SiMysql, 
  SiC, 
  SiTailwindcss 
} from 'react-icons/si'



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



          <h1>Hello!</h1>
          <h2>I'm Mohith Gowda J P</h2>
          <p>A final-year Computer Science Engineering student passionate about applying problem-solving skills to design innovative and user-friendly software solutions.</p>
        </div>
      </section>

      <section className="about" id="about">
        <div className="about-content">
        <h2>About Me</h2>
<p>
  A curious and creative computer science enthusiast, currently diving deep into full-stack development. I enjoy crafting responsive and modern web apps using HTML, CSS, JavaScript, and React.
</p>
<p>
  Passionate about turning ideas into impactful code, I'm always eager to learn, grow, and collaborate on real-world projects. This portfolio reflects my journey, skills, and love for building meaningful solutions.
</p>

<a href="/Mohith-Gowda_Resume.pdf" download="MOHITH GOWDA J P.pdf" className="btn resume-btn">
  View Resume
</a>

 
        </div>
      </section>


<section className="projects" id="projects">
  <div className="projects-content">
    <h2>Projects</h2>
    <div className="project-cards">


<div className="project-card">
  <img src={require('./Assets/farmers1.png')} alt="Farmer Support Portal" className="project-image" />
  <h3>Farmer Support Portal</h3>
  <p>
    A full-stack web application for farmers to access government schemes, check daily market prices, 
    and communicate directly with administrators. Admins can manage farmers, update schemes, post market prices, 
    and respond to farmer queries.
  </p>
  <p><strong>Tech Stack:</strong> Java (JSP & Servlets), MySQL, HTML, CSS, TailwindCSS</p>
  <p>
    <a
      href="https://github.com/Mohith4488/farmer-portal"
      target="_blank"
      rel="noopener noreferrer"
      style={{ color: '#007965', textDecoration: 'underline' }}
    >
      Live Demo
    </a>
  </p>
</div>



    <div className="project-card">
      <img src={require('./Assets/cricket.png')} alt="Farmer Support Portal" className="project-image" />
  <h3>Cricket – Quiz App</h3>
  <p>An engaging and interactive cricket quiz app that challenges users with multiple-choice questions related to cricket history, records, and players.</p>
  <p><strong>Tech Stack:</strong> React, JavaScript, CSS</p>
  <p>
    <a
      href="https://quizcricket.vercel.app/"
      target="_blank"
      rel="noopener noreferrer"
      style={{ color: '#007965', textDecoration: 'underline' }}
    >
      Live Demo
    </a>
  </p>
</div>

    
      <div className="project-card">
        <img src={require('./Assets/future-diary.png')} alt="Farmer Support Portal" className="project-image" />
        <h3>Future Diary</h3>
        <p>An interactive and creative time capsule web app where users can write messages to their future selves, get AI predictions, and enjoy engaging UI effects.</p>
        <p><strong>Tech Stack:</strong> React, JavaScript, CSS, react-confetti, custom AI logic</p>
        <p>
          <a href="https://send2future.vercel.app" target="_blank" rel="noopener noreferrer" style={{ color: '#007965', textDecoration: 'underline' }}>
            Live Demo
          </a>
        </p>
      </div>

      <div className="project-card">
        <img src={require('./Assets/flashback.png')} alt="Farmer Support Portal" className="project-image" />
        <h3>Flashback Reader</h3>
        <p>A smart reading assistant that fetches book summaries, news highlights, and historical Wikipedia articles to bring context to your daily reads.</p>
        <p><strong>Tech Stack:</strong> React, CSS, Wikipedia API, Google Books API, GNews API</p>
        <p>
          <a href="https://flashback-reader.vercel.app/" target="_blank" rel="noopener noreferrer" style={{ color: '#007965', textDecoration: 'underline' }}>
            Live Demo
          </a>
        </p>
      </div>

    </div>
  </div>
</section>


<section className="skills" id="skills">
  <div className="skills-content">
    <h2>My Skills</h2>
    <div className="skills-grid">

      {/* Programming Languages */}
      <div className="skill-card"><SiC color="#A8B9CC" size="2em" /> <p>C</p></div>
      <div className="skill-card"><FaJava color="#f89820" size="2em" /> <p>Java</p></div>
      <div className="skill-card"><FaPython color="#3776AB" size="2em" /> <p>Python</p></div>
      <div className="skill-card"><FaJs color="#f0db4f" size="2em" /> <p>JavaScript</p></div>

      {/* Frontend */}
      <div className="skill-card"><FaHtml5 color="#e34c26" size="2em" /> <p>HTML</p></div>
      <div className="skill-card"><FaCss3Alt color="#264de4" size="2em" /> <p>CSS</p></div>
      <div className="skill-card"><SiTailwindcss color="#38B2AC" size="2em" /> <p>TailwindCSS</p></div>
      <div className="skill-card"><FaReact color="#61dbfb" size="2em" /> <p>React</p></div>

      {/* Backend */}
      <div className="skill-card"><FaCode color="#007396" size="2em" /> <p>JSP</p></div>

      {/* Database */}
      <div className="skill-card"><SiMysql color="#4479A1" size="2em" /> <p>MySQL</p></div>

      {/* Tools */}
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
      <a href="https://www.linkedin.com/in/mohith-gowda-jp-796955257?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="btn">LinkedIn</a>
    </div>
  </div>
</section>



<footer className="footer">
  <p>&copy; {new Date().getFullYear()} Mohith Gowda. All rights reserved.</p>
  <div className="social-icons">
    <a
      href="mailto:mohithgowda4455@gmail.com"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Email"
    >
      <i className="fas fa-envelope"></i>
    </a>
    <a
      href="https://www.linkedin.com/in/mohith-gowda-jp-796955257?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="LinkedIn"
    >
      <i className="fab fa-linkedin"></i>
    </a>
    <a
      href="https://github.com/Mohith4488"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="GitHub"
    >
      <i className="fab fa-github"></i>
    </a>
  </div>
</footer>


    </div>
  );
}

export default App;
