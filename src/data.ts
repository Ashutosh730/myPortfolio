import { Project, Experience, Certification, Skill } from "./types";

export const projects: Project[] = [
  {
    title: "Rehydration Service",
    description:
      "NAS to S3 file handling system with Kafka integration for efficient data transfer",
    techStack: ["Java", "Spring Boot", "Kafka", "REST API", "AWS S3"],
  },
  {
    title: "File Routing System",
    description:
      "Intelligent file routing system with distributed processing capabilities",
    techStack: ["Java", "Spring Boot", "Spark", "Docker", "Kubernetes"],
  },
  {
    title: "Informatica Replacement",
    description: "Replacement of Informatica to reduce the licensing cost",
    techStack: ["Java", "Spring Boot", "Spark", "Spark SQL", "JSON"],
  },
  // {
  //   title: "Unified Credit Card Payment",
  //   description:
  //     "Microservices-based payment processing system with real-time validation",
  //   techStack: ["Microservices", "Angular", "H2 DB"],
  // },
  {
    title: "Pollution Check App",
    description:
      "Environmental monitoring application with real-time data analysis",
    techStack: ["Java", "Angular", "MySQL", "MongoDB"],
  },
];

export const experiences: Experience[] = [
  {
    title: "Software Developer",
    period: "09/2024 - Present",
    responsibilities: [
      "Developed a Java-based file rehydration service to prevent data loss.",
      "Built a Kafka-based metadata ingestion system for NAS file monitoring.",
      "Created a microservice to upload files from NAS to AWS S3 and log metadata.",
      "Implemented a REST API for scheduled and on-demand file retrieval from S3.",
      "Optimized file transfers for high performance and cloud integration.",
      "Enhanced data resilience and secure file handling for critical operations.",
    ],
  },
  {
    title: "Data Engineer",
    period: "03/2024 - 09/2024",
    responsibilities: [
      "Developed distributed file routing systems with Java, Spring Boot, and Spark",
      "Built a Kubernetes-integrated Spring Boot API client for automated file retrieval.",
      "Led code reviews and unit testing for Kubernetes-deployed services.",
      "Managed the full SDLC for distributed applications.",
    ],
  },
  {
    title: "Data Engineer",
    period: "08/2023 - 02/2024",
    responsibilities: [
      "Built an ETL pipeline with Java, Spring Boot, Spark, and SQL.",
      "Developed a file ingestion system for data validation.",
      "Implemented data transformation and enrichment in an agile environment.",
      "Applied design patterns for scalable ETL workflows.",
      "Converted stored procedures into JSON configs for efficiency.",
      "Delivered enriched output files with accurate data integration.",
    ],
  },
];

export const skills: Skill[] = [
  {
    category: "Programming Languages",
    items: ["Java", "C/C++", "SQL"],
  },
  {
    category: "Frameworks & Tools",
    items: ["Spring Boot", "Apache Spark", "Kubernetes", "Docker"],
  },
  {
    category: "Cloud & Databases",
    items: ["AWS S3", "Azure", "MySQL", "MongoDB", "H2 DB"],
  },
  {
    category: "Development & DevOps",
    items: ["Git", "Postman", "Linux", "Agile Methodologies"],
  },
  {
    category: "Core Skills",
    items: ["Data Structures", "Algorithms", "OOP", "ETL Processes"],
  },
  {
    category: "Soft Skills",
    items: [
      "Cross-Functional Collaboration",
      "Strategic Thinking",
      "Team Communication",
    ],
  },
];

export const certifications: Certification[] = [
  {
    name: "Microsoft Azure Data Fundamentals",
    date: "09/2024",
  },
  {
    name: "Microsoft Azure Fundamentals",
    date: "09/2024",
  },
  {
    name: "Java Full Stack Certification",
    date: "10/2022",
  },
];

export const education = {
  degree: "B.Tech in Computer Science",
  institution: "NIST Berhampur",
  period: "2018-2024",
};
