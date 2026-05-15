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
        <Image
          src="/bachstage.png"
          alt="Demostración de proyecto — Software a medida"
          width={3840}
          height={2160}
          className="mx-auto object-cover h-full w-full object-top"
          draggable={false}
          priority
        />
      </ContainerScroll>
    </div>
  );
}
