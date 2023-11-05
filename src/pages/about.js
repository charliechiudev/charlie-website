import React from "react";
import { Element } from "react-scroll";

import PageWrapper from "../components/PageWrapper";
import Hero from "../sections/charlie-about/Hero";
import Zero1 from "../sections/charlie-about/Zero1";
import Contact from "../sections/charlie-about/Contact";
import Zero2 from "../sections/charlie-about/Zero2";
import Zero3 from "../sections/charlie-about/Zero3";
import Zero4 from "../sections/charlie-about/Zero4";
import Slideshow from "../sections/charlie-about/Slideshow";

const IndexPage = () => {
  return (
    <>
      <PageWrapper>
        <Hero />
        <Zero1 />
        <Zero2 />
        {/* <Zero3 /> */}
        <Zero4 />
        <Slideshow />
        <Contact />
      </PageWrapper>
    </>
  );
};
export default IndexPage;
