module.exports = {
  siteMetadata: {
    title: `Gatsby with Wordpress`,
    description: `This is a sample site to integrate the Gatsby with Wordpress as headless CMS`,
    author: `@dannythreeka`,
  },
  plugins: [
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        // The base url to your WP site.
        // baseUrl: 'untidying-scenes.000webhostapp.com', // 
        // the only required plugin option for WordPress is the GraphQL url.
        url:
          process.env.WPGRAPHQL_URL ||
          `https://untidying-scenes.000webhostapp.com/graphql`,
        // WP.com sites set to true, WP.org set to false
        hostingWPCOM: false,
        // The protocol. This can be http or https.
        protocol: 'https',
        // Use 'Advanced Custom Fields' WordPress plugin
        useACF: false,
        auth: {},
        // Set to true to debug endpoints on 'gatsby build'
        verboseOutput: true,
        includedRoutes: [
          "**/categories",
          "**/posts",
          "**/pages",
          "**/media",
          "**/taxonomies",
          "**/users",
          "**/tags",
        ],
      },
      type: {
        __all: {
          limit: process.env.NODE_ENV === `development` ? 50 : null
        },
        develop: {
          hardCacheMediaFiles: true,
        }
      }
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
