"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaGithub } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";
import ThemeSwitch from "./theme-switch";
import { useState, useEffect } from "react";

const navLinks = [
  { href: "/", label: "Inicio" },
  { href: "/projects", label: "Proyectos" },
  { href: "/who", label: "Sobre mí" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contacto" },
];

export default function Navbar() {
  const pathname = usePathname();
  const isActive = (path: string) => pathname === path;
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  // Detect scroll for sticky effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const linkStyles = (path: string) => `
    relative text-[11px] sm:text-xs font-bold tracking-[0.15em] uppercase transition-all duration-300 whitespace-nowrap py-1
    ${isActive(path)
      ? "text-blue-600 dark:text-blue-400"
      : "text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"}
  `;

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`w-full flex items-center justify-between py-4 md:py-5 transition-all duration-300 ${
          scrolled ? "py-3 md:py-3.5" : ""
        }`}
        aria-label="Navegación principal"
      >
        {/* LOGO */}
        <div className="flex-shrink-0">
          <Link href="/" className="group" onClick={() => setMobileOpen(false)}>
            <h2 className="font-[var(--font-display)] text-xl sm:text-2xl font-black tracking-tight uppercase text-slate-900 dark:text-white leading-none transition-colors">
              GONZALO<span className="text-blue-600">.</span>
            </h2>
          </Link>
        </div>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex gap-6 lg:gap-8 items-center">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className={linkStyles(link.href)}>
              {link.label}
              {isActive(link.href) && (
                <motion.div
                  layoutId="navbar-indicator"
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blue-600 rounded-full"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </Link>
          ))}
        </div>

        {/* RIGHT ICONS */}
        <div className="flex gap-2 sm:gap-2.5 items-center">
          {/* GitHub */}
          <a
            href="https://github.com/GonzaloMartinezz"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-xl flex items-center justify-center text-slate-500 dark:text-slate-400 hover:text-white hover:bg-slate-900 dark:hover:bg-white dark:hover:text-slate-900 transition-all duration-300 hover:scale-105"
            aria-label="Ver perfil en GitHub"
          >
            <FaGithub size={18} />
          </a>

          {/* Email */}
          <a
            href="mailto:gonzalomartinezzz04@gmail.com"
            className="w-9 h-9 rounded-xl flex items-center justify-center text-slate-500 dark:text-slate-400 hover:text-white hover:bg-red-500 transition-all duration-300 hover:scale-105"
            aria-label="Enviar email"
          >
            <HiOutlineMail size={19} />
          </a>

          {/* Theme Toggle */}
          <ThemeSwitch />

          {/* Hamburger - Mobile Only */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden w-10 h-10 rounded-xl flex items-center justify-center text-slate-900 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-300"
            aria-label="Abrir menú de navegación"
            aria-expanded={mobileOpen}
          >
            <AnimatePresence mode="wait">
              {mobileOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <HiX size={24} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <HiMenuAlt3 size={24} />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </motion.nav>

      {/* MOBILE MENU - FULLSCREEN TAKEOVER */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: "circle(0% at calc(100% - 2.5rem) 2.5rem)" }}
            animate={{ opacity: 1, clipPath: "circle(150% at calc(100% - 2.5rem) 2.5rem)" }}
            exit={{ opacity: 0, clipPath: "circle(0% at calc(100% - 2.5rem) 2.5rem)" }}
            transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 w-full h-[100dvh] z-[99999] md:hidden bg-slate-50 dark:bg-[#06080D] overflow-hidden flex flex-col overscroll-none"
          >
            {/* Ambient Background Glows */}
            <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-blue-500/20 blur-[100px] pointer-events-none" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-indigo-500/20 blur-[100px] pointer-events-none" />

            {/* Top Bar inside Menu */}
            <div className="relative z-10 flex items-center justify-between px-4 sm:px-6 py-4 border-b border-slate-200/50 dark:border-white/5 bg-white/50 dark:bg-black/10 backdrop-blur-md">
              <Link href="/" onClick={() => setMobileOpen(false)}>
                <span className="font-[var(--font-display)] text-xl font-black uppercase text-slate-900 dark:text-white tracking-tight">
                  GONZALO<span className="text-blue-600">.</span>
                </span>
              </Link>
              <div className="flex items-center gap-3">
                <ThemeSwitch />
                <button
                  onClick={() => setMobileOpen(false)}
                  className="w-10 h-10 rounded-full flex items-center justify-center text-slate-900 dark:text-white bg-slate-200/80 dark:bg-white/10 hover:bg-slate-300 dark:hover:bg-white/20 transition-all border border-slate-300/50 dark:border-white/10"
                  aria-label="Cerrar menú"
                >
                  <HiX size={20} />
                </button>
              </div>
            </div>

            {/* Nav Links (Huge Typography, Left Aligned) */}
            <div className="relative z-10 flex-1 flex flex-col justify-center px-8 sm:px-12 gap-6 sm:gap-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ x: -40, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -20, opacity: 0 }}
                  transition={{ delay: 0.1 + i * 0.08, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="w-full"
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="group flex items-baseline gap-4"
                  >
                    <span className="text-sm font-bold text-blue-600 dark:text-blue-500 font-mono">
                      0{i + 1}
                    </span>
                    <span className={`text-4xl sm:text-5xl font-black tracking-tighter uppercase transition-colors duration-300 ${
                      isActive(link.href)
                        ? "text-slate-900 dark:text-white"
                        : "text-slate-400 dark:text-slate-600 group-hover:text-blue-600 dark:group-hover:text-blue-400"
                    }`}>
                      {link.label}
                    </span>
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Bottom Actions */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 30, opacity: 0 }}
              transition={{ delay: 0.4, duration: 0.4 }}
              className="relative z-10 px-6 sm:px-8 pb-8 pt-6 border-t border-slate-200/50 dark:border-white/5 bg-white/30 dark:bg-black/20 backdrop-blur-sm"
            >
              <div className="flex gap-4">
                <a
                  href="https://github.com/GonzaloMartinezz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 flex items-center justify-center hover:scale-110 active:scale-95 transition-transform shadow-lg"
                  aria-label="GitHub"
                >
                  <FaGithub size={20} />
                </a>
                <a
                  href="mailto:gonzalomartinezzz04@gmail.com"
                  className="flex-1 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center gap-2 font-bold text-sm uppercase tracking-widest hover:scale-[1.02] active:scale-[0.98] transition-transform shadow-[0_0_20px_rgba(37,99,235,0.4)]"
                >
                  <HiOutlineMail size={18} />
                  <span>Contactar</span>
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}