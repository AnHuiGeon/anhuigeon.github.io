import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import GlobalContextProvider from '../context/GlobalContextProvider';
import GlobalStyle from '../styles/globalStyle';
import styledTheme from '../styles/styledTheme';
import themeHook from '../hooks/themeHook';

import SideBar from './sideBar';
import Toggle from './toggle';
import Footer from './footer';

const Layout = ({ children }) => {
	const [theme] = themeHook();

	return (
		<ThemeProvider theme={styledTheme}>
			<GlobalContextProvider.Provider value={theme}>
				<GlobalStyle />
				<Container>
					<Toggle />
					<SideBar />
					{children}
				</Container>
				<Footer />
			</GlobalContextProvider.Provider>
		</ThemeProvider>
	);
};

const Container = styled.div`
	margin: 0 auto;
	max-width: 1680px;
	height: 100%;
	min-height: calc(100vh - var(--footer-height));
	background-color: var(--color-post-background);
`;
// mobile : 가로320 세로480, tablet: 가로768 세로1024, desktop: 1680

export default Layout