import { lazy, PropsWithChildren, Suspense, useEffect, useState } from "react";
import About from "./About";
import Career from "./Career";
import Contact from "./Contact";
import Cursor from "./Cursor";
import Landing from "./Landing";
import Navbar from "./Navbar";
import Skills from "./Skills";
import SocialIcons from "./SocialIcons";
import WhatIDo from "./WhatIDo";
import Work from "./Work";
import setSplitText from "./utils/splitText";
import ParticleNetwork from "./ParticleNetwork";
import MouseSpotlight from "./MouseSpotlight";
import ScrollProgress from "./ScrollProgress";

const TechStack = lazy(() => import("./TechStack"));

const MainContainer = ({ children }: PropsWithChildren) => {
  const [isDesktopView, setIsDesktopView] = useState<boolean>(
    window.innerWidth > 1024
  );

  useEffect(() => {
    const resizeHandler = () => {
      setSplitText();
      setIsDesktopView(window.innerWidth > 1024);
    };
    resizeHandler();
    window.addEventListener("resize", resizeHandler);

    // Geist loads with font-display:swap, so the first split can be measured
    // against fallback metrics and then re-flow once the real face arrives,
    // leaving stale line boxes behind. Re-split once fonts settle.
    let cancelled = false;
    document.fonts?.ready.then(() => {
      if (!cancelled) setSplitText();
    });

    return () => {
      cancelled = true;
      window.removeEventListener("resize", resizeHandler);
    };
    // Runs once: the handler reads window.innerWidth fresh each time, so it
    // must not depend on isDesktopView (that caused listener teardown/re-add
    // and an extra setSplitText() rebuild on every breakpoint cross).
  }, []);

  return (
    <div className="container-main">
      {/* Background effects */}
      <ParticleNetwork />
      <MouseSpotlight />
      <ScrollProgress />

      {/* Aurora background */}
      <div className="aurora-bg">
        <div className="aurora-layer aurora-1" />
        <div className="aurora-layer aurora-2" />
      </div>

      {/* Film grain overlay */}
      <div className="film-grain" />

      <Cursor />
      <Navbar />
      <SocialIcons />
      {isDesktopView && children}
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <div className="container-main">
            <Landing>{!isDesktopView && children}</Landing>
            <About />
            <WhatIDo />
            <Career />
            <Skills />
            <Work />
            {isDesktopView && (
              <Suspense fallback={<div>Loading....</div>}>
                <TechStack />
              </Suspense>
            )}
            <Contact />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContainer;
