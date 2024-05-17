import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import Typist from 'react-typist';

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

const Zero1 = () => {
  return (
    <>
      <SectionStyled className="position-relative mt-5 pt-0 pb-0 border-bottom border-top mx-4">
        <Container className="">
          <Row className="">
            <Col xl="4" lg="4" sm="4" className="pl-5">
              <Box className="align-items-lg-center">
                <Title
                  className="d-none d-sm-block"
                  css={`
                  font-size: 2.5rem;
                  font-weight: 500;
                  padding: 4rem 0 0 0;
                `}
                >
                  01/
                </Title>
                <Title
                  css={`
                  font-size: 4rem;
                  letter-spacing: -3px;
                  line-height: .9;
                  font-weight: 500;
                  padding: 0 3rem 0 0;
                  margin-top: -3rem;
                `}
                className="text-right"
                >
                  About<br />Charlie
                </Title>
              </Box>
            </Col>
            <Col xl="8" lg="8" sm="8" className="border-left pl-5 pt-5 pb-5">
              <Box className="">
              <Title
                  css={`
                  font-size: 1.4rem;
                  font-weight: bold;
                  padding: 0 0 1rem 0;
                `}
                >
                Sometimes a designer, sometimes a developer &lt;/&gt;
                </Title>
              </Box>
              <Box className="">
                <p>Charlie's work touches the entire end-to-end journey of a user's interaction - from creating digital assets, research, and prototyping to design and front-end development.</p>
                <p>Having graduated with Dual Bachelor's Degrees in Marketing and IT, Charlie's early career involved corporate marketing in a global Food & Beverage enterprise, branding, and graphic designs for small businesses. She soon realised the inseparable relationship between human-centred design, consumer behaviours, and business goals which is why she started to make use of her logical programming skills from her degree in digital media and user experience design. </p>
                <p>As a tech-savvy and strategic thinker, she enjoys solving problems with her diverse skillsets by experimenting with emerging techs and immersing herself as a user. Her logical thinking skills allow her to understand and execute how a project works exactly from user, technical, design, and business perspectives as well as bringing her own design ideas to life. What is more, the solid marketing & branding experiences she has gained in her early career have helped putting herself in customers' shoes whilst still being creative.</p>
                <p>Charlie is thrilled to join <strong>RMIT University</strong> as a <strong>Digital Media Designer</strong> in 2024. Prior to joining RMIT, Charlie was the Experience & Design Lead at ASPL Group where she first started as a UX/UI designer. ASPL is a management consultancy that provides digital solutions for recruitment, strategic leadership training and development across the Australian government. Within the design & innovation team, Charlie's work focused on creative web/UX/UI design and development, as well as designing optimised users/learners experiences with innovative digital products.
</p>
                <p>Outside of work, you will catch Charlie behind the drum kit, unleashing her inner rockstar. Beyond pixels and beats, you will find her on sci-fi binges or tackling DIY craft projects during the weekends. She is also keen on learning new languages and currently dabbling in Italian too - perché no?  
</p>
              </Box>
            </Col>
          </Row>
        </Container>
      </SectionStyled>
    </>
  );
};

export default Zero1;
