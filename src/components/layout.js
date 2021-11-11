import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import SideBar from './sideBar';
import GlobalContextProvider from '../context/GlobalContextProvider';
import GlobalStyle from '../styles/globalStyle';
import styledTheme from '../styles/styledTheme';
import Toggle from './toggle';
import themeHook from '../hooks/themeHook';

const Layout = ({ children }) => {
    const [theme, themeHookCallback] = themeHook();

    return(
        <ThemeProvider theme={ styledTheme }>
            <GlobalContextProvider.Provider value={ theme }>
                <GlobalStyle />
                <Container>
                    <Toggle themeHookCallback = { themeHookCallback } />
                    <SideBar />
                    <div>themeLayout.js</div>
                    <div>themeLayout.js</div>
                    <div>themeLayout.js</div>
                    <div>themeLayout.js</div>
                    <div>themeLayout.js</div>
                    <div>themeLayout.js</div>
                    <div>themeLayout.js</div>
                    <div>themeLayout.js</div>
                    <div>themeLayout.js</div>
                    <div>themeLayout.js</div>
                    <div>themeLayout.js</div>
                    <div>themeLayout.js</div>
                    <div>themeLayout.js</div>
                    <div>themeLayout.js</div>
                    <div>themeLayout.js</div>
                    <div>themeLayout.js</div>
                    <div>themeLayout.js</div>
                    <div>themeLayout.js</div>
                    <div>themeLayout.js</div>
                    <div>themeLayout.js</div>
                    <div>themeLayout.js</div>
                    <div>themeLayout.js</div>
                    <div>themeLayout.js</div>
                    <div>themeLayout.js</div>
                    <div>themeLayout.js</div>
                    <div>themeLayout.js</div>
                    <div>themeLayout.js</div>
                    <div>themeLayout.js</div>
                    <div>themeLayout.js</div>
                    <div>themeLayout.js</div>
                    <div>themeLayout.js</div>
                    <div>themeLayout.js</div>
                    <div>themeLayout.js</div>
                    <div>themeLayout.js</div>
                    <div>themeLayout.js</div>
                    <div>themeLayout.js</div>
                    <div>themeLayout.js</div>
                    <div>themeLayout.js</div>
                    <div>themeLayout.js</div>
                    <div>themeLayout.js</div>
                    <div>themeLayout.js</div>
                    <div>themeLayout.js</div>
                    <div>themeLayout.js</div>
                    <div>themeLayout.js</div>
                    <div>themeLayout.js</div>
                    <div>themeLayout.js</div>
                    <div>themeLayout.js</div>
                    <div>themeLayout.js</div>
                    <div>themeLayout.js</div>
                    <div>themeLayout.js</div>
                    <div>themeLayout.js</div>
                    <div>themeLayout.js</div>
                    <div>themeLayout.js</div>
                    <div>themeLayout.js</div>
                    <div>themeLayout.js</div>
                    <div>themeLayout.js</div>
                    <div>themeLayout.js</div>
                    <div>themeLayout.js</div>
                    <div>themeLayout.js</div>
                    <div>themeLayout.js</div>
                    <div>themeLayout.js</div>
                    <div>themeLayout.js</div>
                    <div>themeLayout.js</div>
                    <div>themeLayout.js</div>
                    <div>themeLayout.js</div>
                    <div>themeLayout.js</div>
                    <div>themeLayout.js</div>
                    <div>themeLayout.js</div>
                    <div>themeLayout.js</div>
                    <div>themeLayout.js</div>
                    <div>themeLayout.js</div>
                    <div>themeLayout.js</div>
                    <div>themeLayout.js</div>
                    <div>themeLayout.js</div>
                    <div>themeLayout.js</div>
                    <div>themeLayout.js</div>
                    <div>themeLayout.js</div>
                    <div>themeLayout.js</div>
                    <div>themeLayout.js</div>
                    <div>themeLayout.js</div>
                    <div>themeLayout.js</div>
                    <div>themeLayout.js</div>
                    <div>themeLayout.js</div>
                    <div>themeLayout.js</div>
                    <div>themeLayout.js</div>
                    <div>themeLayout.js</div>
                    <div>themeLayout.js</div>
                    <div>themeLayout.js</div>
                    <div>themeLayout.js</div>
                    <div>themeLayout.js</div>
                    <div>themeLayout.js</div>
                    <div>themeLayout.js</div>
                    <div>themeLayout.js</div>
                    <div>themeLayout.js</div>
                    <div>themeLayout.js</div>
                    <div>themeLayout.js</div>
                    <div>themeLayout.js</div>
                    <div>themeLayout.js</div>
                    <div>themeLayout.js</div>
                    <div>themeLayout.js</div>
                    <div>themeLayout.js</div>
                    <div>themeLayout.js</div>
                    <div>themeLayout.js</div>
                    <div>themeLayout.js</div>
                    <div>themeLayout.js</div>
                    <div>themeLayout.js</div>
                    {children}
                </Container>
                <Footer role="contentinfo">
                    <Copyright aria-label="Copyright">
                        <div>thisiscopyright</div>
                    </Copyright>
                </Footer>
            </GlobalContextProvider.Provider>
        </ThemeProvider>
    );
};

const Container = styled.div`
    width: 100%;
    height: 100%;
    min-height: calc(100vh - var(--footer-height));
    background-color: var(--color-post-background);
`;

const Footer = styled.footer`
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
    height: var(--footer-height);
    background-color: var(--color-gray-1);
`;

const Copyright = styled.span`
    color: var(--color-gray-6);
`;
export default Layout