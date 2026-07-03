import "./ExperienceDetails.css";

export default function ExperienceDetails({ experience }) {
  if (experience.journey) {
    return (
      <div className="journey-container">
        <h1 className="journey-title">{experience.label}</h1>

        <div className="journey-details-container">
          <div className="journey-details">
            {experience.content.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          <div className="journey-image-container">
            <img
              src={experience.image}
              alt={experience.label}
              className="journey-image"
            />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="company-details-container">
      <div className="company-header-container">
        <div className="company-header">
          <h1 className="company-title">{experience.label}</h1>
          <h2 className="company-position">{experience.position}</h2>
          <h3 className="company-duration">{experience.duration}</h3>
        </div>
        <div className="company-icon-container">
          <img src={experience.companyIcon} className="company-icon" />
        </div>
      </div>
      <div className="company-content-container">
        <div className="company-overview">
          <h3>Overview</h3>
          <p>{experience.overview}</p>
        </div>
        <div className="company-responsibilities">
          <h3>Responsibilities</h3>
          <ul>
            {experience.responsibilities.map((responsibility, index) => (
              <li key={index}>{responsibility}</li>
            ))}
          </ul>
        </div>
        <div className="company-learned">
          <h3>What I Learned</h3>
          <ul>
            {experience.learned.map((lesson, index) => (
              <li key={index}>{lesson}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
