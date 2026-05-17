import "./styles/About.css";
import StatsCounter from "./StatsCounter";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">About Me</h3>
        <p className="para">
          I'm Shubrath Shakyavanshi, an AI & Automation Engineer based in
          Ahmedabad with three years of experience designing production-grade
          Generative AI, RAG, and multi-agent systems. At SSPACIA India, I
          architect GenAI workflows that orchestrate Claude, GPT-4, and Gemini
          through frameworks like CrewAI and LangChain, and I build MLOps
          pipelines across AWS, Azure, and GCP — work that has delivered 40%
          efficiency gains and a 50% reduction in manual reporting.
        </p>
        <p className="para">
          Outside the day job, I've built Nebulux, an autonomous multi-agent
          “AI software factory” that coordinates specialized agents to plan,
          code, and deploy full-stack apps; Aria, a privacy-first multilingual
          iOS assistant with on-device storage in Hindi, Gujarati, and English;
          and published research on LLM fairness using benchmarks like
          StereoSet, CrowS-Pairs, and BBQ. What pulls me forward is the
          less-glamorous half of GenAI — turning impressive demos into
          reliable, observable systems that actually hold up in production.
        </p>
        <StatsCounter />
      </div>
    </div>
  );
};

export default About;
