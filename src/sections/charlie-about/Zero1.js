import React, { useContext, useState, useEffect } from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import Typist from 'react-typist';

import GlobalContext from "../../context/GlobalContext";
import { Title, ButtonIcon, Section, Box } from "../../components/Core";

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

const Zero1 = () => {
  const gContext = useContext(GlobalContext);
  const [typing, setTyping] = useState(true);

  const typeCursor = {
    show: false,
  }

  useEffect(() => {
    if (!typing) {
      setTimeout(() => setTyping(true), 200);
    }
  });

  return (
    <>
      {/* <!-- Hero Area --> */}
      <SectionStyled hero className="position-relative">
        <Container fluid>
          <Row className="border-top border-bottom">
            <Col xl="4" lg="4" sm="4" className="pl-5">
              <Box className="align-items-lg-center">
                <Title
                  css={`
                  font-size: 2rem;
                  font-weight: normal;
                  padding: 4rem 0 0 0;
                `}
                >
                  01/
                </Title>
                <Title
                  css={`
                  font-size: 4rem;
                  line-height: .9;
                  font-weight: bold;
                  padding: 0 3rem 0 0;
                  margin-top: -2rem;
                `}
                className="text-right"
                >
                  About<br />Charlie
                </Title>
              </Box>
            </Col>
            <Col xl="6" lg="6" sm="6" className="border-left pl-5">
              <Box className="">
              <Title
                  css={`
                  font-size: 1.4rem;
                  font-weight: bold;
                  padding: 4rem 0 1rem 0;
                `}
                >
                Functionality and aesthetics can always be friends.
                </Title>
              </Box>
              <Box className="pb-5">
                <p>Charlie's work touches the entire end-to-end journey of a user's interaction - from research and prototyping to design and front-end development.</p>
                <p>Having graduated with Dual Bachelor's Degrees in Marketing and IT, Charlie's early career involved corporate marketing in a global Food & Beverage enterprise, branding, and graphic designs for small businesses. She soon realised the inseparable relationship between human-centred design, consumer behaviours, and business goals which is why she started to make use of her logical programming skills from her degree in user experience design. </p>
                <p>As a tech-savvy and strategic thinker, she enjoys solving problems with her diverse skillsets by experimenting with emerging techs and immersing herself as a user. Her logical thinking skills allow her to understand and execute how a project works exactly from user, technical, design, and business perspectives as well as bringing her own design ideas to life. What is more, the solid marketing & branding experiences she has gained in her early career have definitely helped putting herself in customers' shoes whilst still being creative.</p>
                <p>Outside of work, Charlie has a passion for interior designs and DIY crafty projects, enjoys camping and binging sci-fi shows. She is also keen on learning new languages - don't be alarmed if you bump into her practicing Italian in your local gelataria.</p>
              </Box>
            </Col>
            <Col xl="1" lg="1" sm="1" className=""></Col>
          </Row>
        </Container>
      </SectionStyled>
    </>
  );
};

export default Zero1;
