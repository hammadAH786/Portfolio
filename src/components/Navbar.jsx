import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { profile } from "../data/portfolioData";
import "./Navbar.css";

const links = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Skills", href: "/skills" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleLinkClick = () => setMenuOpen(false);

  return (
    <header className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
      <nav className="navbar-inner glass container">

        {/* Logo */}
        <Link to="/" className="navbar-logo">
          {profile.avatarInitials}
        </Link>


        {/* Desktop Navigation */}
        <ul className="navbar-links">
          {links.map((link) => (
            <li key={link.href}>
              <Link to={link.href}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>


        {/* Resume Button */}
        <a
          href={profile.resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-ghost navbar-cta"
        >
          Resume
        </a>


        {/* Mobile Menu Button */}
        <button
          className={`navbar-toggle ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>

      </nav>


      {/* Mobile Navigation */}
      <div className={`navbar-mobile glass ${menuOpen ? "open" : ""}`}>
        <ul>

          {links.map((link) => (
            <li key={link.href}>
              <Link
                to={link.href}
                onClick={handleLinkClick}
              >
                {link.label}
              </Link>
            </li>
          ))}


          {/* Mobile Resume */}
          <li>
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleLinkClick}
            >
              Resume
            </a>
          </li>


        </ul>
      </div>

    </header>
  );
}