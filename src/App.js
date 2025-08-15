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



          <h1>Hello!</h1>
          <h2>I'm Mohith Gowda J P</h2>
          <p>I'm a curious and creative computer science enthusiast who loves building impactful full-stack solutions and solving real-world problems through code.</p>
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
