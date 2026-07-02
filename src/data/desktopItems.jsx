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
    maximized: false,
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
    maximized: false,
  },
  {
    id: "experience",
    label: "My Experience",
    icon: folderIcon,
    title: "My Experience",
    component: Experience,
    maximized: false,
    x: 300,
    y: 150,
    width: 800,
    height: 400,
  },
  {
    id: "resume",
    label: "Resume.pdf",
    icon: pdfIcon,
    title: "Resume",
    component: Resume,
    maximized: false,
    x: 150,
    y: 5,
    width: 1250,
    height: 2000,
    maximized: false,
    pdfWindow: true,
    certificateLink: "/Fatimah_Aljishi_CV_2026.pdf",
  },
  {
    id: "skills",
    label: "My Skills",
    icon: controlPanelIcon,
    title: "My Skills",
    component: Skills,
    maximized: false,
    x: 300,
    y: 150,
    width: 800,
    height: 400,
    status: ["3 Object(s)", "", ""],
  },
  {
    id: "contact",
    label: "Contact Me",
    icon: envelopeIcon,
    title: "Contact Me",
    component: Contact,
    maximized: false,
    x: 360,
    y: 80,
    width: 800,
    height: 600,
  },
  {
    id: "certificates",
    label: "Certificates",
    icon: certificatesIcon,
    title: "Certificates",
    component: Certificates,
    maximized: false,
    x: 300,
    y: 150,
    width: 800,
    height: 400,
  },
  {
    id: "welcome",
    label: "Welcome.txt",
    icon: textIcon,
    title: "Welcome.txt",
    component: Welcome,
    position: "center",
    width: 700,
    height: 600,
    maximized: false,
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
    maximized: true,
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
    maximized: true,
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
    maximized: true,
  },
  {
    id: "technicalSkills",
    label: "Technical Skills",
    icon: skillIcon,
    title: "Technical Skills",
    component: TechnicalSkills,
    maximized: false,
    x: 350,
    y: 150,
    width: 800,
    height: 450,
    hiddenFromDesktop: true,
  },
  {
    id: "softSkills",
    label: "Soft Skills",
    icon: skillIcon,
    title: "Soft Skills",
    component: SoftSkills,
    maximized: false,
    x: 500,
    y: 100,
    width: 500,
    height: 580,
    hiddenFromDesktop: true,
  },
  {
    id: "languages",
    label: "Languages",
    icon: languageIcon,
    title: "Languages",
    component: Languages,
    maximized: false,
    x: 350,
    y: 150,
    width: 800,
    height: 340,
    hiddenFromDesktop: true,
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
    maximized: false,
    x: 350,
    y: 150,
    width: 800,
    height: 450,
    hiddenFromDesktop: true,
    pdfWindow: true,
    certificateLink: "/Fatimah_Aljishi_Meta_backend.pdf",
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
    maximized: false,
    x: 350,
    y: 150,
    width: 800,
    height: 500,
    hiddenFromDesktop: true,
    pdfWindow: true,
  },
];
