import "./StartMenu.css";
import shutdownIcon from "../../assets/shut_down.png";
import linkedinIcon from "../../assets/linkedin.png";
import githubIcon from "../../assets/github.png";

export default function StartMenu({ openWindow, closeMenu }) {
  function handleOpen(id) {
    openWindow(id);
    closeMenu();
  }
  return (
    <div className="start-menu-container">
      <div className="start-menu">
        <div className="start-menu-left">
          <p>Fatimah Aljishi</p>
        </div>
        <div className="start-menu-right">
          <div className="menu-items">
            <button
              className="start-menu-item"
              onClick={() => {
                window.open(
                  "https://www.linkedin.com/in/fatimah-aljishi/",
                  "_blank",
                  "noopener,noreferrer",
                );
              }}
            >
              <img className="start-menu-item-icon" src={linkedinIcon} />
              <span>LinkedIn</span>
            </button>
            <button
              className="start-menu-item"
              onClick={() => {
                window.open(
                  "https://www.github.com/FatimahAljishi",
                  "_blank",
                  "noopener,noreferrer",
                );
              }}
            >
              <img className="start-menu-item-icon" src={githubIcon} />
              <span>GitHub</span>
            </button>
          </div>
          <button
            className="start-menu-item shutdown-item"
            onClick={() => handleOpen("shutdown")}
          >
            <img src={shutdownIcon} />
            <span>Shut Down...</span>
          </button>
        </div>
      </div>
    </div>
  );
}
