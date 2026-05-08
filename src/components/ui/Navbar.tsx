"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa"; 
import { motion } from "framer-motion"; // 1. Importamos Motion

export default function Navbar() {
  const pathname = usePathname();
  const isActive = (path: string) => pathname === path;

  const linkStyles = (path: string) => `
    text-[9px] sm:text-[10px] md:text-xs font-bold tracking-[0.1em] sm:tracking-[0.15em] uppercase transition-all duration-300 whitespace-nowrap
    ${isActive(path)
      ? "text-blue-600 drop-shadow-sm"
      : "text-slate-500 hover:text-slate-900"}
  `;

  return (
    // 2. Cambiamos 'nav' por 'motion.nav' y agregamos la animación inicial
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.5 }}
      className="w-full flex flex-col md:flex-row items-center justify-between py-4 sm:py-5 md:py-8 px-3 sm:px-4 md:px-0"
    >

      {/* LOGO */}
      <div className="mb-4 sm:mb-5 md:mb-0 text-center md:text-left w-full md:w-auto">
        <Link href="/" className="block group">
            <h2 className="font-display text-lg sm:text-2xl md:text-3xl font-black tracking-tight uppercase text-slate-900 leading-none group-hover:text-blue-600 transition duration-300">
            Gonzalo <br className="hidden md:block"/> Martinez
            </h2>
        </Link>
      </div>

      {/* MENÚ */}
      <div className="flex flex-wrap justify-center gap-2 sm:gap-4 md:gap-8 items-center bg-white/70 backdrop-blur-xl px-3 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-3 rounded-full border border-white/50 shadow-lg shadow-slate-200/50 mb-4 sm:mb-6 md:mb-0 transform hover:scale-[1.02] transition-transform duration-300">
        <Link href="/" className={linkStyles("/")}>Home</Link>
        <Link href="/projects" className={linkStyles("/projects")}>Proyectos</Link>
        <Link href="/who" className={linkStyles("/who")}>Quién soy</Link>
        <Link href="/blog" className={linkStyles("/blog")}>Blog</Link>
        <Link href="/contact" className={linkStyles("/contact")}>Mail</Link>
      </div>

      {/* REDES */}
      <div className="flex gap-6 items-center w-full md:w-auto justify-center md:justify-end">
        {[
          { icon: FaGithub, link: "https://github.com", color: "hover:text-black" },
          { icon: FaLinkedin, link: "https://linkedin.com", color: "hover:text-blue-700" },
          { icon: FaInstagram, link: "https://instagram.com", color: "hover:text-pink-600" },
        ].map((Social, index) => (
          <a 
            key={index}
            href={Social.link} 
            target="_blank" 
            className={`text-slate-400 transition-all duration-300 hover:scale-125 hover:-translate-y-1 ${Social.color}`}
          >
            <Social.icon size={22} />
          </a>
        ))}
      </div>
    </motion.nav>
  );
}