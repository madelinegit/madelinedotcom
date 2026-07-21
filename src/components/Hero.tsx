import { Fragment } from "react";
import { site } from "../data/site";
import "../styles/hero.css";

function Hero() {
  return (
    <section className="hero">
      <p className="hero-eyebrow">{site.name}</p>
      <h1>
        {site.hero.headline.map((line, index) => (
          <Fragment key={line}>
            {index > 0 && <br className="hero-br" />}
            {line}
          </Fragment>
        ))}
      </h1>
      <p className="hero-sub">{site.hero.sub}</p>
      <p className="hero-tags">
        {site.hero.tags.map((tag) => (
          <span key={tag} className="hero-tag">
            {tag}
          </span>
        ))}
      </p>
    </section>
  );
}

export default Hero;
