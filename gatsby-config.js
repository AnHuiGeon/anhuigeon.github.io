module.exports = {
  siteMetadata: {
    siteUrl: "https://anhuigeon.github.io",
    title: "blog | HuiGeon An",
    author : "HuiGeon An",
    description: "junior developer",
    social: {
      email: "dkslrjsl@gmail.com",
      facebook: "https://www.facebook.com/dndodl",
      instagram: "https://www.instagram.com/ahn_hg/",
      twitter: "",
      linkedin: "",
      github: "https://github.com/AnHuiGeon",
    },
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/images`,
        name: `img`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "G-7PSDS3S4B7",
      },
    },
    "gatsby-plugin-styled-components",
    "gatsby-plugin-react-helmet",
    "gatsby-transformer-remark",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp"
  ],
};
