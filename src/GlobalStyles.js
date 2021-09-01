import { createGlobalStyle } from 'styled-components'

// export const transition = { duration: 0.6, ease: [0.6, 0.01, -0.05, 0.9] }
// export const transition2 = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] } // good for whileHover = { scale: 1.1 }

const GlobalStyles = createGlobalStyle`
    html { 
        scroll-behavior: smooth; 
        //scroll-padding: 100px;
    }

    * {
        font-family: 'Roboto';
        margin: 0px;
        padding: 0px;
    }

    body {
        background: #140e09;
        overflow-x: hidden;
    }

    body::-webkit-scrollbar-track {
        display: none;
    }

    body::-webkit-scrollbar {
        display: none;

    }
`

export default GlobalStyles
