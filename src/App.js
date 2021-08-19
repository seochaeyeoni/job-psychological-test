import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import './App.css';
import Home from './routes/Home';

function App() {
  return (
    <HashRouter>
      <RecoilRoot>
        <Route exact path="/" component={Home} />
      </RecoilRoot>
    </HashRouter>
  );
}

export default App;
