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
    if(payload.action.actionType==='PRODUCT_UPDATE'){
        if(payload.action.payload.product_id!==''){
            axios.put('/products/'+payload.action.payload.product_id,{
            product_id : payload.action.payload.product_id,
            product_name : payload.action.payload.product_name,
            product_price : payload.action.payload.product_price,
            product_qty : payload.action.payload.product_qty
            }).then(resp=>{console.log(resp.data)}).catch(error => {console.log(error) });
        }
    }
    if(payload.action.actionType==='PRODUCT_DELETE'){
        axios.delete('/products/'+payload.action.payload.product_id).then(resp=>{
            console.log(resp.data)}).catch(error =>{console.log(error);
        });
        console.log('Deleted')
    }
    if(payload.action.actionType === 'PRODUCT_INSERT'){
        
        axios.post('/products',{
            product_id : payload.action.payload.product_id,
            product_name : payload.action.payload.product_name,
            product_price : payload.action.payload.product_price,
            product_qty : payload.action.payload.product_qty
        }).then(resp=>{console.log(resp.data)}).catch(error => {console.log(error) });
        console.log('Inserted');
    }
    if(payload.action.actionType === 'PRODUCT_SEARCH'){
        if(payload.action.payload.product_id !== ''){
            console.log('Id keresés');
             axios.get('/products').then((resp)=>{
                 store._products = resp.data.filter((product)=>{
                     // eslint-disable-next-line 
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
    }
    
});

export default dispatcher;