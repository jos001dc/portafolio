import { ThemeToggle } from "../components/ThemeToggle";
import { StarBackground } from "../components/StarBackground";
import { Navbar } from "../components/Navbar";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/aboutSection";
import { SkillsSection } from "../components/skillsSection";
import { ProjectsSection } from "../components/ProjectsSection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";

export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/*ThemeToggle*/}
      <ThemeToggle />

      {/*StartBackground*/}
      <StarBackground />

      {/*navbar*/}
      <Navbar />
      {/* Main */}
      <main>
        < HeroSection />
        <AboutSection />
        <SkillsSection/>
        <ProjectsSection/>
        <ContactSection/>
      </main>
      {/*footer*/}
      <Footer/>



    </div>
  )
}