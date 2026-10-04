import { PropsWithChildren } from "react";
import "./styles/Landing.css";
import GlitchText from "./GlitchText";

const Landing = ({ children }: PropsWithChildren) => {
  return (
    <>
      <div className="landing-section" id="landingDiv">
        <div className="landing-container">
          <div className="landing-intro">
            <h2>Hello! I'm</h2>
            <h1 title="Shubrath Shakyavanshi" aria-label="Shubrath Shakyavanshi">
              <GlitchText text="SHUBRATH" />
              <br />
              <span>
                <GlitchText text="SHAKYAVANSHI" />
              </span>
            </h1>
          </div>
          <div className="landing-info">
            <h3>Software Engineer</h3>
            <h2 className="landing-info-h2">
              <div className="landing-h2-1">Backend</div>
              <div className="landing-h2-2">GenAI</div>
            </h2>
            {/* Single words only: .landing-info is shrink-to-fit at 50% of the
                viewport, so multi-word phrases wrap onto two lines on phones. */}
            <h2>
              <div className="landing-h2-info">Cloud</div>
              <div className="landing-h2-info-1">Agents</div>
            </h2>
          </div>
        </div>
        {children}
      </div>
    </>
  );
};

export default Landing;
