import { useState } from "react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import Section from "../components/Section";
import CaseStudyModal from "../components/CaseStudyModal";
import Meta from "../components/Meta";
import { capabilities, consultingServices, projects } from "../data/projects";
import { education, experience, languages, stack } from "../data/resume";
import { site } from "../data/site";
import { formatDate, posts } from "../lib/posts";
import "../styles/consulting.css";
import "../styles/blog.css";

function Home() {
  const [caseStudyOpen, setCaseStudyOpen] = useState(false);
  const recentPosts = posts.slice(0, 2);

  return (
    <>
      <Meta
        title={`${site.name} — ${site.role}`}
        description={site.description}
        path="/"
      />

      <Hero />

      {/* PROJECTS */}
      <Section id="projects" title="Recent Projects">
        {projects.map((project) => (
          <div key={project.slug} className="automation-item">
            <h3>{project.name}</h3>
            <p className="project-tagline">{project.tagline}</p>
            <ul className="automation-list">
              {project.points.map((point) => (
                <li
                  key={point.label ?? point.text}
                  className={point.label ? undefined : "is-unlabelled"}
                >
                  {point.label && <strong>{point.label}:</strong>}
                  <span>{point.text}</span>
                </li>
              ))}
            </ul>

            <div className="project-footer">
              <span className="stack">
                <strong>Stack:</strong> {project.stack.join(", ")}
              </span>
              {project.hasCaseStudy && (
                <button className="case-study-trigger" onClick={() => setCaseStudyOpen(true)}>
                  Read the full case study
                </button>
              )}
              {project.link && (
                <a
                  href={project.link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="dispatch-link"
                >
                  {project.link.label}
                </a>
              )}
            </div>
          </div>
        ))}
      </Section>

      {/* WRITING */}
      {recentPosts.length > 0 && (
        <Section id="writing" title="The Product Blog">
          {recentPosts.map((post) => (
            <Link key={post.slug} to={`/blog/${post.slug}`} className="writing-teaser">
              <h3 className="writing-teaser-title">{post.title}</h3>
              <p className="writing-teaser-excerpt">{post.excerpt}</p>
              <div className="blog-meta">
                <time dateTime={post.date}>{formatDate(post.date)}</time>
                <span className="blog-meta-dot">·</span>
                <span>{post.readingMinutes} min read</span>
              </div>
            </Link>
          ))}
          <Link to="/blog" className="writing-all">
            All posts →
          </Link>
        </Section>
      )}

      {/* CONSULTING */}
      <Section id="consulting" title="AI Consulting">
        <p className="consulting-intro">
          I help small businesses figure out what AI can actually do for their operations,
          then build it. Not strategy decks. Not proofs of concept that live in a slide.
          Working software that solves a real problem.
        </p>
        <div className="consulting-grid">
          {consultingServices.map((service) => (
            <div key={service.title} className="consulting-card">
              <span className="consulting-card-icon">{service.icon}</span>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
        <a href="#contact" className="consulting-cta">
          Talk about your operation
        </a>
      </Section>

      {/* CAPABILITIES */}
      <Section id="capabilities" title="Capabilities">
        <div className="capabilities-grid">
          {capabilities.map((capability) => (
            <div key={capability.title} className="capability-card">
              <span className="capability-icon">{capability.icon}</span>
              <h3>{capability.title}</h3>
              <p>{capability.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* TECH STACK */}
      <Section id="systems" title="Tech Stack">
        <dl className="stack-list">
          {stack.map((group) => (
            <div key={group.label} className="stack-row">
              <dt>{group.label}</dt>
              <dd>{group.items}</dd>
            </div>
          ))}
        </dl>
      </Section>

      {/* EXPERIENCE */}
      <Section id="experience" title="Experience">
        {experience.map((role) => (
          <div key={`${role.company}-${role.title}`} className="experience-item">
            <h3>{role.title}</h3>
            <p className="experience-line">
              <strong>{role.company}</strong>
              {role.arrangement && ` · ${role.arrangement}`} · {role.dates}
              {role.location && ` · ${role.location}`}
            </p>
            <ul>
              {role.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </div>
        ))}
      </Section>

      {/* EDUCATION */}
      <Section id="education" title="Education & Certifications">
        {education
          .filter((credential) => !credential.hidden)
          .map((credential) => (
            <div key={credential.award} className="education-item">
              <h3>{credential.institution}</h3>
              <p>{credential.award}</p>
              {credential.detail?.map((line) => <p key={line}>{line}</p>)}
              {credential.year && <p>{credential.year}</p>}
            </div>
          ))}

        <div className="education-item">
          <h4>Languages</h4>
          {languages.map((language) => (
            <p key={language.name} className="small-text">
              {language.name}, {language.level}
            </p>
          ))}
        </div>
      </Section>

      {/* CONTACT */}
      <Section id="contact" title="Get in Touch">
        <p className="contact-intro">
          Whether you have a half-formed idea about automating something in your business, a
          specific project you want to scope, or you just want to talk through what is
          possible, I am happy to have that conversation.
        </p>
        <a href={`mailto:${site.email}`} className="consulting-cta">
          {site.email}
        </a>
      </Section>

      {caseStudyOpen && <CaseStudyModal onClose={() => setCaseStudyOpen(false)} />}
    </>
  );
}

export default Home;
