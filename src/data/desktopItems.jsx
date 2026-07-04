import computerIcon from "../assets/computer.png";
import folderIcon from "../assets/folder.png";
import pdfIcon from "../assets/adobeacro.ico";
import About from "../pages/About";
import Projects from "../pages/Projects";
import Experience from "../pages/Experience";
import controlPanelIcon from "../assets/control-panel.png";
import envelopeIcon from "../assets/envelope.png";
import certificateIcon from "../assets/certificate.png";
import textIcon from "../assets/text.png";
import Welcome from "../pages/Welcome";
import appIcon from "../assets/appwizard.png";
import ProjectDetails from "../pages/ProjectDetails";
import { projects } from "./projects.jsx";
import ComingSoon from "../pages/ComingSoon";
import Resume from "../pages/Resume";
import Skills from "../pages/Skills";
import TechnicalSkills from "../pages/TechnicalSkills";
import skillIcon from "../assets/file_gears.png";
import SoftSkills from "../pages/SoftSkills";
import Languages from "../pages/Languages";
import languageIcon from "../assets/soundyel.png";
import Contact from "../pages/Contact";
import Certificates from "../pages/Certificates";
import certificatesIcon from "../assets/certificates.png";
import CertificateDetails from "../pages/CertificateDetails";
import { certificates } from "./certificates.jsx";
import experienceIcon from "../assets/briefcase.png";
import Education from "../pages/Education";
import educationIcon from "../assets/education.png";
import CatGame from "../pages/CatGame";
import catIcon from "../assets/cat.png";
import shutdownIcon from "../assets/shut_down.png";
import Shutdown from "../pages/Shutdown";

