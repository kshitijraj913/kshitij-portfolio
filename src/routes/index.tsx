import { createFileRoute } from "@tanstack/react-router";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Certifications } from "@/components/Certifications";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Kshithij Haibate — Web & Python Developer · AI Explorer" },
      { name: "description", content: "Portfolio of Kshithij Haibate — student developer building web, Python, and AI-powered projects. Available for internships and collaborations." },
      { property: "og:title", content: "Kshithij Haibate — Developer Portfolio" },
      { property: "og:description", content: "Web Developer · Python Developer · AI Explorer" },
    ],
  }),
});

function Index() {
  return (
    <div className="relative min-h-screen">
      <AnimatedBackground />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
