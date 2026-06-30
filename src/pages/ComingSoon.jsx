import "./ComingSoon.css";

export default function ComingSoon() {
  return (
    <div className="coming-soon-window">
      <p className="coming-soon-title">Application not fully installed.</p>

      <p>
        This desktop icon is a placeholder while I finish building its window.
      </p>

      <div className="coming-soon-box">
        <p>Setup status:</p>
        <p>Installing remaining components...</p>
        <div className="progress-bar">
          <div className="progress-fill"></div>
        </div>
      </div>

      <p className="coming-soon-status">Status: In progress_</p>
    </div>
  );
}
