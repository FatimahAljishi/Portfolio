import "./Experience.css";

export default function Experience() {
  return (
    <div className="experience-window">
      <div className="company-list">
        <ul>
          <li>Company A</li>
          <li>Company B</li>
          <li>Company C</li>
        </ul>
      </div>
      <div className="experience-details">
        <h2>Company A</h2>
        <p>Role: Software Engineer</p>
        <p>Duration: Jan 2020 - Dec 2021</p>
        <p>
          Responsibilities:
          <ul>
            <li>Developed web applications using React and Node.js.</li>
            <li>
              Collaborated with cross-functional teams to define project
              requirements.
            </li>
            <li>
              Implemented RESTful APIs and integrated third-party services.
            </li>
          </ul>
        </p>
      </div>
    </div>
  );
}
