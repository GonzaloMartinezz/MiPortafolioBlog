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
import { motion } from "framer-motion";

export default function WhoPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-1 w-full pt-14 md:pt-20 px-4 md:px-12">
        {/* 1. INTRODUCCIÓN */}
        <section className="mb-20 text-center md:text-left relative">
          <Reveal>
            <span className="inline-block px-3 py-1 mb-6 text-[11px] font-bold tracking-[0.2em] text-blue-600 dark:text-blue-400 uppercase bg-blue-50 dark:bg-blue-950/40 rounded-full border border-blue-100 dark:border-blue-800/40">
              Sobre mí
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white mb-4 leading-tight -mt-1">
              Código, Datos <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                & Visión de Negocio.
              </span>
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="space-y-6 text-base md:text-lg text-slate-600 dark:text-slate-400 max-w-4xl leading-relaxed text-justify md:text-left">
              <p>
                Soy un profesional{" "}
                <strong className="text-slate-900 dark:text-white">proactivo, comprometido y orientado a resultados</strong>.
                Combino habilidades técnicas con visión estratégica para entregar
                soluciones que generan impacto real. Actualmente, me especializo en la
                toma de decisiones basada en datos, identificando oportunidades de
                crecimiento, tendencias de mercado y patrones predictivos que impulsan
                la evolución de los negocios.
              </p>

              <Reveal width="100%" delay={0.1}>
                <div className="h-full min-h-[250px] flex flex-col bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-2 group hover-glow">
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-blue-50 dark:bg-blue-950/40 rounded-2xl flex items-center justify-center text-blue-600 dark:text-blue-400 mb-6 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                    <FaLaptopCode className="text-2xl md:text-3xl" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    Full Stack Web Developer
                  </h3>
                  <p className="text-slate-500 dark:text-slate-400 leading-relaxed text-sm flex-1">
                    Egresado de <strong className="text-slate-700 dark:text-slate-300">Rolling Code School</strong> como
                    Desarrollador Full Stack. Domino el ecosistema{" "}
                    <strong className="text-slate-700 dark:text-slate-300">MERN</strong> (MongoDB, Express, React, Node.js) para
                    crear aplicaciones web robustas, escalables y con experiencia de usuario excepcional.
                  </p>
                </div>
              </Reveal>

              <p>
                He construido una sólida comprensión de las necesidades del negocio
                y la gestión de relaciones con clientes. Actualmente amplío mi perfil
                como estudiante de{" "}
                <strong className="text-slate-900 dark:text-white">Desarrollo y Calidad de Software en la UNSTA</strong>,
                con foco en arquitectura backend con{" "}
                <strong className="text-slate-900 dark:text-white">Node.js & Express</strong> y análisis de datos
                avanzado.
              </p>

              <Reveal width="100%" delay={0.2}>
                <div className="h-full min-h-[250px] flex flex-col bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-2 group hover-glow">
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-emerald-50 dark:bg-emerald-950/40 rounded-2xl flex items-center justify-center text-emerald-600 dark:text-emerald-400 mb-6 group-hover:scale-110 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300">
                    <FaChartLine className="text-2xl md:text-3xl" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                    Data Analytics
                  </h3>
                  <p className="text-slate-500 dark:text-slate-400 leading-relaxed text-sm flex-1">
                    Certificado por <strong className="text-slate-700 dark:text-slate-300">CoderHouse</strong> en análisis de datos.
                    Transformo información cruda en insights estratégicos utilizando{" "}
                    <strong className="text-slate-700 dark:text-slate-300">SQL Server, Microsoft Excel y Power BI</strong> para
                    impulsar la toma de decisiones basada en evidencia.
                  </p>
                </div>
              </Reveal>

              <p>
                Aplico herramientas como{" "}
                <strong className="text-slate-900 dark:text-white">Power BI, SQL Server, Excel y Figma</strong> para
                convertir datos en estrategias accionables y diseños centrados
                en el usuario.
              </p>
            </div>
          </Reveal>
        </section>

        {/* 2. PERFIL */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-24">
          <Reveal width="100%" delay={0.3}>
            <div className="h-full min-h-[350px] flex flex-col bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-2 group hover-glow">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-violet-50 dark:bg-violet-950/40 rounded-2xl flex items-center justify-center text-violet-600 dark:text-violet-400 mb-6 group-hover:scale-110 group-hover:bg-violet-600 group-hover:text-white transition-all duration-300">
                <FaUserTie className="text-2xl md:text-3xl" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                Negocios & Estrategia
              </h3>
              <p className="text-slate-500 dark:text-slate-400 leading-relaxed text-sm flex-1">
                Experiencia profesional en <strong className="text-slate-700 dark:text-slate-300">Tarjeta Titanio</strong>, donde
                combino la <strong className="text-slate-700 dark:text-slate-300">negociación estratégica B2B</strong> con la
                gestión integral de clientes corporativos. Entiendo el lenguaje del negocio
                y lo traduzco en soluciones técnicas efectivas.
              </p>
            </div>
          </Reveal>

          <Reveal width="100%" delay={0.4}>
            <div className="h-full min-h-[350px] flex flex-col bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-2 group hover-glow">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-amber-50 dark:bg-amber-950/40 rounded-2xl flex items-center justify-center text-amber-600 dark:text-amber-400 mb-6 group-hover:scale-110 group-hover:bg-amber-600 group-hover:text-white transition-all duration-300">
                <FaBasketballBall className="text-2xl md:text-3xl" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                Mentalidad & Disciplina
              </h3>
              <p className="text-slate-500 dark:text-slate-400 leading-relaxed text-sm flex-1">
                Mi pasión por el básquet me enseñó disciplina, trabajo en equipo y
                resiliencia. Transformé esa mentalidad de atleta en un emprendimiento real,
                demostrando que la constancia y la visión estratégica son transferibles a
                cualquier industria.
              </p>
            </div>
          </Reveal>
        </section>

        {/* 3. STACK TECNOLÓGICO */}
        <section className="mb-24">
          <Reveal>
            <span className="inline-block px-3 py-1 mb-4 text-[11px] font-bold tracking-[0.2em] text-indigo-600 dark:text-indigo-400 uppercase bg-indigo-50 dark:bg-indigo-950/40 rounded-full border border-indigo-100 dark:border-indigo-800/40">
              Herramientas
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-8">
              Stack Tecnológico
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="flex flex-wrap gap-3 md:gap-4">
              {[
                { name: "JavaScript", icon: FaLaptopCode, color: "bg-yellow-50 dark:bg-yellow-950/30 text-yellow-700 dark:text-yellow-400 border-yellow-200/50 dark:border-yellow-800/30" },
                { name: "TypeScript", icon: FaLaptopCode, color: "bg-blue-50 dark:bg-blue-950/30 text-blue-700 dark:text-blue-400 border-blue-200/50 dark:border-blue-800/30" },
                { name: "React & Next.js", icon: FaLaptopCode, color: "bg-cyan-50 dark:bg-cyan-950/30 text-cyan-700 dark:text-cyan-400 border-cyan-200/50 dark:border-cyan-800/30" },
                { name: "Node.js & Express", icon: FaServer, color: "bg-emerald-50 dark:bg-emerald-950/30 text-emerald-700 dark:text-emerald-400 border-emerald-200/50 dark:border-emerald-800/30" },
                { name: "MongoDB", icon: FaDatabase, color: "bg-green-50 dark:bg-green-950/30 text-green-700 dark:text-green-400 border-green-200/50 dark:border-green-800/30" },
                { name: "SQL Server", icon: FaDatabase, color: "bg-slate-50 dark:bg-slate-800/50 text-slate-700 dark:text-slate-300 border-slate-200/50 dark:border-slate-700/30" },
                { name: "Power BI", icon: FaChartLine, color: "bg-amber-50 dark:bg-amber-950/30 text-amber-700 dark:text-amber-400 border-amber-200/50 dark:border-amber-800/30" },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05, duration: 0.4 }}
                  viewport={{ once: true }}
                  className={`flex items-center gap-3 px-5 py-3.5 rounded-2xl font-bold text-sm ${item.color} border shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md cursor-default`}
                >
                  <item.icon className="text-lg" />
                  {item.name}
                </motion.div>
              ))}
            </div>
          </Reveal>
        </section>

        {/* 4. FORMACIÓN ACADÉMICA */}
        <section className="mb-32">
          <Reveal>
            <span className="inline-block px-3 py-1 mb-4 text-[11px] font-bold tracking-[0.2em] text-blue-600 dark:text-blue-400 uppercase bg-blue-50 dark:bg-blue-950/40 rounded-full border border-blue-100 dark:border-blue-800/40">
              Educación
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-10 flex items-center gap-3">
              <FaGraduationCap className="text-blue-600 dark:text-blue-400" /> Formación Académica
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Reveal width="100%" delay={0.1}>
              <div className="h-full p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-2 hover-glow">
                <span className="text-xs font-bold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/40 px-3 py-1.5 rounded-full border border-blue-100 dark:border-blue-800/40">
                  2024 — 2026
                </span>
                <h3 className="text-lg md:text-xl font-bold text-slate-900 dark:text-white mt-4">
                  Tecnicatura en Desarrollo de Software
                </h3>
                <p className="text-slate-500 dark:text-slate-400 mt-2 text-sm md:text-base">
                  Universidad del Norte Santo Tomás de Aquino (UNSTA)
                </p>
              </div>
            </Reveal>

            <Reveal width="100%" delay={0.2}>
              <div className="h-full p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-2 hover-glow">
                <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/40 px-3 py-1.5 rounded-full border border-indigo-100 dark:border-indigo-800/40">
                  2025 — 2026
                </span>
                <h3 className="text-lg md:text-xl font-bold text-slate-900 dark:text-white mt-4">
                  Arquitectura Backend & APIs
                </h3>
                <p className="text-slate-500 dark:text-slate-400 mt-2 text-sm md:text-base">
                  CoderHouse — Especialización en Node.js y Express
                </p>
              </div>
            </Reveal>
          </div>
        </section>
      </div>
    </div>
  );
}
