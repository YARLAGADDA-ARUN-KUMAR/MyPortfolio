import { ArrowRight, ExternalLink, Github } from 'lucide-react';

const projects = [
    {
        id: 1,
        title: 'Mood Realm',
        description:
            'the website whare you can find variours types of quotes and stories based on your mood.',
        image: '/src/assets/moodrealm.png',
        tags: ['React', 'Node.js', 'Express', 'MongoDB', 'TailwindCSS'],
        demoUrl: 'https://mood-realm.vercel.app/',
        githubUrl: 'https://github.com/YARLAGADDA-ARUN-KUMAR/MoodRealm.git',
    },
    {
        id: 2,
        title: 'Chrono Nest',
        description:
            'the website whare you can share notes and messages at certain time intervals.',
        image: '/src/assets/chrononest.png',
        tags: ['React', 'Node.js', 'Express', 'MongoDB', 'TailwindCSS'],
        demoUrl: 'https://chrono-nest.vercel.app/',
        githubUrl: 'https://github.com/YARLAGADDA-ARUN-KUMAR/ChronoNest.git',
    },
    {
        id: 3,
        title: 'E-commerce Platform',
        description:
            'Interactive analytics dashboard with data visualization and filtering capabilities.',
        image: '/src/assets/ecommerce.png',
        tags: ['React', 'TailwindCSS'],
        demoUrl: 'https://e-commerce-website-dusky-five-66.vercel.app/',
        githubUrl: 'https://github.com/YARLAGADDA-ARUN-KUMAR/E-Commerce-Website',
    },
];

export const ProjectsSection = () => {
    return (
        <section id="projects" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Featured <span className="text-primary">Projects</span>
                </h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Here are some of my recent projects. Each project was carefully crafted with
                    attention to detail, performance, and user experience.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 auto-rows-fr">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
                        >
                            <div className="aspect-[16/9] w-full overflow-hidden bg-muted">
                                <img
                                    src={project.image || '/placeholder-image.png'}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>

                            <div className="p-6">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag, index) => (
                                        <span
                                            key={index}
                                            className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                                <p className="text-muted-foreground text-sm mb-4">
                                    {project.description}
                                </p>

                                <div className="flex justify-between items-center">
                                    <div className="flex space-x-3">
                                        {project.demoUrl && (
                                            <a
                                                href={project.demoUrl}
                                                target="_blank"
                                                className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                            >
                                                <ExternalLink size={20} />
                                            </a>
                                        )}
                                        <a
                                            href={project.githubUrl}
                                            target="_blank"
                                            className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                        >
                                            <Github size={20} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <a
                        className="cosmic-button w-fit flex items-center mx-auto gap-2"
                        target="_blank"
                        href="https://github.com/YARLAGADDA-ARUN-KUMAR"
                    >
                        Check My Github <ArrowRight size={16} />
                    </a>
                </div>
            </div>
        </section>
    );
};
