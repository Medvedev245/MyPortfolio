import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';
export const GlobalStyle = createGlobalStyle`

:root {
  // Colors
    --iq-Logo: #149ddd; // Logo
    --iq-underlining: rgba(187, 154, 230, 0.342);
    /* --iq-letters: #afb1b8 // Header Letters
   --iq-cross: rgba(88, 5, 143, 1);
   --iq-boxShadow: rgba(136, 85, 187, 1); // boxShadow */ 


 //tablet
   /* @media screen and (max-width: 1200px) { */
  /* }  */

 // Mobil
  /* @media screen and (max-width: 767px) {
  } */
   //Fonts
   --font-size-mobile: 16px; /* Размер шрифта для мобильных устройств */
  --font-size-tablet: 18px; /* Размер шрифта для планшетных устройств */
  --font-size-desktop: 20px; /* Размер шрифта для десктопных устройств */

}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

  body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

  
code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

`;
