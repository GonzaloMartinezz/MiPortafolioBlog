interface ProjectProps {
  title: string;
  description: string;
  tech: string;
  link?: string;
}

const projects: ProjectProps[] = [
  {
    title: "Gym System Web",
    description: "Plataforma completa para gestión de clientes, rutinas y membresías.",
    tech: "React • Node.js • Mongo",
    link: "https://github.com/usuario/repo-gym"
  },
  {
    title: "NBA API Rest",
    description: "Backend robusto dockerizado sirviendo estadísticas de jugadores y equipos.",
    tech: "Docker • Express",
    link: "https://github.com/usuario/repo-nba"
  }
];

export default function Projects() {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-6 text-blue-200 border-b border-blue-800 pb-2">
        Proyectos
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((project, index) => (
          <a 
            key={index}
            href={project.link || "#"}
            target="_blank"
            className="block p-6 bg-slate-800/40 rounded-xl border border-blue-900/30 hover:border-blue-500/50 hover:bg-slate-800/60 transition duration-300 group"
          >
            <h3 className="font-bold text-lg mb-2 text-slate-100 group-hover:text-blue-300 transition">
              {project.title}
            </h3>
            <p className="text-sm text-slate-400 mb-4 h-10">
              {project.description}
            </p>
            <div className="flex justify-between items-center mt-4">
              <span className="text-xs text-blue-400 font-mono">{project.tech}</span>
              <span className="text-xs text-slate-500 group-hover:text-white transition">Ver código →</span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}