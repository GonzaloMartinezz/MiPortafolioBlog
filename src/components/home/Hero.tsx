"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaInstagram, FaLinkedinIn, FaGithub, FaWhatsapp, FaEnvelope } from "react-icons/fa";

export default function Hero() {
  // Force cache invalidation
  // Social icons positioned responsively in a semi-circle along the edge of the profile picture
  const socials = [
    { id: 1, Icon: FaInstagram, color: "#E1306C", delay: 0.1, rotate: -12, href: "https://instagram.com", left: "calc(50% - 55%)", top: "calc(50% + 25%)", label: "Instagram" },
    { id: 2, Icon: FaLinkedinIn, color: "#0077B5", delay: 0.3, rotate: -4, href: "https://linkedin.com", left: "calc(50% - 38%)", top: "calc(50% + 50%)", label: "LinkedIn" },
    { id: 3, Icon: FaGithub, color: "#333", delay: 0.5, rotate: 0, href: "https://github.com/GonzaloMartinezz", left: "50%", top: "calc(100% + 16px)", label: "GitHub" },
    { id: 4, Icon: FaEnvelope, color: "#EA4335", delay: 0.2, rotate: 4, href: "/contact", left: "calc(50% + 38%)", top: "calc(50% + 50%)", label: "Email" },
    { id: 5, Icon: FaWhatsapp, color: "#25D366", delay: 0.6, rotate: 12, href: "https://wa.me/", left: "calc(50% + 55%)", top: "calc(50% + 25%)", label: "WhatsApp" },
  ];

  // Use a mounted state to prevent AdBlockers from causing hydration mismatch
  // by stripping social media <a> tags from the server HTML before React hydrates
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative w-full min-h-[78vh] bg-[#FDF6EC] flex flex-col items-center justify-center overflow-hidden px-6 md:px-12 pb-6 lg:pb-10 pt-16 lg:pt-24 font-sans">

      {/* Central Content */}
      <div className="relative z-10 flex flex-col items-center w-full max-w-6xl mx-auto mt-0 md:mt-2">

        {/* Profile Image Container - Con suficiente margen inferior para los iconos flotantes */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-20 w-56 h-56 md:w-64 md:h-64 mb-14 md:mb-8 mt-2 flex items-center justify-center"
        >
          {/* Profile Picture - Redondeado */}
          <div className="w-full h-full relative z-20 rounded-full overflow-hidden shadow-xl border-4 border-[#FDF6EC]">
            <img
              src="/LogoPerfil.jpg"
              alt="Gonzalo Martinez"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Floating Social Icons (Positioned in an arc around the logo) */}
          {mounted && socials.map((social) => (
            <div
              key={social.id}
              className="absolute z-10 w-12 h-12 -ml-6 -mt-6 md:w-14 md:h-14 md:-ml-7 md:-mt-7"
              style={{
                top: social.top,
                left: social.left,
              }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 25,
                  delay: social.delay * 0.5,
                }}
                className="w-full h-full"
              >
                <motion.a
                  href={social.href}
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  aria-label={social.label}
                  className="w-full h-full bg-white rounded-full flex items-center justify-center shadow-lg border border-black/5 pointer-events-auto cursor-pointer hover:scale-110 hover:shadow-xl transition-shadow duration-200"
                  style={{ color: social.color }}
                >
                  <social.Icon className="text-[22px] md:text-[26px]" />
                </motion.a>
              </motion.div>
            </div>
          ))}
        </motion.div>

        {/* Big Bold Title Container */}
        <div className="relative text-center z-20 flex flex-col items-center mt-2 md:mt-2">

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="font-black leading-tight tracking-tighter uppercase text-center flex flex-col items-center relative z-20 gap-2 md:gap-4 whitespace-nowrap"
            style={{
              color: "#F66C44",
              fontSize: "clamp(2.4rem, 11vw, 6.8rem)"
            }}
          >
            {/* WELCOME TO */}
            <span className="block tracking-tight">WELCOME TO</span>

            {/* MY PORTFOLIO with ball + underline */}
            <div className="relative mt-1 md:mt-0 flex items-center justify-center w-full">
              
              {/* Dummy spacer for perfect symmetry */}
              <div className="flex items-center justify-center -mt-2 md:-mt-4 opacity-0 pointer-events-none select-none" aria-hidden="true">
                <div className="text-[2rem] sm:text-[2.5rem] md:text-[clamp(2.5rem,5vw,4.5rem)] leading-none">
                  🏀
                </div>
              </div>

              <span className="relative mx-1 sm:mx-4 md:mx-6">
                MY PORTFOLIO
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.9, ease: "easeOut" }}
                  className="absolute -bottom-1 md:-bottom-3 left-0 right-0 h-3 md:h-5 rounded-full z-[-1]"
                  style={{ backgroundColor: "#F66C44", transformOrigin: "left" }}
                />
              </span>

              {/* The actual ball */}
              <motion.div
                className="z-50 flex items-center justify-center -mt-2 md:-mt-4"
              >
                <motion.div
                  animate={{ y: [0, -20, 0] }}
                  transition={{
                    y: {
                      duration: 0.5,
                      repeat: Infinity,
                      ease: "easeOut",
                      repeatDelay: 0.1,
                    },
                  }}
                  className="text-[2rem] sm:text-[2.5rem] md:text-[clamp(2.5rem,5vw,4.5rem)] leading-none filter drop-shadow-[0_10px_10px_rgba(0,0,0,0.3)] cursor-pointer hover:scale-110"
                >
                  🏀
                </motion.div>
              </motion.div>
            </div>
          </motion.h1>
        </div>

      </div>
    </section>
  );
}
