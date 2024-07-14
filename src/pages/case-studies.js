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
                    These <u>case studies</u> are from my fine wine collection (they've aged a bit!). For my recent work, please refer to my resume or drop me a message!
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
                    UXUI/digital designer by day, and a rookie rockstar drummer by night. With a background in Marketing and Technology, Charlie enjoys problem-solving with creative and analytical thinking by experimenting with emerging techs.
                  </Title>
                </Box> */}
              </Col>
            </Row>
          </Container>
        </SectionStyled> 

        <Element name="works">
          <Works category="case study" />
        </Element>

        <Contact />
      </PageWrapper>
    </>
  );
};

export default IndexPage;
