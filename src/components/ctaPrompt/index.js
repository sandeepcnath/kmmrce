import React from "react";
import "./ctaPrompt.scss";

const CtaPrompt = (props) => {
  return (
    <section className="section-default cta-prompt">
      <div className="container cta-prompt__container">
        <h2 className="h1 cta-prompt__title">{props.data.title}</h2>
        <button className="button button_primary">{props.data.ctaText}</button>
      </div>
    </section>
  );
};

export default CtaPrompt;
