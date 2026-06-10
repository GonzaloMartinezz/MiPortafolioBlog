"use client";

import {
  FaMapMarkerAlt,
  FaBasketballBall,
  FaHeart,
  FaLaptopCode,
} from "react-icons/fa";

export default function AboutContent() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-900">
      <div className="flex-1 max-w-4xl mx-auto w-full px-4 sm:px-6 py-12 md:py-20">

        {/* 1. INTRODUCTION */}
        <section className="mb-20">
          <span className="inline-block px-3 py-1 mb-6 text-[11px] font-bold tracking-[0.2em] text-blue-400 uppercase bg-blue-950/40 rounded-full border border-blue-800/40">
            Historia personal
          </span>
          <h1
            data-toc
            data-toc-title="Sobre Mí"
            className="font-display text-4xl md:text-4xl lg:text-5xl font-black text-slate-100 mb-6 leading-tight"
          >
            Más que código: <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              Datos, Familia & Basket.
            </span>
          </h1>

          <div className="grid md:grid-cols-2 gap-12 text-slate-400 leading-relaxed text-base md:text-lg">
            <div className="space-y-5">
              <p>
                Soy{" "}
                <strong className="text-slate-200">Gonzalo Martínez</strong>, de{" "}
                <strong className="text-slate-200">
                  San Miguel de Tucumán
                </strong>
                . Me apasiona entender cómo funcionan las cosas, ya sea una
                arquitectura de datos compleja o una estrategia defensiva en la
                NBA.
              </p>
              <p>
                Trabajo en una{" "}
                <strong className="text-slate-200">
                  empresa de tarjetas de crédito
                </strong>{" "}
                donde analizo datos y diseño estrategias comerciales, mientras
                dedico mis noches a construir software robusto. Empecé con el
                stack MERN, pero mi curiosidad me llevó a explorar arquitecturas
                empresariales con{" "}
                <strong className="text-slate-200">.NET y C#</strong>.
              </p>
            </div>

            {/* Personal Facts */}
            <div className="bg-slate-800/40 p-6 md:p-8 rounded-2xl border border-slate-700/50 space-y-4 text-base">
              <div className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-blue-400 flex-shrink-0" />
                <span>Tucumán, Argentina</span>
              </div>
              <div className="flex items-center gap-3">
                <FaBasketballBall className="text-orange-400 flex-shrink-0" />
                <span>
                  Fan de la NBA —{" "}
                  <strong className="text-slate-200">Boston Celtics</strong> ☘️
                </span>
              </div>
              <div className="flex items-center gap-3">
                <FaHeart className="text-red-400 flex-shrink-0" />
                <span>
                  Mi familia: padres, hermana, novia y mi perro 🐕
                </span>
              </div>
              <div className="flex items-center gap-3">
                <FaLaptopCode className="text-emerald-400 flex-shrink-0" />
                <span>
                  Desarrollando una app dental para el consultorio de mis padres
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* 2. TECH STACK */}
        <section className="mb-20">
          <h2
            data-toc
            data-toc-title="Stack Tecnológico"
            className="font-display text-2xl md:text-2xl lg:text-3xl font-black text-slate-100 mb-6 border-b border-slate-800 pb-3"
          >
            Arsenal Tecnológico
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {[
              "JavaScript (ES6+)",
              "TypeScript",
              "React & Next.js",
              "Node.js & Express",
              "C# & .NET",
              "SQL Server",
              "MongoDB",
              "Docker",
            ].map((tech) => (
              <div
                key={tech}
                className="bg-slate-800/30 border border-slate-700/50 p-4 rounded-xl text-center hover:bg-slate-800 transition hover:border-blue-500/30 cursor-default group"
              >
                <span className="text-slate-300 group-hover:text-blue-300 font-mono text-sm transition-colors">
                  {tech}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* 3. TIMELINE */}
        <section>
          <h2
            data-toc
            data-toc-title="Trayectoria"
            className="font-display text-2xl md:text-2xl lg:text-3xl font-black text-slate-100 mb-8 border-b border-slate-800 pb-3"
          >
            Trayectoria
          </h2>

          <div className="space-y-12 border-l border-slate-800 ml-3 md:ml-0">
            {/* Current */}
            <div className="relative pl-8 md:pl-0 md:grid md:grid-cols-5 md:gap-10 group">
              <div className="md:col-span-1 py-1">
                <span className="text-blue-400 font-mono text-sm">
                  2024 — Hoy
                </span>
              </div>
              <div className="md:col-span-4 relative">
                <div className="absolute -left-[41px] md:-left-[45px] top-2 w-4 h-4 rounded-full bg-blue-500 ring-4 ring-slate-900" />
                <h3 className="text-xl font-bold text-slate-100">
                  Analista & Desarrollador
                </h3>
                <p className="text-sm text-slate-500 mb-4">
                  Empresa de Tarjetas de Crédito • Tucumán
                </p>
                <p className="text-slate-400 leading-relaxed mb-4">
                  Combino análisis de datos con desarrollo de herramientas
                  internas. Propongo estrategias de marketing digital basadas en
                  insights de datos y automatizo procesos críticos del negocio.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2.5 py-1 rounded-lg bg-blue-900/20 text-blue-300 text-xs border border-blue-900/30 font-medium">
                    Data Analysis
                  </span>
                  <span className="px-2.5 py-1 rounded-lg bg-blue-900/20 text-blue-300 text-xs border border-blue-900/30 font-medium">
                    Marketing Digital
                  </span>
                </div>
              </div>
            </div>

            {/* Dental System */}
            <div className="relative pl-8 md:pl-0 md:grid md:grid-cols-5 md:gap-10 group">
              <div className="md:col-span-1 py-1">
                <span className="text-slate-500 font-mono text-sm">
                  Dic 2025
                </span>
              </div>
              <div className="md:col-span-4 relative">
                <div className="absolute -left-[41px] md:-left-[45px] top-2 w-4 h-4 rounded-full bg-slate-700 ring-4 ring-slate-900 group-hover:bg-blue-400 transition" />
                <h3 className="text-xl font-bold text-slate-200">
                  Sistema de Gestión Dental
                </h3>
                <p className="text-sm text-slate-500 mb-4">
                  Proyecto Familiar • Freelance
                </p>
                <p className="text-slate-400 leading-relaxed">
                  Solución completa para la gestión de pacientes y turnos del
                  consultorio de mis padres. Backend robusto con Node.js y API
                  REST, frontend interactivo en React con panel administrativo.
                </p>
              </div>
            </div>

            {/* Academic Project */}
            <div className="relative pl-8 md:pl-0 md:grid md:grid-cols-5 md:gap-10 group">
              <div className="md:col-span-1 py-1">
                <span className="text-slate-500 font-mono text-sm">
                  Nov 2025
                </span>
              </div>
              <div className="md:col-span-4 relative">
                <div className="absolute -left-[41px] md:-left-[45px] top-2 w-4 h-4 rounded-full bg-slate-700 ring-4 ring-slate-900 group-hover:bg-blue-400 transition" />
                <h3 className="text-xl font-bold text-slate-200">
                  API RESTful — NBA Stats
                </h3>
                <p className="text-sm text-slate-500 mb-4">
                  Proyecto Académico Final • UNSTA
                </p>
                <p className="text-slate-400 leading-relaxed">
                  API temática de la NBA con contenedores Docker y MongoDB para
                  el manejo de grandes volúmenes de estadísticas deportivas.
                  Documentación completa con Swagger.
                </p>
              </div>
            </div>

            {/* .NET */}
            <div className="relative pl-8 md:pl-0 md:grid md:grid-cols-5 md:gap-10 group">
              <div className="md:col-span-1 py-1">
                <span className="text-slate-500 font-mono text-sm">
                  Oct 2025
                </span>
              </div>
              <div className="md:col-span-4 relative">
                <div className="absolute -left-[41px] md:-left-[45px] top-2 w-4 h-4 rounded-full bg-slate-700 ring-4 ring-slate-900 group-hover:bg-blue-400 transition" />
                <h3 className="text-xl font-bold text-slate-200">
                  Especialización Backend .NET
                </h3>
                <p className="text-sm text-slate-500 mb-4">
                  CoderHouse • Curso Intensivo
                </p>
                <p className="text-slate-400 leading-relaxed">
                  Desarrollo del sistema TurnoMedico: C#, Entity Framework Core,
                  patrón DTO, AutoMapper y documentación con Swagger.
                  Arquitectura limpia orientada a producción.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
