import "./Projects.css";
import FolderBody from "../components/FolderBody/FolderBody";
import folderOpenIcon from "../assets/folder-open.png";
import { projects } from "../data/projects";

export default function Projects({ openWindow }) {
  return (
    <FolderBody
      icon={folderOpenIcon}
      title="My Projects"
      content="Double-click on a project to view its details."
    >
      <div className="projects-window">
        {projects.map((project) => (
          <button
            key={project.id}
            className="project-icon"
            onDoubleClick={() => openWindow(project.id)}
          >
            <img
              src={project.icon}
              className="project-icon-image"
              alt={project.label}
            />
            <span className="project-icon-label">{project.label}</span>
          </button>
        ))}
      </div>
    </FolderBody>
  );
}
