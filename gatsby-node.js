/**
 * Implement Gatsby's Node APIs in this file.
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require('path')

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions

    const res = await graphql(`
        query {
            allMarkdownRemark {
                edges {
                    node {
                        frontmatter {
                            slug
                        }
                    }
                }
            }
        }
    `)
      


    res.data.allMarkdownRemark.edges.forEach((edge) => {
        createPage({
            component: path.resolve(`./src/components/postLayout.js`),
            path: `/posts${edge.node.frontmatter.slug}`,
            context: {
                slug: edge.node.frontmatter.slug,
            }
        })
    })
}