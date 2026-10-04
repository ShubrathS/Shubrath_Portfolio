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
                <h5>SSPACIA India Pvt. Ltd.</h5>
              </div>
              <h3>2025+</h3>
            </div>
            <p>
              Folded 5+ disconnected tools into one cloud-native internal ERP by
              building backend microservices and REST APIs, raising workflow
              efficiency by 40%. Automated ETL pipelines in Python and SQL on
              PostgreSQL with Flyway-versioned migrations, cutting manual
              reporting by 50%. Established CI/CD, monitoring, and observability
              across Azure and AWS; secured secrets and files with Key Vault,
              Blob Storage, and S3, and cut API response times with Redis
              caching. Shipped production GenAI features — RAG and multi-agent
              pipelines across Claude, GPT-4, and Gemini — behind REST APIs.
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
                <h5>Mindra Group (Reliance Industries Ltd.)</h5>
              </div>
              <h3>23–25</h3>
            </div>
            <p>
              Migrated 50,000+ business records into a new SAP Business One
              platform at 99%+ data integrity, writing SQL validation scripts
              and automating reconciliation. Cut report-generation time by 35%
              by automating Crystal Reports workflows, and resolved production
              data and reporting issues for finance and operations users.
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
