
import { useEffect, useState } from "react";
import "./App.css";

const API_URL = "http://127.0.0.1:8000";

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

function App() {
  const [profile, setProfile] = useState(null);
  const [apiStatus, setApiStatus] = useState("Connecting");

  const [projects, setProjects] = useState([]);
  const [projectsStatus, setProjectsStatus] = useState("Loading");

  const [selectedProject, setSelectedProject] = useState(null);
  const [projectLoading, setProjectLoading] = useState(false);
  const [projectError, setProjectError] = useState("");
  const [expandedStage, setExpandedStage] = useState(null);

  // Load profile information
  useEffect(() => {
    const controller = new AbortController();

    fetch(`${API_URL}/profile/`, { signal: controller.signal })
      .then((response) => {
        if (!response.ok) throw new Error("Profile API request failed");
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

  // Load all projects
  useEffect(() => {
    const controller = new AbortController();

    fetch(`${API_URL}/projects/`, { signal: controller.signal })
      .then((response) => {
        if (!response.ok) throw new Error("Projects API request failed");
        return response.json();
      })
      .then((data) => {
        setProjects(data.projects || []);
        setProjectsStatus("Loaded");
      })
      .catch((error) => {
        if (error.name !== "AbortError") {
          console.error("Projects API error:", error);
          setProjectsStatus("Unavailable");
        }
      });

    return () => controller.abort();
  }, []);

  // Load one project's complete details
  async function openProject(projectId) {
    setSelectedProject(null);
    setProjectError("");
    setExpandedStage(null);
    setProjectLoading(true);

    try {
      const response = await fetch(
        `${API_URL}/projects/${encodeURIComponent(projectId)}`
      );

      if (!response.ok) {
        throw new Error(`Project API returned HTTP ${response.status}`);
      }

      const data = await response.json();
      setSelectedProject(data);
    } catch (error) {
      console.error("Project detail API error:", error);
      setProjectError(error.message || "Unable to load project details.");
    } finally {
      setProjectLoading(false);
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function backToProjects() {
    setSelectedProject(null);
    setProjectError("");
    setExpandedStage(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  // Individual project detail page
  if (selectedProject || projectLoading || projectError) {
    return (
      <div className="portfolio">
        <nav className="navbar">
          <button className="logo logo-button" onClick={backToProjects}>
            KB<span>.</span>
          </button>
          <button className="nav-contact" onClick={backToProjects}>
            ← Back to Portfolio
          </button>
        </nav>

        <main className="project-detail section-container">
          {projectLoading && (
            <div className="detail-message">
              <p className="section-label">LOADING PROJECT</p>
              <h1>Getting project details...</h1>
            </div>
          )}

          {projectError && (
            <div className="detail-message">
              <p className="section-label">PROJECT ERROR</p>
              <h1>Unable to load this project.</h1>
              <p>{projectError}</p>
              <button className="button-primary" onClick={backToProjects}>
                Back to Projects
              </button>
            </div>
          )}

          {selectedProject && (
            <>
              <button className="back-button" onClick={backToProjects}>
                ← Back to all projects
              </button>

              <header className="detail-hero">
                <p className="section-label">
                  PROJECT {selectedProject.number} /{" "}
                  {selectedProject.category}
                </p>

                <h1>{selectedProject.title}</h1>

                <p className="detail-description">
                  {selectedProject.description}
                </p>

                <div className="detail-technologies">
                  {selectedProject.technologies?.map((technology) => (
                    <span key={technology}>{technology}</span>
                  ))}
                </div>
              </header>

              <section className="detail-section">
                <p className="section-label">01 / THE CHALLENGE</p>
                <h2>Problem statement</h2>
                <p>{selectedProject.problem_statement}</p>
              </section>

              <section className="detail-section">
                <p className="section-label">02 / PROJECT LIFECYCLE</p>
                <h2>How the project works</h2>
                <p className="section-description">
                  Explore the stages involved in this project, from planning
                  through validation and monitoring.
                </p>


<div className="lifecycle-list">
                  {selectedProject.lifecycle?.map((stage) => {
                    const isExpanded = expandedStage === stage.step;
                    const detailsId = `lifecycle-details-${stage.step}`;

                    return (
                      <article
                        className={`lifecycle-card ${isExpanded ? "expanded" : ""}`}
                        key={stage.step}
                      >
                        <button
                          type="button"
                          className="lifecycle-trigger"
                          onClick={() =>
                            setExpandedStage(isExpanded ? null : stage.step)
                          }
                          aria-expanded={isExpanded}
                          aria-controls={detailsId}
                        >
                          <span className="lifecycle-number">
                            {String(stage.step).padStart(2, "0")}
                          </span>

                          <span className="lifecycle-content">
                            <span className="lifecycle-title">{stage.name}</span>
                            <span className="lifecycle-summary">
                              {stage.description}
                            </span>
                            <span className="lifecycle-status">
                              {stage.status}
                            </span>
                          </span>

                          <span className="lifecycle-toggle" aria-hidden="true">
                            {isExpanded ? "−" : "+"}
                          </span>
                        </button>

                        {isExpanded && (
                          <div className="lifecycle-details" id={detailsId}>
                            <h4>Implementation details</h4>

                            {stage.details ? (
                              <>
                                {stage.details.objective && (
                                  <p>
                                    <strong>Objective:</strong>{" "}
                                    {stage.details.objective}
                                  </p>
                                )}

                                {stage.details.implementation && (
                                  <p>
                                    <strong>Implementation:</strong>{" "}
                                    {stage.details.implementation}
                                  </p>
                                )}

                                {stage.details.tools && (
                                  <p>
                                    <strong>Tools:</strong>{" "}
                                    {stage.details.tools.join(", ")}
                                  </p>
                                )}

                                {stage.details.commands && (
                                  <div className="lifecycle-commands">
                                    <strong>Commands:</strong>
                                    <pre>
                                      <code>
                                        {stage.details.commands.join("\n")}
                                      </code>
                                    </pre>
                                  </div>
                                )}

                                {stage.details.challenges && (
                                  <p>
                                    <strong>Challenges:</strong>{" "}
                                    {stage.details.challenges}
                                  </p>
                                )}

                                {stage.details.outcome && (
                                  <p>
                                    <strong>Outcome:</strong>{" "}
                                    {stage.details.outcome}
                                  </p>
                                )}
                              </>
                            ) : (
                              <p>
                                Detailed implementation notes, commands,
                                challenges and evidence will be added as this
                                stage is completed and verified.
                              </p>
                            )}
                          </div>
                        )}
                      </article>
                    );
                  })}
                </div>

              </section>

              <section className="detail-section">
                <p className="section-label">03 / SYSTEM DESIGN</p>
                <h2>Architecture overview</h2>
                <p>
                  {selectedProject.architecture?.description ||
                    "Architecture documentation will be added here."}
                </p>

                {selectedProject.architecture?.diagram && (
                  <img
                    className="architecture-image"
                    src={selectedProject.architecture.diagram}
                    alt={`${selectedProject.title} architecture`}
                  />
                )}
              </section>

              <section className="detail-section project-next-section">
                <p className="section-label">04 / SOURCE CODE</p>
                <h2>Explore the implementation</h2>
                <p>
                  Repository and implementation documentation will be linked
                  here when available.
                </p>

                {selectedProject.repository ? (
                  <a
                    className="button-primary"
                    href={selectedProject.repository}
                    target="_blank"
                    rel="noreferrer"
                  >
                    View GitHub Repository ↗
                  </a>
                ) : (
                  <span className="repository-status">
                    Repository link not added yet
                  </span>
                )}
              </section>
            </>
          )}
        </main>

        <footer className="footer">
          <span className="logo">KB<span>.</span></span>
          <p>Designed & built by Kanishka Bhardwaj.</p>
          <p>© 2026 All rights reserved.</p>
        </footer>
      </div>
    );
  }

  // Main portfolio homepage
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

<section className="hero section-container" id="home">
  <div className="hero-content">
    <p className="eyebrow">
      <span className="status-dot"></span>
      AVAILABLE FOR OPPORTUNITIES
    </p>

    <h1>
      Hi, I'm{" "}
      <span>{profile?.name || "Kanishka Bhardwaj"}</span>
      <br />
      DevOps Engineer.
    </h1>

    <p className="hero-description">
      IT professional with <strong>4+ years of experience</strong> in
      infrastructure operations, system administration and production
      support. Passionate about AWS, Kubernetes, Terraform and building
      reliable, automated infrastructure.
    </p>

    <div className="hero-buttons">
      <a
        href="/resume/Kanishka-Bhardwaj-Resume.pdf"
        className="button-primary"
        download="Kanishka-Bhardwaj-Resume.pdf"
      >
        Download Resume ↓
      </a>

      <a href="#projects" className="button-secondary">
        Explore My Work →
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

  <div className="hero-visual">
    <div className="profile-photo-wrapper">
      <img
        src="/images/profile.jpg"
        alt="Kanishka Bhardwaj"
        className="profile-photo"
      />
      <div className="profile-photo-caption">
        <span className="status-dot"></span>
        Open to opportunities
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
        <p><span className="terminal-muted">$</span> whoami</p>
        <h2>kanishka-bhardwaj</h2>

        <p><span className="terminal-muted">$</span> cat role.txt</p>
        <p className="terminal-green">DevOps Engineer</p>

        <p><span className="terminal-muted">$</span> ls skills/</p>

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
  </div>
</section>


        <section className="stats section-container">
          <div><h2>4+</h2><p>Years of Experience</p></div>
          <div><h2>50+</h2><p>Servers Managed</p></div>
          <div><h2>3</h2><p>DevOps Projects</p></div>
          <div><h2>95%+</h2><p>SLA Compliance</p></div>
        </section>

        <section className="content-section section-container" id="about">
          <p className="section-label">01 / ABOUT ME</p>
          <h2 className="section-heading">
            More than just <span>a resume.</span>
          </h2>
          <p className="section-description">
            My professional journey combines infrastructure operations,
            system administration and DevOps engineering. I enjoy automating
            repetitive tasks, troubleshooting production environments and
            building reliable cloud infrastructure.
          </p>
        </section>

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
              <span className="experience-date">JUN 2025 – NOV 2025</span>
              <div>
                <h3>System Engineer</h3>
                <p>Collabera · Client: HCLTech</p>
                <small>CI/CD · Linux · Docker · Kubernetes · Terraform</small>
              </div>
              <span className="experience-arrow">↗</span>
            </article>

            <article className="experience-card">
              <span className="experience-date">JUN 2021 – JUN 2025</span>
              <div>
                <h3>Associate Consultant</h3>
                <p>Doppio Group</p>
                <small>Linux · AWS · Ansible · Docker · Infor · EDI</small>
              </div>
              <span className="experience-arrow">↗</span>
            </article>
          </div>
        </section>

        <section className="content-section section-container" id="projects">
          <p className="section-label">03 / SELECTED PROJECTS</p>
          <h2 className="section-heading">
            Things I've <span>built.</span>
          </h2>

          {projectsStatus === "Loading" && (
            <p className="section-description">Loading projects...</p>
          )}

          {projectsStatus === "Unavailable" && (
            <p className="section-description">
              Unable to load projects. Please check the backend API.
            </p>
          )}

          {projectsStatus === "Loaded" && projects.length === 0 && (
            <p className="section-description">No projects are available yet.</p>
          )}

          <div className="project-grid">
            {projects.map((project) => (
              <article
                className="project-card project-card-clickable"
                key={project.id}
                role="button"
                tabIndex={0}
                onClick={() => openProject(project.id)}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    openProject(project.id);
                  }
                }}
                aria-label={`View details for ${project.title}`}
              >
                <div className="project-top">
                  <span>{project.number}</span>
                  <span>↗</span>
                </div>

                <p className="project-status">{project.category}</p>
                <h3>{project.title}</h3>

                <p className="project-description">
                  {project.description}
                </p>

                <p className="project-tech">
                  {project.technologies?.join(" · ")}
                </p>

                <span className="project-view-link">Explore project →</span>
              </article>
            ))}
          </div>
        </section>

        <section className="content-section section-container" id="skills">
          <p className="section-label">04 / TECH STACK</p>
          <h2 className="section-heading">
            Tools of <span>my trade.</span>
          </h2>

          <div className="skills-grid">
            {skills.map((skill) => (
              <span className="skill-item" key={skill}>{skill}</span>
            ))}
          </div>
        </section>

        <section className="contact-section section-container" id="contact">
          <p className="section-label">05 / GET IN TOUCH</p>
          <h2>Let's build something <span>great.</span></h2>
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
            <strong className={apiStatus === "Connected" ? "terminal-green" : ""}>
              {apiStatus}
            </strong>
          </p>
        </section>
      </main>

      <footer className="footer">
        <a href="#home" className="logo">KB<span>.</span></a>
        <p>Designed & built by Kanishka Bhardwaj.</p>
        <p>© 2026 All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
