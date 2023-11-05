import React from "react";

import { Container, Row, Col } from "react-bootstrap";

import { Section, Box, Title } from "../../components/Core";

const Contact = () => {
  return (
    <>
      <Section className="pt-4 pb-1">
        <Container fluid>
          <Row>
            <Col xl="12" lg="12" sm="12" className="">
              <Box className="pr-3">
                <Title
                  css={`
                  font-size: 3rem;
                  line-height: 1;
                  font-weight: normal;
                  display: flex;
                  justify-content: flex-end;
                `}
                >
                  <a href="javascript:window.location.href='mailto:'+['charliechiudesign','gmail.com'].join('@')">Send me a message</a>
                  <svg className="ml-4" css={`margin-top: -2px`} width="58" height="58" viewBox="0 0 209 209" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M169.812 82.7292H152.396V140.117L51.4662 39.1875L39.1875 51.4662L140.117 152.396H82.7292V169.812H169.812V82.7292Z" fill="black"/>
                  </svg>
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
