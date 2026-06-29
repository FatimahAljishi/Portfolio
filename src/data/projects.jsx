import agromindHeader from "../assets/agromind.png";
import agromindOverviewIcon from "../assets/agromind-overview.png";
import agromindFeaturesIcon from "../assets/agromind-features.png";
import agromindTechStackIcon from "../assets/agromind-tech.png";
import reactIcon from "../assets/react.png";
import fastapiIcon from "../assets/fastapi.png";
import pythonIcon from "../assets/python.png";
import postgresqlIcon from "../assets/postgresql.png";
import dockerIcon from "../assets/docker.png";
import openaiIcon from "../assets/openai.png";
import ragIcon from "../assets/rag.png";
import liveDemoIcon from "../assets/demo.png";
import resumeEvaluatorHeader from "../assets/resumeEvaluator.png";
import sqliteIcon from "../assets/sqlite.png";
import resumeEvaluatorOverviewIcon from "../assets/resumeEvaluator-overview.png";
import resumeEvaluatorFeaturesIcon from "../assets/resumeEvaluator-features.png";
import resumeEvaluatorTechStackIcon from "../assets/resumeEvaluator-tech.png";
import resumeEvaluatorLiveDemoIcon from "../assets/resumeEvaluator-demo.png";

export const projects = [
  {
    id: "agromind",
    fileName: "AgroMind.exe",
    header: agromindHeader,
    title: "AgroMind",
    subtitle: "AI Crop Disease Diagnosis & Recommendation Platform",
    type: "Group Project | Python Software Development Bootcamp",
    overviewIcon: agromindOverviewIcon,
    description:
      "Developed a full-stack web application that helps farmers identify crop diseases from plant images and receive AI-generated treatment guidance along with relevant agricultural product recommendations. Built collaboratively as part of an intensive Python Software Development Bootcamp.",
    techStackIcon: agromindTechStackIcon,
    techStack: [
      { name: "React", icon: reactIcon },
      { name: "FastAPI", icon: fastapiIcon },
      { name: "Python", icon: pythonIcon },
      { name: "PostgreSQL", icon: postgresqlIcon },
      { name: "Docker", icon: dockerIcon },
      { name: "OpenAI API", icon: openaiIcon },
      { name: "RAG", icon: ragIcon },
    ],
    featuresIcon: agromindFeaturesIcon,
    features: [
      {
        title: "AI Crop Disease Diagnosis –",
        text: "Upload a plant image to identify crop diseases using GPT 4.1-mini vision model.",
      },
      {
        title: "Treatment Guidance –",
        text: "Receive AI-generated treatment recommendations tailored to the diagnosed disease.",
      },
      {
        title: "Smart Product Recommendations –",
        text: "Get relevant agricultural products through a hybrid recommendation system combining curated disease-to-product mappings with TF-IDF retrieval.",
      },
      {
        title: "Product Catalog & Shopping Cart –",
        text: "Browse products, view details, and add recommended items to a shopping cart.",
      },
      {
        title: "User Accounts –",
        text: "Secure registration and login using JWT-based authentication.",
      },
      {
        title: "Diagnosis History –",
        text: "Save previous diagnoses so users can review disease information, treatment guidance, and recommended products later.",
      },
    ],
    github: "https://github.com/FatimahAljishi/AgroMind.git",
    liveDemo: "http://98.80.119.7:5173/",
    liveDemoIcon: liveDemoIcon,
    themeClass: "agromind-theme",
  },
  {
    id: "resumeEvaluator",
    fileName: "ResumeEvaluator.exe",
    header: resumeEvaluatorHeader,
    title: "Resume Evaluator",
    subtitle: "AI-Powered Resume Evaluation Tool",
    type: "Individual Project | Python Software Development Bootcamp",
    overviewIcon: resumeEvaluatorOverviewIcon,
    description:
      "Developed a full-stack web application that evaluates resumes against job descriptions using AI. Users can upload their resume, provide a target job description, and receive personalized feedback highlighting strengths, missing skills, and overall recommendation.",
    techStackIcon: resumeEvaluatorTechStackIcon,
    techStack: [
      { name: "React", icon: reactIcon },
      { name: "FastAPI", icon: fastapiIcon },
      { name: "Python", icon: pythonIcon },
      { name: "SQLite", icon: sqliteIcon },
      { name: "OpenAI API", icon: openaiIcon },
    ],
    featuresIcon: resumeEvaluatorFeaturesIcon,
    features: [
      {
        title: "AI Resume Evaluation -",
        text: "Upload a resume and compare it against a job description using GPT 4.1-mini to generate detailed feedback.",
      },
      {
        title: "Job Match Analysis -",
        text: "Identify how well the resume aligns with the target role by highlighting relevant qualifications and missing requirements.",
      },
      {
        title: "Custom Evaluation Prompts -",
        text: "Optionally provide additional instructions to tailor the AI evaluation to specific goals or preferences.",
      },
      {
        title: "User Authentication -",
        text: "Secure user registration and login for managing resume evaluations.",
      },
    ],
    github: "https://github.com/FatimahAljishi/resume-evaluator.git",
    liveDemo: "#",
    liveDemoIcon: resumeEvaluatorLiveDemoIcon,
    themeClass: "resume-evaluator-theme",
  },
];
