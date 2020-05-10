import React from 'react';
import ProductStore from '../stores/ProductStore';

class ProductSearchResult extends React.Component{

    constructor(){
        super();
        this.state= {products : []};
        this._onChange = this._onChange.bind(this);
    }

    _onChange(){
        this.setState({products : ProductStore._products})
    }

    componentDidMount(){
    ProductStore.addChangeListener(this._onChange)
    }

    componentWillUnmount(){
    ProductStore.removeChangeListener(this._onChange);
    }

    render(){
        return(
        this.state.products.length > 0 &&
            <div className="table-responsive">
                <table className="product_table table">
                    <thead>
                        <tr>
                            <td>Id</td>
                            <td>Name</td>
                            <td>Price</td>
                            <td>Piece</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.products.map((product)=>{
                                    return(
                                        <tr key={product.product_id}>
                                            <td className="p-3">{product.product_id}</td>
                                            <td>{product.product_name}</td>
                                            <td>{product.product_price}</td>
                                            <td className="p-3">{product.product_qty}</td>
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
export default ProductSearchResult;