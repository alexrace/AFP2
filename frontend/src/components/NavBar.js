import React from 'react';


class NavBar extends React.Component{
    render(){
        return(
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="/">Inventory Manager System</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="/search">Keresés</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/fetchInventory">Raktár</a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="productDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Termékek
                        </a>
                        <div className="dropdown-menu" aria-labelledby="productDropdown">
                            <a className="dropdown-item nav-link" href="/insertProduct">Termék létrehozása</a>
                            <a className="dropdown-item nav-link" href="/editProduct">Termék szerkesztése</a>
                        </div>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="partDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Alkatrész
                        </a>
                        <div className="dropdown-menu" aria-labelledby="partDropdown">
                            <a className="dropdown-item nav-link" href="/insertPart">Alkatrész létrehozása</a>
                            <a className="dropdown-item nav-link" href="/editPart">Alkatrész szerkesztése</a>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>    
        );
    }
}

export default NavBar;