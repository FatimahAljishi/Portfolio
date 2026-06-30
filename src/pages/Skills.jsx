import FolderBody from "../components/FolderBody/FolderBody";
import folderOpenIcon from "../assets/folder-open.png";
import { skillItems } from "../data/skillItems";
import "./Skills.css";

export default function Skills({ openWindow }) {
  return (
    <FolderBody
      icon={folderOpenIcon}
      title="My Skills"
      content="Double-click a category to explore my skills."
    >
      <div className="skills-window">
        {skillItems.map((skill) => (
          <button
            key={skill.id}
            className="skill-icon"
            onDoubleClick={() => openWindow(skill.id)}
          >
            <img
              src={skill.icon}
              className="skill-icon-image"
              alt={skill.label}
            />
            <span className="skill-icon-label">{skill.label}</span>
          </button>
        ))}
      </div>
    </FolderBody>
  );
}
