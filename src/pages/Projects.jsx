import "./Projects.css";
import FolderBody from "../components/FolderBody/FolderBody";
import folderOpenIcon from "../assets/folder-open.png";
import { projects } from "../data/projects";
import DesktopIcon from "../components/DesktopIcon/DesktopIcon";
import { useState, useRef } from "react";
import { useSound } from "../context/SoundContext.jsx";

export default function Projects({ openWindow }) {
  const [selectedIcon, setSelectedIcon] = useState(null);
  const openSound = useRef(new Audio("/sounds/windows-98-option.wav"));
  const { playSound } = useSound();
  return (
    <FolderBody
      icon={folderOpenIcon}
      title="My Projects"
      content="Double-click on a project to view its details."
    >
      <div className="projects-window">
        {projects.map((project) => (
          <DesktopIcon
            key={project.id}
            icon={project.icon}
            label={project.label}
            selected={selectedIcon === project.id}
            onClick={() => setSelectedIcon(project.id)}
            onDoubleClick={() => {
              playSound(openSound.current);
              openWindow(project.id);
            }}
          />
        ))}
      </div>
    </FolderBody>
  );
}
