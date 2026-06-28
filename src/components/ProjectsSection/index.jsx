import { ArrowRight, ExternalLink, Github } from 'lucide-react';
import villageConnectImg from '../../assets/villageconnect.png';
import moodRealmImg from '../../assets/moodrealm.png';
import chronoNestImg from '../../assets/chrononest.png';

const projects = [
    {
        id: 1,
        title: 'VillageConnect',
        subtitle: 'Rural Community Services Portal',
        description:
            'A full-stack platform connecting rural communities to job opportunities, agricultural services, healthcare resources, and education. Features a robust grievance management portal with real-time status updates.',
        image: villageConnectImg,
        tags: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS', 'JWT', 'REST API'],
        githubUrl: 'https://github.com/YARLAGADDA-ARUN-KUMAR/VillageConnect',
    },
    {
        id: 2,
        title: 'MoodRealm',
        subtitle: 'Mood-based Social Media Platform',
        description:
            'A full-stack MERN social platform for sharing mood-tagged content, featuring real-time content filtering, secure password hashing, engagement capabilities, and protected APIs.',
        image: moodRealmImg,
        tags: ['React', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'REST API'],
        demoUrl: 'https://mood-realm.vercel.app/',
        githubUrl: 'https://github.com/YARLAGADDA-ARUN-KUMAR/MoodRealm.git',
    },
    {
        id: 3,
        title: 'ChronoNest',
        subtitle: 'Digital Time Capsule Service',
        description:
            'A MERN application for creating encrypted time-capsule messages with scheduled and inactivity-based release triggers. Integrated Twilio SMS and Nodemailer for secure multi-channel delivery.',
        image: chronoNestImg,
        tags: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Twilio API', 'Nodemailer', 'JWT'],
        demoUrl: 'https://chrono-nest.vercel.app/',
        githubUrl: 'https://github.com/YARLAGADDA-ARUN-KUMAR/ChronoNest.git',
    },
];

export const ProjectsSection = () => {
    return (
        <section id="projects" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight font-display mb-4 text-center">
                        Featured <span className="text-primary text-glow">Projects</span>
                    </h2>
                    <p className="text-muted-foreground max-w-xl mx-auto">
                        Here are some of my recent web applications, crafted with attention to performance, security, and responsive design.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-fr">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className="group bg-card rounded-2xl overflow-hidden border border-border bg-card/40 backdrop-blur-xs flex flex-col justify-between hover:border-primary/45 transition-all duration-300 card-hover"
                        >
                            <div className="aspect-[16/10] w-full overflow-hidden bg-muted relative">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>

                            <div className="p-6 flex flex-col justify-between flex-grow">
                                <div className="space-y-4">
                                    <div className="flex flex-wrap gap-1.5">
                                        {project.tags.slice(0, 4).map((tag, index) => (
                                            <span
                                                key={index}
                                                className="px-2 py-0.5 text-[10px] font-semibold border border-border rounded-md bg-secondary/40 text-foreground"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                        {project.tags.length > 4 && (
                                            <span className="px-2 py-0.5 text-[10px] font-semibold border border-border rounded-md bg-secondary/20 text-muted-foreground">
                                                +{project.tags.length - 4}
                                            </span>
                                        )}
                                    </div>

                                    <div className="text-left">
                                        <h3 className="text-xl font-bold text-foreground font-display">{project.title}</h3>
                                        <p className="text-xs text-primary font-medium mt-0.5">{project.subtitle}</p>
                                        <p className="text-muted-foreground text-xs leading-relaxed mt-3">
                                            {project.description}
                                        </p>
                                    </div>
                                </div>

                                <div className="flex justify-between items-center mt-6 pt-4 border-t border-border/50">
                                    <div className="flex space-x-3">
                                        <a
                                            href={project.githubUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-2 rounded-lg border border-border bg-card hover:border-primary/50 hover:text-primary transition-all duration-300 text-foreground/80 cursor-pointer"
                                            title="View GitHub Repository"
                                        >
                                            <Github size={16} />
                                        </a>
                                        {project.demoUrl && (
                                            <a
                                                href={project.demoUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="p-2 rounded-lg border border-border bg-card hover:border-primary/50 hover:text-primary transition-all duration-300 text-foreground/80 cursor-pointer"
                                                title="View Live Demo"
                                            >
                                                <ExternalLink size={16} />
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-16">
                    <a
                        className="cosmic-button inline-flex items-center gap-2 text-sm font-semibold cursor-pointer"
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://github.com/YARLAGADDA-ARUN-KUMAR"
                    >
                        More on GitHub <ArrowRight size={14} />
                    </a>
                </div>
            </div>
        </section>
    );
};
