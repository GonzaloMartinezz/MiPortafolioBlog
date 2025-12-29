import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  // Datos para los badges (Colores pasteles exactos)
  const stackFull = [
    { name: "Javascript", color: "bg-slate-600 text-white" },
    { name: "Typescript", color: "bg-slate-600 text-white" },
    { name: "React", color: "bg-slate-600 text-white"},
    { name: "Node.js", color: "bg-slate-600 text-white"},
    { name: "Next.js", color: "bg-slate-600 text-white"},
    { name: "SQL Server", color: "bg-slate-600 text-white" },
    { name: "Docker", color:"bg-slate-600 text-white" },
    { name: "MongoDB", color: "bg-slate-600 text-white"},
    { name: "Express", color: "bg-slate-600 text-white" },
    { name: "Tailwind", color: "bg-slate-600 text-white" },
    { name: "C#", color: "bg-slate-600 text-white"},
    { name: ".NET", color: "bg-slate-600 text-white" },
    { name: "Vercel", color:"bg-slate-600 text-white"},
    { name: "Mongoose", color: "bg-slate-600 text-white" },
    { name: "Testing - Jira", color: "bg-slate-600 text-white" },
  ];

  const stackData = [
    { name: "Microsoft Excel", color: "bg-slate-600 text-white" },
    { name: "Microsoft Power BI", color: "bg-slate-600 text-white" },
    { name: "Tableau", color: "bg-slate-600 text-white" },
    { name: "Canva", color: "bg-slate-600 text-white" },
    { name: "SQL Server", color: "bg-slate-600 text-white" },
    { name: "Figma", color: "bg-slate-600 text-white"},
    { name: "R", color: "bg-slate-600 text-white"},
    { name: "Power BI DAX ", color: "bg-slate-600 text-white" },
    { name: "MySQL", color:"bg-slate-600 text-white"},
    { name: "Google Data Studio", color: "bg-slate-600 text-white"},
    { name: "Kaggle", color: "bg-slate-600 text-white" },
  ];

  return (
    <section className="flex flex-col items-center justify-center text-center animate-fade-in-up">

        {/* 5. IMAGEN (CARA DE LOGO ABAJO) */}  
      <div className="relative w-32 h-32 md:w-40 md:h-50 group cursor-pointer">
        {/* Glow azul detrás */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] h-[200%] bg-opacity-50 bg-blue-400/40 blur-[60px] rounded-full pointer-events-none"></div>
        
        <Image 
          src="/LogoPerfil.jpg" 
          alt="Gonzalo Martínez" 
          fill
          className="rounded-full object-cover border-4 border-white shadow-xl grayscale group-hover:grayscale-0 transition duration-500 ease-in-out transform group-hover:scale-105 group-hover:rotate-3"
          priority 
        />
        {/* Emoji flotante */}
        <div className="absolute -bottom-1 -right-1 text-4xl md:text-5xl animate-bounce animate-delay-1000">
          🏀
        </div>
      </div>
  

      {/* 2. SECCIÓN FULL STACK */}
     <div className="animate-fade-in-up delay-100 mb-10 w-full max-w-4xl px-2 mt-8">
        <p className="font-mono text-slate-400 mb-6 tracking-[0.2em] text-xs font-bold uppercase">Full Stack Web Developer</p>
        <div className="flex flex-wrap justify-center gap-2 md:gap-3">
            {stackFull.map((tech) => (
                <span key={tech.name} className={`hover-jump px-3 py-1.5 rounded-lg text-[11px] md:text-sm font-bold tracking-wide border ${tech.color} cursor-default shadow-sm`}>
                    {tech.name}
                </span>
            ))}
        </div>
      </div>

      {/* 3. SECCIÓN DATA ANALYST */}
      <div className="animate-fade-in-up delay-200 mb-12 w-full max-w-4xl px-2">
        <p className="font-mono text-slate-400 mb-4 tracking-[0.2em] text-xs font-bold uppercase">Data Analytics</p>
        <div className="flex flex-wrap justify-center gap-2 md:gap-3">
            {stackData.map((tech) => (
                <span key={tech.name} className={`hover-jump px-3 py-1.5 rounded-lg text-[11px] md:text-sm font-bold tracking-wide border ${tech.color} cursor-default shadow-sm`}>
                    {tech.name}
                </span>
            ))}
        </div>
      </div>

      {/* 4. BOTÓN NEGRO (CTA) */}
   <div className="animate-fade-in-up delay-300 mb-16">
        <Link href="/who" className="group relative inline-flex items-center justify-center px-8 py-3 text-sm font-bold text-white transition-all duration-300 bg-slate-900 rounded-full hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-500/40 hover:-translate-y-1">
            Ver mis trabajos
            <svg className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
        </Link>
      </div>

   

    </section>
  );
}