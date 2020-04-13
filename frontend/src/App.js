import React from 'react';
import './App.scss';
import ProductSearch from "./components/ProductSearch";
import ProductSearchResult from "./components/ProductSearchResult";

function App() {
  
    return (
          <div className="container-fluid">
              <div className={"row"}>
                  <div className="col-md-2"></div>
                  <div className="col-md-8">
                    <div className="row"><ProductSearch/></div>
                    <div className="row"><ProductSearchResult/></div>
                  </div>
                  <div className="col-md-2"></div>
              </div>
          </div>
    
    );
  
}

export default App;
