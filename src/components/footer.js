import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <FooterBox role="contentinfo">
      <Copyright aria-label="Copyright">
        <div>Github Repo: 
          <a
          href='https://github.com/AnHuiGeon/anhuigeon.github.io'
          >anhuigeon.github.io</a>
        </div>
      </Copyright>
    </FooterBox>
  )
}

export default Footer

const FooterBox = styled.footer`
	display: flex;
	text-align: center;
	justify-content: center;
	align-items: center;
	height: var(--footer-height);
	background-color: var(--color-background-1);
`;

const Copyright = styled.span`
	color: var(--color-gray-6);
`;