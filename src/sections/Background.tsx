import { ArrowUpRight, GraduationCap, Award, Network } from "lucide-react";
import { portfolioData as data } from "../data/portfolioData";
import { Section, Tags, ExternalLink } from "../components/Shared";
export default function Background() {
  return (
    <>
      <Section
        id="about"
        number="02"
        eyebrow="THE PERSON BEHIND THE PROJECTS"
        title="Curious by nature. Engineer by practice."
      >
        <div className="about-grid">
          <div className="about-copy">
            {data.personalInfo.profileImage && (
              <img
                className="profile-photo"
                src={data.personalInfo.profileImage}
                alt={data.personalInfo.name}
                loading="lazy"
              />
            )}
            <p>{data.personalInfo.biography}</p>
            <p>{data.personalInfo.philosophy}</p>
          </div>
          <div className="interest-list">
            {data.personalInfo.interests.map((s, i) => (
              <div key={s}>
                <span className="mono">0{i + 1}</span>
                {s}
                <ArrowUpRight size={16} />
              </div>
            ))}
          </div>
        </div>
      </Section>
      <Section
        id="experience"
        number="03"
        eyebrow="LEARNING IN THE REAL WORLD"
        title="Experience & training."
      >
        <div className="timeline">
          {data.experience.map((e) => (
            <article className="timeline-row" key={e.organization + e.role}>
              <div className="timeline-date">
                {e.date || "Technical training"}
                <span>{e.location}</span>
              </div>
              <div>
                <h3>{e.role}</h3>
                <h4>{e.organization}</h4>
                <p>{e.description}</p>
                <Tags items={e.skills} />
                <ExternalLink href={e.certificate}>
                  View certificate
                </ExternalLink>
              </div>
            </article>
          ))}
        </div>
      </Section>
      <Section
        id="skills"
        number="04"
        eyebrow="MY TOOLKIT"
        title="The tools behind the work."
      >
        <div className="skills-grid">
          {data.skills.map((s, i) => (
            <article className="skill-card" key={s.category}>
              <span className="skill-number">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3>{s.category}</h3>
              <Tags items={s.items} />
            </article>
          ))}
        </div>
      </Section>
      <Section
        id="education"
        number="05"
        eyebrow="ENGINEERING FOUNDATIONS"
        title="Always a student."
      >
        {data.education.map((e) => (
          <article key={e.university} className="education-card">
            <div className="education-icon">
              <GraduationCap size={30} />
            </div>
            <div>
              <p className="eyebrow">
                {e.startYear} — {e.expectedGraduation} (EXPECTED)
              </p>
              <h3>{e.degree}</h3>
              <h4>{e.major}</h4>
              <p>
                {e.faculty} · {e.university}
              </p>
              {e.gpa && <p>GPA: {e.gpa}</p>}
              <p className="small-label">RELEVANT COURSEWORK</p>
              <Tags items={e.coursework} />
            </div>
          </article>
        ))}
      </Section>
      <Section
        id="certificates"
        number="06"
        eyebrow="CONTINUOUS LEARNING"
        title="Learning, put into practice."
      >
        <div className="two-column">
          {data.certificates.map((c) => (
            <article className="credential-card" key={c.name}>
              {c.image ? (
                <img
                  src={c.image}
                  alt={c.name}
                  className="certificate-image"
                  loading="lazy"
                />
              ) : (
                <Award className="blue" size={30} />
              )}
              <p className="eyebrow">
                {c.organization} · {c.date}
              </p>
              <h3>{c.name}</h3>
              <Tags items={c.skills} />
              <ExternalLink href={c.credential}>View credential</ExternalLink>
            </article>
          ))}
        </div>
      </Section>
      <Community
        id="activities"
        number="07"
        eyebrow="BEYOND INDIVIDUAL WORK"
        title="Building with others."
        items={data.activities}
      />
      <Community
        id="volunteering"
        number="08"
        eyebrow="SHOWING UP FOR PEOPLE"
        title="A team player, beyond tech."
        items={data.volunteering}
      />
      {data.achievements.length > 0 && (
        <Section
          id="achievements"
          number="09"
          eyebrow="MILESTONES"
          title="Achievements."
        >
          {data.achievements.map((a) => (
            <article key={a.title}>
              <p className="eyebrow">{a.date}</p>
              <h3>{a.title}</h3>
              <p>{a.description}</p>
            </article>
          ))}
        </Section>
      )}
    </>
  );
}
function Community({
  id,
  number,
  eyebrow,
  title,
  items,
}: {
  id: string;
  number: string;
  eyebrow: string;
  title: string;
  items: typeof data.activities;
}) {
  return (
    <Section {...{ id, number, eyebrow, title }}>
      <div className="two-column">
        {items.map((a) => (
          <article className="community-card" key={a.role}>
            <div className="community-top">
              <Network size={23} />
              <span className="mono">{a.date}</span>
            </div>
            <h3>{a.role}</h3>
            <h4>{a.organization}</h4>
            <p>{a.description}</p>
            <Tags items={a.skills} />
          </article>
        ))}
      </div>
    </Section>
  );
}
