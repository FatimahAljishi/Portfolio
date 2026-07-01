import FolderBody from "../components/FolderBody/FolderBody";
import folderOpenIcon from "../assets/folder-open.png";
import { certificateItems } from "../data/certificateItems";
import "./Certificates.css";

export default function Certificates({ openWindow }) {
  return (
    <FolderBody
      icon={folderOpenIcon}
      title="My Certificates"
      content="Double-click a certificate to view details."
    >
      <div className="certificates-window">
        {certificateItems.map((certificate) => (
          <button
            key={certificate.id}
            className="certificate-icon"
            onDoubleClick={() => openWindow(certificate.id)}
          >
            <img
              src={certificate.icon}
              className="certificate-icon-image"
              alt={certificate.label}
            />
            <span className="certificate-icon-label">{certificate.label}</span>
          </button>
        ))}
      </div>
    </FolderBody>
  );
}
