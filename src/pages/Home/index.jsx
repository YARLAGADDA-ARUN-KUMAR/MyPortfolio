import {
  AboutSection,
  ContactSection,
  CosmicBackground,
  CustomCursor,
  HeroSection,
  Navbar,
  ProjectsSection,
  AchievementsSection,
  SkillsSection,
  SmoothScroll,
} from "../../components/index";

export default function Home() {
  return (
    <SmoothScroll>
      <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        <CustomCursor />
        <CosmicBackground />
        <Navbar />
        <main>
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <AchievementsSection />
          <ContactSection />
        </main>
      </div>
    </SmoothScroll>
  );
}
