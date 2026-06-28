import { Code2, Layout, Server, Terminal } from "lucide-react";

export const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code2 className="h-5 w-5 text-primary" />,
      skills: ["C", "C++", "Python", "JavaScript", "TypeScript"],
    },
    {
      title: "Frontend Development",
      icon: <Layout className="h-5 w-5 text-primary" />,
      skills: ["HTML", "CSS", "TailwindCSS", "React.js", "Next.js"],
    },
    {
      title: "Backend Development",
      icon: <Server className="h-5 w-5 text-primary" />,
      skills: ["Node.js", "Express.js", "MongoDB", "WebSockets", "Nest.js"],
    },
    {
      title: "Developer Tools",
      icon: <Terminal className="h-5 w-5 text-primary" />,
      skills: ["VS Code", "Git", "GitHub", "GitHub Actions", "Docker"],
    },
  ];

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/20">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight font-display mb-4 text-center">
            Technical <span className="text-primary text-glow">Skills</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            A comprehensive overview of the languages, frameworks, and developer tools in my stack.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl border border-border bg-card/45 backdrop-blur-xs hover:border-primary/40 transition-all duration-300 card-hover flex flex-col items-start text-left"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 rounded-lg bg-primary/10 text-primary">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold font-display text-foreground">
                  {category.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2.5">
                {category.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-3.5 py-1.5 rounded-lg text-xs font-semibold border border-border bg-secondary/50 text-foreground hover:bg-primary/10 hover:border-primary/45 hover:text-primary transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
