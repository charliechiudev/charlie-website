import React, { useState } from "react";
import { Container, Col } from "react-bootstrap";
import Masonry from "react-masonry-component";

import { Section, Box, ListNav } from "../../components/Core";
import WorkCardGql from "../../components/WorkCardGql";

const PortfolioItems = require('../../data/PortfolioItems.json');

const Works = () => {
  const initialItems = PortfolioItems.filter(i => !i.categories.includes("marketing"));

  const [items, setItems] = useState(initialItems);
  const [activeLink, setActiveLink] = useState("*");

  const filterBy = (cat) => {
    if (cat === "*") {
      setActiveLink("*");
      setItems(initialItems);
    } else {
      const filteredItems = initialItems.filter((item) => {
        return item.categories.indexOf(cat) !== -1;
      });
      setActiveLink(cat);
      setItems(filteredItems);
    }
  };

  const masonryOptions = {
    transitionDuration: 1000,
  };

  return (
    <>
      {/* <!-- Works Area --> */}
      <Section className="position-relative">
        <Container fluid>
          <Box mb="2.5rem" ml="-1.75rem">
            <ListNav className="nav justify-content-center">
              <li className="nav-item">
                <a
                  className={`nav-link font-weight-bold text-uppercase ${
                    activeLink === "*" ? "active" : null
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    filterBy("*");
                  }}
                >
                  All works
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link font-weight-bold text-uppercase ${
                    activeLink === "case-study" ? "active" : null
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    filterBy("case study");
                  }}
                >
                  Case studies
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link font-weight-bold text-uppercase ${
                    activeLink === "uxui" ? "active" : null
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    filterBy("ux-ui");
                  }}
                >
                  UX/UI
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link font-weight-bold text-uppercase ${
                    activeLink === "graphics" ? "active" : null
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    filterBy("graphics");
                  }}
                >
                  Graphic Design
                </a>
              </li>
            </ListNav>
          </Box>
        </Container>

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
