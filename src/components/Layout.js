import React from 'react';
import Helmet from 'react-helmet';
import styled, { createGlobalStyle } from 'styled-components/macro';

function Layout({ children }) {
  return (
    <Wrapper>
      <Helmet>
        <title>JAMstack Cheatsheet</title>
      </Helmet>
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
		background-color: #000;
		color: white;
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
  margin: 0 auto;
`;
