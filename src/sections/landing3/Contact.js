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
            <Col xl="8" lg="8" sm="12" className="">
              <Box className="d-flex flex-column">
                <Title
                  css={`
                  font-size: 5rem;
                  line-height: 1;
                  font-weight: bold;
                `}
                >
                  Melbourne-based full-stack designer with Marketing and IT background.
                </Title>
              </Box>
            </Col>
            <Col lg="4" xl="4" className="text-right">
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
