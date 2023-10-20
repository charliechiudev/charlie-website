import React, { useContext } from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";

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

  return (
    <>
      {/* <!-- Hero Area --> */}
      <SectionStyled hero className="position-relative">
        <Container fluid>
          <Row className="align-items-lg-end">
            <Col xl="9" lg="9" sm="12" className="">
              <Box className="">
                <Title 
                variant="hero"
                css={`
                margin-top: 4rem;
              `}>Experience<br />Designer</Title>
              </Box>
            </Col>
            <Col xl="3" lg="3" sm="12">
            <Box className="">
                <Title
                  css={`
                  font-size: 1.2rem;
                  line-height: 1.2;
                  font-family: times, serif;
                  font-weight: normal;
                  padding: 1.5rem 0;
                  margin-left: -3rem;
                `}
                >
                  <span style={{fontStyle:'italic', fontWeight:'bold'}}>noun:</span> &#91;ɪkˈspɪə.ri.əns dɪˈzaɪ.nər&#93;<br />1. A person that make a product or service usable, enjoyable, and accessible. While many companies design user experiences.<br /><span style={{fontStyle:'italic', fontWeight:'bold'}}>see also:</span> <span style={{fontStyle:'italic'}}>wizard, magician, me.</span>
                </Title>
              </Box>
            </Col>
          </Row>
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
                  Melbourne-based full-stack designer with Marketing and IT background, skilled in UX/UI design with 9+ years of experience in the Business and Public sectors. Enjoys problem solving with creative and analytical thinking, believes functionality and aesthetics can always be friends.
                </Title>
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