export const desktopItems = [
  {
    id: "about",
    label: "About Me",
    icon: computerIcon,
    title: "About Me",
    component: About,
    x: 200,
    y: 50,
    width: 1000,
    height: 700,
    zIndex: 1,
  },
  {
    id: "projects",
    label: "My Projects",
    icon: folderIcon,
    title: "My Projects",
    status: ["3 Object(s)", "", ""],
    component: Projects,
    x: 250,
    y: 100,
    width: 700,
    height: 400,
    zIndex: 1,
  },
  {
    id: "education",
    label: "My Education",
    icon: educationIcon,
    title: "My Education",
    component: Education,
    x: 500,
    y: 100,
    width: 550,
    height: 500,
    zIndex: 1,
    status: ["2 Object(s)", "", ""],
  },
  {
    id: "skills",
    label: "My Skills",
    icon: controlPanelIcon,
    title: "My Skills",
    component: Skills,
    x: 300,
    y: 150,
    width: 800,
    height: 400,
    status: ["3 Object(s)", "", ""],
    zIndex: 1,
  },
  {
    id: "certificates",
    label: "My Certificates",
    icon: certificatesIcon,
    title: "Certificates",
    component: Certificates,
    x: 300,
    y: 150,
    width: 800,
    height: 400,
    zIndex: 1,
  },
  {
    id: "experience",
    label: "My Experience",
    icon: experienceIcon,
    title: "My Experience",
    component: Experience,
    x: 150,
    y: 90,
    width: 1200,
    height: 600,
    backgroundColor: "#c0c0c0",
    status: ["4 Object(s)", "", ""],
    zIndex: 1,
  },
  {
    id: "resume",
    label: "Resume.pdf",
    icon: pdfIcon,
    title: "Resume",
    component: Resume,
    x: 150,
    y: 0,
    width: 1250,
    height: 2000,
    pdfWindow: true,
    certificateLink: "/Fatimah_Aljishi_CV_2026.pdf",
    zIndex: 1,
  },
  {
    id: "contact",
    label: "Contact Me",
    icon: envelopeIcon,
    title: "Contact Me",
    component: Contact,
    x: 340,
    y: 30,
    width: 800,
    height: 700,
    zIndex: 1,
  },
  {
    id: "welcome",
    label: "Welcome.txt",
    icon: textIcon,
    title: "Welcome.txt",
    component: Welcome,
    x: 300,
    y: 150,
    width: 700,
    height: 520,
    zIndex: 1,
  },
  {
    id: "agromind",
    label: "AgroMind.exe",
    icon: appIcon,
    title: "AgroMind",
    component: ProjectDetails,
    componentProps: {
      project: projects.find((project) => project.id === "agromind"),
    },
    hiddenFromDesktop: true,
    width: 3000,
    height: 3000,
    zIndex: 1,
    x: 0,
    y: 0,
  },
  {
    id: "resumeEvaluator",
    label: "Resume Evaluator.exe",
    icon: appIcon,
    title: "Resume Evaluator",
    component: ProjectDetails,
    componentProps: {
      project: projects.find((project) => project.id === "resumeEvaluator"),
    },
    hiddenFromDesktop: true,
    width: 3000,
    height: 3000,
    zIndex: 1,
    x: 0,
    y: 0,
  },
  {
    id: "portfolio",
    label: "Portfolio.exe",
    icon: appIcon,
    title: "Portfolio",
    component: ProjectDetails,
    componentProps: {
      project: projects.find((project) => project.id === "portfolio"),
    },
    hiddenFromDesktop: true,
    width: 3000,
    height: 3000,
    zIndex: 1,
    x: 0,
    y: 0,
  },
  {
    id: "technicalSkills",
    label: "Technical Skills",
    icon: skillIcon,
    title: "Technical Skills",
    component: TechnicalSkills,
    x: 350,
    y: 150,
    width: 800,
    height: 450,
    hiddenFromDesktop: true,
    zIndex: 1,
  },
  {
    id: "softSkills",
    label: "Soft Skills",
    icon: skillIcon,
    title: "Soft Skills",
    component: SoftSkills,
    x: 500,
    y: 100,
    width: 500,
    height: 580,
    hiddenFromDesktop: true,
    zIndex: 1,
  },
  {
    id: "languages",
    label: "Languages",
    icon: languageIcon,
    title: "Languages",
    component: Languages,
    x: 350,
    y: 150,
    width: 800,
    height: 340,
    hiddenFromDesktop: true,
    zIndex: 1,
  },
  {
    id: "metaBackend",
    label: "Meta Back-End Developer Professional Certificate",
    icon: certificateIcon,
    title: "Meta Back-End Developer Professional Certificate",
    component: CertificateDetails,
    componentProps: {
      certificate: certificates.find(
        (certificate) => certificate.id === "metaBackend",
      ),
    },
    x: 350,
    y: 150,
    width: 800,
    height: 450,
    hiddenFromDesktop: true,
    pdfWindow: true,
    certificateLink: "/Fatimah_Aljishi_Meta_backend.pdf",
    zIndex: 1,
  },
  {
    id: "pythonSDE",
    label: "Python Software Development Bootcamp",
    icon: certificateIcon,
    title: "Python Software Development Bootcamp",
    component: CertificateDetails,
    componentProps: {
      certificate: certificates.find(
        (certificate) => certificate.id === "pythonSDE",
      ),
    },
    x: 350,
    y: 150,
    width: 800,
    height: 500,
    hiddenFromDesktop: true,
    pdfWindow: true,
    zIndex: 1,
  },
  {
    id: "cat-game",
    title: "Cat.exe",
    label: "Cat.exe",
    icon: catIcon,
    component: CatGame,
    width: 420,
    height: 430,
    x: 450,
    y: 120,
  },
  {
    id: "shutdown",
    title: "Shutting Down...",
    icon: shutdownIcon,
    component: Shutdown,
    x: 0,
    y: 0,
    width: 3000,
    height: 3000,
    hiddenFromDesktop: true,
    zIndex: 1,
    statusBar: false,
    taskbar: false,
  },
];
