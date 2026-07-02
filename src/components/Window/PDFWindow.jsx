import "./PDFWindow.css";

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
  certificateLink,
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
              height: "calc(100vh - 28px)",
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
      <div className="pdf-window-body">
        {" "}
        <div className="window-body-scroll">{children}</div>
      </div>
      <div className="pdf-window-footer">
        {certificateLink && (
          <a href={certificateLink} download>
            <button>Download PDF</button>
          </a>
        )}
        <button type="button" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
}
