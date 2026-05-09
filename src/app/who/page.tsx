"use client";

import {
  FaLaptopCode,
  FaServer,
  FaDatabase,
  FaChartLine,
  FaBasketballBall,
  FaUserTie,
  FaGraduationCap,
  FaCreditCard,
  FaCode,
  FaShoppingBag,
  FaHandshake,
  FaHeadset,
} from "react-icons/fa";
import { Reveal } from "@/components/ui/Reveal";

export default function WhoPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-1 w-full pt-14 md:pt-20 px-4 md:px-12">
        {/* 1. INTRODUCCIÓN */}
        <section className="mb-16 text-center md:text-left relative">
          <Reveal>
            <h1 className="font-display text-6xl md:text-4xl font-black text-slate-900 dark:text-white mb-4 leading-tight -mt-1">
              Código, Analisis de Datos <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                & Estrategia de Negocios.
              </span>
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="space-y-6 text-lg text-slate-600 dark:text-slate-400 max-w-4xl leading-relaxed text-justify md:text-left">
              <p>
                Soy una persona{" "}
                <strong>proactiva, comprometida y responsable</strong> en mis
                proyectos. Soy capaz de desarrollar tareas grupales potenciando
                habilidades individuales. Actualmente, estoy en constante
                capacitación en la toma de decisiones basadas en datos para la
                identificación de oportunidades de mejora, tendencias y
                predicción de actos futuros que impulsen el crecimiento en las
                diversas áreas de la empresa.
              </p>
              <p>
                He desarrollado una sólida comprensión de las necesidades del
                negocio y la gestión de clientes. Hoy estoy ampliando mi perfil
                como estudiante de{" "}
                <strong>Desarrollo y Calidad de Software en la UNSTA</strong>,
                proyectando una visión de Analista de Datos y Backend con{" "}
                <strong>Node.js & Express</strong>.
              </p>

              <Reveal width="100%" delay={0.1}>
                <div className="h-full min-h-[250px] flex flex-col bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-2 group">
                  <div className="w-14 h-14 bg-blue-50 dark:bg-blue-950 rounded-2xl flex items-center justify-center text-blue-600 dark:text-blue-400 mb-6 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                    <FaLaptopCode size={28} />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-blue-700 dark:group-hover:text-blue-400 transition-colors">
                    FullStack Web Developer
                  </h3>
                  <p className="text-slate-500 dark:text-slate-400 leading-relaxed text-sm flex-1">
                    Egresado de <strong>Rolling Code School</strong> como Full
                    Stack Developer. Domino el stack <strong>MERN</strong>{" "}
                    (MongoDB, Express, React, Node.js) para construir
                    aplicaciones web completas.
                  </p>
                </div>
              </Reveal>
              
              <p>
                Aplico mis conocimientos en{" "}
                <strong>Power BI, SQL Server, Excel y Figma</strong> para
                transformar la información en decisiones estratégicas.
              </p>

              <Reveal width="100%" delay={0.2}>
                <div className="h-full min-h-[250px] flex flex-col bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-2 group">
                  <div className="w-14 h-14 bg-green-50 dark:bg-green-950 rounded-2xl flex items-center justify-center text-green-600 dark:text-green-400 mb-6 group-hover:scale-110 group-hover:bg-green-600 group-hover:text-white transition-all duration-300">
                    <FaChartLine size={28} />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-green-700 dark:group-hover:text-green-400 transition-colors">
                    Data Analytics
                  </h3>
                  <p className="text-slate-500 dark:text-slate-400 leading-relaxed text-sm flex-1">
                    Formado en <strong>CoderHouse</strong>. Me especializo en
                    transformar datos crudos en valor estratégico utilizando{" "}
                    <strong>SQL, Excel y Power BI</strong>.
                  </p>
                </div>
              </Reveal>
            </div>
          </Reveal>
        </section>

        {/* 2. PERFIL (Tarjetas Superiores) */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-24">
          <Reveal width="100%" delay={0.3}>
            <div className="h-full min-h-[350px] flex flex-col bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-2 group">
              <div className="w-14 h-14 bg-purple-50 dark:bg-purple-950 rounded-2xl flex items-center justify-center text-purple-600 dark:text-purple-400 mb-6 group-hover:scale-110 group-hover:bg-purple-600 group-hover:text-white transition-all duration-300">
                <FaUserTie size={28} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-purple-700 dark:group-hover:text-purple-400 transition-colors">
                Business & Sales
              </h3>
              <p className="text-slate-500 dark:text-slate-400 leading-relaxed text-sm flex-1">
                Formado en la práctica en <strong>Tarjeta Titanio</strong>. Mi
                perfil combina la <strong>negociación estratégica</strong> con
                la gestión de clientes B2B.
              </p>
            </div>
          </Reveal>

          <Reveal width="100%" delay={0.4}>
            <div className="h-full min-h-[350px] flex flex-col bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-2 group">
              <div className="w-14 h-14 bg-orange-50 dark:bg-orange-950 rounded-2xl flex items-center justify-center text-orange-600 dark:text-orange-400 mb-6 group-hover:scale-110 group-hover:bg-orange-600 group-hover:text-white transition-all duration-300">
                <FaBasketballBall size={28} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-orange-700 dark:group-hover:text-orange-400 transition-colors">
                Mindset & Basket
              </h3>
              <p className="text-slate-500 dark:text-slate-400 leading-relaxed text-sm flex-1">
                Transformé mi pasión por el básquet en un emprendimiento real.
                Disciplina y constancia de un atleta de alto rendimiento.
              </p>
            </div>
          </Reveal>
        </section>

        {/* 3. STACK TECNOLÓGICO */}
        <section className="mb-24">
          <Reveal>
            <h2 className="font-display text-3xl font-bold text-slate-900 dark:text-white mb-8">
              Stack Tecnológico
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="flex flex-wrap gap-4">
              {[
                { name: "JavaScript", icon: FaLaptopCode, color: "bg-yellow-100 text-yellow-800" },
                { name: "TypeScript", icon: FaLaptopCode, color: "bg-blue-100 text-blue-800" },
                { name: "React", icon: FaLaptopCode, color: "bg-cyan-100 text-cyan-800" },
                { name: "Node.js", icon: FaServer, color: "bg-green-100 text-green-800" },
                { name: "MongoDB", icon: FaDatabase, color: "bg-green-100 text-green-800" },
                { name: "SQL Server", icon: FaDatabase, color: "bg-slate-100 text-slate-800" },
                { name: "Power BI", icon: FaChartLine, color: "bg-yellow-100 text-yellow-800" },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className={`flex items-center gap-3 px-6 py-4 rounded-2xl font-bold ${item.color} shadow-sm transition-transform hover:-translate-y-1`}
                >
                  <item.icon />
                  {item.name}
                </div>
              ))}
            </div>
          </Reveal>
        </section>

        {/* 4. EXPERIENCIA */}
        <section className="mb-32">
          <Reveal>
            <h2 className="font-display text-3xl font-bold text-slate-900 dark:text-white mb-10 flex items-center gap-3">
              <FaGraduationCap className="text-blue-600" /> Formación Académica
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Reveal width="100%" delay={0.1}>
              <div className="h-full p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-2">
                <span className="text-xs font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                  2024 - 2026
                </span>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-4">
                  Desarrollo de Software
                </h3>
                <p className="text-slate-500 mt-2">UNSTA</p>
              </div>
            </Reveal>

            <Reveal width="100%" delay={0.2}>
              <div className="h-full p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-2">
                <span className="text-xs font-bold text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full">
                  2025 - 2026
                </span>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-4">
                  Backend Architecture
                </h3>
                <p className="text-slate-500 mt-2">CoderHouse</p>
              </div>
            </Reveal>
          </div>
        </section>
      </div>
    </div>
  );
}
