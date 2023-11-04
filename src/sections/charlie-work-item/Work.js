import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
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

  const portfolioItem = PortfolioItems.find(i => i.slug === location.pathname.substr(0, location.pathname.length - 1));

  const data = useStaticQuery(graphql`
  query {
    allFile(filter: {sourceInstanceName: {eq: "dataImages"}}) {
      edges {
        node {
          ext
          name
          publicURL
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
      }
    }
  }`);

  const mainImage = data.allFile.edges.find((edge) => edge.node.publicURL.endsWith(portfolioItem.gallery[0]));

  const gallery = [];
  for (const name of portfolioItem.gallery) {
    if(name === portfolioItem.gallery[0]) continue;

    if (Array.isArray(name)) {
      const slide = [];
      for (const n of name) {
        const slideImage = data.allFile.edges.find((edge) => edge.node.publicURL.endsWith(n));
        if (slideImage) slide.push(slideImage);
      }
      gallery.push(slide);
      continue;
    }
    
    const image = data.allFile.edges.find((edge) => edge.node.publicURL.endsWith(name));
    if (image) {
      gallery.push(image);
      continue;
    }
  }

  return (
    <>
      <PageWrapper>
        <Container fluid className="mt-5 pt-5 px-5">
          {mainImage && (
            mainImage.node.childImageSharp ? 
            <GatsbyImage image={mainImage.node.childImageSharp.gatsbyImageData} className="w-100" /> : 
            mainImage.node.ext.endsWith("gif") ? 
            <img src={mainImage.node.publicURL} className="w-100" /> :
            <video muted autoPlay loop className="w-100"><source src={mainImage.node.publicURL} type="video/mp4" /></video> 
          )}
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
                  <Col lg={"12"} md={"12"} sm={"12"} className="mb-4" key={`gallery-${i}`}>
                    {Array.isArray(item) ?
                      <Slider {...sliderSettings}>
                        {item.map((slide, j) => (
                          slide.node.ext.endsWith("gif") ? 
                          <img key={`gallery-${i}-slide-${j}`} src={slide.node.publicURL} className="w-100" /> :
                          <GatsbyImage key={`gallery-${i}-slide-${j}`} image={slide.node.childImageSharp.gatsbyImageData} className="w-100" />
                        ))}
                      </Slider>
                      : item.node.childImageSharp ? 
                      <GatsbyImage key={`gallery-${i}`} image={item.node.childImageSharp.gatsbyImageData} className="w-100" /> : 
                      item.node.ext.endsWith("gif") ? 
                      <img key={`gallery-${i}`} src={item.node.publicURL} className="w-100" /> :
                      <video key={`gallery-${i}`} muted autoPlay loop className="w-100"><source src={item.node.publicURL} type="video/mp4" /></video>
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
                  <Col lg={"6"} md={"6"} sm={"6"} className="mb-4" key={`gallery-${i}`}>
                    {Array.isArray(item) ?
                      <Slider {...sliderSettings}>
                        {item.map((slide, j) => (
                          slide.node.ext.endsWith("gif") ? 
                          <img key={`gallery-${i}-slide-${j}`} src={slide.node.publicURL} className="w-100" /> :
                          <GatsbyImage key={`gallery-${i}-slide-${j}`} image={slide.node.childImageSharp.gatsbyImageData} className="w-100" />
                        ))}
                      </Slider>
                      : item.node.childImageSharp ? 
                      <GatsbyImage key={`gallery-${i}`} image={item.node.childImageSharp.gatsbyImageData} className="w-100" /> : 
                      item.node.ext.endsWith("gif") ? 
                      <img key={`gallery-${i}`} src={item.node.publicURL} className="w-100" /> :
                      <video key={`gallery-${i}`} muted autoPlay loop className="w-100"><source src={item.node.publicURL} type="video/mp4" /></video>
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
