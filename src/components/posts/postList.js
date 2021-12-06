import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";

import { device } from "../../styles/device";

import noImage from '../../images/huigeon.jpg'

const PostList = ({allData, pageContext}) => {
  console.log('postList.js allData:', allData)
  console.log('postList.js pageContext:', pageContext)
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
                ?
                <ImgBox
                  style={{
                    backgroundImage: `url(${node.frontmatter.img.childImageSharp.gatsbyImageData.images.fallback.src})`,
                  }}
                ></ImgBox>
                :
                <ImgBox
                  style={{
                    backgroundImage: `url(${noImage})`,
                  }}
                ></ImgBox>
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
height: 60%;
background-size: 100% 100%;
background-repeat: no-repeat;
`;
const Date = styled.div``;
const Category = styled.div``;
const Title = styled.div``;
const TextBox = styled.div`
height:40%;
`;
const PostBox = styled.div`
margin: 1%;
width: 48%;
height: 25vh;
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
@media ${device.desktop}{
}
@media ${device.laptop}{
}
@media ${device.tablet}{
}
@media ${device.mobile}{
}
`;