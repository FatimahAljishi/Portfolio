import resumePDF from "../assets/resume.png";
import "./Resume.css";

export default function Resume() {
  return (
    <div className="resume-window">
      <div className="resume-container">
        <div className="resume-details">
          <div className="resume-header">
            <h1>FATIMAH ALJISHI</h1>
            <h3>Full-Stack Software Engineer</h3>
            <h4>
              Qatif, Saudi Arabia | +966 533 128 744 |{" "}
              <a href="mailto:fatimahjishi@hotmail.com">
                fatimahjishi@hotmail.com
              </a>{" "}
              |
              <a
                href="https://fatimah-aljishi-portfolio.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://fatimah-aljishi-portfolio.vercel.app
              </a>
            </h4>
          </div>
          <div className="resume-body">
            <h2>PROFESSIONAL SUMMARY</h2>
            <p>
              Full-Stack Software Engineer with an MSc in Computer Science and a
              background in Biomedical Engineering. Hands-on experience
              developing full-stack web applications using React, FastAPI,
              Python, and REST APIs. Certified through the Meta Back-End
              Developer Professional Certificate and an intensive Python
              Software Development Bootcamp, with academic research applying
              deep learning to medical image analysis. Passionate about learning
              new technologies and building reliable software that solves
              real-world problems.
            </p>
            <h2>TECHNICAL SKILLS</h2>
            <p>Languages: Python, JavaScript, SQL, MATLAB</p>
            <p>Frontend: React, Vite, HTML/CSS</p>
            <p>Backend: FastAPI, Django, REST APIs</p>
            <p>AI/Machine Learning: Deep Learning, Computer Vision, PyTorch</p>
            <h2>PROFESSIONAL EXPERIENCE</h2>
            <div className="position">
              <span className="position-title">
                Field Service Engineer — Gulf Medical Company, Khobar, KSA
              </span>
              <span>May 2022 – May 2024</span>
            </div>
            <ul>
              <li>
                Installed, configured, and maintained Zeiss ophthalmic
                diagnostic systems.
              </li>
              <li>
                Diagnosed hardware/software issues to minimize equipment
                downtime.
              </li>
              <li>
                Ensured compliance with manufacturer and healthcare safety
                standards.
              </li>
            </ul>
            <div className="position">
              <span className="position-title">
                Biomedical Sales Engineer — Attieh Medico, Riyadh, KSA
              </span>
              <span>Mar 2022 – May 2022</span>
            </div>
            <ul>
              <li>
                Delivered technical demos for dermatology and urology medical
                devices.
              </li>
              <li>
                Prepared quotations and matched customers with suitable
                solutions.
              </li>
            </ul>
            <div className="position">
              <span className="position-title">
                Biomedical Engineer — Insight Medical Systems, Riyadh, KSA
              </span>
              <span>Aug 2021 – Mar 2022</span>
            </div>
            <ul>
              <li>
                Assisted in product presentations and quotations for
                physiotherapy centers.
              </li>
            </ul>
            <h2>EDUCATION</h2>
            <div className="position">
              <span className="position-title">
                MSc Computer Science — University of Edinburgh, UK
              </span>
              <span>Sep 2024 – Oct 2025</span>
            </div>
            <p>Graduated with Merit</p>
            <p>
              Dissertation: Deep Learning for Automated Prostate Cancer Grading
            </p>
            <div className="position">
              <span className="position-title">
                BSc Biomedical Engineering — Imam Abdulrahman Bin Faisal
                University, KSA
              </span>
              <span>Aug 2016 – May 2021</span>
            </div>
            <p>First Class Honours</p>
            <h2>CERTIFICATIONS</h2>
            <span className="position-title">
              Python Software Development Bootcamp — Saudi Digital Academy /
              WeCloud Data
            </span>
            <span> (Jun 2026)</span>
            <p>
              6-week project-based software engineering bootcamp. Built a
              full-stack web application using React, FastAPI, and PostgreSQL,
              covering REST APIs, authentication, database design, and AI
              application integration.
            </p>
            <span className="position-title">
              Meta Back-End Developer Professional Certificate — Coursera / Meta
            </span>
            <span> (Apr 2026)</span>
            <p>
              Courses: Python, Django, REST APIs, Databases, Version Control,
              Full-Stack Development.
            </p>
            <h2>LANGUAGES</h2>
            <p>Arabic (Native) | English (Fluent) | French (Beginner)</p>
            <h2>SOFT SKILLS</h2>
            <p>
              Problem Solving, Analytical Thinking, Communication, Teamwork,
              Time Management, Adaptability
            </p>
          </div>
        </div>
      </div>
      <fieldset className="details-box">
        <legend>Resume Details</legend>
        <p>
          <strong>Owner:</strong>
          <br />
          Fatimah Aljishi
        </p>
        <p>
          <strong>Role:</strong>
          <br />
          Full-Stack Software Engineer
        </p>
        <p>
          <strong>Education:</strong>
          <br />
          MSc Computer Science
        </p>
        <p>
          <strong>Experience:</strong>
          <br />
          2+ Years
        </p>
        <p>
          <strong>Last Updated:</strong>
          <br />
          July 2026
        </p>
        <p>
          <strong>Pages:</strong>
          <br />1
        </p>
        <p>
          <strong>Format:</strong>
          <br />
          PDF
        </p>
      </fieldset>
    </div>
  );
}
