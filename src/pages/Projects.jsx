import "./Projects.css";
import folderOpenIcon from "../assets/folder-open.png";
import folderIcon from "../assets/folder.png";
import FolderBody from "../components/FolderBody/FolderBody";

export default function Projects() {
  return (
    <div className="projects-window">
      <FolderBody icon={folderOpenIcon} title="My Projects">
        <div className="project-item">
          <span className="project-folder">
            <img
              className="project-folder-icon"
              src={folderIcon}
              alt="Folder"
            />
          </span>
          <div>
            <h3>AgroMind</h3>
            <p>AI crop disease diagnosis and recommendation platform.</p>
          </div>
        </div>

        <div className="project-item">
          <span className="project-folder">
            <img
              className="project-folder-icon"
              src={folderIcon}
              alt="Folder"
            />
          </span>
          <div>
            <h3>Resume Evaluator</h3>
            <p>AI-powered resume screening and feedback system.</p>
          </div>
        </div>

        <div className="project-item">
          <span className="project-folder">
            <img
              className="project-folder-icon"
              src={folderIcon}
              alt="Folder"
            />
          </span>
          <div>
            <h3>Portfolio</h3>
            <p>Personal portfolio built as a Windows 98-style desktop.</p>
          </div>
        </div>
      </FolderBody>
    </div>
  );
}
