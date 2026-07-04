import "./Taskbar.css";
import startIcon from "../../assets/start.png";
import audioIcon from "../../assets/audio.png";
import audioMutedIcon from "../../assets/audio-muted.png";
import calendarIcon from "../../assets/calendar.png";
import StartMenu from "../StartMenu/StartMenu";
import { useState, useRef, useEffect } from "react";
import { useSound } from "../../context/SoundContext.jsx";

function Taskbar({ openWindows, desktopItems, onTaskbarClick, openWindow }) {
  const [showStartMenu, setShowStartMenu] = useState(false);
  const startMenuRef = useRef(null);
  const { muted, setMuted } = useSound();
  useEffect(() => {
    function handleClick(event) {
      if (
        startMenuRef.current &&
        !startMenuRef.current.contains(event.target)
      ) {
        setShowStartMenu(false);
      }
    }

    document.addEventListener("mousedown", handleClick);

    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, []);
  return (
    <div className="taskbar">
      <div className="taskbar-left">
        <div ref={startMenuRef}>
          <button
            className="start-button"
            type="button"
            onClick={() => setShowStartMenu(!showStartMenu)}
          >
            <img className="start-icon" src={startIcon} alt="Start" />
            Start
          </button>

          {showStartMenu && (
            <StartMenu
              openWindow={openWindow}
              closeMenu={() => setShowStartMenu(false)}
            />
          )}
        </div>

        <div className="taskbar-window-list">
          {openWindows.map((window) => {
            const item = desktopItems.find((item) => item.id === window.id);

            if (!item) return null;

            return (
              <button
                key={window.id}
                type="button"
                onClick={() => onTaskbarClick(window.id)}
                className={`taskbar-window-button ${
                  !window.minimized ? "active" : ""
                }`}
              >
                <img src={item.icon} alt="" className="taskbar-window-icon" />
                <span>{item.title}</span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="side-box">
        <div className="taskbar-icons">
          <button>
            <img className="calendar-icon" src={calendarIcon} alt="Calendar" />
          </button>
          <button onClick={() => setMuted(!muted)}>
            {muted ? (
              <img className="audio-icon" src={audioMutedIcon} alt="Audio" />
            ) : (
              <img className="audio-icon" src={audioIcon} alt="Audio" />
            )}
          </button>
        </div>

        {new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        })}
      </div>
    </div>
  );
}

export default Taskbar;
