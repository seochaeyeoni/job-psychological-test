import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import './App.css';
import Home from './routes/Home';
import Example from './routes/Example';

function App() {
  return (
    <HashRouter>
      <RecoilRoot>
        <Route exact path="/" component={Home} />
        <Route exact path="/example" component={Example} />
      </RecoilRoot>
    </HashRouter>
  );
}

export default App;
