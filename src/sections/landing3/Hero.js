import React, { useContext } from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";

import GlobalContext from "../../context/GlobalContext";
import { Title, ButtonIcon, Section, Box } from "../../components/Core";
import bgHeroPattern from "../../assets/image/webp/hero-pattern.webp";
import imgL from "../../assets/image/jpg/portfolio-about-3.jpg";

const SectionStyled = styled(Section)`
  &::before {
    position: absolute;
    top: 0;
    content: "";
    width: 100%;
    height: 120%;
    background: url(${bgHeroPattern}) top center no-repeat;
    background-size: cover;
    z-index: -1;
  }
`;

const Hero = () => {
  const gContext = useContext(GlobalContext);

  return (
    <>
      {/* <!-- Hero Area --> */}
      <SectionStyled hero className="position-relative">
        <Container>
          <Box>
            {/* <img
              src={imgL}
              alt=""
              css={`
                border-radius: 50rem !important;
              `}
              height="120px"
            /> */}
          </Box>
          <Row className="align-items-lg-end">
            <Col lg="12" sm="12" className="mb-5 mb-lg-0">
              <Box className="d-flex flex-column align-items-center text-center">
              <Title
                color="black"
                variant="card"
                mb="2.5rem"
                css={`
                  font-size: 1.3125rem;
                  line-height: 1.5;
                  font-weight: 400;
                `}
              >
                Multi-disciplined UX/UI designer, Melbourne based. <em>&#91;She, Her&#93;</em>
              </Title>
                <h1 variant="hero">
                The human mind processes visual information 60,000 times faster than text. So why don't you just scroll down and check out my work?
                </h1>
              </Box>
            </Col>
            <Col lg="4" sm="12">
              <Box pl="1.25rem" className="text-center">
                <ButtonIcon 
                  onClick={(e) => {
                    e.preventDefault();
                    gContext.toggleContact();
                  }}
                >
                  Say hi to me
                </ButtonIcon>
              </Box>
            </Col>
          </Row>
        </Container>
      </SectionStyled>
    </>
  );
};

export default Hero;
