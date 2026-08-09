import { useEffect, useRef } from "react";
import "./styles/ScrollProgress.css";
import { smoother } from "./smoother";

const ScrollProgress = () => {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const update = () => {
      // ScrollSmoother transforms #smooth-content while #smooth-wrapper stays
      // fixed, so wrapper.scrollTop is always 0 and the old math yielded 0%.
      // Read the real scroll position from the smoother (falling back to native
      // scroll before the smoother instance exists) against the content height.
      const content = document.getElementById("smooth-content");
      const scrollTop = smoother ? smoother.scrollTop() : window.scrollY;
      const docHeight = (content?.scrollHeight ?? 0) - window.innerHeight;
      const progress =
        docHeight > 0
          ? Math.min(100, Math.max(0, (scrollTop / docHeight) * 100))
          : 0;
      if (barRef.current) {
        barRef.current.style.setProperty("--progress", `${progress}%`);
      }
    };

    window.addEventListener("scroll", update);
    // ScrollSmoother scrolling doesn't fire native scroll events, so poll too.
    const interval = setInterval(update, 100);

    return () => {
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
