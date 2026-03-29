import "./styles/Career.css";

const Career = () => {
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
          <div className="career-info-box">
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
          <div className="career-info-box">
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
          <div className="career-info-box">
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
