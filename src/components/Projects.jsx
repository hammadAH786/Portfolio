import { projects } from "../data/portfolioData";
import { useReveal } from "../hooks/useReveal";
import "./Projects.css";

export default function Projects() {
  const { ref, isVisible } = useReveal();

  return (
    <section id="projects">
      <div className="container">
        <div ref={ref} className={`reveal ${isVisible ? "is-visible" : ""}`}>
          <p className="eyebrow">Projects</p>
          <h2 className="section-title">Things I've built</h2>
        </div>

        <div className="projects-grid">
          {projects.map((project, i) => (
            <article
              key={project.title}
              className={`project-card glass reveal ${isVisible ? "is-visible" : ""}`}
              style={{ transitionDelay: isVisible ? `${i * 90}ms` : "0ms" }}
            >
              <div className="project-thumb">
                {project.image ? (
                  <img src={project.image} alt={project.title} />
                ) : (
                  <div className="project-thumb-placeholder">
                    <span>{project.title.slice(0, 2).toUpperCase()}</span>
                  </div>
                )}
              </div>

              <div className="project-body">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.liveUrl} className="project-link">
                    Live demo ↗
                  </a>
                  <a href={project.codeUrl} className="project-link">
                    Source code ↗
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
