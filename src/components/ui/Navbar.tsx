"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Navbar() {
  const pathname = usePathname();
  const isActive = (path: string) => pathname === path;

  // Ajustamos el estilo del link: más chico en móvil (text-[10px]) y normal en PC (md:text-xs)
  const linkStyles = (path: string) => `
    text-[10px] md:text-xs font-bold tracking-[0.15em] uppercase transition-all duration-300 hover:scale-105
    ${isActive(path) ? "text-blue-600" : "text-slate-500 hover:text-slate-900"}
  `;

  return (
    // Agregamos 'overflow-hidden' para evitar scroll horizontal fantasma
    <nav className="w-full flex flex-col md:flex-row items-center justify-between py-6 md:py-8 animate-fade-in-up">
      {/* 1. LOGO (Centrado en móvil, Izquierda en PC) */}
      <div className="mb-6 md:mb-0 text-center md:text-left w-full md:w-auto">
        <Link href="/" className="block group">
          {/* Texto más chico en móvil (text-3xl) para que no ocupe todo */}
          <h2 className="font-display text-3xl md:text-3xl font-black tracking-tight uppercase text-slate-900 leading-none group-hover:text-blue-600 transition duration-300">
            Gonzalo <br className="hidden md:block" />{" "}
            <span className="md:hidden"> </span> Martínez
          </h2>
        </Link>
      </div>

      {/* 2. MENÚ (La pastilla) */}
      {/* En móvil: gap-3 y px-4 (más compacto). En PC: gap-10 y px-8 */}
      <div className="flex flex-wrap justify-center gap-3 md:gap-8 items-center bg-white/70 backdrop-blur-xl px-5 py-3 md:px-8 rounded-full border border-white/50 shadow-lg shadow-slate-200/50 mb-6 md:mb-0 transform hover:scale-[1.02] transition-transform duration-300 w-auto max-w-[95%] text-[10px]">
        {/* Ajustamos linkStyles para que acepte text-[9px] en pantallas muy chicas */}
        <Link href="/" className={linkStyles("/")}>
          Home
        </Link>
        <Link href="/who" className={linkStyles("/who")}>
          Quién soy
        </Link>
        <Link href="/blog" className={linkStyles("/blog")}>
          Blog
        </Link>
        <Link href="/contact" className={linkStyles("/contact")}>
          Mail
        </Link>
      </div>

      {/* 3. REDES */}
      <div className="flex gap-5 items-center w-full md:w-auto justify-center md:justify-end">
        {[
          {
            icon: FaGithub,
            link: "https://github.com/GonzaloMartinezz",
            color: "hover:text-black",
          },
          {
            icon: FaLinkedin,
            link: "https://www.linkedin.com/in/gonzalomartinezz2004/",
            color: "hover:text-blue-700",
          },
          {
            icon: FaInstagram,
            link: "https://www.instagram.com/gonchi_martinezz/",
            color: "hover:text-pink-600",
          },
        ].map((Social, index) => (
          <a
            key={index}
            href={Social.link}
            target="_blank"
            className={`text-slate-400 transition-all duration-300 hover:scale-110 ${Social.color}`}
          >
            <Social.icon size={30} />
          </a>
        ))}
      </div>
    </nav>
  );
}
