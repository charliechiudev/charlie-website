import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Title } from "../Core";
import {
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";

const Footer = () => {
  return (
      <Container fluid className="mt-5 pb-4">
        <Row className="align-items-sm-center border-top pt-4">
          <Col xs="10" className="">
            <Title
              variant="card"
              css={`
                font-size: 0.8125rem !important;
                line-height: 1.2 !important;
                font-weight: normal !important;
              `}
              className=""
            >
              Charlie C. Design&nbsp;&nbsp;|&nbsp;&nbsp;<a css={`text-decoration:none`} href={"window.location.href='mailto:'+['hello','charliechiudesign.com'].join('@')"}>&#x68;&#x65;&#x6c;&#x6c;&#x6f;&#x40;&#x63;&#x68;&#x61;&#x72;&#x6c;&#x69;&#x65;&#x63;&#x68;&#x69;&#x75;&#x64;&#x65;&#x73;&#x69;&#x67;&#x6e;&#x2e;&#x63;&#x6f;&#x6d;</a>&nbsp;&nbsp;|&nbsp;&nbsp;© 2023 All Rights Reserved&nbsp;&nbsp;|&nbsp;&nbsp;Designed and prototyped in Figma, built in React.
            </Title>
          </Col>
          <Col xs="2" className="">
            <Title
              variant="card"
              css={`
                font-size: 1rem !important;
              `}
              className="text-right"
            >
              <a href="https://www.linkedin.com/in/charliechiu/" target="_blank" rel="noreferrer nofollow"><FaLinkedinIn /></a>&nbsp;&nbsp;<a href="https://www.github.com/charliechiudev" target="_blank" rel="noreferrer nofollow"><FaGithub /></a>
            </Title>
          </Col>
        </Row>
      </Container>
  );
};

export default Footer;
