const path = require(`path`)
const _ = require('lodash');
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return graphql(`
  {
    allMarkdownRemark(
      sort: {fields: [frontmatter___date], order: DESC}
      limit: 1000
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            tags
            categories
            img {
              childImageSharp {
                gatsbyImageData(placeholder: BLURRED, layout: FULL_WIDTH)
              }
            }
          }
        }
      }
    }
  }
  `
  ).then(result => {
    if (result.errors) {
      throw result.errors
    }

    // posts pages.
    const allPosts = result.data.allMarkdownRemark.edges

    allPosts.forEach((post, index) => {
      const previous = index === allPosts.length - 1 ? null : allPosts[index + 1].node
      const next = index === 0 ? null : allPosts[index - 1].node

      createPage({
        path: `/${_.kebabCase(post.node.frontmatter.categories)}`+post.node.fields.slug,
        component: path.resolve('./src/templates/blogPost.js'),
        context: {
          slug: post.node.fields.slug,
          previous,
          next,
        },
      })
    })

    // all post list pages
    const postsPerPage = 10
    const numPages = Math.ceil(allPosts.length / postsPerPage)

    Array.from({ length: numPages }).forEach((_, i) => {
      createPage({
        path: i === 0 ? `/` : `/${i + 1}`,
        component: path.resolve("./src/templates/blogList.js"),
        context: {
          limit: postsPerPage,
          skip: i * postsPerPage,
          numPages,
          currentPage: i + 1,
        },
      })
    })

    // Create Categories list
    let categories = {};
    _.each(allPosts, edge => {
      if (_.get(edge, 'node.frontmatter.categories')) {
        if(! categories[edge.node.frontmatter.categories]){
          categories[edge.node.frontmatter.categories] = {counter:1}
        }else{
          categories[edge.node.frontmatter.categories].counter += 1
        }
        if(! categories[edge.node.frontmatter.categories]["name"]){
          categories[edge.node.frontmatter.categories]["name"] = edge.node.frontmatter.categories
        }
      }
    });

    // Create Categories numPages
    _.each(categories, category => {
      category["numPages"] = Math.ceil(category.counter / postsPerPage)
    })

    // Make categories pages
    _.each(categories, category => {
      Array.from({ length: category.numPages }).forEach((el, i) => {
        createPage({
          path: i === 0 ? `/${_.kebabCase(category.name)}/` : `/${_.kebabCase(category.name)}/${i + 1}`,
          component: path.resolve('./src/templates/categoryList.js'),
          context: {
            limit: postsPerPage,
            skip: i * postsPerPage,
            numPages: category.numPages,
            currentPage: i + 1,
            category: category.name,
          }
        })
      })
    })

    // // create Categories pages
    // let categories = [];
    // _.each(allPosts, edge => {
    //   if (_.get(edge, 'node.frontmatter.categories')) {
    //     categories = categories.concat(edge.node.frontmatter.categories);
    //   }
    // });
    // categories = _.uniq(categories);
    // // Make categories pages
    // categories.forEach(category => {
    //   createPage({
    //     path: `/${_.kebabCase(category)}/`,
    //     component: path.resolve('./src/templates/categoryList.js'),
    //     context: {
    //       category,
    //     }
    //   })
    // })

  });
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}