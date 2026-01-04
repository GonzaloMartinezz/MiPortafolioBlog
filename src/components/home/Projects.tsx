import { FaGithub, FaExternalLinkAlt, FaFolder } from "react-icons/fa";

interface ProjectProps {
  title: string;
  description: string;
  tags: string[];
  link?: string;
  repo: string;
}

const projects: ProjectProps[] = [
  {
    title: "NBA API Services",
    description: "API robusta para consultar estadísticas de equipos y jugadores. Arquitectura en capas contenerizada con Docker.",
    tags: ["Node.js", "Express", "Docker", "MongoDB"],
    repo: "https://github.com/gonzalomartinez/nba-api", // Ajusta tu usuario
    link: "#"
  },
  {
    title: "TurnoMedico .NET",
    description: "Sistema de gestión de citas médicas. Uso de Entity Framework Core, Clean Architecture y AutoMapper.",
    tags: ["C#", ".NET Core", "SQL Server", "Swagger"],
    repo: "https://github.com/gonzalomartinez/turno-medico",
    link: "#"
  },
  {
    title: "Dental Office Manager",
    description: "Solución completa para consultorio odontológico real. Gestión de pacientes, historia clínica y agenda.",
    tags: ["React", "Node.js", "JWT Auth", "Tailwind"],
    repo: "https://github.com/gonzalomartinez/dental-app",
    link: "#"
  },
  {
    title: "Malibu Style E-commerce",
    description: "Plataforma de venta de indumentaria deportiva. Carrito de compras, pasarela de pagos y panel admin.",
    tags: ["React", "Firebase", "Stripe", "UX/UI"],
    repo: "https://github.com/gonzalomartinez/malibu-style",
    link: "https://malibu.style" 
  }
  
];

export default function Projects() {
  return (
    <section className="py-10 animate-fade-in-up delay-200">
      <h2 className="font-display text-3xl font-bold text-slate-900 mb-8 flex items-center gap-3">
        <FaFolder className="text-blue-600" /> Proyectos Destacados
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex flex-col justify-between p-8 bg-white rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-blue-200 transition-all duration-300 hover:-translate-y-1"
          >
            <div>
                <div className="flex justify-between items-start mb-4">
                    <div className="p-3 bg-blue-50 rounded-2xl text-blue-600 group-hover:scale-110 transition-transform">
                        <FaGithub size={24} />
                    </div>
                    {project.link && (
                        <span className="text-slate-400 hover:text-blue-600 transition-colors">
                            <FaExternalLinkAlt size={16} />
                        </span>
                    )}
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {project.title}
                </h3>
                
                <p className="text-slate-500 text-sm leading-relaxed mb-6">
                    {project.description}
                </p>
            </div>

            <div className="flex flex-wrap gap-2 mt-auto">
              {project.tags.map((tag) => (
                <span 
                    key={tag} 
                    className="px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-600 bg-slate-100 rounded-lg group-hover:bg-blue-50 group-hover:text-blue-700 transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}