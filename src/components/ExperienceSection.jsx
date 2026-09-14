import { experience } from "../data/portfolioData";
import { useReveal } from "../hooks/useReveal";
import "./Experience.css";

export default function Experience() {
  const { ref, isVisible } = useReveal();

  return (
    <section id="experience">
      <div className="container">
        <div ref={ref} className={`reveal ${isVisible ? "is-visible" : ""}`}>
          <p className="eyebrow">Experience</p>
          <h2 className="section-title">Where I've spent my time</h2>
        </div>

        <div className="timeline">
          {experience.map((item, i) => (
            <div
              key={item.role + item.org}
              className={`timeline-item reveal ${isVisible ? "is-visible" : ""}`}
              style={{ transitionDelay: isVisible ? `${i * 120}ms` : "0ms" }}
            >
              <div className="timeline-marker">
                <span className="timeline-dot" />
                {i !== experience.length - 1 && <span className="timeline-line" />}
              </div>

              <div className="timeline-card glass">
                <div className="timeline-card-head">
                  <div>
                    <h3>{item.role}</h3>
                    <p className="timeline-org">{item.org}</p>
                  </div>
                  <span className="timeline-period">{item.period}</span>
                </div>
                <p className="timeline-desc">{item.description}</p>
                <div className="timeline-tags">
                  {item.tags.map((tag) => (
                    <span key={tag} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
