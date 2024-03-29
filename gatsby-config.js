module.exports = {
  siteMetadata: {
    name: `DAYMARK`,
    tagline: `DAYMARK`
  },
  plugins: [
    `gatsby-plugin-remove-trailing-slashes`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-tslint`,
    `gatsby-plugin-transition-link`,
    `gatsby-transformer-json`,
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        typeName: 'Json',
        path: './src/data/',
      },
    },

  ],
}
