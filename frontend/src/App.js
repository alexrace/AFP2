import React from 'react';
import './App.scss';
import NavBar from "./components/NavBar";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Search from "./components/Search";

function App() {
  
    return (
        <Router>
          <NavBar/>
          <Switch>
            <Route path="/search" exact component={Search} />
            <Route path="/inventory" />
          </Switch>
        </Router>
    );
  
}

export default App;
