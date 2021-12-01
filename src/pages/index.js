import * as React from "react"
import Layout from "../components/layout"
import { graphql, StaticQuery } from "gatsby";
import { Helmet } from "react-helmet";

const IndexPage = ({ children }) =>  (
  <StaticQuery
  query={graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          author
          description
          social {
            twitter
            facebook
            linkedin
            github
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
  `}
  render={data => (
    <Layout data={data}>
      <Helmet/>
      {children}
    </Layout>
  )}
  />
)
// {
//   console.log('index.js data:',data)
//   return (
//     <Layout data={data}>
//       <Helmet />
//       {children}
//     </Layout>
//   )
// }

export default IndexPage