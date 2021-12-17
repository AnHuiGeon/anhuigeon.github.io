import React from "react";
import { graphql } from "gatsby";

import Seo from "../components/seo"
import PostContent from "../components/posts/postContent";

const BlogPostTemplate = ({pageContext, data}) => {
  return (
    <>
      <Seo title={data.site.siteMetadata.title}/>
      <PostContent data={data} />
    </>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "YYYY, MMM DD")
        tags
        img {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED, layout: FULL_WIDTH, formats: [AUTO, AVIF, WEBP])
          }
        }
      }
    }
  }
`