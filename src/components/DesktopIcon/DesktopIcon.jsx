import "./DesktopIcon.css";

export default function DesktopIcon({ icon, label, onDoubleClick }) {
  return (
    <button className="desktop-icon" onDoubleClick={onDoubleClick}>
      <img src={icon} className="desktop-icon-image" />

      <span className="desktop-icon-label">{label}</span>
    </button>
  );
}
