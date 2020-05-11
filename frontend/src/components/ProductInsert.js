import React from 'react';
import ProductInsertActions from '../actions/ProductInsertActions';

class ProductInsert extends React.Component{
    constructor(){
        super();
        this.state={
            product_id : "",
            product_name : "",
            product_price : "",
            description : ""
        }
    }

    render(){
        return(
            <div className="insertForm mx-auto mt-5">
                <h3 className="text-center">Termék létrehozása</h3>
                <div className="table-responsive">
                    <table class="table borderless">
                        <tbody>
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
                                <td>Price</td>
                                <td><input type={"number"}
                                            value={this.state.product_price}
                                            onChange={(e)=>{
                                                let st = this.state;
                                                st.product_price = e.target.value;
                                                this.setState(st);
                                            }}           
                                /></td>
                            </tr>
                            <tr>
                                <td>Description</td>
                                <td><input type={"text"}
                                            value={this.state.description}
                                            onChange={(e)=>{
                                                let st = this.state;
                                                st.description = e.target.value;
                                                this.setState(st);
                                            }}           
                                /></td>
                            </tr>
                            <tr>
                                <td 
                                colSpan={2}>
                                    <button
                                        className="btn btn-info"
                                        onClick={()=>{ProductInsertActions.insert(this.state.product_id, this.state.product_name,this.state.product_price,this.state.description)}}
                                        >Insert
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default ProductInsert;