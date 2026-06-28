import "./ProjectDetails.css";

export default function ProjectDetails({ project }) {
  return (
    <div className="project-details">
      <header className="project-top">
        <img src={project.icon} alt="" />

        <div>
          <h1>{project.title}</h1>
          <p>{project.subtitle}</p>
        </div>
      </header>

      <hr />

      <section>
        <h2>Overview</h2>
        <p>{project.description}</p>
      </section>

      <section className="project-grid">
        <div className="project-box">
          <h2>Key Features</h2>
          <ul>
            {project.features.map((feature) => (
              <li key={feature}>✓ {feature}</li>
            ))}
          </ul>
        </div>
      </section>

      <section>
        <h2>Tech Stack</h2>
        <div className="tech-list">
          {project.techStack.map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </div>
      </section>

      <section className="project-links">
        <a href={project.github}>GitHub Repository</a>
        <a href={project.liveDemo}>Live Demo</a>
      </section>
    </div>
  );
}
