import * as React from "react"
import { Link } from "gatsby"
// import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const Home = (data) => {
  console.log("AA");
  console.log(JSON.stringify(data));
  console.log("BB");
  return (
    <Layout>
      <Seo title="Home" />
      <h1>My WordPress Blog</h1>
      <h4>Posts</h4>
      <pre>{JSON.stringify(data, null, 4)}</pre>
      {/* {data.allWpPost.nodes.map(node => (
        <div>
          <p>{node.title}</p>
          <div dangerouslySetInnerHTML={{ __html: node.excerpt }} />
        </div>
      ))} */}
      <Link to="/about">About</Link>
    </Layout>
  )
}

export const query = graphql`
  {
    allWpPost {
      nodes {
        id
        title
        excerpt
      }
    }
  }
`

export default Home
