interface ProjectProps {
  title: string;
  description: string;
  tags: string[];
  link?: string;
  repo?: string;
}

const projects: ProjectProps[] = [
  {
    title: "NBA API Services",
    description: "API robusta para consultar estadísticas de equipos y jugadores de la NBA. Arquitectura en capas contenerizada.",
    tags: ["Node.js", "Express", "Docker", "Mongo"],
    repo: "https://github.com/usuario/nba-api"
  },
  {
    title: "TurnoMedico .NET",
    description: "Sistema de gestión de citas médicas. Uso de Entity Framework Core para manejo de datos y AutoMapper para DTOs.",
    tags: ["C#", ".NET Core", "Entity Framework", "Swagger"],
    repo: "https://github.com/usuario/turno-medico"
  },
  {
    title: "Dental Office Manager",
    description: "Solución a medida para consultorio odontológico. Gestión de pacientes y agenda. (Proyecto familiar real).",
    tags: ["React", "Node.js", "JWT Auth"],
    repo: "https://github.com/usuario/dental-app"
  },
  {
    title: "Gym Website",
    description: "Landing page y sistema de usuarios para gimnasio. Mi primer proyecto complejo en React.",
    tags: ["React", "Vite", "Tailwind"],
    repo: "https://github.com/usuario/gym-web"
  }
];

export default function Projects() {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-8 text-slate-100 tracking-tight">Proyectos Destacados</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((project, index) => (
          <a 
            key={index}
            href={project.repo || "#"}
            target="_blank"
            className="group block p-6 bg-slate-900/50 border border-slate-800 rounded-lg hover:border-blue-500/50 hover:bg-slate-800/80 transition-all duration-300"
          >
            <div className="flex justify-between items-start mb-4">
              <h3 className="font-semibold text-slate-200 group-hover:text-blue-300 transition-colors">
                {project.title}
              </h3>
              <svg className="w-5 h-5 text-slate-500 group-hover:text-blue-400 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </div>
            
            <p className="text-sm text-slate-400 mb-6 leading-relaxed">
              {project.description}
            </p>
            
            <div className="flex flex-wrap gap-2 mt-auto">
              {project.tags.map(tag => (
                <span key={tag} className="text-xs font-mono text-slate-500">
                  #{tag}
                </span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}