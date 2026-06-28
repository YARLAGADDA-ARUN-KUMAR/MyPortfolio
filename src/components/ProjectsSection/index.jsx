import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ExternalLink, Github, X } from 'lucide-react';
import villageConnectImg from '../../assets/villageconnect.png';
import moodRealmImg from '../../assets/moodrealm.png';
import chronoNestImg from '../../assets/chrononest.png';

// ============================================
// PROJECTS SECTION — Premium Showcase
// 3D tilt on mouse move
// Fullscreen modal with case study
// Scroll-reveal stagger
// ============================================

const fadeInUp = {
  initial: { opacity: 0, y: 40, filter: "blur(6px)" },
  whileInView: { opacity: 1, y: 0, filter: "blur(0px)" },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
};

const projects = [
  {
    id: 1,
    title: 'VillageConnect',
    subtitle: 'Rural Community Services Portal',
    description: 'A full-stack platform connecting rural communities to job opportunities, agricultural services, healthcare resources, and education. Features a robust grievance management portal with real-time status updates.',
    image: villageConnectImg,
    tags: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS', 'JWT', 'REST API'],
    githubUrl: 'https://github.com/YARLAGADDA-ARUN-KUMAR/VillageConnect',
    challenges: 'Designed a multi-role authentication system supporting citizens, officials, and administrators with granular permissions.',
    architecture: 'MERN stack with JWT-based auth, role-based access control, and RESTful API design patterns.',
  },
  {
    id: 2,
    title: 'MoodRealm',
    subtitle: 'Mood-based Social Media Platform',
    description: 'A full-stack MERN social platform for sharing mood-tagged content, featuring real-time content filtering, secure password hashing, engagement capabilities, and protected APIs.',
    image: moodRealmImg,
    tags: ['React', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'REST API'],
    demoUrl: 'https://mood-realm.vercel.app/',
    githubUrl: 'https://github.com/YARLAGADDA-ARUN-KUMAR/MoodRealm.git',
    challenges: 'Implemented real-time mood-based content filtering and engagement tracking with optimized database queries.',
    architecture: 'MERN with bcrypt password hashing, JWT refresh tokens, and mood-tag indexing for fast filtering.',
  },
  {
    id: 3,
    title: 'ChronoNest',
    subtitle: 'Digital Time Capsule Service',
    description: 'A MERN application for creating encrypted time-capsule messages with scheduled and inactivity-based release triggers. Integrated Twilio SMS and Nodemailer for secure multi-channel delivery.',
    image: chronoNestImg,
    tags: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Twilio API', 'Nodemailer', 'JWT'],
    demoUrl: 'https://chrono-nest.vercel.app/',
    githubUrl: 'https://github.com/YARLAGADDA-ARUN-KUMAR/ChronoNest.git',
    challenges: 'Built a reliable scheduling system with cron-based triggers and fallback delivery via SMS and email.',
    architecture: 'MERN with node-cron scheduling, Twilio SMS integration, Nodemailer, and encrypted message storage.',
  },
];

