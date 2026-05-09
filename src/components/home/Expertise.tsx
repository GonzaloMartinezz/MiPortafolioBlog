"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const skills = [
  "FULL STACK DEVELOPER",
  "DATA ANALYST",
  "REACT DEVELOPER",
  "BACKEND DEVELOPER",
  "DISEÑADOR WEB",
];

export default function Expertise() {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-between w-full py-24 gap-12">
      <div className="flex-1">
        <span className="text-blue-600 font-bold text-sm tracking-widest uppercase mb-4 block">/ MI EXPERTISE</span>
        <div className="flex flex-col gap-2">
          {skills.map((skill, index) => (
            <motion.h2
              key={skill}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter ${index === 0 ? "text-slate-900" : "text-slate-300"
                }`}
            >
              {skill}
            </motion.h2>
          ))}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="flex-1 relative aspect-[4/5] w-full max-w-md rounded-[2rem] overflow-hidden shadow-2xl"
      >
        <Image
          src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=1000&fit=crop"
          alt="Coding Workspace"
          fill
          className="object-cover"
        />
      </motion.div>
    </section>
  );
}
