import React from "react";
import "./testimonyLayout.scss";

const TestimonyLayout = (props) => {
  return (
    <section className="section-default testimony-layout">
      <div className="container testimony-layout__container">
        <h2 className="h1 testimony-layout__title">{props.data.testimony}</h2>
        <img src={props.data.image.testimony1Image} alt={props.data.imageAlt} />
        <p>{props.data.from}</p>
      </div>
    </section>
  );
};

export default TestimonyLayout;
