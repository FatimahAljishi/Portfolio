import companyIcon from "../assets/company.png";
import starIcon from "../assets/star.png";
import journeyImage from "../assets/journey.png";

export const companies = [
  {
    id: "journey",
    label: "My Journey",
    icon: starIcon,
    journey: true,
    content: [
      "I began my career in biomedical engineering, where I developed strong analytical, troubleshooting, and communication skills while working directly with healthcare technology.",
      "Driven by a growing passion for software development, I pursued an MSc in Computer Science at the University of Edinburgh, followed by intensive hands-on training in full-stack development.",
      "Today, I build modern web applications using React, FastAPI, Python, and AI technologies, combining my engineering background with software engineering to create practical, user-focused solutions.",
    ],
    image: journeyImage,
  },
  {
    id: "gulf-medical",
    label: "Gulf Medical Company",
    icon: companyIcon,
  },
  {
    id: "attieh-medico",
    label: "Attieh Medico",
    icon: companyIcon,
  },
  {
    id: "insight-medical",
    label: "Insight Medical Systems",
    icon: companyIcon,
  },
];
