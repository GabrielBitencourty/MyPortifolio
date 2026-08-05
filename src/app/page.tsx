import { Navbar } from "@/components/navbar/Navbar";
import { Hero } from "@/components/sections/Home";
import { About } from "@/components/sections/About";
import { Projects } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />

      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />

      <Footer />
    </main>
  );
}