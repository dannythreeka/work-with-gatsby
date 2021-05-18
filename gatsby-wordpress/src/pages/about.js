import * as React from "react"
import { graphql } from "gatsby"

export default function About({ data }) {
    return (
        <main>
            <title>About Me</title>
            <div>
                <h1 >
                    Amazing Pandas Eating Things</h1>
                <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
                {data.allMarkdownRemark.edges.map(({ node }) => (
                    <div key={node.id}>
                        <h3 >
                            {node.frontmatter.title}{" "}
                            <span >
                                — {node.frontmatter.date}
                            </span>
                        </h3>
                        <p>{node.excerpt}</p>
                    </div>
                ))}
            </div>
        </main >
    )
}

export const query = graphql`
  query {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          excerpt
        }
      }
    }
  }
`