import React from "react";
import { motion } from "framer-motion";
import "./App.css";

const LINKEDIN =
  "https://www.linkedin.com/in/muskan-lamba-82360a402/";

const GITHUB = "https://github.com/muskanlamba70154-design";

const EMAIL = "muskanlamba70154@gmail.com";

const RESUME = "/Muskan_Lamba_Resume.pdf";

const projects = [
  {
    number: "01",
    title: "AI Second Brain",
    category: "AI POWERED APPLICATION",
    description:
      "A personal knowledge assistant that allows users to upload documents, chat with their content, generate summaries, and create flashcards.",
    technologies: ["React", "Node.js", "MongoDB", "Gemini AI"],
    github: `${GITHUB}/Syntecx-AI-Second-Brain`,
  },
  {
    number: "02",
    title: "ShopSphere",
    category: "E-COMMERCE PLATFORM",
    description:
      "A full-stack e-commerce platform featuring product management, shopping cart functionality, and order management.",
    technologies: ["React", "Node.js", "Express", "MongoDB"],
    github: `${GITHUB}/ShopSphere-Ecommerce-Platform`,
  },
  {
    number: "03",
    title: "Social Media Application",
    category: "FULL STACK DEVELOPMENT",
    description:
      "A social media application with user authentication, profiles, and post management functionality.",
    technologies: ["React", "Node.js", "Express", "MongoDB"],
    github: `${GITHUB}/CodeAlpha-SocialMedia`,
  },
  {
    number: "04",
    title: "Contact Manager",
    category: "WEB APPLICATION",
    description:
      "A contact management application designed to create, organize, search, and manage contact information.",
    technologies: ["React", "Express", "Node.js", "MongoDB"],
    github: `${GITHUB}/Syntecxhub_Contact_Manager`,
  },
  {
    number: "05",
    title: "Expense Tracker",
    category: "PRODUCTIVITY APPLICATION",
    description:
      "A finance tracking application that helps users record expenses, monitor transactions, and view expense summaries.",
    technologies: ["React", "JavaScript", "CSS", "LocalStorage"],
    github: `${GITHUB}/Syntecxhub_Expense_Tracker`,
  },
  {
    number: "06",
    title: "Product Catalog API",
    category: "BACKEND DEVELOPMENT",
    description:
      "A RESTful API featuring product management, authentication, search, pagination, and data aggregation.",
    technologies: ["Node.js", "Express", "MongoDB", "Mongoose"],
    github: GITHUB,
  },
];

const skillGroups = [
  {
    title: "Frontend Development",
    skills: ["HTML", "CSS", "JavaScript", "React.js", "Responsive Design"],
  },
  {
    title: "Backend Development",
    skills: ["Node.js", "Express.js", "REST APIs", "Authentication"],
  },
  {
    title: "Database",
    skills: ["MongoDB", "Mongoose", "LocalStorage"],
  },
  {
    title: "Tools & Technologies",
    skills: ["Git", "GitHub", "VS Code", "Postman", "Vite"],
  },
];

const experiences = [
  {
    company: "CodeAlpha",
    role: "Full Stack Development Intern",
    duration: "July 2026",
    description:
      "Worked on full-stack development tasks and built a social media application as part of the internship program.",
  },
  {
    company: "Syntecxhub",
    role: "Web Development Intern",
    duration: "July 2026",
    description:
      "Worked on web development projects, including an expense tracker and contact management application.",
  },
  {
    company: "DecodeLabs",
    role: "Internship Experience",
    duration: "",
    description:
      "Gained practical exposure to development concepts and professional project workflows.",
  },
];

