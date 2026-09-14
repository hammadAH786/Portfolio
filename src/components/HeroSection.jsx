import { useEffect, useRef } from "react";
import { profile } from "../data/portfolioData";
import "./Hero.css";

export default function Hero() {
  const orbRef = useRef(null);

  useEffect(() => {
    const orb = orbRef.current;
    if (!orb || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const handleMove = (e) => {
      const rect = orb.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = (e.clientX - cx) / 40;
      const dy = (e.clientY - cy) / 40;
      orb.style.transform = `translate(${dx}px, ${dy}px)`;
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <section id="home" className="hero">
      <div className="container hero-inner">
        <div className="hero-copy">
          <p className="eyebrow">Portfolio · {profile.title}</p>
          <h1 className="hero-title">
            Hi, I'm {profile.name.split(" ")[0]} —<br />Building Modern &  <span className="hero-highlight">Scalable Web Applications</span>.
          </h1>
          <p className="hero-tagline">{profile.tagline}</p>
          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              View my work
            </a>
            <a href="#contact" className="btn btn-ghost">
              Get in touch
            </a>
          </div>
          <div className="hero-meta">
            <span>{profile.location}</span>
            <span className="dot" />
            <span>Open to internships &amp; junior roles</span>
          </div>
        </div>

        <div className="hero-visual" aria-hidden="true">
          <div className="hero-orb-wrap">
            <div ref={orbRef} className="hero-frame">
              <div className="hero-frame-inner">
                {profile.photoUrl ? (
                  <img src={profile.photoUrl} alt={profile.name} className="hero-frame-photo" />
                ) : (
                  <span className="hero-frame-initials">{profile.avatarInitials}</span>
                )}
              </div>
            </div>
            <div className="hero-ring ring-1" />
            <div className="hero-ring ring-2" />
          </div>
        </div>
      </div>

      <a href="#about" className="scroll-cue" aria-label="Scroll to about section">
        <span className="scroll-cue-dot" />
      </a>
    </section>
  );
}
