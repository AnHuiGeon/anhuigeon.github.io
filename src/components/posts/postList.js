import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";

const PostList = ({allData, pageContext}) => {
  console.log('postList.js allData:', allData)
  console.log('postList.js pageContext:', pageContext)
  return (
    <Container>
      {allData.map(({ node }) => {
        return (
          <PostBox key={node.fields.slug}>
            {node.frontmatter.img &&
							node.frontmatter.img.childImageSharp &&
							node.frontmatter.img.childImageSharp.gatsbyImageData && (
            <ImgBox >
              <Link
              to={'/'+node.frontmatter.categories+node.fields.slug}
              style={{
                backgroundImage: `url(${node.frontmatter.img.childImageSharp.gatsbyImageData.images.fallback.src})`,
              }}
              />
            </ImgBox>
            )}
            <TextBox>
              <Title>제목: {node.frontmatter.title}</Title>
              <Category>분류: {node.frontmatter.categories}</Category>
              <Date>날짜: {node.frontmatter.date}</Date>
            </TextBox>
          </PostBox>
        )
      })}
    </Container>
  )
}

export default PostList
const Date = styled.div``;
const Category = styled.div``;
const Title = styled.div``;
const TextBox = styled.div``;
const ImgBox = styled.div``;
const PostBox = styled.div`
margin: 1%;
width: 48%;
`;
const Container = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
width: 100%;
height: fit-content;
`;