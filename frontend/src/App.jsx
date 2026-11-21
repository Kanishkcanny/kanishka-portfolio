
import { useEffect, useState } from "react";
import "./App.css";

const skills = [
  "AWS",
  "Linux",
  "Docker",
  "Kubernetes",
  "Terraform",
  "Jenkins",
  "Ansible",
  "GitHub Actions",
  "Python",
  "Prometheus",
  "Grafana",
];

const projects = [
  {
    number: "01",
    title: "Microservices CI/CD & GitOps",
    description:
      "Containerized microservices deployed on Amazon EKS using Helm, Argo CD and GitHub Actions.",
    technologies: "AWS · Kubernetes · Docker · Argo CD",
    status: "DevOps Project",
  },
  {
    number: "02",
    title: "Highly Available AWS Infrastructure",
    description:
      "Multi-AZ infrastructure with Terraform, Auto Scaling, Application Load Balancer and RDS.",
    technologies: "AWS · Terraform · ECS · RDS",
    status: "Cloud Infrastructure",
  },
  {
    number: "03",
    title: "AWS Cost Guardrails Automation",
    description:
      "Automated non-production resource management and cloud cost monitoring using Python and AWS Lambda.",
    technologies: "Python · Boto3 · Lambda · EventBridge",
    status: "Cloud Automation",
  },
];

