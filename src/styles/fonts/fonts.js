import { createGlobalStyle } from 'styled-components';
import NanumGothic from './NanumGothic.woff';

const GlobalFonts = createGlobalStyle`
    @font-face {
        font-family: "NanumGothic";
        src: local("NanumGothic"),
        url(${NanumGothic}) format('woff');
        font-weight: 300;
        font-style: normal;
    }
`;

export default GlobalFonts;
