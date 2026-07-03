import "./Desktop.css";
import Taskbar from "../Taskbar/Taskbar";
import Window from "../Window/Window";
import DesktopIcon from "../DesktopIcon/DesktopIcon";
import { useState } from "react";
import { desktopItems } from "../../data/desktopItems.jsx";
import PDFWindow from "../Window/PDFWindow";

export default function Desktop() {
  const [openWindows, setOpenWindows] = useState([
    {
      id: "welcome",
      minimized: false,
      maximized: false,
      x: 400,
      y: 80,
      zIndex: 1,
    },
  ]);
  const [highestZ, setHighestZ] = useState(1);

  function openWindow(id) {
    setOpenWindows((prev) => {
      const alreadyOpen = prev.find((window) => window.id === id);

      if (alreadyOpen) {
        const newZ = highestZ + 1;
        setHighestZ(newZ);

        return prev.map((window) =>
          window.id === id
            ? {
                ...window,
                minimized: false,
                zIndex: newZ,
              }
            : window,
        );
      }

      const item = desktopItems.find((item) => item.id === id);
      const newZ = highestZ + 1;
      setHighestZ(newZ);

      return [
        ...prev,
        {
          id,
          minimized: false,
          maximized: false,
          x: item?.x ?? 80,
          y: item?.y ?? 60,
          zIndex: newZ,
        },
      ];
    });
  }

  function closeWindow(id) {
    setOpenWindows((prev) => prev.filter((window) => window.id !== id));
  }

  function toggleMinimize(id) {
    const newZ = highestZ + 1;
    setHighestZ(newZ);

    setOpenWindows((prev) =>
      prev.map((window) =>
        window.id === id
          ? {
              ...window,
              minimized: !window.minimized,
              zIndex: newZ,
            }
          : window,
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

  function bringToFront(id) {
    const newZ = highestZ + 1;
    setHighestZ(newZ);

    setOpenWindows((prev) =>
      prev.map((window) =>
        window.id === id ? { ...window, zIndex: newZ } : window,
      ),
    );
  }

  function moveWindow(id, x, y) {
    setOpenWindows((prev) =>
      prev.map((window) => (window.id === id ? { ...window, x, y } : window)),
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
            onFocus={() => bringToFront(item.id)}
            onMove={(x, y) => moveWindow(item.id, x, y)}
            footerItems={item.status}
            x={window.x}
            y={window.y}
            zIndex={window.zIndex}
            height={item.height}
            width={item.width}
            maximized={window.maximized}
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
            onFocus={() => bringToFront(item.id)}
            onMove={(x, y) => moveWindow(item.id, x, y)}
            footerItems={item.status}
            x={window.x}
            y={window.y}
            zIndex={window.zIndex}
            height={item.height}
            width={item.width}
            maximized={window.maximized}
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
