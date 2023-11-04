import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import GatsbyImage from 'gatsby-image';
import styled from "styled-components";
import { Box, Title, Text } from "../Core";

const WorkBox = styled(Box)`
  & img {
    transition: 0.3s;
    filter: grayscale(100%) brightness(90%) contrast(80%);
    
  }
  &:hover img {
    filter: none;
  }
`;
const TextBox = styled(Box)`
  position: absolute;
  overflow: hidden;
  bottom: 0px;
  left: 20px;
  right: 20px;
  opacity: 0;
  border-radius: 8px;
  z-index: 1;
  padding: 1.25rem 1.875rem;
  transition: 0.4s;
  &::before {
    position: absolute;
    content: "";
    background: ${({ theme }) => theme.colors.bg};
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    opacity: 0.9;
  }
  ${WorkBox}:hover & {
    bottom: 20px;
    opacity: 1;
  }
`;

const WorkCardGql = ({ workItem, ...rest }) => {
  const images = useStaticQuery(graphql`
    query {
      allFile(
        filter: {extension: {regex: "/(jpg)|(jpeg)|(png)/"}, sourceInstanceName: {eq: "dataImages"}}
      ) {
        edges {
          node {
            childImageSharp {
              fluid(maxWidth: 500, quality: 90) {
                originalName
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }`);

  const matchedImage = images.allFile.edges.find((edge) => edge.node?.childImageSharp?.fluid.originalName === workItem.thumbnail);
  
  return (
  <WorkBox className="position-relative" {...rest}>
    <Link to={workItem.slug} className="d-block">
      {matchedImage && <GatsbyImage fluid={matchedImage.node.childImageSharp.fluid} className="w-100" />}
    </Link>

    <TextBox>
      <Text variant="tag" mb={2}>
        {workItem.categories.filter(cat => cat !== "case study").join(", ")}
      </Text>
      <Title variant="card">
        <Link to={workItem.slug}>{workItem.title} </Link>
      </Title>
    </TextBox>
  </WorkBox>
)};

export default WorkCardGql;
