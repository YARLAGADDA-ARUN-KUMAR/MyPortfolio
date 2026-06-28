import { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown } from "lucide-react";

// ============================================
// CINEMATIC HERO SECTION
// Choreographed entry sequence:
// 1. Stars fade in (handled by CosmicBackground)
// 2. "HELLO." fades in (0.8s)
// 3. Name reveals letter-by-letter (1.2s)
// 4. Tagline word-by-word (2s)
// 5. CTAs slide up (2.5s)
// 6. Scroll indicator pulses (3s)
// ============================================

// Split text into individual characters for stagger animation
function SplitText({ text, className, delay = 0, charDelay = 0.03 }) {
  return (
    <span className={className} aria-label={text}>
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          className="inline-block"
          initial={{ opacity: 0, y: 40, rotateX: -40 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{
            duration: 0.6,
            delay: delay + i * charDelay,
            ease: [0.16, 1, 0.3, 1],
          }}
          style={{ display: char === " " ? "inline" : "inline-block" }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </span>
  );
}

// Split into words for word-by-word reveal
function SplitWords({ text, className, delay = 0, wordDelay = 0.1 }) {
  const words = text.split(" ");
  return (
    <span className={className}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          className="inline-block mr-[0.3em]"
          initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{
            duration: 0.7,
            delay: delay + i * wordDelay,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
}

export const HeroSection = () => {
  const [showContent, setShowContent] = useState(false);
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // Parallax effects on scroll
  const textY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  useEffect(() => {
    // Delay content appearance for cinematic effect
    const timer = setTimeout(() => setShowContent(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative min-h-[100dvh] flex items-center px-6 md:px-12 lg:px-20 pt-16"
    >
      <motion.div
        className="relative z-10 max-w-5xl mx-auto w-full"
        style={{ y: textY, opacity: textOpacity }}
      >
        {showContent && (
          <div className="space-y-8 text-left">
            {/* HELLO. — Fade in */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              <span className="text-sm md:text-base font-mono tracking-[0.3em] uppercase text-primary/80">
                Hello
              </span>
            </motion.div>

            {/* Name — Split text character reveal */}
            <div className="space-y-2">
              <h1
                className="font-display font-bold tracking-tighter leading-[0.95]"
                style={{
                  fontSize: "clamp(2.5rem, 7vw, 5.5rem)",
                }}
              >
                <motion.span
                  className="block text-foreground"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.6 }}
                >
                  <SplitText text="I'm Arun Kumar" delay={0.7} charDelay={0.035} />
                </motion.span>
                <motion.span
                  className="block text-primary text-glow mt-1"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: 1.2 }}
                >
                  <SplitText
                    text="Yarlagadda."
                    delay={1.3}
                    charDelay={0.04}
                  />
                </motion.span>
              </h1>
            </div>

            {/* Tagline — Word by word with blur */}
            <div className="max-w-lg">
              <p
                className="font-sans text-muted-foreground leading-relaxed"
                style={{
                  fontSize: "clamp(1rem, 1.5vw, 1.25rem)",
                }}
              >
                <SplitWords
                  text="I build digital products that feel magical."
                  delay={2.0}
                  wordDelay={0.12}
                />
              </p>
            </div>

            {/* CTAs */}
            <motion.div
              className="flex flex-wrap gap-4 pt-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 3.0,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <a
                href="#projects"
                className="cosmic-button inline-flex items-center gap-2 text-sm"
                data-cursor-hover
              >
                View My Work
              </a>
              <a
                href="/src/assets/Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download="Arun_Kumar_Yarlagadda_Resume.pdf"
                className="px-6 py-3 rounded-full border border-primary/30 text-foreground/90 hover:bg-primary/5 hover:border-primary/50 transition-all duration-300 active:scale-[0.98] text-sm font-semibold"
                data-cursor-hover
              >
                Download Resume
              </a>
            </motion.div>

            {/* Availability indicator */}
            <motion.div
              className="flex items-center gap-2 pt-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 3.5 }}
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
              </span>
              <span className="text-xs text-muted-foreground font-mono tracking-wide">
                Available for opportunities
              </span>
            </motion.div>
          </div>
        )}
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 3.8 }}
      >
        <span className="text-[10px] font-mono tracking-[0.2em] uppercase text-muted-foreground/60">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <ArrowDown className="h-4 w-4 text-primary/50" />
        </motion.div>
      </motion.div>
    </section>
  );
};
