import Lenis from "lenis";

// Module-level singleton for the page's Lenis instance.
// Set by Navbar on mount and read by scroll-driven effects (e.g. initialFX).
export let lenis: Lenis;

export const setLenis = (instance: Lenis) => {
  lenis = instance;
};
