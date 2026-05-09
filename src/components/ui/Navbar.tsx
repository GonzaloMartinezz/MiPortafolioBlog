"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaUser, FaShareAlt, FaCode } from "react-icons/fa";
import { motion } from "framer-motion";
import { ThemeToggle } from "./ThemeToggle";

export default function Navbar() {
  const pathname = usePathname();
  const isActive = (path: string) => pathname === path;

  const linkStyles = (path: string) => `
    text-[10px] sm:text-[11px] font-bold tracking-widest uppercase transition-all duration-300 whitespace-nowrap
    ${isActive(path)
      ? "text-blue-600 border-b-2 border-blue-600 pb-1"
      : "text-slate-500 hover:text-slate-900"}
  `;

  return (
    <motion.div
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full flex items-center justify-between py-6"
    >
      {/* LOGO */}
      <div className="flex-shrink-0">
        <Link href="/" className="group">
          <h2 className="font-display text-lg sm:text-xl font-black tracking-tighter uppercase text-slate-900 leading-none">
            GONZALO MARTINEZ
          </h2>
        </Link>
      </div>

      {/* MENÚ */}
      <div className="hidden md:flex gap-8 items-center">
        <Link href="/" className={linkStyles("/")}>Home</Link>
        <Link href="/projects" className={linkStyles("/projects")}>Proyectos</Link>
        <Link href="/who" className={linkStyles("/who")}>Quién soy</Link>
        <Link href="/blog" className={linkStyles("/blog")}>Blog</Link>
        <Link href="/contact" className={linkStyles("/contact")}>Mail</Link>
      </div>

      {/* ICONOS DERECHA */}
      <div className="flex gap-4 items-center text-slate-900">
        <FaCode className="cursor-pointer hover:text-blue-600 transition-colors" size={18} />
        <FaUser className="cursor-pointer hover:text-blue-600 transition-colors" size={18} />
        <FaShareAlt className="cursor-pointer hover:text-blue-600 transition-colors" size={18} />
        <ThemeToggle />
      </div>
    </motion.div>
  );
}