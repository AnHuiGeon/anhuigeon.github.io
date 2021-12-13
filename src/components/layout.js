import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
// import GlobalContextProvider from '../context/GlobalContextProvider';
import GlobalStyle from '../styles/globalStyle';
// import themeHook from '../hooks/themeHook';

import Header from './headers/header';
import Side from './sides/side';
// import Toggle from './headers/toggle';
import Footer from './footer';
import { device } from '../styles/device';
import TestToggle from './headers/testToggle';

const Layout = ({ children, data }) => {
	// const [theme] = themeHook();
	const [theme, setTheme] = useState(null);
	console.log('theme:',theme)
	useEffect(() => {
    setTheme(window.__theme);
    window.__onThemeChange = () => {
      setTheme(window.__theme);
    };
	}, [])

	return (
		// <GlobalContextProvider.Provider value={theme}>
		<>
			<GlobalStyle />
			<Header />
			{/* <Toggle /> */}
			{theme !== null ? (
				<TestToggle
				data={theme}
				// checked={test === 'dark'}
				// onChange={e => {
				// 	window.__setPreferredTheme(
				// 		e.target.checked ? 'dark' : 'light'
				// 	)
				// }}
				/>
			) : (
				<div style={{height: '24px' }} />
			)}
			<Container>
				<Side data={data}/>
				{children}
			</Container>
			<Footer />
		</>
		// </GlobalContextProvider.Provider>
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