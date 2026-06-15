"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const projects = [
  {
    id: "01",
    client: "Client",
    title: "Nextlevel Studio",
    images: [
      "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055344_5eff02e0-87a5-41ce-b64f-eb08da8f33db.png&w=1280&q=85",
      "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055431_11d841fd-8b41-46a5-82e4-b04f2407a7d8.png&w=1280&q=85",
      "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055451_e317bf2d-28d4-48cc-86b0-6f72f25b6327.png&w=1280&q=85",
    ],
  },
  {
    id: "02",
    client: "Personal",
    title: "Aura Brand Identity",
    images: [
      "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055654_911201c5-36d9-4bc6-bac7-331adfce159f.png&w=1280&q=85",
      "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055723_5ceda0b8-d9c2-4665-b2e3-83ba19ba76d1.png&w=1280&q=85",
      "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055753_adc5dcbd-a8e6-49c0-b43a-9b030d835cea.png&w=1280&q=85",
    ],
  },
  {
    id: "03",
    client: "Client",
    title: "Solaris Digital",
    images: [
      "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055759_963cfb0b-4bd1-4b0f-9d0a-09bd6cf95b2f.png&w=1280&q=85",
      "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_060108_438f781a-9846-4dcc-89ab-c4e6cb830f5b.png&w=1280&q=85",
      "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055818_9d062121-ad7e-46b9-999a-1a6a692ef1ee.png&w=1280&q=85",
    ],
  },
];

const LiveProjectButton = () => (
  <button className="rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] font-medium uppercase tracking-widest px-8 py-3 sm:px-10 sm:py-3.5 text-sm sm:text-base hover:bg-[#D7E2EA]/10 transition-colors shrink-0">
    Live Project
  </button>
);

const Card = ({
  project,
  index,
  progress,
  range,
  targetScale,
}: {
  project: typeof projects[0];
  index: number;
  progress: any;
  range: [number, number];
  targetScale: number;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  // When scroll progress goes from range[0] to range[1], scale goes from 1 to targetScale
  const scale = useTransform(progress, range, [1, targetScale]);
  
  // Opacity fade when stacking over each other
  const opacity = useTransform(progress, range, [1, 0.5]);

  return (
    <div className="h-screen w-full flex items-center justify-center sticky top-0">
      <motion.div
        ref={containerRef}
        style={{ scale, opacity, top: `calc(5vh + ${index * 25}px)` }}
        className="relative flex flex-col justify-between h-[85vh] w-full max-w-6xl mx-auto border-2 border-[#D7E2EA] bg-[#0C0C0C] rounded-[40px] sm:rounded-[50px] md:rounded-[60px] p-6 sm:p-8 md:p-10 lg:p-12 transform-origin-top"
      >
        {/* Top Row: Info */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8 shrink-0">
          <div className="flex items-center gap-6">
            <span className="text-6xl sm:text-7xl md:text-8xl font-black hero-heading">
              {project.id}
            </span>
            <div className="flex flex-col justify-center">
              <span className="text-[#D7E2EA] uppercase tracking-[0.2em] text-xs sm:text-sm md:text-base font-semibold mb-1">
                {project.client}
              </span>
              <h3 className="text-2xl sm:text-3xl md:text-4xl text-[#D7E2EA] font-semibold">
                {project.title}
              </h3>
            </div>
          </div>
          <LiveProjectButton />
        </div>

        {/* Bottom Row: Images Grid */}
        <div className="flex gap-4 sm:gap-6 w-full h-full min-h-0">
          {/* Left Column (40%) */}
          <div className="flex flex-col gap-4 sm:gap-6 w-[40%] shrink-0">
            <div className="w-full h-[clamp(130px,16vw,230px)] rounded-[30px] sm:rounded-[40px] md:rounded-[50px] overflow-hidden">
              <img
                src={project.images[0]}
                alt={`${project.title} detail 1`}
                className="w-full h-full object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-500"
              />
            </div>
            <div className="w-full flex-1 rounded-[30px] sm:rounded-[40px] md:rounded-[50px] overflow-hidden">
              <img
                src={project.images[1]}
                alt={`${project.title} detail 2`}
                className="w-full h-full object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>

          {/* Right Column (60%) */}
          <div className="w-[60%] h-full rounded-[30px] sm:rounded-[40px] md:rounded-[50px] overflow-hidden">
            <img
              src={project.images[2]}
              alt={`${project.title} main`}
              className="w-full h-full object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-500"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export const JackProjectsSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section 
      className="relative bg-[#0C0C0C] text-[#D7E2EA] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 z-10 font-['Kanit',sans-serif] px-4 sm:px-6 md:px-8 py-20"
    >
      <style dangerouslySetInnerHTML={{__html: `
        @import url('https://fonts.googleapis.com/css2?family=Kanit:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
        
        .hero-heading {
          background: linear-gradient(180deg, #646973 0%, #BBCCD7 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
      `}} />

      <div className="max-w-7xl mx-auto mb-20 text-center md:text-left">
        <h2 className="text-6xl md:text-8xl font-black hero-heading uppercase">
          Project
        </h2>
      </div>

      <div ref={containerRef} className="relative mt-[5vh]">
        {projects.map((project, i) => {
          const targetScale = 1 - (projects.length - 1 - i) * 0.03;
          return (
            <Card
              key={project.id}
              project={project}
              index={i}
              progress={scrollYProgress}
              range={[i * 0.33, 1]}
              targetScale={targetScale}
            />
          );
        })}
      </div>
    </section>
  );
};

export default JackProjectsSection;