function ProjectCard({ project, onClick, index }) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x, y });
  };

  return (
    <motion.div
      className="group relative cursor-pointer"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.8,
        delay: index * 0.15,
        ease: [0.16, 1, 0.3, 1],
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setMousePos({ x: 0, y: 0 });
      }}
      onClick={() => onClick(project)}
      style={{
        transform: isHovered
          ? `perspective(1000px) rotateY(${mousePos.x * 8}deg) rotateX(${-mousePos.y * 8}deg)`
          : "perspective(1000px) rotateY(0deg) rotateX(0deg)",
        transition: "transform 0.3s ease-out",
      }}
      data-cursor-hover
    >
      {/* Mouse light effect */}
      {isHovered && (
        <div
          className="absolute inset-0 rounded-2xl pointer-events-none z-10 opacity-30"
          style={{
            background: `radial-gradient(circle at ${(mousePos.x + 0.5) * 100}% ${(mousePos.y + 0.5) * 100}%, rgba(139, 92, 246, 0.15), transparent 60%)`,
          }}
        />
      )}

      <div className="rounded-2xl overflow-hidden border border-border/60 bg-card/50 backdrop-blur-sm hover:border-primary/30 transition-all duration-500">
        {/* Image */}
        <div className="aspect-[16/10] w-full overflow-hidden bg-card/30 relative">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />

          {/* Overlay on hover */}
          <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>

        {/* Content */}
        <div className="p-6 space-y-4 relative z-10">
          <div className="flex flex-wrap gap-1.5">
            {project.tags.slice(0, 4).map((tag, i) => (
              <span
                key={i}
                className="px-2.5 py-1 text-[10px] font-mono tracking-wider border border-border rounded-md bg-card/60 text-foreground/70"
              >
                {tag}
              </span>
            ))}
            {project.tags.length > 4 && (
              <span className="px-2.5 py-1 text-[10px] font-mono border border-border/40 rounded-md text-foreground/50">
                +{project.tags.length - 4}
              </span>
            )}
          </div>

          <div>
            <h3 className="text-xl font-display font-bold text-foreground group-hover:text-primary transition-colors duration-300">
              {project.title}
            </h3>
            <p className="text-xs text-primary/70 font-medium mt-1">{project.subtitle}</p>
          </div>

          <p className="text-foreground/70 text-sm leading-relaxed line-clamp-3">
            {project.description}
          </p>

          <div className="flex items-center justify-between pt-3 border-t border-border/20">
            <div className="flex gap-2">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg border border-border bg-card/50 hover:border-primary/50 hover:text-primary transition-all duration-300 text-foreground/60"
                onClick={(e) => e.stopPropagation()}
                title="View Source"
                data-cursor-hover
              >
                <Github size={14} />
              </a>
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg border border-border bg-card/50 hover:border-primary/50 hover:text-primary transition-all duration-300 text-foreground/60"
                  onClick={(e) => e.stopPropagation()}
                  title="Live Demo"
                  data-cursor-hover
                >
                  <ExternalLink size={14} />
                </a>
              )}
            </div>
            <span className="text-[10px] font-mono text-muted-foreground/40 group-hover:text-primary/50 transition-colors duration-300">
              Click for details →
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Backdrop */}
      <motion.div
        className="absolute inset-0 bg-background/90 backdrop-blur-xl"
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      />

      {/* Modal content */}
      <motion.div
        className="relative z-10 max-w-3xl w-full max-h-[90vh] overflow-y-auto rounded-2xl border border-border/30 bg-card/40 backdrop-blur-2xl"
        initial={{ scale: 0.9, y: 40, opacity: 0 }}
        animate={{ scale: 1, y: 0, opacity: 1 }}
        exit={{ scale: 0.9, y: 40, opacity: 0 }}
        transition={{ type: "spring", stiffness: 200, damping: 25 }}
        style={{ cursor: "auto" }}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full glass hover:bg-primary/10 z-20 transition-all duration-300"
          data-cursor-hover
        >
          <X size={18} className="text-foreground" />
        </button>

        {/* Hero image */}
        <div className="aspect-[16/9] w-full overflow-hidden rounded-t-2xl relative">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
        </div>

        <div className="p-8 space-y-8">
          {/* Header */}
          <div>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag, i) => (
                <span
                  key={i}
                  className="px-2.5 py-1 text-[10px] font-mono tracking-wider border border-primary/20 rounded-md bg-primary/5 text-primary/80"
                >
                  {tag}
                </span>
              ))}
            </div>
            <h2 className="text-3xl font-display font-bold text-foreground">{project.title}</h2>
            <p className="text-sm text-primary/70 font-medium mt-1">{project.subtitle}</p>
          </div>

          {/* Description */}
          <div>
            <h3 className="text-xs font-mono tracking-[0.15em] uppercase text-muted-foreground/50 mb-3">
              Overview
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{project.description}</p>
          </div>

          {/* Architecture */}
          {project.architecture && (
            <div>
              <h3 className="text-xs font-mono tracking-[0.15em] uppercase text-muted-foreground/50 mb-3">
                Architecture
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{project.architecture}</p>
            </div>
          )}

          {/* Challenges */}
          {project.challenges && (
            <div>
              <h3 className="text-xs font-mono tracking-[0.15em] uppercase text-muted-foreground/50 mb-3">
                Key Challenges
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{project.challenges}</p>
            </div>
          )}

          {/* Links */}
          <div className="flex gap-3 pt-4 border-t border-border/20">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="cosmic-button inline-flex items-center gap-2 text-sm"
              data-cursor-hover
            >
              <Github size={16} /> View Source
            </a>
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-full border border-primary/30 text-foreground/90 hover:bg-primary/5 hover:border-primary/50 transition-all duration-300 text-sm font-semibold inline-flex items-center gap-2"
                data-cursor-hover
              >
                <ExternalLink size={16} /> Live Demo
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <>
      <section id="projects" className="py-32 px-6 md:px-12 lg:px-20 relative">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div className="mb-20" {...fadeInUp}>
            <h2 className="section-heading text-left">
              Featured <span className="text-primary text-glow">Projects</span>
            </h2>
            <p className="section-subheading text-left mt-4">
              Here are some of my recent web applications, crafted with attention to performance, security, and responsive design.
            </p>
          </motion.div>

          {/* Project Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                onClick={setSelectedProject}
              />
            ))}
          </div>

          {/* GitHub Link */}
          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <a
              className="cosmic-button inline-flex items-center gap-2 text-sm"
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/YARLAGADDA-ARUN-KUMAR"
              data-cursor-hover
            >
              More on GitHub <ArrowRight size={14} />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
};
