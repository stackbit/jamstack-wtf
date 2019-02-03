import React from 'react';
import Helmet from 'react-helmet';
import styled, { createGlobalStyle } from 'styled-components/macro';
import { color } from '../styles/colors';

function Layout({ children }) {
  return (
    <Wrapper>
      <Helmet>
        <title>JAMstack Cheatsheet</title>
        <meta
          name="description"
          content="A simple guide to help you get on the JAMstack."
        />
        <link rel="icon" type="image/png" href="./favicon.png" />
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

	html {
		scroll-behavior: smooth;
	}

	body {
		font-family: -apple-system, BlinkMacSystemFont, sans-serif;
		line-height: 1.5;
		font-size: 18px;
		color: #161314;
	}

	::selection {
		background-color: ${color.turq};
		color: white;
	}

	a {
		text-decoration: underline;
		color: inherit;
	}

	h1,
	h2,
	h3,
	h4 {
		font-weight: 400;
	}

	ul {
		list-style-position: inside
	}

	ol {
		list-style-position: inside
	}

	a {
		transition: all 133ms ease;

		&:hover {
      color: ${color.pink};
    }
	}

`;

const Wrapper = styled.div`
  margin: 0 auto;
`;
