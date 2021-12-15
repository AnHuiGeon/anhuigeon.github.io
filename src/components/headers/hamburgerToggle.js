import React from 'react'
import styled from 'styled-components'

const HamburgerToggle = ({sideState, addSideState}) => {
  return (
    <>
    <HamburgerInput
    checked={sideState}
    onChange={(e) => {
      addSideState(e.target.checked)}
    }
    />
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
  z-index: 15;
  cursor: pointer;
`;
const HamburgerInput = styled.input.attrs({ type: 'checkbox', id: 'menuicon' })`
  display: none;
  &:checked{
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