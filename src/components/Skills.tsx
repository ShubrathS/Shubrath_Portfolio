import { useRef, useCallback } from "react";
import {
  TbBrain,
  TbCloudCog,
  TbCode,
  TbRobot,
  TbScale,
  TbSparkles,
} from "react-icons/tb";
import type { IconType } from "react-icons";
import "./styles/Skills.css";

type SkillGroup = {
  title: string;
  caption: string;
  icon: IconType;
  skills: string[];
};

// Source of truth: Technical Skills section of the current resume
// (public/Shubrath_Shakyavanshi_Resume.pdf). Keep the two in sync.
const skillGroups: SkillGroup[] = [
  {
    title: "LLMs & Generative AI",
    caption: "Models, retrieval, generation",
    icon: TbSparkles,
    skills: [
      "RAG",
      "Embeddings",
      "Transformers",
      "Prompt Engineering",
      "GPT-4",
      "Claude",
      "LLaMA",
      "Mistral",
      "Whisper",
    ],
  },
  {
    title: "Agentic AI & Orchestration",
    caption: "Agents that plan and act",
    icon: TbRobot,
    skills: [
      "LangChain",
      "LlamaIndex",
      "CrewAI",
      "AutoGen",
      "MCP",
      "Multi-Agent Pipelines",
    ],
  },
  {
    title: "Responsible AI & Evaluation",
    caption: "Bias, fairness, benchmarks",
    icon: TbScale,
    skills: [
      "LLM Evaluation",
      "Bias & Fairness Benchmarking",
      "StereoSet",
      "CrowS-Pairs",
      "BBQ",
    ],
  },
  {
    title: "NLP & ML",
    caption: "Language and vision models",
    icon: TbBrain,
    skills: [
      "NER",
      "Text Classification",
      "Summarization",
      "PyTorch",
      "TensorFlow",
      "Hugging Face",
      "Scikit-learn",
      "OpenCV",
    ],
  },
  {
    title: "Cloud & MLOps",
    caption: "Train, ship, monitor",
    icon: TbCloudCog,
    skills: [
      "Azure ML",
      "SageMaker",
      "Docker",
      "Kubernetes",
      "MLflow",
      "CI/CD",
      "FAISS",
      "Pinecone",
      "Weaviate",
      "Chroma",
    ],
  },
  {
    title: "Engineering & Data",
    caption: "The plumbing underneath",
    icon: TbCode,
    skills: [
      "Python",
      "TypeScript",
      "JavaScript",
      "Java",
      "SQL",
      "FastAPI",
      "Flask",
      "Node.js",
      "REST APIs",
      "ETL",
      "Git",
    ],
  },
];

const Skills = () => {
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  // Same pointer-tracked tilt the career cards use, so the two sections feel
  // like one system. Disabled below 1024px where there is no hover pointer.
  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>, index: number) => {
      const card = cardsRef.current[index];
      if (!card || window.innerWidth <= 1024) return;

      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const rotateX = ((y - rect.height / 2) / (rect.height / 2)) * -4;
      const rotateY = ((x - rect.width / 2) / (rect.width / 2)) * 4;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
      card.style.setProperty("--skill-x", `${x}px`);
      card.style.setProperty("--skill-y", `${y}px`);
    },
    []
  );

  const handleMouseLeave = useCallback((index: number) => {
    const card = cardsRef.current[index];
    if (card) card.style.transform = "";
  }, []);

  return (
    <div className="skills-section section-container" id="skills">
      <div className="skills-container">
        <h2>
          Technical <span>skills</span>
        </h2>
        <p className="skills-intro">
          The AI stack I design, ship, and run in production — mirrored from my
          resume.
        </p>

        <div className="skills-grid">
          {skillGroups.map((group, index) => {
            const Icon = group.icon;
            return (
              <div
                className="skills-card"
                key={group.title}
                ref={(el) => {
                  cardsRef.current[index] = el;
                }}
                onMouseMove={(e) => handleMouseMove(e, index)}
                onMouseLeave={() => handleMouseLeave(index)}
              >
                <div className="skills-card-shine" />
                <div className="skills-card-head">
                  <span className="skills-icon" aria-hidden="true">
                    <Icon />
                  </span>
                  <div>
                    <h3>{group.title}</h3>
                    <h4>{group.caption}</h4>
                  </div>
                </div>
                <ul className="skills-tags">
                  {group.skills.map((skill) => (
                    <li className="skills-tag" key={skill}>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Skills;
