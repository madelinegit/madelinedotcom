import Hero from "../components/Hero";
import Section from "../components/Section";
// import Banner from "../assets/brand/mg-horizontal.svg";

function Home() {
  return (
    <>
      
      <Hero />

      <Section id="automation" title="Operations Automation">
        <p>Projects will go here.</p>
      </Section>

      <Section id="systems" title="Systems">
        <ul>
          <li>
            <strong>Operational Systems Architecture:</strong> Design and implement internal workflow automation tools replacing manual processes. Structure operational data models for scheduling, inspections, staffing, routing, and reporting.
          </li>

          <li>
            <strong>Full-Stack Development:</strong> Python (Flask), React, TypeScript, JavaScript, SQL. Build internal dashboards, component-driven interfaces, and modular system logic.
          </li>

          <li>
            <strong>Database & Data Modeling:</strong> MySQL, SQLite. Design relational schemas, write optimized queries, manage structured data pipelines, and transform operational exports into actionable systems.
          </li>

          <li>
            <strong>API & Systems Integration:</strong> REST API integrations (Google Maps, SaaS platforms), authentication handling, environment configuration, and external service orchestration.
          </li>

          <li>
            <strong>Cloud & Deployment:</strong> AWS (EC2, S3, IAM), Git-based version control, Vercel deployments, environment management, production debugging.
          </li>

          <li>
            <strong>Workflow & Delivery:</strong> Agile sprint coordination, technical requirement scoping, documentation-driven builds, cross-functional systems translation.
          </li>
        </ul>
      </Section>


      <Section id="capabilities" title="Capabilities">
        <ul>
          <li>
            <strong>Process Automation & Efficiency:</strong> Replace manual workflows with structured internal tools that reduce administrative overhead and improve operational clarity.
          </li>

          <li>
            <strong>Operational Data Strategy:</strong> Transform raw operational data into forecasting dashboards and cost models that support executive decision-making.
          </li>

          <li>
            <strong>Technology Implementation:</strong> Lead development and deployment of scalable internal systems while integrating third-party platforms to streamline operations.
          </li>

          <li>
            <strong>Systems Leadership:</strong> Translate operational challenges into structured technical roadmaps and oversee multi-phase system builds from scope through rollout.
          </li>

          <li>
            <strong>Cross-Functional Execution:</strong> Coordinate between operations, field teams, and stakeholders to ensure systems are usable, documented, and scalable.
          </li>
        </ul>
      </Section>

      <Section id="experience" title="Experience">
        <p>Experience section goes here.</p>
      </Section>

      <Section id="education" title="Education">
        <p>Education section goes here.</p>
      </Section>
    </>
  );
}

export default Home;