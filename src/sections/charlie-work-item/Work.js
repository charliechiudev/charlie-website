import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import GatsbyImage from 'gatsby-image';
import { Container, Row, Col } from "react-bootstrap";
import Masonry from "react-masonry-component";
import Slider from "react-slick";

import { Section, Title, Text, Box } from "../../components/Core";
import PageWrapper from "../../components/PageWrapper";
import Contact from "../../sections/charlie-about/Contact";

const PortfolioItems = require('../../data/PortfolioItems.json');

const Work = ({ style, location }) => {
  const masonryOptions = {
    transitionDuration: 1000,
  };

  const sliderSettings = {
    dots: true,
    dotsClass: "slick-dots portfolio-gallery-slide-slick-dots",
    arrows: false,
    infinite: true,
    speed: 500,
    accessibility: true,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  const portfolioItem = PortfolioItems.find(i => i.slug == location.pathname.substr(0, location.pathname.length - 1));

  const data = useStaticQuery(graphql`
  query {
    images: allFile(
      filter: {extension: {regex: "/(jpg)|(jpeg)|(png)|(gif)/"}, sourceInstanceName: {eq: "dataImages"}}
    ) {
      edges {
        node {
          childImageSharp {
            fluid(maxWidth: 1280, quality: 90) {
              originalName
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
    videos: allFile(
      filter: {extension: {regex: "/(mov)|(mp4)|(avi)/"}, sourceInstanceName: {eq: "dataImages"}}
    ) {
      edges {
        node {
          publicURL
        }
      }
    }
  }`);

  const mainImage = data.images.edges.find((edge) => edge.node?.childImageSharp?.fluid.originalName === portfolioItem.gallery[0]);
  const mainVideo = data.videos.edges.find((edge) => edge.node?.publicURL.endsWith(portfolioItem.gallery[0]));

  const gallery = [];
  for (const name of portfolioItem.gallery) {
    if (Array.isArray(name)) {
      const slide = [];
      for (const n of name) {
        const slideImage = data.images.edges.find((edge) => edge.node?.childImageSharp?.fluid.originalName === n);
        if (slideImage) slide.push(slideImage);
      }
      gallery.push(slide);
      continue;
    }
    const image = data.images.edges.find((edge) => edge.node?.childImageSharp?.fluid.originalName === name && edge.node?.childImageSharp?.fluid.originalName !== mainImage?.node?.childImageSharp?.fluid.originalName);
    if (image) {
      gallery.push(image);
      continue;
    }
    const video = data.videos.edges.find((edge) => edge.node?.publicURL.endsWith(name) && edge.node?.publicURL !== mainVideo?.node?.publicURL);
    if (video) {
      gallery.push(video);
      continue;
    }
  }

  return (
    <>
      <PageWrapper>
        <Container fluid className="mt-5 pt-5 px-5">
          {mainImage && <GatsbyImage fluid={mainImage.node.childImageSharp.fluid} className="w-100" />}
          {mainVideo && <video muted autoPlay loop className="w-100"><source src={mainVideo.node.publicURL} type="video/mp4" /></video>}
        </Container>
        <Section className="mt-0 mb-0 pb-0">
          <Container>
            <Row>
              <Col lg="8">
                <Text variant="tag">{portfolioItem.categories.filter(cat => cat !== "case study").join(", ")}</Text>
                <Title variant="secSm" className="mt-4 mb-2">
                  {portfolioItem.title}{" "}
                </Title>
                {portfolioItem.subtitle && <Text>{portfolioItem.subtitle}</Text>}
              </Col>
            </Row>
          </Container>
        </Section>

       {portfolioItem.description && <Container className="mt-0 mb-0 pb-0">
          <Row>
            <Col lg="12">
              <Text variant="p" dangerouslySetInnerHTML={{__html: portfolioItem.description}}></Text>
            </Col>
          </Row>
        </Container>}
        {portfolioItem.client && <Container className="mt-5 mb-0 pb-0">
          <Row>
            <Col lg="4" className="mb-4 mb-lg-0">
              <Text variant="tag">Client</Text>
              <Title variant="cardBig" className="mt-3">
                {portfolioItem.client}
              </Title>
            </Col>
            <Col lg="4" className="mb-4 mb-lg-0">
              <Text variant="tag">Time</Text>
              <Title variant="cardBig" className="mt-3">
                {portfolioItem.year}
              </Title>
            </Col>
            {/* <Col lg="4">
              <a href="https://www.google.com" target="_blank"><Button arrowRight>Live work</Button></a>
            </Col> */}
          </Row>
        </Container>}

        <Section className="mt-0">
          <Container>
            {style === "gallery-full" ?
              <Row>
                {gallery.map((item, i) => (
                  <Col lg="12" md="12" sm="12" className="mb-4" key={`gallery-${i}`}>
                    {Array.isArray(item) ?
                      <Slider {...sliderSettings}>
                        {item.map((slide, j) => (
                          <GatsbyImage key={`gallery-${i}-slide-${j}`} fluid={slide.node.childImageSharp.fluid} className="w-100" />
                        ))}
                      </Slider>
                      : item.node.childImageSharp ?
                        <GatsbyImage fluid={item.node.childImageSharp.fluid} className="w-100" /> :
                        <video muted autoPlay loop className="w-100"><source src={item.node.publicURL} type="video/mp4" /></video>
                    }
                  </Col>
                ))}
              </Row>
              :
              <Masonry
                options={masonryOptions}
                className={"masonry-grid row"}
              >
                {gallery.map((item, i) => (
                  <Col lg="6" md="6" sm="6" className="mb-4" key={`gallery-${i}`}>
                    {Array.isArray(item) ?
                      <Slider {...sliderSettings}>
                        {item.map((slide, j) => (
                          <GatsbyImage key={`gallery-${i}-slide-${j}`} fluid={slide.node.childImageSharp.fluid} className="w-100" />
                        ))}
                      </Slider>
                      : item.node.childImageSharp ?
                        <GatsbyImage fluid={item.node.childImageSharp.fluid} className="w-100" /> :
                        <video muted autoPlay loop className="w-100"><source src={item.node.publicURL} type="video/mp4" /></video>
                    }
                  </Col>
                ))}
              </Masonry>
            }

          </Container>
        </Section>
        <Contact />
      </PageWrapper>
    </>
  );
};
export default Work;
