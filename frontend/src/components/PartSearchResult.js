import React from 'react';
import PartStore from '../stores/PartStore';
import PartDeleteActions from '../actions/PartDeleteActions';
import PartSearchActions from '../actions/PartSearchActions';

class PartSearchResult extends React.Component{

    constructor(){
        super();
        this.state= {parts : [],part_qty : 0};
        this._onChange = this._onChange.bind(this);
    }

    _onChange(){
        this.setState({parts : PartStore._parts})
    }

    componentDidMount(){
        PartStore.addChangeListener(this._onChange)
    }

    componentWillUnmount(){
        PartStore.removeChangeListener(this._onChange);
    }

    handleDelete(part_id){
        PartDeleteActions.delete(part_id);
    }
    
    handleOrder(part_id,part_qty){
        PartSearchActions.require(part_id,part_qty);
    }

    render(){
        return(
                <div className="table-responsive">
                    <table className="part_table table">
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
                                this.state.parts.map((part)=>{
                                        return(
                                            <tr key={part.part_id}>
                                                <td className="p-3">{part.part_id}</td>
                                                <td>{part.part_name}</td>
                                                <td>{part.part_price}</td>
                                                <td className="p-3">{part.description}</td>
                                                <td> <input type='number' class="form-control" placeholder="Mennyiség" onChange={(e)=>{
                                                    let state = this.state;
                                                    state.part_qty = e.target.value;
                                                    this.setState(state);
                                                }}></input> <button className="btn btn-sm btn-info" onClick={() => this.handleOrder(part.part_id,this.state.part_qty)}>Rendelés</button>
                                                    <button className="btn btn-sm btn-danger" onClick={() => this.handleDelete(part.part_id)}>Törlés</button></td>
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
export default PartSearchResult;