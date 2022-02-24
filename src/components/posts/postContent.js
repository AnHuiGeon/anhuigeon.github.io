import React from "react";
import styled from "styled-components";

const PostContent = ({ data }) => {
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
  width: 96%;
  margin: 2%;
`;
export default PostContent
