import { createGlobalStyle } from 'styled-components'

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
`

export default GlobalStyles
