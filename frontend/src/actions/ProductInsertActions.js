import dispatcher from '../AppDispatcher';

class ProductInsertActions{
    
    insert(product_id, product_name,product_price,description){
        dispatcher.handleViewAction({
            actionType : 'PRODUCT_INSERT',
            payload : {
                product_id : product_id,
                product_name : product_name,
                product_price : product_price,
                description : description
                
            }
        });
    }
}

export default new ProductInsertActions();