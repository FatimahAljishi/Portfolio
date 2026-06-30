import "./SoftSkills.css";
import softSkillsIcon from "../assets/soft-skills.png";
import checkIcon from "../assets/check-box.png";

export default function SoftSkills() {
  return (
    <div className="soft-skills-window">
      <div className="soft-skills-header">
        <img src={softSkillsIcon} className="soft-skills-icon" />
        <h2>SOFT SKILLS</h2>
      </div>
      <div className="soft-skill">
        <span className="soft-skill-label">
          <img src={checkIcon} className="soft-skill-icon" />
          Problem Solving
        </span>
      </div>
      <div className="soft-skill">
        <span className="soft-skill-label">
          <img src={checkIcon} className="soft-skill-icon" />
          Analytical Thinking
        </span>
      </div>
      <div className="soft-skill">
        <span className="soft-skill-label">
          <img src={checkIcon} className="soft-skill-icon" />
          Communication
        </span>
      </div>
      <div className="soft-skill">
        <span className="soft-skill-label">
          <img src={checkIcon} className="soft-skill-icon" />
          Teamwork
        </span>
      </div>
      <div className="soft-skill">
        <span className="soft-skill-label">
          <img src={checkIcon} className="soft-skill-icon" />
          Time Management
        </span>
      </div>
      <div className="soft-skill">
        <span className="soft-skill-label">
          <img src={checkIcon} className="soft-skill-icon" />
          Adaptability
        </span>
      </div>
      <div className="soft-skills-footer">
        <p>
          Developped through engineering roles, graduate research, and
          collaborative projects.
        </p>
      </div>
    </div>
  );
}
