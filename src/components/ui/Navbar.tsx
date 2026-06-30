"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaGithub } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";

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
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // Detect scroll for sticky effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`w-full flex items-center justify-between py-4 md:py-5 transition-all duration-300 ${scrolled ? "py-3 md:py-3.5" : ""
          }`}
        aria-label="Navegación principal"
      >
        {/* LOGO */}
        <div className="flex-shrink-0 relative z-[999999]">
          <Link href="/" className="group" onClick={() => setMenuOpen(false)}>
            <h2 className="font-[var(--font-display)] text-xl sm:text-2xl font-black tracking-tight uppercase text-white leading-none transition-colors">
              GONZALO<span className="text-blue-500">.</span>
            </h2>
          </Link>
        </div>

        {/* RIGHT ICONS & MENU BUTTON */}
        <div className="flex gap-2 sm:gap-2.5 items-center relative z-[999999]">
          {/* GitHub */}
          <a
            href="https://github.com/GonzaloMartinezz"
            target="_blank"
            rel="noopener noreferrer"
            className={`w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-105 ${menuOpen ? 'text-white/70 hover:text-white' : 'text-slate-500 hover:text-white hover:bg-slate-900'}`}
            aria-label="Ver perfil en GitHub"
          >
            <FaGithub size={18} />
          </a>

          {/* Email */}
          <a
            href="mailto:gonzalomartinezzz04@gmail.com"
            className={`w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-105 ${menuOpen ? 'text-white/70 hover:text-white hover:bg-red-500' : 'text-slate-500 hover:text-white hover:bg-red-500'}`}
            aria-label="Enviar email"
          >
            <HiOutlineMail size={19} />
          </a>

          {/* Hamburger - All Screens */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 ${menuOpen ? 'text-white hover:bg-white/10' : 'text-white hover:bg-slate-800'}`}
            aria-label="Abrir menú de navegación"
            aria-expanded={menuOpen}
          >
            <AnimatePresence mode="wait">
              {menuOpen ? (
                <motion.span
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <HiX size={24} />
                </motion.span>
              ) : (
                <motion.span
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <HiMenuAlt3 size={24} />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>
      </motion.nav>

      {/* FULLSCREEN DROPDOWN MENU */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 w-full h-[100dvh] z-[99998] bg-[#050505] overflow-hidden flex flex-col md:flex-row overscroll-none"
          >
            {/* Left Side: Image */}
            <div className="relative w-full md:w-1/2 h-1/4 md:h-full border-b md:border-b-0 md:border-r border-white/5">
              <img 
                src="/d4d5020e9104569354e8d5e6329fe752.jpg" 
                alt="Background" 
                className="w-full h-full object-cover object-center grayscale-[20%] opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-[#050505] via-black/40 to-transparent" />
            </div>

            {/* Right Side: Nav Links & Info */}
            <div className="relative w-full md:w-1/2 h-3/4 md:h-full flex flex-col justify-center px-8 sm:px-12 md:px-16 lg:px-24">
              <div className="flex flex-col gap-6 sm:gap-8 lg:gap-10">
                {navLinks.map((link, i) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="group flex flex-col items-start"
                  >
                    {/* Link Number */}
                    <motion.span
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -10 }}
                      transition={{ delay: 0.2 + i * 0.1, duration: 0.4 }}
                      className="text-xs font-bold text-blue-500 font-mono mb-1 tracking-[0.3em]"
                    >
                      0{i + 1}
                    </motion.span>

                    {/* Staggered Letter Animation */}
                    <motion.span
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                      variants={{
                        hidden: { opacity: 0 },
                        visible: {
                          opacity: 1,
                          transition: {
                            staggerChildren: 0.04,
                            delayChildren: 0.3 + i * 0.1,
                          },
                        },
                      }}
                      className="flex overflow-visible"
                    >
                      {link.label.split("").map((char, charIndex) => (
                        <motion.span
                          key={charIndex}
                          variants={{
                            hidden: { opacity: 0, scale: 0.2, x: -40 },
                            visible: {
                              opacity: 1,
                              scale: 1,
                              x: 0,
                              transition: { type: "spring", stiffness: 200, damping: 12 },
                            },
                          }}
                          className={`text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter uppercase inline-block ${
                            char === " " ? "w-3 sm:w-6" : ""
                          } transition-colors duration-300 ${
                            isActive(link.href)
                              ? "text-[#fbbf24]"
                              : "text-white/40 group-hover:text-[#fbbf24]"
                          }`}
                          style={{ 
                            transformOrigin: "left center",
                            transitionDelay: `${charIndex * 0.05}s`
                          }}
                        >
                          {char}
                        </motion.span>
                      ))}
                    </motion.span>
                  </Link>
                ))}
              </div>

              {/* Bottom Actions / Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ delay: 0.6, duration: 0.4 }}
                className="absolute bottom-8 left-8 md:left-16 lg:left-24 flex flex-col gap-2"
              >
                <p className="text-white/30 text-[10px] font-mono tracking-widest uppercase">Social</p>
                <div className="flex gap-6">
                  <a
                    href="https://github.com/GonzaloMartinezz"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/50 text-xs sm:text-sm font-bold tracking-widest hover:text-white transition-colors"
                  >
                    GITHUB
                  </a>
                  <a
                    href="mailto:gonzalomartinezzz04@gmail.com"
                    className="text-white/50 text-xs sm:text-sm font-bold tracking-widest hover:text-white transition-colors"
                  >
                    EMAIL
                  </a>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}