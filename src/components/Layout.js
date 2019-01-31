import React from 'react';
import Helmet from 'react-helmet';
import { Link } from 'gatsby';
import styled, { createGlobalStyle, keyframes } from 'styled-components/macro';
import { Flex, Box } from 'rebass';
import { J, A, M } from '../icons';
import { pink } from '../styles/colors';

function Layout({ children }) {
  return (
    <Wrapper>
      <Helmet />

      {children}
      <GlobalStyle />
    </Wrapper>
  );
}

export default Layout;

const GlobalStyle = createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
	}

	body {
		font-family: -apple-system, BlinkMacSystemFont, sans-serif;
		line-height: 1.5;
		font-size: 18px;
	}

	::selection {
		background-color: ${pink}
	}

	a {
		text-decoration: none;
		color: inherit;
	}

	h1,
	h2,
	h3,
	h4 {
		font-weight: 400;
	}

	ul {
		list-style: none;
	}

`;

const Wrapper = styled.div`
  padding: 0;
  margin: 0 auto;
`;
