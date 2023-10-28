import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Box, Title } from "../Core";
import {
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";

const Footer = ({ isDark = true }) => {
  return (
    <>
      {/* <!-- Footer section --> */}
      <Box
        bg="bg"
        pt={[0, null, null, "3.75rem"]}
        pb="3.75rem"
        css={`
          z-index: -50;
        `}
        className="position-relative"
      >
        <Container fluid>
        <Row className="align-items-sm-center border-top pt-4">
          <Col xl="10" lg="10" sm="10" className="">
            <Title
              variant="card"
              css={`
                font-size: 0.8125rem;
              `}
              className=""
            >
              Charlie C. Design&nbsp;&nbsp;|&nbsp;&nbsp;© 2023 All Rights Reserved&nbsp;&nbsp;|&nbsp;&nbsp;Designed and prototyped in Figma, built in React.
            </Title>
          </Col>
          <Col xl="2" lg="2" sm="2" className="">
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
      </Box>
    </>
  );
};

export default Footer;
