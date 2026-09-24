import { ArrowUpRight } from "lucide-react";
import SocialIcon from "./SocialIcon";
import Reveal from "./Reveal";
import { portfolioData as data } from "../data/portfolioData";
export function Tags({ items }: { items: string[] }) {
  return (
    <div className="tags">
      {items.map((item) => (
        <span key={item}>{item}</span>
      ))}
    </div>
  );
}
export function Section({
  id,
  number,
  title,
  eyebrow,
  children,
}: {
  id: string;
  number: string;
  title: string;
  eyebrow: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="section">
      <Reveal>
        <div className="section-heading">
          <div>
            <p className="eyebrow">
              {number} / {eyebrow}
            </p>
            <h2>{title}</h2>
          </div>
        </div>
        {children}
      </Reveal>
    </section>
  );
}
export function SocialLinks() {
  return (
    <div className="social-links">
      {data.socialLinks
        .filter((s) => s.url)
        .map((s) => {
          return (
            <a
              key={s.label}
              href={s.url}
              aria-label={s.label}
              target={s.url.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
            >
              <SocialIcon name={s.icon} />
              <span>{s.label}</span>
              <ArrowUpRight size={14} />
            </a>
          );
        })}
    </div>
  );
}
export function ExternalLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return href ? (
    <a className="text-link" href={href} target="_blank" rel="noreferrer">
      {children}
      <ArrowUpRight size={16} />
    </a>
  ) : null;
}
