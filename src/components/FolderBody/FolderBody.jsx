import "./FolderBody.css";

export default function FolderBody({ icon, title, children }) {
  return (
    <div className="folder-body">
      <div className="folder-sidebar">
        <img src={icon} alt={title} className="folder-large-icon" />
        <h1>{title}</h1>
        <div className="rainbow-line"></div>
        <p>Select an item to view its description.</p>
      </div>

      <div className="folder-content">{children}</div>
    </div>
  );
}
