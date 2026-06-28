import { useState, useRef } from "react";
import { motion } from "framer-motion";

// ============================================
// SKILLS SECTION — Interactive Constellation
// Skills connected by category
// Hover highlights connections
// Experience indicators
// Scroll-reveal with stagger
// ============================================

const fadeInUp = {
  initial: { opacity: 0, y: 40, filter: "blur(6px)" },
  whileInView: { opacity: 1, y: 0, filter: "blur(0px)" },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
};

const skillCategories = [
  {
    id: "languages",
    title: "Languages",
    color: "139, 92, 246", // purple
    skills: [
      { name: "C", level: 75 },
      { name: "C++", level: 80 },
      { name: "Python", level: 85 },
      { name: "JavaScript", level: 95 },
      { name: "TypeScript", level: 85 },
    ],
  },
  {
    id: "frontend",
    title: "Frontend",
    color: "99, 102, 241", // indigo
    skills: [
      { name: "HTML", level: 95 },
      { name: "CSS", level: 90 },
      { name: "TailwindCSS", level: 90 },
      { name: "React.js", level: 95 },
      { name: "Next.js", level: 80 },
    ],
  },
  {
    id: "backend",
    title: "Backend",
    color: "16, 185, 129", // emerald
    skills: [
      { name: "Node.js", level: 90 },
      { name: "Express.js", level: 90 },
      { name: "MongoDB", level: 85 },
      { name: "WebSockets", level: 75 },
      { name: "Nest.js", level: 70 },
    ],
  },
  {
    id: "tools",
    title: "Dev Tools",
    color: "245, 158, 11", // amber
    skills: [
      { name: "VS Code", level: 95 },
      { name: "Git", level: 90 },
      { name: "GitHub", level: 90 },
      { name: "GitHub Actions", level: 70 },
      { name: "Docker", level: 65 },
    ],
  },
];

function SkillPill({ skill, categoryColor, delay, isHighlighted }) {
  return (
    <motion.div
      className="group relative"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: 0.5,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      <div
        className={`
          relative px-4 py-2.5 rounded-xl border transition-all duration-500 cursor-default
          ${isHighlighted
            ? "border-primary/50 bg-primary/15 shadow-[0_0_20px_rgba(139,92,246,0.15)]"
            : "border-border bg-card/50 hover:border-primary/30 hover:bg-card/70"
          }
        `}
      >
        <div className="flex items-center justify-between gap-4">
          <span className="text-sm font-medium text-foreground">{skill.name}</span>
          <span className="text-[11px] font-mono text-foreground/60">
            {skill.level}%
          </span>
        </div>

        {/* Skill level bar */}
        <div className="mt-2 h-[2px] w-full bg-border/30 rounded-full overflow-hidden">
          <motion.div
            className="h-full rounded-full"
            style={{
              background: `rgba(${categoryColor}, 0.8)`,
            }}
            initial={{ width: 0 }}
            whileInView={{ width: `${skill.level}%` }}
            viewport={{ once: true }}
            transition={{
              duration: 1,
              delay: delay + 0.3,
              ease: [0.16, 1, 0.3, 1],
            }}
          />
        </div>
      </div>
    </motion.div>
  );
}

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState(null);

  return (
    <section id="skills" className="py-32 px-6 md:px-12 lg:px-20 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div className="mb-20" {...fadeInUp}>
          <h2 className="section-heading text-left">
            Technical <span className="text-primary text-glow">Skills</span>
          </h2>
          <p className="section-subheading text-left mt-4">
            A comprehensive overview of the languages, frameworks, and developer tools in my stack.
          </p>
        </motion.div>

        {/* Category tabs */}
        <motion.div
          className="flex flex-wrap gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <button
            onClick={() => setActiveCategory(null)}
            className={`px-4 py-2 rounded-full text-xs font-semibold border transition-all duration-300 ${
              activeCategory === null
                ? "border-primary/50 bg-primary/15 text-primary"
                : "border-border/40 text-muted-foreground hover:border-primary/30 hover:text-foreground"
            }`}
            data-cursor-hover
          >
            All
          </button>
          {skillCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() =>
                setActiveCategory(activeCategory === cat.id ? null : cat.id)
              }
              className={`px-4 py-2 rounded-full text-xs font-semibold border transition-all duration-300 ${
                activeCategory === cat.id
                  ? "border-primary/50 bg-primary/15 text-primary"
                  : "border-border/40 text-muted-foreground hover:border-primary/30 hover:text-foreground"
              }`}
              data-cursor-hover
            >
              {cat.title}
            </button>
          ))}
        </motion.div>

        {/* Skill Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {skillCategories
            .filter((cat) => !activeCategory || cat.id === activeCategory)
            .map((category, catIndex) => (
              <motion.div
                key={category.id}
                className="space-y-5"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.6,
                  delay: catIndex * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                {/* Category header */}
                <div className="flex items-center gap-3">
                  <div
                    className="w-2 h-2 rounded-full"
                    style={{ background: `rgba(${category.color}, 0.8)` }}
                  />
                  <h3 className="text-lg font-display font-bold text-foreground">
                    {category.title}
                  </h3>
                </div>

                {/* Skills */}
                <div className="grid grid-cols-1 gap-2.5">
                  {category.skills.map((skill, skillIndex) => (
                    <SkillPill
                      key={skill.name}
                      skill={skill}
                      categoryColor={category.color}
                      delay={skillIndex * 0.06}
                      isHighlighted={activeCategory === category.id}
                    />
                  ))}
                </div>
              </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
};
