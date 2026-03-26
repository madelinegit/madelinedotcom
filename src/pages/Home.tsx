import { useState } from "react";
import Hero from "../components/Hero";
import Section from "../components/Section";
import CaseStudyModal from "../components/CaseStudyModal";
import "../styles/consulting.css";

function Home() {
  const [showCaseStudy, setShowCaseStudy] = useState(false);

  return (
    <>
      <Hero />

      {/* PROJECTS */}
      <Section id="projects" title="Recent Projects">
        <div className="automation-item">
          <h3>Dispatch &amp; Route Optimization Platform</h3>
          <ul className="automation-list">
            <li>
              <strong>The problem:</strong> Scheduling 10+ field employees
              across 415 properties in the North Lake Tahoe basin — a
              700-square-mile mountain territory stretching from Kings Beach to
              Incline Village — was done manually, with no visibility into drive
              time, task priority, or property clustering. Things got missed.
            </li>
            <li>
              <strong>The gap:</strong> The two industry platforms we used
              (Breezeway and Streamline) tracked what needed to happen well.
              Neither could tell you the optimal order, the real drive time, or
              which properties to cluster on the same run.
            </li>
            <li>
              <strong>What I built:</strong> A full-stack dispatch platform with
              constraint-based route optimization (OR-Tools), real drive time
              calculations, priority check-in detection, user-scoped schedule
              history, and shareable route links — deployed and in active daily
              use.
            </li>
            <li>
              <strong>Impact:</strong> Eliminated ~20 hours/week of manual
              coordination, reduced unnecessary mileage across the team, and
              shifted issue resolution from informal to fully auditable.
            </li>
          </ul>
          <p className="stack">
            <strong>Stack:</strong> Python, Flask, OR-Tools, OSRM, Leaflet, SQLite, Railway
          </p>
          <button
            className="case-study-trigger"
            onClick={() => setShowCaseStudy(true)}
          >
            Read the full case study →
          </button>
          
           <a href="https://northlakedispatch.com"
            target="_blank"
            rel="noreferrer"
            className="dispatch-link"
          >
            northlakedispatch.com ↗
          </a>
           </div>

        <div className="automation-item">
          <h3>Staffing Analytics &amp; Forecasting Tool</h3>
          <ul className="automation-list">
            <li>
              <strong>Problem:</strong> Staffing decisions were reactive and
              lacked structured visibility across high-volume service operations.
            </li>
            <li>
              <strong>Solution:</strong> Built a CSV ingestion and analytics
              pipeline evaluating service volume, workload distribution, and
              labor allocation patterns.
            </li>
            <li>
              Automates PDF report generation with visual, data-centric
              conclusions for leadership review.
            </li>
            <li>
              <strong>Impact:</strong> Eliminated ~80 hours/week of manual
              staffing analysis and enabled proactive labor forecasting.
            </li>
          </ul>
          <p className="stack">
            <strong>Stack:</strong> Python, Pandas, Data Modeling, ReportLab, Streamlit
          </p>
        </div>
      </Section>

      {/* CONSULTING */}
      <Section id="consulting" title="AI Consulting">
        <p className="consulting-intro">
          I help small businesses figure out what AI can actually do for their
          operations — then build it. Not strategy decks. Not proofs of concept
          that live in a slide. Working software that solves a real problem.
        </p>
        <div className="consulting-grid">
          <div className="consulting-card">
            <span className="consulting-card-icon">🧭</span>
            <h3>AI Strategy &amp; Scoping</h3>
            <p>
              Not sure where to start? I'll map your operation, identify the
              highest-leverage automation opportunities, and give you a clear
              roadmap — and honest opinions about what isn't worth building.
            </p>
          </div>
          <div className="consulting-card">
            <span className="consulting-card-icon">🛠</span>
            <h3>Custom Tool Development</h3>
            <p>
              Internal dashboards, scheduling tools, AI-powered workflows,
              reporting automation. If you're running your business out of
              spreadsheets and group texts, there's almost certainly a better
              way.
            </p>
          </div>
          <div className="consulting-card">
            <span className="consulting-card-icon">🤖</span>
            <h3>LLM &amp; Automation Integration</h3>
            <p>
              Connect AI to what you already have. Smart notifications,
              automated summaries, data extraction, decision support. Practical
              use cases built on real APIs — not demos.
            </p>
          </div>
        </div>
        <a href="#contact" className="consulting-cta">
          Let's talk about your operation →
        </a>
      </Section>

      {/* CAPABILITIES */}
      <Section id="capabilities" title="Capabilities">
        <div className="capabilities-grid">
          <div className="capability-card">
            <span className="capability-icon">⚙️</span>
            <h3>Operational System Design</h3>
            <p>Architect automation frameworks for high-volume service operations — the kind where a missed stop has real consequences.</p>
          </div>
          <div className="capability-card">
            <span className="capability-icon">🔁</span>
            <h3>Process Optimization</h3>
            <p>Replace manual coordination with structured, scalable internal platforms. I start with the people problem, then build the software.</p>
          </div>
          <div className="capability-card">
            <span className="capability-icon">📊</span>
            <h3>Data-Driven Planning</h3>
            <p>Translate operational data into forecasting models and decision-support systems that actual teams use day-to-day.</p>
          </div>
          <div className="capability-card">
            <span className="capability-icon">🚀</span>
            <h3>Platform Implementation</h3>
            <p>Design and deploy secure internal systems integrating third-party services — built to last, not just to demo.</p>
          </div>
          <div className="capability-card">
            <span className="capability-icon">🎯</span>
            <h3>End-to-End Delivery</h3>
            <p>Technical scoping through rollout and adoption. I stay until the thing actually works.</p>
          </div>
        </div>
      </Section>

      {/* TECH STACK */}
      <Section id="systems" title="Tech Stack">
        <ul>
          <li><strong>Frontend:</strong> React, TypeScript</li>
          <li><strong>Backend:</strong> Python (Flask), REST API Architecture</li>
          <li><strong>Databases:</strong> MySQL, SQLite, PostgreSQL</li>
          <li><strong>Data &amp; Reporting:</strong> Pandas, structured data pipelines, PDF generation (ReportLab)</li>
          <li><strong>Cloud &amp; Infrastructure:</strong> AWS (EC2, S3, IAM), Linux server configuration, Nginx fundamentals</li>
          <li><strong>Containerization &amp; CI/CD:</strong> Docker, GitHub Actions</li>
          <li><strong>Integrations &amp; APIs:</strong> REST APIs, Google Maps API, third-party SaaS integrations</li>
          <li><strong>Performance &amp; Optimization:</strong> Caching strategies (Redis fundamentals), production monitoring &amp; debugging</li>
          <li><strong>Dev Workflow:</strong> Git version control, environment configuration, structured deployment practices</li>
        </ul>
      </Section>

      {/* EXPERIENCE */}
      <Section id="experience" title="Experience">
        <div className="experience-item">
          <h3>Technical Product &amp; Automation Lead</h3>
          <p><strong>Tahoe Getaways</strong> · Full-time · May 2024 – Present</p>
          <ul>
            <li>Architect and deliver internal automation systems (Python, SQL, Deployment) replacing manual operational workflows</li>
            <li>Design data analysis tools supporting labor forecasting and cost optimization</li>
            <li>Drive system-level automation initiatives increasing operational visibility and reducing manual coordination</li>
            <li>Translate operational constraints into solution-focused roadmaps to support rapid growth</li>
            <li>Oversee cloud-hosted deployments and environment configuration, managing Git-based version control and production stability</li>
          </ul>
        </div>

        <div className="experience-item">
          <h3>Frontend Systems Engineer (Contract)</h3>
          <p><strong>Nexalure Technologies</strong> · Oct 2023 – May 2024 · Remote</p>
          <ul>
            <li>Architected modular React + TypeScript components within a production-scale application</li>
            <li>Directed state orchestration using Redux to maintain cross-view data integrity</li>
            <li>Integrated REST API pipelines enabling real-time UI synchronization</li>
            <li>Contributed to sprint-based Agile engineering delivery cycles</li>
          </ul>
        </div>

        <div className="experience-item">
          <h3>Custom Web Developer</h3>
          <p><strong>EcoDev LLC</strong> · Freelance · Aug 2023 – Nov 2024</p>
          <ul>
            <li>Designed and deployed full-stack applications using Python (Flask) and MySQL with structured relational data modeling</li>
            <li>Implemented secure authentication workflows and scalable backend validation logic</li>
            <li>Managed AWS EC2 infrastructure, routing, uptime, and cost optimization</li>
            <li>Established version-controlled, container-ready development practices ensuring deployment consistency</li>
          </ul>
        </div>

        <div className="experience-item">
          <h3>Healthcare Data Specialist</h3>
          <p><strong>Embrace Pet Insurance</strong> · Aug 2019 – Jul 2023</p>
          <ul>
            <li>Structured datasets within regulated financial systems</li>
            <li>Queried and validated datasets using SQL to verify database integrity</li>
            <li>Maintained CRM data governance within Salesforce environments</li>
            <li>Implemented process controls improving data reliability and SLA performance</li>
          </ul>
        </div>
      </Section>

      {/* EDUCATION */}
      <Section id="education" title="Education">
        <div className="education-item">
          <h3>Coding Dojo</h3>
          <p>Software Development Certification — Computer Software Engineering</p>
          <p>Full-Stack Python, MySQL, JavaScript, React, Version Control</p>
          <p>2022</p>
        </div>

        <div className="education-item">
          <h3>Project Management Institute (PMI)</h3>
          <p>Certified Associate in Project Management (CAPM®)</p>
          <p>2019</p>
        </div>

        <div className="education-item">
          <h3>Ohio University</h3>
          <p>Bachelor of Science — Anthropology</p>
          <p>Associate of Science — Information Technology</p>
          <p>Certificate in Strategic Business Leadership</p>
          <p>2011 – 2014</p>
        </div>

        <br />

        <div className="education-item">
          <h4>Languages</h4>
          <p className="small-text">Spanish — C1 (Advanced / Professional Working Proficiency)</p>
          <p className="small-text">Portuguese — B2 (Intermediate)</p>
        </div>
      </Section>

      {/* CONTACT */}
      <Section id="contact" title="Get in Touch">
        <p style={{ maxWidth: "520px", lineHeight: "1.8", marginBottom: "1.5rem" }}>
          Whether you have a half-formed idea about automating something in
          your operation, a specific project you want to scope, or you just
          want to talk through what's possible — I'm happy to have that
          conversation.
        </p>
        <a href="mailto:mgalldev@gmail.com" className="consulting-cta">
          mgalldev@gmail.com →
        </a>
      </Section>

      {/* MODAL */}
      {showCaseStudy && (
        <CaseStudyModal onClose={() => setShowCaseStudy(false)} />
      )}
    </>
  );
}

export default Home;
