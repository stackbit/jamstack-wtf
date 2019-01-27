import React from 'react';
import Helmet from 'react-helmet';
import { createGlobalStyle } from 'styled-components/macro';
import { Flex, Box } from 'rebass';
import { J, A, M } from '../icons';
import { pink } from '../styles/colors';

function Layout({ children }) {
  return (
    <>
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css?family=Inconsolata:400,700"
          rel="stylesheet"
        />
      </Helmet>
      <Box mx="auto">
        <Flex flexDirection="column" alignItems="center" py={[3, 4]}>
          <J width="48px" />
          <A width="48px" />
          <M width="48px" />
        </Flex>
        {children}
      </Box>
      <GlobalStyle />
    </>
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



`;
