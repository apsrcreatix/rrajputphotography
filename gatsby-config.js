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
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: "UA-155308852-1",
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: false,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
        // Avoids sending pageview hits from custom paths
        exclude: ["/preview/**", "/do-not-track/me/too/"],
        // Delays sending pageview hits on route update (in milliseconds)
        pageTransitionDelay: 0,

        cookieDomain: "rrajputphotography.com",
      },
    },
    

  ],
}
