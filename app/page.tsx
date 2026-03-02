import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Building from "@/components/Building";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import Interests from "@/components/Interests";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <Building />
      <Experience />
      <Projects />
      <Education />
      <Skills />
      <Interests />
      <Footer />
    </main>
  );
}
