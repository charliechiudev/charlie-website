import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import Slider from "react-slick";
import styled from "styled-components";
import { Container } from "react-bootstrap";
import { Section } from "../../components/Core";

const SectionStyled = styled(Section)`
  margin-right: -1.4rem;

  &.grayscale img {
    transition: 0.3s;
    filter: grayscale(100%) brightness(90%) contrast(80%);
    
  }
  &.grayscale img:hover {
    filter: none;
  }
`;

const Slideshow = () => {
  const sliderSettings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    accessibility: true,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  const data = useStaticQuery(graphql`
    query {
      allFile(filter: {name: {regex: "/^travel-.-/"}, extension: {regex: "/(jpg)|(jpeg)|(png)/"}, sourceInstanceName: {eq: "dataImages"}}, sort: {name: ASC}) {
        edges {
          node {
            ext
            name
            publicURL
            childImageSharp {
              gatsbyImageData(width: 640, quality: 95)
            }
          }
        }
      }
    }`);

  return (
    <SectionStyled className="mt-4 mb-0 pt-4 pb-4 grayscale">
      <Slider {...sliderSettings}>
        {data.allFile.edges.map((slide, j) => (
          <div key={`slide-${j}`} className="pr-4">
            <GatsbyImage image={slide.node.childImageSharp.gatsbyImageData} />
          </div>
        ))}
      </Slider>
    </SectionStyled>
  );
};

export default Slideshow;
