import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";

import PageWrapper from "../components/PageWrapper";
import { Section } from "../components/Core";
import RotateImg from "../components/RotateImg";
import { works1 } from "../data-dev";

const IndexPage = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(works1);
  }, []);

  return (
    <>
      <PageWrapper>
        <Section hero>
          <Container fluid>
            <Row>
              {items.map((item, index) => (
                <Col lg="3" md="4" sm="6" key={index} className="filtr-item">
                  <RotateImg
                    mb="30px"
                    link={item.link}
                    imgSrc={item.thumbnail}
                    alt={item.title}
                  />
                </Col>
              ))}
            </Row>
          </Container>
        </Section>
      </PageWrapper>
    </>
  );
};
export default IndexPage;
