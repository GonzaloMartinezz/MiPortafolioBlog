interface TimelineItemProps {
  date: string;
  title: string;
  role: string;
  description: string;
  tech?: string[];
}

const historyData: TimelineItemProps[] = [
  {
    date: "Dic 2025",
    title: "Consultorio Dental & Portfolio",
    role: "Freelance",
    description: "Desarrollo del backend para un consultorio dental (Node.js/Express) y creación de este portafolio personal optimizado con Next.js.",
    tech: ["Next.js", "TypeScript", "Tailwind"]
  },
  {
    date: "Nov 2025",
    title: "Seminario Informático III",
    role: "Proyecto Final",
    description: "Creación de una API RESTful temática de la NBA. Implementación de Docker para contenedores y MongoDB para manejo de datos masivos de jugadores y equipos.",
    tech: ["Docker", "Node.js", "MongoDB"]
  },
  {
    date: "Oct 2025",
    title: "Especialización Backend .NET",
    role: "Formación Académica",
    description: "Desarrollo de API 'TurnoMedico' usando C# y Entity Framework. Implementación de patrones de diseño (Repository, DTOs) y documentación con Swagger.",
    tech: ["C#", ".NET", "SQL Server"]
  },
  {
    date: "Sep 2025",
    title: "Gym System Web",
    role: "Proyecto Personal",
    description: "Primera aplicación full stack para gestión de gimnasios. Manejo de estados complejos en React y creación de componentes reutilizables.",
    tech: ["React", "JavaScript", "CSS"]
  },
  {
    date: "2024 - Presente",
    title: "Empresa de Tarjetas de Crédito",
    role: "Analista / Administrativo",
    description: "Análisis de datos y propuestas de estrategias de marketing local. Automatización de procesos internos.",
    tech: ["Excel", "Data Analysis"]
  }
];

export default function Timeline() {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-10 text-slate-100 tracking-tight">Trayectoria</h2>
      
      <div className="space-y-12">
        {historyData.map((item, index) => (
          <div key={index} className="flex flex-col md:flex-row gap-4 md:gap-10 group">
            {/* Fecha a la izquierda (Estilo Holtz) */}
            <div className="md:w-32 shrink-0">
              <span className="text-sm font-mono text-slate-500 group-hover:text-blue-400 transition-colors">
                {item.date}
              </span>
            </div>
            
            {/* Contenido */}
            <div className="md:flex-1">
              <h3 className="text-lg font-semibold text-slate-200 group-hover:text-blue-300 transition-colors">
                {item.title}
              </h3>
              <p className="text-sm text-blue-500 mb-2">{item.role}</p>
              <p className="text-slate-400 leading-relaxed text-sm md:text-base">
                {item.description}
              </p>
              
              {/* Tags de tecnología */}
              {item.tech && (
                <div className="flex flex-wrap gap-2 mt-3">
                  {item.tech.map(t => (
                    <span key={t} className="text-xs px-2 py-1 bg-blue-900/20 text-blue-300 rounded border border-blue-900/30">
                      {t}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}