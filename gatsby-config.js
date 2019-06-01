module.exports = {
  siteMetadata: {
    title: `@bytom/<%= proj_name %>`,
    description: `@bytom/<%= proj_des %>`,
    author: `bytom`,
    siteUrl: 'http://localhost:8128',
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: `/sitemap.xml`,
      }
    },
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
        name: `Bytom`,
        short_name: `bytom`,
        start_url: `/`,
        icon: `src/images/favicon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
    {
      resolve: `gatsby-plugin-favicon`,
      options: {
        logo: './src/images/favicon.png',
        icons: {
          favicons: true,
        }
      }
    },
  ],
}
