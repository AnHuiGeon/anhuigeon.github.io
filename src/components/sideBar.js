import React, { useEffect, useState } from "react";
import styled from 'styled-components';
// import { Link } from 'gatsby';

const SideBar = ({ }) => {
  // 모바일/태블릿환경 스크롤 이동 감지로 header에 이벤트 주입/제거
  const [isScrolled, setIsScrolled] = useState(false);
  const headerListener = () => {
    setIsScrolled(window.pageYOffset > 0);
  };
  useEffect(() => {
    window.addEventListener("scroll", headerListener);
    return () => {
      window.removeEventListener("scroll", headerListener)
    }
  }, [isScrolled]);
  return (
    <Side className={isScrolled ? "scrolled" : undefined} aria-label="Global Navigation">
      <div>sidebar.js</div>
    </Side>
  )
}

const Side = styled.nav`
  width: 100%;
  height: 50px;
  line-height: 50px;
  position: sticky;
  top: 0;
  z-index: 1;
  opacity: 0.85;
  transition: .5s ease-out;
  text-align: center;
  font-weight: 900;
  font-size: 24px;
  backdrop-filter: blur(10px);
  background-color: var(--color-post-background);
  }
  &.scrolled {
    box-shadow: 0 4px 4px rgba(31, 35, 46, .15);
    transition: box-shadow .5s ease-in;
  }
  // @media (max-width: ${({ theme }) => theme.device.sm}) {
  //   padding: 0 var(--padding-sm);
  }
`;
export default SideBar