import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import React, { useEffect } from "react";
import PropTypes from "prop-types";
import "./header.scss";

const Header = ({ mainImageAlt, secondaryImageAlt, ctaText }) => {
  useEffect(() => {
    const scrollRotate = (e) => {
      let image = document.getElementById("mainImage");
      image.style.transform = "rotate(" + window.pageYOffset / 3 + "deg)";
    };
    window.addEventListener("scroll", scrollRotate);

    return () => window.removeEventListener("scroll", scrollRotate);
  });

  return (
    <header className="header">
      <div className="container header__container">
        <div className="header__image-block">
          <div className="header__image" id="mainImage">
            <StaticImage
              src="../../images/banner-asterix.svg"
              alt={mainImageAlt}
            />
          </div>
          <div className="header__image_secondary">
            <StaticImage
              src="../../images/sonos-speaker.png"
              alt={secondaryImageAlt}
            />
          </div>
        </div>
        <div className="header__text-block">
          <div className="header__text-block-wrap">
            <h1 className="header__title">
              <span className="header__title-highlight">KMMRCE</span> is an
              enterprise level digital platform that provides a turnkey
              solution.
            </h1>
            <button className="button button_primary">{ctaText}</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
