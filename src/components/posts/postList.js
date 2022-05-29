import React from "react";
import styled from "styled-components";
import PostCard from "./postCard";
import PostPagination from "./postPagination";

import { device } from "../../styles/device";

const PostList = ({allData, pageContext}) => {
  return (
    <Container>
      {allData.map(({ node }) => 
        <PostCard node={node} key={node.fields.slug}/>
        // why we've to include 'key'?
        // => Each child in a list should have a unique "key" prop.
      )}
      <PostPagination pageContext={pageContext} />
    </Container>
  )
}

export default PostList
const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 98%;
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