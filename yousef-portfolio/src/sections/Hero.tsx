"use client";
import { useState, useEffect } from "react";
import {
  ArrowRight,
  ArrowDown,
  Download,
  MapPin,
  Code2,
  Terminal,
  BrainCircuit,
} from "lucide-react";
import { portfolioData as data } from "../data/portfolioData";
import { SocialLinks } from "../components/Shared";
export default function Hero() {
  const p = data.personalInfo;
  const [role, setRole] = useState(0);
  useEffect(() => {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = setInterval(
      () => setRole((n) => (n + 1) % p.roles.length),
      3500,
    );
    return () => clearInterval(timer);
  }, [p.roles.length]);
  return (
    <section id="home" className="hero">
      <div className="hero-top">
        <span className="availability">
          <span />
          {p.availability}
        </span>
        <span className="location">
          <MapPin size={14} />
          {p.location}
        </span>
      </div>
      <div className="hero-grid">
        <div className="hero-copy">
          <p className="hello">HELLO, I’M {p.shortName.toUpperCase()}</p>
          <h1>
            {p.headline[0]}
            <br />
            <span>{p.headline[1]}</span>
          </h1>
          <p className="hero-title">{p.title}</p>
          <div className="rotating-role" key={role}>
            <span className="code-mark">&lt;/&gt;</span> {p.roles[role]}
          </div>
          <p className="hero-description">{p.intro}</p>
          <div className="hero-buttons">
            <a className="button primary" href="#projects">
              Explore my work <ArrowRight size={17} />
            </a>
            <a className="button secondary" href={p.cv} download>
              <Download size={17} /> Download CV
            </a>
            <a className="text-link" href="#contact">
              Contact me <ArrowUpRightSmall />
            </a>
          </div>
          <SocialLinks />
        </div>
        <div className="engineering-panel">
          <div className="panel-top">
            <span>THE ENGINEERING MINDSET</span>
            <span>01 — ∞</span>
          </div>
          <div className="system-map">
            <div className="map-track track-a" />
            <div className="map-track track-b" />
            <div className="map-core">
              <span>
                {p.initials}
                <span className="blue">.</span>
              </span>
              <small>LEARN. BUILD. ITERATE.</small>
            </div>
            <div className="map-node node-a">
              <BrainCircuit />
              <span>Intelligence</span>
            </div>
            <div className="map-node node-b">
              <Code2 />
              <span>Software</span>
            </div>
            <div className="map-node node-c">
              <Terminal />
              <span>Systems</span>
            </div>
          </div>
          <div className="panel-bottom">
            <span>Curiosity → Code → Impact</span>
            <span className="blue">Always evolving ↗</span>
          </div>
        </div>
      </div>
      <div className="hero-footer">
        <span>SOFTWARE THINKING. ENGINEERING FOUNDATIONS.</span>
        <a href="#projects">
          Scroll to explore <ArrowDown size={15} />
        </a>
      </div>
    </section>
  );
}
function ArrowUpRightSmall() {
  return <span aria-hidden="true">↗</span>;
}
