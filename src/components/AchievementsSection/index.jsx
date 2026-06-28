import { Trophy, Award, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

// ============================================
// ACHIEVEMENTS SECTION
// Animated cards with glow effects
// Staggered scroll reveal
// Year badges with pulse
// ============================================

const fadeInUp = {
  initial: { opacity: 0, y: 40, filter: "blur(6px)" },
  whileInView: { opacity: 1, y: 0, filter: "blur(0px)" },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
};

export const AchievementsSection = () => {
  const achievements = [
    {
      year: "2025",
      title: "Hackathon Winner — Blockchain Special Track",
      event: "Mission: Schrodinger's Cat",
      icon: <Trophy className="h-6 w-6 text-yellow-500" />,
      iconGlow: "rgba(234, 179, 8, 0.2)",
      details: [
        "Won the Blockchain Special Track at Mission: Schrodinger's Cat, competing against teams across India.",
        "Developed a Web3-enabled game using Unity WebGL, React, and MetaMask wallet integration for blockchain rewards.",
      ],
    },
    {
      year: "2025",
      title: "PayPal Career Academy Selection",
      event: "Selected Nationwide",
      icon: <Award className="h-6 w-6 text-primary" />,
      iconGlow: "rgba(139, 92, 246, 0.2)",
      details: [
        "Selected for PayPal's 6-month Career Academy focused on software engineering and professional development.",
        "Participated in mentorship sessions covering technical interviews, networking, and industry practices.",
      ],
    },
  ];

  return (
    <section id="achievements" className="py-32 px-6 md:px-12 lg:px-20 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div className="mb-20" {...fadeInUp}>
          <h2 className="section-heading text-left">
            Achievements & <span className="text-primary text-glow">Recognition</span>
          </h2>
          <p className="section-subheading text-left mt-4">
            A selection of milestones and accolades reflecting my dedication and passion.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              className="group p-8 rounded-2xl border border-border/60 bg-card/50 backdrop-blur-sm hover:border-primary/30 hover:bg-card/70 transition-all duration-500 flex flex-col justify-between text-left relative overflow-hidden"
              initial={{ opacity: 0, y: 50, rotateX: -5 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.7,
                delay: index * 0.15,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              {/* Glow effect on hover */}
              <div
                className="absolute -top-20 -right-20 w-40 h-40 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-3xl"
                style={{ background: achievement.iconGlow }}
              />

              <div className="space-y-5 relative z-10">
                <div className="flex justify-between items-start">
                  <div className="p-3 rounded-xl bg-card/40 border border-border/30 group-hover:border-primary/20 transition-all duration-300">
                    {achievement.icon}
                  </div>
                  <span className="px-3 py-1 rounded-full text-[10px] font-mono tracking-wider bg-primary/15 text-primary border border-primary/30">
                    {achievement.year}
                  </span>
                </div>

                <div>
                  <h3 className="text-lg font-display font-bold text-foreground leading-snug">
                    {achievement.title}
                  </h3>
                  <p className="text-xs font-mono tracking-[0.1em] text-primary/80 mt-1.5 uppercase">
                    {achievement.event}
                  </p>
                </div>

                <ul className="space-y-3 pt-2">
                  {achievement.details.map((detail, idx) => (
                    <motion.li
                      key={idx}
                      className="flex gap-3 items-start text-sm text-foreground/80 leading-relaxed"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.4,
                        delay: 0.3 + idx * 0.1,
                      }}
                    >
                      <CheckCircle size={14} className="text-emerald-400 shrink-0 mt-0.5" />
                      <span>{detail}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
