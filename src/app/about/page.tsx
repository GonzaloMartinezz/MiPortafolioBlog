import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import { FaMapMarkerAlt, FaBasketballBall, FaHeart, FaLaptopCode } from "react-icons/fa";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sobre Mí | Gonzalo Martínez",
  description: "Conoce mi historia, mi familia y mi trayectoria en programación.",
};
export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-900">
      <Navbar />
      
      <main className="flex-1 max-w-4xl mx-auto w-full px-6 py-12 md:py-20 animate-fade-in-up">
        
        {/* 1. ENCABEZADO: INTRODUCCIÓN PERSONAL */}
        <section className="mb-20">
          <h1 className="font-display text-4xl md:text-6xl font-bold text-slate-100 mb-8 leading-tight">
            Más que código: <br />
            <span className="text-blue-500">Datos, Familia y Basket.</span>
          </h1>

          <div className="grid md:grid-cols-2 gap-12 text-slate-400 leading-relaxed text-lg">
            <div className="space-y-4">
              <p>
                Hola, soy <strong className="text-slate-200">Gonzalo Martínez</strong>. Vivo en <strong className="text-slate-200">San Miguel de Tucumán</strong> y soy un apasionado por entender cómo funcionan las cosas, ya sea una base de datos compleja o una estrategia defensiva en la NBA.
              </p>
              <p>
                Actualmente trabajo en una <strong className="text-slate-200">empresa de tarjetas de crédito</strong> analizando datos y estrategias, mientras dedico mis noches a construir software robusto. Empecé con el stack MERN, pero mi curiosidad me llevó a especializarme en arquitecturas empresariales con <strong className="text-slate-200">.NET y C#</strong>.
              </p>
            </div>
            
            {/* DATOS CURIOSOS (LO PERSONAL) */}
            <div className="bg-slate-800/40 p-6 rounded-2xl border border-slate-700/50 space-y-4 text-base">
                <div className="flex items-center gap-3">
                    <FaMapMarkerAlt className="text-blue-400" />
                    <span>Tucumán, Argentina</span>
                </div>
                <div className="flex items-center gap-3">
                    <FaBasketballBall className="text-orange-500" />
                    <span>Fanático de la NBA (Aguante los <strong>Boston Celtics</strong> ☘️)</span>
                </div>
                <div className="flex items-center gap-3">
                    <FaHeart className="text-red-400" />
                    <span>Familia: Mis padres, mi hermana, mi novia y mi perro.</span>
                </div>
                <div className="flex items-center gap-3">
                    <FaLaptopCode className="text-green-400" />
                    <span>Creando una App Dental para mis viejos.</span>
                </div>
            </div>
          </div>
        </section>

        {/* 2. TECH STACK (Visual) */}
        <section className="mb-20">
            <h2 className="font-display text-2xl font-bold text-slate-100 mb-8 border-b border-slate-800 pb-2">
                Arsenal Tecnológico
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {["JavaScript (ES6+)", "TypeScript", "React & Next.js", "Node.js & Express", "C# & .NET", "SQL Server", "MongoDB", "Docker"].map((tech) => (
                    <div key={tech} className="bg-slate-800/30 border border-slate-700/50 p-4 rounded-lg text-center hover:bg-slate-800 transition hover:border-blue-500/30 cursor-default">
                        <span className="text-slate-300 font-mono text-sm">{tech}</span>
                    </div>
                ))}
            </div>
        </section>

        {/* 3. MI CAMINO (Timeline Detallado) */}
        <section>
          <h2 className="font-display text-2xl font-bold text-slate-100 mb-10 border-b border-slate-800 pb-2">
            Trayectoria
          </h2>
          
          <div className="space-y-12 border-l border-slate-800 ml-3 md:ml-0">
            
            {/* ITEM 1: Actualidad */}
            <div className="relative pl-8 md:pl-0 md:grid md:grid-cols-5 md:gap-10 group">
                <div className="md:col-span-1 py-1">
                    <span className="text-blue-400 font-mono text-sm">2024 - Hoy</span>
                </div>
                <div className="md:col-span-4 relative">
                    {/* Puntito timeline */}
                    <div className="absolute -left-[41px] md:-left-[45px] top-2 w-4 h-4 rounded-full bg-blue-500 ring-4 ring-slate-900"></div>
                    
                    <h3 className="text-xl font-bold text-slate-100">Analista & Desarrollador</h3>
                    <p className="text-sm text-slate-500 mb-4">Empresa de Tarjetas de Crédito • Tucumán</p>
                    <p className="text-slate-400 leading-relaxed mb-4">
                        Combino mi rol administrativo con el análisis de datos para proponer estrategias de marketing local (uso de influencers). Paralelamente, desarrollo herramientas internas y automatizaciones.
                    </p>
                    <div className="flex flex-wrap gap-2">
                        <span className="px-2 py-1 rounded bg-blue-900/20 text-blue-300 text-xs border border-blue-900/30">Data Analysis</span>
                        <span className="px-2 py-1 rounded bg-blue-900/20 text-blue-300 text-xs border border-blue-900/30">Marketing</span>
                    </div>
                </div>
            </div>

            {/* ITEM 2: Freelance Dental */}
            <div className="relative pl-8 md:pl-0 md:grid md:grid-cols-5 md:gap-10 group">
                <div className="md:col-span-1 py-1">
                    <span className="text-slate-500 font-mono text-sm">Dic 2025</span>
                </div>
                <div className="md:col-span-4 relative">
                    <div className="absolute -left-[41px] md:-left-[45px] top-2 w-4 h-4 rounded-full bg-slate-700 ring-4 ring-slate-900 group-hover:bg-blue-400 transition"></div>
                    <h3 className="text-xl font-bold text-slate-200">Sistema Consultorio Dental</h3>
                    <p className="text-sm text-slate-500 mb-4">Proyecto Familiar • Freelance</p>
                    <p className="text-slate-400 leading-relaxed">
                        Desarrollo de una solución completa para la gestión de pacientes y turnos del consultorio de mis padres. Backend robusto en Node.js y Frontend en React.
                    </p>
                </div>
            </div>

            {/* ITEM 3: Seminario / NBA */}
            <div className="relative pl-8 md:pl-0 md:grid md:grid-cols-5 md:gap-10 group">
                <div className="md:col-span-1 py-1">
                    <span className="text-slate-500 font-mono text-sm">Nov 2025</span>
                </div>
                <div className="md:col-span-4 relative">
                    <div className="absolute -left-[41px] md:-left-[45px] top-2 w-4 h-4 rounded-full bg-slate-700 ring-4 ring-slate-900 group-hover:bg-blue-400 transition"></div>
                    <h3 className="text-xl font-bold text-slate-200">Seminario Informático III</h3>
                    <p className="text-sm text-slate-500 mb-4">Proyecto Académico Final</p>
                    <p className="text-slate-400 leading-relaxed">
                        Creación de una API RESTful temática de la NBA (¡mi pasión!). Implementación de contenedores Docker y MongoDB para manejar grandes volúmenes de estadísticas deportivas.
                    </p>
                </div>
            </div>

             {/* ITEM 4: .NET */}
             <div className="relative pl-8 md:pl-0 md:grid md:grid-cols-5 md:gap-10 group">
                <div className="md:col-span-1 py-1">
                    <span className="text-slate-500 font-mono text-sm">Oct 2025</span>
                </div>
                <div className="md:col-span-4 relative">
                    <div className="absolute -left-[41px] md:-left-[45px] top-2 w-4 h-4 rounded-full bg-slate-700 ring-4 ring-slate-900 group-hover:bg-blue-400 transition"></div>
                    <h3 className="text-xl font-bold text-slate-200">Especialización Backend .NET</h3>
                    <p className="text-sm text-slate-500 mb-4">Curso Intensivo</p>
                    <p className="text-slate-400 leading-relaxed">
                        Desarrollo del sistema 'TurnoMedico'. Aprendizaje profundo de C#, Entity Framework Core, DTOs, AutoMapper y documentación con Swagger.
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