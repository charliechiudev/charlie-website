import React from "react";
import { Element } from "react-scroll";

import PageWrapper from "../components/PageWrapper";
import Hero from "../sections/landing3/Hero";
import Works from "../sections/landing3/Works";
import Contact from "../sections/landing3/Contact";

const IndexPage = () => {
  return (
    <>
      <PageWrapper>
        <Hero />
        <Element name="works">
          <Works />
        </Element>
        <Contact />
      </PageWrapper>
    </>
  );
};
export default IndexPage;
