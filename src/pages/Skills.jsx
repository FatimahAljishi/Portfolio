import FolderBody from "../components/FolderBody/FolderBody";
import folderOpenIcon from "../assets/folder-open.png";
import { skills } from "../data/skills.jsx";
import "./Skills.css";
import DesktopIcon from "../components/DesktopIcon/DesktopIcon";
import { useState, useRef } from "react";
import { useSound } from "../context/SoundContext.jsx";

export default function Skills({ openWindow }) {
  const [selectedIcon, setSelectedIcon] = useState(null);
  const openSound = useRef(new Audio("/sounds/windows-98-option.wav"));
  const { playSound } = useSound();
  return (
    <FolderBody
      icon={folderOpenIcon}
      title="My Skills"
      content="Double-click a category to explore my skills."
    >
      <div className="skills-window">
        {skills.map((skill) => (
          <DesktopIcon
            key={skill.id}
            icon={skill.icon}
            label={skill.label}
            selected={selectedIcon === skill.id}
            onClick={() => setSelectedIcon(skill.id)}
            onDoubleClick={() => {
              playSound(openSound.current);
              openWindow(skill.id);
            }}
          />
        ))}
      </div>
    </FolderBody>
  );
}
