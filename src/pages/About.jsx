import "./About.css";
import profilePicture from "../assets/user.png";
import roleBadge from "../assets/briefcase.png";
import worldIcon from "../assets/world.png";
import educationIcon from "../assets/education.png";
import checkIcon from "../assets/check.png";
import folderIcon from "../assets/folder.png";
import heartIcon from "../assets/heart.png";
import starIcon from "../assets/star.png";
import catIcon from "../assets/cat.png";

export default function About() {
  return (
    <div className="about-page">
      <main className="about-main">
        <p className="intro">Hi, I’m</p>

        <h1>Fatimah Aljishi</h1>

        <span className="role-badge">FULL-STACK SOFTWARE ENGINEER</span>

        <p>
          I’m a Full-Stack Software Engineer with an MSc in Computer Science and
          a background in Biomedical Engineering. I enjoy building software that
          solves practical problems and gives users a great experience.
        </p>

        <p>
          My technical journey began with academic research in deep learning for
          medical image analysis and later expanded into full-stack software
          development, where I built web applications using React, FastAPI,
          PostgreSQL, and REST APIs.
        </p>

        <p>
          Before transitioning into software development, I worked as a
          biomedical engineer in technical support and medical technology. That
          experience strengthened my problem-solving skills, attention to
          detail, and ability to deliver reliable solutions.
        </p>
      </main>

      <aside className="about-sidebar">
        <section className="info-box">
          <h2>SYSTEM INFORMATION</h2>

          <div className="info-row">
            <img className="system-icons" src={profilePicture} alt="Profile" />
            <strong>Name:</strong>
            <span>Fatimah Aljishi</span>
          </div>

          <div className="info-row">
            <img className="system-icons" src={roleBadge} alt="Role" />
            <strong>Role:</strong>
            <span>Full-Stack Software Engineer</span>
          </div>

          <div className="info-row">
            <img className="system-icons" src={worldIcon} alt="Location" />
            <strong>Location:</strong>
            <span>Eastern, Saudi Arabia</span>
          </div>

          <div className="info-row">
            <img className="system-icons" src={educationIcon} alt="Education" />
            <strong>Education:</strong>
            <span>MSc Computer Science</span>
          </div>

          <div className="info-row">
            <img className="system-icons" src={checkIcon} alt="Status" />
            <strong>Status:</strong>
            <span>Available for opportunities</span>
          </div>
        </section>

        <section className="info-box">
          <h2>CURRENT FOCUS</h2>
          <div className="info-row">
            <img className="system-icons" src={folderIcon} alt="Focus" />
            <span>Full-Stack Web Development</span>
          </div>
          <div className="info-row">
            <img className="system-icons" src={folderIcon} alt="Focus" />
            <span>Backend Engineering</span>
          </div>
          <div className="info-row">
            <img className="system-icons" src={folderIcon} alt="Focus" />
            <span>Artificial Intelligence</span>
          </div>
          <div className="info-row">
            <img className="system-icons" src={folderIcon} alt="Focus" />
            <span>Reliable user-focused software</span>
          </div>
        </section>

        <section className="info-box">
          <h2>OUTSIDE OF CODING</h2>
          <div className="info-row">
            <img className="system-icons" src={heartIcon} alt="Interest" />
            <span>Learning new technologies</span>
          </div>
          <div className="info-row">
            <img className="system-icons" src={starIcon} alt="Interest" />
            <span>Creating clean user experiences</span>
          </div>
          <div className="info-row">
            <img className="system-icons" src={catIcon} alt="Interest" />
            <span>And yes... I'm a cat person </span>
          </div>
        </section>
      </aside>
    </div>
  );
}
