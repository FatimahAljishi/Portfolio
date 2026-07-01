import "./Desktop.css";
import Taskbar from "../Taskbar/Taskbar";
import Window from "../Window/Window";
import DesktopIcon from "../DesktopIcon/DesktopIcon";
import { useState } from "react";
import { desktopItems } from "../../data/desktopItems.jsx";
import PDFWindow from "../Window/PDFWindow";

export default function Desktop() {
  const [openWindows, setOpenWindows] = useState(["welcome"]);

  function openWindow(id) {
    setOpenWindows((prev) => {
      if (prev.includes(id)) return prev;
      return [...prev, id];
    });
  }

  function closeWindow(id) {
    setOpenWindows((prev) => prev.filter((windowId) => windowId !== id));
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

      {openWindows.map((id) => {
        const item = desktopItems.find((i) => i.id === id);

        if (!item) return null;

        const ActiveComponent = item.component;

        return !item.pdfWindow ? (
          <Window
            key={item.id}
            title={item.title}
            icon={item.icon}
            onClose={() => closeWindow(item.id)}
            footerItems={item.status}
            x={item.x}
            y={item.y}
            height={item.height}
            width={item.width}
            maximized={item.maximized}
            position={item.position}
          >
            <ActiveComponent openWindow={openWindow} {...item.componentProps} />
          </Window>
        ) : (
          <PDFWindow
            key={item.id}
            title={item.title}
            icon={item.icon}
            onClose={() => closeWindow(item.id)}
            footerItems={item.status}
            x={item.x}
            y={item.y}
            height={item.height}
            width={item.width}
            maximized={item.maximized}
            position={item.position}
            certificateLink={item.certificateLink}
          >
            <ActiveComponent openWindow={openWindow} {...item.componentProps} />
          </PDFWindow>
        );
      })}

      <Taskbar />
    </div>
  );
}
