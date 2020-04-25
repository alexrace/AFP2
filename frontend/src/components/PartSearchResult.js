import React from 'react';
import PartStore from '../stores/PartStore';

class PartSearchResult extends React.Component{

    constructor(){
        super();
        this.state= {parts : []};
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

    render(){
        return(
           <table className="part_table">
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
                       this.state.parts.map((part)=>{
                            return(
                                <tr key={part.part_id}>
                                    <td className="p-3">{part.part_id}</td>
                                    <td>{part.part_name}</td>
                                    <td>{part.part_price}</td>
                                    <td className="p-3">{part.part_qty}</td>
                                </tr>
                            );
                       })
                   }
               </tbody>
           </table>
        );
    }
}
export default PartSearchResult;