import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import './App.css';
import Babylon from './pages/Babylon/Babylon.page'; 
import Home from './pages/Home/Home.page';

const App = () => {
  return (
    <div>
        <BrowserRouter>
          <h1 className="text-center"> MapBox and BabylonJs Assignment </h1>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/baby" component={Babylon} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;