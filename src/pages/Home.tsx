import Hero from "../components/Hero";
import Section from "../components/Section";
import Banner from "../assets/brand/mg-horizontal.svg";

function Home() {
  return (
    <>
      
            <div style={{
        display: "flex",
        justifyContent: "center",
        padding: "60px 20px 20px 20px"
      }}>
        <img
          src={Banner}
          alt="Madeline Gall"
          style={{
            maxWidth: "900px",
            width: "90%",
            height: "auto"
          }}
        />
      </div>

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