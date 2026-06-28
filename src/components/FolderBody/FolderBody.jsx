import "./FolderBody.css";

export default function FolderBody({ icon, title, children, content }) {
  return (
    <div className="folder-body">
      <div className="folder-sidebar">
        <img src={icon} alt={title} className="folder-large-icon" />
        <h1>{title}</h1>
        <div className="rainbow-line"></div>
        <p>{content}</p>
      </div>

      <div className="folder-content">{children}</div>
    </div>
  );
}
