import Hero from "@/components/home/Hero";
import { HeroSlideshow } from "@/components/home/HeroSlideshow";
import Projects from "@/components/home/Projects";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen justify-between">
      <main className="flex-1 flex flex-col">
        {/* Hero Section - Logo + Video */}
        <Hero />

        {/* Slideshow Section */}
        <section className="py-8 sm:py-12 md:py-16 px-3 sm:px-4 bg-white border-t border-slate-100">
          <div className="max-w-6xl mx-auto">
            <HeroSlideshow />
          </div>
        </section>

        {/* Proyectos Section */}
        <section className="py-12 sm:py-16 md:py-20 px-3 sm:px-4 bg-slate-50">
          <div className="max-w-6xl mx-auto">
            <Projects />
          </div>
        </section>
      </main>
    </div>
  );
}