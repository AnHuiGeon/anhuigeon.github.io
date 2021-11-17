import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <FooterBox role="contentinfo">
      <Copyright aria-label="Copyright">
        <div>footer.js</div>
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
	background-color: var(--color-post-background);
`;

const Copyright = styled.span`
	color: var(--color-gray-6);
`;