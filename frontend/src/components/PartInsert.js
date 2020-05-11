import React from 'react';
import PartInsertActions from '../actions/PartInsertActions';

class PartInsert extends React.Component{
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
            <div className="insertForm mx-auto mt-5">
                <h3 className="text-center">Alkatrész létrehozása</h3>
                <div className="table-responsive">
                    <table className="table borderless">
                        <tbody>
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
                                        onClick={()=>{PartInsertActions.insert(this.state.part_id, this.state.part_name,this.state.part_price,this.state.description)}}
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

export default PartInsert;