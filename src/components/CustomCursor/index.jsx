import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

// ============================================
// CUSTOM CURSOR
// Outer ring (36px) + inner dot (6px)
// Spring physics, blend mode, click particles
// Hidden on touch devices
// ============================================

export default function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const clickRipples = useRef([]);
  const [ripples, setRipples] = useState([]);

  // Raw mouse position (motion values — no re-renders)
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smoothed positions for ring (slower follow = trailing effect)
  const ringX = useSpring(mouseX, { stiffness: 150, damping: 20, mass: 0.5 });
  const ringY = useSpring(mouseY, { stiffness: 150, damping: 20, mass: 0.5 });

  // Dot follows more closely
  const dotX = useSpring(mouseX, { stiffness: 300, damping: 25, mass: 0.2 });
  const dotY = useSpring(mouseY, { stiffness: 300, damping: 25, mass: 0.2 });

  useEffect(() => {
    // Don't show on touch devices
    if (window.matchMedia("(hover: none) and (pointer: coarse)").matches) {
      return;
    }

    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseDown = () => {
      setIsClicking(true);
      // Spawn click ripple
      const id = Date.now();
      setRipples((prev) => [
        ...prev.slice(-4),
        { id, x: mouseX.get(), y: mouseY.get() },
      ]);
      setTimeout(() => {
        setRipples((prev) => prev.filter((r) => r.id !== id));
      }, 600);
    };

    const handleMouseUp = () => setIsClicking(false);

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    // Detect hoverable elements
    const handleElementHover = (e) => {
      const target = e.target.closest(
        "a, button, [role='button'], input, textarea, select, [data-cursor-hover]"
      );
      setIsHovering(!!target);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseover", handleElementHover);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseover", handleElementHover);
    };
  }, [mouseX, mouseY, isVisible]);

  // Don't render on touch devices
  if (
    typeof window !== "undefined" &&
    window.matchMedia("(hover: none) and (pointer: coarse)").matches
  ) {
    return null;
  }

  return (
    <>
      {/* Click ripples */}
      {ripples.map((ripple) => (
        <motion.div
          key={ripple.id}
          className="fixed pointer-events-none z-[9999]"
          initial={{
            width: 10,
            height: 10,
            x: ripple.x - 5,
            y: ripple.y - 5,
            opacity: 0.6,
          }}
          animate={{
            width: 60,
            height: 60,
            x: ripple.x - 30,
            y: ripple.y - 30,
            opacity: 0,
          }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          style={{
            borderRadius: "50%",
            border: "1px solid hsl(263 70% 66% / 0.5)",
          }}
        />
      ))}

      {/* Outer ring */}
      <motion.div
        className="cursor-ring"
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width: isHovering ? 56 : 36,
          height: isHovering ? 56 : 36,
          opacity: isVisible ? (isHovering ? 0.8 : 0.5) : 0,
          borderColor: isHovering
            ? "hsl(263 70% 66% / 0.8)"
            : "hsl(263 70% 66% / 0.4)",
        }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
      />

      {/* Inner dot */}
      <motion.div
        className="cursor-dot"
        style={{
          x: dotX,
          y: dotY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width: isClicking ? 10 : isHovering ? 4 : 6,
          height: isClicking ? 10 : isHovering ? 4 : 6,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      />
    </>
  );
}
