import { useEffect, useRef } from "react";
import "./styles/WhatIDo.css";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const WhatIDo = () => {
  const containerRef = useRef<(HTMLDivElement | null)[]>([]);
  const setRef = (el: HTMLDivElement | null, index: number) => {
    containerRef.current[index] = el;
  };
  useEffect(() => {
    const containers = containerRef.current;
    if (!ScrollTrigger.isTouch) return;

    const cleanups = containers.map((container) => {
      if (!container) return null;
      container.classList.remove("what-noTouch");
      const onClick = () => handleClick(container);
      container.addEventListener("click", onClick);
      return () => container.removeEventListener("click", onClick);
    });

    return () => {
      cleanups.forEach((cleanup) => cleanup?.());
    };
  }, []);
  return (
    <div className="whatIDO">
      <div className="what-box">
        <h2 className="title">
          W<span className="hat-h2">HAT</span>
          <span className="what-line-break">
            I<span className="do-h2"> DO</span>
          </span>
        </h2>
      </div>
      <div className="what-box">
        <div className="what-box-in">
          <div className="what-border2">
            <svg width="100%">
              <line
                x1="0"
                y1="0"
                x2="0"
                y2="100%"
                stroke="white"
                strokeWidth="2"
                strokeDasharray="7,7"
              />
              <line
                x1="100%"
                y1="0"
                x2="100%"
                y2="100%"
                stroke="white"
                strokeWidth="2"
                strokeDasharray="7,7"
              />
            </svg>
          </div>
          <div
            className="what-content what-noTouch"
            ref={(el) => setRef(el, 0)}
          >
            <div className="what-border1">
              <svg height="100%">
                <line
                  x1="0"
                  y1="0"
                  x2="100%"
                  y2="0"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
                <line
                  x1="0"
                  y1="100%"
                  x2="100%"
                  y2="100%"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
              </svg>
            </div>
            <div className="what-corner"></div>

            <div className="what-content-in">
              <h3>BACKEND & API ENGINEERING</h3>
              <h4>Services, Integrations & Microservices</h4>
              <p>
                Designing and shipping backend services and REST APIs in
                C#/.NET, Java, and Python. Cloud-native microservices on Azure
                and AWS, backed by CI/CD pipelines, automated testing, and the
                observability that makes production issues diagnosable.
              </p>
              <h5>Skillset & tools</h5>
              <div className="what-content-flex">
                <div className="what-tags">C# / .NET</div>
                <div className="what-tags">Spring Boot</div>
                <div className="what-tags">FastAPI</div>
                <div className="what-tags">REST APIs</div>
                <div className="what-tags">Microservices</div>
                <div className="what-tags">Docker / K8s</div>
              </div>
              <div className="what-arrow"></div>
            </div>
          </div>
          <div
            className="what-content what-noTouch"
            ref={(el) => setRef(el, 1)}
          >
            <div className="what-border1">
              <svg height="100%">
                <line
                  x1="0"
                  y1="100%"
                  x2="100%"
                  y2="100%"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
              </svg>
            </div>
            <div className="what-corner"></div>
            <div className="what-content-in">
              <h3>GENERATIVE AI & AUTOMATION</h3>
              <h4>LLM Workflows & Data Pipelines</h4>
              <p>
                Shipping production GenAI features behind plain REST APIs — RAG
                retrieval and multi-agent pipelines across Claude, GPT-4, and
                Gemini — plus the ETL and workflow automation that cut manual
                reporting effort in half.
              </p>
              <h5>Skillset & tools</h5>
              <div className="what-content-flex">
                <div className="what-tags">RAG Pipelines</div>
                <div className="what-tags">LangChain</div>
                <div className="what-tags">Multi-Agent</div>
                <div className="what-tags">PostgreSQL / ETL</div>
                <div className="what-tags">GitHub Copilot</div>
                <div className="what-tags">MLflow</div>
              </div>
              <div className="what-arrow"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatIDo;

function handleClick(container: HTMLDivElement) {
  container.classList.toggle("what-content-active");
  container.classList.remove("what-sibling");
  if (container.parentElement) {
    const siblings = Array.from(container.parentElement.children);

    siblings.forEach((sibling) => {
      if (sibling !== container) {
        sibling.classList.remove("what-content-active");
        sibling.classList.toggle("what-sibling");
      }
    });
  }
}
