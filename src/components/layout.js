import React, { useEffect, useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import SideBar from './sideBar';
import GlobalContextProvider from '../context/GlobalContextProvider';
import GlobalStyle from '../styles/globalStyle';
import styledTheme from '../styles/styledTheme';
import Toggle from './toggle';

const Layout = ({ children }) => {
    // const [theme, setTheme] = useState(typeof window.__theme !== 'undefined' ? window.__theme : window.matchMedia('(prefers-color-scheme: dark)')?'dark':'light')
    const [theme, setTheme] = useState(null)
    useEffect(() => {
        if(typeof window !== 'undefined'){
            setTheme(window.__theme)
        }
    }, [])
    console.log('layout.js > theme:',theme)

    return(
        <ThemeProvider theme={ styledTheme }>
            <GlobalContextProvider.Provider value={ [theme, setTheme] }>
                <GlobalStyle />
                <Container>
                    <Toggle />
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