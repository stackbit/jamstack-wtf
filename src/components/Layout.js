import React from 'react';
import Helmet from 'react-helmet';
import ReactGA from 'react-ga';
import styled, { createGlobalStyle } from 'styled-components/macro';
import { color } from '../styles/colors';

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
      <Wrapper>
        <Helmet>
          <title>JAMstack Cheatsheet</title>
          <meta
            name="description"
            content="A simple guide to help you get on the JAMstack"
          />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@peduarte" />
          <meta name="twitter:creator" content="@peduarte" />
          <meta name="twitter:title" content="JAMstack Cheatsheet" />
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
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=UA-28314827-7"
        />
      </Wrapper>
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
