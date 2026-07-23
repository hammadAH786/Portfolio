import { about } from "../data/portfolioData";
import { useReveal } from "../hooks/useReveal";
import "./About.css";
// section-title, container, and reveal styles are shared across sections

export default function About() {
  const { ref, isVisible } = useReveal();

  return (
    <section id="about">
      <div className="container">
        <div ref={ref} className={`reveal ${isVisible ? "is-visible" : ""}`}>
          <p className="eyebrow">About</p>
          <h2 className="section-title">A little about how I work</h2>
        </div>

        <div className="about-grid">
          <div className={`about-text reveal ${isVisible ? "is-visible" : ""}`}>
            {about.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          <div className={`about-stats reveal ${isVisible ? "is-visible" : ""}`}>
            {about.stats.map((stat) => (
              <div key={stat.label} className="stat-card glass">
                <span className="stat-value">{stat.value}</span>
                <span className="stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
