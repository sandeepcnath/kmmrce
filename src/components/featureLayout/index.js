import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import "./featureLayout.scss";

const FeatureLayout = (props) => {
  return (
    <section className="section-default feature-layout">
      <div className="container feature-layout__container">
        <div className="feature-layout__image-block">
          <div className="feature-layout__image">
            <img
              src={props.data.image.feature1Image}
              alt={props.data.imageAlt}
            />
            {/* <StaticImage className="" src={props.data.image.feature1Image} height={200} alt="" /> */}
          </div>
        </div>
        <div className="feature-layout__text-block">
          <h2 className="h1 feature-layout__title">{props.data.title}</h2>
          {props.data.subsections.map(({ title, description, featureList }) => {
            return (
              <div className="feature-layout__subsection" key={title}>
                <h5 className="feature-layout__subsection-title">{title}</h5>
                <p className="feature-layout__subsection-description">
                  {description}
                </p>
                {featureList && (
                  <ul className="checklist">
                    {featureList.map((feature) => {
                      return (
                        <li className="checklist__li" key={feature}>
                          <p>{feature}</p>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeatureLayout;
