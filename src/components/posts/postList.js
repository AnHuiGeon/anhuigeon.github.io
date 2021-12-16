import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";

import { device } from "../../styles/device";

const PostList = ({allData, pageContext}) => {
  return (
    <Container>
      {allData.map(({ node }) => {
        return (
          <PostBox key={node.fields.slug}>
            <Link
            to={'/'+node.frontmatter.categories+node.fields.slug}
            >
              {node.frontmatter.img &&
                node.frontmatter.img.childImageSharp &&
                node.frontmatter.img.childImageSharp.gatsbyImageData
                ?<ImgBox
                  style={{
                    backgroundImage: `url(${node.frontmatter.img.childImageSharp.gatsbyImageData.images.fallback.src})`,
                  }}></ImgBox>
                :<ImgBox>no image</ImgBox>
              }
              <TextBox>
                <Title>제목: {node.frontmatter.title}</Title>
                <Category>분류: {node.frontmatter.categories}</Category>
                <Date>날짜: {node.frontmatter.date}</Date>
              </TextBox>
            </Link>
          </PostBox>
        )
      })}
    </Container>
  )
}

export default PostList
const ImgBox = styled.div`
width: 100%;
height: 20vh;
text-align: center;
line-height: 20vh;
background-size: 100% 100%;
background-repeat: no-repeat;
background-color: var(--color-background-3);
border-radius: 10px 10px 0 0;
color: #fff;
`;
const Date = styled.div`
overflow: hidden;
`;
const Category = styled.div`
overflow: hidden;
`;
const Title = styled.div`
overflow: hidden;
`;
const TextBox = styled.div`
overflow: hidden;
height: 40%;
background-color: var(--color-background-2);
border-radius: 0 0 10px 10px;
`;
const PostBox = styled.div`
margin: 1%;
width: 48%;
height: 20%;
border-collapse: separate;
@media ${device.desktop}{
}
@media ${device.laptop}{
}
@media ${device.tablet}{
}
@media ${device.mobile}{
}
`;
const Container = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
width: 100%;
height: fit-content;
margin: 1%;
@media ${device.desktop}{
}
@media ${device.laptop}{
}
@media ${device.tablet}{
}
@media ${device.mobile}{
}
`;