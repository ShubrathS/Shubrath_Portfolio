import { useRef, useCallback } from "react";
import "./styles/Career.css";

const Career = () => {
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>, index: number) => {
    const card = cardsRef.current[index];
    if (!card || window.innerWidth <= 1024) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -6;
    const rotateY = ((x - centerX) / centerX) * 6;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
    card.style.setProperty("--tilt-x", `${x}px`);
    card.style.setProperty("--tilt-y", `${y}px`);
  }, []);

  const handleMouseLeave = useCallback((index: number) => {
    const card = cardsRef.current[index];
    if (!card) return;
    card.style.transform = "";
  }, []);

  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div
            className="career-info-box tilt-card"
            ref={(el) => { cardsRef.current[0] = el; }}
            onMouseMove={(e) => handleMouseMove(e, 0)}
            onMouseLeave={() => handleMouseLeave(0)}
          >
            <div className="tilt-card-shine" />
            <div className="career-info-in">
              <div className="career-role">
                <h4>AI & Automation Engineer</h4>
                <h5>Sapacia India Pvt. Ltd.</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Architected a custom ERP system unifying inventory, procurement &
              task tracking. Engineered 15+ business automations, built GenAI /
              LLM-powered workflows with CrewAI & AutoGen, and implemented RAG
              pipelines with LangChain & vector databases. Reduced manual
              reporting time by 50%.
            </p>
          </div>
          <div
            className="career-info-box tilt-card"
            ref={(el) => { cardsRef.current[1] = el; }}
            onMouseMove={(e) => handleMouseMove(e, 1)}
            onMouseLeave={() => handleMouseLeave(1)}
          >
            <div className="tilt-card-shine" />
            <div className="career-info-in">
              <div className="career-role">
                <h4>SAP Consultant</h4>
                <h5>Mindra Group (Reliance Industry Ltd.) </h5>
              </div>
              <h3>23–25</h3>
            </div>
            <p>
              Ensured 99%+ data integrity with full-cycle SAP Business One
              implementation, migrating 50,000+ records with zero data loss.
              Trained 25+ end-users and reduced report generation time by 35%
              through automated SAP queries and Crystal Reports.
            </p>
          </div>
          <div
            className="career-info-box tilt-card"
            ref={(el) => { cardsRef.current[2] = el; }}
            onMouseMove={(e) => handleMouseMove(e, 2)}
            onMouseLeave={() => handleMouseLeave(2)}
          >
            <div className="tilt-card-shine" />
            <div className="career-info-in">
              <div className="career-role">
                <h4>Business Automation Intern</h4>
                <h5>Mindra Pvt. Ltd.</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
              Reduced end-to-end process time by 20% and operational costs by
              15% through targeted automation strategies. Improved data accuracy
              by 25% by integrating UiPath and Power Automate across
              cross-functional workflows.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
