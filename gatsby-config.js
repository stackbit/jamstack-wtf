module.exports = {
  siteMetadata: {
    title: 'JAMstack Cheatsheet',
    author: 'Pedro Duarte',
    description:
      'A straight-to-the-point guide to help you get on the JAMstack.',
    siteUrl: 'https://jamstack-cheatsheet.netlify.com',
    social: {
      twitter: '@peduarte',
    },
  },
  pathPrefix: '/',
  plugins: [
    'gatsby-plugin-catch-links',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content`,
        name: 'content',
      },
    },
    'gatsby-transformer-remark',
  ],
};
