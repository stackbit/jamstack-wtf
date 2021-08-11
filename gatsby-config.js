module.exports = {
  siteMetadata: {
    title: 'Jamstack WTF',
    author: 'Pedro Duarte',
    description: 'A simple guide to help you get on the Jamstack',
    siteUrl: 'https://jamstack.wtf',
    social: {
      twitter: '@peduarte',
    },
  },
  pathPrefix: '/',
  plugins: [
    'gatsby-plugin-catch-links',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-netlify',
    {
      resolve: 'gatsby-plugin-segment-js',
      options: {
        prodKey: 'xNJvH4ktNfpAXwFVGDyrU9gpGGH7Whri',
        trackPage: true,
      },
    },
  ],
};
