import React from 'react';
import InventoryPartStore from '../stores/InventoryPartStore';

class InventoryPartSearchResult extends React.Component{

    constructor(){
        super();
        this.state= {parts : []};
        this._onChange = this._onChange.bind(this);
    }

    _onChange(){
        this.setState({parts : InventoryPartStore._parts})
    }

    componentDidMount(){
        InventoryPartStore.addChangeListener(this._onChange)
    }

    componentWillUnmount(){
        InventoryPartStore.removeChangeListener(this._onChange);
    }

    render(){
        return(
            <div className="table-responsive">
                <h3 className="text-center">Alkatrészek</h3>
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
                            this.state.parts.map((part)=>{
                                    return(
                                        <tr key={part.part_id}>
                                            <td className="p-3">{part.part_id}</td>
                                            <td>{part.part_name}</td>
                                            <td>{part.qty}</td>
                                            <td className="p-3">{part.availability}</td>
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
export default InventoryPartSearchResult;