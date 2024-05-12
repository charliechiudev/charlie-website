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
    <SectionStyled className="pt-5 pb-5 mx-4 border-bottom">
        <Container>
          <Row className="pb-5">
            <Col xs="6 position-relative">
              <Box className="pl-5 d-none d-sm-block position-absolute">
                <Title
                  css={`
                  font-size: 2.5rem;
                  font-weight: 500;
                  padding: 0;
                `}
                >
                  03/
                </Title>
              </Box>
              <Title
                className="text-right pr-3"
                css={`
                font-size: 2.5rem;
                font-weight: 500;
                color: #8A8D8E;
              `}
              >
                Education
              </Title>
            </Col>
            <Col xs="6">
              <Title
                className="text-left pl-3"
                css={`
                font-size: 2.5rem;
                font-weight: 500;
              `}
              >
                Work
              </Title>
            </Col>
          </Row>
          <Row>
            <Box className="timeline">
              <Container className="timeline-container">

              <Row>
                  <Col xl="6" className="timeline-col">
                  </Col>
                  <Col xl="6" className="timeline-col">
                    <div class="timeline-text">
                      <p>2024 - Present</p>
                      <h6>Digital Media Designer</h6>
                      <p className="font-italic">RMIT University | Melbourne (Full-time)</p>
                    </div>
                  </Col>
                </Row>
                
                <Row className="dot-grey">
                  <Col xl="6" className="timeline-col">
                    <div class="timeline-text text-grey">
                      <p>2023</p>
                      <h6>Product Design in AI | Artificial Intelligence and Users</h6>
                      <p className="font-italic">Udemy Online | Melbourne</p>
                    </div>
                  </Col>
                  <Col xl="6" className="timeline-col">
                  </Col>
                </Row>

                <Row>
                  <Col xl="6" className="timeline-col">
                  </Col>
                  <Col xl="6" className="timeline-col">
                    <div class="timeline-text">
                      <p>2022 - 2023</p>
                      <h6>Experience & Design Lead</h6>
                      <p className="font-italic">ASPL Group | Melbourne (Full-time)</p>
                    </div>
                  </Col>
                </Row>

                <Row className="dot-grey">
                  <Col xl="6" className="timeline-col">
                    <div class="timeline-text text-grey">
                      <p>2021</p>
                      <h6>ACS Professional Year & ICT Skill Assessment</h6>
                      <p className="font-italic">Australian Computer Society (ACS)</p>
                    </div>
                  </Col>
                  <Col xl="6" className="timeline-col">
                    <div class="timeline-text">
                      <p>2020 - 2022</p>
                      <h6>UX/UI Designer</h6>
                      <p className="font-italic">ASPL Group | Melbourne (Full-time)</p>
                    </div>
                  </Col>
                </Row>

                <Row>
                  <Col xl="6" className="timeline-col">
                    <div class="timeline-text text-grey">
                      <p>2019</p>
                      <h6>Bachelor of Information Technology<br/>(Mobile Apps Development)</h6>
                      <p className="font-italic">Academy of Interactive Technology | Melbourne</p>
                    </div>
                  </Col>
                  <Col xl="6" className="timeline-col">
                    <div class="timeline-text">
                      <p>2019</p>
                      <h6>UX/UI Developer</h6>
                      <p className="font-italic">SisterWorks | Melbourne</p>
                    </div>
                  </Col>
                </Row>

                <Row className="dot-grey">
                  <Col xl="6" className="timeline-col">
                  </Col>
                  <Col xl="6" className="timeline-col">
                    <div class="timeline-text">
                      <p>2017 - 2020</p>
                      <h6>Freelance Full-stack Designer</h6>
                      <p className="font-italic">Melbourne</p>
                    </div>
                  </Col>
                </Row>

                <Row className="dot-grey">
                  <Col xl="6" className="timeline-col">
                    <div class="timeline-text text-grey">
                      <p>2016</p>
                      <h6>Advanced Diploma in Graphic Design (Distinction)</h6>
                      <p className="font-italic">RMIT University | Melbourne</p>
                    </div>
                    <div class="timeline-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="45" height="44" viewBox="0 0 45 44" fill="none">
                        <path d="M41.25 29.3334V25.6667L25.3125 16.5001V6.41675C25.3125 4.89508 24.0562 3.66675 22.5 3.66675C20.9438 3.66675 19.6875 4.89508 19.6875 6.41675V16.5001L3.75 25.6667V29.3334L19.6875 24.7501V34.8334L15 37.5834V40.3334L22.5 38.5001L30 40.3334V37.5834L25.3125 34.8334V24.7501L41.25 29.3334Z" fill="black"/>
                      </svg>
                    </div>
                  </Col>
                  <Col xl="6" className="timeline-col">
                  </Col>
                </Row>

                <Row>
                  <Col xl="6" className="timeline-col">
                  </Col>
                  <Col xl="6" className="timeline-col">
                    <div class="timeline-text">
                      <p>2015 - 2016</p>
                      <h6>Marketing Specialist</h6>
                      <p className="font-italic">Maxim's Group, Cakes & Bakery Division | Hong Kong (Full-time)</p>
                    </div>
                  </Col>
                </Row>

                <Row>
                  <Col xl="6" className="timeline-col">
                  </Col>
                  <Col xl="6" className="timeline-col">
                    <div class="timeline-text">
                      <p>2013 - 2015</p>
                      <h6>Public Relations Executive</h6>
                      <p className="font-italic">Liu Chong Hing Investment Ltd (LCHI) | Hong Kong (Full-time)</p>
                    </div>
                  </Col>
                </Row>

                <Row className="dot-grey">
                  <Col xl="6" className="timeline-col">
                    <div class="timeline-text text-grey">
                      <p>2013</p>
                      <h6>Bachelor of Arts in Marketing & PR</h6>
                      <p className="font-italic">The Hong Kong Polytechnic University l Hong Kong</p>
                    </div>
                  </Col>
                  <Col xl="6" className="timeline-col">
                  </Col>
                </Row>

              </Container>
            </Box>
          </Row>
        </Container>
    </SectionStyled>
  );
};

export default Zero3;
