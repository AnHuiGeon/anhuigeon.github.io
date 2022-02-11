import React, { useEffect } from "react";
// import React, {useState, useEffect} from "react";
import styled from "styled-components";
import { device } from "../../styles/device";

const ScrollNavigation = ({data}) => {
  if (typeof window !== 'undefined'){
    return(
      <>
        <ProgressBar>
          <ScrollPosition width={isNaN(data/(document.body.offsetHeight - window.innerHeight))?0:parseInt((data/(document.body.offsetHeight - window.innerHeight))*100)} />
        </ProgressBar>
      </>
    )
  } else {
    return(
      <>
        <ProgressBar>
          <ScrollPosition width={0} />
        </ProgressBar>
      </>)
  }
  // const [limit, setLimit] = useState(0)
  // useEffect(() => {
  //   setLimit(document.body.offsetHeight - window.innerHeight)
  // }, [])
  // useEffect(() => {
  //   setLimit(document.body.offsetHeight - window.innerHeight)
  // }, [data])
  // return(
  //   <>
  //     <ProgressBar>
  //       <ScrollPosition width={isNaN(data/limit)?0:parseInt((data/limit)*100)}/>
  //     </ProgressBar>
  //   </>
  // )
}

const ScrollPosition = styled.div`
  height: 4px;
  background-color: var(--color-text);
  width: ${props => `${props.width>=0?props.width:0}%`};
  transition: width .3s;
  @media ${device.desktop}{
  }
  @media ${device.laptop}{
  }
  @media ${device.tablet}{
    transition: none;
  }
  @media ${device.mobile}{
  }
`;
const ProgressBar = styled.div`
  width: 100%;
  height: 4px;
  position: fixed;
  z-index: 10;
`;

export default ScrollNavigation