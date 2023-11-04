import React, { useContext } from "react";

import { Container, Row, Col } from "react-bootstrap";

import GlobalContext from "../../context/GlobalContext";
import { Section, Box, Title, ButtonIcon } from "../../components/Core";

const Hero = () => {
  const gContext = useContext(GlobalContext);

  return (
    <>
      <Section className="pt-4">
        <Container fluid>
          <Row className="align-items-lg-end">
            <Col xl="9" lg="9" sm="12" className="">
              <Box className="d-flex flex-column">
                <Title
                  css={`
                  font-size: 3rem;
                  line-height: 1;
                  font-weight: normal;
                `}
                >
                  This website is designed and prototyped with <a href="https://www.figma.com/" target="_blank" rel="noreferrer nofollow">Figma</a>, built in <a href="https://www.react.dev/" target="_blank" rel="noreferrer nofollow">React</a> (Figma DevMode to React components - how good is this AI application?), versioned in <a href="https://www.github.com/" target="_blank" rel="noreferrer nofollow">GitHub</a> and auto-deployed on <a href="https://www.netlify.com/" target="_blank" rel="noreferrer nofollow">Netlify</a>.
                </Title>
              </Box>
            </Col>
            <Col lg="3" xl="3" className="text-right">
                <ButtonIcon
                  onClick={(e) => {
                    e.preventDefault();
                    gContext.toggleContact();
                  }}
                >
                  Say hi to me
                </ButtonIcon>
            </Col>
          </Row>
        </Container>
      </Section>
    </>
  );
};

export default Hero;