import plantIcon from "../assets/plant.png";

export const projects = [
  {
    id: "agromind",
    fileName: "AgroMind.exe",
    icon: plantIcon,
    title: "AgroMind – AI Crop Disease Diagnosis & Recommendation Platform",
    subtitle: "Group Project | Python Software Development Bootcamp",
    description:
      "Developed a full-stack web application that helps farmers identify crop diseases from plant images and receive AI-generated treatment guidance along with relevant agricultural product recommendations. Built collaboratively as part of an intensive Python Software Development Bootcamp.",
    techStack: [
      "React",
      "FastAPI",
      "Python",
      "PostgreSQL",
      "Docker",
      "OpenAI API",
      "TF-IDF",
      "RAG",
    ],
    features: [
      "AI Crop Disease Diagnosis – Upload a plant image to identify crop diseases using GPT 4.1-mini vision model.",
      "Treatment Guidance – Receive AI-generated treatment recommendations tailored to the diagnosed disease.",
      "Smart Product Recommendations – Get relevant agricultural products through a hybrid recommendation system combining curated disease-to-product mappings with TF-IDF retrieval.",
      "Product Catalog & Shopping Cart – Browse products, view details, and add recommended items to a shopping cart.",
      "User Accounts – Secure registration and login using JWT-based authentication.",
      "Diagnosis History – Save previous diagnoses so users can review disease information, treatment guidance, and recommended products later.",
    ],
    github: "#",
    liveDemo: "#",
  },
];
