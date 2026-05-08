import Projects from "@/components/home/Projects";
import InteractiveBentoGallery from "@/components/ui/interactive-bento-gallery";

export default function ProjectsPage() {
  const projectGalleryItems = [
    {
      id: 1,
      type: "image",
      title: "Centro Odontológico C&M",
      desc: "Sistema de gestión dental con citas y historias clínicas",
      url: "https://images.unsplash.com/photo-1579154204601-01d430248e4d?w=500&h=500&fit=crop",
      span: "md:col-span-1 md:row-span-2 sm:col-span-1 sm:row-span-2",
    },
    {
      id: 2,
      type: "image",
      title: "Tarjeta Titanio",
      desc: "Plataforma premium de gestión de tarjetas de crédito",
      url: "https://images.unsplash.com/photo-1563013544-824ae1bf4b4f?w=500&h=500&fit=crop",
      span: "md:col-span-2 md:row-span-2 sm:col-span-2 sm:row-span-2",
    },
    {
      id: 3,
      type: "image",
      title: "MalibuStyle",
      desc: "E-commerce de indumentaria deportiva con Stripe",
      url: "https://images.unsplash.com/photo-1552820728-8ac41f1ce891?w=500&h=500&fit=crop",
      span: "md:col-span-1 md:row-span-2 sm:col-span-1 sm:row-span-2",
    },
    {
      id: 4,
      type: "image",
      title: "Club Belgrano CyD",
      desc: "Plataforma para club deportivo de Tucumán",
      url: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=500&h=500&fit=crop",
      span: "md:col-span-2 md:row-span-2 sm:col-span-2 sm:row-span-2",
    },
    {
      id: 5,
      type: "image",
      title: "GOstats",
      desc: "Gestor financiero con análisis de gastos",
      url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=500&fit=crop",
      span: "md:col-span-1 md:row-span-2 sm:col-span-1 sm:row-span-2",
    },
    {
      id: 6,
      type: "image",
      title: "ClickHouse",
      desc: "Plataforma inmobiliaria para departamentos",
      url: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=500&h=500&fit=crop",
      span: "md:col-span-2 md:row-span-2 sm:col-span-2 sm:row-span-2",
    },
    {
      id: 7,
      type: "image",
      title: "NutriAppGO",
      desc: "Plataforma para nutricionistas y clientes",
      url: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500&h=500&fit=crop",
      span: "md:col-span-1 md:row-span-2 sm:col-span-1 sm:row-span-2",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">
        {/* Galería Interactiva */}
        <section className="py-12 sm:py-16 md:py-20 px-3 sm:px-4">
          <InteractiveBentoGallery
            mediaItems={projectGalleryItems}
            title="Galería de Proyectos"
            description="Explora y descubre mis proyectos destacados"
          />
        </section>

        {/* Proyectos Detallados */}
        <section className="py-12 sm:py-16 md:py-20 px-3 sm:px-4">
          <div className="max-w-6xl mx-auto">
            <Projects />
          </div>
        </section>
      </main>
    </div>
  );
}
