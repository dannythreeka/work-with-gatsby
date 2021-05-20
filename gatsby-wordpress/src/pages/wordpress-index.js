import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"

export default function WordPressIndex({ data }) {
  //highlight-line
  return (
    <Layout>
      <Seo title="WordPress Index" />
      <h1>My WordPress Blog</h1>
      {data.allWpPost.nodes.map(node => (
        <div>
          <p>{node.title}</p>
          <div dangerouslySetInnerHTML={{ __html: node.excerpt }} />
        </div>
      ))}
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    allWpPost(sort: { fields: [date] }) {
      nodes {
        title
        excerpt
        slug
      }
    }
  }
`