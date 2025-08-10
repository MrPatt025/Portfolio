import Navigation from "@/components/Navigation"
import Hero3D from "@/components/Hero3D"
import About from "@/components/About"
import Skills3D from "@/components/Skills3D"
import Experience from "@/components/Experience"
import Projects3D from "@/components/Projects3D"
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
        <Hero3D />
        <About />
        <Skills3D />
        <Experience />
        <Projects3D />
        <Achievements />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
};

export default Index;
