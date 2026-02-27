import Hero from "../components/Hero";
import Section from "../components/Section";
// import Banner from "../assets/brand/mg-horizontal.svg";

function Home() {
  return (
    <>
      
      <Hero />

        <Section id="automation" title="Operations Automation">

  <div className="automation-item">
    <h4>Route Optimization Engine</h4>
    <ul className="automation-list">
      <li><strong>Problem:</strong> Redundant mileage and inefficient route ordering across field teams.</li>
      <li><strong>Solution:</strong> Built a data-driven routing engine sequencing stops using structured address modeling and distance calculations.</li>
      <li><strong>Impact:</strong> Reduced drive-time inefficiencies and improved daily route clarity.</li>
    </ul>
    <p className="stack"><strong>Stack:</strong> Python, Distance Algorithms, Structured Data Modeling</p>
  </div>

  <div className="automation-item">
    <h4>Secure Scheduling & Mapping Platform</h4>
    <ul className="automation-list">
      <li><strong>Problem:</strong> Manual scheduling lacked visibility into timing constraints and property-specific notes.</li>
      <li><strong>Solution:</strong> Developed a secure, password-protected scheduling platform integrating Google Maps APIs and constraint-based logic.</li>
      <li>Implemented group-based property tagging and automated note-flagging for house clusters.</li>
      <li><strong>Impact:</strong> Increased schedule reliability and reduced coordination overhead.</li>
    </ul>
    <p className="stack"><strong>Stack:</strong> Python, Google Maps API, REST Integrations, Authentication Logic, Scheduling Algorithms</p>
  </div>

  <div className="automation-item">
    <h4>Staffing Analytics & Forecasting Engine</h4>
    <ul className="automation-list">
      <li><strong>Problem:</strong> Staffing decisions were reactive and lacked structured visibility.</li>
      <li><strong>Solution:</strong> Built a CSV ingestion and analytics pipeline evaluating service volume and workload distribution.</li>
      <li>Automates PDF report generation with visual, data-centric conclusions for leadership review.</li>
      <li><strong>Impact:</strong> Enabled proactive staffing adjustments and improved labor forecasting.</li>
    </ul>
    <p className="stack"><strong>Stack:</strong> Python, Pandas, Data Modeling, ReportLab, Workflow Analytics</p>
  </div>

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

      <div className="experience-item">
        <h3>Technical Product & Automation Lead</h3>
        <p><strong>Tahoe Getaways</strong> · Full-time · May 2024 – Present</p>
        <ul>
          <li>Architect and deliver internal automation systems (Python, TypeScript, SQL) replacing manual operational workflows</li>
          <li>Design structured data pipelines and executive dashboards supporting labor forecasting and cost optimization</li>
          <li>Translate operational constraints into technical roadmaps, leading multi-phase system builds from scope through rollout</li>
          <li>Oversee cloud-hosted deployments and environment configuration, managing Git-based version control and production stability</li>
          <li>Drive system-level automation initiatives increasing operational visibility and reducing manual coordination</li>
        </ul>
      </div>

      <div className="experience-item">
        <h3>Founder & Systems Developer</h3>
        <p><strong>EcoDev LLC</strong> · Freelance · Aug 2023 – Nov 2024</p>
        <ul>
          <li>Designed and deployed full-stack applications using Python (Flask) and MySQL with structured relational data modeling</li>
          <li>Implemented secure authentication workflows and scalable backend validation logic</li>
          <li>Managed AWS EC2 infrastructure, routing, uptime, and cost optimization</li>
          <li>Established version-controlled, container-ready development practices ensuring deployment consistency</li>
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
        <h3>Healthcare Data Specialist</h3>
        <p><strong>Embrace Pet Insurance</strong> · Aug 2019 – Jul 2023</p>
        <ul>
          <li>Managed structured enterprise datasets within regulated financial systems</li>
          <li>Queried and validated datasets using SQL to ensure reconciliation accuracy and reporting integrity</li>
          <li>Leveraged Tableau to analyze performance metrics and identify workflow inconsistencies</li>
          <li>Maintained CRM data governance within Salesforce environments</li>
          <li>Implemented process controls improving data reliability and SLA performance</li>
        </ul>
      </div>

      <div className="experience-item">
        <h3>Commercial & International Operations Leadership</h3>
        <p>2015 – 2023</p>
        <ul>
          <li>Directed high-volume operational workflows across international event and commercial environments</li>
          <li>Coordinated vendor logistics and cross-functional execution under strict production timelines</li>
          <li>Implemented structured execution frameworks reducing operational error and protecting revenue continuity</li>
          <li>Operated bilingually (Spanish C1) within international education and commercial environments</li>
        </ul>
      </div>

      </Section>
        
      <Section id="education" title="Education">

        <div className="education-item">
          <h3>Ohio University</h3>
          <p>Bachelor of Science — Anthropology</p>
          <p>Associate of Science — Information Technology</p>
          <p>Teaching English as a Foreign Language (TEFL) Certificate</p>
          <p>2011 – 2015</p>
        </div>

        <div className="education-item">
          <h3>Coding Dojo</h3>
          <p>Software Development Bootcamp — Computer Software Engineering</p>
          <p>Full-Stack Python, MySQL, JavaScript, React, Version Control</p>
          <p>Nov 2022 – Aug 2023</p>
        </div>

        <div className="education-item">
          <h3>Project Management Institute (PMI)</h3>
          <p>Certified Associate in Project Management (CAPM®)</p>
          <p>2022</p>
        </div>

        <div className="education-item">
          <h3>Languages</h3>
          <p>Spanish — C1 (Advanced / Professional Working Proficiency)</p>
          <p>2025</p>
        </div>

</Section>
    </>
  );
}

export default Home;