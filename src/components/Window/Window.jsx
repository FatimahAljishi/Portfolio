import "./Window.css";

export default function Window({
  title,
  onClose,
  children,
  icon,
  footerItems = [],
  x,
  y,
  width,
  height,
  maximized,
  position,
}) {
  const availableWidth = "calc(100vw - 40px)";
  const availableHeight = "calc(100vh - 40px)";
  return (
    <div
      className="window"
      style={
        maximized
          ? {
              left: 0,
              top: 0,
              width: "100%",
              height: "100%",
            }
          : {
              left:
                position === "center"
                  ? `calc((100vw - min(${width}px, ${availableWidth})) / 2)`
                  : `min(${x}px, calc(100vw - min(${width}px, ${availableWidth}) - 20px))`,

              top:
                position === "center"
                  ? `calc((100vh - min(${height}px, ${availableHeight})) / 2)`
                  : `min(${y}px, calc(100vh - min(${height}px, ${availableHeight}) - 20px))`,

              width: `min(${width}px, ${availableWidth})`,
              height: `min(${height}px, ${availableHeight})`,
            }
      }
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
      <div className="window-body">
        {" "}
        <div className="window-body-scroll">{children}</div>
      </div>
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
