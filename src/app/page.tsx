import Hero from "@/components/home/Hero";
import Timeline from "@/components/home/Timeline";
import Projects from "@/components/home/Projects";
import LatestPosts from "@/components/home/LatesPosts"; 

export default function Home() {
  return (
    <div className="space-y-24 pb-20">
      {/* Sección Principal */}
      <Hero />
      
      {/* Sección Historia */}
      <Timeline />
      
      {/* Sección Proyectos */}
      <Projects />
      
      {/* Sección Blog (Nueva) */}
      <LatestPosts />
    </div>
  );
}