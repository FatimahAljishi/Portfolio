import "./Taskbar.css";
import startIcon from "../../assets/start.png";
import audioIcon from "../../assets/audio.png";
import calendarIcon from "../../assets/calendar.png";

function Taskbar() {
  return (
    <div className="taskbar">
      <button className="start-button" type="button">
        <img className="start-icon" src={startIcon} alt="Start" />
        Start
      </button>
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
