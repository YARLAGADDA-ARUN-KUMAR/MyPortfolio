import cn from "../../lib/utils";
import { Menu, X } from "lucide-react";
import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence, useMotionValueEvent, useScroll } from "framer-motion";

// ============================================
// FLOATING GLASS NAVIGATION
// Centered pill, auto-hide on scroll down,
// show on scroll up, active section indicator,
// magnetic hover effect
// ============================================

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Achievements", href: "#achievements" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [hasScrolled, setHasScrolled] = useState(false);
  const lastScrollY = useRef(0);
  const { scrollY } = useScroll();

  // Auto-hide on scroll down, show on scroll up
  useMotionValueEvent(scrollY, "change", (latest) => {
    const diff = latest - lastScrollY.current;
    setHasScrolled(latest > 50);

    if (diff > 5 && latest > 100) {
      setIsVisible(false);
    } else if (diff < -5) {
      setIsVisible(true);
    }

    lastScrollY.current = latest;
  });

  // Track active section via IntersectionObserver
  useEffect(() => {
    const sections = navItems.map((item) =>
      document.querySelector(item.href)
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3, rootMargin: "-10% 0px -60% 0px" }
    );

    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Desktop floating nav */}
      <motion.nav
        className="fixed top-6 left-1/2 z-50 hidden md:block"
        style={{ x: "-50%" }}
        initial={{ y: -100, opacity: 0 }}
        animate={{
          y: isVisible ? 0 : -100,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{ type: "spring", stiffness: 200, damping: 30 }}
      >
        <div
          className={cn(
            "flex items-center gap-1 px-2 py-2 rounded-full transition-all duration-500",
            hasScrolled
              ? "glass shadow-[0_8px_32px_rgba(0,0,0,0.3)]"
              : "bg-transparent"
          )}
        >
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className={cn(
                "relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-300",
                activeSection === item.href.slice(1)
                  ? "text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground"
              )}
              data-cursor-hover
            >
              {/* Active indicator background */}
              {activeSection === item.href.slice(1) && (
                <motion.span
                  layoutId="nav-active"
                  className="absolute inset-0 rounded-full bg-primary/20 border border-primary/30"
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                  }}
                />
              )}
              <span className="relative z-10">{item.name}</span>
            </a>
          ))}
        </div>
      </motion.nav>

      {/* Mobile hamburger button */}
      <motion.button
        onClick={() => setIsMenuOpen((prev) => !prev)}
        className="fixed top-6 right-6 md:hidden p-3 rounded-full glass z-50"
        aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
        initial={{ opacity: 0 }}
        animate={{
          opacity: isVisible || isMenuOpen ? 1 : 0,
          y: isVisible || isMenuOpen ? 0 : -20,
        }}
        transition={{ duration: 0.3 }}
        data-cursor-hover
      >
        {isMenuOpen ? (
          <X size={20} className="text-foreground" />
        ) : (
          <Menu size={20} className="text-foreground" />
        )}
      </motion.button>

      {/* Mobile fullscreen overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 bg-background/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <nav className="flex flex-col items-center gap-8">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={cn(
                    "text-2xl font-display font-semibold transition-colors duration-300",
                    activeSection === item.href.slice(1)
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.08,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  {item.name}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
