import "./Education.css";
import uoeIcon from "../assets/uoe.png";
import iauIcon from "../assets/iau.png";

export default function Education() {
  return (
    <div className="education-window">
      <div className="uoe">
        <div className="degree-icon-container">
          <img src={uoeIcon} className="degree-icon" />
        </div>
        <div className="degree-details-container">
          <h1 className="degree-title">The University of Edinburgh</h1>
          <p className="degree-location">Edinburgh, United Kingdom</p>
          <p className="degree-program">
            Master of Science in Computer Science
          </p>
          <p className="degree-duration">September 2024 - October 2025</p>
          <p className="degree-graduation">Graduated with Merit</p>
          <span className="degree-project-label">Dissertation: </span>
          <span className="degree-project">
            Prostate Cancer Grading from Histopathological Images via Deep
            Learning
          </span>
        </div>
      </div>
      <div className="iau">
        <div className="degree-icon-container">
          <img src={iauIcon} className="degree-icon" />
        </div>
        <div className="degree-details-container">
          <h1 className="degree-title">
            Imam Abdulrahman Bin Faisal University
          </h1>
          <p className="degree-location">Dammam, Saudi Arabia</p>
          <p className="degree-program">
            Bachelor of Science in Biomedical Engineering
          </p>
          <p className="degree-duration">August 2016 - May 2021</p>
          <p className="degree-graduation">
            Graduated with First Class Honours
          </p>
          <span className="degree-project-label">Project: </span>
          <span className="degree-project">
            Design and Development of an AI Assisted MRI Compatible ECG System
          </span>
        </div>
      </div>
    </div>
  );
}
