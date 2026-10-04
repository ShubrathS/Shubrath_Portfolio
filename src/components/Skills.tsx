import { useRef, useCallback } from "react";
import {
  TbApi,
  TbCloud,
  TbDatabase,
  TbGitBranch,
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
    title: "Backend & APIs",
    caption: "Services, contracts, integrations",
    icon: TbApi,
    skills: [
      "C#",
      ".NET",
      "Web APIs",
      "Java",
      "Spring Boot",
      "Python",
      "FastAPI",
      "Node.js",
      "TypeScript",
      "REST APIs",
      "Microservices",
    ],
  },
  {
    title: "Cloud & Containers",
    caption: "Azure · AWS · Docker · Kubernetes",
    icon: TbCloud,
    skills: [
      "Azure App Services",
      "Azure Key Vault",
      "Azure Blob Storage",
      "AWS S3",
      "Redis",
      "Docker",
      "Kubernetes",
    ],
  },
  {
    title: "Data & Migrations",
    caption: "Modelling, versioning, pipelines",
    icon: TbDatabase,
    skills: ["PostgreSQL", "SQL", "Flyway", "ETL"],
  },
  {
    title: "Engineering Practices",
    caption: "How the work actually ships",
    icon: TbGitBranch,
    skills: [
      "CI/CD Pipelines",
      "Unit Testing",
      "Integration Testing",
      "End-to-End Testing",
      "Code Reviews",
      "Observability",
      "Production Support",
      "Secure Development",
      "SDLC",
      "Git",
    ],
  },
  {
    title: "AI-Assisted Dev & GenAI",
    caption: "LLMs in production, not demos",
    icon: TbSparkles,
    skills: [
      "GitHub Copilot",
      "Claude",
      "LLM APIs",
      "RAG",
      "LangChain",
      "Multi-Agent Pipelines",
      "MLflow",
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
          The stack I build, ship, and support production systems with — mirrored
          from my resume.
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
