import React from "react";
import { Element } from "react-scroll";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import { Title, Section, Box, Head } from "../components/Core";

import PageWrapper from "../components/PageWrapper";

import Works from "../sections/charlie-work-category/Works";
import Contact from "../sections/charlie-about/Contact";

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
      <Head title={"UX/UI"} />
      <PageWrapper>
        <SectionStyled hero className="position-relative pb-0">
          <Container fluid>
            <Row className="align-items-lg-end">
              <Col sm="11" className="">
                <Box className="d-flex flex-column">
                  <Title
                    css={`
                    font-size: 3rem;
                    line-height: 1;
                    font-weight: 500;
                  `}
                  >
                    UX/UI design and development projects from a little while ago. For other commercial projects from my recent role, please refer to my resume and I am always open to have a chat with you over a (virtual) coffee! 
                  </Title>
                </Box>

                {/* <Box className="pt-4">
                  <Title
                    css={`
                    font-size: 1.4rem;
                    line-height: 1.3;
                    font-weight: normal;
                    `}
                  >
                    UX/UI Page. Melbourne-based full-stack designer with Marketing and IT background, skilled in UX/UI design with 9+ years of experience in the Business and Public sectors. Enjoys problem solving with creative and analytical thinking, believes functionality and aesthetics can always be friends.
                  </Title>
                </Box> */}
              </Col>
            </Row>
          </Container>
        </SectionStyled> 

        <Element name="works">
          <Works category="ux-ui" />
        </Element>

        <Contact />
      </PageWrapper>
    </>
  );
};

export default IndexPage;