function SectionHeading({ label, title, description }) {
  return (
    <div className="section-heading">
      <span className="section-label">{label}</span>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}

function App() {
  return (
    <div className="portfolio">

      {/* NAVBAR */}
      <header className="navbar">
        <a href="#home" className="logo">
          Muskan<span>.</span>
        </a>

        <nav className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#education">Education</a>
          <a href="#contact">Contact</a>
        </nav>

        <a href="#contact" className="nav-button">
          Let's Talk <span>↗</span>
        </a>
      </header>

      {/* HERO SECTION */}
      <section className="hero" id="home">

        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="availability">
            <span className="availability-dot"></span>
            FULL STACK DEVELOPER
          </div>

          <h1>
            Hi, I'm <span>Muskan Lamba</span>
            <br />
            I Build Digital
            <br />
            Experiences.
          </h1>

          <p className="hero-description">
            A Computer Science and Design student passionate about building
            modern, responsive, and user-friendly web applications.
          </p>

          <div className="hero-buttons">

            <a href="#projects" className="primary-button">
              Explore My Work <span>↗</span>
            </a>

            <a href="#contact" className="secondary-button">
              Contact Me
            </a>

            <a
              href={RESUME}
              download="Muskan_Lamba_Resume.pdf"
              className="primary-button"
            >
              Download Resume ↓
            </a>

          </div>

          <div className="hero-socials">

            <a href={GITHUB} target="_blank" rel="noreferrer">
              GitHub ↗
            </a>

            <span>•</span>

            <a href={LINKEDIN} target="_blank" rel="noreferrer">
              LinkedIn ↗
            </a>

            <span>•</span>

            <a href={`mailto:${EMAIL}`}>
              Email ↗
            </a>

          </div>
        </motion.div>

        <motion.div
          className="hero-image-container"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="hero-image-glow"></div>

          <div className="hero-image">
            <div className="profile-placeholder">
              <span>ML</span>
              <p>YOUR PHOTO HERE</p>
            </div>
          </div>

          <div className="floating-card">
            <span>✦</span>

            <div>
              <strong>Creative Developer</strong>
              <p>Turning ideas into reality</p>
            </div>
          </div>
        </motion.div>

        <div className="hero-scroll">
          <span>SCROLL TO EXPLORE</span>
          <div></div>
        </div>

      </section>

      {/* ABOUT SECTION */}
      <section className="section about-section" id="about">

        <SectionHeading
          label="GET TO KNOW ME"
          title="About Me"
          description="A little introduction about who I am and what I do."
        />

        <div className="about-content">

          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h3>
              Passionate about technology,
              <span> creativity and innovation.</span>
            </h3>

            <p>
              I'm Muskan Lamba, a B.Tech Computer Science and Design
              student with a strong interest in full-stack web development.
            </p>

            <p>
              I enjoy creating practical digital solutions, developing
              interactive user interfaces, and working with modern
              technologies to turn ideas into functional applications.
            </p>

            <p>
              My goal is to continuously improve my technical skills and
              contribute to meaningful projects that solve real-world
              problems.
            </p>

            <a href="#contact" className="text-link">
              Let's connect <span>↗</span>
            </a>
          </motion.div>

          <motion.div
            className="about-stats"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >

            <div className="stat-card">
              <h3>8.5</h3>
              <p>Academic CGPA</p>
            </div>

            <div className="stat-card">
              <h3>06+</h3>
              <p>Development Projects</p>
            </div>

            <div className="stat-card">
              <h3>Full Stack</h3>
              <p>Development Focus</p>
            </div>

            <div className="stat-card">
              <h3>B.Tech</h3>
              <p>Computer Science & Design</p>
            </div>

          </motion.div>
        </div>
      </section>

      {/* SKILLS SECTION */}
      <section className="section skills-section" id="skills">

        <SectionHeading
          label="MY EXPERTISE"
          title="Skills & Technologies"
          description="Technologies and tools I use to bring ideas to life."
        />

        <div className="skills-grid">

          {skillGroups.map((group, index) => (
            <motion.div
              className="skill-card"
              key={group.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <span className="skill-number">
                0{index + 1}
              </span>

              <h3>{group.title}</h3>

              <div className="skill-tags">
                {group.skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>

            </motion.div>
          ))}

        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section className="section projects-section" id="projects">

        <SectionHeading
          label="SELECTED WORK"
          title="Featured Projects"
          description="Some applications and development projects I've worked on."
        />

        <div className="projects-grid">

          {projects.map((project, index) => (
            <motion.article
              className="project-card"
              key={project.number}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >

              <div className="project-top">
                <span className="project-number">
                  {project.number}
                </span>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="project-link"
                  aria-label={`View ${project.title} on GitHub`}
                >
                  ↗
                </a>
              </div>

              <span className="project-category">
                {project.category}
              </span>

              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <div className="project-tech">
                {project.technologies.map((technology) => (
                  <span key={technology}>
                    {technology}
                  </span>
                ))}
              </div>

              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="project-view"
              >
                View on GitHub <span>↗</span>
              </a>

            </motion.article>
          ))}

        </div>
      </section>

      {/* EXPERIENCE SECTION */}
      <section className="section experience-section" id="experience">

        <SectionHeading
          label="MY JOURNEY"
          title="Internship Experience"
          description="Learning, building, and growing through practical experience."
        />

        <div className="experience-list">

          {experiences.map((experience, index) => (
            <motion.div
              className="experience-card"
              key={experience.company}
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >

              <div className="experience-marker"></div>

              <div className="experience-info">

                <span className="experience-duration">
                  {experience.duration || "Internship"}
                </span>

                <h3>{experience.role}</h3>

                <h4>{experience.company}</h4>

                <p>{experience.description}</p>

              </div>

              <span className="experience-arrow">↗</span>

            </motion.div>
          ))}

        </div>
      </section>

      {/* EDUCATION SECTION */}
      <section className="section education-section" id="education">

        <SectionHeading
          label="ACADEMIC BACKGROUND"
          title="Education"
          description="My academic journey and educational background."
        />

        <motion.div
          className="education-card"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >

          <div className="education-icon">✦</div>

          <div>
            <span className="education-label">
              UNDERGRADUATE DEGREE
            </span>

            <h3>Bachelor of Technology</h3>

            <h4>Computer Science and Design</h4>

            <p>
              World College of Technology and Management, Gurgaon
            </p>
          </div>

          <div className="education-cgpa">
            <strong>8.5</strong>
            <span>CGPA</span>
          </div>

        </motion.div>
      </section>

      {/* CONTACT SECTION */}
      <section className="section contact-section" id="contact">

        <SectionHeading
          label="GET IN TOUCH"
          title="Let's Work Together"
          description="Have an opportunity or a project idea? I'd love to hear from you."
        />

        <motion.div
          className="contact-box"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >

          <span className="contact-small">
            HAVE A PROJECT IN MIND?
          </span>

          <h3>
            Let's create something
            <span> amazing together.</span>
          </h3>

          <p>
            I'm always interested in learning, collaborating, and exploring
            new opportunities in web development.
          </p>

          <a
            href={`mailto:${EMAIL}`}
            className="primary-button"
          >
            Say Hello <span>↗</span>
          </a>

          <div className="contact-details">

            <a href={`mailto:${EMAIL}`}>
              ✉ {EMAIL}
            </a>

            <a
              href={GITHUB}
              target="_blank"
              rel="noreferrer"
            >
              GitHub ↗
            </a>

            <a
              href={LINKEDIN}
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn ↗
            </a>

          </div>

        </motion.div>
      </section>

      {/* FOOTER */}
      <footer className="footer">

        <a href="#home" className="logo">
          Muskan<span>.</span>
        </a>

        <p>Designed & Developed by Muskan Lamba</p>

        <div className="footer-socials">

          <a href={GITHUB} target="_blank" rel="noreferrer">
            GitHub
          </a>

          <a href={LINKEDIN} target="_blank" rel="noreferrer">
            LinkedIn
          </a>

        </div>

        <a href="#home" className="back-to-top">
          Back to top ↑
        </a>

        <div className="footer-bottom">
          © {new Date().getFullYear()} Muskan Lamba. All rights reserved.
        </div>

      </footer>

    </div>
  );
}

export default App;