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
      {/* CAMBIO CLAVE: pt-14 md:pt-20 (Antes era pt-24). 
          Esto sube todo el contenido considerablemente. */}
      <main className="flex-1 w-full pt-14 md:pt-20 px-4 md:px-12">
        {/* 1. INTRODUCCIÓN */}
        <section className="mb-16 text-center md:text-left relative">
          <Reveal>
            {/* CAMBIO 2: -mt-2 para "comerle" un poco de espacio a la altura de línea */}
            <h1 className="font-display text-6xl md:text-4xl font-black text-slate-900 mb-4 leading-tight -mt-1">
              Código, Analisis de Datos <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                & Estrategia de Negocios.
              </span>
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="space-y-6 text-lg text-slate-600 max-w-4xl leading-relaxed text-justify md:text-left">
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
                <div className="h-full min-h-[250px] flex flex-col bg-white p-8 rounded-3xl border border-slate-100 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-2 group">
                  <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-6 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                    <FaLaptopCode size={28} />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-700 transition-colors">
                    FullStack Web Developer
                  </h3>
                  <p className="text-slate-500 leading-relaxed text-sm flex-1">
                    Egresado de <strong>Rolling Code School</strong> como Full
                    Stack Developer. Domino el stack <strong>MERN</strong>{" "}
                    (MongoDB, Express, React, Node.js) para construir
                    aplicaciones web completas: diseño interfaces interactivas,
                    creo APIs RESTful y gestiono bases de datos no relacionales
                    para entregar productos digitales dinámicos y funcionales.
                  </p>
                </div>
              </Reveal>
              <p>
                Aplico mis conocimientos en{" "}
                <strong>Power BI, SQL Server, Excel y Figma</strong> para
                transformar la información en decisiones estratégicas. Mi
                objetivo es fusionar mi visión comercial con mis habilidades
                técnicas para contribuir en proyectos de{" "}
                <strong>inteligencia de negocio y desarrollo web</strong>.
              </p>
                        <Reveal width="100%" delay={0.2}>
            <div className="h-full min-h-[250px] flex flex-col bg-white p-8 rounded-3xl border border-slate-100 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-2 group">
              <div className="w-14 h-14 bg-green-50 rounded-2xl flex items-center justify-center text-green-600 mb-6 group-hover:scale-110 group-hover:bg-green-600 group-hover:text-white transition-all duration-300">
                <FaChartLine size={28} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-green-700 transition-colors">
                Data Analytics
              </h3>
              <p className="text-slate-500 leading-relaxed text-sm flex-1">
                Formado en <strong>CoderHouse</strong>. Me especializo en
                transformar datos crudos en valor estratégico utilizando{" "}
                <strong>SQL, Excel y Power BI</strong>. Domino el ciclo completo
                del dato: realizo la inspección, limpieza y modelado (ETL) para
                crear tableros interactivos que permiten identificar tendencias
                y fundamentar la toma de decisiones.
              </p>
            </div>
          </Reveal>
            </div>
          </Reveal>
        </section>

        {/* 2. PERFIL (Tarjetas Superiores) */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-24">
          {/* Card 1: Web Dev */}

          {/* Card 3: Business & Sales */}
          <Reveal width="100%" delay={0.3}>
            <div className="h-full min-h-[350px] flex flex-col bg-white p-8 rounded-3xl border border-slate-100 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-2 group">
              <div className="w-14 h-14 bg-purple-50 rounded-2xl flex items-center justify-center text-purple-600 mb-6 group-hover:scale-110 group-hover:bg-purple-600 group-hover:text-white transition-all duration-300">
                <FaUserTie size={28} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-purple-700 transition-colors">
                Business & Sales
              </h3>
              <p className="text-slate-500 leading-relaxed text-sm flex-1">
                Formado en la práctica en <strong>Tarjeta Titanio</strong>. Mi
                perfil combina la <strong>negociación estratégica</strong> con
                la gestión de clientes B2B. Me especializo en detectar el
                "dolor" del usuario para diseñar soluciones efectivas, aplicando
                análisis de datos para optimizar la adhesión de comercios y
                fidelizar la cartera mediante una comunicación asertiva.
              </p>
            </div>
          </Reveal>

          {/* Card 4: Mindset */}
          <Reveal width="100%" delay={0.4}>
            <div className="h-full min-h-[350px] flex flex-col bg-white p-8 rounded-3xl border border-slate-100 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-2 group">
              <div className="w-14 h-14 bg-orange-50 rounded-2xl flex items-center justify-center text-orange-600 mb-6 group-hover:scale-110 group-hover:bg-orange-600 group-hover:text-white transition-all duration-300">
                <FaBasketballBall size={28} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-orange-700 transition-colors">
                Mindset & Basket
              </h3>
              <p className="text-slate-500 leading-relaxed text-sm flex-1">
                Transformé mi pasión por el básquet en un emprendimiento real
                creando mi propia marca de camisetas. Entiendo los negocios con
                la misma <strong>disciplina y constancia</strong> de un atleta
                de alto rendimiento. Estoy comprometido en cada desafío:
                resiliencia, trabajo duro y una obsesión sana por mejorar los
                detalles día a día.
              </p>
            </div>
          </Reveal>
        </section>

        {/* 3. STACK TECNOLÓGICO */}
        <section className="mb-24">
          <Reveal>
            <h2 className="font-display text-3xl font-bold text-slate-900 mb-8">
              Stack Tecnológico
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="flex flex-wrap gap-3 md:gap-4">
              {[
                {
                  name: "JavaScript",
                  icon: FaLaptopCode,
                  color: "bg-yellow-100 text-yellow-800",
                },
                {
                  name: "TypeScript",
                  icon: FaLaptopCode,
                  color: "bg-blue-100 text-blue-800",
                },
                {
                  name: "React ",
                  icon: FaLaptopCode,
                  color: "bg-cyan-100 text-cyan-800",
                },
                {
                  name: "Node.js",
                  icon: FaServer,
                  color: "bg-green-100 text-green-800",
                },
                {
                  name: "Next.js",
                  icon: FaLaptopCode,
                  color: "bg-black text-white",
                },
                {
                  name: "MongoDB",
                  icon: FaDatabase,
                  color: "bg-green-100 text-green-800",
                },
                {
                  name: "Express",
                  icon: FaDatabase,
                  color: "bg-orange-100 text-orange-800",
                },
                {
                  name: "C# / .NET",
                  icon: FaServer,
                  color: "bg-purple-100 text-purple-800",
                },
                {
                  name: "SQL Server",
                  icon: FaDatabase,
                  color: "bg-slate-100 text-slate-800",
                },
                {
                  name: "Power BI",
                  icon: FaChartLine,
                  color: "bg-yellow-100 text-yellow-800",
                },
                {
                  name: "Excel",
                  icon: FaChartLine,
                  color: "bg-green-100 text-green-800",
                },
                {
                  name: "Docker",
                  icon: FaServer,
                  color: "bg-blue-100 text-blue-800",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className={`flex items-center gap-2 md:gap-3 px-4 md:px-6 py-3 md:py-4 text-xs md:text-sm rounded-2xl font-bold ${item.color} shadow-sm cursor-default transition-transform hover:-translate-y-1`}
                >
                  <item.icon />
                  {item.name}
                </div>
              ))}
            </div>
          </Reveal>
        </section>

        {/* 4. EXPERIENCIA PROFESIONAL (ALTURA UNIFICADA) */}
        <section className="mb-24">
          <Reveal>
            <h2 className="font-display text-3xl font-bold text-slate-900 mb-10 flex items-center gap-3">
              <FaUserTie className="text-blue-600" /> Experiencia Profesional
            </h2>
          </Reveal>

          {/* GRID DE EXPERIENCIAS */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* 1. TARJETA TITANIO - ANALISTA DE DATOS */}
            <Reveal width="100%" delay={0.1}>
              {/* AGREGADO: min-h-[350px] */}
              <div className="h-full min-h-[350px] flex flex-col p-8 rounded-3xl bg-white border border-slate-100 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-2 group relative overflow-hidden">
                <div className="absolute top-6 right-6 text-[10px] font-bold uppercase tracking-widest text-slate-400 group-hover:text-blue-600 transition-colors">
                  2025 - Hoy
                </div>

                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 mb-6 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all">
                  <FaChartLine size={20} />
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-1 group-hover:text-blue-700 transition-colors">
                  Tarjeta Titanio S.A.
                </h3>
                <p className="text-xs font-bold text-blue-500 mb-4 uppercase tracking-wider">
                  Analista de Datos
                </p>

                <ul className="text-slate-500 text-sm leading-relaxed space-y-2 list-disc ml-4 flex-1">
                  <li>
                    Gestión del ciclo de vida completo de datos (inspección,
                    limpieza, ETL).
                  </li>
                  <li>
                    Creación de dashboards y modelos predictivos para anticipar
                    tendencias.
                  </li>
                  <li>
                    Traducción de datos brutos en insights estratégicos para la
                    gerencia.
                  </li>
                </ul>
              </div>
            </Reveal>

            {/* 2. TARJETA TITANIO - EJECUTIVO COMERCIAL */}
            <Reveal width="100%" delay={0.2}>
              <div className="h-full min-h-[350px] flex flex-col p-8 rounded-3xl bg-white border border-slate-100 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-2 group relative overflow-hidden">
                <div className="absolute top-6 right-6 text-[10px] font-bold uppercase tracking-widest text-slate-400 group-hover:text-indigo-600 transition-colors">
                  2025 - Hoy
                </div>

                <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-600 mb-6 group-hover:scale-110 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                  <FaHandshake size={20} />
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-1 group-hover:text-indigo-700 transition-colors">
                  Tarjeta Titanio S.A.
                </h3>
                <p className="text-xs font-bold text-indigo-500 mb-4 uppercase tracking-wider">
                  Ejecutivo Comercial
                </p>

                <ul className="text-slate-500 text-sm leading-relaxed space-y-2 list-disc ml-4 flex-1">
                  <li>
                    Gestión y optimización de la relación con comercios
                    adheridos.
                  </li>
                  <li>
                    Análisis estratégico para la adhesión de nuevos clientes.
                  </li>
                  <li>
                    Manejo integral de documentación y validación de legajos.
                  </li>
                </ul>
              </div>
            </Reveal>

            {/* 3. TARJETA TITANIO - ATENCIÓN AL CLIENTE */}
            <Reveal width="100%" delay={0.3}>
              <div className="h-full min-h-[350px] flex flex-col p-8 rounded-3xl bg-white border border-slate-100 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-2 group relative overflow-hidden">
                <div className="absolute top-6 right-6 text-[10px] font-bold uppercase tracking-widest text-slate-400 group-hover:text-cyan-600 transition-colors">
                  2025 - Hoy
                </div>

                <div className="w-12 h-12 bg-cyan-50 rounded-xl flex items-center justify-center text-cyan-600 mb-6 group-hover:scale-110 group-hover:bg-cyan-600 group-hover:text-white transition-all">
                  <FaHeadset size={20} />
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-1 group-hover:text-cyan-700 transition-colors">
                  Tarjeta Titanio S.A.
                </h3>
                <p className="text-xs font-bold text-cyan-500 mb-4 uppercase tracking-wider">
                  Atención al Cliente
                </p>

                <ul className="text-slate-500 text-sm leading-relaxed space-y-2 list-disc ml-4 flex-1">
                  <li>
                    Uso de herramientas analíticas para examinar patrones de
                    servicio.
                  </li>
                  <li>
                    Gestión de sistemas internos para seguimiento y verificación
                    de clientes.
                  </li>
                  <li>
                    Comunicación efectiva para la resolución de incidencias.
                  </li>
                </ul>
              </div>
            </Reveal>

            {/* 4. FREELANCE */}
            <Reveal width="100%" delay={0.4}>
              <div className="h-full min-h-[350px] flex flex-col p-8 rounded-3xl bg-white border border-slate-100 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-2 group relative overflow-hidden">
                <div className="absolute top-6 right-6 text-[10px] font-bold uppercase tracking-widest text-slate-400 group-hover:text-purple-600 transition-colors">
                  2024 - Hoy
                </div>

                <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center text-purple-600 mb-6 group-hover:scale-110 group-hover:bg-purple-600 group-hover:text-white transition-all">
                  <FaCode size={20} />
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-1 group-hover:text-purple-700 transition-colors">
                  Freelance Developer
                </h3>
                <p className="text-xs font-bold text-purple-500 mb-4 uppercase tracking-wider">
                  Full Stack Web Developer
                </p>

                <p className="text-slate-500 text-sm leading-relaxed flex-1">
                  Desarrollo de sitios web responsivos y aplicaciones completas.
                  Especialista en <strong>MERN Stack</strong>. Transformo
                  diseños en código funcional y escalable.
                </p>
              </div>
            </Reveal>

            {/* 5. MALIBU STYLE */}
            <Reveal width="100%" delay={0.5}>
              <div className="h-full min-h-[350px] flex flex-col p-8 rounded-3xl bg-white border border-slate-100 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-2 group relative overflow-hidden">
                <div className="absolute top-6 right-6 text-[10px] font-bold uppercase tracking-widest text-slate-400 group-hover:text-pink-600 transition-colors">
                  2024 - 2025
                </div>

                <div className="w-12 h-12 bg-pink-50 rounded-xl flex items-center justify-center text-pink-600 mb-6 group-hover:scale-110 group-hover:bg-pink-600 group-hover:text-white transition-all">
                  <FaShoppingBag size={20} />
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-1 group-hover:text-pink-600 transition-colors">
                  Malibu.Style
                </h3>
                <p className="text-xs font-bold text-pink-500 mb-4 uppercase tracking-wider">
                  CEO & Founder
                </p>

                <p className="text-slate-500 text-sm leading-relaxed flex-1">
                  Fundación y liderazgo de marca de indumentaria deportiva.
                  Gestión de identidad de marca, estrategias de posicionamiento
                  online y coordinación de equipo de ventas.
                </p>
              </div>
            </Reveal>

            {/* 6. AMWAY */}
            <Reveal width="100%" delay={0.6}>
              <div className="h-full min-h-[350px] flex flex-col p-8 rounded-3xl bg-white border border-slate-100 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-2 group relative overflow-hidden">
                <div className="absolute top-6 right-6 text-[10px] font-bold uppercase tracking-widest text-slate-400 group-hover:text-emerald-600 transition-colors">
                  2024
                </div>

                <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-600 mb-6 group-hover:scale-110 group-hover:bg-emerald-600 group-hover:text-white transition-all">
                  <FaHandshake size={20} />
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-1 group-hover:text-emerald-700 transition-colors">
                  Amway Arg
                </h3>
                <p className="text-xs font-bold text-emerald-500 mb-4 uppercase tracking-wider">
                  Empresario Independiente
                </p>

                <p className="text-slate-500 text-sm leading-relaxed flex-1">
                  Desarrollo de habilidades de{" "}
                  <strong>liderazgo, oratoria y negociación</strong>. Gestión de
                  equipos de network marketing y cumplimiento de objetivos de
                  ventas mensuales.
                </p>
              </div>
            </Reveal>
          </div>
        </section>
        {/* 5. FORMACIÓN ACADÉMICA */}
        {/* CAMBIO 1: Agregué 'mb-32' para despegarlo del footer */}
        <section className="mb-32">
          <Reveal>
            <h2 className="font-display text-3xl font-bold text-slate-900 mb-10 flex items-center gap-3">
              <FaGraduationCap className="text-blue-600" /> Formación Académica
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* 1. UNSTA */}
            <Reveal width="100%" delay={0.1}>
              {/* CAMBIO 2: Agregué 'hover:-translate-y-2 hover:shadow-lg duration-300' para el efecto de subir */}
              <div className="h-full p-6 rounded-3xl bg-slate-50 border border-slate-100 transition-all duration-300 hover:bg-white hover:shadow-lg hover:-translate-y-2 flex flex-col cursor-default">
                <div>
                  <span className="text-xs font-bold text-blue-600 bg-blue-100 px-3 py-1 rounded-full">
                    2024 - 2026
                  </span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mt-4">
                  Tecnicatura en Desarrollo y Calidad de Software
                </h3>
                <p className="text-sm text-slate-500 mt-1">
                  Universidad del Norte Santo Tomás de Aquino
                </p>
                <p className="text-sm text-slate-600 mt-3 flex-1">
                  Formación integral en estructuras de datos, algoritmos,
                  metodologías ágiles y calidad de software.
                </p>
              </div>
            </Reveal>

            {/* 2. CODERHOUSE - BACKEND II */}
            <Reveal width="100%" delay={0.2}>
              <div className="h-full p-6 rounded-3xl bg-slate-50 border border-slate-100 transition-all duration-300 hover:bg-white hover:shadow-lg hover:-translate-y-2 flex flex-col cursor-default">
                <div>
                  <span className="text-xs font-bold text-indigo-600 bg-indigo-100 px-3 py-1 rounded-full">
                    2025 - 2026
                  </span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mt-4">
                  Backend II: Diseño y Arquitectura
                </h3>
                <p className="text-sm text-slate-500 mt-1">CoderHouse</p>
                <p className="text-sm text-slate-600 mt-3 flex-1">
                  Especialización en arquitecturas escalables, patrones de
                  diseño, optimización de servicios y seguridad.
                </p>
              </div>
            </Reveal>

            {/* 3. CODERHOUSE - DATA ANALYST */}
            <Reveal width="100%" delay={0.3}>
              <div className="h-full p-6 rounded-3xl bg-slate-50 border border-slate-100 transition-all duration-300 hover:bg-white hover:shadow-lg hover:-translate-y-2 flex flex-col cursor-default">
                <div>
                  <span className="text-xs font-bold text-green-600 bg-green-100 px-3 py-1 rounded-full">
                    2025
                  </span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mt-4">
                  Data Analytics
                </h3>
                <p className="text-sm text-slate-500 mt-1">CoderHouse</p>
                <p className="text-sm text-slate-600 mt-3 flex-1">
                  Formación en inspección, limpieza y modelado de datos para la
                  toma de decisiones estratégicas.
                </p>
              </div>
            </Reveal>

            {/* 4. ROLLING CODE */}
            <Reveal width="100%" delay={0.4}>
              <div className="h-full p-6 rounded-3xl bg-slate-50 border border-slate-100 transition-all duration-300 hover:bg-white hover:shadow-lg hover:-translate-y-2 flex flex-col cursor-default">
                <div>
                  <span className="text-xs font-bold text-purple-600 bg-purple-100 px-3 py-1 rounded-full">
                    2023 - 2024
                  </span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mt-4">
                  Full Stack Web Developer
                </h3>
                <p className="text-sm text-slate-500 mt-1">
                  Rolling Code School
                </p>
                <p className="text-sm text-slate-600 mt-3 flex-1">
                  Desarrollo intensivo de aplicaciones web modernas utilizando
                  el stack MERN (MongoDB, Express, React, Node.js).
                </p>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
    </div>
  );
}
