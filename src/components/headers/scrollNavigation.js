import React, { useEffect, useState } from "react";
import styled from "styled-components";

const ScrollNavigation = ({data}) => {
  const [limit, setLimit] = useState(0)
  useEffect(() => {
    const resizeListener = () => {
      setLimit(document.body.offsetHeight - window.innerHeight)
    }
    window.addEventListener('resize', resizeListener)
    return () => {
      window.removeEventListener('resize', resizeListener)
    }
  }, [])
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
  position: fixed;
  width: ${props => `${props.width}%`};
  z-index: 1;
`;
const ProgressBar = styled.div`
  width: 100%;
  height: 4px;
  position: fixed;
  z-index: 2;
`;

export default ScrollNavigation