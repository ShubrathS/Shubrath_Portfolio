import { ScrollSmoother } from "gsap/ScrollSmoother";

// Module-level singleton for the page's ScrollSmoother instance.
// Set by Navbar on mount and read by scroll-driven effects (e.g. initialFX).
export let smoother: ScrollSmoother;

export const setSmoother = (instance: ScrollSmoother) => {
  smoother = instance;
};
