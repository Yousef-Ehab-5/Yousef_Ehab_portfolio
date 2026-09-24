import { ArrowUpRight } from "lucide-react";
import { portfolioData as data } from "../data/portfolioData";
import { SocialLinks } from "../components/Shared";
export default function Contact() {
  return (
    <section className="contact-section" id="contact">
      <p className="eyebrow">HAVE SOMETHING IN MIND?</p>
      <h2>{data.contact.heading}</h2>
      <p>{data.contact.description}</p>
      <a className="email-link" href={`mailto:${data.contact.email}`}>
        {data.contact.email}
        <ArrowUpRight />
      </a>
      <SocialLinks />
    </section>
  );
}
