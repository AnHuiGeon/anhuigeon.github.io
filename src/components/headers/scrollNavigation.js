import React, { useEffect, useState } from "react";
import styled from "styled-components";

const ScrollNavigation = ({data}) => {
  const [limit, setLimit] = useState(0)
  const resizeListener = () => {
    setLimit(document.body.offsetHeight - window.innerHeight)
  }
  useEffect(() => {
    setLimit(document.body.offsetHeight - window.innerHeight)
  }, [])
  useEffect(() => {
    window.addEventListener('resize', resizeListener)
    return () => {
      window.removeEventListener('resize', resizeListener)
    }
  }, [data])
  return(
    <>
      <ProgressBar>
        <ScrollPosition width={isNaN(data/limit)?0:(data/limit)*100}/>
      </ProgressBar>
    </>
  )
}

const ScrollPosition = styled.div`
  height: 4px;
  background-color: var(--color-text);
  width: ${props => `${props.width}%`};
`;
const ProgressBar = styled.div`
  width: 100%;
  height: 4px;
  position: fixed;
  z-index: 10;
`;

export default ScrollNavigation