import { Dispatcher } from "flux";
import axios from 'axios';
import partStore from './stores/PartStore';
import productStore from './stores/ProductStore';
import InventoryPartStore from './stores/InventoryPartStore';
import InventoryProductStore from './stores/InventoryProductStore';

class AppDispatcher extends Dispatcher{
    handleViewAction(action){
        this.dispatch({
            action: action
        });
    }
}

const dispatcher = new AppDispatcher();

dispatcher.register((payload) => {
    switch(payload.action.actionType){
        case 'PRODUCT_SEARCH':
            if(payload.action.payload.product_id !== ''){
                console.log('Product keresés ID alapján');
                 axios.get('/products/'+payload.action.payload.product_id).then((resp)=>{
                     productStore._products = resp.data;
                     productStore.emitChange();
                 });
             }else{
                console.log('Product keresés név alapján');
                axios.get('/products').then((resp)=>{
                    productStore._products = resp.data.filter((product)=>{
                        return product.product_name.includes(payload.action.payload.product_name)
                    });
                    productStore.emitChange();
                });
             }
        break;
        case 'PART_SEARCH':
            if(payload.action.payload.part_id !== ''){
                console.log('Part keresés ID alapján');
                 axios.get('/parts/'+payload.action.payload.part_id).then((resp)=>{
                     partStore._parts = resp.data;
                     partStore.emitChange();
                 });
             }
             else{
                 console.log('Part keresés név alapján');
                 axios.get('/parts').then((resp)=>{
                     partStore._parts = resp.data.filter((part)=>{
                         return part.part_name.includes(payload.action.payload.part_name)
                     });
                     partStore.emitChange();
                 });
             }
        break;
        case 'PRODUCT_INSERT':
            axios.post('/products',{
                product_id : payload.action.payload.product_id,
                product_name : payload.action.payload.product_name,
                product_price : payload.action.payload.product_price,
                description : payload.action.payload.description
            }).then(resp=>{alert(resp.data.description)}).catch(error => {alert(error.response.data.description) });
        break;
        case 'PRODUCT_UPDATE':
            if(payload.action.payload.product_id !== ''){
                axios.put('/products/'+payload.action.payload.product_id,{
                product_id : payload.action.payload.product_id,
                product_name : payload.action.payload.product_name,
                product_price : payload.action.payload.product_price,
                description : payload.action.payload.description
                }).then(resp=>{alert(resp.data.description)}).catch(error => {alert(error.response.data.description) });
            }
        break;
        case 'PRODUCT_DELETE':
            axios.delete('/products/'+payload.action.payload.product_id).then(resp=>{alert(resp.data.description)}).catch(error => {alert(error.response.data.description) });
        break;
        case 'PART_INSERT':
            axios.post('/parts',{
                part_id : payload.action.payload.part_id,
                part_name : payload.action.payload.part_name,
                part_price : payload.action.payload.part_price,
                description : payload.action.payload.description
            }).then(resp=>{alert(resp.data.description)}).catch(error => {alert(error.response.data.description) });
        break;
        case 'PART_UPDATE':
            if(payload.action.payload.product_id !== ''){
                axios.put('/parts/'+payload.action.payload.part_id,{
                    part_id : payload.action.payload.part_id,
                    part_name : payload.action.payload.part_name,
                    part_price : payload.action.payload.part_price,
                    description : payload.action.payload.description
                }).then(resp=>{alert(resp.data.description)}).catch(error => {alert(error.response.data.description) });
            }
        break;
        case 'PART_DELETE':
            axios.delete('/parts/'+payload.action.payload.part_id).then(resp=>{alert(resp.data.description)}).catch(error => {alert(error.response.data.description) });
        break;
        case 'INVENTORY_PART_SEARCH':
            axios.get('/inventory/'+payload.action.payload.inventory_type+'/'+payload.action.payload.inventory_id).then(resp => {
                InventoryPartStore._parts = resp.data.inventories;
                InventoryPartStore.emitChange();
            });
        break;
        case 'INVENTORY_PRODUCT_SEARCH':
            axios.get('/inventory/'+payload.action.payload.inventory_type+'/'+payload.action.payload.inventory_id).then(resp => {
                InventoryProductStore._products = resp.data.inventories;
                InventoryProductStore.emitChange();
            });
        break;
        case 'PART_REQUIRE':
            axios.post('/parts/order',{
                part_id : payload.action.payload.part_id,
                part_qty : payload.action.payload.part_qty
            }).then(resp=>{alert(resp.data.description)}).catch(error => {alert(error.response.data.description) });
        break;
        case 'PRODUCT_SELL':
            axios.post('products/sell',{
                product_id : payload.action.payload.product_id,
                qty : payload.action.payload.qty
            }).then(resp=>{alert(resp.data.description)}).catch(error => {alert(error.response.data.description) });
        break;
        case 'INVENTORY_PART_REQUIRE':
            axios.post('parts/require', {
                part_id: payload.action.payload.part_id,
                part_qty: payload.action.payload.part_qty
            }).then(resp=>{alert(resp.data.description)}).catch(error => {alert(error.response.data.description) });
        break;
        default:
            return;
    }
});

export default dispatcher;