// Definimos cómo luce un item de la historia
interface TimelineItemProps {
  year: string;
  title: string;
  description: string;
  tags?: string[]; // Array de strings opcional
  isCurrent?: boolean; // Booleano opcional
}

// Lista de datos (podrías mover esto a un archivo separado en /data)
const historyData: TimelineItemProps[] = [
  {
    year: "2025 - Presente",
    title: "Analista de Datos / Dev",
    description: "Trabajando en proyectos reales, migrando sistemas y analizando datos corporativos.",
    tags: ["SQL", "React", ".NET"],
    isCurrent: true,
  },
  {
    year: "2024",
    title: "Proyecto Final Seminario",
    description: "Creación de API NBA con Node, Express y Docker. Primer acercamiento a contenedores.",
    tags: ["Docker", "Node.js"],
  },
  {
    year: "2023",
    title: "Inicios en Programación",
    description: "Descubrimiento del desarrollo web. Creación de sitios para gimnasios y aprendizaje autodidacta.",
  },
];

export default function Timeline() {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-8 text-blue-200 border-b border-blue-800 pb-2">
        Mi Camino
      </h2>
      <div className="relative border-l border-blue-800 ml-3 space-y-10">
        {historyData.map((item, index) => (
          <div key={index} className="ml-8 relative group">
            {/* El punto en la línea de tiempo */}
            <span className={`absolute -left-[41px] flex h-6 w-6 items-center justify-center rounded-full ring-4 ring-slate-900 ${item.isCurrent ? 'bg-blue-500' : 'bg-slate-700'}`}></span>
            
            <h3 className={`text-lg font-bold ${item.isCurrent ? 'text-white' : 'text-slate-200'}`}>
              {item.title}
            </h3>
            <span className="text-sm text-blue-400 block mb-1">{item.year}</span>
            <p className="text-slate-400 text-sm md:text-base">
              {item.description}
            </p>
            
            {/* Renderizado condicional de tags si existen */}
            {item.tags && (
              <div className="mt-3 flex gap-2 flex-wrap">
                {item.tags.map(tag => (
                  <span key={tag} className="text-xs bg-blue-900/40 border border-blue-800 px-2 py-1 rounded text-blue-200">
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}