
import Hero from "@/components/home/Hero";
import Footer from "@/components/ui/Footer"; 

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen justify-between">
      {/* Hero en el Centro (verticalmente expandido) */}
      <main className="flex-1 flex flex-col justify-center">
        <Hero />
      </main>

      {/* Footer Abajo */}
      <Footer />
    </div>
  );
}