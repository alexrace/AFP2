import React from 'react';
import './App.scss';
import ProductSearch from "./components/ProductSearch";
import ProductSearchResult from "./components/ProductSearchResult";
import PartSearch from "./components/PartSearch";
import PartSearchResult from "./components/PartSearchResult";

function App() {
  
    return (
          <div className="container-fluid">
              <div className={"row"}>
                  <div className="col-md-2"></div>
                  <div className="col-md-4">
                    <div>Termék keresés</div>
                    <div className="row"><ProductSearch/></div>
                    <div className="row"><ProductSearchResult/></div>
                  </div>
                  <div className="col-md-4">
                    <div>Alkatrész keresés</div>
                    <div className="row"><PartSearch/></div>
                    <div className="row"><PartSearchResult/></div>
                  </div>
               
              </div>
          </div>
    
    );
  
}

export default App;
