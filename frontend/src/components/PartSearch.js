import React from 'react';
import PartSearchActions from '../actions/PartSearchActions';

class PartSearch extends React.Component{
    constructor(){
        super();
        this.state={
            part_id : "",
            part_name : ""
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
                        <td 
                         colSpan={2}>
                            <button
                                 className="btn btn-info"
                                 onClick={()=>{PartSearchActions.search(this.state.part_id, this.state.part_name)}}
                                >Search
                            </button>
                        </td>
                    </tr>
                </table>
            </div>
        );
    }
}

export default PartSearch;