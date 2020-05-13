import React from 'react';
import InventoryProductStore from '../stores/InventoryProductStore';
import ProductSearchActions from '../actions/ProductSearchActions';

class InventoryProductSearchResult extends React.Component{

    constructor(){
        super();
        this.state= {products : [], qty: 0};
        this._onChange = this._onChange.bind(this);
    }

    _onChange(){
        this.setState({products : InventoryProductStore._products})
    }

    componentDidMount(){
        InventoryProductStore.addChangeListener(this._onChange)
    }

    componentWillUnmount(){
        InventoryProductStore.removeChangeListener(this._onChange);
    }

    handleSell(product_id, qty){
        ProductSearchActions.sell(product_id, qty);
    }

    render(){
        return(
            <div className="table-responsive">
                <h3 className="text-center">Termékek</h3>
                <table className="table">
                    <thead>
                        <tr>
                            <td>Id</td>
                            <td>Name</td>
                            <td>Quantity</td>
                            <td>Availability</td>
                            <td>Options</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.products.map((product)=>{
                                    return(
                                        <tr key={product.product_id}>
                                            <td className="p-3">{product.product_id}</td>
                                            <td>{product.product_name}</td>
                                            <td>{product.qty}</td>
                                            <td className="p-3">{product.availability}</td>
                                            <td>
                                                <input type="number" placeholder="Mennyiség" class="form-control" onChange={(e) => {
                                                    let state = this.state;
                                                    state.qty = e.target.value;
                                                    this.setState(state);
                                                }} />
                                                <button className="btn btn-info" onClick={() => {this.handleSell(product.product_id, this.state.qty)}}>Eladás</button>
                                            </td>
                                        </tr>
                                    );
                            })
                        }
                    </tbody>
                </table>
           </div>
        );
    }
}
export default InventoryProductSearchResult;