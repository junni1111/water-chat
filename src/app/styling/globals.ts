import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    html,
    body {
    padding: 0;
    margin: 0px auto;
    -webkit-text-size-adjust: none;
    }

    a {
    color: inherit;
    text-decoration: none;
    cursor: pointer;
    }

    *,
    *:before,
    *:after {
    font-family: Pretendard;
    box-sizing: border-box;
    }

    :focus {
        outline: none;
        border: none;
    }
    ::-webkit-scrollbar {
        display: none;
    }

    button {
        background: none;
        padding: 0;
        border: none;
        cursor: pointer;
    }
`;
