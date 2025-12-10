import Navbar from "@/components/ui/Navbar";
import Hero from "@/components/home/Hero";
import Footer from "@/components/ui/Footer"; // <-- Importamos el Footer nuevo

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen justify-between">
      {/* Navbar Arriba */}
      <Navbar />

      {/* Hero en el Centro (verticalmente expandido) */}
      <main className="flex-1 flex flex-col justify-center">
        <Hero />
      </main>

      {/* Footer Abajo */}
      <Footer />
    </div>
  );
}