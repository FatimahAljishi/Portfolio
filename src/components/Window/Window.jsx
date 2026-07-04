import "./Window.css";

export default function Window({
  title,
  onClose,
  onMinimize,
  onMaximize,
  onFocus,
  onMove,
  children,
  icon,
  footerItems = [],
  x,
  y,
  zIndex,
  width,
  height,
  maximized,
  backgroundColor,
  statusBar = true,
}) {
  const availableWidth = "100vw";
  const availableHeight = "calc(100vh - 28px)";
  function handleMouseDown(e) {
    if (maximized) return;

    onFocus();

    const startMouseX = e.clientX;
    const startMouseY = e.clientY;

    const startWindowX = x;
    const startWindowY = y;

    function handleMouseMove(e) {
      const newX = startWindowX + (e.clientX - startMouseX);
      const newY = startWindowY + (e.clientY - startMouseY);

      onMove(newX, newY);
    }

    function handleMouseUp() {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    }

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
  }
  return (
    <div
      className="window"
      onMouseDown={onFocus}
      style={{
        zIndex,
        left: maximized
          ? 0
          : `min(${x}px, calc(100vw - min(${width}px, ${availableWidth})))`,
        top: maximized
          ? 0
          : `min(${y}px, calc(100vh - min(${height}px, ${availableHeight})))`,
        width: maximized ? "100%" : `min(${width}px, 100vw)`,
        height: maximized
          ? "calc(100vh - 28px)"
          : `min(${height}px, calc(100vh - 28px))`,
      }}
    >
      <div className="title-bar" onMouseDown={handleMouseDown}>
        <div className="title-left">
          {icon && <img src={icon} alt="Window Icon" className="window-icon" />}
          <span>{title}</span>
        </div>
        <div className="window-buttons">
          <button type="button" onClick={onMinimize}>
            _
          </button>
          <button className="window-button" onClick={onMaximize}>
            {maximized ? "❐" : "□"}
          </button>
          <button type="button" onClick={onClose}>
            ×
          </button>
        </div>
      </div>
      <div
        className="window-body"
        style={{ backgroundColor: backgroundColor || "white" }}
      >
        {" "}
        <div className="window-body-scroll">{children}</div>
      </div>
      {statusBar && (
        <div className="window-footer">
          {[0, 1, 2].map((index) => (
            <div className="status-box" key={index}>
              {footerItems[index] || ""}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
