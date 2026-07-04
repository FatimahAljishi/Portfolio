import "./DesktopIcon.css";

export default function DesktopIcon({
  icon,
  label,
  selected,
  onClick,
  onDoubleClick,
}) {
  return (
    <button
      className={`desktop-icon ${selected ? "selected" : ""}`}
      onClick={(e) => {
        e.stopPropagation();
        onClick();
      }}
      onDoubleClick={onDoubleClick}
    >
      <img src={icon} className="desktop-icon-image" />

      <span className="desktop-icon-label">{label}</span>
    </button>
  );
}
