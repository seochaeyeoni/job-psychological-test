import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import './App.css';
import GlobalFonts from "./styles/fonts/fonts";
import GlobalStyle from './styles/globalStyles';
import Home from './routes/Home';
import Example from './routes/Example';
import Test from './routes/Test';
import Finish from './routes/Finish';
import Result from './routes/Result';

function App() {
  return (
    <HashRouter>
      <GlobalStyle />
      <GlobalFonts />
      <RecoilRoot>
        <Route exact path="/" component={Home} />
        <Route exact path="/example" component={Example} />
        <Route exact path="/test" component={Test} />
        <Route exact path="/finish" component={Finish} />
        <Route exact path="/result" component={Result} />
      </RecoilRoot>
    </HashRouter>
  );
}

export default App;
