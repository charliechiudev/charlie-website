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

const Zero2 = () => {
  return (
    <>
      {/* <!-- Hero Area --> */}
      <SectionStyled className="position-relative pt-4 border-bottom mx-4">
        <Container>
          <Row className="">
            <Col xl="12" lg="12" sm="12" className="pl-5 pt-5 pb-5">
              <Box className="">
                <Title
                  css={`
                  font-size: 4rem;
                  line-height: 1;
                  letter-spacing: -3px;
                  font-weight: 500;
                  padding: 0 0 0 0;
                `}
                >
                    Analytical & Design thinking<br />
                    Problem-solving & strategic mindset<br />
                    Research & data analytics<br />
                    Usability testing<br />
                    Information architecture<br />
                    User flow & journey maps<br />
                    Wireframes & prototypes<br />
                    Dev-friendly UI design<br />
                    Front-end development<br />
                    Branding & identity
                </Title>
                <Title
                  css={`
                  position-size: 2rem;
                  font-weight: normal;
                  position: absolute;
                  bottom: 0;
                  right: 0;
                `}
                className="pb-5 pr-5"
                >
                  02/
                </Title>
              </Box>
            </Col>
          </Row>
        </Container>
      </SectionStyled>
    </>
  );
};

export default Zero2;
