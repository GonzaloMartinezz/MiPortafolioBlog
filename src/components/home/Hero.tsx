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
      <div className="animate-fade-in-up delay-100 space-y-2 text-lg md:text-xl font-medium font-mono text-slate-600">
        <p>Full Stack Dev & Data Analyst</p>
        <div className="flex justify-center gap-3 text-sm md:text-base">
            <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full">.NET</span>
            <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full">Node.js</span>
            <span className="px-3 py-1 bg-cyan-100 text-cyan-700 rounded-full">React</span>
        </div>
      </div>

      {/* BOTÓN CTA (Llamada a la acción) */}
      <div className="animate-fade-in-up delay-200 mt-10">
        <Link href="/who" className="group relative inline-flex items-center justify-center px-8 py-3 font-bold text-white transition-all duration-200 bg-slate-900 font-display rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-900 hover:bg-blue-600 hover:scale-105 shadow-lg hover:shadow-blue-500/30">
            Ver mi trabajo
            <svg className="w-5 h-5 ml-2 -mr-1 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path></svg>
        </Link>
      </div>

      {/* FOTO FLOTANTE */}
      <div className="animate-fade-in-up delay-300 mt-16 relative w-40 h-40 md:w-56 md:h-56 group cursor-pointer">
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-400 to-purple-400 rounded-full blur-2xl opacity-40 group-hover:opacity-60 transition duration-500 animate-pulse"></div>
        <Image 
          src="/profile.jpg" 
          alt="Gonzalo Martínez" 
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