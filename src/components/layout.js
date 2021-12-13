import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import GlobalStyle from '../styles/globalStyle';

import Header from './headers/header';
import Side from './sides/side';
import Footer from './footer';
import { device } from '../styles/device';
import Toggle from './headers/toggle';

const Layout = ({ children, data }) => {
	const [theme, setTheme] = useState(null);
	useEffect(() => {
    setTheme(window.__theme);
    window.__onThemeChange = () => {
      setTheme(window.__theme);
    };
	}, [])

	return (
		<>
			<GlobalStyle />
			<Header />
			{theme !== null ? (
				<Toggle data={theme} />
			) : (
				<div style={{width: '24px' }} />
			)}
			<Container>
				<Side data={data}/>
				{children}
			</Container>
			<Footer />
		</>
	);
};

const Container = styled.div`
	margin: 0 auto;
	display: flex;
	max-width: 1024px;
	height: 100%;
	min-height: calc(100vh - var(--footer-height));
	background-color: var(--color-background-1);
  transition: background-color .85s;
	// transition: all .85s;
  @media ${device.desktop}{
  }
  @media ${device.laptop}{
  }
  @media ${device.tablet}{
  }
  @media ${device.mobile}{
  }
`;

export default Layout