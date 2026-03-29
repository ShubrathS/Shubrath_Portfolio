import { SplitText } from "gsap/SplitText";
import gsap from "gsap";
import { smoother } from "../Navbar";

export function initialFX() {
  document.body.style.overflowY = "auto";
  smoother.paused(false);
  document.getElementsByTagName("main")[0].classList.add("main-active");
  gsap.to("body", {
    backgroundColor: "#0a0e17",
    duration: 0.5,
    delay: 1,
  });

  // ── Navbar slide-down with spring ──
  gsap.fromTo(
    ".header",
    { y: -60, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: 1.2,
      ease: "elastic.out(1, 0.5)",
      delay: 0.1,
    }
  );

  // ── Nav fade gradient ──
  gsap.fromTo(
    ".nav-fade",
    { opacity: 0 },
    {
      opacity: 1,
      duration: 1,
      ease: "power1.inOut",
      delay: 0.3,
    }
  );

  // ── Social icons staggered entrance with scale ──
  gsap.fromTo(
    ".icons-section .social-icons span",
    { opacity: 0, scale: 0, y: 20 },
    {
      opacity: 1,
      scale: 1,
      y: 0,
      duration: 0.6,
      stagger: 0.1,
      ease: "back.out(1.7)",
      delay: 0.5,
    }
  );

  // ── Resume button entrance ──
  gsap.fromTo(
    ".resume-button",
    { opacity: 0, x: -20 },
    {
      opacity: 1,
      x: 0,
      duration: 0.8,
      ease: "power2.out",
      delay: 0.9,
    }
  );

  // ── Landing text animations ──
  var landingText = new SplitText(
    [".landing-info h3", ".landing-intro h2", ".landing-intro h1"],
    {
      type: "chars,lines",
      linesClass: "split-line",
    }
  );
  gsap.fromTo(
    landingText.chars,
    { opacity: 0, y: 80, filter: "blur(8px)", rotateX: -90 },
    {
      opacity: 1,
      duration: 1.2,
      filter: "blur(0px)",
      rotateX: 0,
      ease: "power3.out",
      y: 0,
      stagger: 0.025,
      delay: 0.3,
    }
  );

  let TextProps = { type: "chars,lines", linesClass: "split-h2" };

  var landingText2 = new SplitText(".landing-h2-info", TextProps);
  gsap.fromTo(
    landingText2.chars,
    { opacity: 0, y: 80, filter: "blur(8px)" },
    {
      opacity: 1,
      duration: 1.2,
      filter: "blur(0px)",
      ease: "power3.out",
      y: 0,
      stagger: 0.025,
      delay: 0.3,
    }
  );

  gsap.fromTo(
    ".landing-info-h2",
    { opacity: 0, y: 30, filter: "blur(4px)" },
    {
      opacity: 1,
      duration: 1.2,
      filter: "blur(0px)",
      ease: "power2.out",
      y: 0,
      delay: 0.8,
    }
  );

  var landingText3 = new SplitText(".landing-h2-info-1", TextProps);
  var landingText4 = new SplitText(".landing-h2-1", TextProps);
  var landingText5 = new SplitText(".landing-h2-2", TextProps);

  LoopText(landingText2, landingText3);
  LoopText(landingText4, landingText5);

  // ── Ambient background glow pulse ──
  gsap.to(".landing-circle1", {
    opacity: 0.9,
    duration: 3,
    ease: "sine.inOut",
    yoyo: true,
    repeat: -1,
    delay: 1,
  });

  gsap.to(".landing-circle2", {
    opacity: 0.6,
    duration: 4,
    ease: "sine.inOut",
    yoyo: true,
    repeat: -1,
    delay: 2,
  });
}

function LoopText(Text1: SplitText, Text2: SplitText) {
  var tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });
  const delay = 4;
  const delay2 = delay * 2 + 1;

  tl.fromTo(
    Text2.chars,
    { opacity: 0, y: 80 },
    {
      opacity: 1,
      duration: 1.2,
      ease: "power3.inOut",
      y: 0,
      stagger: 0.1,
      delay: delay,
    },
    0
  )
    .fromTo(
      Text1.chars,
      { y: 80 },
      {
        duration: 1.2,
        ease: "power3.inOut",
        y: 0,
        stagger: 0.1,
        delay: delay2,
      },
      1
    )
    .fromTo(
      Text1.chars,
      { y: 0 },
      {
        y: -80,
        duration: 1.2,
        ease: "power3.inOut",
        stagger: 0.1,
        delay: delay,
      },
      0
    )
    .to(
      Text2.chars,
      {
        y: -80,
        duration: 1.2,
        ease: "power3.inOut",
        stagger: 0.1,
        delay: delay2,
      },
      1
    );
}
