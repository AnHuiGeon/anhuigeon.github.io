import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";

import { device } from "../../styles/device";

const PostCard = ({node}) => {
  return (
    <PostBox>
      <Link to={'/'+node.frontmatter.categories+node.fields.slug} >
        <ImgBox>
        {node.frontmatter.img &&
          node.frontmatter.img.childImageSharp &&
          node.frontmatter.img.childImageSharp.gatsbyImageData
          ?<ImgContent
            style={{
              backgroundImage: `url(${node.frontmatter.img.childImageSharp.gatsbyImageData.images.fallback.src})`,
            }}></ImgContent>
          :<ImgContent>no image</ImgContent>
        }
        </ImgBox>
        <TextBox>
          <Texts>제목: {node.frontmatter.title}</Texts>
          <Texts>분류: {node.frontmatter.categories}</Texts>
          <Texts>날짜: {node.frontmatter.date}</Texts>
        </TextBox>
      </Link>
    </PostBox>
  )
}

export default PostCard
const ImgContent = styled.div`
width: 100%;
height: 20vh;
text-align: center;
line-height: 20vh;
background-size: 101% 100%;
background-repeat: no-repeat;
background-color: var(--color-background-3);
color: var(--color-text);
transition: .3s;
`;
const ImgBox = styled.div`
overflow: hidden;
transition: 0.3s;
`;
const Texts = styled.div`
padding: 1% 1% 0 1%;
overflow: hidden;
white-space: nowrap;
text-overflow: ellipsis;
`;
const TextBox = styled.div`
padding: 1%;
background-color: var(--color-background-2);
`;
const PostBox = styled.div`
border-radius: 5%;
overflow: hidden;
margin: 1%;
width: 48%;
&:hover{
    ${ImgBox} {
      z-index: 10;
      opacity: 0.8;
    }
    ${ImgContent} {
    transform: scale(1.05);
  }
}
`;