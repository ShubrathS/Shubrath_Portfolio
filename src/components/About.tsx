import "./styles/About.css";
import StatsCounter from "./StatsCounter";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">About Me</h3>
        <p className="para">
          I'm <span className="accent">Shubrath Shakyavanshi</span>, an
          AI &amp; Automation Engineer based in{" "}
          <span className="accent">Ahmedabad</span> with three years of
          experience designing production-grade Generative AI, RAG, and
          multi-agent systems. At <span className="accent">SSPACIA India</span>,
          I architect GenAI workflows that orchestrate{" "}
          <span className="accent">Claude</span>,{" "}
          <span className="accent">GPT-4</span>, and{" "}
          <span className="accent">Gemini</span> through frameworks like{" "}
          <span className="accent">CrewAI</span> and{" "}
          <span className="accent">LangChain</span>, and I build MLOps
          pipelines across <span className="accent">AWS</span>,{" "}
          <span className="accent">Azure</span>, and{" "}
          <span className="accent">GCP</span> — work that has delivered{" "}
          <span className="highlight">40% efficiency gains</span> and a{" "}
          <span className="highlight">50% reduction</span> in manual reporting.
        </p>
        <p className="para">
          Outside the day job, I've built{" "}
          <span className="project">Nebulux</span>, an autonomous multi-agent
          “AI software factory” that coordinates specialized agents to plan,
          code, and deploy full-stack apps;{" "}
          <span className="project">Aria</span>, a privacy-first multilingual
          iOS assistant with on-device storage in Hindi, Gujarati, and English;
          and published research on LLM fairness using benchmarks like{" "}
          <span className="accent">StereoSet</span>,{" "}
          <span className="accent">CrowS-Pairs</span>, and{" "}
          <span className="accent">BBQ</span>. What pulls me forward is the
          less-glamorous half of GenAI — turning impressive demos into
          reliable, observable systems that actually hold up in production.
        </p>
        <StatsCounter />
      </div>
    </div>
  );
};

export default About;
