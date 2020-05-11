import React from 'react';
import PartSearchActions from '../actions/PartSearchActions';
import ProductSearchActions from '../actions/ProductSearchActions';
import PartSearchResult from './PartSearchResult';
import ProductSearchResult from './ProductSearchResult';

const initialState = {
    part_id: "",
    part_name: "",

    product_id: "",
    product_name: "",
    
    search_type: "part"
};

class Search extends React.Component{
    constructor(){
        super();
        this.state = initialState;
    }

    handleSubmit(e){
        if(this.state.search_type == "part"){
            PartSearchActions.search(this.state.part_id, this.state.part_name);
        }
        if(this.state.search_type == "product"){
            ProductSearchActions.search(this.state.product_id, this.state.product_name);
        }
    }

    render(){
        return(
            <div className="container">
                <h2 className="text-center mt-5">Keresés</h2>
                <div className="searchBox mx-auto mt-3">
                    <select onChange={(e) => {
                        let state = this.state;
                        state.search_type = e.target.value;
                        this.setState(state);
                         }} className="form-control mb-3">
                        <option value="part">Alkatrész</option>
                        <option value="product">Termék</option>
                    </select>
                    
                    <input type={"number"} placeholder="ID" className="form-control mb-3" onChange={(e) => {
                        let state = this.state;
                        state.part_id = "";
                        state.product_id = "";
                        if(state.search_type == "part"){
                            state.part_id = e.target.value;
                        }else{
                            state.product_id = e.target.value;
                        }
                        this.setState(state);
                    }}/>

                    <input type={"text"} placeholder="Megnevezés" className="form-control" onChange={(e) => {
                        let state = this.state;
                        state.part_name = "";
                        state.product_name = "";
                        if(state.search_type == "part"){
                            state.part_name = e.target.value;
                        }else{
                            state.product_name = e.target.value;
                        }
                        this.setState(state);
                    }} />

                    <button type="submit" className="btn btn-primary mt-2" onClick={(e) => this.handleSubmit(e)}>Keresés</button>
                </div>

                <PartSearchResult />
                <ProductSearchResult />
            </div>
        );
    }
}

export default Search;