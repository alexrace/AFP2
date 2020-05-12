import React from 'react';
import ProductStore from '../stores/ProductStore';
import ProductDeleteActions from '../actions/ProductDeleteActions';
import ProductSearchActions from '../actions/ProductSearchActions';

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

    handleDelete(product_id){
        ProductDeleteActions.delete(product_id);
    }

    render(){
        return(
            <div className="table-responsive">
                <table className="product_table table">
                    <thead>
                        <tr>
                            <td>Id</td>
                            <td>Name</td>
                            <td>Price</td>
                            <td>Description</td>
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
                                            <td>{product.product_price}</td>
                                            <td className="p-3">{product.description}</td>
                                            <td><button className="btn btn-danger btn-sm" onClick={() => this.handleDelete(product.product_id)}>Törlés</button></td>
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