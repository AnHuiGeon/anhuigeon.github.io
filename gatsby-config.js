module.exports = {
  siteMetadata: {
    siteUrl: "https://www.anhuigeon.github.io",
    title: "blog | HuiGeon An",
    author : "HuiGeon An",
    description: "junior developer",
    email: "dkslrjsl@gmail.com",
    facebookUrl: "https://www.facebook.com/dndodl",
    instagramUrl: "https://www.instagram.com/ahn_hg/",
    twitterUrl: "",
  },
  plugins: [
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "G-7PSDS3S4B7",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    "gatsby-plugin-styled-components",
    "gatsby-plugin-react-helmet",
    "gatsby-transformer-remark",
  ],
};
