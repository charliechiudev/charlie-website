import { createGlobalStyle } from "styled-components";

const globalStyle = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.colors.bg} !important;
    color: ${({ theme }) => theme.colors.text} !important;
  }

  a {
    color: ${({ theme }) => theme.colors.heading} !important;
    &:hover, &:active, &:focus{
      color: ${({ theme }) => theme.colors.primary} !important;
    }
  }
`;

export default globalStyle;
