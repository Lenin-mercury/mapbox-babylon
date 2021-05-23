import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Header from './components/Header/Header';

import './App.css';
// import Babylon from './pages/Babylon/Babylon.page'; 
import Home from './pages/Home/Home.page';

const App = () => {
  return (
    <div>
        <BrowserRouter>
        <Header/>
        <Switch>
          <Route exact path="/" component={Home} />
          {/* <Route exact path="/baby" component={Babylon} /> */}
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;