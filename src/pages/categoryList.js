import React from "react";
import { graphql } from "gatsby";

import Seo from "../components/seo"
import IndexPage from "./index";

const CategoryList = ({ pageContext, data }) => {
  console.log('categoryList data:',data)
  console.log('categoryList pageContext:', pageContext)
  return (
    <IndexPage data={data}>
      <Seo/>
      <div>CategoryList</div>
    </IndexPage>
  )
}

export default CategoryList

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
// query CategoryPostBySlug($category: String) {
//     site {
//         siteMetadata {
//             title
//         }
//     }
//     allMarkdownRemark(
//         limit: 2000
//         sort: { fields: [frontmatter___date], order: DESC }
//         filter: { frontmatter: { categories: { in: [$category] } } }
//     ) {
//         totalCount
//         edges {
//             node {
//                 excerpt
//                 fields {
//                     slug
//                 }
//                 timeToRead
//                 frontmatter {
//                     date(formatString: "MMMM DD, YYYY")
//                     title
//                     categories
//                     img {
//                         childImageSharp {
//                             gatsbyImageData(placeholder: BLURRED,
//                                 layout: FULL_WIDTH,
//                                 formats: [AUTO, AVIF, WEBP])
//                         }
//                     }
//                 }
//             }
//         }
//     }
// }
// `