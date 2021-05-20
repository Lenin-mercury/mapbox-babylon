import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Baby from './pages/Baby.pages'; 
import './App.css';
import Home from './pages/Home.pages';

const App = () => {
  return (
    <div>
        <BrowserRouter>
          <h1 className="text-center"> MapBox and BabylonJs Assignment </h1>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/baby" component={Baby} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;