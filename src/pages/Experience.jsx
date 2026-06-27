import "./Experience.css";

export default function Experience() {
  return (
    <div className="experience-window">
      <h2>Experience</h2>

      <div className="experience-item">
        <strong>Field Service Engineer</strong>
        <p>
          <ul>
            <li>
              Installed, repaired, calibrated, and maintained Zeiss ophthalmic
              medical devices.
            </li>
            <li>
              Diagnosed hardware/software issues and performed periodic
              preventive maintenance.
            </li>
            <li>
              Ensured compliance with manufacturer documentation and safety
              standards.
            </li>
          </ul>
        </p>
      </div>
      <div className="experience-item">
        <strong>Biomedical Sales Engineer</strong>
        <p>
          <ul>
            <li>
              Supported sales and technical demonstrations for dermatology and
              urology medical systems.
            </li>
            <li>Prepared equipment quotations and conducted client visits.</li>
          </ul>
        </p>
      </div>
      <div className="experience-item">
        <strong>Biomedical Engineer</strong>
        <p>
          <ul>
            <li>
              Assisted in product presentations and prepared quotations for
              physiotherapy centres.
            </li>
          </ul>
        </p>
      </div>
    </div>
  );
}
