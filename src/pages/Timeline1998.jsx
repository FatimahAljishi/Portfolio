import "./Timeline1998.css";
import calendarIcon from "../assets/calendar2.png";
import bottleIcon from "../assets/bottle.png";
import windowsIcon from "../assets/windows.png";
import googleIcon from "../assets/google.png";
import starIcon from "../assets/star.png";

export default function Timeline1998() {
  return (
    <div className="timeline-1998">
      <div className="timeline-intro">
        <img className="calendar-icon" src={calendarIcon} />
        <div className="timeline-intro-text">
          A good year for new beginnings.
        </div>
      </div>
      <div className="timeline-content">
        <div className="timeline-line">
          <span className="dot pink" />
          <span className="dot blue" />
          <span className="dot green" />
        </div>
        <div className="time-line-line"></div>
        <div className="timeline-events">
          <div className="event-container">
            <img className="event-icon" src={bottleIcon} />
            <div className="event-text">
              <h1 className="pink">March 1998</h1>
              <p>I was born.</p>
            </div>
          </div>
          <div className="event-container">
            <img className="event-icon" src={windowsIcon} />
            <div className="event-text">
              <h1 className="blue">June 1998</h1>
              <p>Windows 98 was released.</p>
            </div>
          </div>
          <div className="event-container">
            <img className="event-icon" src={googleIcon} />
            <div className="event-text">
              <h1 className="green">September 1998</h1>
              <p>Google was founded.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="timeline-footer">
        <div className="star-icon-container">
          <img className="star-icon" src={starIcon} />
        </div>
        <p>
          1998 changed the world in more than one way.
          <br />
          This portfolio is my tribute to that year.
        </p>
      </div>
    </div>
  );
}
