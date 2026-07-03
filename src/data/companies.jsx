import companyIcon from "../assets/company.png";
import starIcon from "../assets/star.png";
import journeyImage from "../assets/journey.png";
import GMCIcon from "../assets/gmc.png";
import AttiehIcon from "../assets/attieh.png";
import InsightIcon from "../assets/ims.png";

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
    companyIcon: GMCIcon,
    position: "Field Service Engineer",
    duration: "May 2022 - May 2024",
    overview:
      "Worked as a Field Service Engineer responsible for installing, maintaining, and troubleshooting ophthalmic diagnostic systems in hospitals and clinics across Easter Region. The role required combining technical expertise with customer support to ensure medical equipment operated reliably in clinical environments.",
    responsibilities: [
      "Installed and configured Zeiss ophthalmic diagnostic systems.",
      "Diagnosed hardware and software issues to minimize equipment downtime.",
      "Performed preventive maintenance and system calibration.",
      "Collaborated with healthcare professionals during installations and support visits.",
      "Ensured compliance with manufacturer specifications and healthcare safety standards.",
    ],
    learned: [
      "Structured troubleshooting and root cause analysis.",
      "Working under pressure while minimizing service interruptions.",
      "Communicating technical concepts to non-technical users.",
      "Customer relationship management.",
    ],
  },
  {
    id: "attieh-medico",
    label: "Attieh Medico",
    icon: companyIcon,
    companyIcon: AttiehIcon,
    position: "Biomedical Sales Engineer",
    duration: "Mar 2022 - May 2022",
    overview:
      "Worked closely with healthcare providers to recommend suitable medical devices by understanding customer requirements and delivering technical product demonstrations.",
    responsibilities: [
      "Conducted demonstrations of dermatology and urology medical devices.",
      "Prepared quotations and technical proposals.",
      "Matched customer requirements with appropriate medical solutions.",
    ],
    learned: [
      "Presenting technical products clearly and confidently.",
      "Understanding customer needs before proposing solutions.",
      "Technical communication.",
      "Building professional relationships.",
      "Solution-oriented thinking.",
    ],
  },
  {
    id: "insight-medical",
    label: "Insight Medical Systems",
    icon: companyIcon,
    companyIcon: InsightIcon,
    position: "Biomedical Engineer",
    duration: "Aug 2021 - Mar 2022",
    overview:
      "Supported the sales of physiotherapy equipment while assisting customers in selecting suitable medical technologies for their clinical needs.",
    responsibilities: [
      "Assisted with product presentations and demonstrations.",
      "Prepared quotations for physiotherapy centers.",
    ],
    learned: [
      "Technical product knowledge.",
      "Client communication.",
      "Professional documentation.",
    ],
  },
];
