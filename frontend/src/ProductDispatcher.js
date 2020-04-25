import { Dispatcher } from "flux";
import axios from 'axios';
import store from './stores/ProductStore';

class ProductDispatcher extends Dispatcher{

    handleViewAction(action){
        this.dispatch({
            action : action
        });
    }
}

const dispatcher = new ProductDispatcher();

dispatcher.register((payload)=>{
    if(payload.action.actionType !== 'PRODUCT_SEARCH'){
        return;   
    }
    if(payload.action.payload.product_id !== ''){
       console.log('Id keresés');
        axios.get('/products').then((resp)=>{
            store._products = resp.data.filter((product)=>{
                return product.product_id == payload.action.payload.product_id;
            });
            store.emitChange();
        })
    }
    else{
        console.log('Név keresés');
        axios.get('/products').then((resp)=>{
            store._products = resp.data.filter((product)=>{
                return product.product_name.includes(payload.action.payload.product_name)
            });
            store.emitChange();
        })
    }
});

export default dispatcher;