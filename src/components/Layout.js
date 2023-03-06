import React from 'react';
import Helmet from 'react-helmet';
import styled, { createGlobalStyle } from 'styled-components/macro';
import { theme } from '@peduarte/wallop-system';
import metaImage from '../../static/jamstack-wtf-meta.png';

const { NODE_ENV } = process.env;

class Layout extends React.Component {
  render() {
    const { children } = this.props;

    const metaValues = {
      title: 'WTF is Jamstack?',
      description:
        'Jamstack has revolutionized the way we build for the web by providing a simpler developer experience, better performance, lower cost, and greater scalability.',
      image: metaImage,
    };

    return (
      <>
        <Helmet>
          <title>WTF is Jamstack?</title>
          <meta name="description" content={metaValues.description} />

          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@stackbit" />
          <meta name="twitter:creator" content="@stackbit" />
          <meta name="twitter:title" content={metaValues.title} />
          <meta name="twitter:description" content={metaValues.description} />
          <meta name="twitter:url" content="https://jamstack.wtf" />
          <meta name="twitter:image" content={metaValues.image} />

          <meta property="og:title" content={metaValues.title} />
          <meta property="og:description" content={metaValues.description} />
          <meta property="og:image" content={metaValues.image} />

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
