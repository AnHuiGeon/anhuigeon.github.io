import React from 'react';
import styled from 'styled-components';
import GlobalContextProvider from '../context/GlobalContextProvider';
import GlobalStyle from '../styles/globalStyle';
import themeHook from '../hooks/themeHook';

import Header from './headers/header';
import Side from './sides/side';
import Toggle from './headers/toggle';
import Footer from './footer';
import { device } from '../styles/device';

const Layout = ({ children, data }) => {
	console.log('layout.js data:',data)
	const [theme] = themeHook();

	return (
		<GlobalContextProvider.Provider value={theme}>
			<GlobalStyle />
			<Header />
			<Toggle />
			<Container>
				<Side data={data}/>
				{children}
			</Container>
			<Footer />
		</GlobalContextProvider.Provider>
	);
};

const Container = styled.div`
	margin: 0 auto;
	display: flex;
	max-width: 1024px;
	height: 100%;
	min-height: calc(100vh - var(--footer-height));
	background-color: var(--color-post-background);
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