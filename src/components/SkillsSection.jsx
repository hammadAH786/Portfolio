import { skills } from "../data/portfolioData";
import { useReveal } from "../hooks/useReveal";
import "./Skills.css";

function groupSkills(list) {
  return list.reduce((groups, skill) => {
    groups[skill.group] = groups[skill.group] || [];
    groups[skill.group].push(skill);
    return groups;
  }, {});
}

export default function Skills() {
  const { ref, isVisible } = useReveal();
  const grouped = groupSkills(skills);

  return (
    <section id="skills">
      <div className="container">
        <div ref={ref} className={`reveal ${isVisible ? "is-visible" : ""}`}>
          <p className="eyebrow">Skills</p>
          <h2 className="section-title">Tools I reach for most</h2>
        </div>

        <div className="skills-grid">
          {Object.entries(grouped).map(([group, items], gi) => (
            <div
              key={group}
              className={`skills-card glass reveal ${isVisible ? "is-visible" : ""}`}
              style={{ transitionDelay: isVisible ? `${gi * 100}ms` : "0ms" }}
            >
              <h3 className="skills-group-title">{group}</h3>
              <div className="skills-list">
                {items.map((skill) => (
                  <div className="skill-row" key={skill.name}>
                    <div className="skill-row-top">
                      <span>{skill.name}</span>
                      <span className="skill-level">{skill.level}%</span>
                    </div>
                    <div className="skill-track">
                      <div
                        className="skill-fill"
                        style={{
                          width: isVisible ? `${skill.level}%` : "0%",
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
