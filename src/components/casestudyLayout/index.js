import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import "./casestudyLayout.scss";

const CasestudyLayout = (props) => {
  return (
    <section className="casestudy-layout">
      <div className="casestudy-layout__container">
        <div className="casestudy-layout__image-block">
          <div className="casestudy-layout__image">
            <img
              src={props.data.image.casestudy1Image}
              alt={props.data.imageAlt}
            />
            {/* <StaticImage className="" src={props.data.image.casestudy1Image} height={200} alt="" /> */}
          </div>
        </div>
        <div className="casestudy-layout__text-block">
          <h2 className="h5">Case Study</h2>
          <h3 className="h1 casestudy-layout__title">{props.data.title}</h3>
          <p className="casestudy-layout__description">
            {props.data.description}
          </p>
          <div className="button-wrap casestudy-layout__button-wrap">
            <button className="button">View Case Study</button>
            <button className="button">View All</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CasestudyLayout;
