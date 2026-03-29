import * as THREE from "three";
import gsap from "gsap";

export function setCharTimeline(
  character: THREE.Object3D<THREE.Object3DEventMap> | null,
  camera: THREE.PerspectiveCamera
) {
  const tl1 = gsap.timeline({
    scrollTrigger: {
      trigger: ".landing-section",
      start: "top top",
      end: "bottom top",
      scrub: true,
      invalidateOnRefresh: true,
    },
  });
  const tl2 = gsap.timeline({
    scrollTrigger: {
      trigger: ".about-section",
      start: "center 55%",
      end: "bottom top",
      scrub: true,
      invalidateOnRefresh: true,
    },
  });
  const tl3 = gsap.timeline({
    scrollTrigger: {
      trigger: ".whatIDO",
      start: "top top",
      end: "bottom top",
      scrub: true,
      invalidateOnRefresh: true,
    },
  });

  let neckBone = character?.getObjectByName("Neck");

  if (window.innerWidth > 1024) {
    if (character) {
      tl1
        .fromTo(character.rotation, { y: 0 }, { y: 0.7, duration: 1 }, 0)
        .to(camera.position, { z: 22 }, 0)
        .fromTo(".character-model", { x: 0 }, { x: "-25%", duration: 1 }, 0)
        .to(".landing-container", { opacity: 0, duration: 0.4 }, 0)
        .to(".landing-container", { y: "40%", duration: 0.8 }, 0)
        .fromTo(".about-me", { y: "-50%" }, { y: "0%" }, 0);

      tl2
        .to(
          camera.position,
          { z: 75, y: 8.4, duration: 6, delay: 2, ease: "power3.inOut" },
          0
        )
        .to(".about-section", { y: "30%", duration: 6 }, 0)
        .to(".about-section", { opacity: 0, delay: 3, duration: 2 }, 0)
        .fromTo(
          ".character-model",
          { pointerEvents: "inherit" },
          { pointerEvents: "none", x: "-12%", delay: 2, duration: 5 },
          0
        )
        .to(character.rotation, { y: 0.92, x: 0.12, delay: 3, duration: 3 }, 0);

      // Animate neck if bone exists
      if (neckBone) {
        tl2.to(neckBone.rotation, { x: 0.6, delay: 2, duration: 3 }, 0);
      }

      tl2
        .fromTo(
          ".what-box-in",
          { display: "none" },
          { display: "flex", duration: 0.1, delay: 6 },
          0
        )
        .fromTo(
          ".character-rim",
          { opacity: 1, scaleX: 1.4 },
          { opacity: 0, scale: 0, y: "-70%", duration: 5, delay: 2 },
          0.3
        );

      tl3
        .fromTo(
          ".character-model",
          { y: "0%" },
          { y: "-100%", duration: 4, ease: "none", delay: 1 },
          0
        )
        .fromTo(".whatIDO", { y: 0 }, { y: "15%", duration: 2 }, 0)
        .to(character.rotation, { x: -0.04, duration: 2, delay: 1 }, 0);
    }
  } else {
    if (character) {
      const tM2 = gsap.timeline({
        scrollTrigger: {
          trigger: ".what-box-in",
          start: "top 70%",
          end: "bottom top",
        },
      });
      tM2.to(".what-box-in", { display: "flex", duration: 0.1, delay: 0 }, 0);
    }
  }
}

