import React from 'react';
import InventoryProductStore from '../stores/InventoryProductStore';

class InventoryProductSearchResult extends React.Component{

    constructor(){
        super();
        this.state= {products : []};
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

    render(){
        return(
        this.state.products.length > 0 &&
            <div className="table-responsive">
                <h3 className="text-center">Termékek</h3>
                <table className="table">
                    <thead>
                        <tr>
                            <td>Id</td>
                            <td>Name</td>
                            <td>Quantity</td>
                            <td>Availability</td>
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