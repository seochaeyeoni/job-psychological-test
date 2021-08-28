import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

  h1 {
    font-family: 'NanumGothic';
    font-weight: bold;
    padding: 12px;
  }
  h2, h3, h4 {
    font-family: 'NanumGothic';
    font-weight: bold;
    padding: 10px;
  }

  h5, p, th, td {
    font-family: 'NanumGothic';
    padding-top: 20px;
    padding-bottom: 3px;
  }

  a {
    font-family: 'NanumGothic';
    margin-top: 20px;
    margin-right: 5px;
    margin-bottom: 5px;
  }
`;

export const Outer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 800px;
  background-color: aliceblue;
`;

export const TestOuter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: aliceblue;
`;

export const Inner = styled.div`
  text-align: center;
  width: 80%;
  height: 70%;
  padding-top: 5%;
  padding-left: 10%;
  padding-right: 10%;
  background-color: white;
  padding-bottom: 5%;
  border-radius: 15px;
`;

export default GlobalStyle;
