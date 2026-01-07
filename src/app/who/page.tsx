"use client";

import { FaLaptopCode, FaServer, FaDatabase, FaChartLine, FaBasketballBall, FaUserTie } from "react-icons/fa";
import { Reveal } from "@/components/ui/Reveal";

export default function WhoPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* CORRECCIÓN 1: pt-24 para que el Navbar no tape el título */}
      <main className="flex-1 w-full pt-24 pb-20 px-4 md:px-12">
        
        {/* 1. INTRODUCCIÓN */}
        <section className="mb-20 text-center md:text-left relative">
          <Reveal>
            {/* CORRECCIÓN 1: Quitamos el -mt excesivo para que no se corte arriba */}
            <h1 className="font-display text-5xl md:text-7xl font-black text-slate-900 mb-8 leading-tight">
                Datos, Código <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                & Estrategia.
                </span>
            </h1>
          </Reveal>
          
          <Reveal delay={0.2}>
            <div className="space-y-6 text-lg text-slate-600 max-w-3xl leading-relaxed">
                <p>
                Soy una persona <strong className="text-slate-900">proactiva y comprometida</strong>. Mi enfoque profesional combina dos mundos: el desarrollo de software escalable y el análisis de datos para la toma de decisiones estratégicas.
                </p>
                <p>
                Actualmente, me dedico a identificar oportunidades de mejora y predecir tendencias futuras mediante el modelado de datos, mientras continúo mi formación académica en la <strong className="text-slate-900">UNSTA</strong> (Desarrollo y Calidad de Software).
                </p>
            </div>
          </Reveal>
        </section>

        {/* 2. TARJETAS DE PERFIL (Todas del mismo tamaño) */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-24">
            
            {/* Tarjeta 1 */}
            <Reveal width="100%" delay={0.1}>
                {/* CORRECCIÓN 2: 'h-full flex flex-col' para igualar alturas */}
                <div className="h-full flex flex-col bg-white p-8 rounded-3xl border border-slate-100 shadow-sm card-hover group transition-all duration-300">
                    <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-6 group-hover:scale-110 transition">
                        <FaLaptopCode size={24} />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-3"> Web Developer 🙋🏼‍♂️</h3>
                    <p className="text-slate-500 leading-relaxed text-sm flex-1">
                        Formado en <strong>Rolling Code School</strong>. Me especializo en la arquitectura de software frontend (React/Next.js) así como en backend robusto (.NET/Node.js) para crear soluciones que aporten valor.
                    </p>
                </div>
            </Reveal>

            {/* Tarjeta 2 */}
            <Reveal width="100%" delay={0.2}>
                <div className="h-full flex flex-col bg-white p-8 rounded-3xl border border-slate-100 shadow-sm card-hover group transition-all duration-300">
                    <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-6 group-hover:scale-110 transition">
                        <FaChartLine size={24} /> {/* Icono corregido para Datos */}
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-3"> Data Analyst 📊</h3>
                    <p className="text-slate-500 leading-relaxed text-sm flex-1">
                        Formado en <strong>CoderHouse</strong>. Me especializo en la inspección, limpieza y transformación de datos, para crear insights que guíen la toma de decisiones.
                    </p>
                </div>
            </Reveal>

            {/* Tarjeta 3 */}
            <Reveal width="100%" delay={0.3}>
                <div className="h-full flex flex-col bg-white p-8 rounded-3xl border border-slate-100 shadow-sm card-hover group transition-all duration-300">
                    <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-6 group-hover:scale-110 transition">
                        <FaUserTie size={24} /> {/* Icono corregido para Ventas */}
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-3">Customer Service & Sales</h3>
                    <p className="text-slate-500 leading-relaxed text-sm flex-1">
                        Formado en <strong>Tarjeta Titanio S.A</strong>. Me especializo en la atención al cliente y ventas, garantizando una experiencia de usuario excelente y cumplimiento de objetivos.
                    </p>
                </div>
            </Reveal>

            {/* Tarjeta 4 */}
            <Reveal width="100%" delay={0.4}>
                <div className="h-full flex flex-col bg-white p-8 rounded-3xl border border-slate-100 shadow-sm card-hover group transition-all duration-300">
                    <div className="w-12 h-12 bg-orange-50 rounded-2xl flex items-center justify-center text-orange-600 mb-6 group-hover:scale-110 transition">
                        <FaBasketballBall size={24} />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-3">Mindset & Basket 🏀</h3>
                    <p className="text-slate-500 leading-relaxed text-sm flex-1">
                        Liderar equipos en mis emprendimientos me enseñó resiliencia y negociación. La disciplina del deporte la aplico a cada sprint de código y análisis.
                    </p>
                </div>
            </Reveal>
        </section>

        {/* 3. CONOCIMIENTOS TÉCNICOS */}
        <section className="mb-24">
            <Reveal>
                <h2 className="font-display text-3xl font-bold text-slate-900 mb-8">Algunos de mis conocimientos técnicos.</h2>
            </Reveal>
            
            <Reveal delay={0.2}>
                <div className="flex flex-wrap gap-3 md:gap-4">
                    {[
                        { name: "JavaScript", icon: FaLaptopCode, color: "bg-yellow-100 text-yellow-700" },
                        { name: "TypeScript", icon: FaLaptopCode, color: "bg-blue-100 text-blue-700" },
                        { name: "React", icon: FaLaptopCode, color: "bg-cyan-100 text-cyan-700" },
                        { name: "Node.js", icon: FaLaptopCode, color: "bg-green-100 text-green-700" },
                        { name: "Next.js", icon: FaLaptopCode, color: "bg-slate-100 text-slate-700" },
                        { name: "C# / .NET", icon: FaServer, color: "bg-purple-100 text-purple-700" },
                        { name: "MongoDB", icon: FaDatabase, color: "bg-green-100 text-green-700" },
                        { name: "Postman", icon: FaServer, color: "bg-orange-100 text-orange-700" },
                        { name: "Data Analysis", icon: FaChartLine, color: "bg-green-100 text-green-700" },
                        { name: "SQL Server", icon: FaDatabase, color: "bg-slate-100 text-slate-700" },
                        { name: "Power BI", icon: FaChartLine, color: "bg-yellow-100 text-yellow-800" },
                        { name: "Excel", icon: FaChartLine, color: "bg-green-100 text-green-700" },

                    ].map((item, idx) => (
                        <div key={idx} className={`flex items-center gap-2 md:gap-3 px-4 md:px-6 py-3 md:py-4 text-xs md:text-sm rounded-2xl font-bold ${item.color} card-hover cursor-default transition-transform hover:-translate-y-1`}>
                            <item.icon />
                            {item.name}
                        </div>
                    ))}
                </div>
            </Reveal>
        </section>

        {/* 4. TRAYECTORIA PROFESIONAL */}
        <section>
            <Reveal>
                <h2 className="font-display text-3xl font-bold text-slate-900 mb-10 flex items-center gap-3">
                    <FaUserTie className="text-blue-600" /> Experiencia Profesional
                </h2>
            </Reveal>
            
            <div className="space-y-8 border-l-2 border-slate-100 ml-3 pl-8 md:pl-0 md:border-none md:ml-0">
                
                {/* EXPERIENCIA 1 */}
                <Reveal width="100%" delay={0.1}>
                    <div className="group md:flex gap-10 items-start p-6 rounded-3xl hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-slate-100 relative">
                        <div className="hidden md:block w-32 pt-1 font-mono text-sm text-blue-600 font-bold">2025 - HOY</div>
                        <div className="flex-1">
                            <span className="md:hidden font-mono text-xs text-blue-600 font-bold mb-1 block">2025 - HOY</span>
                            <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition">Tarjeta Titanio S.A.</h3>
                            <p className="text-sm font-bold text-sky-500 mb-3 uppercase tracking-wide">Ejecutivo Comercial & Analista</p>
                            <ul className="text-slate-600 text-sm leading-relaxed list-disc ml-4 space-y-1">
                                <li>Gestión del ciclo de vida de datos y modelado.</li>
                                <li>Traducción de datos en <i>insights</i> para estrategias comerciales.</li>
                                <li>Validación en Bases de Datos.</li>
                            </ul>
                        </div>
                    </div>
                </Reveal>

                {/* EXPERIENCIA 2 */}
                <Reveal width="100%" delay={0.2}>
                    <div className="group md:flex gap-10 items-start p-6 rounded-3xl hover:bg-blue-50 hover:shadow-xl transition-all duration-300 border border-transparent hover:border-slate-100">
                        <div className="hidden md:block w-32 pt-1 font-mono text-sm text-slate-400">2024 - HOY</div>
                        <div className="flex-1">
                            <span className="md:hidden font-mono text-xs text-blue-600 font-bold mb-1 block">2024 - HOY</span>
                            <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition">Freelance Developer</h3>
                            <p className="text-sm font-bold text-sky-500 mb-3 uppercase tracking-wide">Frontend & Backend</p>
                            <p className="text-slate-600 text-sm leading-relaxed">
                                Desarrollo web responsivo con <strong>React, Node.js y MongoDB</strong>.
                            </p>
                        </div>
                    </div>
                </Reveal>

                {/* EXPERIENCIA 3 */}
                <Reveal width="100%" delay={0.3}>
                    <div className="group md:flex gap-10 items-start p-6 rounded-3xl hover:bg-blue-50 hover:shadow-xl transition-all duration-300 border border-transparent hover:border-slate-100">
                        <div className="hidden md:block w-32 pt-1 font-mono text-sm text-slate-400">2024 - 2025</div>
                        <div className="flex-1">
                            <span className="md:hidden font-mono text-xs text-blue-600 font-bold mb-1 block">2024 - 2025</span>
                            <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition">Malibu.Style</h3>
                            <p className="text-sm font-bold text-sky-500 mb-3 uppercase tracking-wide">CEO & Founder</p>
                            <p className="text-slate-600 text-sm leading-relaxed">
                                Liderazgo de equipo, gestión de marca y ventas de indumentaria deportiva.
                            </p>
                        </div>
                    </div>
                </Reveal>

                {/* EXPERIENCIA 4 */}
                <Reveal width="100%" delay={0.4}>
                    <div className="group md:flex gap-10 items-start p-6 rounded-3xl hover:bg-blue-50 hover:shadow-xl transition-all duration-300 border border-transparent hover:border-slate-100">
                        <div className="hidden md:block w-32 pt-1 font-mono text-sm text-slate-400">2024</div>
                        <div className="flex-1">
                            <span className="md:hidden font-mono text-xs text-blue-600 font-bold mb-1 block">2024</span>
                            <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition">Amway Arg</h3>
                            <p className="text-sm font-bold text-sky-500 mb-3 uppercase tracking-wide">Empresario - Autónomo</p>
                            <p className="text-slate-600 text-sm leading-relaxed">
                                Formación en liderazgo, oratoria y cumplimiento de objetivos de ventas.
                            </p>
                        </div>
                    </div>
                </Reveal>

            </div>
        </section>

      </main>
      
      {/* CORRECCIÓN 3: ELIMINÉ EL FOOTER DE AQUÍ.
          Se mostrará automáticamente el Footer global de layout.tsx */}
          
    </div>
  );
}