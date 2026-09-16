import { LanguageProvider } from "@/lib/i18n";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import SaroutyCaseStudy from "@/components/SaroutyCaseStudy";
import Videos from "@/components/Videos";
import Clients from "@/components/Clients";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <LanguageProvider>
      <main className="flex flex-col min-h-screen">
        <Navbar />
        <Hero />
        <About />
        <Clients />
        <Experience />
        <Skills />
        <Projects />
        <SaroutyCaseStudy />
        <Videos />
        <Contact />
        <Footer />
      </main>
    </LanguageProvider>
  );
}
