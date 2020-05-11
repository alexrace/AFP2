import React from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';

import NavBar from "./components/NavBar";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import Search from "./components/Search";
import Inventory from "./components/Inventory";

import ProductInsert from './components/ProductInsert';
import ProductUpdate from './components/ProductUpdate';
import PartInsert from './components/PartInsert';
import PartUpdate from './components/PartUpdate';

function App() {
  
    return (
        <Router>
          <NavBar/>
          <Switch>
            <Route path="/search" exact component={Search} />
            <Route path="/inventory" exact component={Inventory}/>
            <Route path="/products/add" exact component={ProductInsert} />
            <Route path="/products/edit" exact component={ProductUpdate} />
            <Route path="/parts/add" exact component={PartInsert} />
            <Route path="/parts/edit" exact component={PartUpdate} />

            <Route component={Search} />
          </Switch>
        </Router>
    );
  
}

export default App;
