import React, { useContext, useState, useEffect } from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import Typist from 'react-typist';

import GlobalContext from "../../context/GlobalContext";
import { Title, ButtonIcon, Section, Box } from "../../components/Core";

import Diagram from "../../assets/about-diagram.svg";

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

const AboutDiagram = styled(Box)`
  position: absolute;
  top: 5rem;
  right: 0;
  z-index: -1;
`;

const Hero = () => {
  const gContext = useContext(GlobalContext);
  const [typing, setTyping] = useState(true);

  const typeCursor = {
    show: false,
  }

  useEffect(() => {
    if (!typing) {
      setTimeout(() => setTyping(true), 200);
    }
  });

  return (
    <>
      {/* <!-- Hero Area --> */}
      <SectionStyled hero className="position-relative">
        <Container fluid>
          <Row className="align-items-lg-center">
            <Col xl="12" lg="12" sm="12" className="">
              <Box className="">
                <Title 
                css={`
                font-size: 6rem;
                line-height: 1;
                font-weight: normal;
                margin-top: 1rem;
              `}>
                Charlie is a Melbourne-based<br />
                {typing ? <Typist className="d-inline" cursor={typeCursor} onTypingDone={() => setTyping(false)}>
                  <span>UX/UI Designer</span>
                  <Typist.Backspace count={12} delay={4000} />
                  <span> Strategist</span>
                  <Typist.Backspace count={11} delay={4000} />
                  <span>/UI Designer</span>
                  <Typist.Backspace count={12} delay={4000} />
                  <span> Strategist</span>
                  <Typist.Backspace count={11} delay={4000} />
                  <span>/UI Designer</span>
                  <Typist.Backspace count={12} delay={4000} />
                  <span> Strategist</span>
                  <Typist.Backspace count={11} delay={4000} />
                  <span>/UI Designer</span>
                  <Typist.Backspace count={12} delay={4000} />
                  <span> Strategist</span>
                  <Typist.Backspace count={11} delay={4000} />
                  <span>/UI Designer</span>
                  <Typist.Backspace count={12} delay={4000} />
                  <span> Strategist</span>
                  <Typist.Backspace count={11} delay={4000} />
                </Typist> : <>&nbsp;</>}
                <br />Product Designer
              </Title>
              </Box>
              <Box className="">
                <Title
                  css={`
                  font-size: 1.4rem;
                  line-height: 1.3;
                  font-family: Courier;
                  font-weight: normal;
                  font-style: italic;
                  padding: 1.6rem 15px 1rem;
                `}
                >
                  [She/Her]
                </Title>
                <Title
                  css={`
                  font-size: 1.4rem;
                  line-height: 1.3;
                  font-family: Courier;
                  font-weight: normal;
                  padding: 0rem 15px 3rem;
                `}
                >
                  Sometimes people ask what I do, here is what I tell them:
                </Title>
                <AboutDiagram><img src={Diagram} /></AboutDiagram>
              </Box>
              <Box pl="" className="" css={`
                  margin: 0 0 -100px 10px;
                `}>
                <ButtonIcon
                  onClick={(e) => {
                    e.preventDefault();
                    gContext.toggleContact();
                  }}
                >
                  Keep reading
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
