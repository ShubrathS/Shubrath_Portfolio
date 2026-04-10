import { useEffect, useRef } from "react";
import { usePerformance } from "../context/PerformanceContext";

const MouseSpotlight = () => {
  const spotlightRef = useRef<HTMLDivElement>(null);
  const { enableMouseEffects } = usePerformance();

  useEffect(() => {
    if (!enableMouseEffects) return;
    const el = spotlightRef.current;
    if (!el) return;

    let targetX = 0, targetY = 0;
    let currentX = 0, currentY = 0;
    let raf: number;

    const onMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
    };

    const loop = () => {
      currentX += (targetX - currentX) * 0.08;
      currentY += (targetY - currentY) * 0.08;
      el.style.setProperty("--spot-x", `${currentX}px`);
      el.style.setProperty("--spot-y", `${currentY}px`);
      raf = requestAnimationFrame(loop);
    };

    document.addEventListener("mousemove", onMove);
    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      document.removeEventListener("mousemove", onMove);
    };
  }, [enableMouseEffects]);

  if (!enableMouseEffects) return null;

  return (
    <div
      ref={spotlightRef}
      className="mouse-spotlight"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 2,
        background: `radial-gradient(
          600px circle at var(--spot-x, -1000px) var(--spot-y, -1000px),
          rgba(94, 234, 212, 0.04) 0%,
          rgba(167, 139, 250, 0.02) 30%,
          transparent 70%
        )`,
      }}
    />
  );
};

export default MouseSpotlight;
