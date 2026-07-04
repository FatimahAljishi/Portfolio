import FolderBody from "../components/FolderBody/FolderBody";
import folderOpenIcon from "../assets/folder-open.png";
import { certificates } from "../data/certificates";
import "./Certificates.css";
import DesktopIcon from "../components/DesktopIcon/DesktopIcon";
import { useState, useRef } from "react";
import { useSound } from "../context/SoundContext.jsx";

export default function Certificates({ openWindow }) {
  const [selectedIcon, setSelectedIcon] = useState(null);
  const openSound = useRef(new Audio("/sounds/windows-98-option.wav"));
  const { playSound } = useSound();
  return (
    <FolderBody
      icon={folderOpenIcon}
      title="My Certificates"
      content="Double-click a certificate to view details."
    >
      <div className="certificates-window">
        {certificates.map((certificate) => (
          <DesktopIcon
            key={certificate.id}
            icon={certificate.icon}
            label={certificate.label}
            selected={selectedIcon === certificate.id}
            onClick={() => setSelectedIcon(certificate.id)}
            onDoubleClick={() => {
              playSound(openSound.current);
              openWindow(certificate.id);
            }}
          />
        ))}
      </div>
    </FolderBody>
  );
}
