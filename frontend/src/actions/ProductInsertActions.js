import dispatcher from '../AppDispatcher';

class ProductInsertActions{
    
    insert(product_id, product_name,product_price,product_qty){
        dispatcher.handleViewAction({
            actionType : 'PRODUCT_INSERT',
            payload : {
                product_id : product_id,
                product_name : product_name,
                product_price : product_price,
                product_qty : product_qty
                
            }
        });
    }
}

export default new ProductInsertActions();