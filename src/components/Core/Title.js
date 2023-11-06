import React from "react";
import styled from "styled-components";
import { color, space, typography, shadow } from "styled-system";
import { device } from "../../utils";

const SectionTitle = styled.h2`
  font-weight: 700;
  
  font-size: 40px;
  line-height: 54px;
  margin-bottom: 0;

  @media ${device.sm} {
    font-size: 50px;
    line-height: 62px;
  }

  @media ${device.lg} {
    font-size: 50px;
    line-height: 50px;
  }

  ${color};
  ${space};
  ${typography};
  ${shadow};
`;

const SectionSm = styled(SectionTitle)`
  
  font-size: 2.125rem;
  line-height: 1.115;

  @media ${device.sm} {
    font-size: 2.5rem;
    line-height: 1.225;
    
  }

  @media ${device.lg} {
    font-size: 3rem;

    line-height: 1.25;
  }

  ${color};
  ${space};
  ${typography};
  ${shadow};
`;

const HeroTitle = styled(SectionTitle)`
  
  font-size: 5rem;
  letter-spacing: -3px;
  font-weight: normal;
  line-height: .8;

  &.charlie-home-hero {
    margin-top: 1rem;
    text-indent: -0.5rem;
  }

  @media ${device.sm} {
    font-size: 8rem;
    letter-spacing: -4px;
    &.charlie-home-hero {
      margin-top: 1rem;
      text-indent: -1rem;
    }
  }

  @media ${device.lg} {
    font-size: 10rem;
    letter-spacing: -6px;
    &.charlie-home-hero {
      margin-top: 1rem;
      text-indent: -3rem;
    }
  }

  @media ${device.xl} {
    font-size: 14rem;
    letter-spacing: -8px;
    &.charlie-home-hero {
      margin-top: 1rem;
      text-indent: -3rem;
    }
  }
`;

const CardTitle = styled.h4`
  font-size: 1.3125rem;
  font-weight: normal;
  
  line-height: 1;
  ${color};
  ${space};
  ${typography};
  ${shadow};
`;

const CardTitleSm = styled(CardTitle)`
  font-size: 1.0625rem;
  
  line-height: 1;
  ${color};
  ${space};
  ${typography};
  ${shadow};
`;

const CardTitleLg = styled(CardTitle)`
  font-size: 1.5rem;
  line-height: 1.42;
  ${color};
  ${space};
  ${typography};
  ${shadow};
`;

const CardTitleBig = styled(CardTitle)`
  font-size: 1.5rem;
  @media ${device.lg} {
    font-size: 2rem;
  }
  ${color};
  ${space};
  ${typography};
  ${shadow};
`;

const Title = ({ variant, ...rest }) => {
  let TitleStyled = SectionTitle;

  switch (variant) {
    case "card":
      TitleStyled = CardTitle;
      break;
    case "cardSm":
      TitleStyled = CardTitleSm;
      break;
    case "cardLg":
      TitleStyled = CardTitleLg;
      break;
    case "cardBig":
      TitleStyled = CardTitleBig;
      break;
    case "hero":
      TitleStyled = HeroTitle;
      break;
    case "secSm":
      TitleStyled = SectionSm;
      break;
    default:
      TitleStyled = SectionTitle;
  }

  return <TitleStyled color="heading" {...rest} />;
};

export default Title;
