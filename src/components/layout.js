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
	// Lifting State up
	const [sideState, setSideState] = useState(false)
	const addSideState = (addState) => {
		setSideState(addState)
	}
	useEffect(() => {
		setTheme(window.__theme);
    window.__onThemeChange = () => {
			setTheme(window.__theme);
    };
	}, [])

	return (
		<>
			<GlobalStyle />
			<Header sideState={sideState} addSideState={addSideState}/>
			{theme !== null ? (
				<Toggle data={theme} />
			) : (
				<div style={{width: '24px' }} />
			)}
			<Container>
				<Side sideState={sideState} addSideState={addSideState} data={data}/>
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
	height: fit-content;
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