import React from "react";

import { Container, Row, Col } from "react-bootstrap";

import { Section, Box, Title } from "../../components/Core";

const Contact = () => {
  return (
    <>
      <Section className="pt-4">
        <Container>
          <Row className="align-items-lg-end">
            <Col xl="12" lg="12" sm="12" className="">
              <Box className="text-right">
                <Title
                  css={`
                  font-size: 3rem;
                  line-height: 1;
                  font-weight: normal;
                `}
                >
                  Send me a message
                </Title>
              </Box>
            </Col>
          </Row>
        </Container>
      </Section>
    </>
  );
};

export default Contact;
