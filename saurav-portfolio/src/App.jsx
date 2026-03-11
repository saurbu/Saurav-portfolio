import "./App.css";
import profileImg from "./assets/profile.jpeg";
import fullstackImg from "./assets/fullstack.jpg";
import resumeFile from "./assets/Saurav_Resume.pdf";
import { useState } from "react";
 

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="app">

      {/* NAVBAR */}
      <nav className="navbar">
  <div className="nav-container">
    <h2 className="logo">Saurav Sharma</h2>

    <div 
      className={`hamburger ${menuOpen ? "active" : ""}`} 
      onClick={() => setMenuOpen(!menuOpen)}
    >
      <span></span>
      <span></span>
      <span></span>
    </div>

    <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
      <li><a href="#home" onClick={() => setMenuOpen(false)}>Home</a></li>
      <li><a href="#about" onClick={() => setMenuOpen(false)}>About</a></li>
      <li><a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a></li>
      <li><a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a></li>
      <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
    </ul>
  </div>
</nav>

      {/* HERO */}
      <section id="home" className="hero">
        <div className="hero-left">
          <span className="badge">Full Stack Developer</span>

          <h1>
            Building scalable and <br />
            engaging digital products
          </h1>

          <p>
            I design and develop modern web applications using clean,
            efficient code with a focus on performance and user experience.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="btn primary">View Projects</a>
            <a href="#contact" className="btn outline">Contact Me</a>
          </div>
        </div>

        <div className="hero-right">
        <img src={fullstackImg} alt="Full Stack Illustration" />        
        </div>
        <div className="scroll-indicator">
  <p>Scroll to explore</p>
  <div className="arrow"></div>
</div>
      </section>

      {/* ABOUT */}
      <section id="about" className="section">
        <div className="section-content about-section">
          <img src={profileImg} alt="Saurav" className="about-img" />      
            <div className="about-text">
            <h2>About Me</h2>
            <p>
              I am an enthusiastic and self-motivated Web Developer with a
              strong foundation in Full Stack Development and Data Structures.
              I enjoy solving real-world problems and continuously improving
              my technical skills.
            </p>
            <p>
              📍 New Delhi, India
            </p>
            <div className="about-buttons">
              <a
                href="https://github.com/saurbu"
                target="_blank"
                rel="noopener noreferrer"
                className="btn primary"
              >
                GitHub
              </a>

              <a
                href="https://leetcode.com/u/ss0619963/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn primary"
              >
                LeetCode
              </a>

              <a
                href={resumeFile}
                download="Saurav_Sharma_Resume"
                className="btn outline"
              >
                Download Resume
              </a>
            </div>
              
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="section">
        <div className="section-content">
          <h2>Key Skills</h2>
          <div className="skills-grid">
            <div className="skill-card">HTML</div>
            <div className="skill-card">CSS</div>
            <div className="skill-card">Javascript</div>
            <div className="skill-card">Node.js</div>
            <div className="skill-card">Python</div>
            <div className="skill-card">Java</div>
            <div className="skill-card">C++</div>
            <div className="skill-card">Data Structures & Algorithms</div>
            <div className="skill-card">Git</div>
            <div className="skill-card">Figma</div>
            <div className="skill-card">Communication</div>
          </div>
        </div>
      </section>
      {/* hobby */}
      <section id="skills" className="section">
        <div className="section-content">
          <h2>Intrest & hobby</h2>
          <div className="skills-grid">
            <div className="skill-card">Traveling</div>
            <div className="skill-card">Playing Cricket</div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="section dark">
  <div className="section-content">
    <h2>Projects</h2>

    <div className="projects-grid">

      {/* SHOPLANE */}
      <div className="project-card">
        <h3>Stylelane</h3>
        <p>
          E-commerce platform with animated UI and structured product browsing.
        </p>

        <div className="project-buttons">
          <a 
            href="https://saurbu.github.io/STYLELANE-website/index.html"
            target="_blank"
            rel="noopener noreferrer"
            className="btn code-btn"
          >
            Code
          </a>

          <a 
            href="https://saurbu.github.io/STYLELANE-website/index.html"
            target="_blank"
            rel="noopener noreferrer"
            className="btn demo-btn"
          >
            Live Demo
          </a>
        </div>
      </div>

      {/* STICKY */}
      <div className="project-card">
        <h3>Sticky</h3>
        <p>
          Notes-sharing platform with customizable sticky templates.
        </p>

        <div className="project-buttons">
          <a 
            href="https://github.com/yourusername/sticky"
            target="_blank"
            rel="noopener noreferrer"
            className="btn code-btn"
          >
            Code
          </a>

          <a 
            href="https://sticky-demo.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="btn demo-btn"
          >
            Live Demo
          </a>
        </div>
      </div>

      {/* RENTERR */}
      <div className="project-card">
        <h3>Renterr</h3>
        <p>
          Car rental platform with booking and dual login systems.
        </p>

        <div className="project-buttons">
          <a 
            href="https://github.com/yourusername/renterr"
            target="_blank"
            rel="noopener noreferrer"
            className="btn code-btn"
          >
            Code
          </a>

          <a 
            href="https://renterr-demo.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="btn demo-btn"
          >
            Live Demo
          </a>
        </div>
      </div>

    </div>
  </div>
</section>
      {/* EDUCATION */}
      <section id="education" className="section">
  <div className="section-content">
    <h2>Education</h2>

    <div className="education-grid">

      <div className="edu-card">
        <h3>Bachelor of Technology (CSE)</h3>
        <p className="edu-sub">Dr. A.P.J. Abdul Kalam Technical University (AKTU)</p>
        <p className="edu-year">2024 – Present</p>
        <p>
          Currently pursuing B.Tech in Computer Science with focus on
          Data Structures, Web Development and Software Engineering.
        </p>
      </div>

      <div className="edu-card">
        <h3>Diploma in Computer Engineering</h3>
        <p className="edu-sub">Delhi Skill and Entrepreneurship University (DSEU)</p>
        <p className="edu-year">2021 – 2024</p>
        <p>
          Completed diploma with strong foundation in programming,
          database management and web technologies.
        </p>
      </div>

    </div>
  </div>
</section>

      {/* CONTACT */}
      <section id="contact" className="section dark">
  <div className="section-content contact-box">
    <h2>Get In Touch</h2>

    <div className="contact-card">
      <p><strong>Email:</strong> 2002sauravsharma@gmail.com</p>
      <p><strong>Phone:</strong> 8800666966</p>
      <div className="contact-buttons">
  <a
    href="https://www.linkedin.com/in/saurav-sharma-606675275/"
    target="_blank"
    rel="noopener noreferrer"
    className="btn primary"
  >
    Linkedin
  </a>
</div>
    </div>
  </div>
</section>

      <footer>
        © 2026 Saurav Sharma
      </footer>

    </div>
  );
}

export default App;
