import * as React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby";
import SEO from "../components/seo";
// import styled from "styled-components";

const IndexPage = ({ data }) => {
  console.log('data:',data)
  return (
    <Layout>
      <SEO
      title={data.site.siteMetadata.title}
      />
      <div>index</div>
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