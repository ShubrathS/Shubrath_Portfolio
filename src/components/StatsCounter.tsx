import { useEffect, useRef, useState } from "react";
import "./styles/StatsCounter.css";

interface Stat {
  value: number;
  suffix: string;
  label: string;
}

const stats: Stat[] = [
  { value: 2.5, suffix: "+", label: "Years Experience" },
  { value: 15, suffix: "+", label: "Automations Built" },
  { value: 50, suffix: "%", label: "Report Time Reduced" },
  { value: 50000, suffix: "+", label: "Records Migrated" },
];

const StatsCounter = () => {
  const [visible, setVisible] = useState(false);
  const [counts, setCounts] = useState(stats.map(() => 0));
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!visible) return;

    const duration = 2000;
    const fps = 60;
    const totalFrames = (duration / 1000) * fps;
    let frame = 0;

    const timer = setInterval(() => {
      frame++;
      const progress = Math.min(frame / totalFrames, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);

      setCounts(stats.map((s) => {
        const val = s.value * eased;
        return s.value % 1 !== 0 ? Math.round(val * 10) / 10 : Math.round(val);
      }));

      if (frame >= totalFrames) clearInterval(timer);
    }, 1000 / fps);

    return () => clearInterval(timer);
  }, [visible]);

  return (
    <div className={`stats-grid ${visible ? "stats-visible" : ""}`} ref={containerRef}>
      {stats.map((stat, i) => (
        <div className="stat-item" key={i}>
          <div className="stat-value">
            <span className="stat-number">
              {stat.value >= 1000 ? counts[i].toLocaleString() : counts[i]}
            </span>
            <span className="stat-suffix">{stat.suffix}</span>
          </div>
          <div className="stat-label">{stat.label}</div>
          <div className="stat-line" />
        </div>
      ))}
    </div>
  );
};

export default StatsCounter;
