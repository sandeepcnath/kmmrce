import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import Layout from "../components/layout";
import Seo from "../components/seo";
import Header from "../components/header";
import PlatformLayout from "../components/platformLayout";
import FeatureLayout from "../components/featureLayout";
import CasestudyLayout from "../components/casestudyLayout";
import TestimonyLayout from "../components/testimonyLayout";
import CenteredContentLayout from "../components/centeredContentLayout";
import CtaPrompt from "../components/ctaPrompt";
// import "../styles/homepage.scss";

import mainImage from "../images/banner-asterix.svg";
import feature1Image from "../images/Group-5056.png";
import casestudy1Image from "../images/1282854_ou_2000.jpg";
import testimony1Image from "../images/6UxtLv.tif.png";
import centeredContentBackground from "../images/blobs-pattern.svg";

// markup
const IndexPage = () => {
  const feature1 = {
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do",
    image: { feature1Image },
    imageAlt: "Application UI for payment, profile, rating, etc.",
    subsections: [
      {
        title: "Development Features",
        description:
          "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      },
      {
        title: "Design & Layout",
        description:
          "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        featureList: [
          "Duis aute irure",
          "dolor in reprehenderit",
          "in voluptate velit esse cillum",
          "dolor in reprehenderit",
        ],
      },
    ],
  };

  const casestudy1 = {
    title: "Created with KMMRCE: Watch 1010",
    description:
      "Disrupting and democratizing healthcare. Butterfly’s ambitious, rapid global scale-out is only possible with the support of Saleor. Their incredible journey has already taken the company from a disruptive startup to Apple Design Awards Winner 2019",
    image: { casestudy1Image },
    imageAlt: "Model wearing glasses with Summer Wanderlust text overlay",
  };

  const testimony1 = {
    testimony:
      "KMMRCE is an ideal solution for anyone looking to build a bespoke e-commerce website. A great foundation has been designed not only to get you started on a fully-fledged storefront with minimal effort.",
    from: "Tyler Hildebrand, Head of Engineering at Patch",
    image: { testimony1Image },
    imageAlt: "A simple chair",
  };

  const centeredContent1 = {
    title: "Super Merchants",
    subtitle: "Multisite, made easy.",
    description:
      "Sed magna enim, bibendum a quam eu, commodo consectetur quam. Morbi pellentesque eu dolor luctus sagittis. Praesent commodo velit eget urna mollis dignissim. Nunc lobortis, augue non pulvinar consequat, enim massa pharetra neque.",
    backgroundImage: { centeredContentBackground },
    backgroundColor: "#3F36A0",
    ctaText: "Explore Super Merchants",
  };

  const ctaPrompt1 = {
    title: "Ready to grow your business?",
    ctaText: "Request Demo",
  };

  return (
    <Layout>
      <Seo title="Home" />
      <Header
        bannerTitle="<span>KMMRCE</span> is an enterprise level digital platform that provides a turnkey solution to online retailing."
        ctaText="Request Demo"
        mainImage={mainImage}
        mainImageAlt="decorative"
        secondaryImageAlt="sonos speaker"
      />
      <main>
        <PlatformLayout />
        <FeatureLayout data={feature1} />
        <TestimonyLayout data={testimony1} />
        <CasestudyLayout data={casestudy1} />
        <CenteredContentLayout data={centeredContent1} />
        <CtaPrompt data={ctaPrompt1} />
      </main>
    </Layout>
  );
};

export default IndexPage;
