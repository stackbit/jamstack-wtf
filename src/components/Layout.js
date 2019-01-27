import React from 'react';
import Helmet from 'react-helmet';
import { Link } from 'gatsby';
import styled, { createGlobalStyle, keyframes } from 'styled-components/macro';
import { Flex, Box } from 'rebass';
import { J, A, M } from '../icons';
import { pink } from '../styles/colors';

const rotate = keyframes`
	0% {
		transform: rotate(0)
	}
	100% {
		transform: rotate(360deg)
	}
`;

function Layout({ children }) {
  return (
    <Wrapper>
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css?family=Inconsolata:400,700"
          rel="stylesheet"
        />
      </Helmet>
      <Box mx="auto">
        <Link to="/">
          <Flex flexDirection="column" alignItems="center" py={[3, 4]}>
            <J
              width="48px"
              css={`
                animation: ${rotate} 50000ms linear both;
              `}
            />
            <A
              width="48px"
              css={`
                animation: ${rotate} 50000ms linear reverse both;
              `}
            />
            <M
              width="48px"
              css={`
                animation: ${rotate} 50000ms linear both;
              `}
            />
          </Flex>
        </Link>
        {children}
      </Box>
      <GlobalStyle />
    </Wrapper>
  );
}

export default Layout;

const GlobalStyle = createGlobalStyle`
	body {
		font-family: 'Inconsolata';
		margin: 0;
		background-color: #f1eee8;
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
`;

const Wrapper = styled.div`
  padding: 0 12px;
  max-width: 960px;
  margin: 0 auto;
`;
