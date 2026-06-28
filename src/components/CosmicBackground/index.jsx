import { useEffect, useRef, useCallback, useState } from "react";

// ============================================
// 7-LAYER COSMIC BACKGROUND
// Layer 1: Canvas stars (performant, 200+ stars)
// Layer 2: Nebula gradient blobs
// Layer 3: Large blurred planets
// Layer 4: Shooting stars (CSS animated)
// Layer 5: Mouse parallax
// Layer 6: Aurora glow
// Layer 7: Noise texture
// ============================================

export default function CosmicBackground() {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const animFrameRef = useRef(null);
  const starsRef = useRef([]);
  const [shootingStars, setShootingStars] = useState([]);

  // Generate star data once
  const generateStars = useCallback(() => {
    const count = Math.min(
      Math.floor((window.innerWidth * window.innerHeight) / 4000),
      300
    );
    const stars = [];
    for (let i = 0; i < count; i++) {
      stars.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size: Math.random() * 2 + 0.5,
        opacity: Math.random() * 0.6 + 0.2,
        twinkleSpeed: Math.random() * 0.02 + 0.005,
        twinkleOffset: Math.random() * Math.PI * 2,
        drift: (Math.random() - 0.5) * 0.15,
      });
    }
    starsRef.current = stars;
  }, []);

  // Canvas animation loop
  const animate = useCallback((ctx, width, height) => {
    const now = performance.now() * 0.001;
    ctx.clearRect(0, 0, width, height);

    // Draw stars with twinkling
    starsRef.current.forEach((star) => {
      const twinkle =
        Math.sin(now * star.twinkleSpeed * 10 + star.twinkleOffset) * 0.3 + 0.7;
      const alpha = star.opacity * twinkle;

      ctx.beginPath();
      ctx.arc(
        star.x + Math.sin(now * 0.3 + star.twinkleOffset) * star.drift * 20,
        star.y + Math.cos(now * 0.2 + star.twinkleOffset) * star.drift * 15,
        star.size,
        0,
        Math.PI * 2
      );
      ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
      ctx.fill();

      // Glow for larger stars
      if (star.size > 1.3) {
        ctx.beginPath();
        ctx.arc(
          star.x + Math.sin(now * 0.3 + star.twinkleOffset) * star.drift * 20,
          star.y + Math.cos(now * 0.2 + star.twinkleOffset) * star.drift * 15,
          star.size * 3,
          0,
          Math.PI * 2
        );
        ctx.fillStyle = `rgba(167, 139, 250, ${alpha * 0.1})`;
        ctx.fill();
      }
    });

    animFrameRef.current = requestAnimationFrame(() =>
      animate(ctx, width, height)
    );
  }, []);

  // Init canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = window.innerWidth + "px";
      canvas.style.height = window.innerHeight + "px";
      ctx.scale(dpr, dpr);
      generateStars();
    };

    resize();
    animate(ctx, window.innerWidth, window.innerHeight);

    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animFrameRef.current);
    };
  }, [animate, generateStars]);

  // Mouse parallax tracking (not useState — no re-renders)
  useEffect(() => {
    const handleMove = (e) => {
      mouseRef.current.x = (e.clientX / window.innerWidth - 0.5) * 2;
      mouseRef.current.y = (e.clientY / window.innerHeight - 0.5) * 2;

      // Apply parallax to layers via CSS custom properties
      const root = document.documentElement;
      root.style.setProperty("--parallax-x", `${mouseRef.current.x * 15}px`);
      root.style.setProperty("--parallax-y", `${mouseRef.current.y * 10}px`);
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  // Periodic shooting stars
  useEffect(() => {
    const spawn = () => {
      const id = Date.now();
      setShootingStars((prev) => [
        ...prev.slice(-3), // keep max 4
        {
          id,
          x: Math.random() * 80 + 10,
          y: Math.random() * 30,
          duration: Math.random() * 1.5 + 1,
          delay: 0,
          angle: Math.random() * 20 + 30,
        },
      ]);

      // Remove after animation
      setTimeout(() => {
        setShootingStars((prev) => prev.filter((s) => s.id !== id));
      }, 3000);
    };

    // Initial delay then random interval
    const interval = setInterval(spawn, Math.random() * 4000 + 3000);
    const timeout = setTimeout(spawn, 2000);
    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div
      className="fixed inset-0 overflow-hidden pointer-events-none z-0"
      aria-hidden="true"
    >
      {/* Layer 1: Canvas Stars */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0"
        style={{ opacity: 0.9 }}
      />

      {/* Layer 2: Nebula gradient blobs */}
      <div
        className="absolute inset-0"
        style={{
          transform:
            "translate(var(--parallax-x, 0), var(--parallax-y, 0))",
          transition: "transform 0.3s ease-out",
        }}
      >
        <div
          className="absolute animate-aurora"
          style={{
            width: "60vw",
            height: "60vh",
            top: "-10%",
            right: "-10%",
            background:
              "radial-gradient(ellipse, rgba(139, 92, 246, 0.08) 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />
        <div
          className="absolute"
          style={{
            width: "50vw",
            height: "50vh",
            bottom: "10%",
            left: "-5%",
            background:
              "radial-gradient(ellipse, rgba(99, 102, 241, 0.06) 0%, transparent 70%)",
            filter: "blur(100px)",
            animation: "aurora 20s ease-in-out infinite reverse",
          }}
        />
      </div>

      {/* Layer 3: Large blurred planets */}
      <div
        className="absolute inset-0"
        style={{
          transform:
            "translate(calc(var(--parallax-x, 0) * 0.5), calc(var(--parallax-y, 0) * 0.5))",
          transition: "transform 0.5s ease-out",
        }}
      >
        <div
          className="absolute rounded-full"
          style={{
            width: "300px",
            height: "300px",
            top: "15%",
            right: "8%",
            background:
              "radial-gradient(circle, rgba(139, 92, 246, 0.05) 0%, rgba(139, 92, 246, 0.02) 50%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
        <div
          className="absolute rounded-full"
          style={{
            width: "200px",
            height: "200px",
            bottom: "25%",
            left: "12%",
            background:
              "radial-gradient(circle, rgba(99, 102, 241, 0.04) 0%, transparent 70%)",
            filter: "blur(50px)",
          }}
        />
      </div>

      {/* Layer 4: Shooting stars */}
      {shootingStars.map((star) => (
        <div
          key={star.id}
          className="absolute"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: "100px",
            height: "1px",
            background:
              "linear-gradient(90deg, rgba(255,255,255,0.8), rgba(255,255,255,0.3), transparent)",
            transform: `rotate(${star.angle}deg)`,
            animation: `shooting-star ${star.duration}s linear forwards`,
            boxShadow: "0 0 6px 1px rgba(167, 139, 250, 0.4)",
          }}
        />
      ))}

      {/* Layer 6: Aurora glow at top */}
      <div
        className="absolute top-0 left-0 right-0 animate-aurora"
        style={{
          height: "40vh",
          background:
            "linear-gradient(180deg, rgba(139, 92, 246, 0.04) 0%, rgba(99, 102, 241, 0.02) 40%, transparent 100%)",
          filter: "blur(40px)",
        }}
      />

      {/* Layer 7: Noise texture overlay */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.7' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E")`,
          opacity: 0.4,
        }}
      />
    </div>
  );
}
