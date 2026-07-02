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
      <h1>{experience.label}</h1>
      <p>{experience.content}</p>
    </div>
  );
}
