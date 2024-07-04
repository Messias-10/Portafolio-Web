import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `Estudiante de 5° año de Ingeniería Civil en Computación e Informática con una mentalidad perseverante y apasionada por los desafíos. Mi actitud se refleja en mi resistencia y dedicación incansable para superar obstáculos. Cuando me propongo un objetivo, no paro de aprender hasta convertirme en un conocedor sólido del tema. Esta persistencia se evidencia en mi trayectoria, donde he liderado proyectos de desarrollo de aplicaciones de escritorio/web/mobile, centrándome en la mejora constante de la experiencia del usuario.`;

export const ABOUT_TEXT = `Mi actual enfoque es Data Engineering, desarrollo de aplicaciones móviles/web y refleja mi motivación para explorar nuevas áreas y abrazar la evolución tecnológica. Mi actitud positiva y entusiasta me impulsa a enfrentar cada nuevo desafío con determinación, siempre dispuesto a aprender algo nuevo, ya que creo que hay oportunidades de aprendizaje en cada experiencia. Considero que la persistencia y la actitud positiva son fundamentales para alcanzar el éxito en el campo de la tecnología, y estoy comprometido a seguir creciendo y mejorando continuamente.`;

export const EXPERIENCES = [
  {
    year: "2023 - PRESENT",
    role: "Freelance Full Stack Developer",
    company: "KOI",
    description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies: ["React", "Tailwind", "Javascript", "MySQL"],
  },
  {
    year: "ENERO 2024 - JUNIO 2024",
    role: "Ingeniero de datos",
    company: "Softys Chile",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Python", "SQL Server", "SSIS", "PowerBI"],
  },
  {
    year: "ENE 2023 - MAYO 2023",
    role: "Practicante Ingeniero en Ciberseguridad",
    company: "COPEC",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["Figma", "Tailwind", "React", "MySQL", "CrowdStrike"],
  },
  {
    year: "2020 - 2021",
    role: "Software Engineer",
    company: "Paypal",
    description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
    technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  },
];

export const PROJECTS = [
  {
    title: "Medical Website",
    image: project1,
    description:
      "Página totalmente funcional para empresa dedicada al rubro médico especificamente al odontólogico. Con herramientas de contacto y asignaciones.",
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
  },
  {
    title: "Task Management App",
    image: project2,
    description:
      "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
    technologies: ["HTML", "CSS", "Angular", "Firebase"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
  },
  {
    title: "Blogging Platform",
    image: project4,
    description:
      "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
    technologies: ["HTML", "CSS", "Vue.js", "Express", "mySQL"],
  },
];

export const CONTACT = {
  address: "Santiago de Chile, Región Metropolitana ",
  phoneNo: "",
  email: "luckas.reyes@outlook.com",
};
