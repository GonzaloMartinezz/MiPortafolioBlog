// src/lib/blogData.ts

// 1. Definimos la estructura exacta (Interface) para que TypeScript no se queje
export interface BlogPost {
  slug: string;
  title: string;
  subtitle: string;
  date: string;
  category: string;
  role: string;
  image: string;
  technologies: string[];
  content: {
    challenge: string;
    solution: string;
    result: string;
  };
}

// 2. Exportamos el array usando esa estructura
export const blogPosts: BlogPost[] = [
  {
    slug: "malibu-style",
    title: "Malibu Style: Construyendo una Marca E-commerce",
    subtitle: "Liderazgo, Estrategia de Marca y Gestión de Ventas",
    date: "Enero 2025",
    category: "Emprendimiento",
    role: "CEO & Founder",
    image: "/malibu-cover.jpg",
    technologies: ["Instagram Ads", "E-commerce Strategy", "Team Leadership", "Brand Identity"],
    content: {
      challenge: "El desafío principal fue ingresar a un mercado saturado (indumentaria deportiva) sin una identidad definida. Necesitaba crear una marca que no solo vendiera ropa, sino que transmitiera un estilo de vida ('lifestyle') con el que el público joven se identificara.",
      solution: "Desarrollé una estrategia integral de 360°. Definí la identidad visual y el tono de voz de la marca. Conformé y lideré un equipo de ventas para potenciar el alcance. Implementé estrategias de posicionamiento en redes sociales centradas en la experiencia del usuario y el asesoramiento personalizado sobre los beneficios de cada producto.",
      result: "Logré posicionar la marca localmente, estableciendo un flujo de ventas constante y fidelizando clientes a través de una atención pre y post venta de excelencia. Este proyecto fortaleció mis habilidades de liderazgo y visión de negocio."
    }
  },
  {
    slug: "tarjeta-titanio",
    title: "Tarjeta Titanio: Data Analytics en el Mundo Real",
    subtitle: "Transformando datos crudos en decisiones estratégicas",
    date: "Diciembre 2025",
    category: "Data Analytics",
    role: "Analista de Datos & Ejecutivo Comercial",
    image: "/titanio-cover.jpg",
    technologies: ["SQL", "Excel Avanzado", "Power BI", "ETL", "Business Intelligence"],
    content: {
      challenge: "La empresa manejaba grandes volúmenes de información sobre comercios adheridos, pero estos datos estaban dispersos o 'sucios', lo que dificultaba la toma de decisiones ágiles para el área comercial.",
      solution: "Implementé un ciclo de vida completo de análisis de datos. Realicé procesos de ETL (Inspección, Limpieza y Transformación) para asegurar la integridad de la información en las Bases de Datos. Creé dashboards interactivos y modelos predictivos para identificar tendencias de mercado y oportunidades de adhesión de nuevos comercios.",
      result: "Optimicé la relación con los comercios gracias a insights precisos. La gerencia ahora cuenta con reportes visuales que reducen el tiempo de análisis y mejoran la precisión en la toma de decisiones estratégicas."
    }
  },
  {
    slug: "freelance-dev",
    title: "Desarrollo Freelance: Soluciones Full Stack",
    subtitle: "De la idea al despliegue: Aplicaciones Web Escalables",
    date: "Octubre 2025",
    category: "Full Stack Dev",
    role: "Developer",
    image: "/freelance-cover.jpg",
    technologies: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS"],
    content: {
      challenge: "Los clientes necesitaban presencias digitales que fueran más que simples folletos: requerían interactividad, gestión de usuarios y alto rendimiento, adaptándose a cualquier dispositivo móvil.",
      solution: "Utilizando el stack MERN (MongoDB, Express, React, Node.js), diseñé arquitecturas de software robustas. Me enfoqué en el desarrollo completo: desde la maquetación responsiva en el frontend hasta la creación de APIs RESTful en el backend. Implementé funcionalidades complejas como autenticación y CRUD de datos.",
      result: "Entregué soluciones 'llave en mano' que mejoraron la visibilidad digital de mis clientes, asegurando sitios rápidos, seguros y escalables."
    }
  },
  {
    slug: "nba-api",
    title: "API NBA: Microservicios y Docker",
    subtitle: "Arquitectura de Software Académica",
    date: "Noviembre 2025",
    category: "Backend Engineering",
    role: "Backend Developer",
    image: "/nba-cover.jpg",
    technologies: ["Docker", "Node.js", "Microservicios", "API REST", "Swagger"],
    content: {
      challenge: "Como proyecto académico, el objetivo era resolver el problema de 'funciona en mi máquina'. Necesitaba crear una API compleja que pudiera desplegarse en cualquier entorno sin conflictos de dependencias.",
      solution: "Desarrollé una API para consultar estadísticas de la NBA utilizando Node.js. La clave fue la 'Dockerización' del proyecto: creé contenedores para la aplicación y para la base de datos, orquestados mediante Docker Compose. Documenté los endpoints utilizando Swagger.",
      result: "Un entorno de desarrollo aislado y reproducible. Aprendí los fundamentos de CI/CD y la importancia de la contenedorización en la arquitectura de software moderna."
    }
  },
  // ... (tienes los 4 anteriores aquí)

  {
    slug: "amway-business",
    title: "Amway: Liderazgo y Negociación",
    subtitle: "Desarrollo de Soft Skills y Gestión de Equipos",
    date: "2024",
    category: "Business",
    role: "Empresario Independiente",
    image: "/amway-cover.jpg",
    technologies: ["Liderazgo", "Oratoria", "Ventas", "Team Building"],
    content: {
      challenge: "El reto era construir y motivar un equipo de trabajo autónomo en un modelo de negocio basado en resultados. Necesitaba desarrollar habilidades interpersonales fuertes para liderar sin tener autoridad jerárquica tradicional.",
      solution: "Me enfoqué en la capacitación constante en oratoria y liderazgo[cite: 36]. Desarrollé estrategias de ventas personalizadas y sistemas de motivación para el equipo. [cite_start]Gestioné la negociación y fidelización de clientes basándome en la confianza y el cumplimiento de objetivos mensuales[cite: 37].",
      result: "Logré consolidar un equipo productivo y fortalecer mis 'soft skills': comunicación efectiva, resiliencia y visión estratégica, habilidades que hoy aplico directamente en la gestión de proyectos tecnológicos."
    }
  },
  {
    slug: "backend-architecture",
    title: "Backend Avanzado: Diseño y Arquitectura",
    subtitle: "Patrones de Diseño y Seguridad en APIs",
    date: "2025 - Actualidad",
    category: "Backend Dev",
    role: "Estudiante Avanzado (CoderHouse)",
    image: "/backend-cover.jpg",
    technologies: ["Patrones de Diseño", "Auth/Authz", "Optimización", "Scalability"],
    content: {
      challenge: "Crear servidores no es solo que 'funcionen'. [cite_start]El desafío en este nivel es diseñar arquitecturas que sean mantenibles, seguras y escalables para soportar alto tráfico y lógica de negocio compleja[cite: 53].",
      solution: "Implementé capas de abstracción (Controller-Service-DAO) para desacoplar la lógica. Integré sistemas robustos de autenticación y autorización. [cite_start]Apliqué patrones de diseño para resolver problemas comunes de forma eficiente y optimicé la comunicación entre servicios[cite: 54, 55].",
      result: "Desarrollo de backends profesionales listos para producción, con código limpio, seguro y fácil de mantener por otros desarrolladores."
    }
  },
  {
    slug: "software-quality",
    title: "Ingeniería de Software: Calidad y Testing",
    subtitle: "Metodologías Ágiles y Estructuras de Datos",
    date: "2024 - 2026",
    category: "Software Eng.",
    role: "Estudiante (UNSTA)",
    image: "/unsta-cover.jpg",
    technologies: ["Scrum", "QA Testing", "Algoritmos", "Estructuras de Datos"],
    content: {
      challenge: "En el desarrollo profesional, escribir código es solo una parte. [cite_start]El verdadero reto es garantizar la calidad del software, trabajar eficientemente en equipo y manejar datos complejos[cite: 46].",
      solution: "Adopté metodologías ágiles para la gestión de proyectos. Profundicé en el estudio de algoritmos y estructuras de datos para optimizar el rendimiento. [cite_start]Incorporé prácticas de testing para asegurar la fiabilidad del código antes del despliegue[cite: 47].",
      result: "Una mentalidad de ingeniero: no solo busco la solución rápida, sino la solución óptima, testeada y construida colaborativamente."
    }
  },
  {
    slug: "data-modeling",
    title: "Data Analytics: Modelado y Tendencias",
    subtitle: "Inspección y Transformación de Datos Masivos",
    date: "2025",
    category: "Data Science",
    role: "Analista de Datos (Formación)",
    image: "/analytics-cover.jpg",
    technologies: ["ETL", "Data Modeling", "Trend Analysis", "Insights"],
    content: {
      challenge: "Los datos crudos por sí solos no dicen nada. [cite_start]El desafío es transformar grandes volúmenes de información desordenada en conocimiento útil para tomar decisiones de negocio[cite: 50].",
      solution: "Apliqué técnicas rigurosas de inspección, limpieza y transformación (ETL). [cite_start]Diseñé modelos de datos eficientes para identificar patrones ocultos y tendencias actuales en el mercado[cite: 50, 51].",
      result: "Capacidad para convertir datasets caóticos en tableros claros y predicciones fundamentadas que aportan valor estratégico real a cualquier organización."
    }
  }
];