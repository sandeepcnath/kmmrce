import React from "react";
import "./centeredContentLayout.scss";

const CenteredContentLayout = (props) => {
  return (
    <section
      className="section-default centered-content-layout"
      style={{
        background: `${props.data.backgroundColor} url(${props.data.backgroundImage.centeredContentBackground}) no-repeat center/cover`,
      }}
    >
      <div className="container centered-content-layout__container">
        <h2 className="h5 centered-content-layout__title">
          {props.data.title}
        </h2>
        <h3 className="h1 centered-content-layout__subtitle">
          {props.data.subtitle}
        </h3>
        <p className="centered-content-layout__description">
          {props.data.description}
        </p>
        <button className="button button_inverse-transparent">
          {props.data.ctaText}
        </button>
      </div>
    </section>
  );
};

export default CenteredContentLayout;
