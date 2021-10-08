import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import "./platformLayout.scss";

const PlatformLayout = (props) => {
  return (
    <section className="section-default home-platform">
      <div className="container">
        <div className="home-platform__text-wrap">
          <h2 className="h5">Platform</h2>
          <p className="h1 home-platform__description">
            Sell digital or physical inventory, with configurable or simple
            attributes, in a way that suits your business.
          </p>
          <button className="button button_primary">
            Explore the Platform
          </button>
        </div>
        <div className="home-platform__grid">
          <div>
            <StaticImage
              className="home-platform__grid-img-1"
              src="../../images/Group 4508.png"
              height={200}
              alt=""
            />
          </div>
          <div>
            <StaticImage
              className="home-platform__grid-img-1"
              src="../../images/Group 3860.png"
              height={180}
              alt=""
            />
          </div>
          <div>
            <StaticImage
              className="home-platform__grid-img-1"
              src="../../images/Group 3956.png"
              height={200}
              alt=""
            />
          </div>
          <div>
            <StaticImage
              className="home-platform__grid-img-1"
              src="../../images/Group 3864.png"
              height={200}
              alt=""
            />
            <StaticImage
              className="home-platform__grid-img-1"
              src="../../images/Group 3867.png"
              alt=""
            />
          </div>
          <div />
          <div>
            <div />
            <div>
              <StaticImage
                className="home-platform__grid-img-1"
                src="../../images/Group 4507.png"
                height={150}
                alt=""
              />
            </div>
            <div>
              <StaticImage
                className="home-platform__grid-img-1"
                src="../../images/Group 3866.png"
                height={100}
                alt=""
              />
            </div>
            <div />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlatformLayout;
