const path = require("path");

module.exports = {
  siteMetadata: {
    title: "Analytics Check",
    description: "Make an Analytics check...with disadvantage.",
    author: "Analytics Check",
    footer: "All rights reserved.",
    siteUrl: "https://analyticscheck.net",
  },
  plugins: [
    {
      resolve: `gatsby-plugin-react-svg`,
      options: {
        rule: {
          include: /svgs/
        }
      }
    },
    `gatsby-plugin-preact`,
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          "G-GNBJQCCY49"
        ],
      }
    },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMdx } }) => {
              return allMdx.edges.map((edge) => {
                return Object.assign({}, edge.node.frontmatter, {
                  description: edge.node.excerpt,
                  date: edge.node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + edge.node.frontmatter.path,
                  guid: site.siteMetadata.siteUrl + edge.node.frontmatter.path,
                  custom_elements: [{ "content:encoded": edge.node.html }],
                });
              });
            },
            query: `
              {
                allMdx(sort: {order: DESC, fields: frontmatter___date}) {
                  edges {
                    node {
                      excerpt
                      frontmatter {
                        date
                        path
                        title
                      }
                      html
                    }
                  }
                }
              }
            `,
            output: "/rss.xml",
            title: "Analytics Check",
          },
        ],
      },
    },
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts`,
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    "gatsby-plugin-theme-ui",
    "gatsby-remark-images",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "gatsby-default-mdx-basic",
        short_name: "starter",
        start_url: "/",
        background_color: "#663399",
        theme_color: "#663399",
        display: "minimal-ui",
        icon: "src/images/icon.png", 
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        defaultLayouts: { default: path.resolve("./src/components/Layout.js") },
        gatsbyRemarkPlugins: [
          `gatsby-remark-katex`,
          `gatsby-remark-smartypants`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1035,
              sizeByPixelDensity: true
            },
          },
        ],
        remarkPlugins: [require("remark-math"), require("remark-html-katex")],
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
};
