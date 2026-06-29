import "./ProjectDetails.css";
import githubIcon from "../assets/github.png";

export default function ProjectDetails({ project }) {
  return (
    <div className={`project-details-container ${project.themeClass}`}>
      <div className="project-header">
        <img src={project.header} />
        <div className="header-text">
          <h1>{project.title}</h1>
          <h3>{project.subtitle}</h3>
          <p>{project.type}</p>
        </div>
      </div>
      <div className="project-left">
        <div className="project-overview">
          <div className="overview-header">
            <img className="overview-icon" src={project.overviewIcon} />
            <h2>Overview</h2>
          </div>
          <p>{project.description}</p>
        </div>
        <div className="project-features">
          <div className="features-header">
            <img className="features-icon" src={project.featuresIcon} />
            <h2>Key Features</h2>
          </div>
          <ul>
            {project.features.map((feature) => (
              <li key={feature.title}>
                <span className="feature-bullet">✓</span>{" "}
                <strong>{feature.title}</strong> {feature.text}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="project-right">
        <div className="project-tech-stack">
          <div className="tech-stack-header">
            <img className="tech-stack-icon" src={project.techStackIcon} />
            <h2>Tech Stack</h2>
          </div>
          <div className="tech-stack-list">
            {project.techStack.map((tech) => (
              <span key={tech.name}>
                <img src={tech.icon} alt={tech.name} className="tech-icon" />
                {tech.name}
              </span>
            ))}
          </div>
        </div>
        <div className="project-links">
          <a href={project.github} className="project-link" target="_blank">
            <div className="link-left">
              <img src={githubIcon} className="link-icon" />
              <span>GitHub Repository</span>
            </div>
            <span className="link-arrow">›</span>
          </a>

          <a href={project.liveDemo} className="project-link" target="_blank">
            <div className="link-left">
              <img src={project.liveDemoIcon} className="link-icon" />
              <span>Live Demo</span>
            </div>
            <span className="link-arrow">›</span>
          </a>
        </div>
      </div>
    </div>
  );
}
