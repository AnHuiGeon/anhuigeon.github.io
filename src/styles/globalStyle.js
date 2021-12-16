import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
    :root {
        font-size: 100%;
        
        --width: 980px;
        --min-width: 320px;
        --nav-height: 50px;
        --footer-height: 60px;
    }
    .light {
        --color-text: #1d1d1d;
        --color-text-2: #1d1d1d;
        --color-text-3: #696969;
        --color-white: #ffffff;
        --color-nav-bar: rgba(255, 255, 255, 0.7);
        --color-nav-border: rgba(200, 200, 200, 0.7);
        --color-category-button: #f2f2f2;
        --color-background-1: #ffffff;
        --color-background-2: #f2f2f2;
        --color-background-3: #505050;
        --color-card: #ffffff;
        --color-code: #f2f2f2;
        --color-code-block: #fafafa;
        --color-code-highlight: rgba(0, 0, 0, 0.05);
        --color-code-highlight-border: rgba(0, 0, 0, 0.2);
        }
    
    .dark {
        --color-text: #e6e6e6;
        --color-text-2: #d1d1d1;
        --color-text-3: #8c8c8c;
        --color-white: #e6e6e6;
        --color-nav-bar: rgba(29, 29, 29, 0.7);
        --color-nav-border: rgba(255, 255, 255, 0.2);
        --color-category-button: #484848;
        --color-background-1: #1c1c1c;
        --color-background-2: #292A2D;
        --color-background-3: #505050;
        --color-card: #2c2c2c;
        --color-code: #3a3a3a;
        --color-code-block: #242424;
        --color-code-highlight: rgba(255, 255, 255, 0.05);
        --color-code-highlight-border: rgba(255, 255, 255, 0.2);
    }

    html, body, #___gatsby, #gatsby-focus-wrapper {
        margin: 0 auto;
        padding: 0;
        height: 100%;
        background-color: var(--color-post-background);
    }
    
    body {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
        background-color: var(--color-background-1);
        -webkit-font-smoothing: antialiased;
        * {
            color: var(--color-text);
        }
    }
    
    :lang(ko) {
        word-break: keep-all; 
    }
    ul, ol, li, dl, dt, dd, h1, h2, h3, h4, h5, h6, hgroup, p, blockquote, figure, form, fieldset, input, legend, pre, abbr, button {
        margin: 0;
        padding: 0;
    }

    h1 a, li a  {
        text-decoration: none;
    }

    a {
        text-decoration: none;
    }
`

export default GlobalStyle;