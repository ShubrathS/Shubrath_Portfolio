import { useEffect, useRef, useState } from "react";
import "./styles/GlitchText.css";

interface Props {
  text: string;
  className?: string;
}

const GlitchText = ({ text, className = "" }: Props) => {
  const [isGlitching, setIsGlitching] = useState(false);
  const intervalRef = useRef<number>();

  useEffect(() => {
    // Random glitch bursts every 3-8 seconds
    const scheduleGlitch = () => {
      const delay = 3000 + Math.random() * 5000;
      intervalRef.current = window.setTimeout(() => {
        setIsGlitching(true);
        setTimeout(() => setIsGlitching(false), 200 + Math.random() * 300);
        scheduleGlitch();
      }, delay);
    };
    scheduleGlitch();
    return () => clearTimeout(intervalRef.current);
  }, []);

  return (
    <span
      className={`glitch-wrapper ${className} ${isGlitching ? "glitching" : ""}`}
      data-text={text}
    >
      {text}
    </span>
  );
};

export default GlitchText;
