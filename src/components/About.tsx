import "./styles/About.css";
import StatsCounter from "./StatsCounter";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">About Me</h3>
        <p className="para">
          I'm <span className="accent">Shubrath Shakyavanshi</span>, a software
          engineer based in <span className="accent">Ahmedabad</span> with about
          three years of experience building, testing, and supporting backend
          services and API integrations in{" "}
          <span className="accent">C#/.NET</span>,{" "}
          <span className="accent">Java</span>, and{" "}
          <span className="accent">Python</span>. At{" "}
          <span className="accent">SSPACIA India</span> I ship cloud-native
          microservices on <span className="accent">Azure</span> and{" "}
          <span className="accent">AWS</span> — with CI/CD pipelines, automated
          testing, and observability behind them — and I built the GenAI layer
          on top: RAG and multi-agent pipelines across{" "}
          <span className="accent">Claude</span>,{" "}
          <span className="accent">GPT-4</span>, and{" "}
          <span className="accent">Gemini</span>, served as plain REST APIs.
          That work folded 5+ disconnected tools into one internal ERP, lifting
          workflow efficiency by{" "}
          <span className="highlight">40%</span> and cutting manual reporting by{" "}
          <span className="highlight">50%</span>.
        </p>
        <p className="para">
          Before that I spent a year and a half on{" "}
          <span className="accent">SAP B1</span> for{" "}
          <span className="accent">Reliance Industries</span>, migrating{" "}
          <span className="highlight">50,000+</span> business records at{" "}
          <span className="highlight">99%+</span> data integrity and automating
          the reporting finance and operations ran on. Outside the day job I've
          built <span className="project">Nebulux</span>, a distributed
          multi-agent system coordinating specialized agents across four LLM
          backends; <span className="project">Aria</span>, a privacy-first
          multilingual iOS assistant with on-device storage in Hindi, Gujarati,
          and English; and an open-source harness for evaluating LLM bias across{" "}
          <span className="accent">StereoSet</span>,{" "}
          <span className="accent">CrowS-Pairs</span>, and{" "}
          <span className="accent">BBQ</span>. What pulls me forward is the
          less-glamorous half of this work — turning impressive demos into
          reliable, observable systems that actually hold up in production.
        </p>
        <StatsCounter />
      </div>
    </div>
  );
};

export default About;
