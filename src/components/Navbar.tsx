import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HoverLinks from "./HoverLinks";
import { gsap } from "gsap";
import Lenis from "lenis";
import "lenis/dist/lenis.css";
import { setLenis } from "./lenis";
import "./styles/Navbar.css";

gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
  useEffect(() => {
    // Lenis moves the native scroll position a little each frame, so the
    // window is still the scroller: the scrub timelines in GsapScroll and the
    // scroll progress bar keep reading it unchanged.
    const lenis = new Lenis({
      // Fraction of the remaining distance covered per frame (at 60fps). Lower
      // means a longer glide after the wheel stops; 0.1 is the Lenis default
      // and what the reference sites use.
      lerp: 0.1,
      wheelMultiplier: 1,
    });
    setLenis(lenis);

    // Drive Lenis from GSAP's ticker so ScrollTrigger reads the scroll
    // position in the same frame it was written.
    lenis.on("scroll", ScrollTrigger.update);
    const tick = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);

    // Hold the page at the top until the loader hands over (initialFX calls
    // lenis.start()).
    lenis.scrollTo(0, { immediate: true, force: true });
    lenis.stop();

    const onLinkClick = (e: Event) => {
      if (window.innerWidth > 1024) {
        e.preventDefault();
        const elem = e.currentTarget as HTMLAnchorElement;
        const section = elem.getAttribute("data-href");
        // A fixed duration so a long jump arrives in a predictable time
        // instead of lerp's fast-then-crawl approach.
        if (section) lenis.scrollTo(section, { duration: 1.5 });
      }
    };

    const links = document.querySelectorAll(".header ul a");
    links.forEach((elem) => elem.addEventListener("click", onLinkClick));

    return () => {
      links.forEach((elem) => elem.removeEventListener("click", onLinkClick));
      gsap.ticker.remove(tick);
      lenis.destroy();
    };
  }, []);
  return (
    <>
      <div className="header">
        <a href="/#" className="navbar-title" data-cursor="disable">
          SS
        </a>
        <a
          href="https://www.linkedin.com/in/shubrath-shakyavanshi/"
          className="navbar-connect"
          data-cursor="disable"
          target="_blank"
          rel="noreferrer"
        >
          linkedin.com/in/shubrath-shakyavanshi
        </a>
        <ul>
          <li>
            <a data-href="#about" href="#about">
              <HoverLinks text="ABOUT" />
            </a>
          </li>
          <li>
            <a data-href="#skills" href="#skills">
              <HoverLinks text="SKILLS" />
            </a>
          </li>
          <li>
            <a data-href="#work" href="#work">
              <HoverLinks text="PROJECTS" />
            </a>
          </li>
          <li>
            <a data-href="#contact" href="#contact">
              <HoverLinks text="CONTACT" />
            </a>
          </li>
        </ul>
      </div>

      <div className="landing-circle1"></div>
      <div className="landing-circle2"></div>
      <div className="nav-fade"></div>
    </>
  );
};

export default Navbar;
