import "../styles/hero.css";

function Hero() {
  return (
    <section className="hero">
      <p className="hero-eyebrow">Madeline Gall</p>
      <h1>
        I build things that make
        <br className="hero-br" /> operations work smoothly.
      </h1>
      <p className="hero-sub">
        I'm a developer and logistics coordinator who got tired of waiting
        for the right software to exist — so I started building it. Custom
        tools, AI integrations, and systems that hold up in the real world.
      </p>
      <p className="hero-tags">
        SOFTWARE ENGINEERING&nbsp;&nbsp;·&nbsp;&nbsp;OPERATIONS
        AUTOMATION&nbsp;&nbsp;·&nbsp;&nbsp;AI CONSULTING
      </p>
    </section>
  );
}

export default Hero;
