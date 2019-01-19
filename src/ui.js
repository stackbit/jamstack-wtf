import React from "react";
import { ComponentProvider } from "mdx-go";
import styled, { css, createGlobalStyle, keyframes } from "styled-components";

const isAbsoluteUrl = url => /^https?:\/\/|^\/\//i.test(url);
const highlightColor = "hsla(0, 80%, 50%, 1)";

const GlobalStyle = createGlobalStyle`
  :root {
    --space: 32px;
    --type: 20px;
    --primary-color: hsla(1, 100%, 100%, 1);
    --secondary-color: hsla(0, 0%, 0%, .99);
    --highlight-color: ${highlightColor};
  }

  @media(min-width: 40em) {
    :root {
      --space: 64px;
      --type: 24px;
    }
  }

  @media(min-width: 52em) {
    :root {
      --space: 128px;
      --type: 32px;
    }
  }

  ::selection {
    background: var(--secondary-color);
    color: var(--primary-color);
    opacity: 0;
  }
`;

const show = keyframes`
    0% { opacity: 0 }
    100% { opacity: 1 }
  }
`;

const Base = styled.div`
  font-size: var(--type);
  font-weight: 700;
  line-height: 1.5;
  padding: var(--space);
  background-color: var(--primary-color);
  color: var(--secondary-color);
  animation: ${show} 2s ease both;

  @media (max-width: 40em) {
    padding-top: calc(var(--space) * 3);
    padding-bottom: calc(var(--space) * 3);
  }
`;

const components = {};

export const Root = ({ children }) => (
  <ComponentProvider components={components}>
    <GlobalStyle />
    <Base>{children}</Base>
  </ComponentProvider>
);
