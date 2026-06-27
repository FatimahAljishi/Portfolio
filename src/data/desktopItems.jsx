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

export const desktopItems = [
  {
    id: "about",
    label: "About Me",
    icon: computerIcon,
    title: "About Me",
    component: About,
    x: 150,
    y: 60,
  },
  {
    id: "projects",
    label: "My Projects",
    icon: folderIcon,
    title: "My Projects",
    status: ["3 Object(s)", "", ""],
    component: Projects,
    x: 200,
    y: 100,
  },
  {
    id: "experience",
    label: "Experience",
    icon: folderIcon,
    title: "Experience",
    component: Experience,
  },
  {
    id: "resume",
    label: "Resume.pdf",
    icon: pdfIcon,
    title: "Resume",
    component: About,
  },
  {
    id: "skills",
    label: "Skills",
    icon: controlPanelIcon,
    title: "Skills",
    component: About,
  },
  {
    id: "contact",
    label: "Contact",
    icon: envelopeIcon,
    title: "Contact",
    component: About,
  },
  {
    id: "certificates",
    label: "Certificates",
    icon: certificateIcon,
    title: "Certificates",
    component: About,
  },
  {
    id: "welcome",
    label: "Welcome.txt",
    icon: textIcon,
    title: "Welcome.txt",
    component: Welcome,
    x: 370,
    y: 50,
  },
];
