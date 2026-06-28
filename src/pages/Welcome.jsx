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

      <p className="system-ready">
        System ready<span className="cursor">_</span>
      </p>
    </div>
  );
}
