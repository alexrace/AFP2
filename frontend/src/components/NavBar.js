import React from 'react';
import {
    Link
} from "react-router-dom";

class NavBar extends React.Component{
    render(){
        return(
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <Link className="navbar-brand" to="/">Inventory Manager System</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <Link className="nav-link" to="/search">Keresés</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/inventory">Raktár</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="productDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Termékek
                                </a>
                                <div className="dropdown-menu" aria-labelledby="productDropdown">
                                    <Link className="dropdown-item" to="/products/add">Termék létrehozása</Link>
                                    <Link className="dropdown-item" to="/products/edit">Termék szerkesztése</Link>
                                </div>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="partDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Alkatrész
                                </a>
                                <div className="dropdown-menu" aria-labelledby="partDropdown">
                                    <Link className="dropdown-item" to="/parts/add">Alkatrész létrehozása</Link>
                                </div>
                            </li>
                        </ul>
                    </div>
                </nav>    
        );
    }
}

export default NavBar;