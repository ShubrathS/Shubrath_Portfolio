import { useEffect, useRef } from "react";
import "./styles/ScrollProgress.css";

const ScrollProgress = () => {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrapper = document.getElementById("smooth-wrapper");
    if (!wrapper) return;

    const update = () => {
      const scrollTop = wrapper.scrollTop || window.scrollY;
      const docHeight = wrapper.scrollHeight - wrapper.clientHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      if (barRef.current) {
        barRef.current.style.setProperty("--progress", `${progress}%`);
      }
    };

    wrapper.addEventListener("scroll", update);
    window.addEventListener("scroll", update);

    // Also update on GSAP ScrollSmoother scroll events
    const interval = setInterval(update, 100);

    return () => {
      wrapper.removeEventListener("scroll", update);
      window.removeEventListener("scroll", update);
      clearInterval(interval);
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
