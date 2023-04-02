const siteUrl = 'https://jamstack.wtf';

module.exports = {
  siteMetadata: {
    title: 'WTF is Jamstack?',
    author: 'Stackbit',
    description:
      'Jamstack has revolutionized the way we build for the web by providing a simpler developer experience, better performance, lower cost, and greater scalability.',
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
      resolve: 'gatsby-plugin-google-gtag',
      options: {
        trackingIds: ['G-PXXEGE47R8'],
      },
    },
    /*
    {
      resolve: 'gatsby-plugin-segment-js',
      options: {
        prodKey: 'xNJvH4ktNfpAXwFVGDyrU9gpGGH7Whri',
        trackPage: true,
      },
    },
    */
  ],
};
