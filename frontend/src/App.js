import React from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import {BrowserRouter, Switch, Route} from "react-router-dom";

import NavBar from "./components/NavBar";

import Search from "./components/Search";
import Inventory from "./components/Inventory";

import ProductInsert from './components/ProductInsert';
import ProductUpdate from './components/ProductUpdate';
import PartInsert from './components/PartInsert';
import PartUpdate from './components/PartUpdate';

function App() {
  
    return (
        <div>
            <BrowserRouter>
                <NavBar />
                <Switch>
                    <Route path="/" exact component={Search} />
                    <Route path="/search" component={Search} />
                    <Route path="/fetchInventory" component={Inventory} />
                    <Route path="/insertProduct" component={ProductInsert} />
                    <Route path="/editProduct" component={ProductUpdate} />
                    <Route path="/insertPart" component={PartInsert} />
                    <Route path="/editPart" component={PartUpdate} />
                </Switch>
            </BrowserRouter>
        </div>
    );
  
}

export default App;
