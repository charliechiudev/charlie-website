import React from "react";
import { Element } from "react-scroll";

import PageWrapper from "../components/PageWrapper";
import Hero from "../sections/charlie-about/Hero";
import Zero1 from "../sections/charlie-about/Zero1";
import Contact from "../sections/charlie-about/Contact";

const IndexPage = () => {
  return (
    <>
      <PageWrapper>
        <Hero />
        <Zero1 />
        <Contact />
      </PageWrapper>
    </>
  );
};
export default IndexPage;
