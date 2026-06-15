import React from "react";
import JackProjectsSection from "@/components/home/JackProjectsSection";

export const metadata = {
  title: "Jack -- 3D Creator",
};

export default function JackPortfolioPage() {
  return (
    <main className="min-h-screen bg-[#0C0C0C] overflow-x-clip selection:bg-[#BBCCD7]/30">
      {/* 
        The prompt also mentioned a ServicesSection prior to ProjectsSection. 
        We'll place a placeholder for it here.
      */}
      <section className="h-[80vh] flex items-center justify-center bg-[#0C0C0C] text-[#D7E2EA]">
        <h1 className="text-4xl">Services Section (Placeholder)</h1>
      </section>

      <JackProjectsSection />
    </main>
  );
}
