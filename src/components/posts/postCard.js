import React from "react";
import styled from "styled-components";

const PostCard = ({ data }) => {
  return (
    <Container>
      <h1>{data.markdownRemark.frontmatter.title}</h1>
      <h4>{data.markdownRemark.frontmatter.date}</h4>
      <hr/>
      <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}></div>
    </Container>
  )
}

const Container = styled.div`
width: 100%;
margin: 1%;
`;
export default PostCard
