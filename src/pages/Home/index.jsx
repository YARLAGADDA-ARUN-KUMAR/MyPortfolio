import { AboutSection, ContactSection, HeroSection, Navbar, ProjectsSection, SkillsSection, StarBackground, ToggleTheme} from "../../components/index";


export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <ToggleTheme />
      <StarBackground />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  )
};
