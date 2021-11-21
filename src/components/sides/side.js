import React from "react"
import styled from 'styled-components'
import { Link } from 'gatsby'
import HamburgerToggle from './hamburgerToggle'
import Category from "./category"

import Face from '../../images/huigeon.jpg'

const Side = ({ data }) => {
  const siteMetadata = data.site.siteMetadata

  return (
    <>
      <HamburgerToggle />
      <SideMenu>
        <div>sidebar.js : Aside</div>
        <About>
          <CoverAuthorImage>
            <Link to='/'>
              <Img src={Face} alt={siteMetadata.author}/>
            </Link>
          </CoverAuthorImage>
          <AuthorName>{siteMetadata.author}</AuthorName>
          <Description>{siteMetadata.description}</Description>
          <Category data={data} />
        </About>
      </SideMenu>
    </>
  )
}
const Description = styled.p`
  font-size: 16px;
  margin: 0 0 10px;
`;
const AuthorName = styled.div`
  font-family: 'PT Serif', serif;
  margin: 0 0 10px;
  position: relative;
  padding-bottom: 15px;
  font-size: 16px;
  text-transform: uppercase;
  color: $dark;
  font-weight: 700;
`;
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
const SideMenu = styled.aside`
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
// const HamburgerSpan = styled.span`
//   display: block;
//   position: absolute;
//   width: 100%;
//   height: 5px;
//   border-radius: 10px;
//   background: var(--color-text);
//   transition: all .35s;
//   &:nth-child(1){
//     top: 0;
//   }
//   &:nth-child(2){
//     top: 50%;
//     transform: translateY(-50%);
//   }
//   &:nth-child(3){
//     bottom: 0;
//   }
// `;
// const HamburgerLabel = styled.label.attrs({ htmlFor: 'menuicon' })`
//   display: block;
//   width: 30px;
//   height: 30px;
//   position: fixed;
//   top: 10px;
//   left: 10px;
//   z-index: 5;
//   cursor: pointer;
// `;
// const HamburgerInput = styled.input.attrs({ type: 'checkbox', id: 'menuicon' })`
//   display: none;
//   &:checked{
//     z-index: 2;
//     +${HamburgerLabel}{
//       ${HamburgerSpan}{
//         &:nth-child(1){
//           top: 50%;
//           transform: translateY(-50%) rotate(225deg);
//         }
//         &:nth-child(2){
//           opacity: 0;
//         }
//         &:nth-child(3){
//           bottom: 50%;
//           transform: translateY(50%) rotate(-225deg);
//         }
//       }
//       +${SideMenu}{
//         // left: 0;
//         transform: translateX(0);
//       }
//     }
//   }
// `;
export default Side