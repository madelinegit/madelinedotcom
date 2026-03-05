import Hero from "../components/Hero";
import Section from "../components/Section";
// import Banner from "../assets/brand/mg-horizontal.svg";

function Home() {
  return (
    <>
      <br></br>
      <Hero />
      <br/>
      <Section id="capabilities" title="Capabilities">
        <ul>
          <li>
            <strong>Operational System Design:</strong> Architect automation frameworks for high-volume service operations.
          </li>

          <li>
            <strong>Process Optimization:</strong> Replace manual coordination with structured, scalable internal platforms.
          </li>

          <li>
            <strong>Data-Driven Planning:</strong> Translate operational data into forecasting models and decision-support systems.
          </li>

          <li>
            <strong>Platform Implementation:</strong> Design and deploy secure internal systems integrating third-party services.
          </li>

          <li>
            <strong>End-to-End Delivery:</strong> Lead builds from technical scoping through rollout and adoption.
          </li>
        </ul>
      </Section>
      <Section id="systems" title="Tech Stack">
        <ul>
          <li>
            <strong>Frontend:</strong> React, TypeScript
          </li>

          <li>
            <strong>Backend:</strong> Python (Flask), REST API Architecture
          </li>

          <li>
            <strong>Databases:</strong> MySQL, SQLite, PostgreSQL
          </li>

          <li>
            <strong>Data & Reporting:</strong> Pandas, structured data pipelines, PDF generation (ReportLab)
          </li>

          <li>
            <strong>Cloud & Infrastructure:</strong> AWS (EC2, S3, IAM), Linux server configuration, Nginx fundamentals
          </li>

          <li>
            <strong>Containerization & CI/CD:</strong> Docker, GitHub Actions
          </li>

          <li>
            <strong>Integrations & APIs:</strong> REST APIs, Google Maps API, third-party SaaS integrations
          </li>

          <li>
            <strong>Performance & Optimization:</strong> Caching strategies (Redis fundamentals), production monitoring & debugging
          </li>

          <li>
            <strong>Dev Workflow:</strong> Git version control, environment configuration, structured deployment practices
          </li>
        </ul>
      </Section>
      
      <Section id="automation" title="Recent Projects">

        <div className="automation-item">
          <div className="automation-item">
            <h3>Secure Scheduling & Mapping Platform</h3>
            <ul className="automation-list">
              <li><strong>Problem:</strong> Manual scheduling lacked visibility into timing constraints and property-specific notes.</li>
              <li><strong>Solution:</strong> Developed a secure, password-protected scheduling platform integrating Google Maps APIs and constraint-based logic.</li>
              <li>Implemented group-based property tagging and automated note-flagging for house clusters.</li>
              <li><strong>Impact:</strong> Increased schedule reliability, centralized property intelligence, and reduced coordination friction across field operations.</li>
            </ul>
            <p className="stack"><strong>Stack:</strong> Python, Google Maps API, REST Integrations, Authentication Logic, Scheduling Algorithms</p>
          </div>
          <br/>
      
      
        <h3>Route Optimization Engine</h3>
          <ul className="automation-list">
            <li><strong>Problem:</strong> Redundant mileage and inefficient route ordering across 415+ properties and 100–300 weekly operational tasks.</li>
            <li><strong>Solution:</strong> Built a data-driven routing engine sequencing stops using structured address modeling, geospatial logic, and distance calculations.</li>
            <li><strong>Impact:</strong> Eliminated ~20 hours/week of manual coordination across a 10-technician field team, contributing to a 24% operational efficiency improvement.</li>
          </ul>
          <p className="stack"><strong>Stack:</strong> Python, Distance Algorithms, Structured Data Modeling</p>
        </div>

        <br/>

        <div className="automation-item">
          <h3>Staffing Analytics & Forecasting Tool</h3>
          <ul className="automation-list">
            <li><strong>Problem:</strong> Staffing decisions were reactive and lacked structured visibility across high-volume service operations.</li>
            <li><strong>Solution:</strong> Built a CSV ingestion and analytics pipeline evaluating service volume, workload distribution, and labor allocation patterns.</li>
            <li>Automates PDF report generation with visual, data-centric conclusions for leadership review.</li>
            <li><strong>Impact:</strong> Eliminated ~80 hours/week of manual staffing analysis and enabled proactive labor forecasting.</li>
          </ul>
          <p className="stack"><strong>Stack:</strong> Python, Pandas, Data Modeling, ReportLab, Workflow Analytics</p>
        </div>

      </Section>


      <Section id="experience" title="Experience">

      <div className="experience-item">
        <h3>Technical Product & Automation Lead</h3>
        <p><strong>Tahoe Getaways</strong> · Full-time · May 2024 – Present</p>
        <ul>
          <li>Architect and deliver internal automation systems (Python, SQL, Deployment) replacing manual operational workflows</li>
          <li>Design data analysis tools to supporting labor forecasting and cost optimization</li>
          <li>Drive system-level automation initiatives increasing operational visibility and reducing manual coordination</li>
          <li>Translate operational constraints into solution-focused roadmaps to support rapid growth.</li>
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
          {/*
          <li>Leveraged Tableau to analyze performance metrics and identify workflow inconsistencies</li>
          */}
          <li>Maintained CRM data governance within Salesforce environments</li>
          <li>Implemented process controls improving data reliability and SLA performance</li>
        </ul>
      </div>

      </Section>
        
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
          <br/>
        <div className="education-item">
          <h4>Languages</h4>
          <p className="small-text">Spanish — C1 (Advanced / Professional Working Proficiency)</p>
          <p className="small-text"> Portuguese — B2 (Intermediate) </p>
        </div>

    </Section>

    </>
  );
}

export default Home;
