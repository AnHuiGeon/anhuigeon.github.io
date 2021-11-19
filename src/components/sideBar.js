import React, { useEffect, useState } from "react";
import styled from 'styled-components';
import { Link } from 'gatsby';

import Face from '../images/huigeon.jpg'

const SideBar = () => {
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

  // checkbox 체크 감지로 scroll lock
  const [menuState, setMenuState] = useState(false);
  const menuCheckHandler = ({target}) => {
    console.log('hamburger.target.checked:',target.checked)
    setMenuState(target.checked);
  }
  useEffect(() => {
    const scrollOverflow = document.getElementsByTagName('body')[0];
    if (menuState) {
      scrollOverflow.style.overflow = 'hidden';
    } else {
      scrollOverflow.style.overflow = 'visible';
    }
  }, [menuState]);
  return (
    <>
      <SideHeader className={isScrolled ? "scrolled" : undefined} aria-label="Global Navigation">
        <div>sidebar.js : SideHeader</div>
      </SideHeader>
      <HamburgerInput
      onChange={(e) => menuCheckHandler(e)} />
      <HamburgerLabel>
        <HamburgerSpan></HamburgerSpan>
        <HamburgerSpan></HamburgerSpan>
        <HamburgerSpan></HamburgerSpan>
      </HamburgerLabel>
      <SideMenu>
        <div>sidebar.js : Aside</div>
        <About>
          <CoverAuthorImage>
            <Link to="/">
              <Img src={Face} alt={'undefined'}/>
            </Link>
          </CoverAuthorImage>
        </About>
      </SideMenu>
    </>
  )
}
const About = styled.div`
  text-align: center;
  max-width: 480px;
  margin: 10px auto auto;
`;
const CoverAuthorImage = styled.div`
  max-width: 150px;
  max-height: 150px;
  margin: 0 auto 10px;
  border-radius: 100%;
  overflow: hidden;
  background-color: var(--color-post-background);
`;
const Img = styled.img`
  max-width: 150px;
  max-height: 150px;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  transition: transform 0.35s;
  &:hover {
    transform: scale3d(0.90,0.90,1);
  }
`;
const SideHeader = styled.header`
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
  background-color: var(--color-post-background);
  }
  &.scrolled {
    box-shadow: 0 4px 4px rgba(31, 35, 46, .15);
    transition: box-shadow .5s ease-in;
  }
  // @media (max-width: ${({ theme }) => theme.device.sm}) {
  //   padding: 0 var(--padding-sm);
  // }
`;
const SideMenu = styled.aside`
  // left: -125%;
  transform: translateX(-125%);
  top: 0;
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  padding: 10px;
  padding-top: 50px;
  background-color: var(--color-post-background);
  box-shadow: 0 1px 1px 0 rgba(31, 35, 46, .15);
  z-index: 1;
  transition: all .35s;
`;
const HamburgerSpan = styled.span`
  display: block;
  position: absolute;
  width: 100%;
  height: 5px;
  border-radius: 10px;
  background: #000;
  transition: all .35s;
  &:nth-child(1){
    top: 0;
  }
  &:nth-child(2){
    top: 50%;
    transform: translateY(-50%);
  }
  &:nth-child(3){
    bottom: 0;
  }
`;
const HamburgerLabel = styled.label.attrs({ htmlFor: 'menuicon' })`
  display: block;
  width: 30px;
  height: 30px;
  position: fixed;
  top: 10px;
  left: 10px;
  z-index: 5;
  cursor: pointer;
`;
const HamburgerInput = styled.input.attrs({ type: 'checkbox', id: 'menuicon' })`
  display: none;
  &:checked{
    z-index: 2;
    +${HamburgerLabel}{
      ${HamburgerSpan}{
        &:nth-child(1){
          top: 50%;
          transform: translateY(-50%) rotate(225deg);
        }
        &:nth-child(2){
          opacity: 0;
        }
        &:nth-child(3){
          bottom: 50%;
          transform: translateY(50%) rotate(-225deg);
        }
      }
      +${SideMenu}{
        // left: 0;
        transform: translateX(0);
      }
    }
  }
`;
export default SideBar