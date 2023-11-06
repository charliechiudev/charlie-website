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
                font-size: 0.8125rem;
                line-height: 1.2;
                font-weight: normal;
              `}
              className=""
            >
              Charlie C. Design&nbsp;&nbsp;|&nbsp;&nbsp;© 2023 All Rights Reserved&nbsp;&nbsp;|&nbsp;&nbsp;Designed and prototyped in Figma, built in React.
            </Title>
          </Col>
          <Col xs="2" className="">
            <Title
              variant="card"
              css={`
                font-size: 1rem;
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
