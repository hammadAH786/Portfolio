import { profile } from "../data/portfolioData";
import "./Footer.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <span>
          © {year} {profile.name}. Built with React &amp; a lot of border-radius.
        </span>
        <a href="#home" className="footer-back">
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
