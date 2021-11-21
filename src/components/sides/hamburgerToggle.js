import React, { useEffect } from 'react';
import styled from 'styled-components';
import hamburgerHook from '../../hooks/hamburgerHook';

const HamburgerToggle = () => {
  // checkbox 체크 감지로 scroll lock
  const [hamburger, setHamburger] = hamburgerHook();
  const menuCheckHandler = ({target}) => {
    setHamburger(target.checked)
  }
  useEffect(() => {
    const scrollOverflow = document.getElementsByTagName('body')[0];
    const asideOverflow = document.getElementsByTagName('aside')[0];
    if (hamburger) {
      scrollOverflow.style.overflow = 'hidden';
      asideOverflow.style.transform = "translateX(0px)"
      asideOverflow.style.webkitTransform = "translateX(0px)"
      asideOverflow.style.msTransform = "translateX(0px)"
    } else {
      scrollOverflow.style.overflow = 'visible';
      asideOverflow.style.transform = "translateX(-125%)"
      asideOverflow.style.webkitTransform = "translateX(-125%)"
      asideOverflow.style.msTransform = "translateX(-125%)"
    }
  }, [hamburger]);
  return (
    <>
    <HamburgerInput
    onChange={(e) => menuCheckHandler(e)} />
    <HamburgerLabel>
      <HamburgerSpan></HamburgerSpan>
      <HamburgerSpan></HamburgerSpan>
      <HamburgerSpan></HamburgerSpan>
    </HamburgerLabel>
    </>
  )
}

const HamburgerSpan = styled.span`
  display: block;
  position: absolute;
  width: 100%;
  height: 5px;
  border-radius: 10px;
  background: var(--color-text);
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
    }
  }
`;

export default HamburgerToggle