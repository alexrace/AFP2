import React from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';

import NavBar from "./components/NavBar";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import Search from "./components/Search";
import ProductInsert from './components/ProductInsert';

function App() {
  
    return (
        <Router>
          <NavBar/>
          <Switch>
            <Route path="/search" exact component={Search} />
            <Route path="/inventory" />
            <Route path="/products/add" exact component={ProductInsert} />
          </Switch>
        </Router>
    );
  
}

export default App;
