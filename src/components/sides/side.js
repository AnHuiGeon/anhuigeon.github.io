import React from "react"
import styled from 'styled-components'
import { Link } from 'gatsby'
import Category from "./category"
import { device } from "../../styles/device"

import Face from '../../images/huigeon.jpg'

const Side = ({ data }) => {
  const siteMetadata = data.site.siteMetadata

  return (
    <>
      <SideMenu>
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
  min-height: 100%;
  width: 300px;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px;
  padding-top: 50px;
  background-color: var(--color-post-background);
  box-shadow: 0 1px 1px 0 rgba(31, 35, 46, .15);
  z-index: 1;
  transition: all .85s;
  @media ${device.desktop}{
    transform: translateX(0);
    transition: all .0s;
  }
  @media ${device.laptop}{
  }
  @media ${device.tablet}{
    transform: translateX(-125%);
    width: 100%;
    position: fixed;
    transition: all .85s;
    &.hamburgerClicked{
      transform: translateX(0);
    }
  }
  @media ${device.mobile}{
  }
`;

export default Side