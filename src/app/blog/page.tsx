import Navbar from "@/components/ui/Navbar";
import LatestPosts  from "@/components/home/LatesPosts";
import Footer from "@/components/ui/Footer";

export default function BlogPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-1 py-10 md:py-20">
        <section className="text-center mb-16">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-slate-100 mb-4">
            Blog & Pensamientos
          </h1>
          <p className="text-slate-400">
            Compartiendo lo que aprendo sobre código, datos y tecnología.
          </p>
        </section>

        <LatestPosts />
      </main>

      <Footer />
    </div>
  );
}