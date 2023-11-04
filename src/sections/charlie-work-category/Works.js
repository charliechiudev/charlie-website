import React, { useState } from "react";
import { Container, Col } from "react-bootstrap";
import Masonry from "react-masonry-component";

import { Section, Box, ListNav } from "../../components/Core";
import WorkCardGql from "../../components/WorkCardGql";

const PortfolioItems = require('../../data/PortfolioItems.json')

const Works = ({ category }) => {
  //const [items, setItems] = useState(PortfolioItems);
  const items = PortfolioItems.filter(i => i.categories.includes(category));

  const masonryOptions = {
    transitionDuration: 1000,
  };

  return (
    <>
      <Section className="position-relative">
        <Container fluid>
          <Masonry
            options={masonryOptions}
            className={"masonry-grid row"} // default ''
          >
            {items.map((item, index) => (
              <Col lg="4" md="6" sm="6" key={`work-grid-${index}`} className="filtr-item">
                <WorkCardGql workItem={item} mb="30px" />
              </Col>
            ))}
          </Masonry>
        </Container>
      </Section>
    </>
  );
};

export default Works;
