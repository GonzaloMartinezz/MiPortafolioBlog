import type { Metadata } from "next";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import { FaMapMarkerAlt, FaBasketballBall, FaHeart, FaLaptopCode } from "react-icons/fa";

export const metadata: Metadata = {
  title: "¿Quién soy? | Gonzalo Martínez",
  description: "Mi historia, mis pasiones y mi trayectoria profesional.",
};

export default function WhoPage() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-900">
      <Navbar />
      
      <main className="flex-1 max-w-4xl mx-auto w-full px-6 py-12 md:py-20 animate-fade-in-up">
        
        {/* 1. INTRODUCCIÓN PERSONAL */}
        <section className="mb-20">
          <h1 className="font-display text-4xl md:text-6xl font-bold text-slate-100 mb-8 leading-tight">
            ¿Quién soy? <br />
            <span className="text-blue-500 text-2xl md:text-4xl block mt-2">
              (Y por qué me gustan tanto los datos)
            </span>
          </h1>

          <div className="grid md:grid-cols-2 gap-12 text-slate-400 leading-relaxed text-lg">
            <div className="space-y-4">
              <p>
                Me llamo <strong className="text-slate-200">Gonzalo Martínez</strong>. Vivo en <strong className="text-slate-200">San Miguel de Tucumán</strong> y soy esa clase de persona que disfruta entendiendo el "por qué" de las cosas.
              </p>
              <p>
                Mi día se divide en dos mundos: por la mañana analizo estrategias y datos en una <strong className="text-slate-200">empresa de tarjetas de crédito</strong>, y por la noche construyo arquitecturas de software. Pasé del stack MERN a enamorarme de la robustez de <strong className="text-slate-200">.NET y C#</strong>.
              </p>
            </div>
            
            {/* CAJA DE DATOS CURIOSOS */}
            <div className="bg-slate-800/40 p-6 rounded-2xl border border-slate-700/50 space-y-4 text-base">
                <div className="flex items-center gap-3">
                    <FaMapMarkerAlt className="text-blue-400" />
                    <span>Tucumán, Argentina</span>
                </div>
                <div className="flex items-center gap-3">
                    <FaBasketballBall className="text-green-500" />
                    <span>Fanático enfermo de los <strong>Boston Celtics</strong> ☘️</span>
                </div>
                <div className="flex items-center gap-3">
                    <FaHeart className="text-red-400" />
                    <span>Mi equipo: Mis viejos, mi hermana, mi novia y mi perro.</span>
                </div>
                <div className="flex items-center gap-3">
                    <FaLaptopCode className="text-purple-400" />
                    <span>Actualmente: Creando una App Dental.</span>
                </div>
            </div>
          </div>
        </section>

        {/* 2. STACK TECNOLÓGICO */}
        <section className="mb-20">
            <h2 className="font-display text-2xl font-bold text-slate-100 mb-8 border-b border-slate-800 pb-2">
                Mi Stack Técnico
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {["C# & .NET", "React & Next.js", "SQL Server", "MongoDB", "Docker", "TypeScript", "Node.js", "Git"].map((tech) => (
                    <div key={tech} className="bg-slate-800/30 border border-slate-700/50 p-4 rounded-lg text-center hover:bg-slate-800 transition hover:border-blue-500/30 cursor-default">
                        <span className="text-slate-300 font-mono text-sm">{tech}</span>
                    </div>
                ))}
            </div>
        </section>

        {/* 3. LÍNEA DE TIEMPO (TRAYECTORIA) */}
        <section>
          <h2 className="font-display text-2xl font-bold text-slate-100 mb-10 border-b border-slate-800 pb-2">
            Lo que hice hasta ahora
          </h2>
          
          <div className="space-y-12 border-l border-slate-800 ml-3 md:ml-0">
            
            {/* ITEM 1 */}
            <div className="relative pl-8 md:pl-0 md:grid md:grid-cols-5 md:gap-10 group">
                <div className="md:col-span-1 py-1">
                    <span className="text-blue-400 font-mono text-sm">Actualidad</span>
                </div>
                <div className="md:col-span-4 relative">
                    <div className="absolute -left-[41px] md:-left-[45px] top-2 w-4 h-4 rounded-full bg-blue-500 ring-4 ring-slate-900"></div>
                    <h3 className="text-xl font-bold text-slate-100">Analista & Dev</h3>
                    <p className="text-sm text-slate-500 mb-2">Empresa de Tarjetas de Crédito</p>
                    <p className="text-slate-400 text-sm leading-relaxed">
                        Análisis de datos para estrategias de marketing local y automatización de procesos internos.
                    </p>
                </div>
            </div>

            {/* ITEM 2 */}
            <div className="relative pl-8 md:pl-0 md:grid md:grid-cols-5 md:gap-10 group">
                <div className="md:col-span-1 py-1">
                    <span className="text-slate-500 font-mono text-sm">Proyectos 2025</span>
                </div>
                <div className="md:col-span-4 relative">
                    <div className="absolute -left-[41px] md:-left-[45px] top-2 w-4 h-4 rounded-full bg-slate-700 ring-4 ring-slate-900 group-hover:bg-blue-400 transition"></div>
                    <h3 className="text-xl font-bold text-slate-200">Desarrollo Full Stack</h3>
                    <p className="text-slate-400 text-sm leading-relaxed mt-2">
                        • <strong>Consultorio Dental:</strong> Sistema completo de gestión (Node/React).<br/>
                        • <strong>NBA API:</strong> Backend contenerizado con Docker y Mongo.<br/>
                        • <strong>TurnoMedico:</strong> API robusta en .NET con Clean Architecture.
                    </p>
                </div>
            </div>

          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}