const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)
exports.onCreateNode = ({ node, getNode, actions }) => {
    const { createNodeField } = actions
    if (node.internal.type === `MarkdownRemark`) {
        const slug = createFilePath({ node, getNode, basePath: `pages` })
        createNodeField({
            node,
            name: `slug`,
            value: slug,
        })
    }
}

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const result = await graphql(`
      query {
        allMarkdownRemark {
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
        allWpPost(sort: { fields: [date] }) {
            nodes {
              title
              excerpt
              content
              slug
            }
          }
      }
    `)
    // console.log(JSON.stringify(result, null, 4))

    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
        createPage({
            path: node.fields.slug,
            component: path.resolve(`./src/templates/blog-posts-markdown.js`),
            context: {
                // Data passed to context is available
                // in page queries as GraphQL variables.
                slug: node.fields.slug,
            },
        })
    })

    result.data.allWpPost.nodes.forEach(node => {
        createPage({
            path: node.slug,
            component: path.resolve(`./src/templates/blog-posts-wordpress.js`),
            context: {
                slug: node.slug,
            },
        })
    })
}