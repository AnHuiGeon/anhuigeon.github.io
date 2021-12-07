import React, {useEffect, useState} from "react";
import styled from "styled-components";
import HamburgerToggle from "./hamburgerToggle";
import { device } from "../../styles/device";
import ScrollNavigation from "./scrollNavigation";
import { Link } from "gatsby";

const Header = () => {
  // 모바일/태블릿환경 스크롤 이동 감지로 header에 이벤트 주입/제거
  const [isScrolled, setIsScrolled] = useState(0);
  const headerListener = () => {
    setIsScrolled(window.pageYOffset);
  };
  useEffect(() => {
    window.addEventListener("scroll", headerListener);
    return () => {
      window.removeEventListener("scroll", headerListener)
    }
  }, [isScrolled]);
  return (
    <>
      <ScrollNavigation data={isScrolled}/>
      <HeadBar className={isScrolled > 0 ? "scrolled" : undefined} aria-label="Global Navigation">
        <HamburgerToggle />
        <Link to='/'>header.js : HeadBar</Link>
      </HeadBar>
    </>
    )
}

const HeadBar = styled.header`
  display: none;
  width: 100%;
  height: 50px;
  line-height: 50px;
  position: sticky;
  top: 0;
  z-index: 5;
  opacity: 0.85;
  transition: .5s ease-out;
  text-align: center;
  font-weight: 900;
  font-size: 24px;
  backdrop-filter: blur(10px);
  background-color: var(--color-background-1);
  }
  &.scrolled {
    box-shadow: 0 4px 4px rgba(31, 35, 46, .15);
    transition: box-shadow .5s ease-in;
  }
  @media ${device.desktop}{
    display: none;
  }
  @media ${device.laptop}{
  }
  @media ${device.tablet}{
    display: block;
  }
  @media ${device.mobile}{
  }
`;

export default Header