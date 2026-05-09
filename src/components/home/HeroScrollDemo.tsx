"use client";
import React from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import Image from "next/image";

export function HeroScrollDemo() {
  return (
    <div className="flex flex-col overflow-hidden py-100 md:py-16 lg:pt-200">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-slate-900">
              Lleva tus proyectos al <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none text-blue-600">
                Siguiente Nivel
              </span>
            </h1>
          </>
        }
      >
        <Image
          src="/bachstage.png"
          alt="hero"
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
