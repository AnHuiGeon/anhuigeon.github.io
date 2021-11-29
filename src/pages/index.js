import * as React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby";
import Seo from "../components/seo";

const IndexPage = ({ children, data }) => {
  return (
    <Layout data={data}>
      <Seo
      title={data.site.siteMetadata.title}
      />
      {children}
    </Layout>
  )
}

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

export default IndexPage