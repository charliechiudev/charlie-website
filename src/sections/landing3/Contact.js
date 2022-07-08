import React, { useContext } from "react";

import { Container, Row, Col } from "react-bootstrap";

import GlobalContext from "../../context/GlobalContext";
import { Section, Title, ButtonIcon } from "../../components/Core";

const Hero = () => {
  const gContext = useContext(GlobalContext);

  return (
    <>
      <Section className="pt-4">
        <Container>
          <Row className="text-center justify-content-center">
            <Col lg="10" xl="7">
              <div className="text-center mb-5">
                <Title variant="hero">Got a project in mind?</Title>
              </div>
              <div className="text-center">
                <ButtonIcon
                  onClick={(e) => {
                    e.preventDefault();
                    gContext.toggleContact();
                  }}
                >
                  Say hi to me
                </ButtonIcon>
              </div>
            </Col>
          </Row>
        </Container>
      </Section>
    </>
  );
};

export default Hero;
