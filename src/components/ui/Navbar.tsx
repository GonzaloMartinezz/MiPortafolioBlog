"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaGithub } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeToggle } from "./ThemeToggle";
import { useState, useEffect } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Proyectos" },
  { href: "/who", label: "Quién soy" },
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
      ? "text-blue-600"
      : "text-slate-500 hover:text-slate-900 dark:hover:text-white"}
  `;

  return (
    <>
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`w-full flex items-center justify-between py-5 md:py-6 transition-all duration-300 ${
          scrolled ? "py-3 md:py-4" : ""
        }`}
      >
        {/* LOGO */}
        <div className="flex-shrink-0">
          <Link href="/" className="group" onClick={() => setMobileOpen(false)}>
            <h2 className="font-display text-xl sm:text-2xl font-black tracking-tight uppercase text-slate-900 dark:text-white leading-none transition-colors">
              GONZALO<span className="text-blue-600">.</span>
            </h2>
          </Link>
        </div>

        {/* MENÚ DESKTOP */}
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

        {/* ICONOS DERECHA */}
        <div className="flex gap-2 sm:gap-3 items-center">
          {/* GitHub */}
          <a
            href="https://github.com/GonzaloMartinezz"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-xl flex items-center justify-center text-slate-600 dark:text-slate-300 hover:text-white hover:bg-slate-900 dark:hover:bg-white dark:hover:text-slate-900 transition-all duration-300 hover:scale-110 hover:shadow-lg"
            aria-label="GitHub"
          >
            <FaGithub size={19} />
          </a>

          {/* Gmail / Contact */}
          <a
            href="mailto:gonzalomartinez@gmail.com"
            className="w-9 h-9 rounded-xl flex items-center justify-center text-slate-600 dark:text-slate-300 hover:text-white hover:bg-red-500 transition-all duration-300 hover:scale-110 hover:shadow-lg"
            aria-label="Email"
          >
            <HiOutlineMail size={20} />
          </a>

          {/* Theme Toggle */}
          <ThemeToggle />

          {/* Hamburger - Mobile Only */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden w-10 h-10 rounded-xl flex items-center justify-center text-slate-900 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-300"
            aria-label="Toggle menu"
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
      </motion.div>

      {/* MOBILE MENU - FULLSCREEN TRANSPARENT */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-50 md:hidden"
          >
            {/* Solid Background */}
            <div className="absolute inset-0 bg-white dark:bg-slate-950" />

            {/* Content Container */}
            <div className="relative z-10 flex flex-col h-full">

              {/* Top Bar - Logo + Close */}
              <div className="flex items-center justify-between px-6 py-5">
                <Link href="/" onClick={() => setMobileOpen(false)}>
                  <span className="font-display text-xl font-black uppercase text-slate-900 dark:text-white tracking-tight">
                    GONZALO<span className="text-blue-600">.</span>
                  </span>
                </Link>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="w-11 h-11 rounded-2xl flex items-center justify-center text-slate-900 dark:text-white bg-slate-100/80 dark:bg-slate-800/80 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all"
                  aria-label="Close menu"
                >
                  <HiX size={22} />
                </button>
              </div>

              {/* Nav Links - Centered */}
              <div className="flex-1 flex flex-col items-center justify-center gap-2 px-8">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ delay: 0.06 * i, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="w-full max-w-sm"
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className={`block text-center py-4 rounded-2xl text-2xl font-black tracking-tight uppercase transition-all duration-300 ${
                        isActive(link.href)
                          ? "text-blue-600 bg-blue-50/80 dark:bg-blue-900/20"
                          : "text-slate-800 dark:text-slate-200 hover:text-blue-600 hover:bg-slate-50/80 dark:hover:bg-slate-800/50"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* Bottom Actions */}
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.35, duration: 0.4 }}
                className="px-8 pb-10"
              >
                <div className="flex gap-3 max-w-sm mx-auto">
                  <a
                    href="https://github.com/GonzaloMartinezz"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-4 rounded-2xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 flex items-center justify-center gap-2.5 font-bold text-sm uppercase tracking-wider hover:scale-[1.02] active:scale-[0.98] transition-transform"
                  >
                    <FaGithub size={18} />
                    GitHub
                  </a>
                  <a
                    href="mailto:gonzalomartinez@gmail.com"
                    className="flex-1 py-4 rounded-2xl bg-red-500 text-white flex items-center justify-center gap-2.5 font-bold text-sm uppercase tracking-wider hover:scale-[1.02] active:scale-[0.98] transition-transform"
                  >
                    <HiOutlineMail size={18} />
                    Email
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