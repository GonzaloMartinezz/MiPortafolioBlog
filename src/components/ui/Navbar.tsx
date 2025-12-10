"use client"; // <--- ESTO ES IMPORTANTE PARA QUE DETECTE LA PESTAÑA

import Link from "next/link";
import { usePathname } from "next/navigation"; // Hook para saber en qué página estamos
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa"; 

export default function Navbar() {
  const pathname = usePathname(); // Obtenemos la ruta actual (ej: /about)

  // Función para determinar si el link está activo
  const isActive = (path: string) => pathname === path;

  return (
    <nav className="w-full flex flex-col md:flex-row items-center justify-between py-6 md:py-8 relative z-50">
      
      {/* 1. LOGO / NOMBRE */}
      <div className="mb-4 md:mb-0 text-center md:text-left min-w-[200px]">
        <Link href="/" className="block group">
            <h2 className="font-display text-xl font-bold tracking-tight uppercase text-slate-100 leading-none group-hover:text-blue-400 transition duration-300">
            Gonzalo <br /> Martínez
            </h2>
        </Link>
      </div>

      {/* 2. MENÚ CENTRAL (PESTAÑAS) */}
      <div className="flex gap-8 md:gap-12 items-center font-medium text-xs tracking-[0.2em] text-slate-400 mb-4 md:mb-0 md:absolute md:left-1/2 md:-translate-x-1/2">
        
        {/* PESTAÑA HOME */}
      <Link 
            href="/who" 
            className={`transition-colors duration-300 hover:text-white ${
                isActive("/who") ? "text-blue-400 font-bold" : "text-slate-400"
            }`}
        >
            ¿Quien soy?
        </Link>
        {/* PESTAÑA SOBRE MÍ (Aquí es donde querías el cambio) */}
        <Link 
            href="/about" 
            className={`transition-colors duration-300 hover:text-white ${
                isActive("/about") ? "text-blue-400 font-bold" : "text-slate-400"
            }`}
        >
            Blog!
        </Link>

        {/* PESTAÑA BLOG */}
        <Link 
            href="/blog" 
            className={`transition-colors duration-300 hover:text-white ${
                isActive("/blog") ? "text-blue-400 font-bold" : "text-slate-400"
            }`}
        >
           MySolutions
        </Link>
      </div>

      {/* 3. REDES SOCIALES */}
      <div className="flex gap-6 items-center min-w-[200px] justify-end">
        <a href="https://github.com/TU_USUARIO" target="_blank" className="text-slate-400 hover:text-white hover:scale-110 transition-all">
          <FaGithub size={20} />
        </a>
        <a href="https://linkedin.com/in/TU_USUARIO" target="_blank" className="text-slate-400 hover:text-blue-400 hover:scale-110 transition-all">
          <FaLinkedin size={20} />
        </a>
        <a href="https://instagram.com/TU_USUARIO" target="_blank" className="text-slate-400 hover:text-pink-500 hover:scale-110 transition-all">
          <FaInstagram size={20} />
        </a>
      </div>
    </nav>
  );
}