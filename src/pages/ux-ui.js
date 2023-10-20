import React from "react";
import { Element } from "react-scroll";
import styled from "styled-components";

import { Container, Row, Col } from "react-bootstrap";

import { Title, Section, Box } from "../components/Core";

import PageWrapper from "../components/PageWrapper";
import Works from "../sections/landing3/Works";
import Contact from "../sections/landing3/Contact";

const SectionStyled = styled(Section)`
  &::before {
    position: absolute;
    top: 0;
    content: "";
    width: 100%;
    height: 120%;
    z-index: -1;
  }
`;

const IndexPage = () => {
  return (
    <>
      <PageWrapper>
        <SectionStyled className="position-relative">
          <Container fluid>
            <Row className="align-items-lg-end">
              <Col xl="8" lg="8" sm="12" className="">
                <Box className="">
                  <Title
                    css={`
                    font-size: 1.4rem;
                    line-height: 1.3;
                    font-weight: normal;
                    padding: 6rem 15px 1.6rem;
                    `}
                  >
                    UX/UI Page. Melbourne-based full-stack designer with Marketing and IT background, skilled in UX/UI design with 9+ years of experience in the Business and Public sectors. Enjoys problem solving with creative and analytical thinking, believes functionality and aesthetics can always be friends.
                  </Title>
                </Box>
              </Col>
            </Row>
          </Container>
        </SectionStyled>
        <Element name="works">
          <Works />
        </Element>

        <Contact />
      </PageWrapper>
    </>
  );
};

export default IndexPage;
