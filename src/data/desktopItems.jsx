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
    label: "Experience",
    icon: folderIcon,
    title: "Experience",
    component: Experience,
    maximized: false,
    x: 300,
    y: 150,
  },
  {
    id: "resume",
    label: "Resume.pdf",
    icon: pdfIcon,
    title: "Resume",
    component: About,
    maximized: false,
    x: 350,
    y: 200,
    width: 800,
    height: 600,
  },
  {
    id: "skills",
    label: "Skills",
    icon: controlPanelIcon,
    title: "Skills",
    component: About,
    maximized: false,
  },
  {
    id: "contact",
    label: "Contact",
    icon: envelopeIcon,
    title: "Contact",
    component: About,
    maximized: false,
  },
  {
    id: "certificates",
    label: "Certificates",
    icon: certificateIcon,
    title: "Certificates",
    component: About,
    maximized: false,
  },
  {
    id: "welcome",
    label: "Welcome.txt",
    icon: textIcon,
    title: "Welcome.txt",
    component: Welcome,
    position: "center",
    width: 700,
    height: 500,
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
    component: About,
    hiddenFromDesktop: true,
    maximized: false,
  },
];
