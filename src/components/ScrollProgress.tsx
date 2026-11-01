import { useEffect, useRef } from "react";
import "./styles/ScrollProgress.css";

const ScrollProgress = () => {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const update = () => {
      // Lenis writes the native scroll position every frame, so window.scrollY
      // is the real position and native scroll events fire as it moves.
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress =
        docHeight > 0
          ? Math.min(100, Math.max(0, (window.scrollY / docHeight) * 100))
          : 0;
      if (barRef.current) {
        barRef.current.style.setProperty("--progress", `${progress}%`);
      }
    };

    window.addEventListener("scroll", update, { passive: true });
    update();

    return () => {
      window.removeEventListener("scroll", update);
    };
  }, []);

  return (
    <div className="scroll-progress" ref={barRef}>
      <div className="scroll-progress-bar" />
      <div className="scroll-progress-glow" />
    </div>
  );
};

export default ScrollProgress;
