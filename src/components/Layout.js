import React from 'react';
import Helmet from 'react-helmet';
import ReactGA from 'react-ga';
import styled, { createGlobalStyle } from 'styled-components/macro';
import { theme } from '@peduarte/wallop-system';

const { NODE_ENV } = process.env;

class Layout extends React.Component {
  componentDidMount() {
    if (NODE_ENV === 'production') {
      ReactGA.initialize('UA-28314827-7');
      ReactGA.pageview(window.location.pathname + window.location.search);
    }
  }

  render() {
    const { children } = this.props;

    return (
      <>
        <Helmet>
          <title>WTF is JAMstack?</title>
          <meta
            name="description"
            content="A simple guide to help you get on the JAMstack"
          />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@peduarte" />
          <meta name="twitter:creator" content="@peduarte" />
          <meta name="twitter:title" content="WTF is JAMstack?" />
          <meta
            name="twitter:description"
            content="A simple guide to help you get on the JAMstack"
          />
          <meta name="twitter:url" content="https://jamstack.wtf" />
          <meta
            name="twitter:image"
            content="https://jamstack.wtf/postcard.png"
          />
          <link rel="icon" type="image/png" href="./favicon.png" />
        </Helmet>
        {children}
        <GlobalStyle />
      </>
    );
  }
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

	::selection {
		background-color: ${theme.colors.turq};
		color: white;
	}

	ul, ol {
		list-style-position: inside
	}
`;
