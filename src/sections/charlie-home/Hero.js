import React, { useContext, useState, useEffect } from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import Typist from 'react-typist';

import GlobalContext from "../../context/GlobalContext";
import { Title, ButtonIcon, Section, Box } from "../../components/Core";

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
            <Col xl="9" lg="9" sm="12" className="">
              <Box className="">
                <Title 
                variant="hero"
                css={`
                margin-top: 1rem;
                text-indent: -3rem;
              `}>
                {typing ? <>
                  <Typist cursor={typeCursor} onTypingDone={() => setTyping(false)}>
                    <span>&nbsp;UX/UI</span>
                    <Typist.Backspace count={3} delay={3500} />
                    <Typist.Backspace count={2} delay={4000} />
                    <span>Product</span>
                    <Typist.Backspace count={7} delay={3500} />
                  </Typist>
                  <Typist cursor={typeCursor} onTypingDone={() => setTyping(false)}>
                    <span>&nbsp;Designer</span>
                    <Typist.Backspace count={8} delay={3000} />
                    <span>Strategist</span>
                    <Typist.Backspace count={10} delay={3000} />
                    <span>Designer</span>
                    <Typist.Backspace count={8} delay={3000} />
                  </Typist>
                </> : <span>&nbsp;<br />&nbsp;</span>}
              </Title>
              </Box>
              <Box className="">
                <Title
                  css={`
                  font-size: 1.4rem;
                  line-height: 1.3;
                  font-weight: normal;
                  font-style: italic;
                  padding: 6rem 15px .6rem;
                `}
                >
                  [She/Her]
                </Title>
                <Title
                  css={`
                  font-size: 1.4rem;
                  line-height: 1.3;
                  font-weight: normal;
                  padding: 1rem 15px 1.6rem;
                `}
                >
                  Melbourne-based product designer with Marketing and IT background, skilled in UX/UI design and strategies with 9+ years of experience in the Business and Public sectors. Enjoys problem solving with creative and analytical thinking, believes functionality and aesthetics can always be friends.
                </Title>
              </Box>
              <Box pl="" className="" css={`
                  margin: 0 0 -100px 10px;
                `}>
                <Link to="/about">
                  <ButtonIcon>
                    About Charlie
                  </ButtonIcon>
                </Link>
              </Box>
            </Col>
            <Col xl="3" lg="3" sm="12">
              <Box className="">
                <Title
                  css={`
                  font-size: 1.1rem;
                  line-height: 1.2;
                  font-weight: normal;
                  padding: 1.5rem 0;
                  margin-left: -2rem;
                `}
                >
                  <span style={{fontWeight:'bold'}}>noun:</span> &#91;ɪkˈspɪə.ri.əns dɪˈzaɪ.nər&#93;<br />1. A person that make a product or service usable, enjoyable, and accessible. While many companies design user experiences.<br /><span style={{fontStyle:'italic', fontWeight:'bold'}}>see also: wizard, magician, me.</span>
                </Title>
              </Box>
              <Box className="">
                <svg width="209" height="209" viewBox="0 0 209 209" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g>
                  <path d="M169.812 82.7292H152.396V140.117L51.4662 39.1875L39.1875 51.4662L140.117 152.396H82.7292V169.812H169.812V82.7292Z" fill="black"/>
                  </g>
                </svg>
              </Box>
            </Col>
          </Row>
        </Container>
      </SectionStyled>
    </>
  );
};

export default Hero;
