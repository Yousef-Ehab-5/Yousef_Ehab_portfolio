import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Project } from "../data/portfolioData";
import { Tags } from "./Shared";
export default function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  return (
    <article className="project-card">
      <Link
        href={`/projects/${project.slug}`}
        className="project-cover"
        aria-label={`Read ${project.title} case study`}
      >
        <img
          src={project.image || "/images/projects/crypto.svg"}
          alt={`${project.title} conceptual cover`}
          loading="lazy"
          width="800"
          height="500"
        />
        <span className="cover-index">
          0{index + 1} / {project.category}
        </span>
        <span className="cover-arrow">
          <ArrowUpRight size={20} />
        </span>
      </Link>
      <div className="project-meta">
        <span>{project.category}</span>
        <span>{project.date}</span>
      </div>
      <h3>
        <Link href={`/projects/${project.slug}`}>{project.title}</Link>
      </h3>
      <p>{project.description}</p>
      <Tags items={project.technologies} />
      <div className="project-bottom">
        <span>{project.status}</span>
        <Link href={`/projects/${project.slug}`}>
          View project <ArrowUpRight size={16} />
        </Link>
      </div>
    </article>
  );
}
