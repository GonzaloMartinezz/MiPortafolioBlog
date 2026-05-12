import Projects from "@/components/home/Projects";
import InteractiveBentoGallery from "@/components/ui/interactive-bento-gallery";
import { ProjectSpotlight } from "@/components/home/ProjectSpotlight";

export default function ProjectsPage() {
  const projectGalleryItems = [
    {
      id: 1,
      type: "image",
      title: "Centro Odontológico C&M",
      desc: "Sistema de gestión dental con citas y historias clínicas",
      url: "/coc&m.png",
      span: "md:col-span-1 md:row-span-2 sm:col-span-1 sm:row-span-2",
      links: "https://app-consultorio-odontologico.vercel.app/",
    },
    {
      id: 2,
      type: "image",
      title: "Tarjeta Titanio",
      desc: "Plataforma premium de gestión de tarjetas de crédito",
      url: "/TT.png",
      span: "md:col-span-1 md:row-span-2 sm:col-span-1 sm:row-span-2",
      links: "https://tarjetatitanio.vercel.app/",
    },
    {
      id: 3,
      type: "image",
      title: "MalibuStyle",
      desc: "E-commerce de indumentaria deportiva con Stripe",
      url: "/MS.png",
      span: "md:col-span-1 md:row-span-2 sm:col-span-1 sm:row-span-2",
      links: "https://malibustyle.vercel.app/",
    },
    {
      id: 4,
      type: "image",
      title: "Club Belgrano CyD",
      desc: "Plataforma para club deportivo de Tucumán",
      url: "/CB.png",
      span: "md:col-span-1 md:row-span-2 sm:col-span-1 sm:row-span-2",
      links: "https://app-club-belgranocyd.vercel.app/",
    },
    {
      id: 5,
      type: "image",
      title: "GOstats",
      desc: "Gestor financiero con análisis de gastos",
      url: "/GoStats.png",
      span: "md:col-span-1 md:row-span-2 sm:col-span-1 sm:row-span-2",
      links: "https://app-gostats.vercel.app/",
    },
    {
      id: 6,
      type: "image",
      title: "ClickHouse",
      desc: "Plataforma inmobiliaria para departamentos",
      url: "/ClickHouse.png",
      span: "md:col-span-1 md:row-span-2 sm:col-span-1 sm:row-span-2",
      links: "https://app-clickhouse.vercel.app/",
    },
    {
      id: 7,
      type: "image",
      title: "NutriAppGO",
      desc: "Plataforma para nutricionistas y clientes",
      url: "/NutriApp.png",
      span: "md:col-span-1 md:row-span-2 sm:col-span-1 sm:row-span-2",
      links: "https://nutriappgo.vercel.app/",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-1">
        {/* Galería Interactiva */}
        <section className="py-12 sm:py-16 md:py-20 px-3 sm:px-4">
          <InteractiveBentoGallery
            mediaItems={projectGalleryItems}
            title="Galería de Proyectos"
            description="Explora y descubre mis proyectos destacados"
          />
        </section>

        {/* Project Spotlight Section */}
        <ProjectSpotlight 
          projects={projectGalleryItems.map((item) => ({
            id: item.id,
            title: item.title,
            description: item.desc,
            image: item.url,
            demoLink: item.links,
            codeLink: "#", // Assuming code link isn't in gallery items yet
          }))}
        />

        <section className="py-12 sm:py-16 md:py-20 px-3 sm:px-4">
          <div className="max-w-6xl mx-auto">
            <Projects title="OTROS PROYECTOS" />
          </div>
        </section>
      </div>
    </div>
  );
}
