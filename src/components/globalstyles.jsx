import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    :root{
        --baseFontFamily: 'Montserrat', sans-serif;
        --baseFontLogo: "Kode Mono", monospace;
        --baseFontSquare: 'Rubik Bubbles', system-ui;
        --baseFont: normal 1rem/1.375rem var(--baseFontFamily);
        --fontSquare: normal 1.6rem/1rem var(--baseFontSquare);
        --fontTitle: normal 4rem/5rem var(--baseFontLogo);        
    }


    body{
        font: var(--baseFont);
    }

`

export default GlobalStyle