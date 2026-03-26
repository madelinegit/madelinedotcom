import { useEffect } from "react";
import "../styles/modal.css";

interface Props {
  onClose: () => void;
}

function CaseStudyModal({ onClose }: Props) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <article className="modal-article" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close">
          ✕
        </button>

        <p className="modal-eyebrow">Case Study · Operations & Technology</p>

        <h1 className="modal-title">
          From Missed Stops to Optimized Routes
        </h1>
        <p className="modal-subtitle">
          How custom dispatch software transformed operations across 415
          properties in North Lake Tahoe — and why the off-the-shelf tools
          couldn't get there first.
        </p>

        <div className="modal-rule" />

        <div className="modal-stats">
          <div className="modal-stat">
            <span className="modal-stat-num">415</span>
            <span className="modal-stat-label">Managed Properties</span>
          </div>
          <div className="modal-stat">
            <span className="modal-stat-num">~700 mi²</span>
            <span className="modal-stat-label">Service Territory</span>
          </div>
          <div className="modal-stat">
            <span className="modal-stat-num">30+ mi</span>
            <span className="modal-stat-label">Kings Beach to Incline Village</span>
          </div>
          <div className="modal-stat">
            <span className="modal-stat-num">10+</span>
            <span className="modal-stat-label">Employees Dispatched Daily</span>
          </div>
        </div>

        <h2 className="modal-h2">415 Properties. 700 Square Miles. One Team.</h2>
        <p className="modal-body">
          Most people picture Lake Tahoe as a single postcard — the deep blue
          water, the Sierra Nevada ridge behind it. What they don't picture is
          the operational reality of managing a vacation rental portfolio spread
          across it. North Lake Tahoe is not a compact neighborhood. It's a
          sprawling, mountainous region where the shoreline alone runs more than
          30 miles, where elevation changes by thousands of feet within a few
          miles, and where winter storms can close roads and reroute a full
          day's schedule in under an hour.
        </p>
        <p className="modal-body">
          Tahoe Getaways manages over 415 vacation rental properties across this
          territory — from Kings Beach and Carnelian Bay on the California side
          to Incline Village and Crystal Bay across the Nevada line. The
          difference between an optimized day and an unoptimized one could mean
          the difference between finishing by 4pm or running into a 7pm
          check-in window.
        </p>
        <p className="modal-body">
          For a team of more than ten employees dispatched daily across this
          geography, the stakes of poor routing weren't abstract. They were gas
          burned, hours wasted, guests checked in late, and issues — hot tub
          malfunctions, missing linens, broken fixtures — that fell through the
          cracks because nobody had a clear system for making sure the right
          person arrived at the right property at the right time.
        </p>

        <blockquote className="modal-quote">
          "The platforms we used were excellent at tracking what needed to
          happen. Neither could tell you the order, the route, or the right
          time to get it done."
        </blockquote>

        <h2 className="modal-h2">No System Meant Everything Was Someone's Memory</h2>
        <p className="modal-body">
          When I took on logistics coordination, routing and scheduling were
          handled informally. Tasks were assigned based on proximity estimates
          and institutional knowledge — not actual drive time data, not
          optimized sequencing, not a consistent framework for catching issues
          before they became guest-facing problems.
        </p>
        <p className="modal-body">
          The consequences were predictable in hindsight. Technicians and
          cleaners would drive past each other on the same mountain road heading
          to adjacent properties because their schedules had been built
          independently. A hot tub flagged for service Monday might not get
          addressed until Thursday because there was no system keeping it
          visible. Check-in prep would occasionally arrive late not because
          anyone was slow, but because the stop order hadn't been designed
          around the check-in times at each property.
        </p>
        <p className="modal-body">
          Neither of the two platforms the company relied on — Breezeway and
          Streamline — offered anything close to what was needed. Both had
          their strengths. Neither had route optimization. Good at tracking
          what needed to happen. Couldn't tell you in what order or when.
        </p>

        <h2 className="modal-h2">Phase One: Process Before Software</h2>
        <p className="modal-body">
          Before writing a single line of code, I recognized that automation
          applied to a broken process produces broken results faster. The first
          phase was entirely human: documenting, standardizing, and enforcing
          the operational SOPs that would give software something meaningful to
          work with.
        </p>
        <p className="modal-body">
          This meant establishing clear protocols for how issues were logged,
          categorized, and escalated. A hot tub fault got a specific task type,
          a specific priority flag, and a specific timeline — not a free-text
          note buried in a comment thread. It meant building task templates in
          Breezeway that ensured every turnover, inspection, and maintenance
          visit had a consistent checklist. And it meant creating the feedback
          loops that would surface problems before they cascaded into guest
          complaints.
        </p>
        <p className="modal-body">
          This phase was unglamorous. It required convincing a team that had
          done things a certain way for years that a more structured approach
          would make their jobs easier, not harder. The SOPs that came out of
          it became the operational skeleton that the software would later
          automate. Without them, the tool would have had nothing reliable to
          optimize.
        </p>

        <h2 className="modal-h2">Phase Two: Building What the Market Couldn't Provide</h2>
        <p className="modal-body">
          Once the operational foundation was solid, I built the tool the
          existing software market simply didn't offer: a custom dispatch and
          route optimization platform purpose-built for our portfolio.
        </p>
        <p className="modal-body">
          The platform is a full-stack web application built on Python and
          Flask, integrating Google OR-Tools — a constraint-solving library
          used in enterprise logistics — to calculate genuinely optimal stop
          sequences. Drive times are pulled from a real routing engine so the
          schedule reflects actual mountain road conditions, not straight-line
          estimates. Routes are visualized on an interactive map so dispatchers
          can see what they're assigning before they assign it.
        </p>
        <ul className="modal-list">
          <li>
            Route optimization that sequences stops by drive time and task
            window, reducing daily mileage and idle time
          </li>
          <li>
            Priority check-in detection — early or high-priority arrivals are
            automatically surfaced and protected in the schedule
          </li>
          <li>
            User-scoped route histories so each team member's assignments are
            visible and auditable
          </li>
          <li>
            Shareable route links with optional property notes, replacing phone
            calls and texted screenshots
          </li>
          <li>
            A staffing analysis module that breaks down hours by task type,
            making labor decisions data-driven
          </li>
        </ul>

        <h2 className="modal-h2">
          Less Gas. Less Guesswork. Fewer Things Falling Through the Cracks.
        </h2>
        <p className="modal-body">
          The operational improvement was felt before it was measured.
          Dispatchers stopped fielding mid-morning calls from cleaners asking
          which property to go to next. Issues flagged in the morning made it
          onto that day's route. Check-in prep arrivals became predictable. The
          staffing analysis module gave management actual data — by task type,
          by property cluster, by week — that had previously existed only as
          rough impressions.
        </p>
        <p className="modal-body">
          The tool also changed the dynamic around issue resolution. Because
          tasks were now structured, flagged by priority, and assigned with
          accountability, the question was no longer whether something would
          get done — it was when, by whom, and whether it had been confirmed
          complete. That shift, from informal to auditable, was as valuable as
          any specific efficiency number.
        </p>

        <div className="modal-rule" />

        <p className="modal-byline">
          Madeline Gall · Logistics Coordinator & Developer · Truckee, CA
        </p>
      </article>
    </div>
  );
}

export default CaseStudyModal;
