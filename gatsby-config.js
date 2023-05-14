/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: "Amatic SC", // 'font-family' property
              variants: ["300", "400", "500", "700"],
              //subsets: ['latin'],
              //text: 'Hello',
              //fontDisplay: 'swap' || 'auto' || 'block' || 'fallback' || 'optional',
              //strategy: 'selfHosted' || 'base64' || 'cdn',
              // Other properties as per https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face (except 'src' & 'font-family') can go here i.e.
              //[cssProperty]: 'value',
            },
            {
              family: "Fredoka One", // 'font-family' property
              variants: ["300", "400", "500", "700"],
              //subsets: ['latin'],
              //text: 'Hello',
              //fontDisplay: 'swap' || 'auto' || 'block' || 'fallback' || 'optional',
              //strategy: 'selfHosted' || 'base64' || 'cdn',
              // Other properties as per https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face (except 'src' & 'font-family') can go here i.e.
              //[cssProperty]: 'value',
            },
            {
              family: "Tilt Warp", // 'font-family' property
              variants: ["300", "400", "500", "700"],
              //subsets: ['latin'],
              //text: 'Hello',
              //fontDisplay: 'swap' || 'auto' || 'block' || 'fallback' || 'optional',
              //strategy: 'selfHosted' || 'base64' || 'cdn',
              // Other properties as per https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face (except 'src' & 'font-family') can go here i.e.
              //[cssProperty]: 'value',
            },
            {
              family: "Poppins", // 'font-family' property
              variants: ["300", "400", "500", "700"],
              //subsets: ['latin'],
              //text: 'Hello',
              //fontDisplay: 'swap' || 'auto' || 'block' || 'fallback' || 'optional',
              //strategy: 'selfHosted' || 'base64' || 'cdn',
              // Other properties as per https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face (except 'src' & 'font-family') can go here i.e.
              //[cssProperty]: 'value',
            },
            {
              family: "Work Sans", // 'font-family' property
              variants: ["300", "400", "500", "700"],
              //subsets: ['latin'],
              //text: 'Hello',
              //fontDisplay: 'swap' || 'auto' || 'block' || 'fallback' || 'optional',
              //strategy: 'selfHosted' || 'base64' || 'cdn',
              // Other properties as per https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face (except 'src' & 'font-family') can go here i.e.
              //[cssProperty]: 'value',
            },
          ],
        },
      },
    },
  ],
};
