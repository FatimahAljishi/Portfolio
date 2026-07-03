import "./Taskbar.css";
import startIcon from "../../assets/start.png";
import audioIcon from "../../assets/audio.png";
import calendarIcon from "../../assets/calendar.png";

function Taskbar({ openWindows, desktopItems, onTaskbarClick }) {
  return (
    <div className="taskbar">
      <div className="taskbar-left">
        <button className="start-button" type="button">
          <img className="start-icon" src={startIcon} alt="Start" />
          Start
        </button>

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
          <img className="calendar-icon" src={calendarIcon} alt="Calendar" />
          <img className="audio-icon" src={audioIcon} alt="Audio" />
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
