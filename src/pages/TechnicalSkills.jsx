import "./TechnicalSkills.css";
import techIcon from "../assets/tech-skills.png";
import languagesIcon from "../assets/languages.png";
import frontendIcon from "../assets/frontend.png";
import backendIcon from "../assets/backend.png";
import aiIcon from "../assets/ai-ml.png";

export default function TechnicalSkills() {
  return (
    <div className="technical-skills-window">
      <div className="technical-skills-header">
        <img src={techIcon} className="technical-skills-icon" />
        <h2>TECHNICAL SKILLS</h2>
      </div>
      <div className="technical-skill">
        <span className="technical-skill-label">
          <img src={languagesIcon} className="technical-skill-icon" />
          Languages:
        </span>
        <span>Python, JavaScript, SQL, MATLAB</span>
      </div>
      <div className="technical-skill">
        <span className="technical-skill-label">
          <img src={frontendIcon} className="technical-skill-icon" />
          Frontend:
        </span>
        <span>React, Vite, HTML/CSS</span>
      </div>
      <div className="technical-skill">
        <span className="technical-skill-label">
          <img src={backendIcon} className="technical-skill-icon" />
          Backend:
        </span>
        <span>FastAPI, Django, REST APIs</span>
      </div>
      <div className="technical-skill">
        <span className="technical-skill-label">
          <img src={aiIcon} className="technical-skill-icon" />
          AI/Machine Learning:
        </span>
        <span>Deep Learning, Computer Vision, PyTorch</span>
      </div>
      <div className="technical-skills-footer">
        <p>
          Passionate about learning new technologies and building reliable
          software that solves real-world problems.
        </p>
      </div>
    </div>
  );
}
