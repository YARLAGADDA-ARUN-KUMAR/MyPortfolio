import { Trophy, Award, CheckCircle } from "lucide-react";

export const AchievementsSection = () => {
  const achievements = [
    {
      year: "2025",
      title: "Hackathon Winner — Blockchain Special Track",
      event: "Mission: Schrodinger’s Cat",
      icon: <Trophy className="h-6 w-6 text-yellow-500" />,
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
      details: [
        "Selected for PayPal's 6-month Career Academy focused on software engineering and professional development.",
        "Participated in mentorship sessions covering technical interviews, networking, and industry practices.",
      ],
    },
  ];

  return (
    <section id="achievements" className="py-24 px-4 relative bg-secondary/10">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight font-display mb-4 text-center">
            Achievements & <span className="text-primary text-glow">Recognition</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            A selection of milestones and accolades reflecting my dedication and passion.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl border border-border bg-card/45 backdrop-blur-xs hover:border-primary/40 transition-all duration-300 card-hover flex flex-col justify-between text-left"
            >
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <div className="p-3 rounded-xl bg-primary/10 text-primary">
                    {achievement.icon}
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-primary/10 text-primary border border-primary/20">
                    {achievement.year}
                  </span>
                </div>

                <div>
                  <h3 className="text-xl font-bold font-display text-foreground leading-snug">
                    {achievement.title}
                  </h3>
                  <p className="text-xs font-semibold text-primary/80 mt-1 uppercase tracking-wider">
                    {achievement.event}
                  </p>
                </div>

                <ul className="space-y-2.5 pt-2">
                  {achievement.details.map((detail, idx) => (
                    <li key={idx} className="flex gap-3 items-start text-xs text-muted-foreground leading-relaxed">
                      <CheckCircle size={14} className="text-emerald-500 shrink-0 mt-0.5" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
