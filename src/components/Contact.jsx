import { contact, profile } from "../data/portfolioData";
import { useReveal } from "../hooks/useReveal";
import "./Contact.css";

export default function Contact() {
  const { ref, isVisible } = useReveal();

  return (
    <section id="contact">
      <div className="container">
        <div
          ref={ref}
          className={`contact-panel glass reveal ${isVisible ? "is-visible" : ""}`}
        >
          <p className="eyebrow">Contact</p>
          <h2 className="section-title contact-heading">{contact.heading}</h2>
          <p className="contact-subheading">{contact.subheading}</p>

          <div className="contact-actions">
            <a href={`mailto:${profile.email}`} className="btn btn-primary">
              {profile.email}
            </a>
            <div className="contact-socials">
              <a href={profile.social.github} aria-label="GitHub" target="_blank" rel="noreferrer">
                GitHub
              </a>
              <a href={profile.social.linkedin} aria-label="LinkedIn" target="_blank" rel="noreferrer">
                LinkedIn
              </a>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
