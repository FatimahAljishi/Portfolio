import "./Experience.css";
import { companies } from "../data/companies";
import ExperienceDetails from "./ExperienceDetails";
import { useState } from "react";

export default function Experience() {
  const [openWindow, setOpenWindow] = useState("journey");

  const selectedCompany = companies.find(
    (company) => company.id === openWindow,
  );

  return (
    <div className="experience-window">
      <div className="company-list">
        <div className="company-list-header">Companies</div>

        <div className="company-list-content">
          {companies.map((company) => (
            <button
              key={company.id}
              onClick={() => setOpenWindow(company.id)}
              className={`company-item ${
                openWindow === company.id ? "selected" : ""
              }`}
            >
              <img src={company.icon} className="company-icon" />
              <p>{company.label}</p>
            </button>
          ))}
        </div>
      </div>

      <div className="experience-details">
        {selectedCompany && <ExperienceDetails experience={selectedCompany} />}
      </div>
    </div>
  );
}
