"use client";
import React from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import Image from "next/image";

export function HeroScrollDemo() {
  return (
    <div className="flex flex-col overflow-hidden py-20">
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
          src="/coc&m,.png"
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
          priority
        />
      </ContainerScroll>
    </div>

  );
}
