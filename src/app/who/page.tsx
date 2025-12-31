import type { Metadata } from "next";
import Navbar from "@/components/ui/Navbar"; // (Opcional: Si ya lo tienes en layout, bórralo de aquí)
import { FaLaptopCode, FaServer, FaDatabase, FaDocker, FaChartLine, FaBasketballBall, FaUserTie } from "react-icons/fa";

export const metadata: Metadata = {
  title: "¿Quién soy? | Gonzalo Martínez",
};

export default function WhoPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1 w-full py-12 md:py-20 animate-fade-in-up">
        
        {/* 1. INTRODUCCIÓN (Expandida con datos del CV) */}
        <section className="mb-20 text-center md:text-left">
          <h1 className="font-display text-5xl md:text-7xl font-black text-slate-900 mb-8 leading-tight">
            Datos, Código <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
              & Estrategia.
            </span>
          </h1>
          
          <div className="space-y-6 text-lg text-slate-600 max-w-3xl leading-relaxed">
            <p>
              Soy una persona <strong className="text-slate-900">proactiva y comprometida</strong>. Mi enfoque profesional combina dos mundos: el desarrollo de software escalable y el análisis de datos para la toma de decisiones estratégicas.
            </p>
            <p>
              Actualmente, me dedico a identificar oportunidades de mejora y predecir tendencias futuras mediante el modelado de datos, mientras continúo mi formación académica en la <strong className="text-slate-900">UNSTA</strong> (Desarrollo y Calidad de Software).
            </p>
            <p>
                Busco transformar datos brutos en <i>insights</i> accionables y diseños en experiencias digitales fluidas.
            </p>
          </div>
        </section>

        {/* 2. TARJETAS DE PERFIL (Grid Dinámico) */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-24">
            {/* Tarjeta 1: El Developer & Analista */}
            <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm card-hover group transition-all duration-300">
                <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-6 group-hover:scale-110 transition">
                    <FaLaptopCode size={24} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3"> Web Developer 🙋🏼‍♂️</h3>
                <p className="text-slate-500 leading-relaxed text-sm">
                    Formado en <strong>Rolling Code School</strong>. Me especializo en la arquitectura de software frontend (React/Next.js) así como en la arquitectura de software backend robusta (.NET/Node.js) para crear soluciones que no solo funcionen, sino que aporten valor al negocio.
                </p>
            </div>

               <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm card-hover group transition-all duration-300">
                <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-6 group-hover:scale-110 transition">
                    <FaLaptopCode size={24} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3"> Data Analyst 🙋🏼‍♂️</h3>
                <p className="text-slate-500 leading-relaxed text-sm">
                    Formado en <strong>CoderHouse</strong>. Me especializo en la inspección, limpieza y transformación de datos, para crear soluciones que no solo funcionen , sino que aporten valor al negocio.
                </p>
            </div>

              <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm card-hover group transition-all duration-300">
                <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-6 group-hover:scale-110 transition">
                    <FaLaptopCode size={24} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">Customer service & Sales executive</h3>
                <p className="text-slate-500 leading-relaxed text-sm">
                    Formado en <strong>Tarjeta Titanio S.A</strong>. Me especializo en la atención al cliente y ventas, para crear soluciones que no solo funcionen , sino que aporten valor al negocio.
                </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm card-hover group transition-all duration-300">
                <div className="w-12 h-12 bg-orange-50 rounded-2xl flex items-center justify-center text-orange-600 mb-6 group-hover:scale-110 transition">
                    <FaBasketballBall size={24} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">Mindset & Basket 🙋🏼‍♂️</h3>
                <p className="text-slate-500 leading-relaxed text-sm">
                    Liderar equipos en mis emprendimientos me enseñó resiliencia y negociación La disciplina del deporte la aplico a cada sprint de código y análisis de datos.
                </p>
            </div>
        </section>

        <section className="mb-24">
            <h2 className="font-display text-3xl font-bold text-slate-900 mb-8">Algunos de mis conocimientos tecnicos.</h2>
            <div className="flex flex-wrap gap-4">
                {[
                    { name: "JavaScript", icon: FaLaptopCode, color: "bg-yellow-100 text-yellow-700" },
                    { name: "TypeScript", icon: FaLaptopCode, color: "bg-blue-100 text-blue-700" },
                    { name: "React", icon: FaLaptopCode, color: "bg-cyan-100 text-cyan-700" },
                    { name: "Node.js", icon: FaLaptopCode, color: "bg-green-100 text-green-700" },
                    { name: "Next.js", icon: FaLaptopCode, color: "bg-slate-100 text-slate-700" },
                    { name: "C# / .NET", icon: FaServer, color: "bg-purple-100 text-purple-700" },
                    { name: "MongoDB", icon: FaDatabase, color: "bg-green-100 text-green-700" },
                    { name: "Postman", icon: FaDatabase, color: "bg-orange-100 text-orange-700" },
                    { name: "Data Analysis", icon: FaChartLine, color: "bg-green-100 text-green-700" },
                    { name: "SQL Server", icon: FaDatabase, color: "bg-slate-100 text-slate-700" },
                    { name: "Power BI", icon: FaDatabase, color: "bg-slate-100 text-slate-700" },
                    { name: "Excel", icon: FaChartLine, color: "bg-green-100 text-green-700" },

                ].map((item, idx) => (
                    <div key={idx} className={`flex items-center gap-3 px-6 py-4 rounded-2xl font-bold ${item.color} card-hover cursor-default transition-transform hover:-translate-y-1`}>
                        <item.icon />
                        {item.name}
                    </div>
                ))}
            </div>
        </section>

        {/* 4. TRAYECTORIA PROFESIONAL (Datos Reales del CV) */}
        <section>
            <h2 className="font-display text-3xl font-bold text-slate-900 mb-10 flex items-center gap-3">
                <FaUserTie className="text-blue-600" /> Experiencia Profesional / Trayectoria
            </h2>
            
            <div className="space-y-8 border-l-2 border-slate-100 ml-3 pl-8 md:pl-0 md:border-none md:ml-0">
                
                {/* EXPERIENCIA 1: TARJETA TITANIO */}
                <div className="group md:flex gap-10 items-start p-6 rounded-3xl hover:bg-blue-200 hover:shadow-xl transition-all duration-300 border border-transparent hover:border-slate-100">
                    <div className="mb-2 md:mb-0 md:w-32 pt-1 font-mono text-sm text-blue-600 font-bold">2025 - HOY</div>
                    <div className="flex-1">
                        <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition">Tarjeta Titanio S.A.</h3>
                        <p className="text-sm font-bold border-sky-500 text-sky-500 mb-3 uppercase tracking-wide">Ejecutivo Comercial & Analista de Datos</p>
                        <ul className="text-slate-600 text-sm leading-relaxed list-disc ml-4 space-y-1">
                            <li>Gestión del ciclo de vida de datos: inspección, limpieza y modelado de información de comercios.</li>
                            <li>Traducción de datos brutos en <i>insights</i> accionables para estrategias comerciales.</li>
                            <li>Gestión integral de documentación y validación en Bases de Datos.</li>
                        </ul>
                    </div>
                </div>

                {/* EXPERIENCIA 2: FREELANCER */}
                <div className="group md:flex gap-10 items-start p-6 rounded-3xl hover:bg-blue-200 hover:shadow-xl transition-all duration-300 border border-transparent hover:border-slate-100">
                    <div className="mb-2 md:mb-0 md:w-32 pt-1 font-mono text-sm text-slate-400">2024 - HOY</div>
                    <div className="flex-1">
                        <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition">Desarrollador Web Freelance</h3>
                        <p className="text-sm font-bold border-sky-500 text-sky-500  mb-3 uppercase tracking-wide">Frontend & Backend</p>
                        <p className="text-slate-600 text-sm leading-relaxed">
                            Transformo diseños en experiencias digitales responsivas utilizando <strong>React, Node.js, Express y MongoDB</strong>. Desarrollo completo desde la maquetación hasta la implementación de funcionalidades complejas.
                        </p>
                    </div>
                </div>

                {/* EXPERIENCIA 3: MALIBU STYLE */}
                <div className="group md:flex gap-10 items-start p-6 rounded-3xl hover:bg-blue-200 hover:shadow-xl transition-all duration-300 border border-transparent hover:border-slate-100">
                    <div className="mb-2 md:mb-0 md:w-32 pt-1 font-mono text-sm text-slate-400">2024 - 2025</div>
                    <div className="flex-1">
                        <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition">Malibu.Style</h3>
                        <p className="text-sm font-bold border-sky-500 text-sky-500  mb-3 uppercase tracking-wide">CEO & Founder (E-commerce)</p>
                        <p className="text-slate-600 text-sm leading-relaxed">
                            Construcción de marca online y liderazgo de equipo. Definición de identidad de marca dirigida a público joven y gestión de estrategias de posicionamiento y ventas de indumentaria deportiva.
                        </p>
                    </div>
                </div>

                {/* EXPERIENCIA 4: AMWAY */}
                <div className="group md:flex gap-10 items-start p-6 rounded-3xl hover:bg-blue-200 hover:shadow-xl transition-all duration-300 border border-transparent hover:border-slate-100">
                    <div className="mb-2 md:mb-0 md:w-32 pt-1 font-mono text-sm text-slate-400">2024</div>
                    <div className="flex-1">
                        <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition">Amway Arg</h3>
                        <p className="text-sm font-bold border-sky-500 text-sky-500 mb-3 uppercase tracking-wide">Empresario - Autónomo</p>
                        <p className="text-slate-600 text-sm leading-relaxed">
                            Formación en liderazgo y network marketing. Fortalecimiento de habilidades de oratoria, motivación de grupos y cumplimiento de objetivos de ventas mensuales.
                        </p>
                    </div>
                </div>

            </div>
        </section>

      </main>
    </div>
  );
}