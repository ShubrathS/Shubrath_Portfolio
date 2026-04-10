import { useEffect, useRef } from "react";
import "./styles/Cursor.css";
import gsap from "gsap";

const TRAIL_COUNT = 5;

const Cursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const trailRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    let hover = false;
    const cursor = cursorRef.current!;
    const mousePos = { x: 0, y: 0 };
    const cursorPos = { x: 0, y: 0 };
    const trailPositions = Array.from({ length: TRAIL_COUNT }, () => ({ x: 0, y: 0 }));

    document.addEventListener("mousemove", (e) => {
      mousePos.x = e.clientX;
      mousePos.y = e.clientY;
    });

    requestAnimationFrame(function loop() {
      if (!hover) {
        const delay = 6;
        cursorPos.x += (mousePos.x - cursorPos.x) / delay;
        cursorPos.y += (mousePos.y - cursorPos.y) / delay;
        gsap.to(cursor, { x: cursorPos.x, y: cursorPos.y, duration: 0.1 });
      }

      // Update trail positions with increasing delay
      for (let i = 0; i < TRAIL_COUNT; i++) {
        const target = i === 0 ? cursorPos : trailPositions[i - 1];
        const speed = 0.15 - i * 0.02;
        trailPositions[i].x += (target.x - trailPositions[i].x) * speed;
        trailPositions[i].y += (target.y - trailPositions[i].y) * speed;

        const trail = trailRefs.current[i];
        if (trail) {
          trail.style.transform = `translate(${trailPositions[i].x}px, ${trailPositions[i].y}px)`;
        }
      }

      requestAnimationFrame(loop);
    });

    document.querySelectorAll("[data-cursor]").forEach((item) => {
      const element = item as HTMLElement;
      element.addEventListener("mouseover", (e: MouseEvent) => {
        const target = e.currentTarget as HTMLElement;
        const rect = target.getBoundingClientRect();

        if (element.dataset.cursor === "icons") {
          cursor.classList.add("cursor-icons");
          gsap.to(cursor, { x: rect.left, y: rect.top, duration: 0.1 });
          cursor.style.setProperty("--cursorH", `${rect.height}px`);
          hover = true;
        }
        if (element.dataset.cursor === "disable") {
          cursor.classList.add("cursor-disable");
        }
      });
      element.addEventListener("mouseout", () => {
        cursor.classList.remove("cursor-disable", "cursor-icons");
        hover = false;
      });
    });
  }, []);

  return (
    <>
      {/* Trail dots */}
      {Array.from({ length: TRAIL_COUNT }).map((_, i) => (
        <div
          key={i}
          className="cursor-trail"
          ref={(el) => { if (el) trailRefs.current[i] = el; }}
          style={{
            opacity: 0.3 - i * 0.05,
            width: `${8 - i * 1}px`,
            height: `${8 - i * 1}px`,
          }}
        />
      ))}
      {/* Main cursor */}
      <div className="cursor-main" ref={cursorRef}></div>
    </>
  );
};

export default Cursor;
