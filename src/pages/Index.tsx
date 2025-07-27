import Navigation from "@/components/Navigation"
import Hero from "@/components/Hero"
import About from "@/components/About"
import Skills from "@/components/Skills"
import Experience from "@/components/Experience"
import Projects from "@/components/Projects"
import Achievements from "@/components/Achievements"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"
import ScrollProgress from "@/components/ScrollProgress"
import BackToTop from "@/components/BackToTop"

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <ScrollProgress />
      <Navigation />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Achievements />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
};

export default Index;
