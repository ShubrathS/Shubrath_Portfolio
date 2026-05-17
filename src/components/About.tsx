import "./styles/About.css";
import StatsCounter from "./StatsCounter";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">About Me</h3>
        <p className="para">
          AI & Automation Engineer with 3 years of experience designing
          production-grade GenAI, RAG, and multi-agent systems. I architect
          LLM orchestration with CrewAI and AutoGen, build end-to-end RAG
          pipelines on Pinecone / FAISS / Weaviate, and ship MLOps deployments
          across AWS, Azure, and GCP. Track record of 40% workflow efficiency
          gains, 50% reduction in manual reporting, and published research in
          LLM fairness and Responsible AI.
        </p>
        <StatsCounter />
      </div>
    </div>
  );
};

export default About;
