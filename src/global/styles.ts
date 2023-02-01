import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        padding:0;
        margin:0;
        box-sizing:border-box;
    }
    html,body, #root{
        height:100%;

    }
    body{
     background-color:#16181B;
    }
    a{
        text-decoration:none;
        outline:none;
    }
`;
