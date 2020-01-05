module.exports = {
  siteMetadata: {
    title: `rrajputphotography`,
    description: `Have a look at my portfolio of photograhy gifted by apsrcreatix.`,
    author: `@apsrcreatix`,
  },
  plugins: [
    {
      resolve: 'gatsby-source-instagram',
      options: {
        username: 'rrajputphotography',
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },

    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `rrajputphotography`,
        short_name: `rrajputphotography`,
        start_url: `/`,
        background_color: `royalblue`,
        theme_color: `royalblue`,
        display: `standalone`,
        // icon: `static/icon_640.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        defaultLayouts: {
          default: require.resolve("./src/components/layout.js"),
        },
      },
    },
    
  ],
}