function App() {
  const [profile, setProfile] = useState(null);
  const [apiStatus, setApiStatus] = useState("Connecting");

  useEffect(() => {
    const controller = new AbortController();

    fetch("http://127.0.0.1:8000/profile/", {
      signal: controller.signal,
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("API request failed");
        }
        return response.json();
      })
      .then((data) => {
        setProfile(data);
        setApiStatus("Connected");
      })
      .catch((error) => {
        if (error.name !== "AbortError") {
          console.error("Profile API error:", error);
          setApiStatus("Unavailable");
        }
      });

    return () => controller.abort();
  }, []);

  return (
    <div className="portfolio">
      <nav className="navbar">
        <a href="#home" className="logo">
          KB<span>.</span>
        </a>

        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
        </div>

        <a href="#contact" className="nav-contact">
          Let's Connect ↗
        </a>
      </nav>

      <main>
        {/* HERO SECTION */}
        <section className="hero section-container" id="home">
          <div className="hero-content">
            <p className="eyebrow">
              <span className="status-dot"></span>
              AVAILABLE FOR OPPORTUNITIES
            </p>

            <h1>
              Building reliable
              <br />
              infrastructure.
              <br />
              <span>Automating the future.</span>
            </h1>

            <p className="hero-description">
              Hi, I'm{" "}
              <strong>
                {profile?.name || "Kanishka Bhardwaj"}
              </strong>
              .{" "}
              {profile?.headline ||
                "A DevOps Engineer passionate about cloud infrastructure, automation, Kubernetes and building scalable systems."}
            </p>

            <div className="hero-buttons">
              <a href="#projects" className="button-primary">
                Explore My Work ↗
              </a>

              <a href="#contact" className="button-secondary">
                Contact Me
              </a>
            </div>

            <div className="hero-location">
              <span>📍 {profile?.location || "Bengaluru, India"}</span>
              <span>☁ AWS · DevOps · Cloud</span>
            </div>
          </div>

          <div className="terminal-card">
            <div className="terminal-header">
              <div className="terminal-dots">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <span>kanishka@devops:~</span>
            </div>

            <div className="terminal-body">
              <p>
                <span className="terminal-muted">$</span> whoami
              </p>
              <h2>kanishka-bhardwaj</h2>

              <p>
                <span className="terminal-muted">$</span> cat role.txt
              </p>
              <p className="terminal-green">DevOps Engineer</p>

              <p>
                <span className="terminal-muted">$</span> ls skills/
              </p>

              <div className="terminal-skills">
                <span>aws</span>
                <span>docker</span>
                <span>kubernetes</span>
                <span>terraform</span>
                <span>linux</span>
                <span>ci-cd</span>
              </div>

              <p className="terminal-ready">
                <span className="terminal-muted">$</span> system.ready
                <span className="cursor">_</span>
              </p>
            </div>
          </div>
        </section>

        {/* STATS */}
        <section className="stats section-container">
          <div>
            <h2>4+</h2>
            <p>Years of Experience</p>
          </div>
          <div>
            <h2>50+</h2>
            <p>Servers Managed</p>
          </div>
          <div>
            <h2>3</h2>
            <p>DevOps Projects</p>
          </div>
          <div>
            <h2>95%+</h2>
            <p>SLA Compliance</p>
          </div>
        </section>

        {/* ABOUT */}
        <section
          className="content-section section-container"
          id="about"
        >
          <p className="section-label">01 / ABOUT ME</p>
          <h2 className="section-heading">
            More than just <span>a resume.</span>
          </h2>
          <p className="section-description">
            My professional journey combines infrastructure operations,
            system administration and DevOps engineering. I enjoy
            automating repetitive tasks, troubleshooting production
            environments and building reliable cloud infrastructure.
          </p>
        </section>

        {/* EXPERIENCE */}
        <section
          className="content-section section-container"
          id="experience"
        >
          <p className="section-label">02 / CAREER JOURNEY</p>
          <h2 className="section-heading">
            Where I've <span>worked.</span>
          </h2>

          <div className="experience-list">
            <article className="experience-card">
              <span className="experience-date">
                JUN 2025 – NOV 2025
              </span>
              <div>
                <h3>System Engineer</h3>
                <p>Collabera · Client: HCLTech</p>
                <small>
                  CI/CD · Linux · Docker · Kubernetes · Terraform
                </small>
              </div>
              <span className="experience-arrow">↗</span>
            </article>

            <article className="experience-card">
              <span className="experience-date">
                JUN 2021 – JUN 2025
              </span>
              <div>
                <h3>Associate Consultant</h3>
                <p>Doppio Group</p>
                <small>
                  Linux · AWS · Ansible · Docker · Infor · EDI
                </small>
              </div>
              <span className="experience-arrow">↗</span>
            </article>
          </div>
        </section>

        {/* PROJECTS */}
        <section
          className="content-section section-container"
          id="projects"
        >
          <p className="section-label">03 / SELECTED PROJECTS</p>
          <h2 className="section-heading">
            Things I've <span>built.</span>
          </h2>

          <div className="project-grid">
            {projects.map((project) => (
              <article
                className="project-card"
                key={project.number}
              >
                <div className="project-top">
                  <span>{project.number}</span>
                  <span>↗</span>
                </div>

                <p className="project-status">{project.status}</p>
                <h3>{project.title}</h3>
                <p className="project-description">
                  {project.description}
                </p>
                <p className="project-tech">
                  {project.technologies}
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* SKILLS */}
        <section
          className="content-section section-container"
          id="skills"
        >
          <p className="section-label">04 / TECH STACK</p>
          <h2 className="section-heading">
            Tools of <span>my trade.</span>
          </h2>

          <div className="skills-grid">
            {skills.map((skill) => (
              <span className="skill-item" key={skill}>
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section
          className="contact-section section-container"
          id="contact"
        >
          <p className="section-label">05 / GET IN TOUCH</p>
          <h2>
            Let's build something <span>great.</span>
          </h2>
          <p>
            Interested in DevOps, Cloud Engineering or collaboration?
            Let's connect.
          </p>

          <div className="hero-buttons">
            <a
              href="mailto:kanishkabhardwaj430@gmail.com"
              className="button-primary"
            >
              Email Me ↗
            </a>

            <a
              href="https://www.linkedin.com/in/kanishka-bhardwaj-a88a09193/"
              target="_blank"
              rel="noreferrer"
              className="button-secondary"
            >
              LinkedIn ↗
            </a>
          </div>

          <p className="api-status">
            Backend API:{" "}
            <strong
              className={
                apiStatus === "Connected"
                  ? "terminal-green"
                  : ""
              }
            >
              {apiStatus}
            </strong>
          </p>
        </section>
      </main>

      <footer className="footer">
        <a href="#home" className="logo">
          KB<span>.</span>
        </a>
        <p>Designed & built by Kanishka Bhardwaj.</p>
        <p>© 2026 All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
