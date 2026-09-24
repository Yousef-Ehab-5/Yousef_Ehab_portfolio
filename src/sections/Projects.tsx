"use client";
import { useState } from "react";
import { portfolioData as data } from "../data/portfolioData";
import ProjectCard from "../components/ProjectCard";
import { Section } from "../components/Shared";
export default function Projects() {
  const [filter, setFilter] = useState("All");
  const categories = ["All", ...new Set(data.projects.map((p) => p.category))];
  const projects = data.projects
    .filter((p) => filter === "All" || p.category === filter)
    .sort((a, b) => Number(b.featured) - Number(a.featured));
  return (
    <Section
      id="projects"
      number="01"
      eyebrow="SELECTED WORK"
      title="Ideas, built into reality."
    >
      <div className="projects-intro">
        <p>
          A selection of projects across intelligent software,
          <br className="desktop-break" /> mobile experiences, and engineering
          systems.
        </p>
        <span className="mono">
          {String(data.projects.length).padStart(2, "0")} PROJECTS & COUNTING
        </span>
      </div>
      <div className="filters" aria-label="Filter projects">
        {categories.map((c) => (
          <button
            key={c}
            aria-pressed={filter === c}
            className={filter === c ? "active" : ""}
            onClick={() => setFilter(c)}
          >
            {c}
            {c === "All" && <span>{data.projects.length}</span>}
          </button>
        ))}
      </div>
      <div className="project-grid" aria-live="polite">
        {projects.map((p, i) => (
          <ProjectCard key={p.slug} project={p} index={i} />
        ))}
      </div>
    </Section>
  );
}
