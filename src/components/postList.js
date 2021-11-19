import React from "react";
import PostCard from "./postCard";
// import { graphql } from "gatsby";

const PostList = ({data}) => {
  return (
    <PostCard />
  )
}

export default PostList

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