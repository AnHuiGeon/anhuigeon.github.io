import React from "react";
import { graphql } from "gatsby";

import Seo from "../components/seo"
import IndexPage from "./index";

const BlogPostTemplate = ({pageContext, data}) => {
  return (
    <IndexPage>
      <Seo title={data.site.siteMetadata.title}/>
      <div>BlogPostTemplate</div>
    </IndexPage>
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