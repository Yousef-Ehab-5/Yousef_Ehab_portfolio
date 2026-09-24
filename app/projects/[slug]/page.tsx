import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { portfolioData as data } from "../../../src/data/portfolioData";
import { Tags, ExternalLink } from "../../../src/components/Shared";
type Props = { params: Promise<{ slug: string }> };
export function generateStaticParams() {
  return data.projects.map((p) => ({ slug: p.slug }));
}
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const p = data.projects.find((p) => p.slug === slug);
  return {
    title: p
      ? `${p.title} | ${data.personalInfo.shortName}`
      : "Project not found",
    description: p?.description,
  };
}
export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const p = data.projects.find((p) => p.slug === slug);
  if (!p) notFound();
  return (
    <main id="main" className="detail-page">
      <Link className="text-link" href="/#projects">
        <ArrowLeft size={16} /> Back to projects
      </Link>
      <div className="detail-heading">
        <p className="eyebrow">
          {p.category} / {p.date} / {p.status}
        </p>
        <h1>{p.title}</h1>
        <p>{p.description}</p>
        <Tags items={p.technologies} />
        <div className="detail-links">
          <ExternalLink href={p.github}>Source on GitHub</ExternalLink>
          <ExternalLink href={p.demo}>Live demo</ExternalLink>
        </div>
      </div>
      <img
        className="detail-cover"
        src={p.image || "/images/projects/crypto.svg"}
        alt={`${p.title} conceptual cover`}
        width="1200"
        height="500"
      />
      <div className="detail-content">
        <aside>
          <p className="eyebrow">PROJECT NOTES</p>
          <a href="#overview">Overview</a>
          <a href="#approach">Problem & solution</a>
          <a href="#features">Features</a>
          <a href="#architecture">Architecture</a>
          <a href="#results">Results & learnings</a>
        </aside>
        <div>
          <section id="overview">
            <h2>Project overview</h2>
            <p>{p.fullDescription}</p>
          </section>
          <section id="approach">
            <h2>The problem</h2>
            <p>{p.problem}</p>
            <h2>The solution</h2>
            <p>{p.solution}</p>
          </section>
          <section id="features">
            <h2>Key features</h2>
            <ul>
              {p.features.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
          </section>
          <section id="architecture">
            <h2>Architecture</h2>
            <p>{p.architecture}</p>
            <h2>Challenges</h2>
            <p>{p.challenges}</p>
          </section>
          <section id="results">
            <h2>Results</h2>
            {"metrics" in p && p.metrics && (
              <div className="metrics">
                {p.metrics.map((m) => (
                  <div key={m.label}>
                    <strong>{m.value}</strong>
                    <span>{m.label}</span>
                  </div>
                ))}
              </div>
            )}
            <p>{p.results}</p>
            <h2>What I learned</h2>
            <p>{p.learned}</p>
          </section>
          {p.screenshots.map((s) => (
            <figure key={s.src}>
              <img src={s.src} alt={s.alt} loading="lazy" />
              <figcaption>{s.alt}</figcaption>
            </figure>
          ))}
        </div>
      </div>
      <Link href="/#projects" className="button secondary">
        <ArrowLeft size={17} /> Explore more projects
      </Link>
    </main>
  );
}
