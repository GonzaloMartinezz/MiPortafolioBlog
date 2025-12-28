"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa"; 

export default function Navbar() {
  const pathname = usePathname();
  const isActive = (path: string) => pathname === path;

  return (
    <nav className="w-full flex flex-col md:flex-row items-center justify-between py-6 md:py-10 relative z-50 animate-fade-in-up">
      
      {/* 1. LOGO */}
      <div className="mb-4 md:mb-0 min-w-[200px] text-center md:text-left">
        <Link href="/" className="block group">
            <h2 className="font-display text-2xl font-black tracking-tight uppercase text-slate-900 leading-none group-hover:text-blue-600 transition duration-300">
            Gonzalo <br /> Martínez
            </h2>
        </Link>
      </div>

      {/* 2. MENÚ (Pestañas) */}
      <div className="flex gap-8 md:gap-12 items-center font-bold text-xs tracking-[0.2em] mb-4 md:mb-0 md:absolute md:left-1/2 md:-translate-x-1/2 bg-white/50 backdrop-blur-md px-6 py-3 rounded-full border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300">
        
        <Link href="/" className={`transition-all duration-300 hover:scale-105 ${isActive("/") ? "text-blue-600" : "text-slate-500 hover:text-slate-900"}`}>
            HOME
        </Link>

        <Link href="/who" className={`transition-all duration-300 hover:scale-105 ${isActive("/who") ? "text-blue-600" : "text-slate-500 hover:text-slate-900"}`}>
            ¿QUIÉN SOY?
        </Link>

        <Link href="/blog" className={`transition-all duration-300 hover:scale-105 ${isActive("/blog") ? "text-blue-600" : "text-slate-500 hover:text-slate-900"}`}>
           My Blog!
        </Link>
         <Link href="/mail" className={`transition-all duration-300 hover:scale-105 ${isActive("/mail") ? "text-blue-600" : "text-slate-500 hover:text-slate-900"}`}>
           Mail`s
        </Link>
      </div>

      {/* 3. REDES */}
      <div className="flex gap-6 items-center min-w-[200px] justify-end">
        {[
          { icon: FaGithub, link: "https://github.com", color: "hover:text-black" },
          { icon: FaLinkedin, link: "https://linkedin.com", color: "hover:text-blue-700" },
          { icon: FaInstagram, link: "https://instagram.com", color: "hover:text-pink-600" },
        ].map((Social, index) => (
          <a 
            key={index}
            href={Social.link} 
            target="_blank" 
            className={`text-slate-400 transition-all duration-300 hover:scale-125 ${Social.color}`}
          >
            <Social.icon size={22} />
          </a>
        ))}
      </div>
    </nav>
  );
}