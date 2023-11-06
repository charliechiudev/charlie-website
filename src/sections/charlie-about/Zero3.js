import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";

import { Title, Section, Box } from "../../components/Core";

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

const Zero3 = () => {
  return (
    <>
      <SectionStyled className="position-relative pt-5 pb-0 mx-4">
        <Container>
          <Row className="">
            <Col xl="4" lg="4" sm="4" className="pl-5">
              <Box className="align-items-lg-center">
                <Title
                  css={`
                  font-size: 2.5rem;
                  font-weight: 500;
                  padding: 4rem 0 0 0;
                `}
                >
                  03/
                </Title>
              </Box>
            </Col>
            <Col xl="8" lg="8" sm="8" className="pl-5 pt-5 pb-5">
              <Box className="">
              <Title
                  css={`
                  font-size: 1.4rem;
                  font-weight: bold;
                  padding: 0 0 1rem 0;
                `}
                >
                Domani...
                </Title>
              </Box>
              
            </Col>
          </Row>
        </Container>
      </SectionStyled>
    </>
  );
};

export default Zero3;
