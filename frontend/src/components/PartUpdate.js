import React from 'react';
import PartUpdateActions from '../actions/PartUpdateActions';

class PartUpdate extends React.Component{
    constructor(){
        super();
        this.state={
            part_id : "",
            part_name : "",
            part_price : "",
            description : ""
        }
    }

    render(){
        return(
            <div className="updateForm mx-auto mt-5">
                <h3 className="text-center">Alkatrész szerkesztése</h3>
                <div className="table-responsive">
                    <table className="table borderless">
                        <tr>
                            <td>Id</td>
                            <td><input 
                                    type={"number"}
                                    value={this.state.part_id}
                                    onChange={(e)=>{
                                        let st = this.state;
                                        st.part_id = e.target.value;
                                        this.setState(st);}}
                                /></td>
                        </tr>
                        <tr>
                            <td>Name</td>
                            <td><input type={"text"}
                                        value={this.state.part_name}
                                        onChange={(e)=>{
                                            let st = this.state;
                                            st.part_name = e.target.value;
                                            this.setState(st);
                                        }}           
                            /></td>
                        </tr>
                        <tr>
                            <td>Price</td>
                            <td><input type={"number"}
                                        value={this.state.part_price}
                                        onChange={(e)=>{
                                            let st = this.state;
                                            st.part_price = e.target.value;
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
                                    onClick={()=>{PartUpdateActions.update(this.state.part_id, this.state.part_name,this.state.part_price,this.state.description)}}
                                    >Update
                                </button>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        );
    }
}

export default PartUpdate;