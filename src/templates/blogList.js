import React from "react";
import { graphql } from "gatsby";

import Seo from "../components/seo"
import PostList from "../components/posts/postList";

const BlogListTemplate = ({pageContext, data}) => {
  return (
    <>
      <Seo title={data.site.siteMetadata.title}/>
      <PostList allData={data.allMarkdownRemark.edges} pageContext={pageContext} />
    </>
  )
}

export default BlogListTemplate

export const pageQuery = graphql`
query blogPageQuery($skip: Int, $limit: Int) {
  site {
    siteMetadata {
      title
    }
  }
  allMarkdownRemark(
    sort: { fields: [frontmatter___date], order: DESC }
    limit: $limit
    skip: $skip
  ) {
    edges {
      node {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "YYYY, MMM DD")
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