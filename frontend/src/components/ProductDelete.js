import React from 'react';
import ProductDeleteActions from '../actions/ProductDeleteActions';

class ProductDelete extends React.Component{
    constructor(){
        super();
        this.state={
            product_id : ""
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
                        <td 
                         colSpan={2}>
                            <button
                                 className="btn btn-info"
                                 onClick={()=>{ProductDeleteActions.delete(this.state.product_id)}}
                                >Delete
                            </button>
                        </td>
                    </tr>
                </table>
            </div>
        );
    }
}

export default ProductDelete;