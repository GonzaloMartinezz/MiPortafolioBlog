"use client";
import React from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import Image from "next/image";

export function HeroScrollDemo() {
  return (
    <div className="flex flex-col overflow-hidden pt-8 sm:pt-16 md:pt-24 pb-4 sm:pb-8 md:pb-12">
      <ContainerScroll
        titleComponent={
          <div className="px-2 sm:px-4 md:px-8">
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-semibold text-slate-900 dark:text-white leading-tight md:leading-snug">
              Transformo ideas en{" "}
              <span className="text-slate-500 dark:text-slate-400">productos digitales</span>
              <br />
              <span className="text-3xl sm:text-5xl md:text-[6rem] font-black mt-1 sm:mt-2 leading-none text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 block">
                que generan impacto
              </span>
            </h1>
          </div>
        }
      >
        <div className="relative w-full h-full bg-slate-950 overflow-hidden">
          {/* Capa 1: Fondo difuminado por si la imagen queda chica */}
          <img
            src="/2.jpg"
            alt="Fondo Blur"
            className="absolute inset-0 w-full h-full object-cover blur-[40px] opacity-40 scale-110 pointer-events-none"
          />
          {/* Capa 2: Imagen principal expandida para llenar los bordes */}
          <img
            src="/2.jpg"
            alt="Demostración de proyecto"
            className="absolute inset-0 w-full h-full object-cover object-top z-10 pointer-events-none"
            draggable={false}
          />
          {/* Capa 3: Sutil filtro oscuro */}
          <div className="absolute inset-0 bg-slate-950/20 z-20 pointer-events-none" />
        </div>
      </ContainerScroll>
    </div>
  );
}
