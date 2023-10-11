import React from "react";
import SocialLinks from "../_components/about/SocialLinks";
import Bio from "../_components/about/Bio";
import Education from "../_components/about/Education";
import TopText from "../_components/about/TopText";
import PageHead from "../_components/layout/PageHead";
import Others from "../_components/about/Others";

const AboutPage = () => {
  return (
    <>
      <PageHead title="About" />
      <div className="flex flex-col justify-center items-center gap-12 md:gap-16">
        <TopText />
        <Bio />
        <SocialLinks />
        <Education />
        <Others />
      </div>
    </>
  );
};

export default AboutPage;