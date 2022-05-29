import React from "react";
import { graphql } from "gatsby";

import Seo from "../components/seo"
import PostList from "../components/posts/postList";

const CategoryList = ({ pageContext, data }) => {
  return (
    <>
      <Seo title={data.site.siteMetadata.title}/>
      <PostList allData={data.allMarkdownRemark.edges} pageContext={pageContext} />
    </>
  )
}

export default CategoryList

export const pageQuery = graphql`
query CategoryPostBySlug($category: String, $skip: Int, $limit: Int) {
  site {
    siteMetadata {
      title
    }
  }
  allMarkdownRemark(
    sort: { fields: [frontmatter___date], order: DESC }
    limit: $limit
    skip: $skip
    filter: { frontmatter: { categories: { in: [$category] } } }
  ) {
    totalCount
    edges {
      node {
        excerpt
        fields {
          slug
        }
        timeToRead
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          categories
          img {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED,
                layout: FULL_WIDTH,
                formats: [AUTO, AVIF, WEBP])
            }
          }
        }
      }
    }
  }
}
`