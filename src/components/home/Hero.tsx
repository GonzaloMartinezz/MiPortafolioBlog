import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center text-center pt-8 pb-16 md:pt-24 min-h-[60vh]">
      
      {/* TÍTULO CON EFECTO DEGRADADO SUTIL */}
      <h1 className="animate-fade-in-up font-display text-5xl md:text-8xl font-black tracking-tighter text-slate-900 uppercase mb-6 select-none leading-[0.9]">
        Gonzalo<br className="md:hidden"/> Martínez
      </h1>

      {/* SUBTÍTULO */}
      <div className="animate-fade-in-up delay-100 space-y-2 text-lg md:text-xl font-medium font-mono text-slate-500">
        <p>Full Stack Developer</p>
        <div className="flex justify-center gap-0.5 text-sm md:text-base">
            <span className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full">Javascript</span>
            <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full">Typescript</span>
            <span className="px-3 py-1 bg-cyan-100 text-cyan-700 rounded-full">React</span>
            <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full">Node.js</span>
            <span className="px-3 py-1 bg-sky-100 text-sky-700 rounded-full">Next.js</span>
            <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full">SQL Server</span>
            <span className="px-3 py-1 bg-slate-400 text-slate-800 rounded-full">Docker</span>
            <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full">MongoDB</span>
            <span className="px-3 py-1 bg-rose-100 text-rose-700 rounded-full">Express</span>
            <span className="px-3 py-1 bg-sky-100 text-sky-700 rounded-full">Tailwind</span>
            <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full">C#</span>
            <span className="px-3 py-1 bg-slate-400 text-slate-800 rounded-full">.NET</span>
        </div>
      </div>
      <br />

        <div className="animate-fade-in-up delay-100 space-y-2 text-lg md:text-xl font-medium font-mono text-slate-500">
        <p>Data Analyst</p>
        <div className="flex justify-center gap-1.5 text-sm md:text-base">
            <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full">Microsoft Excel</span>
            <span className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full">Microsoft Power BI</span>
            <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full">Tableau</span>
            <span className="px-3 py-1 bg-cyan-100 text-cyan-700 rounded-full">Canva</span>
            <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full">SQL Server</span>
            <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full">Figma</span>
            
        </div>
      </div>

   
      <div className="animate-fade-in-up delay-200 mt-10">
        <Link href="/who" className="group relative inline-flex items-center justify-center px-8 py-3 font-bold text-white transition-all duration-200 bg-slate-900 font-display rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-900 hover:bg-blue-600 hover:scale-105 shadow-lg hover:shadow-blue-500/30">
            Ver mis trabajos
            <svg className="w-5 h-5 ml-2 -mr-1 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path></svg>
        </Link>
      </div>

      {/* FOTO FLOTANTE */}
     <div className="animate-fade-in-up delay-300 mt-16 relative w-40 h-40 md:w-56 md:h-56 group cursor-pointer">
        <div className="absolute w-40 h-40 md:w-56 md:h-56 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl "></div>
        <Image 
          src="/logoperfil.png"
          alt="Gonzalo Martinez"
          fill
          className="rounded-full object-cover border-4 border-white shadow-2xl grayscale group-hover:grayscale-0 transition duration-500 ease-in-out transform group-hover:scale-105 group-hover:rotate-3"
          priority 
        />
        <div className="absolute -bottom-2 -right-2 text-4xl animate-bounce drop-shadow-lg">
          🏀
        </div>
      </div>
    </section>
  );
}