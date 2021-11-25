import React, { useEffect, useState } from "react";
import styled from "styled-components";

const ScrollNavigation = ({data}) => {
  const [limit, setLimit] = useState(0)
  useEffect(() => {
    setLimit(document.body.offsetHeight - window.innerHeight)
    console.log('limit:',limit)
  }, [])
  return(
    <>
      <ProgressBar>
        <ScrollPosition value = {(data/limit)*100}/>
      </ProgressBar>
    </>
  )
}

const ScrollPosition = styled.div`
  height: 4px;
  background-color: var(--color-text);
  position: fixed;
  width: ${props => props.value}%;
  z-index: 1;
`;
const ProgressBar = styled.div`
  width: 100%;
  height: 4px;
  position: fixed;
  z-index: 2;
`;

export default ScrollNavigation