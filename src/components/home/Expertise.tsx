"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

const skills = [
  {
    title: "FULL STACK DEVELOPER",
    description: "Desarrollo completo de aplicaciones web modernas",
    techs: ["React", "Node.js", "MongoDB", "TypeScript"]
  },
  {
    title: "DATA ANALYST",
    description: "Análisis y visualización de datos complejos",
    techs: ["Python", "Pandas", "SQL", "Tableau"]
  },
  {
    title: "REACT DEVELOPER",
    description: "Creación de interfaces interactivas y dinámicas",
    techs: ["React", "Next.js", "Tailwind", "Framer Motion"]
  },
  {
    title: "BACKEND DEVELOPER",
    description: "Diseño de APIs y bases de datos robustas",
    techs: ["Node.js", "Express", "PostgreSQL", "Redis"]
  },
  {
    title: "DISEÑADOR WEB",
    description: "Diseño UI/UX moderno y responsive",
    techs: ["Figma", "Tailwind CSS", "Web Design"]
  }
];

export default function Expertise() {
  const [activeSkill, setActiveSkill] = useState(0);

  return (
    <section className="w-full py-24">
      <div className="mb-16">
        <span className="text-blue-600 font-bold text-sm tracking-widest uppercase mb-4 block">/ MI EXPERTISE</span>
        <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter">
          Habilidades y Especialidades
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Skills List */}
        <div className="flex flex-col gap-4">
          {skills.map((skill, index) => (
            <motion.button
              key={skill.title}
              onClick={() => setActiveSkill(index)}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`p-6 rounded-2xl text-left transition-all duration-300 ${
                activeSkill === index
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-500/25"
                  : "bg-slate-50 text-slate-900 hover:bg-slate-100"
              }`}
            >
              <h3 className="text-xl font-black tracking-tighter mb-2">{skill.title}</h3>
              <p className={`text-sm ${activeSkill === index ? "text-blue-100" : "text-slate-600"}`}>
                {skill.description}
              </p>
            </motion.button>
          ))}
        </div>

        {/* Detail Card */}
        <motion.div
          key={activeSkill}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          className="relative aspect-[4/5] w-full rounded-[2rem] overflow-hidden shadow-2xl"
        >
          <Image
            src={`https://images.unsplash.com/photo-${
              [
                "1555066931-4365d14bab8c",
                "1517694712202-14dd9538aa97",
                "1517694712202-14dd9538aa97",
                "1517694712202-14dd9538aa97",
                "1561070791-2526d30994b5"
              ][activeSkill]
            }?w=800&h=1000&fit=crop`}
            alt={skills[activeSkill].title}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent flex flex-col justify-end p-8">
            <h3 className="text-white text-2xl font-black mb-4">{skills[activeSkill].title}</h3>
            <div className="flex flex-wrap gap-2">
              {skills[activeSkill].techs.map((tech) => (
                <span key={tech} className="px-3 py-1 bg-blue-600 text-white text-xs font-bold rounded-full">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
