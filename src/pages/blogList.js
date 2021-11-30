import React from "react";
import { graphql } from "gatsby";

import Seo from "../components/seo"
import IndexPage from "./index";

const BlogListTemplate = ({pageContext, data}) => {
  console.log('blogList data:',data)
  console.log('blogList pageContext:',pageContext)
  return (
    <IndexPage data={data}>
      <Seo/>
      <div>BlogListTemplate</div>
    </IndexPage>
  )
}

export default BlogListTemplate

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