export function setAllTimeline() {
  // ── Career timeline ──
  const careerTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: ".career-section",
      start: "top 30%",
      end: "100% center",
      scrub: true,
      invalidateOnRefresh: true,
    },
  });
  careerTimeline
    .fromTo(
      ".career-timeline",
      { maxHeight: "10%" },
      { maxHeight: "100%", duration: 0.5 },
      0
    )

    .fromTo(
      ".career-timeline",
      { opacity: 0 },
      { opacity: 1, duration: 0.1 },
      0
    )
    .fromTo(
      ".career-info-box",
      { opacity: 0, y: 40, filter: "blur(4px)" },
      { opacity: 1, y: 0, filter: "blur(0px)", stagger: 0.1, duration: 0.5 },
      0
    )
    .fromTo(
      ".career-dot",
      { animationIterationCount: "infinite" },
      {
        animationIterationCount: "1",
        delay: 0.3,
        duration: 0.1,
      },
      0
    );

  if (window.innerWidth > 1024) {
    careerTimeline.fromTo(
      ".career-section",
      { y: 0 },
      { y: "20%", duration: 0.5, delay: 0.2 },
      0
    );
  } else {
    careerTimeline.fromTo(
      ".career-section",
      { y: 0 },
      { y: 0, duration: 0.5, delay: 0.2 },
      0
    );
  }

  // ── About section reveal ──
  gsap.fromTo(
    ".about-me h3",
    { opacity: 0, y: 30, filter: "blur(4px)" },
    {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".about-section",
        start: "top 75%",
        end: "top 40%",
        toggleActions: "play none none reverse",
      },
    }
  );

  gsap.fromTo(
    ".about-me p",
    { opacity: 0, y: 40, filter: "blur(6px)" },
    {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      duration: 1.2,
      delay: 0.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".about-section",
        start: "top 75%",
        end: "top 40%",
        toggleActions: "play none none reverse",
      },
    }
  );

  // ── Work section reveal ──
  gsap.fromTo(
    ".work-section h2",
    { opacity: 0, y: 50, filter: "blur(6px)" },
    {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".work-section",
        start: "top 80%",
        end: "top 50%",
        toggleActions: "play none none reverse",
      },
    }
  );

  gsap.fromTo(
    ".carousel-wrapper",
    { opacity: 0, y: 60, filter: "blur(8px)" },
    {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      duration: 1.2,
      delay: 0.15,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".work-section",
        start: "top 70%",
        end: "top 40%",
        toggleActions: "play none none reverse",
      },
    }
  );

  // ── Career section heading reveal ──
  gsap.fromTo(
    ".career-section h2",
    { opacity: 0, y: 60, scale: 0.9, filter: "blur(8px)" },
    {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      duration: 1.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".career-section",
        start: "top 80%",
        end: "top 50%",
        toggleActions: "play none none reverse",
      },
    }
  );

  // ── Contact section reveal ──
  gsap.fromTo(
    ".contact-section h3",
    { opacity: 0, x: -40, filter: "blur(6px)" },
    {
      opacity: 1,
      x: 0,
      filter: "blur(0px)",
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".contact-section",
        start: "top 80%",
        end: "top 50%",
        toggleActions: "play none none reverse",
      },
    }
  );

  gsap.fromTo(
    ".contact-box",
    { opacity: 0, y: 40, filter: "blur(4px)" },
    {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      duration: 0.8,
      stagger: 0.12,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".contact-flex",
        start: "top 85%",
        end: "top 55%",
        toggleActions: "play none none reverse",
      },
    }
  );

  gsap.fromTo(
    ".contact-footer",
    { opacity: 0, y: 20 },
    {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".contact-footer",
        start: "top 95%",
        toggleActions: "play none none reverse",
      },
    }
  );

  // ── WhatIDo section heading parallax ──
  gsap.fromTo(
    ".what-box h2",
    { y: 0 },
    {
      y: -30,
      ease: "none",
      scrollTrigger: {
        trigger: ".whatIDO",
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
      },
    }
  );

  // ── Career heading parallax ──
  gsap.fromTo(
    ".career-section > .career-container > h2",
    { y: 0 },
    {
      y: -20,
      ease: "none",
      scrollTrigger: {
        trigger: ".career-section",
        start: "top bottom",
        end: "center center",
        scrub: 1,
      },
    }
  );

  // ── Work heading parallax ──
  gsap.fromTo(
    ".work-section h2",
    { y: 0 },
    {
      y: -15,
      ease: "none",
      scrollTrigger: {
        trigger: ".work-section",
        start: "top bottom",
        end: "center center",
        scrub: 1,
      },
    }
  );
}
