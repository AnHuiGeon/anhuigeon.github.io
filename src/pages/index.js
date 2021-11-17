import * as React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby";
import Seo from "../components/seo";
import PostList from "../components/postList";
// import styled from "styled-components";

const IndexPage = ({ data }) => {
  console.log('data:',data)
  return (
    <Layout>
      <Seo
      title={data.site.siteMetadata.title}
      />
      <PostList />
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