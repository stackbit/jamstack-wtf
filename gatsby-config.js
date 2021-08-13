const siteUrl = 'https://jamstack.wtf';

module.exports = {
  siteMetadata: {
    title: 'Jamstack WTF',
    author: 'Stackbit',
    description: 'A simple guide to help you get started with the Jamstack',
    siteUrl,
    social: {
      twitter: '@stackbit',
    },
  },
  pathPrefix: '/',
  plugins: [
    'gatsby-plugin-catch-links',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-netlify',
    'gatsby-plugin-sitemap',
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl,
      },
    },
    {
      resolve: 'gatsby-plugin-segment-js',
      options: {
        prodKey: 'xNJvH4ktNfpAXwFVGDyrU9gpGGH7Whri',
        trackPage: true,
      },
    },
  ],
};
