import React from "react";
import { useStaticQuery, graphql } from "gatsby";
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

  const images = useStaticQuery(graphql`
    query {
      allFile(
        filter: {extension: {regex: "/(jpg)|(jpeg)|(png)/"}, sourceInstanceName: {eq: "dataImages"}}
      ) {
        edges {
          node {
            ext
            name
            publicURL
            childImageSharp {
              gatsbyImageData(width: 640)
            }
          }
        }
      }
    }`);

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
                <WorkCardGql image={images.allFile.edges.find(e => item.thumbnail.startsWith(e.node.name))} workItem={item} mb="30px" />
              </Col>
            ))}
          </Masonry>
        </Container>
      </Section>
    </>
  );
};

export default Works;
