import React from 'react';
import ProductSearchActions from '../actions/ProductSearchActions';

class ProductSearch extends React.Component{
    constructor(){
        super();
        this.state={
            product_id : "",
            product_name : ""
        }
    }

    render(){
        return(
            <div>
                <table>
                    <tr>
                        <td>Id</td>
                        <td><input 
                                type={"number"}
                                value={this.state.product_id}
                                onChange={(e)=>{
                                    let st = this.state;
                                    st.product_id = e.target.value;
                                    this.setState(st);}}
                            /></td>
                    </tr>
                    <tr>
                        <td>Name</td>
                        <td><input type={"text"}
                                    value={this.state.product_name}
                                    onChange={(e)=>{
                                        let st = this.state;
                                        st.product_name = e.target.value;
                                        this.setState(st);
                                    }}           
                        /></td>
                    </tr>
                    <tr>
                        <td 
                         colSpan={2}>
                            <button
                                 className="btn btn-info"
                                 onClick={()=>{ProductSearchActions.search(this.state.product_id, this.state.product_name)}}
                                >Search
                            </button>
                        </td>
                    </tr>
                </table>
            </div>
        );
    }
}

export default ProductSearch;