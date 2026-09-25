 import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutMenuGallery from "./components/AboutMenuGallery";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-orange-500 selection:text-white">
      <Navbar />
      <Hero />
      <AboutMenuGallery />
    </main>
  );
}