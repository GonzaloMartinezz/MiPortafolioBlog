import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  
  // Array simple (Todos usan el mismo estilo base, así es más limpio)
  const stackFull = [
    "Javascript", "Typescript", "React", "Node.js", "Next.js", 
    "SQL Server", "Docker", "MongoDB", "Express", "Tailwind", 
    "C#", ".NET", "Vercel", "Mongoose", "Testing - Jira"
  ];

  const stackData = [
    "Microsoft Excel", "Microsoft Power BI", "Tableau", "Canva", 
    "SQL Server", "Figma", "R", "Power BI DAX", "MySQL", 
    "Google Data Studio", "Kaggle"
  ];

  // ESTILO DE LOS BADGES (Aquí está la magia de la interacción)
  // Base: Tu estilo original (bg-slate-600, text-white, px-3, py-1.5...)
  // Hover: Se vuelve azul (bg-blue-600), crece (scale-110) y brilla.
  const badgeStyle = "px-3 py-1.5 rounded-lg text-[11px] md:text-sm font-bold tracking-wide border text-white bg-slate-600 transition-all duration-300 ease-out hover:bg-blue-600 hover:scale-110 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/30 cursor-default border-slate-500 hover:border-blue-400";

  return (
    <section className="flex flex-col items-center justify-center text-center animate-fade-in-up">

      {/* 5. IMAGEN (TU CÓDIGO ORIGINAL RESTAURADO) */}  
      <div className="relative w-32 h-32 md:w-40 md:h-50 group cursor-pointer -mt-12 md:-mt-20 z-15">
        {/* Glow azul detrás */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] h-[200%] bg-opacity-50 bg-blue-400/50 blur-[60px] rounded-full pointer-events-none"></div>
        
        <Image 
          src="/LogoPerfil.jpg" 
          alt="Gonzalo Martínez" 
          fill
          className="rounded-full object-cover border-4 border-white shadow-xl grayscale group-hover:grayscale-0 transition duration-500 ease-in-out transform group-hover:scale-105 group-hover:rotate-3"
          priority 
        />
        {/* Emoji flotante */}
        <div className="absolute -bottom-1 -right-1 text-4xl md:text-4xl animate-bounce animate-delay-1000">
          🏀
        </div>
      </div>
  
      {/* 2. SECCIÓN FULL STACK (Con interacción nueva) */}
      <div className="animate-fade-in-up delay-100 mb-10 w-full max-w-4xl px-2 mt-8">
        <p className="font-mono text-blue-600 mb-6 tracking-[0.2em] text-xs font-bold uppercase">Full Stack Web Developer</p>
        <div className="flex flex-wrap justify-center gap-2 md:gap-3">
            {stackFull.map((tech) => (
                <span key={tech} className={badgeStyle}>
                    {tech}
                </span>
            ))}
        </div>
      </div>

      {/* 3. SECCIÓN DATA ANALYST (Con interacción nueva) */}
      <div className="animate-fade-in-up delay-200 mb-10 w-full max-w-4xl px-2">
        <p className="font-mono text-blue-600 mb-4 tracking-[0.2em] text-xs font-bold uppercase">Data Analytics</p>
        <div className="flex flex-wrap justify-center gap-2 md:gap-3">
            {stackData.map((tech) => (
                <span key={tech} className={badgeStyle}>
                    {tech}
                </span>
            ))}
        </div>
      </div>

      {/* 4. BOTÓN NEGRO (CTA) */}
      <div className="animate-fade-in-up delay-300 mb-16">
        <Link href="/blog" className="group relative inline-flex items-center justify-center px-8 py-3 text-sm font-bold text-white transition-all duration-300 bg-slate-900 rounded-full hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-500/40 hover:-translate-y-1">
            Ver mis trabajos
            <svg className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
        </Link>
      </div>
    </section>
  );
}