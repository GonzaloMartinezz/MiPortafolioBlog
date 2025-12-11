import Image from "next/image";
export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center text-center pt-8 pb-16 md:pt-16">
      
      {/* TÍTULO: Reducido de 9xl a 7xl. Quitamos el 'black' por 'bold' para que sea menos grueso */}
      <h1 className="font-display text-5xl md:text-7xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-400 uppercase mb-4 select-none">
        Gonzalo<br className="md:hidden"/> Martínez
      </h1>

      <div className="space-y-2 text-base md:text-lg font-medium text-blue-200/80 font-mono">
        <p>21yo. Full Stack Dev & Data Analyst @UNSTA</p>
      </div>
      <p className="mt-4 text-xs md:text-sm text-slate-500 font-mono">
        Prev: <span className="text-slate-300">Tarjeta Titanio S.A </span> • <span className="text-slate-300">MalibuStyles</span>
      </p>

      {/* FOTO: Ajustada un poco más chica también (w-48 -> w-40) */}
      <div className="mt-10 relative w-40 h-40 md:w-56 md:h-56 group">
        <div className="absolute inset-0 bg-blue-500 rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition duration-500"></div>
        <Image 
          src="/yo.jpg" 
          alt="Gonzalo Martínez" 
          fill
          className="rounded-full object-cover border-4 border-slate-800 grayscale group-hover:grayscale-0 transition duration-500 ease-in-out transform group-hover:scale-105"
          priority 
        />
        <div className="absolute bottom-0 right-2 text-3xl animate-bounce">
          🏀
        </div>
      </div>

    </section>
  );
}