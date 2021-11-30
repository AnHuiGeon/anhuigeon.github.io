import * as React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby";
import { Helmet } from "react-helmet";

const IndexPage = ({ children, data }) => {
  console.log('index.js data:',data)
  return (
    <Layout data={data}>
      <Helmet />
      {children}
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
query {
  site {
    siteMetadata {
      title
      author
      description
      social {
        twitter
        facebook
        linkedin
        github
        instagram
        email
      }
    }
  }
  tagsGroup: allMarkdownRemark {
    group(field: frontmatter___tags) {
      totalCount
    }
  }
  categoriesGroup: allMarkdownRemark {
    group(field: frontmatter___categories) {
      fieldValue
      totalCount
    }
  }
}
`