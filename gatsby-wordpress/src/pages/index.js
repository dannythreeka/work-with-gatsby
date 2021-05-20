import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"

export default function Home({ data }) {
  return (
    <Layout>
      <Seo title="home" />

      <h1>Welcome to the my space</h1>
      <div>
        <h2 style={{ margin: 0 }}>
          <Link
            to="/wordpress-index"
            style={{
              textDecoration: `none`,
            }}
          >Wordpress Index
        </Link>
        </h2>
        <h2 style={{ margin: 0 }}>
          <Link
            to="/local-md-index"
            style={{
              color: `tomato`,
              textDecoration: `none`,
            }}
          >Local MD File Index
        </Link>
        </h2>
      </div>

    </Layout>
  )
}