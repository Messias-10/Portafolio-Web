import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `Egresado de Ingeniería Civil en Computación e Informática en proceso de titulación con proyecto de IA aplicada en colonoscopías para la detección temprana del Cancer de Colón a traves de la detección y clasificación de los pólipos en tiempo real. Poseo una mentalidad perseverante y apasionada por los desafíos. Mi actitud se refleja en mi resistencia y dedicación incansable para superar obstáculos. Cuando me propongo un objetivo, no paro de aprender hasta convertirme en un conocedor sólido del tema. Esta persistencia se evidencia en mi trayectoria, donde he liderado proyectos de desarrollo de aplicaciones de escritorio/web/mobile, centrándome en la mejora constante de la experiencia del usuario.`;

export const ABOUT_TEXT = `Mi actual enfoque es Software/Backend Engineer, desarrollo de aplicaciones móviles/web y refleja mi motivación para explorar nuevas áreas y abrazar la evolución tecnológica. Mi actitud positiva y entusiasta me impulsa a enfrentar cada nuevo desafío con determinación, siempre dispuesto a aprender algo nuevo, ya que creo que hay oportunidades de aprendizaje en cada experiencia. Considero que la persistencia y la actitud positiva son fundamentales para alcanzar el éxito en el campo de la tecnología, y estoy comprometido a seguir creciendo y mejorando continuamente.`;

export const EXPERIENCES = [
  {
    year: "2023 - PRESENT",
    role: "Freelance Full Stack Developer",
    company: "KOI",
    description: `Desarrollo de aplicaciones web personalizadas para diversos clientes, utilizando tecnologías modernas como React y Tailwind. Encargado del diseño, implementación y mantenimiento de interfaces de usuario dinámicas y sistemas de backend eficientes. Colaboración directa con clientes para definir requerimientos, optimizar el rendimiento de aplicaciones y asegurar una experiencia de usuario fluida.`,
    technologies: ["React", "Tailwind", "Javascript", "MySQL"],
  },
  {
    year: "ENERO 2024 - JUNIO 2024",
    role: "Data Engineer",
    company: "Softys Chile",
    description: `Responsable del diseño, implementación y optimización de procesos ETL utilizando SQL Server y SSIS. Participé en proyectos de migración y análisis de datos en Google Cloud Platform (GCP), desarrollando reportes automatizados con PowerBI. Desarrollé scripts de web scraping para obtener datos relevantes de fuentes externas, integrándolos en los sistemas de análisis de datos. Trabajé en el mantenimiento y optimización de bases de datos, asegurando la eficiencia de los flujos de trabajo y mejorando la calidad de los datos para la toma de decisiones estratégicas.`,
    technologies: ["Python", "SQL Server", "SSIS", "PowerBI", "GCP"],
  },
  {
    year: "ENE 2023 - MAYO 2023",
    role: "Practicante Ingeniero en Ciberseguridad",
    company: "COPEC",
    description: `Apoyé en el desarrollo de interfaces de usuario seguras y funcionales para proyectos internos, utilizando Figma, Tailwind y React. Colaboré con el equipo de ciberseguridad en la implementación de herramientas de monitoreo y protección como CrowdStrike. Desarrollé scripts de web scraping para realizar auditorías de seguridad automatizadas, recopilando datos de sitios y servicios críticos. Participé en el análisis de vulnerabilidades y en la creación de soluciones para mejorar la infraestructura de seguridad de las aplicaciones web y sistemas empresariales.`,
    technologies: ["Figma", "Tailwind", "React", "MySQL", "CrowdStrike"],
  },
];

export const PROJECTS = [
  {
    title: "Medical Website",
    image: project1,
    description:
      "Página web para empresa odontológica RamiDental. Incluye herramientas de contacto, agendamiento de citas y gestión de pacientes, optimizando la experiencia del usuario.",
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
  },
  {
    title: "AI Polyp Detection Software",
    image: project2,
    description:
      "Software de escritorio desarrollado en C# para la detección y clasificación de pólipos en tiempo real durante procedimientos de colonoscopia. Utiliza inteligencia artificial para asistir en la detección temprana de pólipos precancerosos, contribuyendo a la prevención del cáncer de colon.",
    technologies: ["C#", "Python", "OpenCV", "TensorFlow", "WinForms"],
  },
  {
    title: "Stock Management CRUD App",
    image: project3,
    description:
      "Aplicación web CRUD para la gestión de inventarios y control de stock. Permite agregar, editar y eliminar productos, con un panel de control dinámico y reportes automatizados.",
    technologies: ["React", "Node.js", "Express", "MongoDB"],
  },
  {
    title: "Task Manager Desktop App",
    image: project4,
    description:
      "Aplicación de escritorio desarrollada en C# para la gestión de tareas y proyectos. Permite crear, asignar y dar seguimiento a tareas con una interfaz intuitiva.",
    technologies: ["C#", ".NET", "SQL Server", "WinForms"],
  },
];

export const CONTACT = {
  address: "Santiago de Chile, Región Metropolitana ",
  phoneNo: "",
  email: "luckas.reyes@outlook.com",
};
