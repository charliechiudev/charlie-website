import React from "react";
import { Element } from "react-scroll";

import PageWrapper from "../components/PageWrapper";
import Hero from "../sections/charlie-home/Hero";
import Works from "../sections/charlie-home/Works";
import Contact from "../sections/charlie-home/Contact";

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
