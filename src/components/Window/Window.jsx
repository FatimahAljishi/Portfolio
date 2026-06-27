import "./Window.css";

export default function Window({
  title,
  onClose,
  children,
  icon,
  footerItems = [],
  x,
  y,
}) {
  return (
    <div
      className="window"
      style={{
        left: `${x}px`,
        top: `${y}px`,
      }}
    >
      <div className="title-bar">
        <div className="title-left">
          {icon && <img src={icon} alt="Window Icon" className="window-icon" />}
          <span>{title}</span>
        </div>
        <div className="window-buttons">
          <button type="button">_</button>
          <button type="button">□</button>
          <button type="button" onClick={onClose}>
            ×
          </button>
        </div>
      </div>
      <div className="window-body">{children}</div>
      <div className="window-footer">
        {[0, 1, 2].map((index) => (
          <div className="status-box" key={index}>
            {footerItems[index] || ""}
          </div>
        ))}
      </div>
    </div>
  );
}
