import React from "react";
import { graphql } from "gatsby";

import Seo from "../components/seo"
import IndexPage from "./index";

const BlogListTemplate = ({pageContext, data}) => {
  console.log('blogList data:',data)
  console.log('blogList pageContext:',pageContext)
  return (
    <IndexPage>
      <Seo title={data.site.siteMetadata.title}/>
      <div>BlogListTemplate</div>
    </IndexPage>
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
        timeToRead
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
// export const pageQuery = graphql`
//   query blogPageQuery($skip: Int!, $limit: Int!) {
//     site {
//       siteMetadata {
//         title
//       }
//     }
//     allMarkdownRemark(
//       sort: { fields: [frontmatter___date], order: DESC }
//       limit: $limit
//       skip: $skip
//     ) {
//       edges {
//         node {
//           excerpt
//           fields {
//             slug
//           }
//           timeToRead
//           frontmatter {
//             date(formatString: "YYYY, MMM DD")
//             title
//             categories
//             img {
//               childImageSharp {
//                 gatsbyImageData(placeholder: BLURRED,
//                   layout: FULL_WIDTH,
//                   formats: [AUTO, AVIF, WEBP])
//               }
//             }
//           }
//         }
//       }
//     }
//   }
// `