import "./Desktop.css";
import Taskbar from "../Taskbar/Taskbar";
import Window from "../Window/Window";
import DesktopIcon from "../DesktopIcon/DesktopIcon";
import { useState } from "react";
import { desktopItems } from "../../data/desktopItems.jsx";
import PDFWindow from "../Window/PDFWindow";

export default function Desktop() {
  const [openWindows, setOpenWindows] = useState([
    { id: "welcome", minimized: false, maximized: false },
  ]);

  function openWindow(id) {
    setOpenWindows((prev) => {
      const alreadyOpen = prev.find((window) => window.id === id);

      if (alreadyOpen) {
        return prev.map((window) =>
          window.id === id ? { ...window, minimized: false } : window,
        );
      }

      return [...prev, { id, minimized: false, maximized: false }];
    });
  }

  function closeWindow(id) {
    setOpenWindows((prev) => prev.filter((window) => window.id !== id));
  }

  function toggleMinimize(id) {
    setOpenWindows((prev) =>
      prev.map((window) =>
        window.id === id ? { ...window, minimized: !window.minimized } : window,
      ),
    );
  }

  function toggleMaximize(id) {
    setOpenWindows((prev) =>
      prev.map((window) =>
        window.id === id ? { ...window, maximized: !window.maximized } : window,
      ),
    );
  }

  return (
    <div className="wallpaper">
      <div className="desktop-icons">
        {desktopItems
          .filter((item) => !item.hiddenFromDesktop)
          .map((item) => (
            <DesktopIcon
              key={item.id}
              icon={item.icon}
              label={item.label}
              onDoubleClick={() => openWindow(item.id)}
            />
          ))}
      </div>

      {openWindows.map((window) => {
        const item = desktopItems.find((i) => i.id === window.id);

        if (!item || window.minimized) return null;

        const ActiveComponent = item.component;

        return !item.pdfWindow ? (
          <Window
            key={item.id}
            title={item.title}
            icon={item.icon}
            onClose={() => closeWindow(item.id)}
            onMinimize={() => toggleMinimize(item.id)}
            onMaximize={() => toggleMaximize(item.id)}
            footerItems={item.status}
            x={item.x}
            y={item.y}
            height={item.height}
            width={item.width}
            maximized={window.maximized}
            position={item.position}
            backgroundColor={item.backgroundColor}
          >
            <ActiveComponent openWindow={openWindow} {...item.componentProps} />
          </Window>
        ) : (
          <PDFWindow
            key={item.id}
            title={item.title}
            icon={item.icon}
            onClose={() => closeWindow(item.id)}
            onMinimize={() => toggleMinimize(item.id)}
            onMaximize={() => toggleMaximize(item.id)}
            footerItems={item.status}
            x={item.x}
            y={item.y}
            height={item.height}
            width={item.width}
            maximized={window.maximized}
            position={item.position}
            certificateLink={item.certificateLink}
          >
            <ActiveComponent openWindow={openWindow} {...item.componentProps} />
          </PDFWindow>
        );
      })}

      <Taskbar
        openWindows={openWindows}
        desktopItems={desktopItems}
        onTaskbarClick={toggleMinimize}
      />
    </div>
  );
}
