import Hero from "../components/Hero";
import Section from "../components/Section";

function Home() {
  return (
    <>
      <Hero />

      <Section id="automation" title="Operations Automation">
        <p>Projects will go here.</p>
      </Section>

      <Section id="capabilities" title="Systems & Capabilities">
        <p>Capabilities content goes here.</p>
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