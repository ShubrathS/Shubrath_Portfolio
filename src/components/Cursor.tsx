import { useEffect, useRef } from "react";
import "./styles/Cursor.css";

const TRAIL_COUNT = 5;

const Cursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const trailRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    let hover = false;
    let pinned: { x: number; y: number } | null = null;
    const mousePos = { x: 0, y: 0 };
    const cursorPos = { x: 0, y: 0 };
    const trailPositions = Array.from({ length: TRAIL_COUNT }, () => ({ x: 0, y: 0 }));
    let raf = 0;

    const onMouseMove = (e: MouseEvent) => {
      mousePos.x = e.clientX;
      mousePos.y = e.clientY;
    };

    const loop = () => {
      if (!hover) {
        cursorPos.x += (mousePos.x - cursorPos.x) / 6;
        cursorPos.y += (mousePos.y - cursorPos.y) / 6;
        cursor.style.transform = `translate3d(${cursorPos.x}px, ${cursorPos.y}px, 0)`;
      } else if (pinned) {
        cursor.style.transform = `translate3d(${pinned.x}px, ${pinned.y}px, 0)`;
      }

      for (let i = 0; i < TRAIL_COUNT; i++) {
        const target = i === 0 ? cursorPos : trailPositions[i - 1];
        const speed = 0.15 - i * 0.02;
        trailPositions[i].x += (target.x - trailPositions[i].x) * speed;
        trailPositions[i].y += (target.y - trailPositions[i].y) * speed;

        const trail = trailRefs.current[i];
        if (trail) {
          trail.style.transform = `translate3d(${trailPositions[i].x}px, ${trailPositions[i].y}px, 0)`;
        }
      }

      raf = requestAnimationFrame(loop);
    };

    const onMouseOver = (e: Event) => {
      const target = e.currentTarget as HTMLElement;
      const rect = target.getBoundingClientRect();
      if (target.dataset.cursor === "icons") {
        cursor.classList.add("cursor-icons");
        pinned = { x: rect.left, y: rect.top };
        cursor.style.setProperty("--cursorH", `${rect.height}px`);
        hover = true;
      }
      if (target.dataset.cursor === "disable") {
        cursor.classList.add("cursor-disable");
      }
    };
    const onMouseOut = () => {
      cursor.classList.remove("cursor-disable", "cursor-icons");
      hover = false;
      pinned = null;
    };

    const targets = Array.from(document.querySelectorAll<HTMLElement>("[data-cursor]"));
    targets.forEach((el) => {
      el.addEventListener("mouseover", onMouseOver);
      el.addEventListener("mouseout", onMouseOut);
    });

    document.addEventListener("mousemove", onMouseMove);
    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      document.removeEventListener("mousemove", onMouseMove);
      targets.forEach((el) => {
        el.removeEventListener("mouseover", onMouseOver);
        el.removeEventListener("mouseout", onMouseOut);
      });
    };
  }, []);

  return (
    <>
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
      <div className="cursor-main" ref={cursorRef}></div>
    </>
  );
};

export default Cursor;
