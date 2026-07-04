import "./Welcome.css";

export default function Welcome() {
  return (
    <div className="welcome-window">
      <p className="intro">Hi, I'm</p>

      <h1>Fatimah Aljishi</h1>

      <span className="role">FULL-STACK SOFTWARE ENGINEER</span>

      <p className="welcome-text">Welcome to my interactive portfolio.</p>

      <p className="built-text">
        This desktop was built with React and inspired by Windows 98.
      </p>

      <p className="instruction-text">
        Double-click any desktop icon to begin exploring.
      </p>

      <div className="tip">
        Tip: Curious why this portfolio looks like Windows 98? Click the
        calendar on the taskbar.
      </div>
    </div>
  );
}
