import { Briefcase, GraduationCap, Code2, Cpu, Globe } from 'lucide-react';

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
            icon: <Code2 className="h-5 w-5 text-primary" />,
            title: 'Full-Stack Development',
            description: 'Building end-to-end web architectures with modern JavaScript framework stacks.'
        },
        {
            icon: <Globe className="h-5 w-5 text-primary" />,
            title: 'Web3 & Game Systems',
            description: 'Integrating Unity WebGL games with React and MetaMask wallet systems.'
        },
        {
            icon: <Cpu className="h-5 w-5 text-primary" />,
            title: 'Software Engineering',
            description: 'Writing performant APIs, handling databases, and implementing CI/CD pipelines.'
        }
    ];

    return (
        <section id="about" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight font-display mb-4 text-center">
                        About <span className="text-primary text-glow">Me</span>
                    </h2>
                    <p className="text-muted-foreground max-w-xl mx-auto">
                        Passionate about translating complex technical requirements into elegant, high-fidelity digital solutions.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                    {/* Left Column: Summary & Focus Areas */}
                    <div className="lg:col-span-5 space-y-8 text-left">
                        <div className="space-y-4">
                            <h3 className="text-2xl font-bold font-display">Who I Am</h3>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                                I'm a Software Developer Intern at NighaTech Global, building responsive web solutions using React, Next.js, and Nest.js.
                            </p>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                                I enjoy designing clean, scalable architectures and integrating them with interactive client applications, ranging from administrative systems to blockchain-based gaming platforms.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <h4 className="text-lg font-bold font-display text-muted-foreground uppercase tracking-wider text-xs">
                                Areas of Focus
                            </h4>
                            <div className="space-y-3">
                                {focusAreas.map((focus, index) => (
                                    <div
                                        key={index}
                                        className="flex items-start gap-4 p-4 rounded-xl border border-border bg-card/30 backdrop-blur-xs hover:border-primary/30 transition-all duration-300"
                                    >
                                        <div className="p-2.5 rounded-lg bg-primary/10 text-primary">
                                          {focus.icon}
                                        </div>
                                        <div>
                                            <h5 className="font-semibold text-sm text-foreground">{focus.title}</h5>
                                            <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                                                {focus.description}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Timeline (Experience & Education) */}
                    <div className="lg:col-span-7 space-y-6 text-left">
                        <h3 className="text-2xl font-bold font-display pl-4">Experience & Education</h3>
                        <div className="relative border-l-2 border-border/80 ml-4 pl-6 space-y-8">
                            {timeline.map((item, index) => (
                                <div key={index} className="relative group">
                                    {/* Circle marker */}
                                    <div className="absolute -left-[35px] top-1.5 p-1 rounded-full bg-background border-2 border-border group-hover:border-primary transition-colors duration-300">
                                        {item.type === 'work' ? (
                                            <Briefcase size={12} className="text-primary" />
                                        ) : (
                                            <GraduationCap size={12} className="text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                                        )}
                                    </div>

                                    {/* Timeline content */}
                                    <div className="space-y-2">
                                        <span className="text-xs font-semibold text-primary/80 uppercase tracking-wider">
                                            {item.period}
                                        </span>
                                        <h4 className="text-base font-bold text-foreground">
                                            {item.title}
                                        </h4>
                                        <p className="text-xs font-semibold text-muted-foreground">
                                            {item.institution}
                                        </p>
                                        {item.details && (
                                            <ul className="list-disc list-inside space-y-1 mt-2 text-xs text-muted-foreground leading-relaxed pl-1">
                                                {item.details.map((detail, idx) => (
                                                    <span key={idx} className="block">• {detail}</span>
                                                ))}
                                            </ul>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
