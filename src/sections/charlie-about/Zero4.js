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

const Zero4 = () => {
  return (
    <>
      <SectionStyled className="border-bottom mt-5 pt-5 pb-5 mb-5 mx-4">
        <Container>
          <Row className="">
            <Col xl="5" lg="5" sm="5" className="pl-5">
              <Box className="d-flex justify-content-between align-items-start">
                <Title
                  css={`
                    font-size: 2rem;
                    font-weight: normal;
                    padding: 0 0 0 0;
                  `}
                >
                  03/
                </Title>
                <Title
                  className="text-right"
                  css={`
                    font-size: 4rem;
                    line-height: 1;
                    letter-spacing: -3px;
                    font-weight: 500;
                    padding: 0 0 0 0;
                  `}
                >
                Two Truths<br/>
                One Lie
                </Title>
              </Box>
            </Col>
            <Col xl="7" lg="7" sm="7" className="pl-5 pb-5">
              
              <Box className="d-flex justify-content-between align-items-center border-bottom py-3">
                <h4 className="m-0 mr-5">01</h4>
                <p className="m-0 pl-4 text-left" css={`flex-grow: 2`}>I speak 4 languages</p>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M4 4H20V16H5.17L4 17.17V4ZM4 2C2.9 2 2.01 2.9 2.01 4L2 22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2H4ZM6 12H14V14H6V12ZM6 9H18V11H6V9ZM6 6H18V8H6V6Z" fill="black"/>
                </svg>
              </Box>

              <Box className="d-flex justify-content-between align-items-center border-bottom mt-1 py-3">
              <h4 className="m-0 mr-5">02</h4>
                <p className="m-0 pl-4 text-left" css={`flex-grow: 2`}>I can drive a stick</p>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M18.92 5.01C18.72 4.42 18.16 4 17.5 4H6.5C5.84 4 5.29 4.42 5.08 5.01L3 11V19C3 19.55 3.45 20 4 20H5C5.55 20 6 19.55 6 19V18H18V19C18 19.55 18.45 20 19 20H20C20.55 20 21 19.55 21 19V11L18.92 5.01ZM6.85 6H17.14L18.22 9.11H5.77L6.85 6ZM19 16H5V11H19V16Z" fill="black"/>
                  <path d="M7.5 15C8.32843 15 9 14.3284 9 13.5C9 12.6716 8.32843 12 7.5 12C6.67157 12 6 12.6716 6 13.5C6 14.3284 6.67157 15 7.5 15Z" fill="black"/>
                  <path d="M16.5 15C17.3284 15 18 14.3284 18 13.5C18 12.6716 17.3284 12 16.5 12C15.6716 12 15 12.6716 15 13.5C15 14.3284 15.6716 15 16.5 15Z" fill="black"/>
                </svg>
              </Box>

              <Box className="d-flex justify-content-between align-items-center border-bottom mt-1 py-3">
              <h4 className="m-0 mr-5">03</h4>
                <p className="m-0 pl-4 text-left" css={`flex-grow: 2`}>I built a furniture from the scratch</p>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M22.6559 18.9895L13.5759 9.90948C14.5059 7.56948 14.0259 4.80948 12.1359 2.90948C9.83586 0.609483 6.25586 0.399483 3.70586 2.25948L7.54586 6.10948L6.12586 7.51948L2.29586 3.68948C0.43586 6.22948 0.64586 9.81948 2.94586 12.1095C4.80586 13.9695 7.51586 14.4595 9.83586 13.5895L18.9459 22.6995C19.3359 23.0895 19.9659 23.0895 20.3559 22.6995L22.6559 20.3995C23.0559 20.0195 23.0559 19.3895 22.6559 18.9895ZM19.6559 20.5895L10.1959 11.1295C9.58586 11.5795 8.90586 11.8495 8.19586 11.9495C6.83586 12.1495 5.40586 11.7395 4.36586 10.6995C3.41586 9.75948 2.97586 8.49948 3.04586 7.25948L6.13586 10.3495L10.3759 6.10948L7.28586 3.01948C8.52586 2.94948 9.77586 3.38948 10.7259 4.32948C11.8059 5.40948 12.2159 6.89948 11.9659 8.28948C11.8459 8.99948 11.5459 9.65948 11.0859 10.2495L20.5359 19.6995L19.6559 20.5895Z" fill="black"/>
                </svg>
              </Box>
              
            </Col>
          </Row>
        </Container>
      </SectionStyled>
    </>
  );
};

export default Zero4;
