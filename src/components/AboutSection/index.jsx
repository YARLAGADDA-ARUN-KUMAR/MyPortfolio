import { Briefcase, GraduationCap, Code2, Cpu, Globe } from 'lucide-react';
import { motion } from 'framer-motion';

// ============================================
// ABOUT SECTION — Interactive Timeline
// Animated glowing connector line
// Scroll-reveal with stagger
// Hover reveals details
// ============================================

const fadeInUp = {
  initial: { opacity: 0, y: 40, filter: "blur(6px)" },
  whileInView: { opacity: 1, y: 0, filter: "blur(0px)" },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
};

export const AboutSection = () => {
  const timeline = [
    {
      type: 'work',
      title: 'Software Developer Intern',
      institution: 'NighaTech Global Pvt Ltd',
      period: 'June 2026 – Present',
      details: [
        'Developing and maintaining full-stack web applications using React, Next.js, Nest.js, and MongoDB.',
        'Implementing backend APIs, database operations, debugging, testing, and deployment workflows.'
      ]
    },
    {
      type: 'education',
      title: 'Bachelor of Technology in Computer Science & Engineering',
      institution: 'SRM University, Andhra Pradesh',
      period: '2024 - Present',
      details: ['CGPA: 9.4 / 10.0', 'Focused on data structures, algorithms, and software engineering.']
    },
    {
      type: 'education',
      title: 'Intermediate (MPC)',
      institution: 'Sri Chaitanya Junior College, Machilipatnam',
      period: '2022 - 2024',
      details: ['Percentage: 97.6%', 'Major in Mathematics, Physics, and Chemistry.']
    },
    {
      type: 'education',
      title: 'SSC (10th Grade)',
      institution: 'Sri Chaitanya School, Challapalli',
      period: '2021 - 2022',
      details: ['Percentage: 91.83%']
    }
  ];

  const focusAreas = [
    {
      icon: <Code2 className="h-5 w-5" />,
      title: 'Full-Stack Development',
      description: 'Building end-to-end web architectures with modern JavaScript framework stacks.'
    },
    {
      icon: <Globe className="h-5 w-5" />,
      title: 'Web3 & Game Systems',
      description: 'Integrating Unity WebGL games with React and MetaMask wallet systems.'
    },
    {
      icon: <Cpu className="h-5 w-5" />,
      title: 'Software Engineering',
      description: 'Writing performant APIs, handling databases, and implementing CI/CD pipelines.'
    }
  ];

  return (
    <section id="about" className="py-32 px-6 md:px-12 lg:px-20 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div className="mb-20" {...fadeInUp}>
          <h2 className="section-heading text-left">
            About <span className="text-primary text-glow">Me</span>
          </h2>
          <p className="section-subheading text-left mt-4">
            Passionate about translating complex technical requirements into elegant, high-fidelity digital solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Left Column: Summary & Focus Areas */}
          <div className="lg:col-span-5 space-y-10 text-left">
            <motion.div className="space-y-5" {...fadeInUp}>
              <h3 className="text-xl font-display font-bold text-foreground">Who I Am</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                I'm a Software Developer Intern at NighaTech Global, building responsive web solutions using React, Next.js, and Nest.js.
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed">
                I enjoy designing clean, scalable architectures and integrating them with interactive client applications, ranging from administrative systems to blockchain-based gaming platforms.
              </p>
            </motion.div>

            <div className="space-y-4">
              <motion.h4
                className="text-xs font-mono tracking-[0.2em] uppercase text-muted-foreground/60"
                {...fadeInUp}
              >
                Areas of Focus
              </motion.h4>
              <div className="space-y-3">
                {focusAreas.map((focus, index) => (
                  <motion.div
                    key={index}
                    className="group flex items-start gap-4 p-5 rounded-xl border border-border/50 bg-card/20 backdrop-blur-xs hover:border-primary/30 hover:bg-card/40 transition-all duration-500"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{
                      duration: 0.6,
                      delay: index * 0.1,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                  >
                    <div className="p-2.5 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors duration-300">
                      {focus.icon}
                    </div>
                    <div>
                      <h5 className="font-semibold text-sm text-foreground">{focus.title}</h5>
                      <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                        {focus.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Timeline */}
          <div className="lg:col-span-7 space-y-8 text-left">
            <motion.h3
              className="text-xl font-display font-bold pl-6"
              {...fadeInUp}
            >
              Experience & Education
            </motion.h3>
            <div className="relative ml-4 pl-8 space-y-10">
              {/* Animated timeline line */}
              <motion.div
                className="absolute left-0 top-2 w-[2px] bg-gradient-to-b from-primary/60 via-primary/30 to-transparent"
                initial={{ height: 0 }}
                whileInView={{ height: "100%" }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
              />

              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  className="relative group"
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.15,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  {/* Glowing circle marker */}
                  <div className="absolute -left-[37px] top-1 p-1.5 rounded-full bg-background border-2 border-border group-hover:border-primary group-hover:shadow-[0_0_12px_rgba(139,92,246,0.4)] transition-all duration-500">
                    {item.type === 'work' ? (
                      <Briefcase size={12} className="text-primary" />
                    ) : (
                      <GraduationCap size={12} className="text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                    )}
                  </div>

                  {/* Content card */}
                  <div className="p-5 rounded-xl border border-border/30 bg-card/10 hover:bg-card/30 hover:border-border/60 transition-all duration-500 space-y-2">
                    <span className="text-[10px] font-mono tracking-[0.15em] text-primary/70 uppercase">
                      {item.period}
                    </span>
                    <h4 className="text-sm font-bold text-foreground leading-snug">
                      {item.title}
                    </h4>
                    <p className="text-xs font-medium text-muted-foreground">
                      {item.institution}
                    </p>
                    {item.details && (
                      <ul className="space-y-1.5 mt-3 text-xs text-muted-foreground/80 leading-relaxed">
                        {item.details.map((detail, idx) => (
                          <li key={idx} className="flex gap-2 items-start">
                            <span className="text-primary/50 mt-0.5">›</span>
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
