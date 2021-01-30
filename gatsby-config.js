module.exports = {
  siteMetadata: {
    title: 'BackRoads',
    description: 'Explore awesome tours package',
    author: '@piyush',
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
  ],
};
