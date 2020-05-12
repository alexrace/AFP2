import React from 'react';
import InventoryPartSearchResult from '../components/InventoryPartSearchResult';
import InventoryProductSearchResult from '../components/InventoryProductSearchResult';

import InventoryPartSearchActions from '../actions/InventoryPartSearchActions';
import InventoryProductSearchActions from '../actions/InventoryProductSearchActions';

const initialState = {
    inventoryType: "part",
    inventoryID: "1"
};

class Inventory extends React.Component{
    constructor(){
        super();
        this.state = initialState;
    }

    handleSubmit(){
        if(this.state.inventoryType == "part"){
            InventoryPartSearchActions.search(this.state.inventoryType, this.state.inventoryID);
        }
        if(this.state.inventoryType == "product"){
            InventoryProductSearchActions.search(this.state.inventoryType, this.state.inventoryID);
        }
    }

    render(){
        return(
            <div className="inventoryBox mx-auto mt-5">
                <h3 className="text-center">Raktár lekérdezés</h3>
                <div className="table-responsive">
                    <table className="table">
                        <tbody>
                            <tr>
                                <td>Típus</td>
                                <td><select className="form-control" name={"inventoryType"} onChange={(e) => {
                                    let state = this.state;
                                    state.inventoryType = e.target.value;
                                    state.inventoryType == "part" ? state.inventoryID = 1 : state.inventoryID = 2;
                                    this.setState(state);
                                }}>
                                    <option value="part">Alkatrész</option>
                                    <option value="product">Termék</option>
                                    </select></td>
                            </tr>
                            <tr>
                                <td 
                                colSpan={2}>
                                    <button className="btn btn-primary" onClick={() => { this.handleSubmit() }}>Lekérdez</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <InventoryPartSearchResult />
                <InventoryProductSearchResult />
            </div>
        );
    }
}

export default Inventory;